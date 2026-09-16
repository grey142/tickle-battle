import "./style.css";
import { Game } from "./game/Game";

const app = document.querySelector("#app");
if (!app) throw new Error("#app missing");
new Game(app as HTMLElement);
