import type { Input } from "./Input";
import type { ArenaMode, SaveData } from "./types";
import { BASE } from "./constants";
import { stingBuy, stingSpend } from "./sfx";
import { stillUrlFor, LOOK_DEFS, lookById } from "./stills";
import { lookFromStill } from "./lookFromStill";
import {
  AMATEUR_BLOCK_CAP,
  ARMORS,
  armorById,
  BASE_ATTIRE,
  BARE_HAND,
  SKILL_TRACK_LEN,
  WEAPONS,
  weaponById,
  type ArmorDef,
  type WeaponDef,
} from "./gear";

export type HubRoom = "plaza" | "home" | "shop" | "arena";

type HomeTab = "look" | "skills" | "loadout";
type ShopTab = "weapons" | "armors";
type BlockTrack = "stamina" | "struggle" | "tickle";

const HOME_TABS: HomeTab[] = ["look", "skills", "loadout"];
const SHOP_TABS: ShopTab[] = ["weapons", "armors"];
const SKILL_ORDER: BlockTrack[] = ["stamina", "struggle", "tickle"];
const ARENA_MODES: ArenaMode[] = ["team-quick", "team-timed", "ffa-timed", "ffa-quick"];
const LOOK_COLS = 7;

const FLAT: Record<BlockTrack, number> = {
  stamina: 2,
  struggle: 3.5,
  tickle: 1.5,
};

const BASE_FLAT: Record<BlockTrack, number> = {
  stamina: BASE.stamina,
  struggle: BASE.struggle,
  tickle: BASE.tickle,
};

const TRACK_LABEL: Record<BlockTrack, string> = {
  stamina: "Stamina",
  struggle: "Escape",
  tickle: "Tickle",
};

export class Hub {
  room: HubRoom = "plaza";

  private overlay: HTMLElement;
  private getSave: () => SaveData;
  private persist: () => void;
  private onPlay: (mode: ArenaMode) => void;
  private root: HTMLElement | null = null;
  private bound = false;
  private homeTab: HomeTab = "look";
  private shopTab: ShopTab = "weapons";
  private laughTimer = 0;
  private laughUntil = 0;
  private focus = 0;
  private arenaFocus = 0;
  private loadoutItems: { kind: "weapon" | "armor"; id: number }[] = [];

  constructor(
    overlay: HTMLElement,
    getSave: () => SaveData,
    persist: () => void,
    onPlay: (mode: ArenaMode) => void,
  ) {
    this.overlay = overlay;
    this.getSave = getSave;
    this.persist = persist;
    this.onPlay = onPlay;
  }

  /** Call after overlay HTML exists. Finds #hub-root inside overlay. */
  bind(): void {
    const root = this.overlay.querySelector("#hub-root");
    if (!(root instanceof HTMLElement)) return;
    this.root = root;

    const existing = this.overlay.querySelector("#elara-still");
    const elaraOutside = !!(existing && !root.contains(existing));
    root.innerHTML = shellHtml(!elaraOutside);

    if (!this.bound) {
      root.addEventListener("click", (e) => this.onClick(e));
      this.bound = true;
    }
    this.show(this.room);
    this.render();
  }

  /** Rebuild panels from current save. */
  render(): void {
    const root = this.root;
    if (!root) return;
    const save = this.getSave();
    const w = weaponById(save.weapon);
    const a = armorById(save.armor);

    const stat = root.querySelector("#statline");
    if (stat) {
      stat.textContent = `Elara Case  ·  Lv ${save.level}  ·  ${save.coins} coins  ·  ${save.unspent} skill pts  ·  ${w.name} / ${a.name}`;
    }

    this.syncTabs(root);
    this.renderLook(root, save);
    this.renderSkills(root, save);
    this.renderLoadout(root, save);
    this.renderShop(root, save);
    this.renderArena(root, save, w, a);
    this.paintFocus();
    this.syncPadHint();
  }

  /**
   * Xbox: plaza X Home / Y Shop / RB Arena / A Play.
   * Rooms: D-pad or LS move, A confirm, LB/RB tabs, B plaza.
   * Return true if confirm was consumed (do not start match).
   */
  handlePad(input: Input): boolean {
    if (this.room === "plaza") {
      if (input.padHome) this.show("home");
      else if (input.padShop) this.show("shop");
      else if (input.padArena) this.show("arena");
      return false;
    }

    if (input.back) {
      this.show("plaza");
      return true;
    }

    if (input.padTabPrev) this.cycleTab(-1);
    if (input.padTabNext) this.cycleTab(1);
    if (input.padLeft) this.moveFocus(-1, 0);
    if (input.padRight) this.moveFocus(1, 0);
    if (input.padUp) this.moveFocus(0, -1);
    if (input.padDown) this.moveFocus(0, 1);

    if (input.confirm) {
      this.activateFocus();
      return true;
    }
    return false;
  }

  get laughing(): boolean {
    return performance.now() < this.laughUntil;
  }

  debugPad(): {
    room: HubRoom;
    homeTab: HomeTab;
    shopTab: ShopTab;
    focus: number;
    arenaMode: ArenaMode;
  } {
    return {
      room: this.room,
      homeTab: this.homeTab,
      shopTab: this.shopTab,
      focus: this.focus,
      arenaMode: ARENA_MODES[this.arenaFocus] ?? "team-quick",
    };
  }

  show(room: HubRoom): void {
    const changed = this.room !== room;
    this.room = room;
    const root = this.root;
    if (!root) return;
    for (const id of ["plaza", "home", "shop", "arena"] as const) {
      root.querySelector(`#hub-${id}`)?.classList.toggle("on", id === room);
    }
    const back = root.querySelector("#hub-back") as HTMLElement | null;
    const panel = root.querySelector(`#hub-${room}`);
    if (back) {
      back.hidden = room === "plaza";
      if (panel && room !== "plaza") panel.prepend(back);
    }
    if (room === "home" || room === "shop") this.syncTabs(root);
    if (changed) this.resetFocus();
    this.paintFocus();
    this.syncPadHint();
  }

  private onClick(e: Event): void {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const hit = t.closest(
      "[data-hub], #hub-back, #play, #arena-start, #arena-timed, #arena-ffa-timed, #arena-ffa-quick, #btn-laugh",
    ) as HTMLElement | null;
    if (!hit) return;
    const act = hit.getAttribute("data-hub") ?? hit.id;

    switch (act) {
      case "hub-back":
        this.show("plaza");
        return;
      case "door-home":
        this.show("home");
        return;
      case "door-shop":
        this.show("shop");
        return;
      case "door-arena":
        this.show("arena");
        return;
      case "play":
      case "arena-start":
        this.onPlay("team-quick");
        return;
      case "arena-timed":
        this.onPlay("team-timed");
        return;
      case "arena-ffa-quick":
        this.onPlay("ffa-quick");
        return;
      case "arena-ffa-timed":
        this.onPlay("ffa-timed");
        return;
      case "tab-look":
        this.homeTab = "look";
        this.resetFocus();
        this.syncTabs(this.root);
        this.paintFocus();
        return;
      case "tab-skills":
        this.homeTab = "skills";
        this.resetFocus();
        this.syncTabs(this.root);
        this.paintFocus();
        return;
      case "tab-loadout":
        this.homeTab = "loadout";
        this.resetFocus();
        this.syncTabs(this.root);
        this.paintFocus();
        return;
      case "tab-weapons":
        this.shopTab = "weapons";
        this.resetFocus();
        this.syncTabs(this.root);
        this.paintFocus();
        return;
      case "tab-armors":
        this.shopTab = "armors";
        this.resetFocus();
        this.syncTabs(this.root);
        this.paintFocus();
        return;
      case "btn-laugh":
        this.previewLaugh();
        return;
      case "spend-stamina":
        this.spend("stamina");
        return;
      case "spend-struggle":
        this.spend("struggle");
        return;
      case "spend-tickle":
        this.spend("tickle");
        return;
      case "equip": {
        const kind = hit.getAttribute("data-kind");
        const id = Number(hit.getAttribute("data-id"));
        if (kind === "weapon" || kind === "armor") this.equip(kind, id);
        return;
      }
      case "buy": {
        const kind = hit.getAttribute("data-kind");
        const id = Number(hit.getAttribute("data-id"));
        if (kind === "weapon" || kind === "armor") this.buy(kind, id);
        return;
      }
      case "pick-look": {
        const id = Number(hit.getAttribute("data-id"));
        this.pickLook(id);
        return;
      }
      default:
        return;
    }
  }

  private cycleTab(dir: number): void {
    if (this.room === "home") {
      const i = HOME_TABS.indexOf(this.homeTab);
      this.homeTab = HOME_TABS[(i + dir + HOME_TABS.length) % HOME_TABS.length];
      this.resetFocus();
      this.syncTabs(this.root);
      this.paintFocus();
      this.syncPadHint();
      return;
    }
    if (this.room === "shop") {
      const i = SHOP_TABS.indexOf(this.shopTab);
      this.shopTab = SHOP_TABS[(i + dir + SHOP_TABS.length) % SHOP_TABS.length];
      this.resetFocus();
      this.syncTabs(this.root);
      this.paintFocus();
      this.syncPadHint();
    }
  }

  private resetFocus(): void {
    const save = this.getSave();
    if (this.room === "home" && this.homeTab === "look") this.focus = save.look;
    else if (this.room === "home" && this.homeTab === "skills") this.focus = 0;
    else if (this.room === "home" && this.homeTab === "loadout") {
      const idx = this.loadoutItems.findIndex((x) => x.kind === "weapon" && x.id === save.weapon);
      this.focus = idx >= 0 ? idx : 0;
    } else if (this.room === "shop" && this.shopTab === "weapons") this.focus = save.weapon;
    else if (this.room === "shop" && this.shopTab === "armors") this.focus = save.armor;
    else if (this.room === "arena") this.focus = this.arenaFocus;
    else this.focus = 0;
  }

  private focusCount(): number {
    if (this.room === "home" && this.homeTab === "look") return LOOK_DEFS.length;
    if (this.room === "home" && this.homeTab === "skills") return SKILL_ORDER.length;
    if (this.room === "home" && this.homeTab === "loadout") return Math.max(1, this.loadoutItems.length);
    if (this.room === "shop" && this.shopTab === "weapons") return WEAPONS.length + 1;
    if (this.room === "shop" && this.shopTab === "armors") return ARMORS.length + 1;
    if (this.room === "arena") return ARENA_MODES.length;
    return 1;
  }

  private moveFocus(dx: number, dy: number): void {
    const n = this.focusCount();
    if (this.room === "home" && this.homeTab === "look") {
      if (dx) this.focus = (this.focus + dx + n) % n;
      if (dy) this.focus = Math.max(0, Math.min(n - 1, this.focus + dy * LOOK_COLS));
    } else {
      const step = dx || dy;
      if (step) this.focus = (this.focus + step + n) % n;
      if (this.room === "arena") this.arenaFocus = this.focus;
    }
    this.paintFocus();
    this.syncPadHint();
  }

  private activateFocus(): void {
    if (this.room === "home" && this.homeTab === "look") {
      this.pickLook(this.focus);
      return;
    }
    if (this.room === "home" && this.homeTab === "skills") {
      const track = SKILL_ORDER[this.focus];
      if (track) this.spend(track);
      return;
    }
    if (this.room === "home" && this.homeTab === "loadout") {
      const item = this.loadoutItems[this.focus];
      if (item) this.equip(item.kind, item.id);
      return;
    }
    if (this.room === "shop") {
      const kind = this.shopTab === "weapons" ? "weapon" : "armor";
      this.buy(kind, this.focus);
      return;
    }
    if (this.room === "arena") {
      this.arenaFocus = this.focus;
      this.onPlay(ARENA_MODES[this.arenaFocus] ?? "team-quick");
    }
  }

  private paintFocus(): void {
    const root = this.root;
    if (!root || this.room === "plaza") return;
    root.querySelectorAll(".focus").forEach((el) => el.classList.remove("focus"));
    const sel = `[data-focus="${this.room === "arena" ? this.arenaFocus : this.focus}"]`;
    const scope =
      this.room === "home"
        ? this.homeTab === "look"
          ? root.querySelector("#look-grid")
          : this.homeTab === "skills"
            ? root.querySelector("#home-skills")
            : root.querySelector("#loadout-list")
        : this.room === "shop"
          ? this.shopTab === "weapons"
            ? root.querySelector("#shop-weapons")
            : root.querySelector("#shop-armors")
          : root.querySelector("#hub-arena");
    const hit = (scope ?? root).querySelector(sel);
    hit?.classList.add("focus");
  }

  private syncPadHint(): void {
    const el = this.root?.querySelector("#hub-pad-hint");
    if (!el) return;
    if (this.room === "plaza") {
      el.textContent = "Xbox: A / Menu Play · X Home · Y Shop · RB Arena · B back";
      return;
    }
    const where =
      this.room === "home"
        ? this.homeTab
        : this.room === "shop"
          ? this.shopTab
          : "mode";
    el.textContent = `D-pad / LS move · A ${this.room === "arena" ? "Start" : "confirm"} · LB/RB ${where} tabs · B plaza`;
  }

  private spend(track: BlockTrack): void {
    const save = this.getSave();
    if (save.unspent < 1) return;
    if (save.blocks[track] >= AMATEUR_BLOCK_CAP) return;
    save.unspent -= 1;
    save.blocks[track] += 1;
    this.persist();
    stingSpend();
    this.render();
  }

  private pickLook(id: number): void {
    const def = lookById(id);
    const save = this.getSave();
    if (save.look === def.id) {
      this.previewLaugh();
      return;
    }
    save.look = def.id;
    this.focus = def.id;
    this.persist();
    this.render();
    this.previewLaugh();
  }

  private buy(kind: "weapon" | "armor", id: number): void {
    if (id === 0) return;
    const save = this.getSave();
    const def = kind === "weapon" ? weaponById(id) : armorById(id);
    if (def.id !== id) return;
    const owned = kind === "weapon" ? save.ownedWeapons : save.ownedArmors;
    if (owned.includes(id)) {
      this.equip(kind, id);
      return;
    }
    if (save.coins < def.price) {
      const note = this.root?.querySelector("#shop-note");
      if (note) note.textContent = `Need ${def.price} coins for ${def.name} — you have ${save.coins}.`;
      return;
    }
    save.coins -= def.price;
    owned.push(id);
    if (kind === "weapon") save.weapon = id;
    else save.armor = id;
    this.persist();
    stingBuy();
    this.render();
    const note = this.root?.querySelector("#shop-note");
    if (note) note.textContent = `Bought and equipped ${def.name}. Owned ids saved.`;
  }

  private equip(kind: "weapon" | "armor", id: number): void {
    const save = this.getSave();
    const owned = kind === "weapon" ? save.ownedWeapons : save.ownedArmors;
    if (!owned.includes(id) && id !== 0) return;
    if (kind === "weapon") save.weapon = id;
    else save.armor = id;
    this.persist();
    this.render();
  }

  private previewLaugh(): void {
    const el = this.root?.querySelector("#look-preview");
    if (!el) return;
    el.classList.add("laughing");
    this.laughUntil = performance.now() + 2000;
    window.clearTimeout(this.laughTimer);
    this.laughTimer = window.setTimeout(() => el.classList.remove("laughing"), 2000);
  }

  private syncTabs(root: HTMLElement | null): void {
    if (!root) return;
    root.querySelector("#tab-look")?.classList.toggle("on", this.homeTab === "look");
    root.querySelector("#tab-skills")?.classList.toggle("on", this.homeTab === "skills");
    root.querySelector("#tab-loadout")?.classList.toggle("on", this.homeTab === "loadout");
    root.querySelector("#home-look")?.classList.toggle("on", this.homeTab === "look");
    root.querySelector("#home-skills")?.classList.toggle("on", this.homeTab === "skills");
    root.querySelector("#home-loadout")?.classList.toggle("on", this.homeTab === "loadout");
    root.querySelector("#tab-weapons")?.classList.toggle("on", this.shopTab === "weapons");
    root.querySelector("#tab-armors")?.classList.toggle("on", this.shopTab === "armors");
    root.querySelector("#shop-weapons")?.classList.toggle("on", this.shopTab === "weapons");
    root.querySelector("#shop-armors")?.classList.toggle("on", this.shopTab === "armors");
  }

  private renderLook(root: HTMLElement, save: SaveData): void {
    const def = lookById(save.look);
    const name = root.querySelector("#look-name");
    if (name) {
      name.textContent = def.metalException
        ? `${def.display} · default · metal exception (earrings + pendant)`
        : `${def.display} · Amateur 12 · metal-free`;
    }
    const img = root.querySelector("#look-preview img") as HTMLImageElement | null;
    const plaza = this.overlay.querySelector("#elara-still") as HTMLImageElement | null;
    const url = stillUrlFor(def.slug);
    if (url) {
      lookFromStill(url).then((kit) => {
        if (img) {
          img.src = kit.keyedUrl;
          img.alt = def.display;
        }
        if (plaza) {
          plaza.src = kit.keyedUrl;
          plaza.alt = def.display;
          plaza.hidden = false;
        }
      });
    }
    const grid = root.querySelector("#look-grid");
    if (grid) {
      grid.innerHTML = LOOK_DEFS.map((l) => {
        const u = stillUrlFor(l.slug) ?? "";
        const on = l.id === save.look ? " on" : "";
        return `<button type="button" class="look-chip${on}" data-hub="pick-look" data-id="${l.id}" data-focus="${l.id}" title="${esc(l.display)}">
          <img data-look="${l.id}" alt="${esc(l.display)}" ${u ? "" : "hidden"} />
          <span>${esc(l.display.split(" ")[0] ?? l.display)}</span>
        </button>`;
      }).join("");
      for (const l of LOOK_DEFS) {
        const u = stillUrlFor(l.slug);
        if (!u) continue;
        lookFromStill(u).then((kit) => {
          const thumb = grid.querySelector(`img[data-look="${l.id}"]`) as HTMLImageElement | null;
          if (thumb) {
            thumb.src = kit.keyedUrl;
            thumb.hidden = false;
          }
        });
      }
    }
  }

  private renderSkills(root: HTMLElement, save: SaveData): void {
    const unspent = root.querySelector("#skill-unspent");
    if (unspent) unspent.textContent = `${save.unspent} unspent`;

    for (const track of ["stamina", "struggle", "tickle"] as const) {
      const n = save.blocks[track];
      const flat = BASE_FLAT[track] + FLAT[track] * n;
      const row = root.querySelector(`[data-track="${track}"]`);
      if (!row) continue;
      const meta = row.querySelector(".skill-meta");
      if (meta) {
        meta.textContent = `${n} / ${AMATEUR_BLOCK_CAP}  ·  flat ${fmtFlat(flat)}  ·  +${FLAT[track]} / block`;
      }
      const cells = row.querySelectorAll(".skill-cells i");
      cells.forEach((c, i) => {
        c.classList.toggle("on", i < n);
        c.classList.toggle("lock", i >= AMATEUR_BLOCK_CAP);
      });
      const btn = row.querySelector("button") as HTMLButtonElement | null;
      if (btn) btn.disabled = save.unspent < 1 || n >= AMATEUR_BLOCK_CAP;
    }
  }

  private renderLoadout(root: HTMLElement, save: SaveData): void {
    const list = root.querySelector("#loadout-list");
    if (!list) return;
    const weapons = ownedDefs(save.ownedWeapons, weaponById, BARE_HAND);
    const armors = ownedDefs(save.ownedArmors, armorById, BASE_ATTIRE);
    list.innerHTML =
      `<h3 class="hub-subhead">Weapons</h3>` +
      weapons.map((d, i) => loadoutRow("weapon", d, save.weapon, pctWeapon(d), i)).join("") +
      `<h3 class="hub-subhead">Armors</h3>` +
      armors.map((d, i) => loadoutRow("armor", d, save.armor, pctArmor(d), weapons.length + i)).join("");
    this.loadoutItems = [
      ...weapons.map((d) => ({ kind: "weapon" as const, id: d.id })),
      ...armors.map((d) => ({ kind: "armor" as const, id: d.id })),
    ];
  }

  private renderShop(root: HTMLElement, save: SaveData): void {
    const coins = root.querySelector("#shop-coins");
    if (coins) coins.textContent = `${save.coins} coins`;
    const note = root.querySelector("#shop-note");
    if (note && !note.textContent) note.textContent = "Buy spends coins. Equip is immediate. Ids persist.";

    const wList = root.querySelector("#shop-weapons");
    if (wList) {
      wList.innerHTML = [BARE_HAND, ...WEAPONS]
        .map((d) => shopRow("weapon", d, save.ownedWeapons, save.weapon, save.coins, pctWeapon(d)))
        .join("");
    }
    const aList = root.querySelector("#shop-armors");
    if (aList) {
      aList.innerHTML = [BASE_ATTIRE, ...ARMORS]
        .map((d) => shopRow("armor", d, save.ownedArmors, save.armor, save.coins, pctArmor(d)))
        .join("");
    }
  }

  private renderArena(root: HTMLElement, save: SaveData, w: WeaponDef, a: ArmorDef): void {
    const sum = root.querySelector("#arena-loadout");
    if (sum) {
      sum.textContent = `Loadout locks at Start · ${w.name} / ${a.name} · Lv ${save.level}`;
    }
    const cat = root.querySelector("#arena-catalog");
    if (cat) {
      const wRows = [BARE_HAND, ...WEAPONS]
        .map((d) => `<li>${esc(d.name)} · ${d.price ? `${d.price}c` : "free"} · ${esc(pctWeapon(d))}</li>`)
        .join("");
      const aRows = [BASE_ATTIRE, ...ARMORS]
        .map((d) => `<li>${esc(d.name)} · ${d.price ? `${d.price}c` : "free"} · ${esc(pctArmor(d))}</li>`)
        .join("");
      cat.innerHTML = `<div class="arena-cat-col"><h3 class="hub-subhead">Weapons</h3><ul class="arena-cat">${wRows}</ul></div>
        <div class="arena-cat-col"><h3 class="hub-subhead">Armors</h3><ul class="arena-cat">${aRows}</ul></div>`;
    }
  }
}

function fmtFlat(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function pctWeapon(d: WeaponDef): string {
  return d.ticklePct ? `+${Math.round(d.ticklePct * 100)}% tickle` : "no bonus";
}

function pctArmor(d: ArmorDef): string {
  const bits: string[] = [];
  if (d.stamPct) bits.push(`+${Math.round(d.stamPct * 100)}% stam`);
  if (d.escPct) bits.push(`+${Math.round(d.escPct * 100)}% escape`);
  return bits.length ? bits.join(" / ") : "no bonus";
}

function ownedDefs<T extends { id: number }>(
  owned: number[],
  byId: (id: number) => T,
  fallback: T,
): T[] {
  const ids = [...new Set([0, ...owned])].sort((a, b) => a - b);
  return ids.map((id) => {
    const d = byId(id);
    return d.id === id ? d : fallback;
  });
}

function loadoutRow(
  kind: "weapon" | "armor",
  d: { id: number; name: string; blurb: string },
  equipped: number,
  pct: string,
  idx: number,
): string {
  const on = d.id === equipped ? " on" : "";
  return `<button type="button" class="hub-item${on}" data-hub="equip" data-kind="${kind}" data-id="${d.id}" data-focus="${idx}">
    <span class="hub-item-name">${esc(d.name)}</span>
    <span class="hub-item-meta">${esc(pct)} · ${d.id === equipped ? "equipped" : "equip"}</span>
  </button>`;
}

function shopRow(
  kind: "weapon" | "armor",
  d: { id: number; name: string; price: number; blurb: string },
  ownedIds: number[],
  equipped: number,
  coins: number,
  pct: string,
): string {
  const owned = d.id === 0 || ownedIds.includes(d.id);
  const eq = d.id === equipped;
  let status: string;
  let action = "";
  if (d.id === 0) {
    status = eq ? "owned · equipped · not for sale" : "owned · not for sale";
    action = `<button type="button" class="cta ghost" data-hub="equip" data-kind="${kind}" data-id="${d.id}">${eq ? "Equipped" : "Equip"}</button>`;
  } else if (eq) {
    status = "owned · equipped";
    action = `<button type="button" class="cta ghost" disabled>Equipped</button>`;
  } else if (owned) {
    status = "owned";
    action = `<button type="button" class="cta ghost" data-hub="equip" data-kind="${kind}" data-id="${d.id}">Equip</button>`;
  } else {
    const can = coins >= d.price;
    status = `${d.price} coins`;
    action = `<button type="button" class="cta${can ? "" : " ghost"}" data-hub="buy" data-kind="${kind}" data-id="${d.id}">${can ? "Buy" : `Need ${d.price}c`}</button>`;
  }
  return `<div class="hub-item${eq ? " on" : ""}" data-focus="${d.id}">
    <div class="hub-item-copy">
      <span class="hub-item-name">${esc(d.name)}</span>
      <span class="hub-item-meta">${esc(pct)} · ${esc(status)}</span>
    </div>
    ${action}
  </div>`;
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

function skillTrack(track: BlockTrack): string {
  const amateur = Array.from({ length: AMATEUR_BLOCK_CAP }, () => "<i></i>").join("");
  const locked = Array.from({ length: SKILL_TRACK_LEN - AMATEUR_BLOCK_CAP }, () => '<i class="lock"></i>').join("");
  return `<div class="skill-track" data-track="${track}" data-focus="${SKILL_ORDER.indexOf(track)}">
    <div class="skill-head">
      <span>${TRACK_LABEL[track]}</span>
      <span class="skill-meta"></span>
    </div>
    <div class="skill-cells amateur">${amateur}</div>
    <div class="skill-lock-label">Pro lock · ${SKILL_TRACK_LEN - AMATEUR_BLOCK_CAP} blocks</div>
    <div class="skill-cells pro">${locked}</div>
    <button type="button" class="cta" id="spend-${track}" data-hub="spend-${track}">Spend 1</button>
  </div>`;
}

function shellHtml(includeElara: boolean): string {
  const portrait = includeElara
    ? `<div class="player-card">
        <img id="elara-still" alt="Elara Case" />
        <div>
          <div class="player-label">Player</div>
          <div id="statline" class="statline"></div>
        </div>
      </div>`
    : `<div id="statline" class="statline"></div>`;

  return `
  <button type="button" class="cta ghost hub-back" id="hub-back" data-hub="hub-back" hidden>Back</button>
  <p class="statline" id="hub-pad-hint">Xbox: A / Menu Play · X Home · Y Shop · RB Arena · B back</p>
  <div id="hub-plaza" class="hub-panel on">
    <h1>Tickle Battle</h1>
    <p class="sub">Amateur Team Quick — 6v6, one life, last team standing. You play Elara Case. AI fill is Amateur 12 (metal-free).</p>
    ${portrait}
    <div id="roster" class="roster"></div>
    <div class="row hub-doors">
      <button type="button" class="cta ghost" id="door-home" data-hub="door-home">Home</button>
      <button type="button" class="cta ghost" id="door-shop" data-hub="door-shop">Shop</button>
      <button type="button" class="cta ghost" id="door-arena" data-hub="door-arena">Arena</button>
    </div>
    <div class="row">
      <button type="button" class="cta" id="play">Play Team Quick</button>
    </div>
    <div class="pad-help">
      <h2>Xbox controller</h2>
      <p class="pad-status" id="pad-status">Xbox first: connect a controller and press any button.</p>
      <div class="pad-grid">
        <span><b>LS</b> move</span>
        <span><b>RS</b> look</span>
        <span><i class="glyph a">A</i> / RT tickle</span>
        <span><i class="glyph b">B</i> / LT escape</span>
        <span><i class="glyph y">Y</i> release</span>
          <span><i class="glyph a">A</i> or Menu — play</span>
          <span>D-pad / LS also move rooms</span>
          <span><i class="glyph x">X</i> Home</span>
          <span><i class="glyph y">Y</i> Shop</span>
          <span>RB Arena · LB/RB tabs in rooms</span>
          <span><i class="glyph b">B</i> back</span>
          <span>Laptop 1 / 2 / 3 rooms · arrows in rooms</span>
      </div>
    </div>
    <p class="hint">Click the 3D hall doors, or the buttons. Laptop: click canvas to look, WASD move, T / Space tickle, E escape, Q release. Tickle starts when you are behind an enemy or pack 2+ touches.<br/>Phone: left stick, drag right to look, Tickle / Escape.</p>
    <p class="coming">Pro / Legends / story — not in this slice</p>
  </div>

  <div id="hub-home" class="hub-panel">
    <div class="row hub-room-bar">
      <span class="hub-room-title">Home</span>
    </div>
    <div class="hub-tabs">
      <button type="button" class="cta ghost on" id="tab-look" data-hub="tab-look">Look</button>
      <button type="button" class="cta ghost" id="tab-skills" data-hub="tab-skills">Skills</button>
      <button type="button" class="cta ghost" id="tab-loadout" data-hub="tab-loadout">Loadout</button>
    </div>
    <div id="home-look" class="hub-sub on">
      <div id="look-preview" class="look-preview">
        <img alt="Elara Case" />
      </div>
      <div class="player-label">Look</div>
      <p class="statline" id="look-name">Elara Case · Amateur player</p>
    <p class="hint">Elara is default. Swap among her still and the Amateur 12 (metal-free). Only Elara keeps earrings + pendant. D-pad moves the grid; A picks (laughs if already on).</p>
      <div id="look-grid" class="look-grid"></div>
      <button type="button" class="cta" id="btn-laugh">Laugh preview</button>
    </div>
    <div id="home-skills" class="hub-sub">
      <div class="skill-unspent" id="skill-unspent"></div>
      <p class="hint">Permanent spend. No respec. Amateur can fill the first ${AMATEUR_BLOCK_CAP} of ${SKILL_TRACK_LEN} blocks. Rest lock until Pro.</p>
      ${skillTrack("stamina")}
      ${skillTrack("struggle")}
      ${skillTrack("tickle")}
    </div>
    <div id="home-loadout" class="hub-sub">
      <p class="hint">One weapon + one armor. Unequipped = bare hand / base attire.</p>
      <div id="loadout-list"></div>
    </div>
  </div>

  <div id="hub-shop" class="hub-panel">
    <div class="row hub-room-bar">
      <span class="hub-room-title">Shop</span>
      <span class="statline" id="shop-coins"></span>
    </div>
    <div class="hub-tabs">
      <button type="button" class="cta ghost on" id="tab-weapons" data-hub="tab-weapons">Weapons</button>
      <button type="button" class="cta ghost" id="tab-armors" data-hub="tab-armors">Armors</button>
    </div>
    <p class="hint">Amateur ladder only. Equip in shop after buy. Cannot buy Pro. Click the hall Shop door or this list. D-pad + A buys or equips.</p>
    <p class="statline" id="shop-note"></p>
    <div id="shop-weapons" class="hub-sub on"></div>
    <div id="shop-armors" class="hub-sub"></div>
  </div>

  <div id="hub-arena" class="hub-panel">
    <div class="row hub-room-bar">
      <span class="hub-room-title">Arena</span>
    </div>
    <p class="hint">Amateur tier. Team Quick / Timed pad to 6v6. FFA pads 12 solo. Loadout locks at Start — shop buys after this signup wait for the next match. D-pad picks a mode; A starts it.</p>
    <p class="statline" id="arena-loadout"></p>
    <div id="arena-catalog" class="arena-catalog"></div>
    <div class="arena-modes">
      <div class="hub-item on" data-focus="0">
        <div class="hub-item-copy">
          <span class="hub-item-name">Team Quick</span>
          <span class="hub-item-meta">6v6 · one life · last team standing</span>
        </div>
        <button type="button" class="cta" id="arena-start">Start</button>
      </div>
      <div class="hub-item on" data-focus="1">
        <div class="hub-item-copy">
          <span class="hub-item-name">Team Timed</span>
          <span class="hub-item-meta">6v6 · respawn · 4 min · most tap-outs</span>
        </div>
        <button type="button" class="cta" id="arena-timed" data-hub="arena-timed">Start</button>
      </div>
      <div class="hub-item on" data-focus="2">
        <div class="hub-item-copy">
          <span class="hub-item-name">FFA Timed</span>
          <span class="hub-item-meta">12 solo · respawn · 4 min · most taps</span>
        </div>
        <button type="button" class="cta" id="arena-ffa-timed" data-hub="arena-ffa-timed">Start</button>
      </div>
      <div class="hub-item on" data-focus="3">
        <div class="hub-item-copy">
          <span class="hub-item-name">FFA Quick</span>
          <span class="hub-item-meta">12 solo · one life · last standing</span>
        </div>
        <button type="button" class="cta" id="arena-ffa-quick" data-hub="arena-ffa-quick">Start</button>
      </div>
    </div>
  </div>`;
}
