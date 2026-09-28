var Zh=Object.defineProperty;var Qh=(s,t,e)=>t in s?Zh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var R=(s,t,e)=>Qh(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="170",tu=0,sl=1,eu=2,Wc=1,nu=2,bn=3,Xn=0,De=1,Ve=2,Vn=0,Di=1,al=2,rl=3,ol=4,iu=5,ai=100,su=101,au=102,ru=103,ou=104,lu=200,cu=201,hu=202,uu=203,Ar=204,Rr=205,du=206,fu=207,pu=208,mu=209,gu=210,_u=211,vu=212,yu=213,bu=214,Cr=0,Lr=1,Pr=2,$i=3,Ur=4,Dr=5,Ir=6,kr=7,Xc=0,xu=1,Mu=2,jn=0,Su=1,wu=2,Eu=3,Tu=4,Au=5,Ru=6,Cu=7,qc=300,Vi=301,ji=302,Fr=303,Nr=304,Ca=306,Br=1e3,xn=1001,Or=1002,Qe=1003,Lu=1004,ks=1005,cn=1006,Ia=1007,li=1008,An=1009,Kc=1010,Yc=1011,Ts=1012,Ao=1013,ci=1014,Mn=1015,Ls=1016,Ro=1017,Co=1018,Gi=1020,Jc=35902,Zc=1021,Qc=1022,Ze=1023,th=1024,eh=1025,Ii=1026,Wi=1027,nh=1028,Lo=1029,ih=1030,Po=1031,Uo=1033,fa=33776,pa=33777,ma=33778,ga=33779,zr=35840,Hr=35841,$r=35842,Vr=35843,jr=36196,Gr=37492,Wr=37496,Xr=37808,qr=37809,Kr=37810,Yr=37811,Jr=37812,Zr=37813,Qr=37814,to=37815,eo=37816,no=37817,io=37818,so=37819,ao=37820,ro=37821,_a=36492,oo=36494,lo=36495,sh=36283,co=36284,ho=36285,uo=36286,Pu=3200,Uu=3201,ah=0,Du=1,Hn="",Ee="srgb",qi="srgb-linear",La="linear",Zt="srgb",fi=7680,ll=519,Iu=512,ku=513,Fu=514,rh=515,Nu=516,Bu=517,Ou=518,zu=519,fo=35044,cl="300 es",Sn=2e3,wa=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const ms=Math.PI/180,As=180/Math.PI;function En(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function Do(s,t){return(s%t+t)%t}function Hu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function $u(s,t,e){return s!==t?(e-s)/(t-s):0}function gs(s,t,e){return(1-e)*s+e*t}function Vu(s,t,e,n){return gs(s,t,1-Math.exp(-e*n))}function ju(s,t=1){return t-Math.abs(Do(s,t*2)-t)}function Gu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Wu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Xu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qu(s,t){return s+Math.random()*(t-s)}function Ku(s){return s*(.5-Math.random())}function Yu(s){s!==void 0&&(hl=s);let t=hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ju(s){return s*ms}function Zu(s){return s*As}function Qu(s){return(s&s-1)===0&&s!==0}function td(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ed(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nd(s,t,e,n,i){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),u=a((t-n)/2),d=r((t-n)/2),p=a((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const hn={DEG2RAD:ms,RAD2DEG:As,generateUUID:En,clamp:ve,euclideanModulo:Do,mapLinear:Hu,inverseLerp:$u,lerp:gs,damp:Vu,pingpong:ju,smoothstep:Gu,smootherstep:Wu,randInt:Xu,randFloat:qu,randFloatSpread:Ku,seededRandom:Yu,degToRad:Ju,radToDeg:Zu,isPowerOfTwo:Qu,ceilPowerOfTwo:td,floorPowerOfTwo:ed,setQuaternionFromProperEuler:nd,normalize:Yt,denormalize:Je};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,a,r,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],M=i[1],w=i[4],y=i[7],D=i[2],E=i[5],C=i[8];return a[0]=r*_+o*M+l*D,a[3]=r*m+o*w+l*E,a[6]=r*f+o*y+l*C,a[1]=c*_+h*M+u*D,a[4]=c*m+h*w+u*E,a[7]=c*f+h*y+u*C,a[2]=d*_+p*M+g*D,a[5]=d*m+p*w+g*E,a[8]=d*f+p*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*a,p=c*a-r*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*r)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*a-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new Ut;function oh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function id(){const s=Rs("canvas");return s.style.display="block",s}const ul={};function fs(s){s in ul||(ul[s]=!0,console.warn(s))}function sd(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function ad(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?La:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const dl=[.64,.33,.3,.6,.15,.06],fl=[.2126,.7152,.0722],pl=[.3127,.329],ml=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[qi]:{primaries:dl,whitePoint:pl,transfer:La,toXYZ:ml,fromXYZ:gl,luminanceCoefficients:fl,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:dl,whitePoint:pl,transfer:Zt,toXYZ:ml,fromXYZ:gl,luminanceCoefficients:fl,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});let pi;class od{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=Rs("canvas")),pi.width=t.width,pi.height=t.height;const n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Tn(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ld=0;class lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(Fa(i[r].image)):a.push(Fa(i[r]))}else a=Fa(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function Fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?od.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;class Ae extends Ki{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=xn,i=xn,a=cn,r=li,o=Ze,l=An,c=Ae.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=En(),this.name="",this.source=new lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=qc;Ae.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(p+1)/2,D=(f+1)/2,E=(h+d)/4,C=(u+_)/4,L=(g+m)/4;return w>y&&w>D?w<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(w),i=E/n,a=C/n):y>D?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=E/i,a=L/i):D<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(D),n=C/a,i=L/a),this.set(n,i,a,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends hd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ch extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ud extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,M=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const D=Math.sqrt(w),E=Math.atan2(D,f*M);m=Math.sin(m*E)/D,o=Math.sin(o*E)/D}const y=o*M;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=a[r],d=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(a/2),d=l(n/2),p=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(a-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(r-i)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-a*i),u=2*(a*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=i+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new A,_l=new Ps;class Us{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Xe):Xe.fromBufferAttribute(a,r),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Ns.subVectors(this.max,es),mi.subVectors(t.a,es),gi.subVectors(t.b,es),_i.subVectors(t.c,es),Ln.subVectors(gi,mi),Pn.subVectors(_i,gi),Yn.subVectors(mi,_i);let e=[0,-Ln.z,Ln.y,0,-Pn.z,Pn.y,0,-Yn.z,Yn.y,Ln.z,0,-Ln.x,Pn.z,0,-Pn.x,Yn.z,0,-Yn.x,-Ln.y,Ln.x,0,-Pn.y,Pn.x,0,-Yn.y,Yn.x,0];return!Ba(e,mi,gi,_i,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,mi,gi,_i,Ns))?!1:(Bs.crossVectors(Ln,Pn),e=[Bs.x,Bs.y,Bs.z],Ba(e,mi,gi,_i,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new A,new A,new A,new A,new A,new A,new A,new A],Xe=new A,Fs=new Us,mi=new A,gi=new A,_i=new A,Ln=new A,Pn=new A,Yn=new A,es=new A,Ns=new A,Bs=new A,Jn=new A;function Ba(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Jn.fromArray(s,a);const o=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const dd=new Us,ns=new A,Oa=new A;class Io{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dd.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(Oa)),this.expandByPoint(ns.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new A,za=new A,Os=new A,Un=new A,Ha=new A,zs=new A,$a=new A;class hh{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){za.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(za);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Os),o=Un.dot(this.direction),l=-Un.dot(Os),c=Un.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(za).addScaledVector(Os,d),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,i,a){Ha.subVectors(e,t),zs.subVectors(n,t),$a.crossVectors(Ha,zs);let r=this.direction.dot($a),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Un.subVectors(this.origin,t);const l=o*this.direction.dot(zs.crossVectors(Un,zs));if(l<0)return null;const c=o*this.direction.dot(Ha.cross(Un));if(c<0||l+c>r)return null;const h=-o*Un.dot($a);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,a,r,o,l,c,h,u,d,p,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,a,r,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/vi.setFromMatrixColumn(t,0).length(),a=1/vi.setFromMatrixColumn(t,1).length(),r=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,p=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-r*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=_-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fd,t,pd)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Dn.crossVectors(n,Fe),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Dn.crossVectors(n,Fe)),Dn.normalize(),Hs.crossVectors(Fe,Dn),i[0]=Dn.x,i[4]=Hs.x,i[8]=Fe.x,i[1]=Dn.y,i[5]=Hs.y,i[9]=Fe.y,i[2]=Dn.z,i[6]=Hs.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],w=n[7],y=n[11],D=n[15],E=i[0],C=i[4],L=i[8],S=i[12],b=i[1],P=i[5],O=i[9],N=i[13],V=i[2],Y=i[6],G=i[10],Z=i[14],$=i[3],nt=i[7],ht=i[11],Mt=i[15];return a[0]=r*E+o*b+l*V+c*$,a[4]=r*C+o*P+l*Y+c*nt,a[8]=r*L+o*O+l*G+c*ht,a[12]=r*S+o*N+l*Z+c*Mt,a[1]=h*E+u*b+d*V+p*$,a[5]=h*C+u*P+d*Y+p*nt,a[9]=h*L+u*O+d*G+p*ht,a[13]=h*S+u*N+d*Z+p*Mt,a[2]=g*E+_*b+m*V+f*$,a[6]=g*C+_*P+m*Y+f*nt,a[10]=g*L+_*O+m*G+f*ht,a[14]=g*S+_*N+m*Z+f*Mt,a[3]=M*E+w*b+y*V+D*$,a[7]=M*C+w*P+y*Y+D*nt,a[11]=M*L+w*O+y*G+D*ht,a[15]=M*S+w*N+y*Z+D*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+a*l*u-i*c*u-a*o*d+n*c*d+i*o*p-n*l*p)+_*(+e*l*p-e*c*d+a*r*d-i*r*p+i*c*h-a*l*h)+m*(+e*c*u-e*o*p-a*r*u+n*r*p+a*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,w=g*d*c-h*m*c-g*l*p+r*m*p+h*l*f-r*d*f,y=h*_*c-g*u*c+g*o*p-r*_*p-h*o*f+r*u*f,D=g*u*l-h*_*l-g*o*d+r*_*d+h*o*m-r*u*m,E=e*M+n*w+i*y+a*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=M*C,t[1]=(_*d*a-u*m*a-_*i*p+n*m*p+u*i*f-n*d*f)*C,t[2]=(o*m*a-_*l*a+_*i*c-n*m*c-o*i*f+n*l*f)*C,t[3]=(u*l*a-o*d*a-u*i*c+n*d*c+o*i*p-n*l*p)*C,t[4]=w*C,t[5]=(h*m*a-g*d*a+g*i*p-e*m*p-h*i*f+e*d*f)*C,t[6]=(g*l*a-r*m*a-g*i*c+e*m*c+r*i*f-e*l*f)*C,t[7]=(r*d*a-h*l*a+h*i*c-e*d*c-r*i*p+e*l*p)*C,t[8]=y*C,t[9]=(g*u*a-h*_*a-g*n*p+e*_*p+h*n*f-e*u*f)*C,t[10]=(r*_*a-g*o*a+g*n*c-e*_*c-r*n*f+e*o*f)*C,t[11]=(h*o*a-r*u*a-h*n*c+e*u*c+r*n*p-e*o*p)*C,t[12]=D*C,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*C,t[14]=(g*o*i-r*_*i-g*n*l+e*_*l+r*n*m-e*o*m)*C,t[15]=(r*u*i-h*o*i+h*n*l-e*u*l-r*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,d=a*c,p=a*h,g=a*u,_=r*h,m=r*u,f=o*u,M=l*c,w=l*h,y=l*u,D=n.x,E=n.y,C=n.z;return i[0]=(1-(_+f))*D,i[1]=(p+y)*D,i[2]=(g-w)*D,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(d+f))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+w)*C,i[9]=(m-M)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=vi.set(i[0],i[1],i[2]).length();const r=vi.set(i[4],i[5],i[6]).length(),o=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const c=1/a,h=1/r,u=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=Sn){const l=this.elements,c=2*a/(e-t),h=2*a/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===Sn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===wa)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=Sn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-a),d=(e+t)*c,p=(n+i)*h;let g,_;if(o===Sn)g=(r+a)*u,_=-2*u;else if(o===wa)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new A,qe=new se,fd=new A(0,0,0),pd=new A(1,1,1),Dn=new A,Hs=new A,Fe=new A,vl=new se,yl=new Ps;class un{constructor(t=0,e=0,n=0,i=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let md=0;const bl=new A,yi=new Ps,_n=new se,$s=new A,is=new A,gd=new A,_d=new Ps,xl=new A(1,0,0),Ml=new A(0,1,0),Sl=new A(0,0,1),wl={type:"added"},vd={type:"removed"},bi={type:"childadded",child:null},Va={type:"childremoved",child:null};class ye extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new A,e=new un,n=new Ps,i=new A(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Ut}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(Sl,t)}translateOnAxis(t,e){return bl.copy(t).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(Sl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$s.copy(t):$s.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(is,$s,this.up):_n.lookAt($s,is,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(_n),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new A(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new A,vn=new A,ja=new A,yn=new A,xi=new A,Mi=new A,El=new A,Ga=new A,Wa=new A,Xa=new A,qa=new te,Ka=new te,Ya=new te;class je{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){Ke.subVectors(i,e),vn.subVectors(n,e),ja.subVectors(t,e);const r=Ke.dot(Ke),o=Ke.dot(vn),l=Ke.dot(ja),c=vn.dot(vn),h=vn.dot(ja),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,yn.x),l.addScaledVector(r,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(t,e,n,i,a,r){return qa.setScalar(0),Ka.setScalar(0),Ya.setScalar(0),qa.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(qa,a.x),r.addScaledVector(Ka,a.y),r.addScaledVector(Ya,a.z),r}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),vn.subVectors(t,e),Ke.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Ke.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;xi.subVectors(i,n),Mi.subVectors(a,n),Ga.subVectors(t,n);const l=xi.dot(Ga),c=Mi.dot(Ga);if(l<=0&&c<=0)return e.copy(n);Wa.subVectors(t,i);const h=xi.dot(Wa),u=Mi.dot(Wa);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(xi,r);Xa.subVectors(t,a);const p=xi.dot(Xa),g=Mi.dot(Xa);if(g>=0&&p<=g)return e.copy(a);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Mi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return El.subVectors(a,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(El,o);const f=1/(m+_+d);return r=_*f,o=d*f,e.copy(n).addScaledVector(xi,r).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Ja(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Do(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Ja(r,a,t+1/3),this.g=Ja(r,a,t),this.b=Ja(r,a,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return jt.fromWorkingColorSpace(we.copy(this),t),Math.round(ve(we.r*255,0,255))*65536+Math.round(ve(we.g*255,0,255))*256+Math.round(ve(we.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,i=we.g,a=we.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-a)/u+(i<a?6:0);break;case i:l=(a-n)/u+2;break;case a:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ee){jt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,i=we.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Vs);const n=gs(In.h,Vs.h,e),i=gs(In.s,Vs.s,e),a=gs(In.l,Vs.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Bt;Bt.NAMES=uh;let yd=0;class Yi extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=En(),this.name="",this.blending=Di,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ar,this.blendDst=Rr,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ar&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ui extends Yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new A,js=new ct;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Je(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Je(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Je(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array),a=Yt(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fo&&(t.usage=this.usage),t}}class dh extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fh extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bd=0;const He=new se,Za=new ye,Si=new A,Ne=new Us,ss=new Us,ge=new A;class Ie extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?fh:dh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ut().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,i=e.count;n<i;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Ne.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ne.min,ss.min),Ne.expandByPoint(ge),ge.addVectors(Ne.max,ss.max),Ne.expandByPoint(ge)):(Ne.expandByPoint(ss.min),Ne.expandByPoint(ss.max))}Ne.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)ge.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(t,c),ge.add(Si)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new A,l[L]=new A;const c=new A,h=new A,u=new A,d=new ct,p=new ct,g=new ct,_=new A,m=new A;function f(L,S,b){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(a,L),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,b),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[S].add(_),o[b].add(_),l[L].add(m),l[S].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,S=M.length;L<S;++L){const b=M[L],P=b.start,O=b.count;for(let N=P,V=P+O;N<V;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const w=new A,y=new A,D=new A,E=new A;function C(L){D.fromBufferAttribute(i,L),E.copy(D);const S=o[L];w.copy(S),w.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(E,S);const P=y.dot(l[L])<0?-1:1;r.setXYZW(L,w.x,w.y,w.z,P)}for(let L=0,S=M.length;L<S;++L){const b=M[L],P=b.start,O=b.count;for(let N=P,V=P+O;N<V;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new A,a=new A,r=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new se,Zn=new hh,Gs=new Io,Al=new A,Ws=new A,Xs=new A,qs=new A,Qa=new A,Ks=new A,Rl=new A,Ys=new A;class yt extends ye{constructor(t=new Ie,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){Ks.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Qa.fromBufferAttribute(u,t),r?Ks.addScaledVector(Qa,h):Ks.addScaledVector(Qa.sub(e),h))}e.add(Ks)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(a),Zn.copy(t.ray).recast(t.near),!(Gs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Gs,Al)===null||Zn.origin.distanceToSquared(Al)>(t.far-t.near)**2))&&(Tl.copy(a).invert(),Zn.copy(t.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=r[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,D=w;y<D;y+=3){const E=o.getX(y),C=o.getX(y+1),L=o.getX(y+2);i=Js(this,f,t,n,c,h,u,E,C,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);i=Js(this,r,t,n,c,h,u,M,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=r[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,D=w;y<D;y+=3){const E=y,C=y+1,L=y+2;i=Js(this,f,t,n,c,h,u,E,C,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,w=m+1,y=m+2;i=Js(this,r,t,n,c,h,u,M,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function xd(s,t,e,n,i,a,r,o){let l;if(t.side===De?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===Xn,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:s}}function Js(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,Ws),s.getVertexPosition(l,Xs),s.getVertexPosition(c,qs);const h=xd(s,t,e,n,Ws,Xs,qs,Rl);if(h){const u=new A;je.getBarycoord(Rl,Ws,Xs,qs,u),i&&(h.uv=je.getInterpolatedAttribute(i,o,l,c,u,new ct)),a&&(h.uv1=je.getInterpolatedAttribute(a,o,l,c,u,new ct)),r&&(h.normal=je.getInterpolatedAttribute(r,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new A,materialIndex:0};je.getNormal(Ws,Xs,qs,d.normal),h.face=d,h.barycoord=u}return h}class Wt extends Ie{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,m,f,M,w,y,D,E,C,L,S){const b=y/C,P=D/L,O=y/2,N=D/2,V=E/2,Y=C+1,G=L+1;let Z=0,$=0;const nt=new A;for(let ht=0;ht<G;ht++){const Mt=ht*P-N;for(let kt=0;kt<Y;kt++){const ee=kt*b-O;nt[_]=ee*M,nt[m]=Mt*w,nt[f]=V,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[f]=E>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(kt/C),u.push(1-ht/L),Z+=1}}for(let ht=0;ht<L;ht++)for(let Mt=0;Mt<C;Mt++){const kt=d+Mt+Y*ht,ee=d+Mt+Y*(ht+1),X=d+(Mt+1)+Y*(ht+1),et=d+(Mt+1)+Y*ht;l.push(kt,ee,et),l.push(ee,X,et),$+=6}o.addGroup(p,$,S),p+=$,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=Xi(s[e]);for(const i in n)t[i]=n[i]}return t}function Md(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ph(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Sd={clone:Xi,merge:Ce};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new A,Cl=new ct,Ll=new ct;class Be extends mh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Cl,Ll),e.subVectors(Ll,Cl)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ms*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,Ei=1;class Td extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(wi,Ei,t,e);i.layers=this.layers,this.add(i);const a=new Be(wi,Ei,t,e);a.layers=this.layers,this.add(a);const r=new Be(wi,Ei,t,e);r.layers=this.layers,this.add(r);const o=new Be(wi,Ei,t,e);o.layers=this.layers,this.add(o);const l=new Be(wi,Ei,t,e);l.layers=this.layers,this.add(l);const c=new Be(wi,Ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gh extends Ae{constructor(t,e,n,i,a,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ad extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wt(5,5,5),a=new qn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Vn});a.uniforms.tEquirect.value=e;const r=new yt(i,a),o=e.minFilter;return e.minFilter===li&&(e.minFilter=cn),new Td(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const tr=new A,Rd=new A,Cd=new Ut;class ii{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=tr.subVectors(n,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cd.getNormalMatrix(t),i=this.coplanarPoint(tr).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Io,Zs=new A;class Fo{constructor(t=new ii,e=new ii,n=new ii,i=new ii,a=new ii,r=new ii){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],M=i[13],w=i[14],y=i[15];if(n[0].setComponents(l-a,d-c,m-p,y-f).normalize(),n[1].setComponents(l+a,d+c,m+p,y+f).normalize(),n[2].setComponents(l+r,d+h,m+g,y+M).normalize(),n[3].setComponents(l-r,d-h,m-g,y-M).normalize(),n[4].setComponents(l-o,d-u,m-_,y-w).normalize(),e===Sn)n[5].setComponents(l+o,d+u,m+_,y+w).normalize();else if(e===wa)n[5].setComponents(o,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zs.x=i.normal.x>0?t.max.x:t.min.x,Zs.y=i.normal.y>0?t.max.y:t.min.y,Zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _h(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Ld(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}class Ji extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*d-r;for(let w=0;w<c;w++){const y=w*u-a;g.push(y,-M,0),_.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const w=M+c*f,y=M+c*(f+1),D=M+1+c*(f+1),E=M+1+c*f;p.push(w,y,E),p.push(y,D,E)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:Pd,alphahash_pars_fragment:Ud,alphamap_fragment:Dd,alphamap_pars_fragment:Id,alphatest_fragment:kd,alphatest_pars_fragment:Fd,aomap_fragment:Nd,aomap_pars_fragment:Bd,batching_pars_vertex:Od,batching_vertex:zd,begin_vertex:Hd,beginnormal_vertex:$d,bsdfs:Vd,iridescence_fragment:jd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Kd,color_fragment:Yd,color_pars_fragment:Jd,color_pars_vertex:Zd,color_vertex:Qd,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:af,emissivemap_fragment:rf,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:wf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:vf,gradientmap_pars_fragment:yf,lightmap_pars_fragment:bf,lights_lambert_fragment:xf,lights_lambert_pars_fragment:Mf,lights_pars_begin:Sf,lights_toon_fragment:Ef,lights_toon_pars_fragment:Tf,lights_phong_fragment:Af,lights_phong_pars_fragment:Rf,lights_physical_fragment:Cf,lights_physical_pars_fragment:Lf,lights_fragment_begin:Pf,lights_fragment_maps:Uf,lights_fragment_end:Df,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Nf,map_fragment:Bf,map_pars_fragment:Of,map_particle_fragment:zf,map_particle_pars_fragment:Hf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Vf,morphinstance_vertex:jf,morphcolor_vertex:Gf,morphnormal_vertex:Wf,morphtarget_pars_vertex:Xf,morphtarget_vertex:qf,normal_fragment_begin:Kf,normal_fragment_maps:Yf,normal_pars_fragment:Jf,normal_pars_vertex:Zf,normal_vertex:Qf,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:ap,packing:rp,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:vp,skinning_vertex:yp,skinnormal_vertex:bp,specularmap_fragment:xp,specularmap_pars_fragment:Mp,tonemapping_fragment:Sp,tonemapping_pars_fragment:wp,transmission_fragment:Ep,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Lp,background_vert:Pp,background_frag:Up,backgroundCube_vert:Dp,backgroundCube_frag:Ip,cube_vert:kp,cube_frag:Fp,depth_vert:Np,depth_frag:Bp,distanceRGBA_vert:Op,distanceRGBA_frag:zp,equirect_vert:Hp,equirect_frag:$p,linedashed_vert:Vp,linedashed_frag:jp,meshbasic_vert:Gp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:Kp,meshmatcap_frag:Yp,meshnormal_vert:Jp,meshnormal_frag:Zp,meshphong_vert:Qp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:am,points_frag:rm,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},it={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},on={basic:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Bt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Ce([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Ce([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Bt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Ce([it.points,it.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Ce([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Ce([it.common,it.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Ce([it.sprite,it.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Ce([it.common,it.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Ce([it.lights,it.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};on.physical={uniforms:Ce([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Qs={r:0,b:0,g:0},ti=new un,um=new se;function dm(s,t,e,n,i,a,r){const o=new Bt(0);let l=a===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?e:t).get(w)),w}function _(M){let w=!1;const y=g(M);y===null?f(o,l):y&&y.isColor&&(f(y,1),w=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===Ca)?(h===void 0&&(h=new yt(new Wt(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Xi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ti.copy(w.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(ti)),h.material.toneMapped=jt.getTransfer(y.colorSpace)!==Zt,(u!==y||d!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new yt(new Ji(2,2),new qn({name:"BackgroundMaterial",uniforms:Xi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=jt.getTransfer(y.colorSpace)!==Zt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,w){M.getRGB(Qs,ph(s)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,w,r)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),l=w,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:_,addToRenderList:m}}function fm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let a=i,r=!1;function o(b,P,O,N,V){let Y=!1;const G=u(N,O,P);a!==G&&(a=G,c(a.object)),Y=p(b,N,O,V),Y&&g(b,N,O,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(b,P,O,N),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,P,O){const N=O.wireframe===!0;let V=n[b.id];V===void 0&&(V={},n[b.id]=V);let Y=V[P.id];Y===void 0&&(Y={},V[P.id]=Y);let G=Y[N];return G===void 0&&(G=d(l()),Y[N]=G),G}function d(b){const P=[],O=[],N=[];for(let V=0;V<e;V++)P[V]=0,O[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:N,object:b,attributes:{},index:null}}function p(b,P,O,N){const V=a.attributes,Y=P.attributes;let G=0;const Z=O.getAttributes();for(const $ in Z)if(Z[$].location>=0){const ht=V[$];let Mt=Y[$];if(Mt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Mt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Mt=b.instanceColor)),ht===void 0||ht.attribute!==Mt||Mt&&ht.data!==Mt.data)return!0;G++}return a.attributesNum!==G||a.index!==N}function g(b,P,O,N){const V={},Y=P.attributes;let G=0;const Z=O.getAttributes();for(const $ in Z)if(Z[$].location>=0){let ht=Y[$];ht===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));const Mt={};Mt.attribute=ht,ht&&ht.data&&(Mt.data=ht.data),V[$]=Mt,G++}a.attributes=V,a.attributesNum=G,a.index=N}function _(){const b=a.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){const O=a.newAttributes,N=a.enabledAttributes,V=a.attributeDivisors;O[b]=1,N[b]===0&&(s.enableVertexAttribArray(b),N[b]=1),V[b]!==P&&(s.vertexAttribDivisor(b,P),V[b]=P)}function M(){const b=a.newAttributes,P=a.enabledAttributes;for(let O=0,N=P.length;O<N;O++)P[O]!==b[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function w(b,P,O,N,V,Y,G){G===!0?s.vertexAttribIPointer(b,P,O,V,Y):s.vertexAttribPointer(b,P,O,N,V,Y)}function y(b,P,O,N){_();const V=N.attributes,Y=O.getAttributes(),G=P.defaultAttributeValues;for(const Z in Y){const $=Y[Z];if($.location>=0){let nt=V[Z];if(nt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const ht=nt.normalized,Mt=nt.itemSize,kt=t.get(nt);if(kt===void 0)continue;const ee=kt.buffer,X=kt.type,et=kt.bytesPerElement,vt=X===s.INT||X===s.UNSIGNED_INT||nt.gpuType===Ao;if(nt.isInterleavedBufferAttribute){const at=nt.data,Tt=at.stride,Ct=nt.offset;if(at.isInstancedInterleavedBuffer){for(let Ft=0;Ft<$.locationSize;Ft++)f($.location+Ft,at.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ft=0;Ft<$.locationSize;Ft++)m($.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Ft=0;Ft<$.locationSize;Ft++)w($.location+Ft,Mt/$.locationSize,X,ht,Tt*et,(Ct+Mt/$.locationSize*Ft)*et,vt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<$.locationSize;at++)f($.location+at,nt.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<$.locationSize;at++)m($.location+at);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let at=0;at<$.locationSize;at++)w($.location+at,Mt/$.locationSize,X,ht,Mt*et,Mt/$.locationSize*at*et,vt)}}else if(G!==void 0){const ht=G[Z];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv($.location,ht);break;case 3:s.vertexAttrib3fv($.location,ht);break;case 4:s.vertexAttrib4fv($.location,ht);break;default:s.vertexAttrib1fv($.location,ht)}}}}M()}function D(){L();for(const b in n){const P=n[b];for(const O in P){const N=P[O];for(const V in N)h(N[V].object),delete N[V];delete P[O]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const O in P){const N=P[O];for(const V in N)h(N[V].object),delete N[V];delete P[O]}delete n[b.id]}function C(b){for(const P in n){const O=n[P];if(O[b.id]===void 0)continue;const N=O[b.id];for(const V in N)h(N[V].object),delete N[V];delete O[b.id]}}function L(){S(),r=!0,a!==i&&(a=i,c(a.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function pm(s,t,e){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mm(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==Ze&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==An&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!L)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:D,maxSamples:E}}function gm(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new ii,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||a&&!m)a?h(null):c();else{const M=a?0:n,w=M*4;let y=f.clippingState||null;l.value=y,y=h(g,d,w,p);for(let D=0;D!==w;++D)y[D]=e[D];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,y=p;w!==_;++w,y+=4)r.copy(u[w]).applyMatrix4(M,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _m(s){let t=new WeakMap;function e(r,o){return o===Fr?r.mapping=Vi:o===Nr&&(r.mapping=ji),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Fr||o===Nr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ad(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class vh extends mh{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,Pl=[.125,.215,.35,.446,.526,.582],ri=20,er=new vh,Ul=new Bt;let nr=null,ir=0,sr=0,ar=!1;const si=(1+Math.sqrt(5))/2,Ti=1/si,Dl=[new A(-si,Ti,0),new A(si,Ti,0),new A(-Ti,0,si),new A(Ti,0,si),new A(0,si,-Ti),new A(0,si,Ti),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nr,ir,sr),this._renderer.xr.enabled=ar,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ls,format:Ze,colorSpace:qi,depthBuffer:!1},i=kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vm(a)),this._blurMaterial=ym(a,t,e)}return i}_compileMaterial(t){const e=new yt(this._lodPlanes[0],t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,i){const o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ul),h.toneMapping=jn,h.autoClear=!1;const p=new ui({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new yt(new Wt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ul),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const w=this._cubeSize;ta(i,M*w,f>2?w:0,w,w),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vi||t.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new yt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Dl[(i-a-1)%Dl.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new yt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*ri-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):ri;m>ri&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const f=[];let M=0;for(let C=0;C<ri;++C){const L=C/_,S=Math.exp(-L*L/2);f.push(S),C===0?M+=S:C<m&&(M+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const y=this._sizeLods[i],D=3*y*(i>w-Ui?i-w+Ui:0),E=4*(this._cubeSize-y);ta(e,D,E,3*y,2*y),l.setRenderTarget(e),l.render(u,er)}}function vm(s){const t=[],e=[],n=[];let i=s;const a=s-Ui+1+Pl.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>s-Ui?l=Pl[r-s+Ui-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),w=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,L=E>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];M.set(S,_*g*E),w.set(d,m*g*E);const b=[E,E,E,E,E,E];y.set(b,f*g*E)}const D=new Ie;D.setAttribute("position",new tn(M,_)),D.setAttribute("uv",new tn(w,m)),D.setAttribute("faceIndex",new tn(y,f)),t.push(D),i>Ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kl(s,t,e){const n=new hi(s,t,e);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ym(s,t,e){const n=new Float32Array(ri),i=new A(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Fl(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Nl(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bm(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fr||l===Nr,h=l===Vi||l===ji;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Il(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Il(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function xm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mm(s,t,e,n){const i={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",r),delete i[d.id];const p=a.get(d);p&&(t.remove(p),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let w=0,y=M.length;w<y;w+=3){const D=M[w+0],E=M[w+1],C=M[w+2];d.push(D,E,E,C,C,D)}}else if(g!==void 0){const M=g.array;_=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const D=w+0,E=w+1,C=w+2;d.push(D,E,E,C,C,D)}}else return;const m=new(oh(d)?fh:dh)(d,1);m.version=_;const f=a.get(u);f&&t.remove(f),a.set(u,m)}function h(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sm(s,t,e){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,p){s.drawElements(n,p,a,d*r),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,a,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/r,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Em(s,t,e){const n=new WeakMap,i=new te;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let y=o.attributes.position.count*w,D=1;y>t.maxTextureSize&&(D=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*D*4*u),C=new ch(E,y,D,u);C.type=Mn,C.needsUpdate=!0;const L=w*4;for(let b=0;b<u;b++){const P=m[b],O=f[b],N=M[b],V=y*D*4*b;for(let Y=0;Y<P.count;Y++){const G=Y*L;p===!0&&(i.fromBufferAttribute(P,Y),E[V+G+0]=i.x,E[V+G+1]=i.y,E[V+G+2]=i.z,E[V+G+3]=0),g===!0&&(i.fromBufferAttribute(O,Y),E[V+G+4]=i.x,E[V+G+5]=i.y,E[V+G+6]=i.z,E[V+G+7]=0),_===!0&&(i.fromBufferAttribute(N,Y),E[V+G+8]=i.x,E[V+G+9]=i.y,E[V+G+10]=i.z,E[V+G+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new ct(y,D)},n.set(o,d),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function Tm(s,t,e,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class yh extends Ae{constructor(t,e,n,i,a,r,o,l,c,h=Ii){if(h!==Ii&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ci),n===void 0&&h===Wi&&(n=Gi),super(null,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bh=new Ae,Bl=new yh(1,1),xh=new ch,Mh=new ud,Sh=new gh,Ol=[],zl=[],Hl=new Float32Array(16),$l=new Float32Array(9),Vl=new Float32Array(4);function Zi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=Ol[i];if(a===void 0&&(a=new Float32Array(i),Ol[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Pa(s,t){let e=zl[t];e===void 0&&(e=new Int32Array(t),zl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Am(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function Cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function Lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function Pm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Vl.set(n),s.uniformMatrix2fv(this.addr,!1,Vl),me(e,n)}}function Um(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;$l.set(n),s.uniformMatrix3fv(this.addr,!1,$l),me(e,n)}}function Dm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Hl.set(n),s.uniformMatrix4fv(this.addr,!1,Hl),me(e,n)}}function Im(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Nm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function Bm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function $m(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Bl.compareFunction=rh,a=Bl):a=bh,e.setTexture2D(t||a,i)}function Vm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mh,i)}function jm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Sh,i)}function Gm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xh,i)}function Wm(s){switch(s){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Lm;case 35674:return Pm;case 35675:return Um;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return km;case 35668:case 35672:return Fm;case 35669:case 35673:return Nm;case 5125:return Bm;case 36294:return Om;case 36295:return zm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Xm(s,t){s.uniform1fv(this.addr,t)}function qm(s,t){const e=Zi(t,this.size,2);s.uniform2fv(this.addr,e)}function Km(s,t){const e=Zi(t,this.size,3);s.uniform3fv(this.addr,e)}function Ym(s,t){const e=Zi(t,this.size,4);s.uniform4fv(this.addr,e)}function Jm(s,t){const e=Zi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Zm(s,t){const e=Zi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qm(s,t){const e=Zi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function t0(s,t){s.uniform1iv(this.addr,t)}function e0(s,t){s.uniform2iv(this.addr,t)}function n0(s,t){s.uniform3iv(this.addr,t)}function i0(s,t){s.uniform4iv(this.addr,t)}function s0(s,t){s.uniform1uiv(this.addr,t)}function a0(s,t){s.uniform2uiv(this.addr,t)}function r0(s,t){s.uniform3uiv(this.addr,t)}function o0(s,t){s.uniform4uiv(this.addr,t)}function l0(s,t,e){const n=this.cache,i=t.length,a=Pa(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||bh,a[r])}function c0(s,t,e){const n=this.cache,i=t.length,a=Pa(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Mh,a[r])}function h0(s,t,e){const n=this.cache,i=t.length,a=Pa(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Sh,a[r])}function u0(s,t,e){const n=this.cache,i=t.length,a=Pa(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||xh,a[r])}function d0(s){switch(s){case 5126:return Xm;case 35664:return qm;case 35665:return Km;case 35666:return Ym;case 35674:return Jm;case 35675:return Zm;case 35676:return Qm;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return a0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}class f0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}}class p0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}}class m0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const rr=/(\w+)(\])?(\[|\.)?/g;function jl(s,t){s.seq.push(t),s.map[t.id]=t}function g0(s,t,e){const n=s.name,i=n.length;for(rr.lastIndex=0;;){const a=rr.exec(n),r=rr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){jl(e,c===void 0?new f0(o,s,t):new p0(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new m0(o),jl(e,u)),e=u}}}class va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);g0(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Gl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const _0=37297;let v0=0;function y0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Wl=new Ut;function b0(s){jt._getMatrix(Wl,jt.workingColorSpace,s);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case La:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Xl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+y0(s.getShaderSource(t),r)}else return i}function x0(s,t){const e=b0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M0(s,t){let e;switch(t){case Su:e="Linear";break;case wu:e="Reinhard";break;case Eu:e="Cineon";break;case Tu:e="ACESFilmic";break;case Ru:e="AgX";break;case Cu:e="Neutral";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new A;function S0(){jt.getLuminanceCoefficients(ea);const s=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function E0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function ps(s){return s!==""}function ql(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(s){return s.replace(A0,C0)}const R0=new Map;function C0(s,t){let e=It[t];if(e===void 0){const n=R0.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return po(e)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(s){return s.replace(L0,P0)}function P0(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Jl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function U0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function D0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vi:case ji:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function k0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xc:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case Mu:t="ENVMAP_BLENDING_ADD";break}return t}function F0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function N0(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=U0(e),c=D0(e),h=I0(e),u=k0(e),d=F0(e),p=w0(e),g=E0(a),_=i.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),f.length>0&&(f+=`
`)):(m=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),f=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?It.tonemapping_pars_fragment:"",e.toneMapping!==jn?M0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,x0("linearToOutputTexel",e.outputColorSpace),S0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),r=po(r),r=ql(r,e),r=Kl(r,e),o=po(o),o=ql(o,e),o=Kl(o,e),r=Yl(r),o=Yl(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=M+m+r,y=M+f+o,D=Gl(i,i.VERTEX_SHADER,w),E=Gl(i,i.FRAGMENT_SHADER,y);i.attachShader(_,D),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(D).trim(),V=i.getShaderInfoLog(E).trim();let Y=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,E);else{const Z=Xl(i,D,"vertex"),$=Xl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Z+`
`+$)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:Y,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(D),i.deleteShader(E),L=new va(i,_),S=T0(i,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,_0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=E,this}let B0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new z0(t),e.set(t,n)),n}}class z0{constructor(t){this.id=B0++,this.code=t,this.usedTimes=0}}function H0(s,t,e,n,i,a,r){const o=new ko,l=new O0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,O,N){const V=O.fog,Y=N.geometry,G=S.isMeshStandardMaterial?O.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),$=Z&&Z.mapping===Ca?Z.image.height:null,nt=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=ht!==void 0?ht.length:0;let kt=0;Y.morphAttributes.position!==void 0&&(kt=1),Y.morphAttributes.normal!==void 0&&(kt=2),Y.morphAttributes.color!==void 0&&(kt=3);let ee,X,et,vt;if(nt){const Kt=on[nt];ee=Kt.vertexShader,X=Kt.fragmentShader}else ee=S.vertexShader,X=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);const at=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Ct=N.isInstancedMesh===!0,Ft=N.isBatchedMesh===!0,ce=!!S.map,$t=!!S.matcap,ue=!!Z,F=!!S.aoMap,Oe=!!S.lightMap,Ot=!!S.bumpMap,zt=!!S.normalMap,wt=!!S.displacementMap,ae=!!S.emissiveMap,St=!!S.metalnessMap,T=!!S.roughnessMap,v=S.anisotropy>0,B=S.clearcoat>0,q=S.dispersion>0,J=S.iridescence>0,W=S.sheen>0,bt=S.transmission>0,rt=v&&!!S.anisotropyMap,dt=B&&!!S.clearcoatMap,Vt=B&&!!S.clearcoatNormalMap,Q=B&&!!S.clearcoatRoughnessMap,ft=J&&!!S.iridescenceMap,Et=J&&!!S.iridescenceThicknessMap,At=W&&!!S.sheenColorMap,pt=W&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,Dt=!!S.specularColorMap,ne=!!S.specularIntensityMap,U=bt&&!!S.transmissionMap,st=bt&&!!S.thicknessMap,j=!!S.gradientMap,K=!!S.alphaMap,ut=S.alphaTest>0,ot=!!S.alphaHash,Lt=!!S.extensions;let he=jn;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(he=s.toneMapping);const Me={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:X,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&N._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&N.instanceColor!==null,instancingMorph:Ct&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qi,alphaToCoverage:!!S.alphaToCoverage,map:ce,matcap:$t,envMap:ue,envMapMode:ue&&Z.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:Oe,bumpMap:Ot,normalMap:zt,displacementMap:d&&wt,emissiveMap:ae,normalMapObjectSpace:zt&&S.normalMapType===Du,normalMapTangentSpace:zt&&S.normalMapType===ah,metalnessMap:St,roughnessMap:T,anisotropy:v,anisotropyMap:rt,clearcoat:B,clearcoatMap:dt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Q,dispersion:q,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:At,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:Dt,specularIntensityMap:ne,transmission:bt,transmissionMap:U,thicknessMap:st,gradientMap:j,opaque:S.transparent===!1&&S.blending===Di&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ot,combine:S.combine,mapUv:ce&&_(S.map.channel),aoMapUv:F&&_(S.aoMap.channel),lightMapUv:Oe&&_(S.lightMap.channel),bumpMapUv:Ot&&_(S.bumpMap.channel),normalMapUv:zt&&_(S.normalMap.channel),displacementMapUv:wt&&_(S.displacementMap.channel),emissiveMapUv:ae&&_(S.emissiveMap.channel),metalnessMapUv:St&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:rt&&_(S.anisotropyMap.channel),clearcoatMapUv:dt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ht&&_(S.specularMap.channel),specularColorMapUv:Dt&&_(S.specularColorMap.channel),specularIntensityMapUv:ne&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:st&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(zt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(ce||K),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:kt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:ce&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===Zt,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===Zt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ve,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function f(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(b,S),w(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function w(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const b=g[S.type];let P;if(b){const O=on[b];P=Sd.clone(O.uniforms)}else P=S.uniforms;return P}function D(S,b){let P;for(let O=0,N=h.length;O<N;O++){const V=h[O];if(V.cacheKey===b){P=V,++P.usedTimes;break}}return P===void 0&&(P=new N0(s,b,S,a),h.push(P)),P}function E(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:D,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:L}}function $0(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function V0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Zl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ql(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=r(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=r(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||V0),n.length>1&&n.sort(d||Zl),i.length>1&&i.sort(d||Zl)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:h,sort:c}}function j0(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Ql,s.set(n,[r])):i>=a.length?(r=new Ql,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function G0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Bt};break;case"SpotLight":e={position:new A,direction:new A,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function W0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let X0=0;function q0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function K0(s){const t=new G0,e=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,a=new se,r=new se;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,w=0,y=0,D=0,E=0,C=0;c.sort(q0);for(let S=0,b=c.length;S<b;S++){const P=c[S],O=P.color,N=P.intensity,V=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],N);C++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,$=e.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(O).multiplyScalar(N),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const Z=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,Z.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const $=e.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=Y,y++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(O).multiplyScalar(N),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Z=P.shadow,$=e.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(N),G.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[f]=G,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==y||L.numSpotMaps!==D||L.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+D-E,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=M,L.numPointShadows=w,L.numSpotShadows=y,L.numSpotMaps=D,L.numLightProbes=C,n.version=X0++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const w=c[f];if(w.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(w.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(w.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function tc(s){const t=new K0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Y0(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new tc(s),t.set(i,[o])):a>=r.length?(o=new tc(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class J0 extends Yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Z0 extends Yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eg(s,t,e){let n=new Fo;const i=new ct,a=new ct,r=new te,o=new J0({depthPacking:Uu}),l=new Z0,c={},h=e.maxTextureSize,u={[Xn]:De,[De]:Xn,[Ve]:Ve},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Q0,fragmentShader:tg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let f=this.type;this.render=function(E,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Vn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=f!==bn&&this.type===bn,V=f===bn&&this.type!==bn;for(let Y=0,G=E.length;Y<G;Y++){const Z=E[Y],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const nt=$.getFrameExtents();if(i.multiply(nt),a.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/nt.x),i.x=a.x*nt.x,$.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/nt.y),i.y=a.y*nt.y,$.mapSize.y=a.y)),$.map===null||N===!0||V===!0){const Mt=this.type!==bn?{minFilter:Qe,magFilter:Qe}:{};$.map!==null&&$.map.dispose(),$.map=new hi(i.x,i.y,Mt),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const ht=$.getViewportCount();for(let Mt=0;Mt<ht;Mt++){const kt=$.getViewport(Mt);r.set(a.x*kt.x,a.y*kt.y,a.x*kt.z,a.y*kt.w),O.viewport(r),$.updateMatrices(Z,Mt),n=$.getFrustum(),y(C,L,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===bn&&M($,L),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,b,P)};function M(E,C){const L=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,L,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,L,p,_,null)}function w(E,C,L,S){let b=null;const P=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=L.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=b.uuid,N=C.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let Y=V[N];Y===void 0&&(Y=b.clone(),V[N]=Y,C.addEventListener("dispose",D)),b=Y}if(b.visible=C.visible,b.wireframe=C.wireframe,S===bn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=s.properties.get(b);O.light=L}return b}function y(E,C,L,S,b){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const N=t.update(E),V=E.material;if(Array.isArray(V)){const Y=N.groups;for(let G=0,Z=Y.length;G<Z;G++){const $=Y[G],nt=V[$.materialIndex];if(nt&&nt.visible){const ht=w(E,nt,S,b);E.onBeforeShadow(s,E,C,L,N,ht,$),s.renderBufferDirect(L,null,N,ht,E,$),E.onAfterShadow(s,E,C,L,N,ht,$)}}}else if(V.visible){const Y=w(E,V,S,b);E.onBeforeShadow(s,E,C,L,N,Y,null),s.renderBufferDirect(L,null,N,Y,E,null),E.onAfterShadow(s,E,C,L,N,Y,null)}}const O=E.children;for(let N=0,V=O.length;N<V;N++)y(O[N],C,L,S,b)}function D(E){E.target.removeEventListener("dispose",D);for(const L in c){const S=c[L],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const ng={[Cr]:Lr,[Pr]:Ir,[Ur]:kr,[$i]:Dr,[Lr]:Cr,[Ir]:Pr,[kr]:Ur,[Dr]:$i};function ig(s,t){function e(){let U=!1;const st=new te;let j=null;const K=new te(0,0,0,0);return{setMask:function(ut){j!==ut&&!U&&(s.colorMask(ut,ut,ut,ut),j=ut)},setLocked:function(ut){U=ut},setClear:function(ut,ot,Lt,he,Me){Me===!0&&(ut*=he,ot*=he,Lt*=he),st.set(ut,ot,Lt,he),K.equals(st)===!1&&(s.clearColor(ut,ot,Lt,he),K.copy(st))},reset:function(){U=!1,j=null,K.set(-1,0,0,0)}}}function n(){let U=!1,st=!1,j=null,K=null,ut=null;return{setReversed:function(ot){if(st!==ot){const Lt=t.get("EXT_clip_control");st?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const he=ut;ut=null,this.setClear(he)}st=ot},getReversed:function(){return st},setTest:function(ot){ot?at(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(ot){j!==ot&&!U&&(s.depthMask(ot),j=ot)},setFunc:function(ot){if(st&&(ot=ng[ot]),K!==ot){switch(ot){case Cr:s.depthFunc(s.NEVER);break;case Lr:s.depthFunc(s.ALWAYS);break;case Pr:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case Ur:s.depthFunc(s.EQUAL);break;case Dr:s.depthFunc(s.GEQUAL);break;case Ir:s.depthFunc(s.GREATER);break;case kr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ot}},setLocked:function(ot){U=ot},setClear:function(ot){ut!==ot&&(st&&(ot=1-ot),s.clearDepth(ot),ut=ot)},reset:function(){U=!1,j=null,K=null,ut=null,st=!1}}}function i(){let U=!1,st=null,j=null,K=null,ut=null,ot=null,Lt=null,he=null,Me=null;return{setTest:function(Kt){U||(Kt?at(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Kt){st!==Kt&&!U&&(s.stencilMask(Kt),st=Kt)},setFunc:function(Kt,Ge,fn){(j!==Kt||K!==Ge||ut!==fn)&&(s.stencilFunc(Kt,Ge,fn),j=Kt,K=Ge,ut=fn)},setOp:function(Kt,Ge,fn){(ot!==Kt||Lt!==Ge||he!==fn)&&(s.stencilOp(Kt,Ge,fn),ot=Kt,Lt=Ge,he=fn)},setLocked:function(Kt){U=Kt},setClear:function(Kt){Me!==Kt&&(s.clearStencil(Kt),Me=Kt)},reset:function(){U=!1,st=null,j=null,K=null,ut=null,ot=null,Lt=null,he=null,Me=null}}}const a=new e,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,w=null,y=null,D=null,E=null,C=new Bt(0,0,0),L=0,S=!1,b=null,P=null,O=null,N=null,V=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),G=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=Z>=2);let nt=null,ht={};const Mt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),ee=new te().fromArray(Mt),X=new te().fromArray(kt);function et(U,st,j,K){const ut=new Uint8Array(4),ot=s.createTexture();s.bindTexture(U,ot),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<j;Lt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(st+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ot}const vt={};vt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(s.DEPTH_TEST),r.setFunc($i),Ot(!1),zt(sl),at(s.CULL_FACE),F(Vn);function at(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Tt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Ct(U,st){return u[U]!==st?(s.bindFramebuffer(U,st),u[U]=st,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Ft(U,st){let j=p,K=!1;if(U){j=d.get(st),j===void 0&&(j=[],d.set(st,j));const ut=U.textures;if(j.length!==ut.length||j[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Lt=ut.length;ot<Lt;ot++)j[ot]=s.COLOR_ATTACHMENT0+ot;j.length=ut.length,K=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,K=!0);K&&s.drawBuffers(j)}function ce(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const $t={[ai]:s.FUNC_ADD,[su]:s.FUNC_SUBTRACT,[au]:s.FUNC_REVERSE_SUBTRACT};$t[ru]=s.MIN,$t[ou]=s.MAX;const ue={[lu]:s.ZERO,[cu]:s.ONE,[hu]:s.SRC_COLOR,[Ar]:s.SRC_ALPHA,[gu]:s.SRC_ALPHA_SATURATE,[pu]:s.DST_COLOR,[du]:s.DST_ALPHA,[uu]:s.ONE_MINUS_SRC_COLOR,[Rr]:s.ONE_MINUS_SRC_ALPHA,[mu]:s.ONE_MINUS_DST_COLOR,[fu]:s.ONE_MINUS_DST_ALPHA,[_u]:s.CONSTANT_COLOR,[vu]:s.ONE_MINUS_CONSTANT_COLOR,[yu]:s.CONSTANT_ALPHA,[bu]:s.ONE_MINUS_CONSTANT_ALPHA};function F(U,st,j,K,ut,ot,Lt,he,Me,Kt){if(U===Vn){_===!0&&(Tt(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),U!==iu){if(U!==m||Kt!==S){if((f!==ai||y!==ai)&&(s.blendEquation(s.FUNC_ADD),f=ai,y=ai),Kt)switch(U){case Di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case al:s.blendFunc(s.ONE,s.ONE);break;case rl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case al:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ol:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,w=null,D=null,E=null,C.set(0,0,0),L=0,m=U,S=Kt}return}ut=ut||st,ot=ot||j,Lt=Lt||K,(st!==f||ut!==y)&&(s.blendEquationSeparate($t[st],$t[ut]),f=st,y=ut),(j!==M||K!==w||ot!==D||Lt!==E)&&(s.blendFuncSeparate(ue[j],ue[K],ue[ot],ue[Lt]),M=j,w=K,D=ot,E=Lt),(he.equals(C)===!1||Me!==L)&&(s.blendColor(he.r,he.g,he.b,Me),C.copy(he),L=Me),m=U,S=!1}function Oe(U,st){U.side===Ve?Tt(s.CULL_FACE):at(s.CULL_FACE);let j=U.side===De;st&&(j=!j),Ot(j),U.blending===Di&&U.transparent===!1?F(Vn):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);const K=U.stencilWrite;o.setTest(K),K&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(U){b!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),b=U)}function zt(U){U!==tu?(at(s.CULL_FACE),U!==P&&(U===sl?s.cullFace(s.BACK):U===eu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),P=U}function wt(U){U!==O&&(G&&s.lineWidth(U),O=U)}function ae(U,st,j){U?(at(s.POLYGON_OFFSET_FILL),(N!==st||V!==j)&&(s.polygonOffset(st,j),N=st,V=j)):Tt(s.POLYGON_OFFSET_FILL)}function St(U){U?at(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function T(U){U===void 0&&(U=s.TEXTURE0+Y-1),nt!==U&&(s.activeTexture(U),nt=U)}function v(U,st,j){j===void 0&&(nt===null?j=s.TEXTURE0+Y-1:j=nt);let K=ht[j];K===void 0&&(K={type:void 0,texture:void 0},ht[j]=K),(K.type!==U||K.texture!==st)&&(nt!==j&&(s.activeTexture(j),nt=j),s.bindTexture(U,st||vt[U]),K.type=U,K.texture=st)}function B(){const U=ht[nt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(U){ee.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function pt(U){X.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Ht(U,st){let j=c.get(st);j===void 0&&(j=new WeakMap,c.set(st,j));let K=j.get(U);K===void 0&&(K=s.getUniformBlockIndex(st,U.name),j.set(U,K))}function Dt(U,st){const K=c.get(st).get(U);l.get(st)!==K&&(s.uniformBlockBinding(st,K,U.__bindingPointIndex),l.set(st,K))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,ht={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,w=null,y=null,D=null,E=null,C=new Bt(0,0,0),L=0,S=!1,b=null,P=null,O=null,N=null,V=null,ee.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:Tt,bindFramebuffer:Ct,drawBuffers:Ft,useProgram:ce,setBlending:F,setMaterial:Oe,setFlipSided:Ot,setCullFace:zt,setLineWidth:wt,setPolygonOffset:ae,setScissorTest:St,activeTexture:T,bindTexture:v,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:ft,texImage3D:Et,updateUBOMapping:Ht,uniformBlockBinding:Dt,texStorage2D:Vt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:bt,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:At,viewport:pt,reset:ne}}function ec(s,t,e,n){const i=sg(n);switch(e){case Zc:return s*t;case th:return s*t;case eh:return s*t*2;case nh:return s*t/i.components*i.byteLength;case Lo:return s*t/i.components*i.byteLength;case ih:return s*t*2/i.components*i.byteLength;case Po:return s*t*2/i.components*i.byteLength;case Qc:return s*t*3/i.components*i.byteLength;case Ze:return s*t*4/i.components*i.byteLength;case Uo:return s*t*4/i.components*i.byteLength;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hr:case Vr:return Math.max(s,16)*Math.max(t,8)/4;case zr:case $r:return Math.max(s,8)*Math.max(t,8)/2;case jr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case to:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case eo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case no:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case io:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _a:case oo:case lo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sh:case co:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ho:case uo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sg(s){switch(s){case An:case Kc:return{byteLength:1,components:1};case Ts:case Yc:case Ls:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case ci:case Ao:case Mn:return{byteLength:4,components:1};case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ag(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Rs("canvas")}function _(T,v,B){let q=1;const J=St(T);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(q*J.width),bt=Math.floor(q*J.height);u===void 0&&(u=g(W,bt));const rt=v?g(W,bt):u;return rt.width=W,rt.height=bt,rt.getContext("2d").drawImage(T,0,0,W,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+bt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(T,v,B,q,J=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=v;if(v===s.RED&&(B===s.FLOAT&&(W=s.R32F),B===s.HALF_FLOAT&&(W=s.R16F),B===s.UNSIGNED_BYTE&&(W=s.R8)),v===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.R8UI),B===s.UNSIGNED_SHORT&&(W=s.R16UI),B===s.UNSIGNED_INT&&(W=s.R32UI),B===s.BYTE&&(W=s.R8I),B===s.SHORT&&(W=s.R16I),B===s.INT&&(W=s.R32I)),v===s.RG&&(B===s.FLOAT&&(W=s.RG32F),B===s.HALF_FLOAT&&(W=s.RG16F),B===s.UNSIGNED_BYTE&&(W=s.RG8)),v===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RG8UI),B===s.UNSIGNED_SHORT&&(W=s.RG16UI),B===s.UNSIGNED_INT&&(W=s.RG32UI),B===s.BYTE&&(W=s.RG8I),B===s.SHORT&&(W=s.RG16I),B===s.INT&&(W=s.RG32I)),v===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGB8UI),B===s.UNSIGNED_SHORT&&(W=s.RGB16UI),B===s.UNSIGNED_INT&&(W=s.RGB32UI),B===s.BYTE&&(W=s.RGB8I),B===s.SHORT&&(W=s.RGB16I),B===s.INT&&(W=s.RGB32I)),v===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),B===s.UNSIGNED_INT&&(W=s.RGBA32UI),B===s.BYTE&&(W=s.RGBA8I),B===s.SHORT&&(W=s.RGBA16I),B===s.INT&&(W=s.RGBA32I)),v===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),v===s.RGBA){const bt=J?La:jt.getTransfer(q);B===s.FLOAT&&(W=s.RGBA32F),B===s.HALF_FLOAT&&(W=s.RGBA16F),B===s.UNSIGNED_BYTE&&(W=bt===Zt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(T,v){let B;return T?v===null||v===ci||v===Gi?B=s.DEPTH24_STENCIL8:v===Mn?B=s.DEPTH32F_STENCIL8:v===Ts&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===Gi?B=s.DEPTH_COMPONENT24:v===Mn?B=s.DEPTH_COMPONENT32F:v===Ts&&(B=s.DEPTH_COMPONENT16),B}function D(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qe&&T.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){const v=T.target;v.removeEventListener("dispose",E),L(v),v.isVideoTexture&&h.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),b(v)}function L(T){const v=n.get(T);if(v.__webglInit===void 0)return;const B=T.source,q=d.get(B);if(q){const J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(T),Object.keys(q).length===0&&d.delete(B)}n.remove(T)}function S(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const B=T.source,q=d.get(B);delete q[v.__cacheKey],r.memory.textures--}function b(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[q][J]);else s.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)s.deleteFramebuffer(v.__webglFramebuffer[q]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=T.textures;for(let q=0,J=B.length;q<J;q++){const W=n.get(B[q]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),r.memory.textures--),n.remove(B[q])}n.remove(T)}let P=0;function O(){P=0}function N(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function V(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Y(T,v){const B=n.get(T);if(T.isVideoTexture&&wt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,T,v);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+v)}function G(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+v)}function Z(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,v);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+v)}function $(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){et(B,T,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+v)}const nt={[Br]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[Or]:s.MIRRORED_REPEAT},ht={[Qe]:s.NEAREST,[Lu]:s.NEAREST_MIPMAP_NEAREST,[ks]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[Ia]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},Mt={[Iu]:s.NEVER,[zu]:s.ALWAYS,[ku]:s.LESS,[rh]:s.LEQUAL,[Fu]:s.EQUAL,[Ou]:s.GEQUAL,[Nu]:s.GREATER,[Bu]:s.NOTEQUAL};function kt(T,v){if(v.type===Mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===Ia||v.magFilter===ks||v.magFilter===li||v.minFilter===cn||v.minFilter===Ia||v.minFilter===ks||v.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,nt[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,nt[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,nt[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ht[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qe||v.minFilter!==ks&&v.minFilter!==li||v.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",E));const q=v.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const W=V(v);if(W!==T.__cacheKey){J[W]===void 0&&(J[W]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,B=!0),J[W].usedTimes++;const bt=J[T.__cacheKey];bt!==void 0&&(J[T.__cacheKey].usedTimes--,bt.usedTimes===0&&S(v)),T.__cacheKey=W,T.__webglTexture=J[W].texture}return B}function X(T,v,B){let q=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=s.TEXTURE_3D);const J=ee(T,v),W=v.source;e.bindTexture(q,T.__webglTexture,s.TEXTURE0+B);const bt=n.get(W);if(W.version!==bt.__version||J===!0){e.activeTexture(s.TEXTURE0+B);const rt=jt.getPrimaries(jt.workingColorSpace),dt=v.colorSpace===Hn?null:jt.getPrimaries(v.colorSpace),Vt=v.colorSpace===Hn||rt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Q=_(v.image,!1,i.maxTextureSize);Q=ae(v,Q);const ft=a.convert(v.format,v.colorSpace),Et=a.convert(v.type);let At=w(v.internalFormat,ft,Et,v.colorSpace,v.isVideoTexture);kt(q,v);let pt;const Ht=v.mipmaps,Dt=v.isVideoTexture!==!0,ne=bt.__version===void 0||J===!0,U=W.dataReady,st=D(v,Q);if(v.isDepthTexture)At=y(v.format===Wi,v.type),ne&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,At,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,At,Q.width,Q.height,0,ft,Et,null));else if(v.isDataTexture)if(Ht.length>0){Dt&&ne&&e.texStorage2D(s.TEXTURE_2D,st,At,Ht[0].width,Ht[0].height);for(let j=0,K=Ht.length;j<K;j++)pt=Ht[j],Dt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,ft,Et,pt.data):e.texImage2D(s.TEXTURE_2D,j,At,pt.width,pt.height,0,ft,Et,pt.data);v.generateMipmaps=!1}else Dt?(ne&&e.texStorage2D(s.TEXTURE_2D,st,At,Q.width,Q.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Et,Q.data)):e.texImage2D(s.TEXTURE_2D,0,At,Q.width,Q.height,0,ft,Et,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,At,Ht[0].width,Ht[0].height,Q.depth);for(let j=0,K=Ht.length;j<K;j++)if(pt=Ht[j],v.format!==Ze)if(ft!==null)if(Dt){if(U)if(v.layerUpdates.size>0){const ut=ec(pt.width,pt.height,v.format,v.type);for(const ot of v.layerUpdates){const Lt=pt.data.subarray(ot*ut/pt.data.BYTES_PER_ELEMENT,(ot+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,ot,pt.width,pt.height,1,ft,Lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,At,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,Q.depth,ft,Et,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,At,pt.width,pt.height,Q.depth,0,ft,Et,pt.data)}else{Dt&&ne&&e.texStorage2D(s.TEXTURE_2D,st,At,Ht[0].width,Ht[0].height);for(let j=0,K=Ht.length;j<K;j++)pt=Ht[j],v.format!==Ze?ft!==null?Dt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,At,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,ft,Et,pt.data):e.texImage2D(s.TEXTURE_2D,j,At,pt.width,pt.height,0,ft,Et,pt.data)}else if(v.isDataArrayTexture)if(Dt){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,At,Q.width,Q.height,Q.depth),U)if(v.layerUpdates.size>0){const j=ec(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ut=Q.data.subarray(K*j/Q.data.BYTES_PER_ELEMENT,(K+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ft,Et,ut)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Et,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,Q.width,Q.height,Q.depth,0,ft,Et,Q.data);else if(v.isData3DTexture)Dt?(ne&&e.texStorage3D(s.TEXTURE_3D,st,At,Q.width,Q.height,Q.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Et,Q.data)):e.texImage3D(s.TEXTURE_3D,0,At,Q.width,Q.height,Q.depth,0,ft,Et,Q.data);else if(v.isFramebufferTexture){if(ne)if(Dt)e.texStorage2D(s.TEXTURE_2D,st,At,Q.width,Q.height);else{let j=Q.width,K=Q.height;for(let ut=0;ut<st;ut++)e.texImage2D(s.TEXTURE_2D,ut,At,j,K,0,ft,Et,null),j>>=1,K>>=1}}else if(Ht.length>0){if(Dt&&ne){const j=St(Ht[0]);e.texStorage2D(s.TEXTURE_2D,st,At,j.width,j.height)}for(let j=0,K=Ht.length;j<K;j++)pt=Ht[j],Dt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,ft,Et,pt):e.texImage2D(s.TEXTURE_2D,j,At,ft,Et,pt);v.generateMipmaps=!1}else if(Dt){if(ne){const j=St(Q);e.texStorage2D(s.TEXTURE_2D,st,At,j.width,j.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Et,Q)}else e.texImage2D(s.TEXTURE_2D,0,At,ft,Et,Q);m(v)&&f(q),bt.__version=W.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function et(T,v,B){if(v.image.length!==6)return;const q=ee(T,v),J=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+B);const W=n.get(J);if(J.version!==W.__version||q===!0){e.activeTexture(s.TEXTURE0+B);const bt=jt.getPrimaries(jt.workingColorSpace),rt=v.colorSpace===Hn?null:jt.getPrimaries(v.colorSpace),dt=v.colorSpace===Hn||bt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Vt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Vt&&!Q?ft[K]=_(v.image[K],!0,i.maxCubemapSize):ft[K]=Q?v.image[K].image:v.image[K],ft[K]=ae(v,ft[K]);const Et=ft[0],At=a.convert(v.format,v.colorSpace),pt=a.convert(v.type),Ht=w(v.internalFormat,At,pt,v.colorSpace),Dt=v.isVideoTexture!==!0,ne=W.__version===void 0||q===!0,U=J.dataReady;let st=D(v,Et);kt(s.TEXTURE_CUBE_MAP,v);let j;if(Vt){Dt&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ht,Et.width,Et.height);for(let K=0;K<6;K++){j=ft[K].mipmaps;for(let ut=0;ut<j.length;ut++){const ot=j[ut];v.format!==Ze?At!==null?Dt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ot.width,ot.height,At,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Ht,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ot.width,ot.height,At,pt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Ht,ot.width,ot.height,0,At,pt,ot.data)}}}else{if(j=v.mipmaps,Dt&&ne){j.length>0&&st++;const K=St(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Dt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,At,pt,ft[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ft[K].width,ft[K].height,0,At,pt,ft[K].data);for(let ut=0;ut<j.length;ut++){const Lt=j[ut].image[K].image;Dt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Lt.width,Lt.height,At,pt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Ht,Lt.width,Lt.height,0,At,pt,Lt.data)}}else{Dt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,At,pt,ft[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,At,pt,ft[K]);for(let ut=0;ut<j.length;ut++){const ot=j[ut];Dt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,At,pt,ot.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Ht,At,pt,ot.image[K])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),W.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function vt(T,v,B,q,J,W){const bt=a.convert(B.format,B.colorSpace),rt=a.convert(B.type),dt=w(B.internalFormat,bt,rt,B.colorSpace),Vt=n.get(v),Q=n.get(B);if(Q.__renderTarget=v,!Vt.__hasExternalTextures){const ft=Math.max(1,v.width>>W),Et=Math.max(1,v.height>>W);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,W,dt,ft,Et,v.depth,0,bt,rt,null):e.texImage2D(J,W,dt,ft,Et,0,bt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),zt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,J,Q.__webglTexture,0,Ot(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,J,Q.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(T,v,B){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,W=y(v.stencilBuffer,J),bt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=Ot(v);zt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,W,v.width,v.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,W,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,W,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,T)}else{const q=v.textures;for(let J=0;J<q.length;J++){const W=q[J],bt=a.convert(W.format,W.colorSpace),rt=a.convert(W.type),dt=w(W.internalFormat,bt,rt,W.colorSpace),Vt=Ot(v);B&&zt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,dt,v.width,v.height):zt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,dt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,dt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const J=q.__webglTexture,W=Ot(v);if(v.depthTexture.format===Ii)zt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===Wi)zt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ct(T){const v=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Tt(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=s.createRenderbuffer(),at(v.__webglDepthbuffer[q],T,!1);else{const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,W)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),at(v.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(T,v,B){const q=n.get(T);v!==void 0&&vt(q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ct(T)}function ce(T){const v=T.texture,B=n.get(T),q=n.get(v);T.addEventListener("dispose",C);const J=T.textures,W=T.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=v.version,r.memory.textures++),W){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let dt=0;dt<v.mipmaps.length;dt++)B.__webglFramebuffer[rt][dt]=s.createFramebuffer()}else B.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)B.__webglFramebuffer[rt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(bt)for(let rt=0,dt=J.length;rt<dt;rt++){const Vt=n.get(J[rt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&zt(T)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const dt=J[rt];B.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const Vt=a.convert(dt.format,dt.colorSpace),Q=a.convert(dt.type),ft=w(dt.internalFormat,Vt,Q,dt.colorSpace,T.isXRRenderTarget===!0),Et=Ot(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),at(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),kt(s.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)vt(B.__webglFramebuffer[rt][dt],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else vt(B.__webglFramebuffer[rt],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let rt=0,dt=J.length;rt<dt;rt++){const Vt=J[rt],Q=n.get(Vt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),kt(s.TEXTURE_2D,Vt),vt(B.__webglFramebuffer,T,Vt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(Vt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,q.__webglTexture),kt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)vt(B.__webglFramebuffer[dt],T,v,s.COLOR_ATTACHMENT0,rt,dt);else vt(B.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,rt,0);m(v)&&f(rt),e.unbindTexture()}T.depthBuffer&&Ct(T)}function $t(T){const v=T.textures;for(let B=0,q=v.length;B<q;B++){const J=v[B];if(m(J)){const W=M(T),bt=n.get(J).__webglTexture;e.bindTexture(W,bt),f(W),e.unbindTexture()}}}const ue=[],F=[];function Oe(T){if(T.samples>0){if(zt(T)===!1){const v=T.textures,B=T.width,q=T.height;let J=s.COLOR_BUFFER_BIT;const W=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(T),rt=v.length>1;if(rt)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[dt]);const Vt=n.get(v[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,B,q,0,0,B,q,J,s.NEAREST),l===!0&&(ue.length=0,F.length=0,ue.push(s.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ue.push(W),F.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[dt]);const Vt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ot(T){return Math.min(i.maxSamples,T.samples)}function zt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(T){const v=r.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ae(T,v){const B=T.colorSpace,q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==qi&&B!==Hn&&(jt.getTransfer(B)===Zt?(q!==Ze||J!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=Ft,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=zt}function rg(s,t){function e(n,i=Hn){let a;const r=jt.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===Ro)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return s.BYTE;if(n===Yc)return s.SHORT;if(n===Ts)return s.UNSIGNED_SHORT;if(n===Ao)return s.INT;if(n===ci)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===Ls)return s.HALF_FLOAT;if(n===Zc)return s.ALPHA;if(n===Qc)return s.RGB;if(n===Ze)return s.RGBA;if(n===th)return s.LUMINANCE;if(n===eh)return s.LUMINANCE_ALPHA;if(n===Ii)return s.DEPTH_COMPONENT;if(n===Wi)return s.DEPTH_STENCIL;if(n===nh)return s.RED;if(n===Lo)return s.RED_INTEGER;if(n===ih)return s.RG;if(n===Po)return s.RG_INTEGER;if(n===Uo)return s.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(r===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zr||n===Hr||n===$r||n===Vr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===zr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===Gr||n===Wr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===jr||n===Gr)return r===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Wr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xr||n===qr||n===Kr||n===Yr||n===Jr||n===Zr||n===Qr||n===to||n===eo||n===no||n===io||n===so||n===ao||n===ro)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Xr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===oo||n===lo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===_a)return r===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===co||n===ho||n===uo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===_a)return a.COMPRESSED_RED_RGTC1_EXT;if(n===co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class og extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qn({vertexShader:cg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dg extends Ki{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new ug,m=e.getContextAttributes();let f=null,M=null;const w=[],y=[],D=new ct;let E=null;const C=new Be;C.viewport=new te;const L=new Be;L.viewport=new te;const S=[C,L],b=new og;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=w[X];return et===void 0&&(et=new or,w[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=w[X];return et===void 0&&(et=new or,w[X]=et),et.getGripSpace()},this.getHand=function(X){let et=w[X];return et===void 0&&(et=new or,w[X]=et),et.getHandSpace()};function N(X){const et=y.indexOf(X.inputSource);if(et===-1)return;const vt=w[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||r),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Y);for(let X=0;X<w.length;X++){const et=y[X];et!==null&&(y[X]=null,w[X].disconnect(et))}P=null,O=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,M=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new hi(p.framebufferWidth,p.framebufferHeight,{format:Ze,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Wi:Ii,vt=m.stencil?Gi:ci);const Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:a};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new hi(d.textureWidth,d.textureHeight,{format:Ze,type:An,depthTexture:new yh(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(X){for(let et=0;et<X.removed.length;et++){const vt=X.removed[et],at=y.indexOf(vt);at>=0&&(y[at]=null,w[at].disconnect(vt))}for(let et=0;et<X.added.length;et++){const vt=X.added[et];let at=y.indexOf(vt);if(at===-1){for(let Ct=0;Ct<w.length;Ct++)if(Ct>=y.length){y.push(vt),at=Ct;break}else if(y[Ct]===null){y[Ct]=vt,at=Ct;break}if(at===-1)break}const Tt=w[at];Tt&&Tt.connect(vt)}}const G=new A,Z=new A;function $(X,et,vt){G.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);const at=G.distanceTo(Z),Tt=et.projectionMatrix.elements,Ct=vt.projectionMatrix.elements,Ft=Tt[14]/(Tt[10]-1),ce=Tt[14]/(Tt[10]+1),$t=(Tt[9]+1)/Tt[5],ue=(Tt[9]-1)/Tt[5],F=(Tt[8]-1)/Tt[0],Oe=(Ct[8]+1)/Ct[0],Ot=Ft*F,zt=Ft*Oe,wt=at/(-F+Oe),ae=wt*-F;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ae),X.translateZ(wt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const St=Ft+wt,T=ce+wt,v=Ot-ae,B=zt+(at-ae),q=$t*ce/T*St,J=ue*ce/T*St;X.projectionMatrix.makePerspective(v,B,q,J,St,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,vt=X.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),b.near=L.near=C.near=et,b.far=L.far=C.far=vt,(P!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,O=b.far),C.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,b.layers.mask=C.layers.mask|L.layers.mask;const at=X.parent,Tt=b.cameras;nt(b,at);for(let Ct=0;Ct<Tt.length;Ct++)nt(Tt[Ct],at);Tt.length===2?$(b,C,L):b.projectionMatrix.copy(C.projectionMatrix),ht(X,b,at)};function ht(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=As*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Mt=null;function kt(X,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let at=!1;vt.length!==b.cameras.length&&(b.cameras.length=0,at=!0);for(let Ct=0;Ct<vt.length;Ct++){const Ft=vt[Ct];let ce=null;if(p!==null)ce=p.getViewport(Ft);else{const ue=u.getViewSubImage(d,Ft);ce=ue.viewport,Ct===0&&(t.setRenderTargetTextures(M,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(M))}let $t=S[Ct];$t===void 0&&($t=new Be,$t.layers.enable(Ct),$t.viewport=new te,S[Ct]=$t),$t.matrix.fromArray(Ft.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ft.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ce.x,ce.y,ce.width,ce.height),Ct===0&&(b.matrix.copy($t.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),at===!0&&b.cameras.push($t)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Ct=u.getDepthInformation(vt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let vt=0;vt<w.length;vt++){const at=y[vt],Tt=w[vt];at!==null&&Tt!==void 0&&Tt.update(at,et,c||r)}Mt&&Mt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ee=new _h;ee.setAnimationLoop(kt),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}}const ei=new un,fg=new se;function pg(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ph(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,ei.copy(y),ei.x*=-1,ei.y*=-1,ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(fg.makeRotationFromEuler(ei)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mg(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){const y=w.program;n.uniformBlockBinding(M,y)}function c(M,w){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const D=w.program;n.updateUBOMapping(M,D);const E=t.render.frame;a[M.id]!==E&&(d(M),a[M.id]=E)}function h(M){const w=u();M.__bindingPointIndex=w;const y=s.createBuffer(),D=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,D,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,y),y}function u(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=i[M.id],y=M.uniforms,D=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,C=y.length;E<C;E++){const L=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,b=L.length;S<b;S++){const P=L[S];if(p(P,E,S,D)===!0){const O=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let Y=0;Y<N.length;Y++){const G=N[Y],Z=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,O+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,w,y,D){const E=M.value,C=w+"_"+y;if(D[C]===void 0)return typeof E=="number"||typeof E=="boolean"?D[C]=E:D[C]=E.clone(),!0;{const L=D[C];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return D[C]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(M){const w=M.uniforms;let y=0;const D=16;for(let C=0,L=w.length;C<L;C++){const S=Array.isArray(w[C])?w[C]:[w[C]];for(let b=0,P=S.length;b<P;b++){const O=S[b],N=Array.isArray(O.value)?O.value:[O.value];for(let V=0,Y=N.length;V<Y;V++){const G=N[V],Z=_(G),$=y%D,nt=$%Z.boundary,ht=$+nt;y+=nt,ht!==0&&D-ht<Z.storage&&(y+=D-ht),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=Z.storage}}}const E=y%D;return E>0&&(y+=D-E),M.__size=y,M.__cache={},this}function _(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){const w=M.target;w.removeEventListener("dispose",m);const y=r.indexOf(w.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete a[w.id]}function f(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},a={}}return{bind:l,update:c,dispose:f}}class gg{constructor(t={}){const{canvas:e=id(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=jn,this.toneMappingExposure=1;const y=this;let D=!1,E=0,C=0,L=null,S=-1,b=null;const P=new te,O=new te;let N=null;const V=new Bt(0);let Y=0,G=e.width,Z=e.height,$=1,nt=null,ht=null;const Mt=new te(0,0,G,Z),kt=new te(0,0,G,Z);let ee=!1;const X=new Fo;let et=!1,vt=!1;const at=new se,Tt=new se,Ct=new A,Ft=new te,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function ue(){return L===null?$:1}let F=n;function Oe(x,I){return e.getContext(x,I)}try{const x={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ot,!1),F===null){const I="webgl2";if(F=Oe(I,x),F===null)throw Oe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ot,zt,wt,ae,St,T,v,B,q,J,W,bt,rt,dt,Vt,Q,ft,Et,At,pt,Ht,Dt,ne,U;function st(){Ot=new xm(F),Ot.init(),Dt=new rg(F,Ot),zt=new mm(F,Ot,t,Dt),wt=new ig(F,Ot),zt.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),ae=new wm(F),St=new $0,T=new ag(F,Ot,wt,St,zt,Dt,ae),v=new _m(y),B=new bm(y),q=new Ld(F),ne=new fm(F,q),J=new Mm(F,q,ae,ne),W=new Tm(F,J,q,ae),At=new Em(F,zt,T),Q=new gm(St),bt=new H0(y,v,B,Ot,zt,ne,Q),rt=new pg(y,St),dt=new j0,Vt=new Y0(Ot),Et=new dm(y,v,B,wt,W,p,l),ft=new eg(y,W,zt),U=new mg(F,ae,zt,wt),pt=new pm(F,Ot,ae),Ht=new Sm(F,Ot,ae),ae.programs=bt.programs,y.capabilities=zt,y.extensions=Ot,y.properties=St,y.renderLists=dt,y.shadowMap=ft,y.state=wt,y.info=ae}st();const j=new dg(y,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=Ot.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ot.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(G,Z,!1))},this.getSize=function(x){return x.set(G,Z)},this.setSize=function(x,I,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,Z=I,e.width=Math.floor(x*$),e.height=Math.floor(I*$),z===!0&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(G*$,Z*$).floor()},this.setDrawingBufferSize=function(x,I,z){G=x,Z=I,$=z,e.width=Math.floor(x*z),e.height=Math.floor(I*z),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(Mt)},this.setViewport=function(x,I,z,H){x.isVector4?Mt.set(x.x,x.y,x.z,x.w):Mt.set(x,I,z,H),wt.viewport(P.copy(Mt).multiplyScalar($).round())},this.getScissor=function(x){return x.copy(kt)},this.setScissor=function(x,I,z,H){x.isVector4?kt.set(x.x,x.y,x.z,x.w):kt.set(x,I,z,H),wt.scissor(O.copy(kt).multiplyScalar($).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(x){wt.setScissorTest(ee=x)},this.setOpaqueSort=function(x){nt=x},this.setTransparentSort=function(x){ht=x},this.getClearColor=function(x){return x.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(x=!0,I=!0,z=!0){let H=0;if(x){let k=!1;if(L!==null){const tt=L.texture.format;k=tt===Uo||tt===Po||tt===Lo}if(k){const tt=L.texture.type,lt=tt===An||tt===ci||tt===Ts||tt===Gi||tt===Ro||tt===Co,mt=Et.getClearColor(),gt=Et.getClearAlpha(),Rt=mt.r,Pt=mt.g,_t=mt.b;lt?(g[0]=Rt,g[1]=Pt,g[2]=_t,g[3]=gt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Rt,_[1]=Pt,_[2]=_t,_[3]=gt,F.clearBufferiv(F.COLOR,0,_))}else H|=F.COLOR_BUFFER_BIT}I&&(H|=F.DEPTH_BUFFER_BIT),z&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),Vt.dispose(),St.dispose(),v.dispose(),B.dispose(),W.dispose(),ne.dispose(),U.dispose(),bt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Yo),j.removeEventListener("sessionend",Jo),Kn.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const x=ae.autoReset,I=ft.enabled,z=ft.autoUpdate,H=ft.needsUpdate,k=ft.type;st(),ae.autoReset=x,ft.enabled=I,ft.autoUpdate=z,ft.needsUpdate=H,ft.type=k}function ot(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Lt(x){const I=x.target;I.removeEventListener("dispose",Lt),he(I)}function he(x){Me(x),St.remove(x)}function Me(x){const I=St.get(x).programs;I!==void 0&&(I.forEach(function(z){bt.releaseProgram(z)}),x.isShaderMaterial&&bt.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,z,H,k,tt){I===null&&(I=ce);const lt=k.isMesh&&k.matrixWorld.determinant()<0,mt=Kh(x,I,z,H,k);wt.setMaterial(H,lt);let gt=z.index,Rt=1;if(H.wireframe===!0){if(gt=J.getWireframeAttribute(z),gt===void 0)return;Rt=2}const Pt=z.drawRange,_t=z.attributes.position;let Gt=Pt.start*Rt,ie=(Pt.start+Pt.count)*Rt;tt!==null&&(Gt=Math.max(Gt,tt.start*Rt),ie=Math.min(ie,(tt.start+tt.count)*Rt)),gt!==null?(Gt=Math.max(Gt,0),ie=Math.min(ie,gt.count)):_t!=null&&(Gt=Math.max(Gt,0),ie=Math.min(ie,_t.count));const re=ie-Gt;if(re<0||re===1/0)return;ne.setup(k,H,mt,z,gt);let Le,Xt=pt;if(gt!==null&&(Le=q.get(gt),Xt=Ht,Xt.setIndex(Le)),k.isMesh)H.wireframe===!0?(wt.setLineWidth(H.wireframeLinewidth*ue()),Xt.setMode(F.LINES)):Xt.setMode(F.TRIANGLES);else if(k.isLine){let xt=H.linewidth;xt===void 0&&(xt=1),wt.setLineWidth(xt*ue()),k.isLineSegments?Xt.setMode(F.LINES):k.isLineLoop?Xt.setMode(F.LINE_LOOP):Xt.setMode(F.LINE_STRIP)}else k.isPoints?Xt.setMode(F.POINTS):k.isSprite&&Xt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Xt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Xt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const xt=k._multiDrawStarts,pn=k._multiDrawCounts,qt=k._multiDrawCount,We=gt?q.get(gt).bytesPerElement:1,di=St.get(H).currentProgram.getUniforms();for(let ke=0;ke<qt;ke++)di.setValue(F,"_gl_DrawID",ke),Xt.render(xt[ke]/We,pn[ke])}else if(k.isInstancedMesh)Xt.renderInstances(Gt,re,k.count);else if(z.isInstancedBufferGeometry){const xt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,pn=Math.min(z.instanceCount,xt);Xt.renderInstances(Gt,re,pn)}else Xt.render(Gt,re)};function Kt(x,I,z){x.transparent===!0&&x.side===Ve&&x.forceSinglePass===!1?(x.side=De,x.needsUpdate=!0,Is(x,I,z),x.side=Xn,x.needsUpdate=!0,Is(x,I,z),x.side=Ve):Is(x,I,z)}this.compile=function(x,I,z=null){z===null&&(z=x),f=Vt.get(z),f.init(I),w.push(f),z.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),x!==z&&x.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const H=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const tt=k.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const mt=tt[lt];Kt(mt,z,k),H.add(mt)}else Kt(tt,z,k),H.add(tt)}),w.pop(),f=null,H},this.compileAsync=function(x,I,z=null){const H=this.compile(x,I,z);return new Promise(k=>{function tt(){if(H.forEach(function(lt){St.get(lt).currentProgram.isReady()&&H.delete(lt)}),H.size===0){k(x);return}setTimeout(tt,10)}Ot.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ge=null;function fn(x){Ge&&Ge(x)}function Yo(){Kn.stop()}function Jo(){Kn.start()}const Kn=new _h;Kn.setAnimationLoop(fn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(x){Ge=x,j.setAnimationLoop(x),x===null?Kn.stop():Kn.start()},j.addEventListener("sessionstart",Yo),j.addEventListener("sessionend",Jo),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,I,L),f=Vt.get(x,w.length),f.init(I),w.push(f),Tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(Tt),vt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,vt),m=dt.get(x,M.length),m.init(),M.push(m),j.enabled===!0&&j.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&Da(tt,I,-1/0,y.sortObjects)}Da(x,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(nt,ht),$t=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,$t&&Et.addToRenderList(m,x),this.info.render.frame++,et===!0&&Q.beginShadows();const z=f.state.shadowsArray;ft.render(z,x,I),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,k=m.transmissive;if(f.setupLights(),I.isArrayCamera){const tt=I.cameras;if(k.length>0)for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];Qo(H,k,x,gt)}$t&&Et.render(x);for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];Zo(m,x,gt,gt.viewport)}}else k.length>0&&Qo(H,k,x,I),$t&&Et.render(x),Zo(m,x,I);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(y,x,I),ne.resetDefaultState(),S=-1,b=null,w.pop(),w.length>0?(f=w[w.length-1],et===!0&&Q.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Da(x,I,z,H){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){H&&Ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Tt);const lt=W.update(x),mt=x.material;mt.visible&&m.push(x,lt,mt,z,Ft.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const lt=W.update(x),mt=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ft.copy(x.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ft.copy(lt.boundingSphere.center)),Ft.applyMatrix4(x.matrixWorld).applyMatrix4(Tt)),Array.isArray(mt)){const gt=lt.groups;for(let Rt=0,Pt=gt.length;Rt<Pt;Rt++){const _t=gt[Rt],Gt=mt[_t.materialIndex];Gt&&Gt.visible&&m.push(x,lt,Gt,z,Ft.z,_t)}}else mt.visible&&m.push(x,lt,mt,z,Ft.z,null)}}const tt=x.children;for(let lt=0,mt=tt.length;lt<mt;lt++)Da(tt[lt],I,z,H)}function Zo(x,I,z,H){const k=x.opaque,tt=x.transmissive,lt=x.transparent;f.setupLightsView(z),et===!0&&Q.setGlobalState(y.clippingPlanes,z),H&&wt.viewport(P.copy(H)),k.length>0&&Ds(k,I,z),tt.length>0&&Ds(tt,I,z),lt.length>0&&Ds(lt,I,z),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Qo(x,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new hi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Ls:An,minFilter:li,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[H.id],lt=H.viewport||P;tt.setSize(lt.z,lt.w);const mt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(V),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),$t&&Et.render(z);const gt=y.toneMapping;y.toneMapping=jn;const Rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),et===!0&&Q.setGlobalState(y.clippingPlanes,H),Ds(x,z,H),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let _t=0,Gt=I.length;_t<Gt;_t++){const ie=I[_t],re=ie.object,Le=ie.geometry,Xt=ie.material,xt=ie.group;if(Xt.side===Ve&&re.layers.test(H.layers)){const pn=Xt.side;Xt.side=De,Xt.needsUpdate=!0,tl(re,z,H,Le,Xt,xt),Xt.side=pn,Xt.needsUpdate=!0,Pt=!0}}Pt===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}y.setRenderTarget(mt),y.setClearColor(V,Y),Rt!==void 0&&(H.viewport=Rt),y.toneMapping=gt}function Ds(x,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let k=0,tt=x.length;k<tt;k++){const lt=x[k],mt=lt.object,gt=lt.geometry,Rt=H===null?lt.material:H,Pt=lt.group;mt.layers.test(z.layers)&&tl(mt,I,z,gt,Rt,Pt)}}function tl(x,I,z,H,k,tt){x.onBeforeRender(y,I,z,H,k,tt),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(y,I,z,H,x,tt),k.transparent===!0&&k.side===Ve&&k.forceSinglePass===!1?(k.side=De,k.needsUpdate=!0,y.renderBufferDirect(z,I,H,k,x,tt),k.side=Xn,k.needsUpdate=!0,y.renderBufferDirect(z,I,H,k,x,tt),k.side=Ve):y.renderBufferDirect(z,I,H,k,x,tt),x.onAfterRender(y,I,z,H,k,tt)}function Is(x,I,z){I.isScene!==!0&&(I=ce);const H=St.get(x),k=f.state.lights,tt=f.state.shadowsArray,lt=k.state.version,mt=bt.getParameters(x,k.state,tt,I,z),gt=bt.getProgramCacheKey(mt);let Rt=H.programs;H.environment=x.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(x.isMeshStandardMaterial?B:v).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Rt===void 0&&(x.addEventListener("dispose",Lt),Rt=new Map,H.programs=Rt);let Pt=Rt.get(gt);if(Pt!==void 0){if(H.currentProgram===Pt&&H.lightsStateVersion===lt)return nl(x,mt),Pt}else mt.uniforms=bt.getUniforms(x),x.onBeforeCompile(mt,y),Pt=bt.acquireProgram(mt,gt),Rt.set(gt,Pt),H.uniforms=mt.uniforms;const _t=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_t.clippingPlanes=Q.uniform),nl(x,mt),H.needsLights=Jh(x),H.lightsStateVersion=lt,H.needsLights&&(_t.ambientLightColor.value=k.state.ambient,_t.lightProbe.value=k.state.probe,_t.directionalLights.value=k.state.directional,_t.directionalLightShadows.value=k.state.directionalShadow,_t.spotLights.value=k.state.spot,_t.spotLightShadows.value=k.state.spotShadow,_t.rectAreaLights.value=k.state.rectArea,_t.ltc_1.value=k.state.rectAreaLTC1,_t.ltc_2.value=k.state.rectAreaLTC2,_t.pointLights.value=k.state.point,_t.pointLightShadows.value=k.state.pointShadow,_t.hemisphereLights.value=k.state.hemi,_t.directionalShadowMap.value=k.state.directionalShadowMap,_t.directionalShadowMatrix.value=k.state.directionalShadowMatrix,_t.spotShadowMap.value=k.state.spotShadowMap,_t.spotLightMatrix.value=k.state.spotLightMatrix,_t.spotLightMap.value=k.state.spotLightMap,_t.pointShadowMap.value=k.state.pointShadowMap,_t.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Pt,H.uniformsList=null,Pt}function el(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=va.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function nl(x,I){const z=St.get(x);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Kh(x,I,z,H,k){I.isScene!==!0&&(I=ce),T.resetTextureUnits();const tt=I.fog,lt=H.isMeshStandardMaterial?I.environment:null,mt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qi,gt=(H.isMeshStandardMaterial?B:v).get(H.envMap||lt),Rt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_t=!!z.morphAttributes.position,Gt=!!z.morphAttributes.normal,ie=!!z.morphAttributes.color;let re=jn;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(re=y.toneMapping);const Le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Xt=Le!==void 0?Le.length:0,xt=St.get(H),pn=f.state.lights;if(et===!0&&(vt===!0||x!==b)){const ze=x===b&&H.id===S;Q.setState(H,x,ze)}let qt=!1;H.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==pn.state.version||xt.outputColorSpace!==mt||k.isBatchedMesh&&xt.batching===!1||!k.isBatchedMesh&&xt.batching===!0||k.isBatchedMesh&&xt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&xt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&xt.instancing===!1||!k.isInstancedMesh&&xt.instancing===!0||k.isSkinnedMesh&&xt.skinning===!1||!k.isSkinnedMesh&&xt.skinning===!0||k.isInstancedMesh&&xt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&xt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&xt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&xt.instancingMorph===!1&&k.morphTexture!==null||xt.envMap!==gt||H.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Q.numPlanes||xt.numIntersection!==Q.numIntersection)||xt.vertexAlphas!==Rt||xt.vertexTangents!==Pt||xt.morphTargets!==_t||xt.morphNormals!==Gt||xt.morphColors!==ie||xt.toneMapping!==re||xt.morphTargetsCount!==Xt)&&(qt=!0):(qt=!0,xt.__version=H.version);let We=xt.currentProgram;qt===!0&&(We=Is(H,I,k));let di=!1,ke=!1,Qi=!1;const oe=We.getUniforms(),nn=xt.uniforms;if(wt.useProgram(We.program)&&(di=!0,ke=!0,Qi=!0),H.id!==S&&(S=H.id,ke=!0),di||b!==x){wt.buffers.depth.getReversed()?(at.copy(x.projectionMatrix),ad(at),rd(at),oe.setValue(F,"projectionMatrix",at)):oe.setValue(F,"projectionMatrix",x.projectionMatrix),oe.setValue(F,"viewMatrix",x.matrixWorldInverse);const Rn=oe.map.cameraPosition;Rn!==void 0&&Rn.setValue(F,Ct.setFromMatrixPosition(x.matrixWorld)),zt.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&oe.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,ke=!0,Qi=!0)}if(k.isSkinnedMesh){oe.setOptional(F,k,"bindMatrix"),oe.setOptional(F,k,"bindMatrixInverse");const ze=k.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),oe.setValue(F,"boneTexture",ze.boneTexture,T))}k.isBatchedMesh&&(oe.setOptional(F,k,"batchingTexture"),oe.setValue(F,"batchingTexture",k._matricesTexture,T),oe.setOptional(F,k,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",k._indirectTexture,T),oe.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",k._colorsTexture,T));const ts=z.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&At.update(k,z,We),(ke||xt.receiveShadow!==k.receiveShadow)&&(xt.receiveShadow=k.receiveShadow,oe.setValue(F,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(nn.envMap.value=gt,nn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(nn.envMapIntensity.value=I.environmentIntensity),ke&&(oe.setValue(F,"toneMappingExposure",y.toneMappingExposure),xt.needsLights&&Yh(nn,Qi),tt&&H.fog===!0&&rt.refreshFogUniforms(nn,tt),rt.refreshMaterialUniforms(nn,H,$,Z,f.state.transmissionRenderTarget[x.id]),va.upload(F,el(xt),nn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(va.upload(F,el(xt),nn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&oe.setValue(F,"center",k.center),oe.setValue(F,"modelViewMatrix",k.modelViewMatrix),oe.setValue(F,"normalMatrix",k.normalMatrix),oe.setValue(F,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ze=H.uniformsGroups;for(let Rn=0,Cn=ze.length;Rn<Cn;Rn++){const il=ze[Rn];U.update(il,We),U.bind(il,We)}}return We}function Yh(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Jh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,I,z){St.get(x.texture).__webglTexture=I,St.get(x.depthTexture).__webglTexture=z;const H=St.get(x);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){const z=St.get(x);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,z=0){L=x,E=I,C=z;let H=!0,k=null,tt=!1,lt=!1;if(x){const gt=St.get(x);if(gt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(gt.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(gt.__hasExternalTextures)T.rebindTextures(x,St.get(x.texture).__webglTexture,St.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const _t=x.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&St.has(_t)&&(x.width!==_t.image.width||x.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const Rt=x.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Pt=St.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pt[I])?k=Pt[I][z]:k=Pt[I],tt=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?k=St.get(x).__webglMultisampledFramebuffer:Array.isArray(Pt)?k=Pt[z]:k=Pt,P.copy(x.viewport),O.copy(x.scissor),N=x.scissorTest}else P.copy(Mt).multiplyScalar($).floor(),O.copy(kt).multiplyScalar($).floor(),N=ee;if(wt.bindFramebuffer(F.FRAMEBUFFER,k)&&H&&wt.drawBuffers(x,k),wt.viewport(P),wt.scissor(O),wt.setScissorTest(N),tt){const gt=St.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,z)}else if(lt){const gt=St.get(x.texture),Rt=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,Rt)}S=-1},this.readRenderTargetPixels=function(x,I,z,H,k,tt,lt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=St.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){wt.bindFramebuffer(F.FRAMEBUFFER,mt);try{const gt=x.texture,Rt=gt.format,Pt=gt.type;if(!zt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-H&&z>=0&&z<=x.height-k&&F.readPixels(I,z,H,k,Dt.convert(Rt),Dt.convert(Pt),tt)}finally{const gt=L!==null?St.get(L).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(x,I,z,H,k,tt,lt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=St.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=x.texture,Rt=gt.format,Pt=gt.type;if(!zt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-H&&z>=0&&z<=x.height-k){wt.bindFramebuffer(F.FRAMEBUFFER,mt);const _t=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(I,z,H,k,Dt.convert(Rt),Dt.convert(Pt),0);const Gt=L!==null?St.get(L).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Gt);const ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await sd(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_t),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(_t),F.deleteSync(ie),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,I=null,z=0){x.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);const H=Math.pow(2,-z),k=Math.floor(x.image.width*H),tt=Math.floor(x.image.height*H),lt=I!==null?I.x:0,mt=I!==null?I.y:0;T.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,lt,mt,k,tt),wt.unbindTexture()},this.copyTextureToTexture=function(x,I,z=null,H=null,k=0){x.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,x=arguments[1],I=arguments[2],k=arguments[3]||0,z=null);let tt,lt,mt,gt,Rt,Pt,_t,Gt,ie;const re=x.isCompressedTexture?x.mipmaps[k]:x.image;z!==null?(tt=z.max.x-z.min.x,lt=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,gt=z.min.x,Rt=z.min.y,Pt=z.isBox3?z.min.z:0):(tt=re.width,lt=re.height,mt=re.depth||1,gt=0,Rt=0,Pt=0),H!==null?(_t=H.x,Gt=H.y,ie=H.z):(_t=0,Gt=0,ie=0);const Le=Dt.convert(I.format),Xt=Dt.convert(I.type);let xt;I.isData3DTexture?(T.setTexture3D(I,0),xt=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),xt=F.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),xt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const pn=F.getParameter(F.UNPACK_ROW_LENGTH),qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),We=F.getParameter(F.UNPACK_SKIP_PIXELS),di=F.getParameter(F.UNPACK_SKIP_ROWS),ke=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,gt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pt);const Qi=x.isDataArrayTexture||x.isData3DTexture,oe=I.isDataArrayTexture||I.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const nn=St.get(x),ts=St.get(I),ze=St.get(nn.__renderTarget),Rn=St.get(ts.__renderTarget);wt.bindFramebuffer(F.READ_FRAMEBUFFER,ze.__webglFramebuffer),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Cn=0;Cn<mt;Cn++)Qi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.get(x).__webglTexture,k,Pt+Cn),x.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.get(I).__webglTexture,k,ie+Cn),F.blitFramebuffer(gt,Rt,tt,lt,_t,Gt,tt,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(xt,k,_t,Gt,ie+Cn,gt,Rt,tt,lt):F.copyTexSubImage2D(xt,k,_t,Gt,ie+Cn,gt,Rt,tt,lt);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(xt,k,_t,Gt,ie,tt,lt,mt,Le,Xt,re.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(xt,k,_t,Gt,ie,tt,lt,mt,Le,re.data):F.texSubImage3D(xt,k,_t,Gt,ie,tt,lt,mt,Le,Xt,re):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,_t,Gt,tt,lt,Le,Xt,re.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,_t,Gt,re.width,re.height,Le,re.data):F.texSubImage2D(F.TEXTURE_2D,k,_t,Gt,tt,lt,Le,Xt,re);F.pixelStorei(F.UNPACK_ROW_LENGTH,pn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,We),F.pixelStorei(F.UNPACK_SKIP_ROWS,di),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ke),k===0&&I.generateMipmaps&&F.generateMipmap(xt),wt.unbindTexture()},this.copyTextureToTexture3D=function(x,I,z=null,H=null,k=0){return x.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,x=arguments[2],I=arguments[3],k=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,z,H,k)},this.initRenderTarget=function(x){St.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),wt.unbindTexture()},this.resetState=function(){E=0,C=0,L=null,wt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class oi{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new oi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _g extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fo,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,a=this.stride;i<a;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new A;class Ea{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array),a=Yt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ta extends Yi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ai;const as=new A,Ri=new A,Ci=new A,Li=new ct,rs=new ct,wh=new se,na=new A,os=new A,ia=new A,nc=new ct,lr=new ct,ic=new ct;class Aa extends ye{constructor(t=new Ta){if(super(),this.isSprite=!0,this.type="Sprite",Ai===void 0){Ai=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vg(e,5);Ai.setIndex([0,1,2,0,2,3]),Ai.setAttribute("position",new Ea(n,3,0,!1)),Ai.setAttribute("uv",new Ea(n,2,3,!1))}this.geometry=Ai,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ci.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;sa(na.set(-.5,-.5,0),Ci,r,Ri,i,a),sa(os.set(.5,-.5,0),Ci,r,Ri,i,a),sa(ia.set(.5,.5,0),Ci,r,Ri,i,a),nc.set(0,0),lr.set(1,0),ic.set(1,1);let o=t.ray.intersectTriangle(na,os,ia,!1,as);if(o===null&&(sa(os.set(-.5,.5,0),Ci,r,Ri,i,a),lr.set(0,1),o=t.ray.intersectTriangle(na,ia,os,!1,as),o===null))return;const l=t.ray.origin.distanceTo(as);l<t.near||l>t.far||e.push({distance:l,point:as.clone(),uv:je.getInterpolation(as,na,os,ia,nc,lr,ic,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function sa(s,t,e,n,i,a){Li.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(rs.x=a*Li.x-i*Li.y,rs.y=i*Li.x+a*Li.y):rs.copy(Li),s.copy(t),s.x+=rs.x,s.y+=rs.y,s.applyMatrix4(wh)}class Eh extends Ae{constructor(t,e,n,i,a,r,o,l,c){super(t,e,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(a-1);const h=n[i],d=n[i+1]-h,p=(r-h)/d;return(i+p)/(a-1)}getTangent(t,e){let i=t-1e-4,a=t+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),l=e||(r.isVector2?new ct:new A);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],a=[],r=[],o=new A,l=new se;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new A)}a[0]=new A,r[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ve(i[p-1].dot(i[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(i[p],a[p])}if(e===!0){let p=Math.acos(ve(a[0].dot(a[t]),-1,1));p/=t,i[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bo extends dn{constructor(t=0,e=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends Bo{constructor(t,e,n,i,a,r){super(t,e,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Oo(){let s=0,t=0,e=0,n=0;function i(a,r,o,l){s=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){i(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,u){let d=(r-a)/c-(o-a)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+u)+(l-o)/u;d*=h,p*=h,i(r,o,d,p)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+n*o}}}const aa=new A,cr=new Oo,hr=new Oo,ur=new Oo;class bg extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,a=i.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%a]:(aa.subVectors(i[0],i[1]).add(i[0]),c=aa);const u=i[o%a],d=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(aa.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),cr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),hr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ur.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(cr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),hr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ur.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(cr.calc(l),hr.calc(l),ur.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sc(s,t,e,n,i){const a=(n-t)*.5,r=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*s+e}function xg(s,t){const e=1-s;return e*e*t}function Mg(s,t){return 2*(1-s)*s*t}function Sg(s,t){return s*s*t}function _s(s,t,e,n){return xg(s,t)+Mg(s,e)+Sg(s,n)}function wg(s,t){const e=1-s;return e*e*e*t}function Eg(s,t){const e=1-s;return 3*e*e*s*t}function Tg(s,t){return 3*(1-s)*s*s*t}function Ag(s,t){return s*s*s*t}function vs(s,t,e,n,i){return wg(s,t)+Eg(s,e)+Tg(s,n)+Ag(s,i)}class Th extends dn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(vs(t,i.x,a.x,r.x,o.x),vs(t,i.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rg extends dn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(vs(t,i.x,a.x,r.x,o.x),vs(t,i.y,a.y,r.y,o.y),vs(t,i.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ah extends dn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cg extends dn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends dn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(_s(t,i.x,a.x,r.x),_s(t,i.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends dn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(_s(t,i.x,a.x,r.x),_s(t,i.y,a.y,r.y),_s(t,i.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,a=(i.length-1)*t,r=Math.floor(a),o=a-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(sc(o,l.x,c.x,h.x,u.x),sc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var ac=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:bg,CubicBezierCurve:Th,CubicBezierCurve3:Rg,EllipseCurve:Bo,LineCurve:Ah,LineCurve3:Cg,QuadraticBezierCurve:Rh,QuadraticBezierCurve3:Lg,SplineCurve:Ch});class Pg extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const r=i[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const r=a[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ac[i.type]().fromJSON(i))}return this}}class Ug extends Pg{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ah(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const a=new Rh(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,a,r){const o=new Th(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ch(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,a,r),this}absarc(t,e,n,i,a,r){return this.absellipse(t,e,n,n,i,a,r),this}ellipse(t,e,n,i,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,a,r,o,l),this}absellipse(t,e,n,i,a,r,o,l){const c=new Bo(t,e,n,i,a,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zo extends Ie{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ve(i,0,Math.PI*2);const a=[],r=[],o=[],l=[],c=[],h=1/e,u=new A,d=new ct,p=new A,g=new A,_=new A;let m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=e;M++){const w=n+M*h*i,y=Math.sin(w),D=Math.cos(w);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*D,r.push(u.x,u.y,u.z),d.x=M/e,d.y=E/(t.length-1),o.push(d.x,d.y);const C=l[3*E+0]*y,L=l[3*E+1],S=l[3*E+0]*D;c.push(C,L,S)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){const y=w+M*t.length,D=y,E=y+t.length,C=y+t.length+1,L=y+1;a.push(D,E,L),a.push(C,L,E)}this.setIndex(a),this.setAttribute("position",new le(r,3)),this.setAttribute("uv",new le(o,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.points,t.segments,t.phiStart,t.phiLength)}}class Gn extends zo{constructor(t=1,e=1,n=4,i=8){const a=new Ug;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Gn(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ho extends Ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new A,h=new ct;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $o extends Ie{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function M(){const y=new A,D=new A;let E=0;const C=(e-t)/n;for(let L=0;L<=a;L++){const S=[],b=L/a,P=b*(e-t)+t;for(let O=0;O<=i;O++){const N=O/i,V=N*l+o,Y=Math.sin(V),G=Math.cos(V);D.x=P*Y,D.y=-b*n+m,D.z=P*G,u.push(D.x,D.y,D.z),y.set(Y,C,G).normalize(),d.push(y.x,y.y,y.z),p.push(N,1-b),S.push(g++)}_.push(S)}for(let L=0;L<i;L++)for(let S=0;S<a;S++){const b=_[S][L],P=_[S+1][L],O=_[S+1][L+1],N=_[S][L+1];(t>0||S!==0)&&(h.push(b,P,N),E+=3),(e>0||S!==a-1)&&(h.push(P,O,N),E+=3)}c.addGroup(f,E,0),f+=E}function w(y){const D=g,E=new ct,C=new A;let L=0;const S=y===!0?t:e,b=y===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const V=O/i*l+o,Y=Math.cos(V),G=Math.sin(V);C.x=S*G,C.y=m*b,C.z=S*Y,u.push(C.x,C.y,C.z),d.push(0,b,0),E.x=Y*.5+.5,E.y=G*.5*b+.5,p.push(E.x,E.y),g++}for(let O=0;O<i;O++){const N=D+O,V=P+O;y===!0?h.push(V,V+1,N):h.push(V+1,V,N),L+=3}c.addGroup(f,L,y===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fi extends $o{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Fi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vo extends Ie{constructor(t=.5,e=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new A,g=new ct;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=a+m/n*r;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,w=M,y=M+n+1,D=M+n+2,E=M+1;o.push(w,y,E),o.push(y,D,E)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Cs extends Ie{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new A,d=new A,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],w=f/n;let y=0;f===0&&r===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){const E=D/e;u.x=-t*Math.cos(i+E*a)*Math.sin(r+w*o),u.y=t*Math.cos(r+w*o),u.z=t*Math.sin(i+E*a)*Math.sin(r+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+y,1-w),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const w=h[f][M+1],y=h[f][M],D=h[f+1][M],E=h[f+1][M+1];(f!==0||r>0)&&p.push(w,y,E),(f!==n-1||l<Math.PI)&&p.push(y,D,E)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jo extends Ie{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*a,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,M=(i+1)*p+g;r.push(_,m,M),r.push(m,f,M)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Te extends Yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const rc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Dg{constructor(t,e,n){const i=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,a===!1&&i.onStart!==void 0&&i.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Ig=new Dg;class Go{constructor(t){this.manager=t!==void 0?t:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,a){n.load(t,i,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Go.DEFAULT_MATERIAL_NAME="__DEFAULT";class kg extends Go{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=rc.get(t);if(r!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0),r;const o=Rs("img");function l(){h(),rc.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(u){h(),i&&i(u),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class ya extends Go{constructor(t){super(t)}load(t,e,n,i){const a=new Ae,r=new kg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},n,i),a}}class Wo extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fg extends Wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const dr=new se,oc=new A,lc=new A;class Lh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(oc),lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lc),e.updateMatrixWorld(),dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cc=new se,ls=new A,fr=new A;class Ng extends Lh{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),fr.copy(n.position),fr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fr),n.updateMatrixWorld(),i.makeTranslation(-ls.x,-ls.y,-ls.z),cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc)}}class Xo extends Wo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ng}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bg extends Lh{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Og extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hc(){return performance.now()}const uc=new se;class Hg{constructor(t,e,n=0,i=1/0){this.ray=new hh(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(t,e=!0,n=[]){return mo(t,this,n,e),n.sort(dc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)mo(t[i],this,n,e);return n.sort(dc),n}}function dc(s,t){return s.distance-t.distance}function mo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)mo(a[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);const ra={CYAN:0,AMBER:1},Ni=1.38,ba=.55,$g=1.9,go=-8.2,_o=0,pr=12,Vg=.4,Ph=1.52,Bi=6.4,jg=Math.cos(70*Math.PI/180),Gg=Math.cos(80*Math.PI/180),fc=.35,Wg=20,Xg=1.5,pc=.42,qg=.6,mc=10,Kg=240,Yg=5,Jg=6,gc=2.75,_c=1.35,Zg=1,Qg=3,t_=6;function xe(s,t,e,n){if(!Number.isFinite(t))return console.warn(`[tuning] ${s}=${t} not finite; using ${e}`),e;if(t<e||t>n){const i=Math.min(n,Math.max(e,t));return console.warn(`[tuning] ${s}=${t} outside [${e}, ${n}]; clamped to ${i}`),i}return t}const e_=xe("REAPPEAR_IGNORE",.85,.3,2),n_=xe("REAPPEAR_TELL",12,4,20),i_=xe("REAPPEAR_FLASH",.5,.2,1.2),s_=xe("REAPPEAR_RIM",6.8,3,10),cs=[.2,.4,.6,.8].map((s,t)=>xe(`TICKLE_BANDS[${t}]`,s,.05+t*.2,.35+t*.2)),vc=xe("TICKLE_HYST",.035,0,.08),a_=xe("TICKLE_CLIMB",8.2,1,20),r_=xe("TICKLE_EASE",5.4,1,20),yc=xe("TICKLE_CONTRAST_POW",1.28,1,2),o_=xe("TICKLE_PACK_BOOST",.04,0,.08),l_=xe("TICKLE_PACK_BOOST_CAP",.16,0,.25),c_=xe("SFX_VANISH_GAIN",.78,0,1),h_=xe("SFX_REAPPEAR_GAIN",.74,0,1),u_=[.9,1,1.12].map((s,t)=>xe(`TICK_RATE[${t}]`,s,.75,1.35)),d_=[560,700,860].map((s,t)=>xe(`TICK_FREQ[${t}]`,s,300,1400)),f_=[.42,.54,.68].map((s,t)=>xe(`TICK_GAIN[${t}]`,s,.1,1)),p_=[.26,.32,.4].map((s,t)=>xe(`VANISH_TICK_GAIN[${t}]`,s,.05,1)),$n={stamina:3,struggle:3,tickle:3},m_=28,g_=.95,__=11.2,Ra=[{hair:1708560,skin:12886160,cloth:3812920,name:"Elara Case"},{hair:3875352,skin:9263676,cloth:2896704,name:"Kora Vale"},{hair:13153418,skin:14730152,cloth:4864048,name:"Sable Quinn"},{hair:920588,skin:6044202,cloth:2761768,name:"Ryn Ashford"},{hair:6960168,skin:13934714,cloth:2372142,name:"Vesh Marlowe"},{hair:2759202,skin:11565666,cloth:3813428,name:"Nim Cortez"},{hair:4861984,skin:15782580,cloth:3024944,name:"Lyra Finch"},{hair:1118228,skin:8015416,cloth:4207160,name:"Toren Blake"},{hair:10123856,skin:13607040,cloth:2240570,name:"Mira Solis"},{hair:2103320,skin:9660492,cloth:3682348,name:"Cass Wynn"},{hair:5914680,skin:14530714,cloth:2762804,name:"Juno Hale"},{hair:1313808,skin:7226932,cloth:3812392,name:"Briar Knox"}],ys=[{slug:"KoraVale",display:"Kora Vale"},{slug:"SableQuinn",display:"Sable Quinn"},{slug:"RynAshford",display:"Ryn Ashford"},{slug:"VeshMarlowe",display:"Vesh Marlowe"},{slug:"NimCortez",display:"Nim Cortez"},{slug:"LyraFinch",display:"Lyra Finch"},{slug:"TorenBlake",display:"Toren Blake"},{slug:"MiraSolis",display:"Mira Solis"},{slug:"CassWynn",display:"Cass Wynn"},{slug:"JunoHale",display:"Juno Hale"},{slug:"BriarKnox",display:"Briar Knox"},{slug:"EmberLang",display:"Ember Lang"}];ys.map(s=>s.display);function v_(){return{coins:12,level:1,xp:0,unspent:7,blocks:{stamina:0,struggle:0,tickle:0},look:0,weapon:0,armor:0,ownedWeapons:[0],ownedArmors:[0]}}function bc(s){const t=v_();if(!s||typeof s!="object")return t;const e=s.blocks??t.blocks,n=Array.isArray(s.ownedWeapons)?s.ownedWeapons:t.ownedWeapons,i=Array.isArray(s.ownedArmors)?s.ownedArmors:t.ownedArmors;return{coins:Math.max(0,Number(s.coins)||0),level:Fn(s.level??1,1,10),xp:Math.max(0,Number(s.xp)||0),unspent:(()=>{const a=Math.max(0,Number(s.unspent)||0),r=Fn(e.stamina??0,0,10),o=Fn(e.struggle??0,0,10),l=Fn(e.tickle??0,0,10),c=10-r+(10-o)+(10-l);return Math.min(a,Math.max(0,c))})(),blocks:{stamina:Fn(e.stamina??0,0,10),struggle:Fn(e.struggle??0,0,10),tickle:Fn(e.tickle??0,0,10)},look:Fn(s.look??0,0,12),ownedWeapons:(()=>{const a=Number(s.weapon)||0;return oa([0,...n,a])})(),ownedArmors:(()=>{const a=Number(s.armor)||0;return oa([0,...i,a])})(),weapon:(()=>{const a=Number(s.weapon)||0;return oa([0,...n,a]).includes(a)?a:0})(),armor:(()=>{const a=Number(s.armor)||0;return oa([0,...i,a]).includes(a)?a:0})()}}function Fn(s,t,e){return Math.max(t,Math.min(e,Math.round(Number(s)||0)))}function oa(s){return[...new Set(s.map(t=>Math.max(0,Math.round(Number(t)||0))))].sort((t,e)=>t-e)}class y_{constructor(){R(this,"group",new Qt);R(this,"walls",[]);R(this,"decks",[]);R(this,"ramp",{minx:-6,maxx:2,minz:12.2,maxz:16.6,y0:0,y1:3.4});R(this,"spawnA",new A(-18,0,0));R(this,"spawnB",new A(18,0,0));R(this,"soloPads",[new A(-18,0,0),new A(18,0,0),new A(0,0,0),new A(-10,0,12),new A(10,0,-12),new A(-12,0,-8),new A(12,0,6),new A(-4,0,-14),new A(6,0,12),new A(0,0,16),new A(-8,0,4),new A(8,0,-4)]);R(this,"matMetal");R(this,"matDark");R(this,"matFloor");this.matMetal=new Te({color:5919564,metalness:.72,roughness:.38}),this.matDark=new Te({color:2762276,metalness:.55,roughness:.5}),this.matFloor=new Te({color:3814704,metalness:.4,roughness:.62}),this.build()}addWall(t,e,n,i,a=3.6,r=0){const o=new yt(new Wt(n,a,i),this.matMetal);o.position.set(t,r+a/2,e),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.walls.push({minx:t-n/2,maxx:t+n/2,minz:e-i/2,maxz:e+i/2,miny:r,maxy:r+a})}addDeck(t,e,n,i,a,r=.35){const o=new yt(new Wt(n,r,i),this.matDark);o.position.set(t,a+r/2,e),o.receiveShadow=!0,this.group.add(o),this.decks.push({minx:t-n/2,maxx:t+n/2,minz:e-i/2,maxz:e+i/2,miny:a,maxy:a+r+.05})}build(){const t=new yt(new Wt(52,.4,40),this.matFloor);t.position.y=-.2,t.receiveShadow=!0,this.group.add(t),this.addWall(0,-19.5,52,1.2,4.2),this.addWall(0,19.5,52,1.2,4.2),this.addWall(-25.5,0,1.2,40,4.2),this.addWall(25.5,0,1.2,40,4.2),this.addWall(-18,-8,12,1,3.2),this.addWall(-18,8,12,1,3.2),this.addWall(18,-8,12,1,3.2),this.addWall(18,8,12,1,3.2),this.addWall(-8,-6.6,1.4,6.2,3.4),this.addWall(-8,6.6,1.4,6.2,3.4),this.addWall(8,-6.6,1.4,6.2,3.4),this.addWall(8,8.4,1.4,6.2,3.4),this.addWall(-6,10,8,1.3,3.4),this.addWall(8,10,8,1.3,3.4),this.addWall(-4,-10,10,1.3,3.4),this.addWall(6,-10,1.3,6,3.4),this.addWall(-12,8,6,1.2,3.2),this.addWall(12,-6,6,1.2,3.2);const e=new yt(new Wt(32,.05,1.7),new Te({color:3813932,emissive:5914672,emissiveIntensity:.35,metalness:.2,roughness:.7}));e.position.set(0,.03,0),e.receiveShadow=!0,this.group.add(e),this.addLaneMarks(),this.addWall(-3,5.5,1.6,1.6,4),this.addWall(3,-5.5,1.6,1.6,4),this.addDeck(4,14.4,12,4.8,3.35);const n=new yt(new Wt(8.4,.28,3.4),this.matDark);n.position.set(-2,1.7,14.4),n.rotation.z=-.38,n.receiveShadow=!0,this.group.add(n);const i=new Xo(8939093,12,28,2);i.position.set(0,6,0),this.group.add(i)}addLaneMarks(){const t=a=>new Te({color:2762276,emissive:a,emissiveIntensity:.42,metalness:.2,roughness:.7}),e=t(6211800),n=t(13935194),i=(a,r,o)=>{const l=new yt(new Fi(.2,.62,3),o);l.rotation.z=r?-Math.PI/2:Math.PI/2,l.position.set(a,.12,0),this.group.add(l)};i(-14.2,!0,e),i(-10.4,!0,e),i(14.2,!1,n),i(10.4,!1,n)}groundY(t,e){const n=this.ramp;if(t>=n.minx&&t<=n.maxx&&e>=n.minz&&e<=n.maxz){const i=(t-n.minx)/(n.maxx-n.minx);return hn.lerp(n.y0,n.y1,i)}for(const i of this.decks)if(t>=i.minx&&t<=i.maxx&&e>=i.minz&&e<=i.maxz)return 3.45;return 0}inSpawnPocket(t,e){return e===0?t.x<-14&&Math.abs(t.z)<7.2:t.x>14&&Math.abs(t.z)<7.2}clampSpawnPocket(t,e,n){const i=hn.clamp(e,-7.19,7.19);return n===0?{x:Math.min(t,-14.01),z:i}:{x:Math.max(t,14.01),z:i}}resolve(t,e,n,i=Vg){let a=t,r=e;for(let o=0;o<4;o++)for(const l of this.walls){if(n+1.4<l.miny||n>l.maxy)continue;Math.max(l.minx-i,Math.min(a,l.maxx+i)),Math.max(l.minz-i,Math.min(r,l.maxz+i));const c=a>l.minx-i&&a<l.maxx+i,h=r>l.minz-i&&r<l.maxz+i;if(c&&h){const u=a-(l.minx-i),d=l.maxx+i-a,p=r-(l.minz-i),g=l.maxz+i-r,_=Math.min(u,d,p,g);_===u?a=l.minx-i-.001:_===d?a=l.maxx+i+.001:_===p?r=l.minz-i-.001:r=l.maxz+i+.001}}return a=hn.clamp(a,-24.6,24.6),r=hn.clamp(r,-18.6,18.6),{x:a,z:r}}navWaypoint(t,e){const n=e.y;if(!(t.x*e.x<0&&Math.abs(t.x)>4&&Math.abs(e.x)>2))return Math.abs(t.z)>3.2&&Math.abs(t.x)>2&&Math.abs(e.z)<2?new A(t.x,n,0):e.clone();if(Math.abs(t.z)>1.1)return new A(t.x,n,0);const a=t.x<e.x?[-10,-4,0,4,10,e.x]:[10,4,0,-4,-10,e.x];for(const r of a){if(t.x<e.x&&t.x<r-.85)return new A(r,n,0);if(t.x>e.x&&t.x>r+.85)return new A(r,n,0)}return e.clone()}laneRoute(t,e){return this.navWaypoint(t,e)}blockedAt(t,e,n,i=.9){const a=this.resolve(t,e,n,i);return Math.hypot(a.x-t,a.z-e)>.04}findNudge(t,e){const n=(o,l)=>{const c=this.groundY(o,l);if(Math.abs(c-t.y)>.85||this.inSpawnPocket(new A(o,c,l),0)||this.inSpawnPocket(new A(o,c,l),1)||this.blockedAt(o,l,c,e))return-1;let h=0;const u=[[1,0],[-1,0],[0,1],[0,-1]];for(const[p,g]of u){const _=this.resolve(o+p*1.1,l+g*1.1,c,e);h+=Math.hypot(_.x-o,_.z-l)}const d=Math.hypot(o-t.x,l-t.z);return h-d*.2};if(n(t.x,t.z)>=0)return t.clone();const i=[];for(let o=0;o<16;o++){const l=o/16*Math.PI*2;i.push([Math.cos(l),Math.sin(l)])}let a=null,r=-1;for(let o=.3;o<=Xg+.01;o+=.3)for(const[l,c]of i){const h=t.x+l*o,u=t.z+c*o,d=n(h,u);d>r&&(r=d,a=new A(h,this.groundY(h,u),u))}return a}}const b_=""+new URL("BriarKnox-Dpa0Hutf.jpg",import.meta.url).href,x_=""+new URL("CassWynn-DlWuid-D.jpg",import.meta.url).href,M_=""+new URL("EmberLang-DX9vz0jP.jpg",import.meta.url).href,S_=""+new URL("JunoHale-CrdaXpZ2.jpg",import.meta.url).href,w_=""+new URL("KoraVale-Bxh0eoY1.jpg",import.meta.url).href,E_=""+new URL("LyraFinch-CSDNR9Pf.jpg",import.meta.url).href,T_=""+new URL("MiraSolis-CmAre_4Z.jpg",import.meta.url).href,A_=""+new URL("NimCortez-_04Y7Q6K.jpg",import.meta.url).href,R_=""+new URL("RynAshford-Dug0-cz-.jpg",import.meta.url).href,C_=""+new URL("SableQuinn-mzonjDUr.jpg",import.meta.url).href,L_=""+new URL("TorenBlake-CbL0FLGN.jpg",import.meta.url).href,P_=""+new URL("VeshMarlowe-BWw8zQpl.jpg",import.meta.url).href,U_=""+new URL("ElaraCase-D5jHayJQ.jpg",import.meta.url).href,D_=Object.assign({"../../assets/characters/amateur/BriarKnox.jpg":b_,"../../assets/characters/amateur/CassWynn.jpg":x_,"../../assets/characters/amateur/EmberLang.jpg":M_,"../../assets/characters/amateur/JunoHale.jpg":S_,"../../assets/characters/amateur/KoraVale.jpg":w_,"../../assets/characters/amateur/LyraFinch.jpg":E_,"../../assets/characters/amateur/MiraSolis.jpg":T_,"../../assets/characters/amateur/NimCortez.jpg":A_,"../../assets/characters/amateur/RynAshford.jpg":R_,"../../assets/characters/amateur/SableQuinn.jpg":C_,"../../assets/characters/amateur/TorenBlake.jpg":L_,"../../assets/characters/amateur/VeshMarlowe.jpg":P_}),I_=Object.assign({"../../assets/characters/player/ElaraCase.jpg":U_}),Uh={};for(const[s,t]of Object.entries(D_)){const e=s.split("/").pop();e&&(Uh[e.replace(/\.jpg$/i,"")]=t)}const Dh={};for(const[s,t]of Object.entries(I_)){const e=s.split("/").pop();e&&(Dh[e.replace(/\.jpg$/i,"")]=t)}function Wn(s){if(s)return Uh[s]??Dh[s]}const k_="ElaraCase",Oi=[{id:0,slug:k_,display:"Elara Case",metalException:!0},...ys.map((s,t)=>({id:t+1,slug:s.slug,display:s.display,metalException:!1}))];Oi.length-1;function zi(s){return Oi.find(t=>t.id===s)??Oi[0]}const xc=new Map;function F_(s,t,e){const n=Math.max(s,t,e),i=Math.min(s,t,e);return n>228&&i>214&&n-i<22}function N_(s,t,e){return s<<16|t<<8|e}function B_(s){return new Promise((t,e)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=()=>e(new Error("still load failed")),n.src=s})}function O_(s){const t=s.naturalWidth,e=s.naturalHeight,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.drawImage(s,0,0);const a=i.getImageData(0,0,t,e),r=a.data,o=new Uint8Array(t*e),l=[],c=(E,C)=>{if(E<0||C<0||E>=t||C>=e)return;const L=C*t+E;if(o[L])return;const S=L*4;F_(r[S],r[S+1],r[S+2])&&(o[L]=1,l.push(L))};for(let E=0;E<t;E++)c(E,0),c(E,e-1);for(let E=0;E<e;E++)c(0,E),c(t-1,E);for(;l.length;){const E=l.pop(),C=E%t,L=E/t|0,S=E*4;r[S+3]=0,c(C+1,L),c(C-1,L),c(C,L+1),c(C,L-1)}for(let E=1;E<e-1;E++)for(let C=1;C<t-1;C++){const L=(E*t+C)*4;if(r[L+3]===0)continue;let S=0;r[((E-1)*t+C)*4+3]===0&&S++,r[((E+1)*t+C)*4+3]===0&&S++,r[(E*t+C-1)*4+3]===0&&S++,r[(E*t+C+1)*4+3]===0&&S++,S&&(r[L+3]=Math.max(0,r[L+3]-S*70))}let h=t,u=e,d=0,p=0;for(let E=0;E<e;E++)for(let C=0;C<t;C++)r[(E*t+C)*4+3]<40||(C<h&&(h=C),E<u&&(u=E),C>d&&(d=C),E>p&&(p=E));d<=h&&(h=0,u=0,d=t-1,p=e-1);const g=4;h=Math.max(0,h-g),u=Math.max(0,u-g),d=Math.min(t-1,d+g),p=Math.min(e-1,p+g),i.putImageData(a,0,0);const _=d-h+1,m=p-u+1,f=document.createElement("canvas");f.width=_,f.height=m,f.getContext("2d").drawImage(n,h,u,_,m,0,0,_,m);const M=Math.max(8,Math.floor(m*.28)),w=document.createElement("canvas");w.width=_,w.height=M,w.getContext("2d").drawImage(f,0,0,_,M,0,0,_,M);const y=f.getContext("2d").getImageData(0,0,_,m).data,D=(E,C,L,S)=>{let b=0,P=0,O=0,N=0;const V=Math.max(0,Math.floor(E)),Y=Math.max(0,Math.floor(C)),G=Math.min(_-1,Math.floor(L)),Z=Math.min(m-1,Math.floor(S));for(let $=Y;$<=Z;$+=2)for(let nt=V;nt<=G;nt+=2){const ht=($*_+nt)*4;y[ht+3]<80||(b+=y[ht],P+=y[ht+1],O+=y[ht+2],N++)}return N?N_(b/N|0,P/N|0,O/N|0):12886160};return{keyedUrl:f.toDataURL("image/png"),faceUrl:w.toDataURL("image/png"),hair:D(_*.3,m*.02,_*.7,m*.16),skin:D(_*.42,m*.22,_*.58,m*.32),cloth:D(_*.35,m*.48,_*.65,m*.62)}}function ln(s){let t=xc.get(s);return t||(t=B_(s).then(O_),xc.set(s,t)),t}const z_="run",H_="BriarKnox",$_="Briar Knox",V_=!1,j_=!1,G_={rate:16.11,amp:1.084,lean:.135,billBob:.091,billRate:19.453},W_={rate:35.161,amp:2.346,lean:.582,billBob:.311,billRate:42.546},X_=4.4,q_=.4,K_=["frames/BriarKnox_f0.jpg","frames/BriarKnox_f1.jpg","frames/BriarKnox_f2.jpg","frames/BriarKnox_f3.jpg"],Y_={clip:z_,slug:H_,display:$_,playerOnly:V_,metalException:j_,walk:G_,run:W_,runSpeed:X_,walkSpeed:q_,frames:K_},J_="run",Z_="CassWynn",Q_="Cass Wynn",tv=!1,ev=!1,nv={rate:17.637,amp:1.184,lean:.15,billBob:.098,billRate:21.294},iv={rate:38.498,amp:2.575,lean:.636,billBob:.333,billRate:46.571},sv=4.4,av=.4,rv=["frames/CassWynn_f0.jpg","frames/CassWynn_f1.jpg","frames/CassWynn_f2.jpg","frames/CassWynn_f3.jpg"],ov={clip:J_,slug:Z_,display:Q_,playerOnly:tv,metalException:ev,walk:nv,run:iv,runSpeed:sv,walkSpeed:av,frames:rv},lv="run",cv="ElaraCase",hv="Elara Case",uv=!0,dv=!0,fv={rate:15.603,amp:1.051,lean:.139,billBob:.089,billRate:18.833},pv={rate:34.049,amp:2.272,lean:.587,billBob:.305,billRate:41.197},mv=4.4,gv=.4,_v=["frames/ElaraCase_f0.jpg","frames/ElaraCase_f1.jpg","frames/ElaraCase_f2.jpg","frames/ElaraCase_f3.jpg"],vv={clip:lv,slug:cv,display:hv,playerOnly:uv,metalException:dv,walk:fv,run:pv,runSpeed:mv,walkSpeed:gv,frames:_v},yv="run",bv="EmberLang",xv="Ember Lang",Mv=!1,Sv=!1,wv={rate:16.619,amp:1.117,lean:.147,billBob:.096,billRate:20.067},Ev={rate:36.275,amp:2.422,lean:.598,billBob:.325,billRate:43.888},Tv=4.4,Av=.4,Rv=["frames/EmberLang_f0.jpg","frames/EmberLang_f1.jpg","frames/EmberLang_f2.jpg","frames/EmberLang_f3.jpg"],Cv={clip:yv,slug:bv,display:xv,playerOnly:Mv,metalException:Sv,walk:wv,run:Ev,runSpeed:Tv,walkSpeed:Av,frames:Rv},Lv="run",Pv="JunoHale",Uv="Juno Hale",Dv=!1,Iv=!1,kv={rate:15.603,amp:1.051,lean:.133,billBob:.089,billRate:18.833},Fv={rate:34.049,amp:2.272,lean:.567,billBob:.305,billRate:41.197},Nv=4.4,Bv=.4,Ov=["frames/JunoHale_f0.jpg","frames/JunoHale_f1.jpg","frames/JunoHale_f2.jpg","frames/JunoHale_f3.jpg"],zv={clip:Lv,slug:Pv,display:Uv,playerOnly:Dv,metalException:Iv,walk:kv,run:Fv,runSpeed:Nv,walkSpeed:Bv,frames:Ov},Hv="run",$v="KoraVale",Vv="Kora Vale",jv=!1,Gv=!1,Wv={rate:16.11,amp:1.084,lean:.135,billBob:.091,billRate:19.453},Xv={rate:35.161,amp:2.346,lean:.582,billBob:.311,billRate:42.546},qv=4.4,Kv=.4,Yv=["frames/KoraVale_f0.jpg","frames/KoraVale_f1.jpg","frames/KoraVale_f2.jpg","frames/KoraVale_f3.jpg"],Jv={clip:Hv,slug:$v,display:Vv,playerOnly:jv,metalException:Gv,walk:Wv,run:Xv,runSpeed:qv,walkSpeed:Kv,frames:Yv},Zv="run",Qv="LyraFinch",ty="Lyra Finch",ey=!1,ny=!1,iy={rate:16.11,amp:1.084,lean:.135,billBob:.091,billRate:19.453},sy={rate:35.161,amp:2.346,lean:.582,billBob:.311,billRate:42.546},ay=4.4,ry=.4,oy=["frames/LyraFinch_f0.jpg","frames/LyraFinch_f1.jpg","frames/LyraFinch_f2.jpg","frames/LyraFinch_f3.jpg"],ly={clip:Zv,slug:Qv,display:ty,playerOnly:ey,metalException:ny,walk:iy,run:sy,runSpeed:ay,walkSpeed:ry,frames:oy},cy="run",hy="MiraSolis",uy="Mira Solis",dy=!1,fy=!1,py={rate:17.13,amp:1.151,lean:.149,billBob:.096,billRate:20.68},my={rate:37.388,amp:2.492,lean:.612,billBob:.329,billRate:45.229},gy=4.4,_y=.4,vy=["frames/MiraSolis_f0.jpg","frames/MiraSolis_f1.jpg","frames/MiraSolis_f2.jpg","frames/MiraSolis_f3.jpg"],yy={clip:cy,slug:hy,display:uy,playerOnly:dy,metalException:fy,walk:py,run:my,runSpeed:gy,walkSpeed:_y,frames:vy},by="run",xy="NimCortez",My="Nim Cortez",Sy=!1,wy=!1,Ey={rate:15.603,amp:1.051,lean:.133,billBob:.089,billRate:18.833},Ty={rate:34.049,amp:2.272,lean:.567,billBob:.305,billRate:41.197},Ay=4.4,Ry=.4,Cy=["frames/NimCortez_f0.jpg","frames/NimCortez_f1.jpg","frames/NimCortez_f2.jpg","frames/NimCortez_f3.jpg"],Ly={clip:by,slug:xy,display:My,playerOnly:Sy,metalException:wy,walk:Ey,run:Ty,runSpeed:Ay,walkSpeed:Ry,frames:Cy},Py="run",Uy="RynAshford",Dy="Ryn Ashford",Iy=!1,ky=!1,Fy={rate:17.13,amp:1.151,lean:.149,billBob:.096,billRate:20.68},Ny={rate:37.388,amp:2.492,lean:.612,billBob:.329,billRate:45.229},By=4.4,Oy=.4,zy=["frames/RynAshford_f0.jpg","frames/RynAshford_f1.jpg","frames/RynAshford_f2.jpg","frames/RynAshford_f3.jpg"],Hy={clip:Py,slug:Uy,display:Dy,playerOnly:Iy,metalException:ky,walk:Fy,run:Ny,runSpeed:By,walkSpeed:Oy,frames:zy},$y="run",Vy="SableQuinn",jy="Sable Quinn",Gy=!1,Wy=!1,Xy={rate:16.619,amp:1.117,lean:.147,billBob:.096,billRate:20.067},qy={rate:36.275,amp:2.422,lean:.598,billBob:.325,billRate:43.888},Ky=4.4,Yy=.4,Jy=["frames/SableQuinn_f0.jpg","frames/SableQuinn_f1.jpg","frames/SableQuinn_f2.jpg","frames/SableQuinn_f3.jpg"],Zy={clip:$y,slug:Vy,display:jy,playerOnly:Gy,metalException:Wy,walk:Xy,run:qy,runSpeed:Ky,walkSpeed:Yy,frames:Jy},Qy="run",tb="TorenBlake",eb="Toren Blake",nb=!1,ib=!1,sb={rate:16.619,amp:1.117,lean:.147,billBob:.096,billRate:20.067},ab={rate:36.275,amp:2.422,lean:.598,billBob:.325,billRate:43.888},rb=4.4,ob=.4,lb=["frames/TorenBlake_f0.jpg","frames/TorenBlake_f1.jpg","frames/TorenBlake_f2.jpg","frames/TorenBlake_f3.jpg"],cb={clip:Qy,slug:tb,display:eb,playerOnly:nb,metalException:ib,walk:sb,run:ab,runSpeed:rb,walkSpeed:ob,frames:lb},hb="run",ub="VeshMarlowe",db="Vesh Marlowe",fb=!1,pb=!1,mb={rate:17.637,amp:1.184,lean:.15,billBob:.098,billRate:21.294},gb={rate:38.498,amp:2.575,lean:.636,billBob:.333,billRate:46.571},_b=4.4,vb=.4,yb=["frames/VeshMarlowe_f0.jpg","frames/VeshMarlowe_f1.jpg","frames/VeshMarlowe_f2.jpg","frames/VeshMarlowe_f3.jpg"],bb={clip:hb,slug:ub,display:db,playerOnly:fb,metalException:pb,walk:mb,run:gb,runSpeed:_b,walkSpeed:vb,frames:yb},xb=""+new URL("BriarKnox_f0-DmbQVhLr.jpg",import.meta.url).href,Mb=""+new URL("BriarKnox_f1-B8zZ6yAr.jpg",import.meta.url).href,Sb=""+new URL("BriarKnox_f2-DufHx0vt.jpg",import.meta.url).href,wb=""+new URL("BriarKnox_f3-CLkdPRuR.jpg",import.meta.url).href,Eb=""+new URL("CassWynn_f0-xD7OaVBe.jpg",import.meta.url).href,Tb=""+new URL("CassWynn_f1-BnqtMu49.jpg",import.meta.url).href,Ab=""+new URL("CassWynn_f2-EV1Zv_44.jpg",import.meta.url).href,Rb=""+new URL("CassWynn_f3-CW1Ed1DG.jpg",import.meta.url).href,Cb=""+new URL("ElaraCase_f0-BhSrVg_d.jpg",import.meta.url).href,Lb=""+new URL("ElaraCase_f1--kGnaN6n.jpg",import.meta.url).href,Pb=""+new URL("ElaraCase_f2-B8HenH_Y.jpg",import.meta.url).href,Ub=""+new URL("ElaraCase_f3-DmoHjvwi.jpg",import.meta.url).href,Db=""+new URL("EmberLang_f0-J_t_f9vF.jpg",import.meta.url).href,Ib=""+new URL("EmberLang_f1-CIdPsxNS.jpg",import.meta.url).href,kb=""+new URL("EmberLang_f2-BXjnn4-X.jpg",import.meta.url).href,Fb=""+new URL("EmberLang_f3-M_5hyUf-.jpg",import.meta.url).href,Nb=""+new URL("JunoHale_f0-BgVBrGtJ.jpg",import.meta.url).href,Bb=""+new URL("JunoHale_f1-Bp_yWixW.jpg",import.meta.url).href,Ob=""+new URL("JunoHale_f2-a2OHy_MQ.jpg",import.meta.url).href,zb=""+new URL("JunoHale_f3-DPb9ehk5.jpg",import.meta.url).href,Hb=""+new URL("KoraVale_f0-B8-zZYL2.jpg",import.meta.url).href,$b=""+new URL("KoraVale_f1-DMAnkU1e.jpg",import.meta.url).href,Vb=""+new URL("KoraVale_f2-D20ncrFX.jpg",import.meta.url).href,jb=""+new URL("KoraVale_f3-Byp-Uzzz.jpg",import.meta.url).href,Gb=""+new URL("LyraFinch_f0-NiUUADzV.jpg",import.meta.url).href,Wb=""+new URL("LyraFinch_f1-CLtc6Juw.jpg",import.meta.url).href,Xb=""+new URL("LyraFinch_f2-2SXUifek.jpg",import.meta.url).href,qb=""+new URL("LyraFinch_f3-ksFw3IXy.jpg",import.meta.url).href,Kb=""+new URL("MiraSolis_f0-oPd0r5wo.jpg",import.meta.url).href,Yb=""+new URL("MiraSolis_f1-BQ1sI8BN.jpg",import.meta.url).href,Jb=""+new URL("MiraSolis_f2-BZdE4MiH.jpg",import.meta.url).href,Zb=""+new URL("MiraSolis_f3-CMWOeYUB.jpg",import.meta.url).href,Qb=""+new URL("NimCortez_f0-C3gOjaF0.jpg",import.meta.url).href,tx=""+new URL("NimCortez_f1-CG2reXm3.jpg",import.meta.url).href,ex=""+new URL("NimCortez_f2-CJLwUbEQ.jpg",import.meta.url).href,nx=""+new URL("NimCortez_f3-BBuIhP1C.jpg",import.meta.url).href,ix=""+new URL("RynAshford_f0-uh5H6KYq.jpg",import.meta.url).href,sx=""+new URL("RynAshford_f1-CHZvgYDk.jpg",import.meta.url).href,ax=""+new URL("RynAshford_f2-CnDuhKgk.jpg",import.meta.url).href,rx=""+new URL("RynAshford_f3-C5PxsYYa.jpg",import.meta.url).href,ox=""+new URL("SableQuinn_f0-DXGdYUkM.jpg",import.meta.url).href,lx=""+new URL("SableQuinn_f1-CN35EH9h.jpg",import.meta.url).href,cx=""+new URL("SableQuinn_f2-B2p45YJS.jpg",import.meta.url).href,hx=""+new URL("SableQuinn_f3-DE3vra8q.jpg",import.meta.url).href,ux=""+new URL("TorenBlake_f0-CeQ0kiFI.jpg",import.meta.url).href,dx=""+new URL("TorenBlake_f1-P1WYVGrt.jpg",import.meta.url).href,fx=""+new URL("TorenBlake_f2-cgXcRV_t.jpg",import.meta.url).href,px=""+new URL("TorenBlake_f3-DKwSQBT7.jpg",import.meta.url).href,mx=""+new URL("VeshMarlowe_f0-B53sgRGG.jpg",import.meta.url).href,gx=""+new URL("VeshMarlowe_f1-DuMz6-pC.jpg",import.meta.url).href,_x=""+new URL("VeshMarlowe_f2-DvwnhlcU.jpg",import.meta.url).href,vx=""+new URL("VeshMarlowe_f3-BaV_RBaf.jpg",import.meta.url).href,yx=Object.assign({"../../assets/binds/run/BriarKnox.run.json":Y_,"../../assets/binds/run/CassWynn.run.json":ov,"../../assets/binds/run/ElaraCase.run.json":vv,"../../assets/binds/run/EmberLang.run.json":Cv,"../../assets/binds/run/JunoHale.run.json":zv,"../../assets/binds/run/KoraVale.run.json":Jv,"../../assets/binds/run/LyraFinch.run.json":ly,"../../assets/binds/run/MiraSolis.run.json":yy,"../../assets/binds/run/NimCortez.run.json":Ly,"../../assets/binds/run/RynAshford.run.json":Hy,"../../assets/binds/run/SableQuinn.run.json":Zy,"../../assets/binds/run/TorenBlake.run.json":cb,"../../assets/binds/run/VeshMarlowe.run.json":bb}),vo={};var Hc;for(const[s,t]of Object.entries(yx)){const e=(Hc=s.split("/").pop())==null?void 0:Hc.replace(/\.run\.json$/i,"");!e||!t||(vo[e]=t,t.slug&&(vo[t.slug]=t))}const Mc={clip:"run",slug:"default",display:"Default",walk:{rate:17.031,amp:1.146,lean:.148,billBob:.083,billRate:20.55},run:{rate:36.572,amp:2.424,lean:.599,billBob:.263,billRate:44.078},runSpeed:4.4,walkSpeed:.4};function bx(s){return s?vo[s]??Mc:Mc}function xx(s,t){return t==="run"?s.run:s.walk}const Mx=Object.assign({"../../assets/binds/run/frames/BriarKnox_f0.jpg":xb,"../../assets/binds/run/frames/BriarKnox_f1.jpg":Mb,"../../assets/binds/run/frames/BriarKnox_f2.jpg":Sb,"../../assets/binds/run/frames/BriarKnox_f3.jpg":wb,"../../assets/binds/run/frames/CassWynn_f0.jpg":Eb,"../../assets/binds/run/frames/CassWynn_f1.jpg":Tb,"../../assets/binds/run/frames/CassWynn_f2.jpg":Ab,"../../assets/binds/run/frames/CassWynn_f3.jpg":Rb,"../../assets/binds/run/frames/ElaraCase_f0.jpg":Cb,"../../assets/binds/run/frames/ElaraCase_f1.jpg":Lb,"../../assets/binds/run/frames/ElaraCase_f2.jpg":Pb,"../../assets/binds/run/frames/ElaraCase_f3.jpg":Ub,"../../assets/binds/run/frames/EmberLang_f0.jpg":Db,"../../assets/binds/run/frames/EmberLang_f1.jpg":Ib,"../../assets/binds/run/frames/EmberLang_f2.jpg":kb,"../../assets/binds/run/frames/EmberLang_f3.jpg":Fb,"../../assets/binds/run/frames/JunoHale_f0.jpg":Nb,"../../assets/binds/run/frames/JunoHale_f1.jpg":Bb,"../../assets/binds/run/frames/JunoHale_f2.jpg":Ob,"../../assets/binds/run/frames/JunoHale_f3.jpg":zb,"../../assets/binds/run/frames/KoraVale_f0.jpg":Hb,"../../assets/binds/run/frames/KoraVale_f1.jpg":$b,"../../assets/binds/run/frames/KoraVale_f2.jpg":Vb,"../../assets/binds/run/frames/KoraVale_f3.jpg":jb,"../../assets/binds/run/frames/LyraFinch_f0.jpg":Gb,"../../assets/binds/run/frames/LyraFinch_f1.jpg":Wb,"../../assets/binds/run/frames/LyraFinch_f2.jpg":Xb,"../../assets/binds/run/frames/LyraFinch_f3.jpg":qb,"../../assets/binds/run/frames/MiraSolis_f0.jpg":Kb,"../../assets/binds/run/frames/MiraSolis_f1.jpg":Yb,"../../assets/binds/run/frames/MiraSolis_f2.jpg":Jb,"../../assets/binds/run/frames/MiraSolis_f3.jpg":Zb,"../../assets/binds/run/frames/NimCortez_f0.jpg":Qb,"../../assets/binds/run/frames/NimCortez_f1.jpg":tx,"../../assets/binds/run/frames/NimCortez_f2.jpg":ex,"../../assets/binds/run/frames/NimCortez_f3.jpg":nx,"../../assets/binds/run/frames/RynAshford_f0.jpg":ix,"../../assets/binds/run/frames/RynAshford_f1.jpg":sx,"../../assets/binds/run/frames/RynAshford_f2.jpg":ax,"../../assets/binds/run/frames/RynAshford_f3.jpg":rx,"../../assets/binds/run/frames/SableQuinn_f0.jpg":ox,"../../assets/binds/run/frames/SableQuinn_f1.jpg":lx,"../../assets/binds/run/frames/SableQuinn_f2.jpg":cx,"../../assets/binds/run/frames/SableQuinn_f3.jpg":hx,"../../assets/binds/run/frames/TorenBlake_f0.jpg":ux,"../../assets/binds/run/frames/TorenBlake_f1.jpg":dx,"../../assets/binds/run/frames/TorenBlake_f2.jpg":fx,"../../assets/binds/run/frames/TorenBlake_f3.jpg":px,"../../assets/binds/run/frames/VeshMarlowe_f0.jpg":mx,"../../assets/binds/run/frames/VeshMarlowe_f1.jpg":gx,"../../assets/binds/run/frames/VeshMarlowe_f2.jpg":_x,"../../assets/binds/run/frames/VeshMarlowe_f3.jpg":vx}),Ih={};for(const[s,t]of Object.entries(Mx)){const e=s.split("/").pop();e&&(Ih[e]=t)}function Sx(s){const t=s.frames;if(!(t!=null&&t.length))return[];const e=[];for(const n of t){const i=n.split("/").pop();if(!i)continue;const a=Ih[i];a&&e.push(a)}return e}function mr(s,t=.62){return new Te({color:s,roughness:t,metalness:0})}function xa(s,t,e,n=6){const i=new yt(new Gn(s,t,3,n),e);return i.castShadow=!0,i}function Nn(s,t,e,n=6){const i=xa(s,t,e,n);return i.position.y=-(t/2),i}class wx{constructor(t,e,n,i){R(this,"root",new Qt);R(this,"hips");R(this,"spine");R(this,"chest");R(this,"neck");R(this,"head");R(this,"lShoulder");R(this,"lElbow");R(this,"rShoulder");R(this,"rElbow");R(this,"lHip");R(this,"lKnee");R(this,"rHip");R(this,"rKnee");R(this,"face");R(this,"skinMat");R(this,"clothMat");R(this,"hairMat");R(this,"weaponMesh",null);R(this,"armorMesh",null);R(this,"armorChest",null);R(this,"shortsMesh");R(this,"faceTex");this.skinMat=mr(t,.52),this.clothMat=mr(e,.72),this.hairMat=mr(n,.78),this.hips=new Qt,this.hips.position.y=.92,this.root.add(this.hips),this.shortsMesh=new yt(new Wt(.34,.16,.2),this.clothMat),this.shortsMesh.position.y=-.02,this.hips.add(this.shortsMesh),this.lHip=new Qt,this.lHip.position.set(-.09,-.06,0),this.hips.add(this.lHip),this.lHip.add(Nn(.065,.34,this.skinMat)),this.lKnee=new Qt,this.lKnee.position.y=-.36,this.lHip.add(this.lKnee),this.lKnee.add(Nn(.055,.34,this.skinMat));const a=new yt(new Wt(.08,.05,.16),this.skinMat);a.position.set(0,-.38,.03),this.lKnee.add(a),this.rHip=new Qt,this.rHip.position.set(.09,-.06,0),this.hips.add(this.rHip),this.rHip.add(Nn(.065,.34,this.skinMat)),this.rKnee=new Qt,this.rKnee.position.y=-.36,this.rHip.add(this.rKnee),this.rKnee.add(Nn(.055,.34,this.skinMat));const r=a.clone();this.rKnee.add(r),this.spine=new Qt,this.spine.position.y=.08,this.hips.add(this.spine),this.spine.add(xa(.12,.22,this.skinMat)),this.chest=new Qt,this.chest.position.y=.22,this.spine.add(this.chest),this.chest.add(xa(.13,.2,this.skinMat));const o=new yt(new Wt(.28,.08,.16),this.clothMat);o.position.y=.12,this.chest.add(o),this.lShoulder=new Qt,this.lShoulder.position.set(-.2,.12,0),this.chest.add(this.lShoulder),this.lShoulder.add(Nn(.05,.24,this.skinMat)),this.lElbow=new Qt,this.lElbow.position.y=-.26,this.lShoulder.add(this.lElbow),this.lElbow.add(Nn(.045,.22,this.skinMat)),this.rShoulder=new Qt,this.rShoulder.position.set(.2,.12,0),this.chest.add(this.rShoulder),this.rShoulder.add(Nn(.05,.24,this.skinMat)),this.rElbow=new Qt,this.rElbow.position.y=-.26,this.rShoulder.add(this.rElbow),this.rElbow.add(Nn(.045,.22,this.skinMat)),this.neck=new Qt,this.neck.position.y=.22,this.chest.add(this.neck),this.neck.add(xa(.045,.08,this.skinMat,5)),this.head=new Qt,this.head.position.y=.16,this.neck.add(this.head);const l=new yt(new Cs(.13,10,8),this.skinMat);this.head.add(l);const c=new yt(new Cs(.14,8,6),this.hairMat);c.position.y=.05,c.scale.set(1.08,.72,1.12),this.head.add(c),this.face=new yt(new Ji(.2,.24),new ui({transparent:!0,opacity:0,depthWrite:!1})),this.face.position.set(0,.02,-.128),this.face.rotation.y=Math.PI,this.head.add(this.face);const h=new yt(new jo(.16,.018,6,14),new Te({color:i,emissive:i,emissiveIntensity:.55,metalness:.15,roughness:.45}));h.position.y=.02,h.rotation.x=Math.PI/2,this.chest.add(h);const u=new yt(new Ho(.28,12),new ui({color:0,transparent:!0,opacity:.28,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.02,this.root.add(u)}setWeapon(t){if(this.weaponMesh&&(this.rElbow.remove(this.weaponMesh),this.weaponMesh.traverse(n=>{if(!(n instanceof yt))return;n.geometry.dispose();const i=n.material;Array.isArray(i)?i.forEach(a=>a.dispose()):i.dispose()}),this.weaponMesh=null),t<=0)return;const e=Math.max(1,Math.min(6,Math.round(t)));this.weaponMesh=Ax(e),this.rElbow.add(this.weaponMesh)}setArmor(t){var i,a;if(this.armorMesh&&((i=this.armorMesh.parent)==null||i.remove(this.armorMesh),Sc(this.armorMesh),this.armorMesh=null),this.armorChest&&((a=this.armorChest.parent)==null||a.remove(this.armorChest),Sc(this.armorChest),this.armorChest=null),this.shortsMesh.visible=!0,t<=0)return;const e=Math.max(1,Math.min(8,Math.round(t))),n=Lx(e);this.armorMesh=n.hips,this.armorChest=n.chest,this.hips.add(this.armorMesh),this.chest.add(this.armorChest),this.shortsMesh.visible=e<3}applyLook(t){this.skinMat.color.setHex(t.skin),this.clothMat.color.setHex(t.cloth),this.hairMat.color.setHex(t.hair),new ya().load(t.faceUrl,n=>{n.colorSpace=Ee,this.faceTex=n;const i=this.face.material;i.map=n,i.opacity=1,i.needsUpdate=!0})}pose(t,e,n){if(this.hips.rotation.set(0,0,0),this.spine.rotation.set(0,0,0),this.chest.rotation.set(0,0,0),this.neck.rotation.set(0,0,0),this.head.rotation.set(0,0,0),this.lShoulder.rotation.set(0,0,.12),this.rShoulder.rotation.set(0,0,-.12),this.lElbow.rotation.set(.15,0,0),this.rElbow.rotation.set(.15,0,0),this.lHip.rotation.set(0,0,.03),this.rHip.rotation.set(0,0,-.03),this.lKnee.rotation.set(.08,0,0),this.rKnee.rotation.set(.08,0,0),this.chest.position.y=.22,this.root.position.y=0,this.chest.scale.set(1,1,1),this.head.scale.set(1,1,1),this.face.scale.set(1,1,1),this.face.position.set(0,.02,-.128),this.face.rotation.z=0,t==="idle"){const a=Math.sin(e*1.7)*.065,r=Math.sin(e*1.7*.53+.7)*.032,o=Math.sin(e*1.7*.35)*.054+Math.sin(e*1.7*.18)*.024;this.spine.rotation.x=a+r,this.spine.rotation.z=o*.42,this.chest.position.y=.22+(a+r)*.65,this.chest.rotation.y=o*.5,this.hips.rotation.z=o*.6,this.lHip.rotation.z=.03+o*.2,this.rHip.rotation.z=-.03-o*.2,this.lShoulder.rotation.z=.12+Math.sin(e*1.7)*.042,this.rShoulder.rotation.z=-.12-Math.sin(e*1.7)*.042,this.lShoulder.rotation.x=o*.32,this.rShoulder.rotation.x=-o*.32,this.neck.rotation.x=a*.42,this.head.rotation.x=Math.sin(e*1.7*.9)*.022,this.head.rotation.y=o*.55,this.root.position.y=Math.abs(a)*.2;return}if(t==="walk"||t==="run"){const i=t==="run",a=n,r=(a==null?void 0:a.rate)??(i?16.8:10.45),o=(a==null?void 0:a.amp)??(i?1.14:.75),l=(a==null?void 0:a.lean)??(i?.311:.11),c=e*r,h=Math.sin(c),u=Math.sin(c*2),d=Math.sin(c+Math.PI);this.lHip.rotation.x=h*o,this.rHip.rotation.x=d*o,this.lHip.rotation.z=.07+h*(i?.142:.07),this.rHip.rotation.z=-.07-d*(i?.142:.07),this.lKnee.rotation.x=.215+Math.max(0,-h)*(i?1.98:1.12),this.rKnee.rotation.x=.215+Math.max(0,-d)*(i?1.98:1.12),this.lShoulder.rotation.x=d*(i?1.54:.82),this.rShoulder.rotation.x=h*(i?1.54:.82),this.lShoulder.rotation.z=.215+h*(i?.22:.114),this.rShoulder.rotation.z=-.215-h*(i?.22:.114),this.lElbow.rotation.x=.7+(i?1.08:.48),this.rElbow.rotation.x=.7+(i?1.08:.48),this.spine.rotation.x=l+Math.abs(u)*(i?.106:.054),this.spine.rotation.z=h*(i?.11:.056),this.chest.rotation.y=h*(i?.335:.165),this.chest.rotation.x=Math.abs(u)*(i?.094:.048),this.hips.rotation.y=h*(i?.168:.084),this.root.position.y=Math.abs(u)*(i?.236:.106);const p=1-Math.abs(u)*(i?.102:.049);this.chest.scale.set(1+(1-p)*.86,p,1+(1-p)*.52);return}if(t==="tickle"){const i=n,a=(i==null?void 0:i.rate)??28,r=(i==null?void 0:i.twistRate)??37,o=(i==null?void 0:i.spineBase)??.28,l=(i==null?void 0:i.spineAmp)??.046,c=(i==null?void 0:i.chestAmp)??.088,h=(i==null?void 0:i.shoulderAmp)??.246,u=(i==null?void 0:i.elbowAmp)??.44,d=Math.sin(e*a),p=Math.sin(e*r),g=Math.sin(e*a*1.37);this.spine.rotation.x=o+d*l,this.spine.rotation.z=g*l*.55,this.chest.rotation.y=p*c,this.chest.rotation.x=Math.abs(d)*c*.35,this.lShoulder.rotation.set(-1.28,.22+p*.08,.58+d*h),this.rShoulder.rotation.set(-1.18,-.28-p*.08,-.48-d*h),this.lElbow.rotation.x=-.48+d*u,this.rElbow.rotation.x=-.32-d*u*.95,this.head.rotation.x=.22+Math.abs(p)*.04,this.head.rotation.y=g*.05,this.lHip.rotation.x=.14+d*.03,this.rHip.rotation.x=-.1-d*.025,this.weaponMesh&&(this.weaponMesh.rotation.z=d*((i==null?void 0:i.weaponWag)??.49));return}if(t==="squirm"){const i=n,a=(i==null?void 0:i.rate)??14,r=((i==null?void 0:i.amp)??.1)*1.3,o=(i==null?void 0:i.lean)??.06,l=i==null?void 0:i.blend,c=(l==null?void 0:l.jaw)??.45,h=(l==null?void 0:l.cheek)??.3,u=(l==null?void 0:l.eye)??.4,d=(l==null?void 0:l.brow)??.2,p=Math.sin(e*a),g=Math.sin(e*a*.68),_=Math.sin(e*a*1.41),m=Math.sin(e*a*2.15),f=.5+.5*Math.abs(m);this.hips.rotation.z=p*r*1.2,this.hips.rotation.y=_*r*.5,this.spine.rotation.set(.24+g*o*.95,_*o*.4,p*o*1.45),this.chest.rotation.z=-p*r*1.15,this.chest.rotation.x=Math.abs(g)*o*.48,this.chest.rotation.y=m*r*.62,this.neck.rotation.set(g*o*.48,p*o*.62,_*r*.8),this.head.rotation.set(.12+g*o*.6+Math.abs(m)*.03,p*o*.7,_*o*.5),this.head.scale.set(1+h*.08*f,1+c*.05*f,1+h*.03);const M=c*f,w=u*(.55+.45*Math.abs(g));this.face.scale.set(1+h*.14*f,1+M*.3-w*.12,1),this.face.position.set(p*h*.006,.02+d*.03*f-M*.02,-.128),this.face.rotation.z=g*h*.05+p*.02,this.lShoulder.rotation.set(-.48+g*r*.8,.08,.62+p*r*2.4),this.rShoulder.rotation.set(-.42-g*r*.8,-.08,-.62-p*r*2.4),this.lElbow.rotation.x=.72+p*r*.9,this.rElbow.rotation.x=.68-p*r*.9,this.lHip.rotation.x=.28+p*r*1.1,this.rHip.rotation.x=.22-p*r*1.1,this.lKnee.rotation.x=.55+Math.abs(p)*r*.8,this.rKnee.rotation.x=.5+Math.abs(g)*r*.8,this.root.position.y=Math.abs(g)*r*.35;return}this.hips.rotation.x=.55,this.spine.rotation.x=.4,this.head.rotation.x=.35,this.lShoulder.rotation.set(.4,0,.5),this.rShoulder.rotation.set(.35,0,-.45),this.lHip.rotation.x=.8,this.rHip.rotation.x=.75,this.lKnee.rotation.x=.9,this.rKnee.rotation.x=.85}clipFor(t,e,n){return t==="tapped"||t==="spectate"?"tapped":t==="ticklee"||t==="nudge"&&n<0?"squirm":t==="tickler"||t==="nudge"?"tickle":e>4.4?"run":e>.4?"walk":"idle"}}const Ex=[6965818,4872776,5913160,3820122,5916720,4864080];function Tx(s){return new Te({color:Ex[s-1]??5914680,roughness:.82,metalness:0})}function Ax(s){const t=new Qt,e=Tx(s);let n;if(s===1)n=new yt(new Wt(.09,.05,.1),e);else if(s===2)n=new yt(new Gn(.032,.12,3,6),e);else if(s===3)n=new yt(new Fi(.02,.18,6),e),n.rotation.x=Math.PI;else if(s===4)n=new yt(new Wt(.16,.018,.09),e);else if(s===5)n=new yt(new Gn(.02,.22,3,6),e),n.scale.set(1,1.15,1);else{const i=new yt(new Fi(.022,.16,5),e),a=new yt(new Fi(.022,.16,5),e.clone());return i.rotation.set(Math.PI,0,-.18),a.rotation.set(Math.PI,0,.18),i.position.x=-.03,a.position.x=.03,i.castShadow=!0,a.castShadow=!0,t.add(i,a),t.position.set(.015,-.26,.04),t}return n.castShadow=!0,t.add(n),t.position.set(.015,-.26,.04),t}const Rx=[3813932,3288626,2895924,2762788,2367528,3027496,2499618,2104354];function Cx(s){return new Te({color:Rx[s-1]??2762276,roughness:.86+Math.min(.08,s*.008),metalness:0})}function sn(s,t,e,n,i=0,a=0,r=0){const o=new yt(new Wt(s,t,e),n);return o.position.set(i,a,r),o.castShadow=!0,o}function Lx(s){const t=new Qt,e=new Qt,n=Cx(s),i=1+(s-1)*.028;if(s===1)return t.add(sn(.36*i,.1,.22*i,n,0,-.04,0)),{hips:t,chest:e};if(s===2)return t.add(sn(.37*i,.11,.225*i,n,0,-.035,0)),e.add(sn(.29*i,.055,.17*i,n.clone(),0,.125,0)),{hips:t,chest:e};const a=.17+Math.min(.03,(s-3)*.006);if(t.add(sn(.38*i,a,.23*i,n,0,-.03,0)),s===3){const o=n.clone();return e.add(sn(.08,.1,.15,o,-.12,.1,0)),e.add(sn(.08,.1,.15,o.clone(),.12,.1,0)),{hips:t,chest:e}}const r=.085+(s-4)*.008;if(e.add(sn(.3*i,r,.175*i,n.clone(),0,.115,0)),s>=6){const o=n.clone();e.add(sn(.045,.12,.04,o,-.08,.12,.07)),e.add(sn(.045,.12,.04,o.clone(),.08,.12,.07))}return s>=8&&e.add(sn(.22*i,.045,.14,n.clone(),0,.16,0)),{hips:t,chest:e}}function Sc(s){s.traverse(t=>{if(!(t instanceof yt))return;t.geometry.dispose();const e=t.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()})}const Px="laugh_squirm",Ux="BriarKnox",Dx="Briar Knox",Ix=!1,kx=!1,Fx={s0:{staminaMin:70,rate:8.09,amp:.0477,lean:.0264,billShake:.028,billRate:11.9,still:"stages/BriarKnox_s0.jpg",blend:{jaw:.261,cheek:.142,eye:.214,brow:.094}},s1:{staminaMin:40,rate:11.76,amp:.0795,lean:.0462,billShake:.056,billRate:15.3,still:"stages/BriarKnox_s1.jpg",blend:{jaw:.528,cheek:.353,eye:.478,brow:.201}},s2:{staminaMin:15,rate:14.7,amp:.106,lean:.066,billShake:.08,billRate:17,still:"stages/BriarKnox_s2.jpg",blend:{jaw:.874,cheek:.616,eye:.796,brow:.36}},s3:{staminaMin:0,rate:16.9,amp:.1325,lean:.0792,billShake:.108,billRate:20.4,still:"stages/BriarKnox_s3.jpg",blend:{jaw:1,cheek:.918,eye:1,brow:.535}}},Nx=2e3,Bx=["frames/BriarKnox_f0.jpg","frames/BriarKnox_f1.jpg","frames/BriarKnox_f2.jpg","frames/BriarKnox_f3.jpg","frames/BriarKnox_f4.jpg"],Ox={clip:Px,slug:Ux,display:Dx,playerOnly:Ix,metalException:kx,stages:Fx,hubPreviewMs:Nx,frames:Bx},zx="laugh_squirm",Hx="CassWynn",$x="Cass Wynn",Vx=!1,jx=!1,Gx={s0:{staminaMin:70,rate:8.28,amp:.0477,lean:.033,billShake:.028,billRate:11.9,still:"stages/CassWynn_s0.jpg",blend:{jaw:.262,cheek:.143,eye:.215,brow:.096}},s1:{staminaMin:40,rate:12.04,amp:.0795,lean:.0578,billShake:.056,billRate:15.3,still:"stages/CassWynn_s1.jpg",blend:{jaw:.472,cheek:.315,eye:.427,brow:.179}},s2:{staminaMin:15,rate:15.05,amp:.106,lean:.0825,billShake:.08,billRate:17,still:"stages/CassWynn_s2.jpg",blend:{jaw:.784,cheek:.554,eye:.715,brow:.323}},s3:{staminaMin:0,rate:17.31,amp:.1325,lean:.099,billShake:.108,billRate:20.4,still:"stages/CassWynn_s3.jpg",blend:{jaw:1,cheek:.933,eye:1,brow:.544}}},Wx=2e3,Xx=["frames/CassWynn_f0.jpg","frames/CassWynn_f1.jpg","frames/CassWynn_f2.jpg","frames/CassWynn_f3.jpg","frames/CassWynn_f4.jpg"],qx={clip:zx,slug:Hx,display:$x,playerOnly:Vx,metalException:jx,stages:Gx,hubPreviewMs:Wx,frames:Xx},Kx="laugh_squirm",Yx="ElaraCase",Jx="Elara Case",Zx=!0,Qx=!0,tM={s0:{staminaMin:70,rate:8.47,amp:.0405,lean:.0297,billShake:.0315,billRate:10.5,still:"stages/ElaraCase_s0.jpg",blend:{jaw:.264,cheek:.144,eye:.216,brow:.097}},s1:{staminaMin:40,rate:12.32,amp:.0675,lean:.052,billShake:.063,billRate:13.5,still:"stages/ElaraCase_s1.jpg",blend:{jaw:.478,cheek:.318,eye:.432,brow:.182}},s2:{staminaMin:15,rate:15.4,amp:.09,lean:.0743,billShake:.09,billRate:15,still:"stages/ElaraCase_s2.jpg",blend:{jaw:.795,cheek:.561,eye:.725,brow:.328}},s3:{staminaMin:0,rate:17.71,amp:.1125,lean:.0891,billShake:.1215,billRate:18,still:"stages/ElaraCase_s3.jpg",blend:{jaw:1,cheek:.947,eye:1,brow:.553}}},eM=2e3,nM=["frames/ElaraCase_f0.jpg","frames/ElaraCase_f1.jpg","frames/ElaraCase_f2.jpg","frames/ElaraCase_f3.jpg","frames/ElaraCase_f4.jpg"],iM={clip:Kx,slug:Yx,display:Jx,playerOnly:Zx,metalException:Qx,stages:tM,hubPreviewMs:eM,frames:nM},sM="laugh_squirm",aM="EmberLang",rM="Ember Lang",oM=!1,lM=!1,cM={s0:{staminaMin:70,rate:8.09,amp:.0477,lean:.0297,billShake:.0315,billRate:11.9,still:"stages/EmberLang_s0.jpg",blend:{jaw:.261,cheek:.142,eye:.214,brow:.094}},s1:{staminaMin:40,rate:11.76,amp:.0795,lean:.052,billShake:.063,billRate:15.3,still:"stages/EmberLang_s1.jpg",blend:{jaw:.528,cheek:.353,eye:.478,brow:.201}},s2:{staminaMin:15,rate:14.7,amp:.106,lean:.0743,billShake:.09,billRate:17,still:"stages/EmberLang_s2.jpg",blend:{jaw:.874,cheek:.616,eye:.796,brow:.36}},s3:{staminaMin:0,rate:16.9,amp:.1325,lean:.0891,billShake:.1215,billRate:20.4,still:"stages/EmberLang_s3.jpg",blend:{jaw:1,cheek:.918,eye:1,brow:.535}}},hM=2e3,uM=["frames/EmberLang_f0.jpg","frames/EmberLang_f1.jpg","frames/EmberLang_f2.jpg","frames/EmberLang_f3.jpg","frames/EmberLang_f4.jpg"],dM={clip:sM,slug:aM,display:rM,playerOnly:oM,metalException:lM,stages:cM,hubPreviewMs:hM,frames:uM},fM="laugh_squirm",pM="JunoHale",mM="Juno Hale",gM=!1,_M=!1,vM={s0:{staminaMin:70,rate:8.86,amp:.0405,lean:.033,billShake:.042,billRate:10.5,still:"stages/JunoHale_s0.jpg",blend:{jaw:.269,cheek:.146,eye:.219,brow:.098}},s1:{staminaMin:40,rate:12.88,amp:.0675,lean:.0578,billShake:.084,billRate:13.5,still:"stages/JunoHale_s1.jpg",blend:{jaw:.489,cheek:.326,eye:.443,brow:.187}},s2:{staminaMin:15,rate:16.1,amp:.09,lean:.0825,billShake:.12,billRate:15,still:"stages/JunoHale_s2.jpg",blend:{jaw:.82,cheek:.579,eye:.747,brow:.338}},s3:{staminaMin:0,rate:18.52,amp:.1125,lean:.099,billShake:.162,billRate:18,still:"stages/JunoHale_s3.jpg",blend:{jaw:1,cheek:.867,eye:1,brow:.506}}},yM=2e3,bM=["frames/JunoHale_f0.jpg","frames/JunoHale_f1.jpg","frames/JunoHale_f2.jpg","frames/JunoHale_f3.jpg","frames/JunoHale_f4.jpg"],xM={clip:fM,slug:pM,display:mM,playerOnly:gM,metalException:_M,stages:vM,hubPreviewMs:yM,frames:bM},MM="laugh_squirm",SM="KoraVale",wM="Kora Vale",EM=!1,TM=!1,AM={s0:{staminaMin:70,rate:8.66,amp:.0549,lean:.0297,billShake:.0385,billRate:13.3,still:"stages/KoraVale_s0.jpg",blend:{jaw:.267,cheek:.145,eye:.218,brow:.097}},s1:{staminaMin:40,rate:12.6,amp:.0915,lean:.052,billShake:.077,billRate:17.1,still:"stages/KoraVale_s1.jpg",blend:{jaw:.483,cheek:.322,eye:.438,brow:.184}},s2:{staminaMin:15,rate:15.75,amp:.122,lean:.0743,billShake:.11,billRate:19,still:"stages/KoraVale_s2.jpg",blend:{jaw:.807,cheek:.57,eye:.736,brow:.333}},s3:{staminaMin:0,rate:18.11,amp:.1525,lean:.0891,billShake:.1485,billRate:22.8,still:"stages/KoraVale_s3.jpg",blend:{jaw:1,cheek:.852,eye:1,brow:.497}}},RM=2e3,CM=["frames/KoraVale_f0.jpg","frames/KoraVale_f1.jpg","frames/KoraVale_f2.jpg","frames/KoraVale_f3.jpg","frames/KoraVale_f4.jpg"],LM={clip:MM,slug:SM,display:wM,playerOnly:EM,metalException:TM,stages:AM,hubPreviewMs:RM,frames:CM},PM="laugh_squirm",UM="LyraFinch",DM="Lyra Finch",IM=!1,kM=!1,FM={s0:{staminaMin:70,rate:8,amp:.0441,lean:.0264,billShake:.035,billRate:11.2,still:"stages/LyraFinch_s0.jpg",blend:{jaw:.256,cheek:.14,eye:.21,brow:.093}},s1:{staminaMin:40,rate:11.2,amp:.0735,lean:.0462,billShake:.07,billRate:14.4,still:"stages/LyraFinch_s1.jpg",blend:{jaw:.516,cheek:.344,eye:.467,brow:.196}},s2:{staminaMin:15,rate:14,amp:.098,lean:.066,billShake:.1,billRate:16,still:"stages/LyraFinch_s2.jpg",blend:{jaw:.85,cheek:.6,eye:.775,brow:.35}},s3:{staminaMin:0,rate:16.1,amp:.1225,lean:.0792,billShake:.135,billRate:19.2,still:"stages/LyraFinch_s3.jpg",blend:{jaw:1,cheek:.888,eye:1,brow:.518}}},NM=2e3,BM=["frames/LyraFinch_f0.jpg","frames/LyraFinch_f1.jpg","frames/LyraFinch_f2.jpg","frames/LyraFinch_f3.jpg","frames/LyraFinch_f4.jpg"],OM={clip:PM,slug:UM,display:DM,playerOnly:IM,metalException:kM,stages:FM,hubPreviewMs:NM,frames:BM},zM="laugh_squirm",HM="MiraSolis",$M="Mira Solis",VM=!1,jM=!1,GM={s0:{staminaMin:70,rate:8.66,amp:.0405,lean:.0363,billShake:.0385,billRate:10.5,still:"stages/MiraSolis_s0.jpg",blend:{jaw:.267,cheek:.145,eye:.218,brow:.097}},s1:{staminaMin:40,rate:12.6,amp:.0675,lean:.0635,billShake:.077,billRate:13.5,still:"stages/MiraSolis_s1.jpg",blend:{jaw:.483,cheek:.322,eye:.438,brow:.184}},s2:{staminaMin:15,rate:15.75,amp:.09,lean:.0907,billShake:.11,billRate:15,still:"stages/MiraSolis_s2.jpg",blend:{jaw:.807,cheek:.57,eye:.736,brow:.333}},s3:{staminaMin:0,rate:18.11,amp:.1125,lean:.1089,billShake:.1485,billRate:18,still:"stages/MiraSolis_s3.jpg",blend:{jaw:1,cheek:.852,eye:1,brow:.497}}},WM=2e3,XM=["frames/MiraSolis_f0.jpg","frames/MiraSolis_f1.jpg","frames/MiraSolis_f2.jpg","frames/MiraSolis_f3.jpg","frames/MiraSolis_f4.jpg"],qM={clip:zM,slug:HM,display:$M,playerOnly:VM,metalException:jM,stages:GM,hubPreviewMs:WM,frames:XM},KM="laugh_squirm",YM="NimCortez",JM="Nim Cortez",ZM=!1,QM=!1,t1={s0:{staminaMin:70,rate:8.86,amp:.0513,lean:.0363,billShake:.0455,billRate:12.6,still:"stages/NimCortez_s0.jpg",blend:{jaw:.269,cheek:.146,eye:.219,brow:.098}},s1:{staminaMin:40,rate:12.88,amp:.0855,lean:.0635,billShake:.091,billRate:16.2,still:"stages/NimCortez_s1.jpg",blend:{jaw:.489,cheek:.326,eye:.443,brow:.187}},s2:{staminaMin:15,rate:16.1,amp:.114,lean:.0907,billShake:.13,billRate:18,still:"stages/NimCortez_s2.jpg",blend:{jaw:.82,cheek:.579,eye:.747,brow:.338}},s3:{staminaMin:0,rate:18.52,amp:.1425,lean:.1089,billShake:.1755,billRate:21.6,still:"stages/NimCortez_s3.jpg",blend:{jaw:1,cheek:.867,eye:1,brow:.506}}},e1=2e3,n1=["frames/NimCortez_f0.jpg","frames/NimCortez_f1.jpg","frames/NimCortez_f2.jpg","frames/NimCortez_f3.jpg","frames/NimCortez_f4.jpg"],i1={clip:KM,slug:YM,display:JM,playerOnly:ZM,metalException:QM,stages:t1,hubPreviewMs:e1,frames:n1},s1="laugh_squirm",a1="RynAshford",r1="Ryn Ashford",o1=!1,l1=!1,c1={s0:{staminaMin:70,rate:8.09,amp:.0549,lean:.0264,billShake:.042,billRate:13.3,still:"stages/RynAshford_s0.jpg",blend:{jaw:.261,cheek:.142,eye:.214,brow:.094}},s1:{staminaMin:40,rate:11.76,amp:.0915,lean:.0462,billShake:.084,billRate:17.1,still:"stages/RynAshford_s1.jpg",blend:{jaw:.528,cheek:.353,eye:.478,brow:.201}},s2:{staminaMin:15,rate:14.7,amp:.122,lean:.066,billShake:.12,billRate:19,still:"stages/RynAshford_s2.jpg",blend:{jaw:.874,cheek:.616,eye:.796,brow:.36}},s3:{staminaMin:0,rate:16.9,amp:.1525,lean:.0792,billShake:.162,billRate:22.8,still:"stages/RynAshford_s3.jpg",blend:{jaw:1,cheek:.918,eye:1,brow:.535}}},h1=2e3,u1=["frames/RynAshford_f0.jpg","frames/RynAshford_f1.jpg","frames/RynAshford_f2.jpg","frames/RynAshford_f3.jpg","frames/RynAshford_f4.jpg"],d1={clip:s1,slug:a1,display:r1,playerOnly:o1,metalException:l1,stages:c1,hubPreviewMs:h1,frames:u1},f1="laugh_squirm",p1="SableQuinn",m1="Sable Quinn",g1=!1,_1=!1,v1={s0:{staminaMin:70,rate:8.09,amp:.0405,lean:.033,billShake:.035,billRate:10.5,still:"stages/SableQuinn_s0.jpg",blend:{jaw:.261,cheek:.142,eye:.214,brow:.094}},s1:{staminaMin:40,rate:11.76,amp:.0675,lean:.0578,billShake:.07,billRate:13.5,still:"stages/SableQuinn_s1.jpg",blend:{jaw:.528,cheek:.353,eye:.478,brow:.201}},s2:{staminaMin:15,rate:14.7,amp:.09,lean:.0825,billShake:.1,billRate:15,still:"stages/SableQuinn_s2.jpg",blend:{jaw:.874,cheek:.616,eye:.796,brow:.36}},s3:{staminaMin:0,rate:16.9,amp:.1125,lean:.099,billShake:.135,billRate:18,still:"stages/SableQuinn_s3.jpg",blend:{jaw:1,cheek:.918,eye:1,brow:.535}}},y1=2e3,b1=["frames/SableQuinn_f0.jpg","frames/SableQuinn_f1.jpg","frames/SableQuinn_f2.jpg","frames/SableQuinn_f3.jpg","frames/SableQuinn_f4.jpg"],x1={clip:f1,slug:p1,display:m1,playerOnly:g1,metalException:_1,stages:v1,hubPreviewMs:y1,frames:b1},M1="laugh_squirm",S1="TorenBlake",w1="Toren Blake",E1=!1,T1=!1,A1={s0:{staminaMin:70,rate:8.66,amp:.0549,lean:.0363,billShake:.0385,billRate:13.3,still:"stages/TorenBlake_s0.jpg",blend:{jaw:.267,cheek:.145,eye:.218,brow:.097}},s1:{staminaMin:40,rate:12.6,amp:.0915,lean:.0635,billShake:.077,billRate:17.1,still:"stages/TorenBlake_s1.jpg",blend:{jaw:.483,cheek:.322,eye:.438,brow:.184}},s2:{staminaMin:15,rate:15.75,amp:.122,lean:.0907,billShake:.11,billRate:19,still:"stages/TorenBlake_s2.jpg",blend:{jaw:.807,cheek:.57,eye:.736,brow:.333}},s3:{staminaMin:0,rate:18.11,amp:.1525,lean:.1089,billShake:.1485,billRate:22.8,still:"stages/TorenBlake_s3.jpg",blend:{jaw:1,cheek:.852,eye:1,brow:.497}}},R1=2e3,C1=["frames/TorenBlake_f0.jpg","frames/TorenBlake_f1.jpg","frames/TorenBlake_f2.jpg","frames/TorenBlake_f3.jpg","frames/TorenBlake_f4.jpg"],L1={clip:M1,slug:S1,display:w1,playerOnly:E1,metalException:T1,stages:A1,hubPreviewMs:R1,frames:C1},P1="laugh_squirm",U1="VeshMarlowe",D1="Vesh Marlowe",I1=!1,k1=!1,F1={s0:{staminaMin:70,rate:8.86,amp:.0513,lean:.0297,billShake:.0455,billRate:12.6,still:"stages/VeshMarlowe_s0.jpg",blend:{jaw:.269,cheek:.146,eye:.219,brow:.098}},s1:{staminaMin:40,rate:12.88,amp:.0855,lean:.052,billShake:.091,billRate:16.2,still:"stages/VeshMarlowe_s1.jpg",blend:{jaw:.489,cheek:.326,eye:.443,brow:.187}},s2:{staminaMin:15,rate:16.1,amp:.114,lean:.0743,billShake:.13,billRate:18,still:"stages/VeshMarlowe_s2.jpg",blend:{jaw:.82,cheek:.579,eye:.747,brow:.338}},s3:{staminaMin:0,rate:18.52,amp:.1425,lean:.0891,billShake:.1755,billRate:21.6,still:"stages/VeshMarlowe_s3.jpg",blend:{jaw:1,cheek:.867,eye:1,brow:.506}}},N1=2e3,B1=["frames/VeshMarlowe_f0.jpg","frames/VeshMarlowe_f1.jpg","frames/VeshMarlowe_f2.jpg","frames/VeshMarlowe_f3.jpg","frames/VeshMarlowe_f4.jpg"],O1={clip:P1,slug:U1,display:D1,playerOnly:I1,metalException:k1,stages:F1,hubPreviewMs:N1,frames:B1},z1=""+new URL("BriarKnox-Dpa0Hutf.jpg",import.meta.url).href,H1=""+new URL("BriarKnox_f1-DIMGVEmx.jpg",import.meta.url).href,$1=""+new URL("BriarKnox_f2-Di8hF-Yk.jpg",import.meta.url).href,V1=""+new URL("BriarKnox_f3-YiiMhUlk.jpg",import.meta.url).href,j1=""+new URL("CassWynn-DlWuid-D.jpg",import.meta.url).href,G1=""+new URL("CassWynn_f1-CKr-Jcv6.jpg",import.meta.url).href,W1=""+new URL("CassWynn_f2-M_Ls8jj7.jpg",import.meta.url).href,X1=""+new URL("CassWynn_f3-CIx9adPu.jpg",import.meta.url).href,q1=""+new URL("ElaraCase-D5jHayJQ.jpg",import.meta.url).href,K1=""+new URL("ElaraCase_f1-CsM2UzSS.jpg",import.meta.url).href,Y1=""+new URL("ElaraCase_f2-Cny9ENB7.jpg",import.meta.url).href,J1=""+new URL("ElaraCase_f3-BbFUFlc5.jpg",import.meta.url).href,Z1=""+new URL("EmberLang-DX9vz0jP.jpg",import.meta.url).href,Q1=""+new URL("EmberLang_f1-pyLMsxkt.jpg",import.meta.url).href,tS=""+new URL("EmberLang_f2-CyS1vDsI.jpg",import.meta.url).href,eS=""+new URL("EmberLang_f3-BLxeIw9m.jpg",import.meta.url).href,nS=""+new URL("JunoHale-CrdaXpZ2.jpg",import.meta.url).href,iS=""+new URL("JunoHale_f1-DB0nbufa.jpg",import.meta.url).href,sS=""+new URL("JunoHale_f2-DB6nTvrK.jpg",import.meta.url).href,aS=""+new URL("JunoHale_f3-Bw0-1uEi.jpg",import.meta.url).href,rS=""+new URL("KoraVale-Bxh0eoY1.jpg",import.meta.url).href,oS=""+new URL("KoraVale_f1-BYtFFfJG.jpg",import.meta.url).href,lS=""+new URL("KoraVale_f2-CDGA2Z4I.jpg",import.meta.url).href,cS=""+new URL("KoraVale_f3-CL3ypQCy.jpg",import.meta.url).href,hS=""+new URL("LyraFinch-CSDNR9Pf.jpg",import.meta.url).href,uS=""+new URL("LyraFinch_f1-DziovBVK.jpg",import.meta.url).href,dS=""+new URL("LyraFinch_f2-DZqsSqYh.jpg",import.meta.url).href,fS=""+new URL("LyraFinch_f3-B2UerdWv.jpg",import.meta.url).href,pS=""+new URL("MiraSolis-CmAre_4Z.jpg",import.meta.url).href,mS=""+new URL("MiraSolis_f1-B-OTsIL-.jpg",import.meta.url).href,gS=""+new URL("MiraSolis_f2-BOaMOtBB.jpg",import.meta.url).href,_S=""+new URL("MiraSolis_f3-CTXvZWL3.jpg",import.meta.url).href,vS=""+new URL("NimCortez-_04Y7Q6K.jpg",import.meta.url).href,yS=""+new URL("NimCortez_f1-dC97P4M3.jpg",import.meta.url).href,bS=""+new URL("NimCortez_f2-CGr2HMy8.jpg",import.meta.url).href,xS=""+new URL("NimCortez_f3-4IwMBh0p.jpg",import.meta.url).href,MS=""+new URL("RynAshford-Dug0-cz-.jpg",import.meta.url).href,SS=""+new URL("RynAshford_f1-pUdHYG6r.jpg",import.meta.url).href,wS=""+new URL("RynAshford_f2-C0MIj3Xz.jpg",import.meta.url).href,ES=""+new URL("RynAshford_f3-I9cqQB3j.jpg",import.meta.url).href,TS=""+new URL("SableQuinn-mzonjDUr.jpg",import.meta.url).href,AS=""+new URL("SableQuinn_f1-d7oM_zVx.jpg",import.meta.url).href,RS=""+new URL("SableQuinn_f2-D9sDv-wf.jpg",import.meta.url).href,CS=""+new URL("SableQuinn_f3-CT0FNdr2.jpg",import.meta.url).href,LS=""+new URL("TorenBlake-CbL0FLGN.jpg",import.meta.url).href,PS=""+new URL("TorenBlake_f1-Cwaleigs.jpg",import.meta.url).href,US=""+new URL("TorenBlake_f2-DUisWtKY.jpg",import.meta.url).href,DS=""+new URL("TorenBlake_f3-CZRKFiql.jpg",import.meta.url).href,IS=""+new URL("VeshMarlowe-BWw8zQpl.jpg",import.meta.url).href,kS=""+new URL("VeshMarlowe_f1-FSFnD6eg.jpg",import.meta.url).href,FS=""+new URL("VeshMarlowe_f2-B9J_Gfml.jpg",import.meta.url).href,NS=""+new URL("VeshMarlowe_f3-BzsplEhK.jpg",import.meta.url).href,BS=""+new URL("BriarKnox-Dpa0Hutf.jpg",import.meta.url).href,OS=""+new URL("BriarKnox_f1-DIMGVEmx.jpg",import.meta.url).href,zS=""+new URL("BriarKnox_f2-Di8hF-Yk.jpg",import.meta.url).href,HS=""+new URL("BriarKnox_f3-YiiMhUlk.jpg",import.meta.url).href,$S=""+new URL("BriarKnox_f4-Bqpo5RR5.jpg",import.meta.url).href,VS=""+new URL("CassWynn-DlWuid-D.jpg",import.meta.url).href,jS=""+new URL("CassWynn_f1-CKr-Jcv6.jpg",import.meta.url).href,GS=""+new URL("CassWynn_f2-M_Ls8jj7.jpg",import.meta.url).href,WS=""+new URL("CassWynn_f3-CIx9adPu.jpg",import.meta.url).href,XS=""+new URL("CassWynn_f4-BQUXR5jI.jpg",import.meta.url).href,qS=""+new URL("ElaraCase-D5jHayJQ.jpg",import.meta.url).href,KS=""+new URL("ElaraCase_f1-CsM2UzSS.jpg",import.meta.url).href,YS=""+new URL("ElaraCase_f2-Cny9ENB7.jpg",import.meta.url).href,JS=""+new URL("ElaraCase_f3-BbFUFlc5.jpg",import.meta.url).href,ZS=""+new URL("ElaraCase_f4-DSgU1WAV.jpg",import.meta.url).href,QS=""+new URL("EmberLang-DX9vz0jP.jpg",import.meta.url).href,tw=""+new URL("EmberLang_f1-pyLMsxkt.jpg",import.meta.url).href,ew=""+new URL("EmberLang_f2-CyS1vDsI.jpg",import.meta.url).href,nw=""+new URL("EmberLang_f3-BLxeIw9m.jpg",import.meta.url).href,iw=""+new URL("EmberLang_f4-BFGRPb-8.jpg",import.meta.url).href,sw=""+new URL("JunoHale-CrdaXpZ2.jpg",import.meta.url).href,aw=""+new URL("JunoHale_f1-DB0nbufa.jpg",import.meta.url).href,rw=""+new URL("JunoHale_f2-DB6nTvrK.jpg",import.meta.url).href,ow=""+new URL("JunoHale_f3-Bw0-1uEi.jpg",import.meta.url).href,lw=""+new URL("JunoHale_f4-CpYgdOZp.jpg",import.meta.url).href,cw=""+new URL("KoraVale-Bxh0eoY1.jpg",import.meta.url).href,hw=""+new URL("KoraVale_f1-BYtFFfJG.jpg",import.meta.url).href,uw=""+new URL("KoraVale_f2-CDGA2Z4I.jpg",import.meta.url).href,dw=""+new URL("KoraVale_f3-CL3ypQCy.jpg",import.meta.url).href,fw=""+new URL("KoraVale_f4-Ba_e9JYy.jpg",import.meta.url).href,pw=""+new URL("LyraFinch-CSDNR9Pf.jpg",import.meta.url).href,mw=""+new URL("LyraFinch_f1-DziovBVK.jpg",import.meta.url).href,gw=""+new URL("LyraFinch_f2-DZqsSqYh.jpg",import.meta.url).href,_w=""+new URL("LyraFinch_f3-B2UerdWv.jpg",import.meta.url).href,vw=""+new URL("LyraFinch_f4-BgOfOzJq.jpg",import.meta.url).href,yw=""+new URL("MiraSolis-CmAre_4Z.jpg",import.meta.url).href,bw=""+new URL("MiraSolis_f1-B-OTsIL-.jpg",import.meta.url).href,xw=""+new URL("MiraSolis_f2-BOaMOtBB.jpg",import.meta.url).href,Mw=""+new URL("MiraSolis_f3-CTXvZWL3.jpg",import.meta.url).href,Sw=""+new URL("MiraSolis_f4-DF8fJesE.jpg",import.meta.url).href,ww=""+new URL("NimCortez-_04Y7Q6K.jpg",import.meta.url).href,Ew=""+new URL("NimCortez_f1-dC97P4M3.jpg",import.meta.url).href,Tw=""+new URL("NimCortez_f2-CGr2HMy8.jpg",import.meta.url).href,Aw=""+new URL("NimCortez_f3-4IwMBh0p.jpg",import.meta.url).href,Rw=""+new URL("NimCortez_f4-QVQbvpkz.jpg",import.meta.url).href,Cw=""+new URL("RynAshford-Dug0-cz-.jpg",import.meta.url).href,Lw=""+new URL("RynAshford_f1-pUdHYG6r.jpg",import.meta.url).href,Pw=""+new URL("RynAshford_f2-C0MIj3Xz.jpg",import.meta.url).href,Uw=""+new URL("RynAshford_f3-I9cqQB3j.jpg",import.meta.url).href,Dw=""+new URL("RynAshford_f4-BUrZMzvq.jpg",import.meta.url).href,Iw=""+new URL("SableQuinn-mzonjDUr.jpg",import.meta.url).href,kw=""+new URL("SableQuinn_f1-d7oM_zVx.jpg",import.meta.url).href,Fw=""+new URL("SableQuinn_f2-D9sDv-wf.jpg",import.meta.url).href,Nw=""+new URL("SableQuinn_f3-CT0FNdr2.jpg",import.meta.url).href,Bw=""+new URL("SableQuinn_f4-cIlfyQOQ.jpg",import.meta.url).href,Ow=""+new URL("TorenBlake-CbL0FLGN.jpg",import.meta.url).href,zw=""+new URL("TorenBlake_f1-Cwaleigs.jpg",import.meta.url).href,Hw=""+new URL("TorenBlake_f2-DUisWtKY.jpg",import.meta.url).href,$w=""+new URL("TorenBlake_f3-CZRKFiql.jpg",import.meta.url).href,Vw=""+new URL("TorenBlake_f4-DgQS8ksQ.jpg",import.meta.url).href,jw=""+new URL("VeshMarlowe-BWw8zQpl.jpg",import.meta.url).href,Gw=""+new URL("VeshMarlowe_f1-FSFnD6eg.jpg",import.meta.url).href,Ww=""+new URL("VeshMarlowe_f2-B9J_Gfml.jpg",import.meta.url).href,Xw=""+new URL("VeshMarlowe_f3-BzsplEhK.jpg",import.meta.url).href,qw=""+new URL("VeshMarlowe_f4-DFEWc3Kq.jpg",import.meta.url).href,Kw=Object.assign({"../../assets/binds/laugh/BriarKnox.laugh.json":Ox,"../../assets/binds/laugh/CassWynn.laugh.json":qx,"../../assets/binds/laugh/ElaraCase.laugh.json":iM,"../../assets/binds/laugh/EmberLang.laugh.json":dM,"../../assets/binds/laugh/JunoHale.laugh.json":xM,"../../assets/binds/laugh/KoraVale.laugh.json":LM,"../../assets/binds/laugh/LyraFinch.laugh.json":OM,"../../assets/binds/laugh/MiraSolis.laugh.json":qM,"../../assets/binds/laugh/NimCortez.laugh.json":i1,"../../assets/binds/laugh/RynAshford.laugh.json":d1,"../../assets/binds/laugh/SableQuinn.laugh.json":x1,"../../assets/binds/laugh/TorenBlake.laugh.json":L1,"../../assets/binds/laugh/VeshMarlowe.laugh.json":O1}),Hi={};var $c;for(const[s,t]of Object.entries(Kw)){const e=($c=s.split("/").pop())==null?void 0:$c.replace(/\.laugh\.json$/i,"");!e||!t||(Hi[e]=t,t.slug&&(Hi[t.slug]=t))}const yo=8,bo=24,Yw=8,Jw=24,Zw=.2,Qw=.12,tE=.2,Pe=(s,t,e)=>Number.isFinite(s)?Math.max(t,Math.min(e,s)):t;function eE(s,t="?"){return{...s,staminaMin:Pe(s.staminaMin,0,100),rate:Pe(s.rate,Yw,Jw),amp:Pe(s.amp,0,Zw),lean:Pe(s.lean,0,Qw),billShake:Pe(s.billShake,0,tE),billRate:Pe(s.billRate,yo,bo),blend:s.blend?{jaw:Pe(s.blend.jaw,0,1),cheek:Pe(s.blend.cheek,0,1),eye:Pe(s.blend.eye,0,1),brow:Pe(s.blend.brow,0,1)}:void 0}}function kh(s){const t={};for(const e of["s0","s1","s2","s3"])t[e]=eE(s.stages[e],`${s.slug}.${e}`);return{...s,stages:t}}for(const s of Object.keys(Hi))Hi[s]=kh(Hi[s]);const wc=kh({clip:"laugh_squirm",slug:"default",display:"Default",stages:{s0:{staminaMin:70,rate:8,amp:.04,lean:.03,billShake:.03,billRate:10,blend:{jaw:.26,cheek:.14,eye:.21,brow:.09}},s1:{staminaMin:40,rate:11,amp:.07,lean:.05,billShake:.06,billRate:13,blend:{jaw:.51,cheek:.34,eye:.46,brow:.2}},s2:{staminaMin:15,rate:14,amp:.1,lean:.07,billShake:.09,billRate:16,blend:{jaw:.85,cheek:.6,eye:.78,brow:.35}},s3:{staminaMin:0,rate:16,amp:.13,lean:.09,billShake:.12,billRate:19,blend:{jaw:1,cheek:.92,eye:1,brow:.54}}},hubPreviewMs:2e3});function Ma(s){return s?Hi[s]??wc:wc}function Sa(s){const t=zi(s);return Ma(t.slug)}const nE=Object.assign({"../../assets/binds/laugh/stages/BriarKnox_s0.jpg":z1,"../../assets/binds/laugh/stages/BriarKnox_s1.jpg":H1,"../../assets/binds/laugh/stages/BriarKnox_s2.jpg":$1,"../../assets/binds/laugh/stages/BriarKnox_s3.jpg":V1,"../../assets/binds/laugh/stages/CassWynn_s0.jpg":j1,"../../assets/binds/laugh/stages/CassWynn_s1.jpg":G1,"../../assets/binds/laugh/stages/CassWynn_s2.jpg":W1,"../../assets/binds/laugh/stages/CassWynn_s3.jpg":X1,"../../assets/binds/laugh/stages/ElaraCase_s0.jpg":q1,"../../assets/binds/laugh/stages/ElaraCase_s1.jpg":K1,"../../assets/binds/laugh/stages/ElaraCase_s2.jpg":Y1,"../../assets/binds/laugh/stages/ElaraCase_s3.jpg":J1,"../../assets/binds/laugh/stages/EmberLang_s0.jpg":Z1,"../../assets/binds/laugh/stages/EmberLang_s1.jpg":Q1,"../../assets/binds/laugh/stages/EmberLang_s2.jpg":tS,"../../assets/binds/laugh/stages/EmberLang_s3.jpg":eS,"../../assets/binds/laugh/stages/JunoHale_s0.jpg":nS,"../../assets/binds/laugh/stages/JunoHale_s1.jpg":iS,"../../assets/binds/laugh/stages/JunoHale_s2.jpg":sS,"../../assets/binds/laugh/stages/JunoHale_s3.jpg":aS,"../../assets/binds/laugh/stages/KoraVale_s0.jpg":rS,"../../assets/binds/laugh/stages/KoraVale_s1.jpg":oS,"../../assets/binds/laugh/stages/KoraVale_s2.jpg":lS,"../../assets/binds/laugh/stages/KoraVale_s3.jpg":cS,"../../assets/binds/laugh/stages/LyraFinch_s0.jpg":hS,"../../assets/binds/laugh/stages/LyraFinch_s1.jpg":uS,"../../assets/binds/laugh/stages/LyraFinch_s2.jpg":dS,"../../assets/binds/laugh/stages/LyraFinch_s3.jpg":fS,"../../assets/binds/laugh/stages/MiraSolis_s0.jpg":pS,"../../assets/binds/laugh/stages/MiraSolis_s1.jpg":mS,"../../assets/binds/laugh/stages/MiraSolis_s2.jpg":gS,"../../assets/binds/laugh/stages/MiraSolis_s3.jpg":_S,"../../assets/binds/laugh/stages/NimCortez_s0.jpg":vS,"../../assets/binds/laugh/stages/NimCortez_s1.jpg":yS,"../../assets/binds/laugh/stages/NimCortez_s2.jpg":bS,"../../assets/binds/laugh/stages/NimCortez_s3.jpg":xS,"../../assets/binds/laugh/stages/RynAshford_s0.jpg":MS,"../../assets/binds/laugh/stages/RynAshford_s1.jpg":SS,"../../assets/binds/laugh/stages/RynAshford_s2.jpg":wS,"../../assets/binds/laugh/stages/RynAshford_s3.jpg":ES,"../../assets/binds/laugh/stages/SableQuinn_s0.jpg":TS,"../../assets/binds/laugh/stages/SableQuinn_s1.jpg":AS,"../../assets/binds/laugh/stages/SableQuinn_s2.jpg":RS,"../../assets/binds/laugh/stages/SableQuinn_s3.jpg":CS,"../../assets/binds/laugh/stages/TorenBlake_s0.jpg":LS,"../../assets/binds/laugh/stages/TorenBlake_s1.jpg":PS,"../../assets/binds/laugh/stages/TorenBlake_s2.jpg":US,"../../assets/binds/laugh/stages/TorenBlake_s3.jpg":DS,"../../assets/binds/laugh/stages/VeshMarlowe_s0.jpg":IS,"../../assets/binds/laugh/stages/VeshMarlowe_s1.jpg":kS,"../../assets/binds/laugh/stages/VeshMarlowe_s2.jpg":FS,"../../assets/binds/laugh/stages/VeshMarlowe_s3.jpg":NS}),Fh={};for(const[s,t]of Object.entries(nE)){const e=s.split("/").pop();e&&(Fh[e]=t)}function iE(s){const t=s.still;if(!t)return;const e=t.split("/").pop();if(e)return Fh[e]}const sE=Object.assign({"../../assets/binds/laugh/frames/BriarKnox_f0.jpg":BS,"../../assets/binds/laugh/frames/BriarKnox_f1.jpg":OS,"../../assets/binds/laugh/frames/BriarKnox_f2.jpg":zS,"../../assets/binds/laugh/frames/BriarKnox_f3.jpg":HS,"../../assets/binds/laugh/frames/BriarKnox_f4.jpg":$S,"../../assets/binds/laugh/frames/CassWynn_f0.jpg":VS,"../../assets/binds/laugh/frames/CassWynn_f1.jpg":jS,"../../assets/binds/laugh/frames/CassWynn_f2.jpg":GS,"../../assets/binds/laugh/frames/CassWynn_f3.jpg":WS,"../../assets/binds/laugh/frames/CassWynn_f4.jpg":XS,"../../assets/binds/laugh/frames/ElaraCase_f0.jpg":qS,"../../assets/binds/laugh/frames/ElaraCase_f1.jpg":KS,"../../assets/binds/laugh/frames/ElaraCase_f2.jpg":YS,"../../assets/binds/laugh/frames/ElaraCase_f3.jpg":JS,"../../assets/binds/laugh/frames/ElaraCase_f4.jpg":ZS,"../../assets/binds/laugh/frames/EmberLang_f0.jpg":QS,"../../assets/binds/laugh/frames/EmberLang_f1.jpg":tw,"../../assets/binds/laugh/frames/EmberLang_f2.jpg":ew,"../../assets/binds/laugh/frames/EmberLang_f3.jpg":nw,"../../assets/binds/laugh/frames/EmberLang_f4.jpg":iw,"../../assets/binds/laugh/frames/JunoHale_f0.jpg":sw,"../../assets/binds/laugh/frames/JunoHale_f1.jpg":aw,"../../assets/binds/laugh/frames/JunoHale_f2.jpg":rw,"../../assets/binds/laugh/frames/JunoHale_f3.jpg":ow,"../../assets/binds/laugh/frames/JunoHale_f4.jpg":lw,"../../assets/binds/laugh/frames/KoraVale_f0.jpg":cw,"../../assets/binds/laugh/frames/KoraVale_f1.jpg":hw,"../../assets/binds/laugh/frames/KoraVale_f2.jpg":uw,"../../assets/binds/laugh/frames/KoraVale_f3.jpg":dw,"../../assets/binds/laugh/frames/KoraVale_f4.jpg":fw,"../../assets/binds/laugh/frames/LyraFinch_f0.jpg":pw,"../../assets/binds/laugh/frames/LyraFinch_f1.jpg":mw,"../../assets/binds/laugh/frames/LyraFinch_f2.jpg":gw,"../../assets/binds/laugh/frames/LyraFinch_f3.jpg":_w,"../../assets/binds/laugh/frames/LyraFinch_f4.jpg":vw,"../../assets/binds/laugh/frames/MiraSolis_f0.jpg":yw,"../../assets/binds/laugh/frames/MiraSolis_f1.jpg":bw,"../../assets/binds/laugh/frames/MiraSolis_f2.jpg":xw,"../../assets/binds/laugh/frames/MiraSolis_f3.jpg":Mw,"../../assets/binds/laugh/frames/MiraSolis_f4.jpg":Sw,"../../assets/binds/laugh/frames/NimCortez_f0.jpg":ww,"../../assets/binds/laugh/frames/NimCortez_f1.jpg":Ew,"../../assets/binds/laugh/frames/NimCortez_f2.jpg":Tw,"../../assets/binds/laugh/frames/NimCortez_f3.jpg":Aw,"../../assets/binds/laugh/frames/NimCortez_f4.jpg":Rw,"../../assets/binds/laugh/frames/RynAshford_f0.jpg":Cw,"../../assets/binds/laugh/frames/RynAshford_f1.jpg":Lw,"../../assets/binds/laugh/frames/RynAshford_f2.jpg":Pw,"../../assets/binds/laugh/frames/RynAshford_f3.jpg":Uw,"../../assets/binds/laugh/frames/RynAshford_f4.jpg":Dw,"../../assets/binds/laugh/frames/SableQuinn_f0.jpg":Iw,"../../assets/binds/laugh/frames/SableQuinn_f1.jpg":kw,"../../assets/binds/laugh/frames/SableQuinn_f2.jpg":Fw,"../../assets/binds/laugh/frames/SableQuinn_f3.jpg":Nw,"../../assets/binds/laugh/frames/SableQuinn_f4.jpg":Bw,"../../assets/binds/laugh/frames/TorenBlake_f0.jpg":Ow,"../../assets/binds/laugh/frames/TorenBlake_f1.jpg":zw,"../../assets/binds/laugh/frames/TorenBlake_f2.jpg":Hw,"../../assets/binds/laugh/frames/TorenBlake_f3.jpg":$w,"../../assets/binds/laugh/frames/TorenBlake_f4.jpg":Vw,"../../assets/binds/laugh/frames/VeshMarlowe_f0.jpg":jw,"../../assets/binds/laugh/frames/VeshMarlowe_f1.jpg":Gw,"../../assets/binds/laugh/frames/VeshMarlowe_f2.jpg":Ww,"../../assets/binds/laugh/frames/VeshMarlowe_f3.jpg":Xw,"../../assets/binds/laugh/frames/VeshMarlowe_f4.jpg":qw}),Nh={};for(const[s,t]of Object.entries(sE)){const e=s.split("/").pop();e&&(Nh[e]=t)}function aE(s){const t=s.frames;if(!(t!=null&&t.length))return[];const e=[];for(const n of t){const i=n.split("/").pop();if(!i)continue;const a=Nh[i];a&&e.push(a)}return e}function Bh(s,t){const e=Math.max(0,Math.min(100,t));return e>=s.stages.s0.staminaMin?"s0":e>=s.stages.s1.staminaMin?"s1":e>=s.stages.s2.staminaMin?"s2":"s3"}function rE(s,t){return s.stages[Bh(s,t)]}function oE(s,t){const e=Math.max(1,Math.floor(s));if(e===1)return[0,0];const n=Pe(t,0,1),i=Math.pow(1-n,1.15),a=Math.min(e-1,Math.floor(i*e)),r=Math.min(e-1,a+1);return[a,r]}function lE(s,t){const e=Pe(t,0,1),n=Pe(s??14,yo,bo);return Pe(n*(.85+.3*(1-e)),yo,bo)}const cE="tickle",hE="BriarKnox",uE="Briar Knox",dE=!1,fE=!1,pE=27.4,mE=36.2,gE=.275,_E=.0494,vE=.0825,yE=.2504,bE=.4462,xE=.4752,ME=.0698,SE=29.64,wE=["frames/BriarKnox_f0.jpg","frames/BriarKnox_f1.jpg","frames/BriarKnox_f2.jpg","frames/BriarKnox_f3.jpg","frames/BriarKnox_f4.jpg"],EE={clip:cE,slug:hE,display:uE,playerOnly:dE,metalException:fE,rate:pE,twistRate:mE,spineBase:gE,spineAmp:_E,chestAmp:vE,shoulderAmp:yE,elbowAmp:bE,weaponWag:xE,billWag:ME,billRate:SE,frames:wE},TE="tickle",AE="CassWynn",RE="Cass Wynn",CE=!1,LE=!1,PE=28.6,UE=37.8,DE=.285,IE=.0448,kE=.0902,FE=.2621,NE=.469,BE=.5076,OE=.0778,zE=30.56,HE=["frames/CassWynn_f0.jpg","frames/CassWynn_f1.jpg","frames/CassWynn_f2.jpg","frames/CassWynn_f3.jpg","frames/CassWynn_f4.jpg"],$E={clip:TE,slug:AE,display:RE,playerOnly:CE,metalException:LE,rate:PE,twistRate:UE,spineBase:DE,spineAmp:IE,chestAmp:kE,shoulderAmp:FE,elbowAmp:NE,weaponWag:BE,billWag:OE,billRate:zE,frames:HE},VE="tickle",jE="ElaraCase",GE="Elara Case",WE=!0,XE=!0,qE=29.2,KE=38.5,YE=.29,JE=.0529,ZE=.0957,QE=.2679,t2=.4919,e2=.54,n2=.0859,i2=31.48,s2=["frames/ElaraCase_f0.jpg","frames/ElaraCase_f1.jpg","frames/ElaraCase_f2.jpg","frames/ElaraCase_f3.jpg","frames/ElaraCase_f4.jpg"],a2={clip:VE,slug:jE,display:GE,playerOnly:WE,metalException:XE,rate:qE,twistRate:KE,spineBase:YE,spineAmp:JE,chestAmp:ZE,shoulderAmp:QE,elbowAmp:t2,weaponWag:e2,billWag:n2,billRate:i2,frames:s2},r2="tickle",o2="EmberLang",l2="Ember Lang",c2=!1,h2=!1,u2=26.8,d2=35.4,f2=.268,p2=.0471,m2=.0781,g2=.2388,_2=.4347,v2=.4536,y2=.0657,b2=28.94,x2=["frames/EmberLang_f0.jpg","frames/EmberLang_f1.jpg","frames/EmberLang_f2.jpg","frames/EmberLang_f3.jpg","frames/EmberLang_f4.jpg"],M2={clip:r2,slug:o2,display:l2,playerOnly:c2,metalException:h2,rate:u2,twistRate:d2,spineBase:f2,spineAmp:p2,chestAmp:m2,shoulderAmp:g2,elbowAmp:_2,weaponWag:v2,billWag:y2,billRate:b2,frames:x2},S2="tickle",w2="JunoHale",E2="Juno Hale",T2=!1,A2=!1,R2=28.1,C2=37.1,L2=.28,P2=.0506,U2=.0858,D2=.254,I2=.4576,k2=.486,F2=.0739,N2=29.98,B2=["frames/JunoHale_f0.jpg","frames/JunoHale_f1.jpg","frames/JunoHale_f2.jpg","frames/JunoHale_f3.jpg","frames/JunoHale_f4.jpg"],O2={clip:S2,slug:w2,display:E2,playerOnly:T2,metalException:A2,rate:R2,twistRate:C2,spineBase:L2,spineAmp:P2,chestAmp:U2,shoulderAmp:D2,elbowAmp:I2,weaponWag:k2,billWag:F2,billRate:N2,frames:B2},z2="tickle",H2="KoraVale",$2="Kora Vale",V2=!1,j2=!1,G2=29,W2=38.2,X2=.288,q2=.054,K2=.0924,Y2=.2656,J2=.4805,Z2=.5184,Q2=.0818,tT=31.03,eT=["frames/KoraVale_f0.jpg","frames/KoraVale_f1.jpg","frames/KoraVale_f2.jpg","frames/KoraVale_f3.jpg","frames/KoraVale_f4.jpg"],nT={clip:z2,slug:H2,display:$2,playerOnly:V2,metalException:j2,rate:G2,twistRate:W2,spineBase:X2,spineAmp:q2,chestAmp:K2,shoulderAmp:Y2,elbowAmp:J2,weaponWag:Z2,billWag:Q2,billRate:tT,frames:eT},iT="tickle",sT="LyraFinch",aT="Lyra Finch",rT=!1,oT=!1,lT=27.7,cT=36.6,hT=.278,uT=.046,dT=.0836,fT=.2469,pT=.4576,mT=.4752,gT=.0711,_T=29.75,vT=["frames/LyraFinch_f0.jpg","frames/LyraFinch_f1.jpg","frames/LyraFinch_f2.jpg","frames/LyraFinch_f3.jpg","frames/LyraFinch_f4.jpg"],yT={clip:iT,slug:sT,display:aT,playerOnly:rT,metalException:oT,rate:lT,twistRate:cT,spineBase:hT,spineAmp:uT,chestAmp:dT,shoulderAmp:fT,elbowAmp:pT,weaponWag:mT,billWag:gT,billRate:_T,frames:vT},bT="tickle",xT="MiraSolis",MT="Mira Solis",ST=!1,wT=!1,ET=28.8,TT=37.9,AT=.286,RT=.0517,CT=.0891,LT=.2609,PT=.4748,UT=.5076,DT=.0791,IT=30.8,kT=["frames/MiraSolis_f0.jpg","frames/MiraSolis_f1.jpg","frames/MiraSolis_f2.jpg","frames/MiraSolis_f3.jpg","frames/MiraSolis_f4.jpg"],FT={clip:bT,slug:xT,display:MT,playerOnly:ST,metalException:wT,rate:ET,twistRate:TT,spineBase:AT,spineAmp:RT,chestAmp:CT,shoulderAmp:LT,elbowAmp:PT,weaponWag:UT,billWag:DT,billRate:IT,frames:kT},NT="tickle",BT="NimCortez",OT="Nim Cortez",zT=!1,HT=!1,$T=27.2,VT=35.9,jT=.272,GT=.0483,WT=.0803,XT=.2435,qT=.4404,KT=.4644,YT=.0671,JT=29.28,ZT=["frames/NimCortez_f0.jpg","frames/NimCortez_f1.jpg","frames/NimCortez_f2.jpg","frames/NimCortez_f3.jpg","frames/NimCortez_f4.jpg"],QT={clip:NT,slug:BT,display:OT,playerOnly:zT,metalException:HT,rate:$T,twistRate:VT,spineBase:jT,spineAmp:GT,chestAmp:WT,shoulderAmp:XT,elbowAmp:qT,weaponWag:KT,billWag:YT,billRate:JT,frames:ZT},tA="tickle",eA="RynAshford",nA="Ryn Ashford",iA=!1,sA=!1,aA=29.4,rA=38.9,oA=.292,lA=.0552,cA=.0979,hA=.2726,uA=.5034,dA=.5508,fA=.0886,pA=31.84,mA=["frames/RynAshford_f0.jpg","frames/RynAshford_f1.jpg","frames/RynAshford_f2.jpg","frames/RynAshford_f3.jpg","frames/RynAshford_f4.jpg"],gA={clip:tA,slug:eA,display:nA,playerOnly:iA,metalException:sA,rate:aA,twistRate:rA,spineBase:oA,spineAmp:lA,chestAmp:cA,shoulderAmp:hA,elbowAmp:uA,weaponWag:dA,billWag:fA,billRate:pA,frames:mA},_A="tickle",vA="SableQuinn",yA="Sable Quinn",bA=!1,xA=!1,MA=28.3,SA=37.4,wA=.282,EA=.0494,TA=.0869,AA=.2563,RA=.4633,CA=.4968,LA=.0764,PA=30.22,UA=["frames/SableQuinn_f0.jpg","frames/SableQuinn_f1.jpg","frames/SableQuinn_f2.jpg","frames/SableQuinn_f3.jpg","frames/SableQuinn_f4.jpg"],DA={clip:_A,slug:vA,display:yA,playerOnly:bA,metalException:xA,rate:MA,twistRate:SA,spineBase:wA,spineAmp:EA,chestAmp:TA,shoulderAmp:AA,elbowAmp:RA,weaponWag:CA,billWag:LA,billRate:PA,frames:UA},IA="tickle",kA="TorenBlake",FA="Toren Blake",NA=!1,BA=!1,OA=26.5,zA=35.1,HA=.265,$A=.0437,VA=.0759,jA=.2341,GA=.4233,WA=.4428,XA=.063,qA=28.71,KA=["frames/TorenBlake_f0.jpg","frames/TorenBlake_f1.jpg","frames/TorenBlake_f2.jpg","frames/TorenBlake_f3.jpg","frames/TorenBlake_f4.jpg"],YA={clip:IA,slug:kA,display:FA,playerOnly:NA,metalException:BA,rate:OA,twistRate:zA,spineBase:HA,spineAmp:$A,chestAmp:VA,shoulderAmp:jA,elbowAmp:GA,weaponWag:WA,billWag:XA,billRate:qA,frames:KA},JA="tickle",ZA="VeshMarlowe",QA="Vesh Marlowe",tR=!1,eR=!1,nR=29.7,iR=39.3,sR=.295,aR=.0563,rR=.1012,oR=.2773,lR=.5148,cR=.5724,hR=.0913,uR=32.18,dR=["frames/VeshMarlowe_f0.jpg","frames/VeshMarlowe_f1.jpg","frames/VeshMarlowe_f2.jpg","frames/VeshMarlowe_f3.jpg","frames/VeshMarlowe_f4.jpg"],fR={clip:JA,slug:ZA,display:QA,playerOnly:tR,metalException:eR,rate:nR,twistRate:iR,spineBase:sR,spineAmp:aR,chestAmp:rR,shoulderAmp:oR,elbowAmp:lR,weaponWag:cR,billWag:hR,billRate:uR,frames:dR},pR=""+new URL("BriarKnox_f0-Br3Wk2DJ.jpg",import.meta.url).href,mR=""+new URL("BriarKnox_f1-B0MxMCIU.jpg",import.meta.url).href,gR=""+new URL("BriarKnox_f2-BoqKQStT.jpg",import.meta.url).href,_R=""+new URL("BriarKnox_f3-ZMNQc_An.jpg",import.meta.url).href,vR=""+new URL("BriarKnox_f4-CAcLYFmC.jpg",import.meta.url).href,yR=""+new URL("CassWynn_f0-CauPPMuv.jpg",import.meta.url).href,bR=""+new URL("CassWynn_f1-AZ4-iYRj.jpg",import.meta.url).href,xR=""+new URL("CassWynn_f2-BKTtvjBc.jpg",import.meta.url).href,MR=""+new URL("CassWynn_f3-CeagAWou.jpg",import.meta.url).href,SR=""+new URL("CassWynn_f4-CfdMYKKc.jpg",import.meta.url).href,wR=""+new URL("ElaraCase_f0-D5UtozBg.jpg",import.meta.url).href,ER=""+new URL("ElaraCase_f1-BbzDHkIO.jpg",import.meta.url).href,TR=""+new URL("ElaraCase_f2-D35Eeh15.jpg",import.meta.url).href,AR=""+new URL("ElaraCase_f3-DcnFjtXJ.jpg",import.meta.url).href,RR=""+new URL("ElaraCase_f4-BXDWJNYz.jpg",import.meta.url).href,CR=""+new URL("EmberLang_f0-BVGwyBel.jpg",import.meta.url).href,LR=""+new URL("EmberLang_f1-CSsQZIj7.jpg",import.meta.url).href,PR=""+new URL("EmberLang_f2-Bx7x7SEi.jpg",import.meta.url).href,UR=""+new URL("EmberLang_f3-nFiPo-pJ.jpg",import.meta.url).href,DR=""+new URL("EmberLang_f4-CtIDt5kV.jpg",import.meta.url).href,IR=""+new URL("JunoHale_f0-CVWr1cLm.jpg",import.meta.url).href,kR=""+new URL("JunoHale_f1-pcv0xkWB.jpg",import.meta.url).href,FR=""+new URL("JunoHale_f2-D7mMZYXh.jpg",import.meta.url).href,NR=""+new URL("JunoHale_f3-CfszWg5E.jpg",import.meta.url).href,BR=""+new URL("JunoHale_f4-CIgtEqD-.jpg",import.meta.url).href,OR=""+new URL("KoraVale_f0-BTxAR6r9.jpg",import.meta.url).href,zR=""+new URL("KoraVale_f1-w2MD9gEf.jpg",import.meta.url).href,HR=""+new URL("KoraVale_f2-Dg0wtm_u.jpg",import.meta.url).href,$R=""+new URL("KoraVale_f3-D16d-MIR.jpg",import.meta.url).href,VR=""+new URL("KoraVale_f4-_BRWAtFh.jpg",import.meta.url).href,jR=""+new URL("LyraFinch_f0-CM9MDzZ-.jpg",import.meta.url).href,GR=""+new URL("LyraFinch_f1-DlASdSQA.jpg",import.meta.url).href,WR=""+new URL("LyraFinch_f2-C2LaxoDi.jpg",import.meta.url).href,XR=""+new URL("LyraFinch_f3-xSlRxuBw.jpg",import.meta.url).href,qR=""+new URL("LyraFinch_f4-zhjeLbt9.jpg",import.meta.url).href,KR=""+new URL("MiraSolis_f0-Cl22OZcZ.jpg",import.meta.url).href,YR=""+new URL("MiraSolis_f1-Bvreu48f.jpg",import.meta.url).href,JR=""+new URL("MiraSolis_f2-B7-2OQP_.jpg",import.meta.url).href,ZR=""+new URL("MiraSolis_f3-Djt7Tn2V.jpg",import.meta.url).href,QR=""+new URL("MiraSolis_f4-cGFZ-eGE.jpg",import.meta.url).href,tC=""+new URL("NimCortez_f0-Civ_vfyT.jpg",import.meta.url).href,eC=""+new URL("NimCortez_f1-DPQgDoGQ.jpg",import.meta.url).href,nC=""+new URL("NimCortez_f2-Bz719dDe.jpg",import.meta.url).href,iC=""+new URL("NimCortez_f3-Bs3MZshY.jpg",import.meta.url).href,sC=""+new URL("NimCortez_f4-yufrdKyk.jpg",import.meta.url).href,aC=""+new URL("RynAshford_f0-Bq-lZZAq.jpg",import.meta.url).href,rC=""+new URL("RynAshford_f1-CrDa0b8M.jpg",import.meta.url).href,oC=""+new URL("RynAshford_f2-Db7tWqcL.jpg",import.meta.url).href,lC=""+new URL("RynAshford_f3-CrBkDgpF.jpg",import.meta.url).href,cC=""+new URL("RynAshford_f4-DRb6Z3Q_.jpg",import.meta.url).href,hC=""+new URL("SableQuinn_f0-C-REQwGE.jpg",import.meta.url).href,uC=""+new URL("SableQuinn_f1-77Qvq60F.jpg",import.meta.url).href,dC=""+new URL("SableQuinn_f2-BcD0Apmj.jpg",import.meta.url).href,fC=""+new URL("SableQuinn_f3-B3IpWV-H.jpg",import.meta.url).href,pC=""+new URL("SableQuinn_f4-ANSBmor5.jpg",import.meta.url).href,mC=""+new URL("TorenBlake_f0-Diq3pyTk.jpg",import.meta.url).href,gC=""+new URL("TorenBlake_f1-Cir14sc1.jpg",import.meta.url).href,_C=""+new URL("TorenBlake_f2-D5Eg7W2p.jpg",import.meta.url).href,vC=""+new URL("TorenBlake_f3-DDkLnb3L.jpg",import.meta.url).href,yC=""+new URL("TorenBlake_f4-3RwlgLan.jpg",import.meta.url).href,bC=""+new URL("VeshMarlowe_f0-B79k5ERk.jpg",import.meta.url).href,xC=""+new URL("VeshMarlowe_f1-CqL579Am.jpg",import.meta.url).href,MC=""+new URL("VeshMarlowe_f2-bMtK-3Mh.jpg",import.meta.url).href,SC=""+new URL("VeshMarlowe_f3-_DOilxKi.jpg",import.meta.url).href,wC=""+new URL("VeshMarlowe_f4-2STgIwJ3.jpg",import.meta.url).href,EC=Object.assign({"../../assets/binds/tickle/BriarKnox.tickle.json":EE,"../../assets/binds/tickle/CassWynn.tickle.json":$E,"../../assets/binds/tickle/ElaraCase.tickle.json":a2,"../../assets/binds/tickle/EmberLang.tickle.json":M2,"../../assets/binds/tickle/JunoHale.tickle.json":O2,"../../assets/binds/tickle/KoraVale.tickle.json":nT,"../../assets/binds/tickle/LyraFinch.tickle.json":yT,"../../assets/binds/tickle/MiraSolis.tickle.json":FT,"../../assets/binds/tickle/NimCortez.tickle.json":QT,"../../assets/binds/tickle/RynAshford.tickle.json":gA,"../../assets/binds/tickle/SableQuinn.tickle.json":DA,"../../assets/binds/tickle/TorenBlake.tickle.json":YA,"../../assets/binds/tickle/VeshMarlowe.tickle.json":fR}),xo={};var Vc;for(const[s,t]of Object.entries(EC)){const e=(Vc=s.split("/").pop())==null?void 0:Vc.replace(/\.tickle\.json$/i,"");!e||!t||(xo[e]=t,t.slug&&(xo[t.slug]=t))}const Ec={clip:"tickle",slug:"default",display:"Default",rate:28,twistRate:37,spineBase:.28,spineAmp:.046,chestAmp:.088,shoulderAmp:.246,elbowAmp:.44,weaponWag:.49,billWag:.058,billRate:26};function Oh(s){return s?xo[s]??Ec:Ec}const TC=Object.assign({"../../assets/binds/tickle/frames/BriarKnox_f0.jpg":pR,"../../assets/binds/tickle/frames/BriarKnox_f1.jpg":mR,"../../assets/binds/tickle/frames/BriarKnox_f2.jpg":gR,"../../assets/binds/tickle/frames/BriarKnox_f3.jpg":_R,"../../assets/binds/tickle/frames/BriarKnox_f4.jpg":vR,"../../assets/binds/tickle/frames/CassWynn_f0.jpg":yR,"../../assets/binds/tickle/frames/CassWynn_f1.jpg":bR,"../../assets/binds/tickle/frames/CassWynn_f2.jpg":xR,"../../assets/binds/tickle/frames/CassWynn_f3.jpg":MR,"../../assets/binds/tickle/frames/CassWynn_f4.jpg":SR,"../../assets/binds/tickle/frames/ElaraCase_f0.jpg":wR,"../../assets/binds/tickle/frames/ElaraCase_f1.jpg":ER,"../../assets/binds/tickle/frames/ElaraCase_f2.jpg":TR,"../../assets/binds/tickle/frames/ElaraCase_f3.jpg":AR,"../../assets/binds/tickle/frames/ElaraCase_f4.jpg":RR,"../../assets/binds/tickle/frames/EmberLang_f0.jpg":CR,"../../assets/binds/tickle/frames/EmberLang_f1.jpg":LR,"../../assets/binds/tickle/frames/EmberLang_f2.jpg":PR,"../../assets/binds/tickle/frames/EmberLang_f3.jpg":UR,"../../assets/binds/tickle/frames/EmberLang_f4.jpg":DR,"../../assets/binds/tickle/frames/JunoHale_f0.jpg":IR,"../../assets/binds/tickle/frames/JunoHale_f1.jpg":kR,"../../assets/binds/tickle/frames/JunoHale_f2.jpg":FR,"../../assets/binds/tickle/frames/JunoHale_f3.jpg":NR,"../../assets/binds/tickle/frames/JunoHale_f4.jpg":BR,"../../assets/binds/tickle/frames/KoraVale_f0.jpg":OR,"../../assets/binds/tickle/frames/KoraVale_f1.jpg":zR,"../../assets/binds/tickle/frames/KoraVale_f2.jpg":HR,"../../assets/binds/tickle/frames/KoraVale_f3.jpg":$R,"../../assets/binds/tickle/frames/KoraVale_f4.jpg":VR,"../../assets/binds/tickle/frames/LyraFinch_f0.jpg":jR,"../../assets/binds/tickle/frames/LyraFinch_f1.jpg":GR,"../../assets/binds/tickle/frames/LyraFinch_f2.jpg":WR,"../../assets/binds/tickle/frames/LyraFinch_f3.jpg":XR,"../../assets/binds/tickle/frames/LyraFinch_f4.jpg":qR,"../../assets/binds/tickle/frames/MiraSolis_f0.jpg":KR,"../../assets/binds/tickle/frames/MiraSolis_f1.jpg":YR,"../../assets/binds/tickle/frames/MiraSolis_f2.jpg":JR,"../../assets/binds/tickle/frames/MiraSolis_f3.jpg":ZR,"../../assets/binds/tickle/frames/MiraSolis_f4.jpg":QR,"../../assets/binds/tickle/frames/NimCortez_f0.jpg":tC,"../../assets/binds/tickle/frames/NimCortez_f1.jpg":eC,"../../assets/binds/tickle/frames/NimCortez_f2.jpg":nC,"../../assets/binds/tickle/frames/NimCortez_f3.jpg":iC,"../../assets/binds/tickle/frames/NimCortez_f4.jpg":sC,"../../assets/binds/tickle/frames/RynAshford_f0.jpg":aC,"../../assets/binds/tickle/frames/RynAshford_f1.jpg":rC,"../../assets/binds/tickle/frames/RynAshford_f2.jpg":oC,"../../assets/binds/tickle/frames/RynAshford_f3.jpg":lC,"../../assets/binds/tickle/frames/RynAshford_f4.jpg":cC,"../../assets/binds/tickle/frames/SableQuinn_f0.jpg":hC,"../../assets/binds/tickle/frames/SableQuinn_f1.jpg":uC,"../../assets/binds/tickle/frames/SableQuinn_f2.jpg":dC,"../../assets/binds/tickle/frames/SableQuinn_f3.jpg":fC,"../../assets/binds/tickle/frames/SableQuinn_f4.jpg":pC,"../../assets/binds/tickle/frames/TorenBlake_f0.jpg":mC,"../../assets/binds/tickle/frames/TorenBlake_f1.jpg":gC,"../../assets/binds/tickle/frames/TorenBlake_f2.jpg":_C,"../../assets/binds/tickle/frames/TorenBlake_f3.jpg":vC,"../../assets/binds/tickle/frames/TorenBlake_f4.jpg":yC,"../../assets/binds/tickle/frames/VeshMarlowe_f0.jpg":bC,"../../assets/binds/tickle/frames/VeshMarlowe_f1.jpg":xC,"../../assets/binds/tickle/frames/VeshMarlowe_f2.jpg":MC,"../../assets/binds/tickle/frames/VeshMarlowe_f3.jpg":SC,"../../assets/binds/tickle/frames/VeshMarlowe_f4.jpg":wC}),zh={};for(const[s,t]of Object.entries(TC)){const e=s.split("/").pop();e&&(zh[e]=t)}function AC(s){const t=s.frames;if(!(t!=null&&t.length))return[];const e=[];for(const n of t){const i=n.split("/").pop();if(!i)continue;const a=zh[i];a&&e.push(a)}return e}const RC="idle",CC="BriarKnox",LC="Briar Knox",PC=!1,UC=!1,DC="a_pose",IC=2.13,kC=.031,FC=.014,NC=.021,BC=8,OC="horizontal",zC=7,HC=.0239,$C=.0232,VC={clip:RC,slug:CC,display:LC,playerOnly:PC,metalException:UC,pose:DC,breatheRate:IC,breatheAmp:kC,sway:FC,scalePulse:NC,frames:BC,sheetLayout:OC,fps:zC,weightShift:HC,headNod:$C},jC="idle",GC="CassWynn",WC="Cass Wynn",XC=!1,qC=!1,KC="a_pose",YC=2,JC=.023,ZC=.024,QC=.021,tL=8,eL="horizontal",nL=7,iL=.0409,sL=.0203,aL={clip:jC,slug:GC,display:WC,playerOnly:XC,metalException:qC,pose:KC,breatheRate:YC,breatheAmp:JC,sway:ZC,scalePulse:QC,frames:tL,sheetLayout:eL,fps:nL,weightShift:iL,headNod:sL},rL="idle",oL="ElaraCase",lL="Elara Case",cL=!0,hL=!0,uL="a_pose",dL=2.07,fL=.021,pL=.015,mL=.016,gL=8,_L="horizontal",vL=7,yL=.0255,bL=.0196,xL={clip:rL,slug:oL,display:lL,playerOnly:cL,metalException:hL,pose:uL,breatheRate:dL,breatheAmp:fL,sway:pL,scalePulse:mL,frames:gL,sheetLayout:_L,fps:vL,weightShift:yL,headNod:bL},ML="idle",SL="EmberLang",wL="Ember Lang",EL=!1,TL=!1,AL="a_pose",RL=2.35,CL=.029,LL=.023,PL=.015,UL=8,DL="horizontal",IL=8,kL=.0393,FL=.0225,NL={clip:ML,slug:SL,display:wL,playerOnly:EL,metalException:TL,pose:AL,breatheRate:RL,breatheAmp:CL,sway:LL,scalePulse:PL,frames:UL,sheetLayout:DL,fps:IL,weightShift:kL,headNod:FL},BL="idle",OL="JunoHale",zL="Juno Hale",HL=!1,$L=!1,VL="a_pose",jL=2.1,GL=.025,WL=.013,XL=.021,qL=8,KL="horizontal",YL=7,JL=.0222,ZL=.021,QL={clip:BL,slug:OL,display:zL,playerOnly:HL,metalException:$L,pose:VL,breatheRate:jL,breatheAmp:GL,sway:WL,scalePulse:XL,frames:qL,sheetLayout:KL,fps:YL,weightShift:JL,headNod:ZL},tP="idle",eP="KoraVale",nP="Kora Vale",iP=!1,sP=!1,aP="a_pose",rP=2.25,oP=.033,lP=.013,cP=.022,hP=8,uP="horizontal",dP=8,fP=.0222,pP=.024,mP={clip:tP,slug:eP,display:nP,playerOnly:iP,metalException:sP,pose:aP,breatheRate:rP,breatheAmp:oP,sway:lP,scalePulse:cP,frames:hP,sheetLayout:uP,fps:dP,weightShift:fP,headNod:pP},gP="idle",_P="LyraFinch",vP="Lyra Finch",yP=!1,bP=!1,xP="a_pose",MP=2.12,SP=.028,wP=.022,EP=.013,TP=8,AP="horizontal",RP=7,CP=.0375,LP=.0221,PP={clip:gP,slug:_P,display:vP,playerOnly:yP,metalException:bP,pose:xP,breatheRate:MP,breatheAmp:SP,sway:wP,scalePulse:EP,frames:TP,sheetLayout:AP,fps:RP,weightShift:CP,headNod:LP},UP="idle",DP="MiraSolis",IP="Mira Solis",kP=!1,FP=!1,NP="a_pose",BP=2.24,OP=.033,zP=.023,HP=.019,$P=8,VP="horizontal",jP=8,GP=.0393,WP=.024,XP={clip:UP,slug:DP,display:IP,playerOnly:kP,metalException:FP,pose:NP,breatheRate:BP,breatheAmp:OP,sway:zP,scalePulse:HP,frames:$P,sheetLayout:VP,fps:jP,weightShift:GP,headNod:WP},qP="idle",KP="NimCortez",YP="Nim Cortez",JP=!1,ZP=!1,QP="a_pose",t3=2.1,e3=.027,n3=.018,i3=.019,s3=8,a3="horizontal",r3=7,o3=.0307,l3=.0218,c3={clip:qP,slug:KP,display:YP,playerOnly:JP,metalException:ZP,pose:QP,breatheRate:t3,breatheAmp:e3,sway:n3,scalePulse:i3,frames:s3,sheetLayout:a3,fps:r3,weightShift:o3,headNod:l3},h3="idle",u3="RynAshford",d3="Ryn Ashford",f3=!1,p3=!1,m3="a_pose",g3=2.39,_3=.025,v3=.016,y3=.016,b3=8,x3="horizontal",M3=8,S3=.0273,w3=.021,E3={clip:h3,slug:u3,display:d3,playerOnly:f3,metalException:p3,pose:m3,breatheRate:g3,breatheAmp:_3,sway:v3,scalePulse:y3,frames:b3,sheetLayout:x3,fps:M3,weightShift:S3,headNod:w3},T3="idle",A3="SableQuinn",R3="Sable Quinn",C3=!1,L3=!1,P3="a_pose",U3=2.33,D3=.026,I3=.013,k3=.013,F3=8,N3="horizontal",B3=8,O3=.0222,z3=.0214,H3={clip:T3,slug:A3,display:R3,playerOnly:C3,metalException:L3,pose:P3,breatheRate:U3,breatheAmp:D3,sway:I3,scalePulse:k3,frames:F3,sheetLayout:N3,fps:B3,weightShift:O3,headNod:z3},$3="idle",V3="TorenBlake",j3="Toren Blake",G3=!1,W3=!1,X3="a_pose",q3=2.15,K3=.022,Y3=.019,J3=.02,Z3=8,Q3="horizontal",tU=8,eU=.0324,nU=.02,iU={clip:$3,slug:V3,display:j3,playerOnly:G3,metalException:W3,pose:X3,breatheRate:q3,breatheAmp:K3,sway:Y3,scalePulse:J3,frames:Z3,sheetLayout:Q3,fps:tU,weightShift:eU,headNod:nU},sU="idle",aU="VeshMarlowe",rU="Vesh Marlowe",oU=!1,lU=!1,cU="a_pose",hU=2.22,uU=.026,dU=.021,fU=.012,pU=8,mU="horizontal",gU=8,_U=.0359,vU=.0214,yU={clip:sU,slug:aU,display:rU,playerOnly:oU,metalException:lU,pose:cU,breatheRate:hU,breatheAmp:uU,sway:dU,scalePulse:fU,frames:pU,sheetLayout:mU,fps:gU,weightShift:_U,headNod:vU},bU=""+new URL("BriarKnox-CExVySsU.png",import.meta.url).href,xU=""+new URL("CassWynn-BTR_sZqY.png",import.meta.url).href,MU=""+new URL("ElaraCase-Do6BKnFR.png",import.meta.url).href,SU=""+new URL("EmberLang-B6qX6zJw.png",import.meta.url).href,wU=""+new URL("JunoHale-BZ1YVOyV.png",import.meta.url).href,EU=""+new URL("KoraVale-BUXNTCUS.png",import.meta.url).href,TU=""+new URL("LyraFinch-BxKI4YmB.png",import.meta.url).href,AU=""+new URL("MiraSolis-kPatOKP7.png",import.meta.url).href,RU=""+new URL("NimCortez-pKQsTy09.png",import.meta.url).href,CU=""+new URL("RynAshford-Dko70XJT.png",import.meta.url).href,LU=""+new URL("SableQuinn-DEqqhtXH.png",import.meta.url).href,PU=""+new URL("TorenBlake-UBc32KXp.png",import.meta.url).href,UU=""+new URL("VeshMarlowe-BddfWa_1.png",import.meta.url).href,DU=Object.assign({"../../assets/binds/idle/BriarKnox.idle.json":VC,"../../assets/binds/idle/CassWynn.idle.json":aL,"../../assets/binds/idle/ElaraCase.idle.json":xL,"../../assets/binds/idle/EmberLang.idle.json":NL,"../../assets/binds/idle/JunoHale.idle.json":QL,"../../assets/binds/idle/KoraVale.idle.json":mP,"../../assets/binds/idle/LyraFinch.idle.json":PP,"../../assets/binds/idle/MiraSolis.idle.json":XP,"../../assets/binds/idle/NimCortez.idle.json":c3,"../../assets/binds/idle/RynAshford.idle.json":E3,"../../assets/binds/idle/SableQuinn.idle.json":H3,"../../assets/binds/idle/TorenBlake.idle.json":iU,"../../assets/binds/idle/VeshMarlowe.idle.json":yU}),IU=Object.assign({"../../assets/binds/idle/sheets/BriarKnox.png":bU,"../../assets/binds/idle/sheets/CassWynn.png":xU,"../../assets/binds/idle/sheets/ElaraCase.png":MU,"../../assets/binds/idle/sheets/EmberLang.png":SU,"../../assets/binds/idle/sheets/JunoHale.png":wU,"../../assets/binds/idle/sheets/KoraVale.png":EU,"../../assets/binds/idle/sheets/LyraFinch.png":TU,"../../assets/binds/idle/sheets/MiraSolis.png":AU,"../../assets/binds/idle/sheets/NimCortez.png":RU,"../../assets/binds/idle/sheets/RynAshford.png":CU,"../../assets/binds/idle/sheets/SableQuinn.png":LU,"../../assets/binds/idle/sheets/TorenBlake.png":PU,"../../assets/binds/idle/sheets/VeshMarlowe.png":UU}),kU={breatheRate:[.5,4],breatheAmp:[0,.06],sway:[0,.04],scalePulse:[0,.04],weightShift:[0,.05],headNod:[0,.04],fps:[4,12]},FU=(s,t,e)=>Math.min(e,Math.max(t,s));function NU(s){const t={...s};for(const[e,[n,i]]of Object.entries(kU)){const a=e,r=t[a];if(typeof r!="number"||!Number.isFinite(r))continue;const o=FU(r,n,i);t[a]=o}return t}const Mo={};var jc;for(const[s,t]of Object.entries(DU)){const e=(jc=s.split("/").pop())==null?void 0:jc.replace(/\.idle\.json$/i,"");if(!e||!t)continue;const n=NU(t);Mo[e]=n,n.slug&&(Mo[n.slug]=n)}const Hh={};var Gc;for(const[s,t]of Object.entries(IU)){const e=(Gc=s.split("/").pop())==null?void 0:Gc.replace(/\.png$/i,"");e&&(Hh[e]=t)}const Tc={clip:"idle",slug:"default",display:"Default",pose:"a_pose",breatheRate:2.05,breatheAmp:.029,sway:.024,scalePulse:.023,weightShift:.026,headNod:.018,frames:8,sheetLayout:"horizontal",fps:7};function gr(s){return s?Mo[s]??Tc:Tc}function BU(s){if(s)return Hh[s]}const bs={id:0,name:"Bare hand",price:0,ticklePct:0,blurb:"Tier 0. No technique bonus."},xs={id:0,name:"Base attire",price:0,stamPct:0,escPct:0,blurb:"Bikini / shorts. Tier 0."},Ms=[{id:1,name:"Palm Mitts",price:8,ticklePct:.05,blurb:"Padded palms. +5% tickle."},{id:2,name:"Rib Brush",price:14,ticklePct:.1,blurb:"Soft rake along the ribs. +10% tickle."},{id:3,name:"Nerve Wand",price:22,ticklePct:.15,blurb:"Narrow contact point. +15% tickle."},{id:4,name:"Flank Fans",price:32,ticklePct:.2,blurb:"Twin paddles. +20% tickle."},{id:5,name:"Spine Rake",price:44,ticklePct:.25,blurb:"Long reach on the back line. +25% tickle."},{id:6,name:"Chorus Forks",price:58,ticklePct:.3,blurb:"Amateur cap piece. +30% tickle."}],Ss=[{id:1,name:"Weave Shorts",price:7,stamPct:.04,escPct:0,blurb:"+4% stamina."},{id:2,name:"Mesh Wrap",price:12,stamPct:.06,escPct:.02,blurb:"+6% stam / +2% escape."},{id:3,name:"Rib Guard",price:18,stamPct:.08,escPct:.04,blurb:"+8% stam / +4% escape."},{id:4,name:"Plasm Vest",price:26,stamPct:.1,escPct:.06,blurb:"+10% stam / +6% escape."},{id:5,name:"Night Shell",price:36,stamPct:.12,escPct:.08,blurb:"+12% stam / +8% escape."},{id:6,name:"Lattice Harness",price:48,stamPct:.14,escPct:.1,blurb:"+14% stam / +10% escape."},{id:7,name:"Vault Plate",price:62,stamPct:.16,escPct:.12,blurb:"+16% stam / +12% escape."},{id:8,name:"Apex Weave",price:78,stamPct:.18,escPct:.12,blurb:"+18% stam / +12% escape. Amateur cap."}],wn=10,So=25;function ws(s){return s===0?bs:Ms.find(t=>t.id===s)??bs}function Es(s){return s===0?xs:Ss.find(t=>t.id===s)??xs}function OU(s,t){return`${ws(s).name} / ${Es(t).name}`}let zU=0;const ni=1.35,Bn=2.1,On=1.12;class hs{constructor(t){R(this,"id",zU++);R(this,"team");R(this,"isPlayer");R(this,"name");R(this,"look");R(this,"role");R(this,"group",new Qt);R(this,"body");R(this,"humanoid");R(this,"yaw",0);R(this,"pitch",0);R(this,"pos",new A);R(this,"vel",new A);R(this,"occupancy","free");R(this,"targetId",-1);R(this,"joinOn",-1);R(this,"vanishLeft",0);R(this,"stamina",100);R(this,"maxStamina",100);R(this,"escape",0);R(this,"tapCd",0);R(this,"regenWait",0);R(this,"flashT",0);R(this,"blocks");R(this,"weaponId",0);R(this,"armorId",0);R(this,"weaponPct",0);R(this,"armorStamPct",0);R(this,"armorEscPct",0);R(this,"active",!0);R(this,"lastKnown",new A);R(this,"lastSeen",0);R(this,"pileTimer",0);R(this,"wantTickle",!1);R(this,"wantEscape",!1);R(this,"spawnIgnore",0);R(this,"reappearIgnore",0);R(this,"reappearFlash",0);R(this,"contactEdge",new Map);R(this,"hidden",!1);R(this,"slug");R(this,"bait",!1);R(this,"scriptHold",!1);R(this,"portraitUrl");R(this,"keyedPortrait");R(this,"portraitSprite");R(this,"idleSheetTex");R(this,"idleStillTex");R(this,"idleFrame",0);R(this,"idleFrameAcc",0);R(this,"idleFadeSprite");R(this,"idleFadeTex");R(this,"idlePhase",0);R(this,"idleSheetEnter",1);R(this,"idleEnterRate",4);R(this,"headMat");R(this,"skinMat");R(this,"rim");R(this,"prevPos",new A);R(this,"animT",Math.random()*8);R(this,"speed",0);R(this,"laughStageApplied",null);R(this,"laughStageLoadToken",0);R(this,"laughFrameApplied",-1);R(this,"laughFrameLoadToken",0);R(this,"laughFrameKeyed",[]);R(this,"laughFrameTex",new Map);R(this,"laughFrameWant","");R(this,"laughFramePortrait");R(this,"laughFps",0);R(this,"tickleFrameApplied",-1);R(this,"tickleFrameLoadToken",0);R(this,"tickleFrameKeyed",[]);R(this,"tickleFramePortrait");R(this,"tickleIntensity",0);R(this,"tickleIntensitySmooth",0);R(this,"tickleWinLo",0);R(this,"tickleWinHi",1);R(this,"tickleBand",0);R(this,"runFrameApplied",-1);R(this,"runFrameLoadToken",0);R(this,"runFrameKeyed",[]);R(this,"runFramePortrait");this.team=t.team,this.isPlayer=t.isPlayer,this.look=t.look,this.name=t.name,this.role=t.role,this.slug=t.slug,this.portraitUrl=Wn(t.slug),this.blocks=t.blocks;const e=Ra[t.look]??Ra[0],n=t.team===0?6211800:13935194;if(this.humanoid=new wx(e.skin,e.cloth,e.hair,n),this.body=this.humanoid.root,this.skinMat=this.humanoid.skinMat,this.headMat=this.humanoid.skinMat,this.group.add(this.body),this.rim=new Xo(n,2.2,3.2,2),this.rim.position.set(0,1.3,0),this.group.add(this.rim),!this.isPlayer){const i=HU(this.name,n);i.position.y=2.4,this.group.add(i),this.portraitUrl&&(this.body.visible=!1)}this.portraitUrl&&ln(this.portraitUrl).then(i=>{this.keyedPortrait=i.keyedUrl,this.humanoid.applyLook(i),this.ensureStillBillboard(i.keyedUrl)}),this.applyGear(t.weapon??0,t.armor??0),this.stamina=this.maxStamina}get laughFrameIndex(){return this.laughFrameApplied}tickleDebug(){return{intensity:+this.tickleIntensitySmooth.toFixed(3),band:this.tickleBand,win:[this.tickleWinLo,this.tickleWinHi],frame:this.tickleFrameApplied}}applyGear(t,e){const n=ws(t),i=Es(e);this.weaponId=n.id,this.armorId=i.id,this.weaponPct=n.ticklePct,this.armorStamPct=i.stamPct,this.armorEscPct=i.escPct,this.recalc(),this.humanoid.setWeapon(this.weaponId),this.humanoid.setArmor(this.armorId)}applyLookSlug(t,e){this.slug=t,this.look=e;const n=Wn(t);this.portraitUrl=n,this.idleSheetTex=void 0,this.idleFadeTex=void 0,this.idleFrame=0,this.idleFrameAcc=0,this.idleSheetEnter=0,this.idleEnterRate=3,this.idleFadeSprite&&(this.idleFadeSprite.visible=!1),n&&(this.isPlayer||(this.body.visible=!1),ln(n).then(i=>{this.slug===t&&(this.keyedPortrait=i.keyedUrl,this.humanoid.applyLook(i),this.ensureStillBillboard(i.keyedUrl))}))}ensureStillBillboard(t){if(this.isPlayer)return;const e=new ya().load(t);if(e.colorSpace=Ee,this.idleStillTex=e,this.portraitSprite){const n=this.portraitSprite.material;n.map=e,n.needsUpdate=!0,this.portraitSprite.scale.set(ni,Bn,1),this.portraitSprite.position.set(0,On,0)}else{const n=new Ta({map:e,transparent:!0,depthTest:!0,alphaTest:.15}),i=new Aa(n);i.scale.set(ni,Bn,1),i.position.set(0,On,0),i.renderOrder=1,this.group.add(i),this.portraitSprite=i}this.body.visible=!1,this.loadIdleSheet(this.slug)}loadIdleSheet(t){if(this.isPlayer)return;const e=BU(t);if(!e)return;const n=gr(t),i=Math.max(1,n.frames??8);new ya().load(e,a=>{this.slug&&t&&this.slug!==t||(a.colorSpace=Ee,a.wrapS=xn,a.wrapT=xn,a.repeat.set(1/i,1),a.offset.set(0,0),a.needsUpdate=!0,this.idleSheetTex=a,this.idleFrame=0,this.idleFrameAcc=0,this.idleSheetEnter=0,this.idleEnterRate=3,this.idleFadeTex=void 0,this.idleFadeSprite&&(this.group.remove(this.idleFadeSprite),this.idleFadeSprite=void 0))})}softenIdleSheetEnter(t=.25){this.idleSheetEnter=Math.min(this.idleSheetEnter,t),this.idleEnterRate=1.5}applyIdleSheetFrame(t,e){const n=this.portraitSprite,i=this.idleSheetTex;if(!n)return;const a=n.material;if(!e||!i){this.idleFadeSprite&&(this.idleFadeSprite.visible=!1),this.idleStillTex&&a.map!==this.idleStillTex&&(a.map=this.idleStillTex,a.needsUpdate=!0),a.opacity=1;return}const r=gr(this.slug),o=Math.max(1,r.frames??8),l=Math.min(12,Math.max(4,r.fps??8));this.idlePhase+=t*l;const c=this.idlePhase,h=Math.floor(c)%o,u=(h+1)%o,d=c-Math.floor(c),p=d*d*d*(d*(d*6-15)+10);this.idleFrame=h,this.idleFrameAcc=d,i.repeat.set(1/o,1),i.offset.set(h/o,0),this.idleSheetEnter=Math.min(1,this.idleSheetEnter+t*this.idleEnterRate);const g=this.idleSheetEnter*this.idleSheetEnter*(3-2*this.idleSheetEnter);a.transparent=!0,a.depthWrite=!1,g<.999&&this.idleStillTex?(a.map=this.idleStillTex,a.opacity=1,a.needsUpdate=!0):(a.map=i,a.opacity=1-p,a.needsUpdate=!0);let _=this.idleFadeSprite;if(!_){const M=i.clone();M.needsUpdate=!0,M.colorSpace=i.colorSpace,M.wrapS=i.wrapS,M.wrapT=i.wrapT,this.idleFadeTex=M;const w=new Ta({map:M,transparent:!0,depthTest:!0,depthWrite:!1,alphaTest:.15,opacity:0});_=new Aa(w),_.scale.copy(n.scale),_.position.copy(n.position),_.renderOrder=(n.renderOrder||1)+1,this.group.add(_),this.idleFadeSprite=_}const m=_.material,f=this.idleFadeTex??m.map;g<.999?(f.repeat.set(1/o,1),f.offset.set(h/o,0),m.map=f,m.opacity=g,_.visible=!0):(f.repeat.set(1/o,1),f.offset.set(u/o,0),m.opacity=p,_.visible=p>.02,a.map!==i&&(a.map=i,a.needsUpdate=!0),a.opacity=1-p),_.scale.copy(n.scale),_.position.copy(n.position),m.rotation=a.rotation}recalc(){const t=$n.stamina+2*this.blocks.stamina;$n.tickle+1.5*this.blocks.tickle,$n.struggle+3.5*this.blocks.struggle,this.maxStamina=t*m_*(1+this.armorStamPct),this.stamina=Math.min(this.stamina,this.maxStamina)}ticklePower(){return($n.tickle+1.5*this.blocks.tickle)*g_*(1+this.weaponPct)}escapePower(){return($n.struggle+3.5*this.blocks.struggle)*__*(1+this.armorEscPct)}forward(){return new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}showLaughFrameTex(t){const e=this.portraitSprite;if(this.isPlayer)return;if(!e){this.ensureStillBillboard(t);return}let n=this.laughFrameTex.get(t);if(!n){const a={tex:null,ready:!1};a.tex=new ya().load(t,()=>{a.ready=!0,this.laughFrameWant===t&&this.showLaughFrameTex(t)}),a.tex.colorSpace=Ee,this.laughFrameTex.set(t,a),n=a}if(this.laughFrameWant=t,!n.ready||!n.tex)return;const i=e.material;this.idleStillTex=n.tex,i.map!==n.tex&&(i.map=n.tex,i.needsUpdate=!0),this.body.visible=!1}syncLaughFrameBillboard(t,e,n,i){if(!(t==="squirm"||this.occupancy==="ticklee"||this.occupancy==="nudge"&&this.joinOn<0)||!e)return this.laughFrameWant="",this.laughFrameApplied!==-1&&(!this.isPlayer&&this.keyedPortrait&&this.ensureStillBillboard(this.keyedPortrait),this.laughFrameApplied=-1,this.laughFramePortrait=void 0),!1;const r=aE(e);if(r.length<2)return!1;const o=Math.max(0,Math.min(100,i??100)),[l,c]=oE(r.length,o/100),h=Math.max(1,c-l+1),u=lE(n==null?void 0:n.billRate,o/100);this.laughFps=u;const d=l+Math.floor(this.animT*u)%h;if(d===this.laughFrameApplied&&this.laughFramePortrait)return!0;const p=d,g=++this.laughFrameLoadToken,_=r[p],m=this.laughFrameKeyed[p];return m?(this.isPlayer||this.showLaughFrameTex(m),this.laughFrameApplied=p,this.laughFramePortrait=m,!0):(ln(_).then(f=>{g===this.laughFrameLoadToken&&(this.laughFrameKeyed[p]=f.keyedUrl,this.isPlayer||this.showLaughFrameTex(f.keyedUrl),this.laughFrameApplied=p,this.laughFramePortrait=f.keyedUrl)}).catch(()=>{g===this.laughFrameLoadToken&&(this.laughFrameApplied=p,this.laughFramePortrait=_)}),!0)}syncLaughStageBillboard(t){if(this.isPlayer||!this.portraitSprite)return;const e=this.slug?Ma(this.slug):Sa(this.look);if(!(t==="squirm"||this.occupancy==="ticklee")){this.laughStageApplied!==null&&this.keyedPortrait&&(this.ensureStillBillboard(this.keyedPortrait),this.laughStageApplied=null);return}const i=this.stamina/Math.max(1,this.maxStamina)*100,a=Bh(e,i);if(a===this.laughStageApplied)return;const r=iE(e.stages[a]);if(!r)return;const o=++this.laughStageLoadToken,l=a;ln(r).then(c=>{o===this.laughStageLoadToken&&(this.ensureStillBillboard(c.keyedUrl),this.laughStageApplied=l)}).catch(()=>{})}syncTickleFrameBillboard(t,e,n=.016){if(!(t==="tickle"||this.occupancy==="tickler"||this.occupancy==="nudge"&&this.joinOn>=0)||!e){this.tickleFrameApplied!==-1&&(!this.isPlayer&&this.keyedPortrait&&this.ensureStillBillboard(this.keyedPortrait),this.tickleFrameApplied=-1,this.tickleFramePortrait=void 0),this.tickleIntensitySmooth=0,this.tickleWinLo=0,this.tickleWinHi=1,this.tickleBand=0;return}const a=AC(e);if(a.length<2)return;let r=this.tickleIntensity;r<=0&&(r=Math.min(100,this.weaponPct*200+this.blocks.tickle*8+Math.min(25,this.pileTimer*5)));const o=Math.max(0,Math.min(100,r))/100,c=o>this.tickleIntensitySmooth?a_:r_,h=1-Math.exp(-c*Math.max(.001,n));this.tickleIntensitySmooth+=(o-this.tickleIntensitySmooth)*h;const u=this.tickleIntensitySmooth,d=a.length,p=O=>{const N=Math.min(Math.max(0,Math.min(3,O)),d-2);return[Math.max(0,N),Math.min(N+1,d-1)]},_=(O=>{let N=0;for(;N<cs.length&&O>=cs[N];)N++;return N})(u),m=this.tickleBand;let f=_;if(_>m)for(f=m;f<_&&u>=cs[f]+vc;)f++;else if(_<m)for(f=m;f>_&&u<=cs[f-1]-vc;)f--;this.tickleBand=f;const[M,w]=p(f);this.tickleWinLo=M,this.tickleWinHi=w;const y=Math.max(1,w-M+1),D=Math.max(8,Math.round((e.billRate||26)*(.36+u*.62))),E=Math.floor(this.animT*D);let C;if(f>=cs.length&&y>=2){const O=[M,w,w];C=O[E%O.length]}else C=M+E%y;if(C===this.tickleFrameApplied&&this.tickleFramePortrait)return;const L=C,S=++this.tickleFrameLoadToken,b=a[L],P=this.tickleFrameKeyed[L];if(P){this.isPlayer||this.ensureStillBillboard(P),this.tickleFrameApplied=L,this.tickleFramePortrait=P;return}ln(b).then(O=>{S===this.tickleFrameLoadToken&&(this.tickleFrameKeyed[L]=O.keyedUrl,this.isPlayer||this.ensureStillBillboard(O.keyedUrl),this.tickleFrameApplied=L,this.tickleFramePortrait=O.keyedUrl)}).catch(()=>{S===this.tickleFrameLoadToken&&(this.tickleFrameApplied=L,this.tickleFramePortrait=b)})}syncRunFrameBillboard(t,e){if(!(t==="walk"||t==="run")){this.runFrameApplied!==-1&&(!this.isPlayer&&this.keyedPortrait&&this.ensureStillBillboard(this.keyedPortrait),this.runFrameApplied=-1,this.runFramePortrait=void 0);return}const i=Sx(e);if(i.length<2)return;const a=t==="run"?e.run:e.walk,r=Math.max(1,a.billRate||(t==="run"?12:9)),o=Math.floor(this.animT*r)%i.length;if(o===this.runFrameApplied&&this.runFramePortrait)return;const l=o,c=++this.runFrameLoadToken,h=i[l],u=this.runFrameKeyed[l];if(u){this.isPlayer||this.ensureStillBillboard(u),this.runFrameApplied=l,this.runFramePortrait=u;return}ln(h).then(d=>{c===this.runFrameLoadToken&&(this.runFrameKeyed[l]=d.keyedUrl,this.isPlayer||this.ensureStillBillboard(d.keyedUrl),this.runFrameApplied=l,this.runFramePortrait=d.keyedUrl)}).catch(()=>{c===this.runFrameLoadToken&&(this.runFrameApplied=l,this.runFramePortrait=h)})}tickAnim(t){const e=this.pos.distanceTo(this.prevPos);this.speed=t>1e-4?e/t:0,this.prevPos.copy(this.pos),this.animT+=t;const n=this.humanoid.clipFor(this.occupancy,this.speed,this.joinOn),i=n==="squirm"?rE(this.slug?Ma(this.slug):Sa(this.look),this.stamina/Math.max(1,this.maxStamina)*100):void 0,a=bx(this.slug),r=n==="walk"||n==="run"?xx(a,n):void 0,o=n==="tickle"?Oh(this.slug):void 0;this.humanoid.pose(n,this.animT,o??i??r),this.tickBillboardAnim(t,n,a,i,o);const l=n==="squirm"||this.occupancy==="ticklee"?this.slug?Ma(this.slug):Sa(this.look):void 0,c=this.stamina/Math.max(1,this.maxStamina)*100;this.syncLaughFrameBillboard(n,l,i,c)||this.syncLaughStageBillboard(n),this.syncTickleFrameBillboard(n,o,t),this.syncRunFrameBillboard(n,a)}locomotionClip(){if(this.occupancy!=="free")return"busy";const t=this.humanoid.clipFor(this.occupancy,this.speed,this.joinOn);return t==="run"||t==="walk"||t==="idle"?t:"busy"}tickBillboardAnim(t,e,n,i,a){var g;const r=this.portraitSprite;if(!r)return;const o=r.material,l=this.animT;let c=ni,h=Bn,u=0,d=On,p=0;if(this.occupancy==="tickler"||this.occupancy==="nudge"&&this.joinOn>=0){const _=(a==null?void 0:a.billWag)??.05,m=(a==null?void 0:a.billRate)??26,f=Math.sin(l*m),M=Math.sin(l*m*1.58);c=ni*(1+f*_),h=Bn*(1+M*_*.8),u=M*_,d=On+Math.abs(f)*_*1.4,p=f*_*1.15}else if(this.occupancy==="ticklee"||this.occupancy==="nudge"&&this.joinOn<0){const _=(i==null?void 0:i.billShake)??.09,m=(i==null?void 0:i.billRate)??16,f=i==null?void 0:i.blend,M=(f==null?void 0:f.jaw)??.45,w=(f==null?void 0:f.cheek)??.3,y=(f==null?void 0:f.eye)??.4,D=Math.sin(l*m),E=Math.sin(l*m*.7),C=Math.sin(l*m*1.35),L=.55+.45*Math.abs(C),S=1+w*.06*L+D*_*.5,b=1+M*.08*L-y*.04*L-D*_*.25;c=ni*S,h=Bn*b,u=D*_*.6+E*w*.02,d=On+Math.abs(E)*_*.4+M*.02*L,p=E*_*.5+D*w*.03}else if(this.occupancy==="tapped")h=Bn*.72,d=On*.55,p=.35;else if(e==="run"||e==="walk"){const _=n?e==="run"?n.run:n.walk:void 0,m=(_==null?void 0:_.billRate)??(e==="run"?20.15:12.75),f=(_==null?void 0:_.billBob)??(e==="run"?.122:.058),M=Math.sin(l*m),w=Math.sin(l*m*2);c=ni*(1+M*f*1.14+Math.abs(w)*f*.44),h=Bn*(1+Math.abs(M)*f*.9-Math.abs(w)*f*.5),u=M*f*1.48,d=On+Math.abs(M)*f*2.8,p=M*f*1.58}else{this.applyIdleSheetFrame(t,!0);const _=gr(this.slug),m=_.breatheRate,f=Math.sin(l*m)*_.breatheAmp,M=Math.sin(l*m*.53+.7)*_.breatheAmp*.4,w=_.weightShift??_.sway,y=Math.sin(l*m*.62)*_.sway+Math.sin(l*m*.31+.4)*w*.6,D=(E,C)=>Math.min(C,Math.max(-C,E));c=ni*(1+D(Math.sin(l*m)*_.scalePulse*.5,.03)),h=Bn*(1+D(f+M,.05)),u=D(y,.08),d=On+D((f+M)*.5,.04),p=D(y*.5,.05),r.scale.set(c,h,1),r.position.set(u,d,0),o.rotation=p,(g=this.idleFadeSprite)!=null&&g.visible&&(this.idleFadeSprite.scale.copy(r.scale),this.idleFadeSprite.position.copy(r.position),this.idleFadeSprite.material.rotation=p);return}this.applyIdleSheetFrame(t,!1),r.scale.set(c,h,1),r.position.set(u,d,0),o.rotation=p}settle(){this.prevPos.copy(this.pos)}syncMesh(){this.group.position.copy(this.pos),this.body.rotation.y=this.yaw,this.body.rotation.x=0,this.body.rotation.z=0,!this.isPlayer&&this.portraitSprite&&(this.body.visible=!1)}eyeWorld(){return this.pos.clone().add(new A(0,Ph,0))}setHidden(t){this.hidden=t,this.group.visible=!t&&this.occupancy!=="vanished"&&this.occupancy!=="tapped",this.occupancy==="tapped"&&(this.group.visible=!0),this.occupancy==="vanished"&&(this.group.visible=!1),!this.isPlayer&&this.portraitSprite&&(this.body.visible=!1)}}function HU(s,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(10,8,8,0.55)",n.fillRect(0,0,256,64),n.fillStyle=`#${t.toString(16).padStart(6,"0")}`,n.font="700 28px Trebuchet MS, sans-serif",n.textAlign="center",n.fillText(s,128,42);const i=new Eh(e),a=new Ta({map:i,transparent:!0,depthTest:!1}),r=new Aa(a);return r.scale.set(1.4,.35,1),r}const $U=.18,VU=3.15,jU=2.55,Nt={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,VIEW:8,MENU:9,DUP:12,DDOWN:13,DLEFT:14,DRIGHT:15};function zn(s,t){const e=s.axes[t]??0;return Math.abs(e)<$U?0:e}function GU(s,t){return s.buttons[t]}function fe(s,t,e=.22){const n=GU(s,t);return n?n.pressed||n.value>=e:!1}class WU{constructor(){R(this,"keys",new Set);R(this,"tickle",!1);R(this,"escape",!1);R(this,"confirm",!1);R(this,"back",!1);R(this,"tickleHeld",!1);R(this,"escapeHeld",!1);R(this,"releaseHeld",!1);R(this,"lookX",0);R(this,"lookY",0);R(this,"stickX",0);R(this,"stickY",0);R(this,"pointerLocked",!1);R(this,"mobile",!1);R(this,"padActive",!1);R(this,"padLabel","");R(this,"justConnected",!1);R(this,"padHome",!1);R(this,"padShop",!1);R(this,"padArena",!1);R(this,"padUp",!1);R(this,"padDown",!1);R(this,"padLeft",!1);R(this,"padRight",!1);R(this,"padTabPrev",!1);R(this,"padTabNext",!1);R(this,"lookId",null);R(this,"lastLook",null);R(this,"touchTickle",!1);R(this,"touchEscape",!1);R(this,"padMoveX",0);R(this,"padMoveY",0);R(this,"prevPad",new Set);R(this,"rumblePad",null);R(this,"prevKeys",new Set);R(this,"navDir",null);R(this,"navAge",0);this.mobile=matchMedia("(pointer: coarse)").matches||innerWidth<820,window.addEventListener("keydown",t=>{this.keys.add(t.code),(t.code==="KeyT"||t.code==="Space")&&(this.tickle=!0),t.code==="KeyE"&&(this.escape=!0),t.code==="KeyQ"&&(this.releaseHeld=!0),(t.code==="Enter"||t.code==="NumpadEnter")&&(this.confirm=!0),t.code==="Escape"&&(this.back=!0),(t.code==="Digit1"||t.code==="KeyH")&&(this.padHome=!0),t.code==="Digit2"&&(this.padShop=!0),t.code==="Digit3"&&(this.padArena=!0),["Space","KeyT","KeyE"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys.delete(t.code),t.code==="KeyQ"&&(this.releaseHeld=!1)}),window.addEventListener("mousemove",t=>{this.pointerLocked&&(this.lookX+=t.movementX*.0024,this.lookY+=t.movementY*.0022)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement!==null}),window.addEventListener("gamepadconnected",t=>{this.justConnected=!0,this.padActive=!0;const e=t.gamepad;this.padLabel=e?Rc(e):"Xbox controller"}),window.addEventListener("gamepaddisconnected",()=>{this.padActive=!1,this.padLabel="",this.padMoveX=0,this.padMoveY=0,this.prevPad.clear(),this.rumblePad=null})}bindHud(t){const e=(r,o)=>{const l=t.querySelector(`#${r}`);if(!l)return;const c=u=>{u.preventDefault(),this[o]=!0,o==="tickle"&&(this.touchTickle=!0),o==="escape"&&(this.touchEscape=!0)},h=()=>{o==="tickle"&&(this.touchTickle=!1),o==="escape"&&(this.touchEscape=!1)};l.addEventListener("pointerdown",c),l.addEventListener("pointerup",h),l.addEventListener("pointerleave",h)};e("btn-tickle","tickle"),e("btn-escape","escape");const n=t.querySelector("#stick"),i=t.querySelector("#stick .knob");if(n&&i){const r=(l,c,h,u)=>{const d=h-l,p=u-c,g=Math.min(40,Math.hypot(d,p)),_=Math.atan2(p,d);this.stickX=g/40*Math.cos(_),this.stickY=g/40*Math.sin(_),i.style.left=`${33+this.stickX*28}px`,i.style.top=`${33+this.stickY*28}px`},o=()=>{this.stickX=0,this.stickY=0,i.style.left="33px",i.style.top="33px"};n.addEventListener("pointerdown",l=>{n.setPointerCapture(l.pointerId);const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,l.clientX,l.clientY)}),n.addEventListener("pointermove",l=>{if(!n.hasPointerCapture(l.pointerId))return;const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,l.clientX,l.clientY)}),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o)}const a=t.querySelector("#lookzone");a==null||a.addEventListener("pointerdown",r=>{this.lookId=r.pointerId,this.lastLook={x:r.clientX,y:r.clientY},a.setPointerCapture(r.pointerId)}),a==null||a.addEventListener("pointermove",r=>{this.lookId!==r.pointerId||!this.lastLook||(this.lookX+=(r.clientX-this.lastLook.x)*.004,this.lookY+=(r.clientY-this.lastLook.y)*.0035,this.lastLook={x:r.clientX,y:r.clientY})}),a==null||a.addEventListener("pointerup",()=>{this.lookId=null,this.lastLook=null})}poll(t){this.pollGamepad(t),this.pollNav(t),this.keys.has("BracketLeft")&&!this.prevKeys.has("BracketLeft")&&(this.padTabPrev=!0),this.keys.has("BracketRight")&&!this.prevKeys.has("BracketRight")&&(this.padTabNext=!0),this.prevKeys=new Set(this.keys);const e=this.keys.has("KeyT")||this.keys.has("Space"),n=this.keys.has("KeyE");this.padActive?(this.tickleHeld=this.tickleHeld||e,this.escapeHeld=this.escapeHeld||n):(this.tickleHeld=this.touchTickle||e,this.escapeHeld=this.touchEscape||n,this.releaseHeld=this.keys.has("KeyQ"))}moveVec(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),t+=this.padMoveX,e+=-this.padMoveY,(this.mobile||Math.hypot(this.stickX,this.stickY)>.08)&&(t+=this.stickX,e+=-this.stickY);const n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{x:t,z:e}}consumeLook(){const t={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,t}rumble(t=70,e=.35,n=.2){const i=this.rumblePad,a=i==null?void 0:i.vibrationActuator;a&&a.playEffect("dual-rumble",{startDelay:0,duration:t,strongMagnitude:e,weakMagnitude:n}).catch(()=>{})}endFrame(){this.tickle=!1,this.escape=!1,this.confirm=!1,this.back=!1,this.justConnected=!1,this.padHome=!1,this.padShop=!1,this.padArena=!1,this.padUp=!1,this.padDown=!1,this.padLeft=!1,this.padRight=!1,this.padTabPrev=!1,this.padTabNext=!1,!this.keys.has("KeyQ")&&!this.padActive&&(this.releaseHeld=!1)}pollGamepad(t){const e=Ac();if(!e){this.padActive=!1,this.padMoveX=0,this.padMoveY=0,this.prevPad.clear(),this.rumblePad=null;return}this.padActive=!0,this.padLabel=Rc(e),this.rumblePad=e;let n=zn(e,0),i=zn(e,1);fe(e,Nt.DLEFT)&&(n-=1),fe(e,Nt.DRIGHT)&&(n+=1),fe(e,Nt.DUP)&&(i-=1),fe(e,Nt.DDOWN)&&(i+=1);const a=Math.hypot(n,i);a>1&&(n/=a,i/=a),this.padMoveX=n,this.padMoveY=i;const r=zn(e,2),o=zn(e,3);this.lookX+=r*VU*t,this.lookY+=o*jU*t;const l=new Set,c=_=>fe(e,_)&&!this.prevPad.has(_);for(let _=0;_<e.buttons.length;_++)fe(e,_)&&l.add(_);const h=fe(e,Nt.RT)||zn(e,5)>.22,u=fe(e,Nt.LT)||zn(e,4)>.22,d=fe(e,Nt.A)||h,p=fe(e,Nt.B)||u,g=fe(e,Nt.Y);(c(Nt.A)||c(Nt.RT))&&(this.tickle=!0),(c(Nt.B)||c(Nt.LT))&&(this.escape=!0),(c(Nt.A)||c(Nt.MENU))&&(this.confirm=!0),(c(Nt.B)||c(Nt.VIEW)||c(Nt.MENU))&&(this.back=!0),c(Nt.X)&&(this.padHome=!0),c(Nt.Y)&&(this.padShop=!0),c(Nt.RB)&&(this.padArena=!0),c(Nt.LB)&&(this.padTabPrev=!0),c(Nt.RB)&&(this.padTabNext=!0),c(Nt.DUP)&&this.fireNav("up"),c(Nt.DDOWN)&&this.fireNav("down"),c(Nt.DLEFT)&&this.fireNav("left"),c(Nt.DRIGHT)&&this.fireNav("right"),this.tickleHeld=this.touchTickle||d,this.escapeHeld=this.touchEscape||p,this.releaseHeld=this.keys.has("KeyQ")||g,this.prevPad=l}pollNav(t){const e=Ac();let n=null;if(e)if(fe(e,Nt.DUP))n="up";else if(fe(e,Nt.DDOWN))n="down";else if(fe(e,Nt.DLEFT))n="left";else if(fe(e,Nt.DRIGHT))n="right";else{const i=zn(e,0),a=zn(e,1);a<-.55?n="up":a>.55?n="down":i<-.55?n="left":i>.55&&(n="right")}if(n||(this.keys.has("ArrowUp")?n="up":this.keys.has("ArrowDown")?n="down":this.keys.has("ArrowLeft")?n="left":this.keys.has("ArrowRight")&&(n="right")),n!==this.navDir){this.navDir=n,this.navAge=0;const i=!!e&&(fe(e,Nt.DUP)||fe(e,Nt.DDOWN)||fe(e,Nt.DLEFT)||fe(e,Nt.DRIGHT));n&&!i&&this.fireNav(n)}else n&&(this.navAge+=t,this.navAge>=.42&&(this.fireNav(n),this.navAge=.22))}fireNav(t){t==="up"&&(this.padUp=!0),t==="down"&&(this.padDown=!0),t==="left"&&(this.padLeft=!0),t==="right"&&(this.padRight=!0)}}function Ac(){var e;if(Ue!=null&&Ue.connected)return Ue;const s=((e=navigator.getGamepads)==null?void 0:e.call(navigator))??[];let t=null;for(const n of s)if(!(!n||!n.connected)){if(n.mapping==="standard")return n;t||(t=n)}return t}let Ue=null;function $h(){Ue={id:"Xbox controller (standard)",index:0,connected:!0,mapping:"standard",timestamp:performance.now(),axes:[0,0,0,0,0,0],buttons:Array.from({length:17},()=>({pressed:!1,touched:!1,value:0}))},window.dispatchEvent(new Event("gamepadconnected"))}function XU(s){if(Ue||$h(),!!Ue){if(Ue.timestamp=performance.now(),s.reset){Ue.axes.fill(0);for(const t of Ue.buttons)t.value=0,t.pressed=!1,t.touched=!1}if(s.axes)for(let t=0;t<s.axes.length&&t<Ue.axes.length;t++)Ue.axes[t]=s.axes[t];if(s.buttons)for(const[t,e]of Object.entries(s.buttons)){const n=Number(t),i=Ue.buttons[n];i&&(i.value=e,i.pressed=e>=.22,i.touched=i.pressed)}}}function qU(){Ue=null,window.dispatchEvent(new Event("gamepaddisconnected"))}function Rc(s){const t=s.id||"Xbox controller";return/xbox|xinput|045e/i.test(t)?"Xbox controller":/standard/i.test(s.mapping)?"Xbox layout":t.replace(/\s*\(.*$/,"").slice(0,42)||"Controller"}function Pi(s,t){return`${s}:${t}`}function Ye(s,t){return s.pos.distanceTo(t.pos)<=Ni}function us(s,t,e){const n=s.pos.distanceTo(t.pos);return n<=Ni?!0:s.isPlayer?e?n<=$g:n<=Ni+ba:!1}function an(s,t){const e=s.pos.clone().sub(t.pos);e.y=0;const n=e.length();if(n<1e-6)return!0;e.normalize();const i=t.forward().multiplyScalar(-1),a=s.isPlayer?Gg:jg;return i.dot(e)>=a||n<.5&&s.forward().dot(t.forward())>.55}function KU(s){return s.occupancy!=="vanished"&&s.occupancy!=="tapped"&&s.occupancy!=="spectate"}function _e(s){return s.occupancy!=="tapped"&&s.occupancy!=="spectate"}function YU(s,t,e){return s.filter(n=>n.team===e&&n.id!==t.id&&KU(n)&&n.occupancy!=="ticklee"&&Ye(n,t))}function ds(s,t,e){return YU(s,e,t.team).length>=2}function JU(s,t,e,n,i,a,r,o,l,c,h){if(!_e(s)||s.isPlayer)return;if(s.pileTimer=Math.max(0,s.pileTimer-n),s.occupancy==="ticklee"){!s.scriptHold&&Math.random()<.028&&c(s);return}if(s.occupancy==="tickler"||s.occupancy==="nudge"){if(s.scriptHold)return;const m=t.find(M=>M.id===s.joinOn),f=m!=null&&m.isPlayer?.32:.2;Math.random()<f&&l(s);return}if(s.occupancy==="vanished"){Lc(s,e,n);return}if(i>0){s.bait?Cc(s,e,n):ZU(s,e,n);return}if(s.bait){Cc(s,e,n);return}const u=t.filter(m=>m.team!==s.team&&_e(m)&&m.occupancy!=="vanished"),d=t.find(m=>m.isPlayer&&_e(m)&&m.occupancy!=="vanished"),p=t.find(m=>m.team===s.team&&m.occupancy==="tickler"&&m.id!==s.id);let g=null;if(d&&s.team!==d.team&&s.role==="hunter"&&d.occupancy==="free"&&(g=d),!g&&p&&s.pileTimer<=0){const m=t.find(f=>f.id===p.joinOn);if(m&&m.occupancy==="ticklee"){if(Ye(s,m)){o(s,m)||r(s,m);return}s.pos.distanceTo(p.pos)<9&&(g=m)}}if(!g)if(d&&s.team!==d.team&&s.role==="hunter")if(d.occupancy==="tickler"||d.occupancy==="nudge"){const m=u.filter(f=>!f.isPlayer&&!f.bait);g=_r(s,m.length?m:u.filter(f=>!f.bait))}else d.occupancy,g=d;else{const m=u.filter(f=>!f.isPlayer&&!(f.bait&&s.team===0&&a<pr));g=_r(s,m.length?m:u.filter(f=>!(f.bait&&a<pr)))}if(g!=null&&g.bait&&s.team===0&&a<pr){const m=u.filter(f=>!f.bait&&!f.isPlayer);g=_r(s,m)}if(!g){Lc(s,e,n);return}const _=g.pos.clone().add(g.forward().multiplyScalar(-1.15));(s.role==="ambusher"||s.role==="flanker")&&_.add(new A(-g.forward().z,0,g.forward().x).multiplyScalar(1.4)),qo(s,e,e.laneRoute(s.pos,_),n),Ye(s,g)&&(g.occupancy==="ticklee"?s.pileTimer<=0&&o(s,g):r(s,g))}function Cc(s,t,e){const n=new A(go,s.pos.y,_o);s.pos.distanceToSquared(n)>.35&&qo(s,t,n,e),s.yaw=-Math.PI/2,s.pos.y=t.groundY(s.pos.x,s.pos.z)}function _r(s,t){let e=null,n=1e9;for(const i of t){const a=s.pos.distanceToSquared(i.pos);a<n&&(n=a,e=i)}return e}function qo(s,t,e,n){const a=t.navWaypoint(s.pos,e).clone().sub(s.pos);if(a.y=0,a.lengthSq()<.04)return;a.normalize();const o=Bi*(s.role==="hunter"?1.05:.95)*n,l=(d,p)=>{const g=t.resolve(s.pos.x+d,s.pos.z+p,s.pos.y),_=Math.hypot(g.x-s.pos.x,g.z-s.pos.z),m=(g.x-s.pos.x)*a.x+(g.z-s.pos.z)*a.z;return{r:g,moved:_,progress:m}},c=l(a.x*o,a.z*o);let h=c,u=a.clone();if(c.moved<o*.4){const d=[.55,-.55,.95,-.95,1.35,-1.35,Math.PI/2,-Math.PI/2];for(const p of d){const g=Math.cos(p),_=Math.sin(p),m=a.x*g-a.z*_,f=a.x*_+a.z*g,M=l(m*o,f*o);if(M.moved<o*.2)continue;(M.progress>h.progress+.002||Math.abs(M.progress-h.progress)<.002&&M.moved>h.moved)&&(h=M,u.set(m,0,f).normalize())}}h.moved<1e-4||(s.yaw=Math.atan2(-u.x,-u.z),s.pos.x=h.r.x,s.pos.z=h.r.z,s.pos.y=t.groundY(s.pos.x,s.pos.z))}function Lc(s,t,e){s.yaw+=(Math.random()-.5)*1.8*e;const n=s.forward(),i=s.pos.x+n.x*Bi*.55*e,a=s.pos.z+n.z*Bi*.55*e,r=t.resolve(i,a,s.pos.y);s.pos.x=r.x,s.pos.z=r.z,s.pos.y=t.groundY(s.pos.x,s.pos.z)}function ZU(s,t,e){if(!t.inSpawnPocket(s.pos,s.team)){const n=s.team===0?t.spawnA:t.spawnB;s.pos.distanceToSquared(n)>.09&&qo(s,t,t.laneRoute(s.pos,n),e);return}s.pos.y=t.groundY(s.pos.x,s.pos.z)}const QU=["tickle-lock","tickle","vanish","tap-out","reappear","escape","win","lose","buy","spend","countdown-tick"];function Ko(){try{return new AudioContext}catch{return null}}let be=null;const Vh=new Map;let la=null;function Ua(){return be||(be=Ko()),be}function Pc(s,t){return`${"./".endsWith("/")?"./":".//"}sfx/${s}.${t}`}async function Uc(s,t){try{const e=await fetch(t);if(!e.ok)return null;const n=await e.arrayBuffer();return await s.decodeAudioData(n.slice(0))}catch{return null}}async function tD(s,t){const e=await Uc(s,Pc(t,"ogg"))??await Uc(s,Pc(t,"mp3"));e&&Vh.set(t,e)}function jh(){const s=Ua();return s?la||(la=(async()=>{await Promise.all(QU.map(t=>tD(s,t)))})(),la):Promise.resolve()}function eD(s,t=.7,e=1){const n=Ua(),i=Vh.get(s);if(!n||!i)return!1;try{n.state==="suspended"&&n.resume();const a=n.createBufferSource(),r=n.createGain(),o=n.currentTime;return a.buffer=i,a.playbackRate.setValueAtTime(Math.max(.5,Math.min(2,e)),o),r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(Math.max(1e-4,Math.min(1,t)),o+.006),a.connect(r),r.connect(n.destination),a.start(o),!0}catch{return!1}}function en(s,t,e,n=1){jh(),!eD(s,t,n)&&e()}function ca(s,t=.08,e="triangle",n=.05){if(be||(be=Ko()),!be)return;const i=be.createOscillator(),a=be.createGain();i.type=e,i.frequency.value=s,a.gain.value=n,a.gain.exponentialRampToValueAtTime(.001,be.currentTime+t),i.connect(a),a.connect(be.destination),i.start(),i.stop(be.currentTime+t)}function Jt(s,t,e,n=.055,i=0,a){const r=Ua();if(!r)return;const o=r.currentTime+i,l=r.createOscillator(),c=r.createGain();l.type=e,l.frequency.setValueAtTime(Math.max(1,s),o),a!=null&&l.frequency.exponentialRampToValueAtTime(Math.max(1,a),o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.008),c.gain.exponentialRampToValueAtTime(.001,o+t),l.connect(c),c.connect(r.destination),l.start(o),l.stop(o+t)}function Gh(){be||(be=Ko()),(be==null?void 0:be.state)==="suspended"&&be.resume(),jh()}let Dc=!1,Ic=!1;function nD(){if(Ic)return;Ic=!0;const s=Ua();if(s)try{s.state==="suspended"&&s.resume(),Jt(420,.07,"sine",.028,0,680),Jt(880,.05,"triangle",.016,.04)}catch{}}function iD(s=document){if(Dc)return;Dc=!0;const t=()=>{Gh(),nD()};s.addEventListener("pointerdown",t,{passive:!0}),s.addEventListener("keydown",t),s.addEventListener("touchstart",t,{passive:!0})}function sD(){en("tickle-lock",.75,()=>Jt(155,.09,"square",.06))}function aD(){en("reappear",h_,()=>{Jt(640,.09,"sine",.038,0,1420),Jt(1120,.08,"sine",.052,.018),Jt(1680,.1,"triangle",.034,.04),Jt(2240,.08,"sine",.02,.07)})}function rD(){en("tickle",.62,()=>{Jt(720,.045,"triangle",.045),Jt(960,.05,"triangle",.04,.04)})}function oD(){en("escape",.55,()=>Jt(180,.2,"sawtooth",.05,0,430))}function lD(){en("vanish",c_,()=>{Jt(78,.12,"sine",.045),Jt(680,.4,"sine",.058,.02,46),Jt(440,.3,"triangle",.038,.05,34),Jt(300,.24,"sawtooth",.022,.09,28),Jt(190,.2,"sine",.016,.14,24)})}function vr(s=.48,t=2,e=!1){const n=t<=1?2:t===2?1:0,i=Math.max(0,Math.min(1,s)),a=u_[n]*(e?.9:1),r=d_[n]*(e?.85:1);en("countdown-tick",i,()=>{Jt(r,.055,"sine",Math.min(.058,i*.11)),Jt(r*1.5,.032,"triangle",Math.min(.032,i*.06),.016),t<=1&&!e&&Jt(r*2,.028,"sine",.022,.03)},a)}function yr(){en("tap-out",.72,()=>{Jt(148,.18,"sawtooth",.07),Jt(92,.16,"square",.055,.14)})}function cD(){en("win",.7,()=>{Jt(392,.14,"sine",.05),Jt(523,.16,"sine",.05,.1),Jt(659,.22,"triangle",.055,.2)})}function hD(){en("lose",.68,()=>{Jt(277,.16,"triangle",.055),Jt(208,.18,"triangle",.05,.12),Jt(131,.28,"sawtooth",.045,.24,90)})}function uD(){en("buy",.7,()=>{Jt(988,.12,"sine",.06),Jt(1480,.08,"triangle",.03,.02)})}function dD(){en("spend",.62,()=>Jt(392,.14,"triangle",.05,0,196))}const ha=["look","skills","loadout"],ua=["weapons","armors"],wo=["stamina","struggle","tickle"],br=["team-quick","team-timed","ffa-timed","ffa-quick"],fD=7,kc={stamina:2,struggle:3.5,tickle:1.5},pD={stamina:$n.stamina,struggle:$n.struggle,tickle:$n.tickle},mD={stamina:"Stamina",struggle:"Escape",tickle:"Tickle"};class gD{constructor(t,e,n,i){R(this,"room","plaza");R(this,"overlay");R(this,"getSave");R(this,"persist");R(this,"onPlay");R(this,"root",null);R(this,"bound",!1);R(this,"homeTab","look");R(this,"shopTab","weapons");R(this,"laughTimer",0);R(this,"laughUntil",0);R(this,"laughMs",0);R(this,"focus",0);R(this,"arenaFocus",0);R(this,"loadoutItems",[]);this.overlay=t,this.getSave=e,this.persist=n,this.onPlay=i}bind(){const t=this.overlay.querySelector("#hub-root");if(!(t instanceof HTMLElement))return;this.root=t;const e=this.overlay.querySelector("#elara-still"),n=!!(e&&!t.contains(e));t.innerHTML=vD(!n),this.bound||(t.addEventListener("click",i=>this.onClick(i)),this.bound=!0),this.show(this.room),this.render()}render(){const t=this.root;if(!t)return;const e=this.getSave(),n=ws(e.weapon),i=Es(e.armor),a=t.querySelector("#statline");if(a){const r=e.level<10?100+20*(e.level-1):0,o=e.level>=10?"XP capped":`XP ${e.xp??0}/${r}`;a.textContent=`Elara Case  ·  Lv ${e.level}  ·  ${o}  ·  ${e.coins} coins  ·  ${e.unspent} skill pts  ·  ${n.name} / ${i.name}`}this.syncTabs(t),this.renderLook(t,e),this.renderSkills(t,e),this.renderLoadout(t,e),this.renderShop(t,e),this.renderArena(t,e,n,i),this.paintFocus(),this.syncPadHint()}handlePad(t){return this.room==="plaza"?(t.padHome?this.show("home"):t.padShop?this.show("shop"):t.padArena&&this.show("arena"),!1):t.back?(this.show("plaza"),!0):(t.padTabPrev&&this.cycleTab(-1),t.padTabNext&&this.cycleTab(1),t.padLeft&&this.moveFocus(-1,0),t.padRight&&this.moveFocus(1,0),t.padUp&&this.moveFocus(0,-1),t.padDown&&this.moveFocus(0,1),t.confirm?(this.activateFocus(),!0):!1)}get laughing(){return performance.now()<this.laughUntil}get laughProgress(){if(!this.laughMs)return 0;const t=this.laughUntil-performance.now();return Math.max(0,Math.min(1,1-t/this.laughMs))}debugPad(){return{room:this.room,homeTab:this.homeTab,shopTab:this.shopTab,focus:this.focus,arenaMode:br[this.arenaFocus]??"team-quick"}}show(t){var r;const e=this.room!==t;this.room=t;const n=this.root;if(!n)return;for(const o of["plaza","home","shop","arena"])(r=n.querySelector(`#hub-${o}`))==null||r.classList.toggle("on",o===t);const i=n.querySelector("#hub-back"),a=n.querySelector(`#hub-${t}`);i&&(i.hidden=t==="plaza",a&&t!=="plaza"&&a.prepend(i)),(t==="home"||t==="shop")&&this.syncTabs(n),e&&this.resetFocus(),this.paintFocus(),this.syncPadHint()}onClick(t){const e=t.target;if(!(e instanceof Element))return;const n=e.closest("[data-hub], #hub-back, #play, #arena-start, #arena-timed, #arena-ffa-timed, #arena-ffa-quick, #btn-laugh");if(!n)return;switch(n.getAttribute("data-hub")??n.id){case"hub-back":this.show("plaza");return;case"door-home":this.show("home");return;case"door-shop":this.show("shop");return;case"door-arena":this.show("arena");return;case"play":case"arena-start":this.onPlay("team-quick");return;case"arena-timed":this.onPlay("team-timed");return;case"arena-ffa-quick":this.onPlay("ffa-quick");return;case"arena-ffa-timed":this.onPlay("ffa-timed");return;case"tab-look":this.homeTab="look",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-skills":this.homeTab="skills",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-loadout":this.homeTab="loadout",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-weapons":this.shopTab="weapons",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-armors":this.shopTab="armors",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"btn-laugh":this.previewLaugh();return;case"spend-stamina":this.spend("stamina");return;case"spend-struggle":this.spend("struggle");return;case"spend-tickle":this.spend("tickle");return;case"equip":{const a=n.getAttribute("data-kind"),r=Number(n.getAttribute("data-id"));(a==="weapon"||a==="armor")&&this.equip(a,r);return}case"buy":{const a=n.getAttribute("data-kind"),r=Number(n.getAttribute("data-id"));(a==="weapon"||a==="armor")&&this.buy(a,r);return}case"pick-look":{const a=Number(n.getAttribute("data-id"));this.pickLook(a);return}default:return}}cycleTab(t){if(this.room==="home"){const e=ha.indexOf(this.homeTab);this.homeTab=ha[(e+t+ha.length)%ha.length],this.resetFocus(),this.syncTabs(this.root),this.paintFocus(),this.syncPadHint();return}if(this.room==="shop"){const e=ua.indexOf(this.shopTab);this.shopTab=ua[(e+t+ua.length)%ua.length],this.resetFocus(),this.syncTabs(this.root),this.paintFocus(),this.syncPadHint()}}resetFocus(){const t=this.getSave();if(this.room==="home"&&this.homeTab==="look")this.focus=t.look;else if(this.room==="home"&&this.homeTab==="skills")this.focus=0;else if(this.room==="home"&&this.homeTab==="loadout"){const e=this.loadoutItems.findIndex(n=>n.kind==="weapon"&&n.id===t.weapon);this.focus=e>=0?e:0}else this.room==="shop"&&this.shopTab==="weapons"?this.focus=t.weapon:this.room==="shop"&&this.shopTab==="armors"?this.focus=t.armor:this.room==="arena"?this.focus=this.arenaFocus:this.focus=0}focusCount(){return this.room==="home"&&this.homeTab==="look"?Oi.length:this.room==="home"&&this.homeTab==="skills"?wo.length:this.room==="home"&&this.homeTab==="loadout"?Math.max(1,this.loadoutItems.length):this.room==="shop"&&this.shopTab==="weapons"?Ms.length+1:this.room==="shop"&&this.shopTab==="armors"?Ss.length+1:this.room==="arena"?br.length:1}moveFocus(t,e){const n=this.focusCount();if(this.room==="home"&&this.homeTab==="look")t&&(this.focus=(this.focus+t+n)%n),e&&(this.focus=Math.max(0,Math.min(n-1,this.focus+e*fD)));else{const i=t||e;i&&(this.focus=(this.focus+i+n)%n),this.room==="arena"&&(this.arenaFocus=this.focus)}this.paintFocus(),this.syncPadHint()}activateFocus(){if(this.room==="home"&&this.homeTab==="look"){this.pickLook(this.focus);return}if(this.room==="home"&&this.homeTab==="skills"){const t=wo[this.focus];t&&this.spend(t);return}if(this.room==="home"&&this.homeTab==="loadout"){const t=this.loadoutItems[this.focus];t&&this.equip(t.kind,t.id);return}if(this.room==="shop"){const t=this.shopTab==="weapons"?"weapon":"armor";this.buy(t,this.focus);return}this.room==="arena"&&(this.arenaFocus=this.focus,this.onPlay(br[this.arenaFocus]??"team-quick"))}paintFocus(){const t=this.root;if(!t||this.room==="plaza")return;t.querySelectorAll(".focus").forEach(a=>a.classList.remove("focus"));const e=`[data-focus="${this.room==="arena"?this.arenaFocus:this.focus}"]`,i=((this.room==="home"?this.homeTab==="look"?t.querySelector("#look-grid"):this.homeTab==="skills"?t.querySelector("#home-skills"):t.querySelector("#loadout-list"):this.room==="shop"?this.shopTab==="weapons"?t.querySelector("#shop-weapons"):t.querySelector("#shop-armors"):t.querySelector("#hub-arena"))??t).querySelector(e);i==null||i.classList.add("focus")}syncPadHint(){var n;const t=(n=this.root)==null?void 0:n.querySelector("#hub-pad-hint");if(!t)return;if(this.room==="plaza"){t.textContent="Xbox: LS walk plaza · A at Arena = Team Quick · X Home · Y Shop · RB modes · B back";return}const e=this.room==="home"?this.homeTab:this.room==="shop"?this.shopTab:"mode";t.textContent=`D-pad / LS move · A ${this.room==="arena"?"Start":"confirm"} · LB/RB ${e} tabs · B plaza`}spend(t){const e=this.getSave();e.unspent<1||e.blocks[t]>=wn||(e.unspent-=1,e.blocks[t]+=1,this.persist(),dD(),this.render())}pickLook(t){const e=zi(t),n=this.getSave();if(n.look===e.id){this.previewLaugh();return}n.look=e.id,this.focus=e.id,this.persist(),this.render(),this.previewLaugh()}buy(t,e){var o,l;if(e===0)return;const n=this.getSave(),i=t==="weapon"?ws(e):Es(e);if(i.id!==e)return;const a=t==="weapon"?n.ownedWeapons:n.ownedArmors;if(a.includes(e)){this.equip(t,e);return}if(n.coins<i.price){const c=(o=this.root)==null?void 0:o.querySelector("#shop-note");c&&(c.textContent=`Need ${i.price} coins for ${i.name} — you have ${n.coins}.`);return}n.coins-=i.price,a.push(e),t==="weapon"?n.weapon=e:n.armor=e,this.persist(),uD(),this.render();const r=(l=this.root)==null?void 0:l.querySelector("#shop-note");r&&(r.textContent=`Bought and equipped ${i.name}. Owned ids saved.`)}equip(t,e){const n=this.getSave();!(t==="weapon"?n.ownedWeapons:n.ownedArmors).includes(e)&&e!==0||(t==="weapon"?n.weapon=e:n.armor=e,this.persist(),this.render())}previewLaugh(){var a;const t=(a=this.root)==null?void 0:a.querySelector("#look-preview");if(!t)return;const e=this.getSave(),i=Sa(e.look??0).hubPreviewMs??2e3;t.classList.add("laughing"),this.laughUntil=performance.now()+i,this.laughMs=i,window.clearTimeout(this.laughTimer),this.laughTimer=window.setTimeout(()=>t.classList.remove("laughing"),i)}syncTabs(t){var e,n,i,a,r,o,l,c,h,u;t&&((e=t.querySelector("#tab-look"))==null||e.classList.toggle("on",this.homeTab==="look"),(n=t.querySelector("#tab-skills"))==null||n.classList.toggle("on",this.homeTab==="skills"),(i=t.querySelector("#tab-loadout"))==null||i.classList.toggle("on",this.homeTab==="loadout"),(a=t.querySelector("#home-look"))==null||a.classList.toggle("on",this.homeTab==="look"),(r=t.querySelector("#home-skills"))==null||r.classList.toggle("on",this.homeTab==="skills"),(o=t.querySelector("#home-loadout"))==null||o.classList.toggle("on",this.homeTab==="loadout"),(l=t.querySelector("#tab-weapons"))==null||l.classList.toggle("on",this.shopTab==="weapons"),(c=t.querySelector("#tab-armors"))==null||c.classList.toggle("on",this.shopTab==="armors"),(h=t.querySelector("#shop-weapons"))==null||h.classList.toggle("on",this.shopTab==="weapons"),(u=t.querySelector("#shop-armors"))==null||u.classList.toggle("on",this.shopTab==="armors"))}renderLook(t,e){const n=zi(e.look),i=t.querySelector("#look-name");i&&(i.textContent=n.metalException?`${n.display} · default · metal exception (earrings + pendant)`:`${n.display} · Amateur 12 · metal-free`);const a=t.querySelector("#look-preview img"),r=this.overlay.querySelector("#elara-still"),o=Wn(n.slug);o&&ln(o).then(c=>{a&&(a.src=c.keyedUrl,a.alt=n.display),r&&(r.src=c.keyedUrl,r.alt=n.display,r.hidden=!1)});const l=t.querySelector("#look-grid");if(l){l.innerHTML=Oi.map(c=>{const h=Wn(c.slug)??"";return`<button type="button" class="look-chip${c.id===e.look?" on":""}" data-hub="pick-look" data-id="${c.id}" data-focus="${c.id}" title="${$e(c.display)}">
          <img data-look="${c.id}" alt="${$e(c.display)}" ${h?"":"hidden"} />
          <span>${$e(c.display.split(" ")[0]??c.display)}</span>
        </button>`}).join("");for(const c of Oi){const h=Wn(c.slug);h&&ln(h).then(u=>{const d=l.querySelector(`img[data-look="${c.id}"]`);d&&(d.src=u.keyedUrl,d.hidden=!1)})}}}renderSkills(t,e){const n=t.querySelector("#skill-unspent");n&&(n.textContent=`${e.unspent} unspent`);for(const i of["stamina","struggle","tickle"]){const a=e.blocks[i],r=pD[i]+kc[i]*a,o=t.querySelector(`[data-track="${i}"]`);if(!o)continue;const l=o.querySelector(".skill-meta");l&&(l.textContent=`${a} / ${wn}  ·  flat ${_D(r)}  ·  +${kc[i]} / block`),o.querySelectorAll(".skill-cells i").forEach((u,d)=>{u.classList.toggle("on",d<a),u.classList.toggle("lock",d>=wn)});const h=o.querySelector("button");h&&(h.disabled=e.unspent<1||a>=wn)}}renderLoadout(t,e){const n=t.querySelector("#loadout-list");if(!n)return;const i=Fc(e.ownedWeapons,ws,bs),a=Fc(e.ownedArmors,Es,xs);n.innerHTML='<h3 class="hub-subhead">Weapons</h3>'+i.map((r,o)=>Nc("weapon",r,e.weapon,xr(r),o)).join("")+'<h3 class="hub-subhead">Armors</h3>'+a.map((r,o)=>Nc("armor",r,e.armor,Mr(r),i.length+o)).join(""),this.loadoutItems=[...i.map(r=>({kind:"weapon",id:r.id})),...a.map(r=>({kind:"armor",id:r.id}))]}renderShop(t,e){const n=t.querySelector("#shop-coins");n&&(n.textContent=`${e.coins} coins`);const i=t.querySelector("#shop-note");i&&!i.textContent&&(i.textContent="Buy spends coins. Equip is immediate. Ids persist.");const a=t.querySelector("#shop-weapons");a&&(a.innerHTML=[bs,...Ms].map(o=>Bc("weapon",o,e.ownedWeapons,e.weapon,e.coins,xr(o))).join(""));const r=t.querySelector("#shop-armors");r&&(r.innerHTML=[xs,...Ss].map(o=>Bc("armor",o,e.ownedArmors,e.armor,e.coins,Mr(o))).join(""))}renderArena(t,e,n,i){const a=t.querySelector("#arena-loadout");a&&(a.textContent=`Loadout locks at Start · ${n.name} / ${i.name} · Lv ${e.level}`);const r=t.querySelector("#arena-catalog");if(r){const o=[bs,...Ms].map(c=>`<li>${$e(c.name)} · ${c.price?`${c.price}c`:"free"} · ${$e(xr(c))}</li>`).join(""),l=[xs,...Ss].map(c=>`<li>${$e(c.name)} · ${c.price?`${c.price}c`:"free"} · ${$e(Mr(c))}</li>`).join("");r.innerHTML=`<div class="arena-cat-col"><h3 class="hub-subhead">Weapons</h3><ul class="arena-cat">${o}</ul></div>
        <div class="arena-cat-col"><h3 class="hub-subhead">Armors</h3><ul class="arena-cat">${l}</ul></div>`}}}function _D(s){return Number.isInteger(s)?String(s):s.toFixed(1)}function xr(s){return s.ticklePct?`+${Math.round(s.ticklePct*100)}% tickle`:"no bonus"}function Mr(s){const t=[];return s.stamPct&&t.push(`+${Math.round(s.stamPct*100)}% stam`),s.escPct&&t.push(`+${Math.round(s.escPct*100)}% escape`),t.length?t.join(" / "):"no bonus"}function Fc(s,t,e){return[...new Set([0,...s])].sort((i,a)=>i-a).map(i=>{const a=t(i);return a.id===i?a:e})}function Nc(s,t,e,n,i){return`<button type="button" class="hub-item${t.id===e?" on":""}" data-hub="equip" data-kind="${s}" data-id="${t.id}" data-focus="${i}">
    <span class="hub-item-name">${$e(t.name)}</span>
    <span class="hub-item-meta">${$e(n)} · ${t.id===e?"equipped":"equip"}</span>
  </button>`}function Bc(s,t,e,n,i,a){const r=t.id===0||e.includes(t.id),o=t.id===n;let l,c="";if(t.id===0)l=o?"owned · equipped · not for sale":"owned · not for sale",c=`<button type="button" class="cta ghost" data-hub="equip" data-kind="${s}" data-id="${t.id}">${o?"Equipped":"Equip"}</button>`;else if(o)l="owned · equipped",c='<button type="button" class="cta ghost" disabled>Equipped</button>';else if(r)l="owned",c=`<button type="button" class="cta ghost" data-hub="equip" data-kind="${s}" data-id="${t.id}">Equip</button>`;else{const h=i>=t.price;l=`${t.price} coins`,c=`<button type="button" class="cta${h?"":" ghost"}" data-hub="buy" data-kind="${s}" data-id="${t.id}">${h?"Buy":`Need ${t.price}c`}</button>`}return`<div class="hub-item${o?" on":""}" data-focus="${t.id}">
    <div class="hub-item-copy">
      <span class="hub-item-name">${$e(t.name)}</span>
      <span class="hub-item-meta">${$e(a)} · ${$e(l)}</span>
    </div>
    ${c}
  </div>`}function $e(s){return s.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t)}function Sr(s){const t=Array.from({length:wn},()=>"<i></i>").join(""),e=Array.from({length:So-wn},()=>'<i class="lock"></i>').join("");return`<div class="skill-track" data-track="${s}" data-focus="${wo.indexOf(s)}">
    <div class="skill-head">
      <span>${mD[s]}</span>
      <span class="skill-meta"></span>
    </div>
    <div class="skill-cells amateur">${t}</div>
    <div class="skill-lock-label">Pro lock · ${So-wn} blocks</div>
    <div class="skill-cells pro">${e}</div>
    <button type="button" class="cta" id="spend-${s}" data-hub="spend-${s}">Spend 1</button>
  </div>`}function vD(s){return`
  <button type="button" class="cta ghost hub-back" id="hub-back" data-hub="hub-back" hidden>Back</button>
  <p class="statline" id="hub-pad-hint">Xbox: LS walk plaza · A at Arena = Team Quick · X Home · Y Shop · RB modes · B back</p>
  <div id="hub-plaza" class="hub-panel on">
    <h1>Tickle Battle</h1>
    <p class="sub">Walk the 3D plaza (WASD / LS). Arena door starts Amateur Team Quick. Home / Shop doors open rooms. AI fill is Amateur 12 (metal-free).</p>
    ${s?`<div class="player-card">
        <img id="elara-still" alt="Elara Case" />
        <div>
          <div class="player-label">Player</div>
          <div id="statline" class="statline"></div>
        </div>
      </div>`:'<div id="statline" class="statline"></div>'}
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
    <p class="hint">Walk the plaza: click canvas to look, WASD / LS move. Walk up to Arena (or click its door) for Team Quick; Home / Shop doors open overlay rooms. Match: T / Space tickle, E escape, Q release — rear or pack 2+ starts the tickle.<br/>Phone: left stick, drag right to look, Tickle / Escape.</p>
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
      <p class="hint">Permanent spend. No respec. Amateur can fill the first ${wn} of ${So} blocks. Rest lock until Pro.</p>
      ${Sr("stamina")}
      ${Sr("struggle")}
      ${Sr("tickle")}
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
  </div>`}const yD=5919564,bD=2762276,xD=3814704,wr=6211800,da=13935194,MD=.42,Wh=5.58;class SD{constructor(){R(this,"group",new Qt);R(this,"doors");R(this,"matMetal");R(this,"matDark");R(this,"matFloor");R(this,"matCyan");R(this,"matAmber");R(this,"pickables",[]);R(this,"ray",new Hg);R(this,"ndc",new ct);R(this,"hover",null);R(this,"near",null);R(this,"doorGroups",new Map);R(this,"doorLights",new Map);R(this,"doorFloorMats",new Map);R(this,"doorSillMats",new Map);R(this,"doorSigns",new Map);R(this,"doorSignMats",new Map);R(this,"doorOuterSillMats",new Map);R(this,"nearStrength",0);R(this,"walls",[]);this.matMetal=new Te({color:yD,metalness:.72,roughness:.38}),this.matDark=new Te({color:bD,metalness:.55,roughness:.5}),this.matFloor=new Te({color:xD,metalness:.4,roughness:.62}),this.matCyan=rn(wr,.22),this.matAmber=rn(da,.2),this.doors={home:new A(-13.2,1.55,0),shop:new A(13.2,1.55,0),arena:new A(0,1.55,10.2)},this.build()}addBox(t,e,n,i,a,r,o,l=!0){const c=new yt(new Wt(i,a,r),o);return c.position.set(t,e,n),l&&(c.castShadow=!0,c.receiveShadow=!0),this.group.add(c),c}build(){const t=new yt(new Wt(28,.4,22),this.matFloor);t.position.y=-.2,t.receiveShadow=!0,this.group.add(t);const e=4.2,n=e/2,i=.8,a=2.4,r=3.1,o=a/2,l=14,c=11,h=c-i/2,u=-10.6,d=-13.6,p=l-i/2,g=l-o,_=c-o;this.addBox(0,n,u,28,e,i,this.matMetal),this.addBox(-7.6000000000000005,n,h,g,e,i,this.matMetal),this.addBox(o+g/2,n,h,g,e,i,this.matMetal),this.addBox(0,r+(e-r)/2,h,a,e-r,i,this.matMetal),this.addBox(d,n,-6.1000000000000005,i,e,_,this.matMetal),this.addBox(d,n,o+_/2,i,e,_,this.matMetal),this.addBox(d,r+(e-r)/2,0,i,e-r,a,this.matMetal),this.addBox(p,n,-6.1000000000000005,i,e,_,this.matMetal),this.addBox(p,n,o+_/2,i,e,_,this.matMetal),this.addBox(p,r+(e-r)/2,0,i,e-r,a,this.matMetal),this.addDoor("home",this.doors.home,Math.PI/2,"HOME",wr),this.addDoor("shop",this.doors.shop,-Math.PI/2,"SHOP",da),this.addDoor("arena",this.doors.arena,Math.PI,"ARENA",12103844);for(const[m,f]of[[-6.2,-5.2],[6.2,-5.2],[-6.2,5.2],[6.2,5.2]])this.addBox(m,2.05,f,.7,4.1,.7,this.matMetal);this.addBox(0,.45,-6.4,8.4,.9,.45,this.matDark),this.addBox(-4.8,.38,3.2,3.6,.76,.4,this.matDark),this.addBox(4.8,.38,3.2,3.6,.76,.4,this.matDark),this.addBox(0,4.15,-3.5,26,.22,.45,this.matDark,!1),this.addBox(0,4.15,3.5,26,.22,.45,this.matDark,!1),this.addBiolume(),this.buildColliders()}nearDoor(t,e,n=Wh){let i=null,a=n;for(const r of["home","shop","arena"]){const o=this.doors[r],l=Math.hypot(t-o.x,e-o.z);l<a&&(a=l,i=r)}return i}resolve(t,e,n=MD){let i=t,a=e;for(let o=0;o<18;o++){for(const l of this.walls)if(!(a<=l.minz-n||a>=l.maxz+n)&&i>l.minx-n&&i<l.maxx+n){const c=i-(l.minx-n),h=l.maxx+n-i;i=c<h?l.minx-n-.005:l.maxx+n+.005}for(const l of this.walls)if(!(i<=l.minx-n||i>=l.maxx+n)&&a>l.minz-n&&a<l.maxz+n){const c=a-(l.minz-n),h=l.maxz+n-a;a=c<h?l.minz-n-.005:l.maxz+n+.005}}const r=this.unjamDoorJambs(i,a,n);return i=r.x,a=r.z,i=hn.clamp(i,-13.28,13.28),a=hn.clamp(a,-10.28,10.28),{x:i,z:a}}unjamDoorJambs(t,e,n){const u=n+1.12,d=11-.8/2,p=-13.6,g=14-.8/2;return Math.abs(e-d)<u+.8*.55&&(t>-2.84-u&&t<-2.84+u*.999?t=-2.84+u*.77:t<2.84+u&&t>2.84-u*.999&&(t=2.84-u*.77)),Math.abs(t-p)<u+.8*.55&&(e>-2.84-u&&e<-2.84+u*.999?e=-2.84+u*.77:e<2.84+u&&e>2.84-u*.999&&(e=2.84-u*.77)),Math.abs(t-g)<u+.8*.55&&(e>-2.84-u&&e<-2.84+u*.999?e=-2.84+u*.77:e<2.84+u&&e>2.84-u*.999&&(e=2.84-u*.77)),{x:t,z:e}}addWall(t,e,n,i){this.walls.push({minx:t,maxx:e,minz:n,maxz:i})}buildColliders(){this.walls=[];const t=.8,e=14,n=11,a=2.4/2,r=n-t/2,o=-10.6,l=-13.6,c=e-t/2,h=e-a,u=n-a,d=1.64;this.addWall(-e,e,o-t/2,o+t/2),this.addWall(-14,-a-d,r-t/2,r+t/2),this.addWall(a+d,a+h,r-t/2,r+t/2),this.addWall(l-t/2,l+t/2,-11,-a-d),this.addWall(l-t/2,l+t/2,a+d,a+u),this.addWall(c-t/2,c+t/2,-11,-a-d),this.addWall(c-t/2,c+t/2,a+d,a+u);for(const[p,g]of[[-6.2,-5.2],[6.2,-5.2],[-6.2,5.2],[6.2,5.2]])this.addWall(p-.34,p+.34,g-.34,g+.34);this.addWall(-4.2,4.2,-6.7,-6.1),this.addWall(-6.6,-3,2.9,3.5),this.addWall(3,6.6,2.9,3.5)}pickDoor(t,e,n,i,a){const r=i.getBoundingClientRect();if(r.width<=0||r.height<=0)return null;this.ndc.set((e-r.left)/r.width*2-1,-((n-r.top)/r.height)*2+1),this.ray.setFromCamera(this.ndc,t);const o=this.ray.intersectObjects(this.pickables,!0);for(const u of o){let d=u.object;for(;d;){const p=d.userData.hubRoom;if(p)return p;d=d.parent}}if(!!a&&e>=a.left&&e<=a.right&&n>=a.top&&n<=a.bottom)return null;t.updateMatrixWorld();let c=null,h=96;for(const[u,d]of this.doorGroups){const p=new A;if(d.getWorldPosition(p),p.y=1.7,p.project(t),p.z>1)continue;const g=r.left+(p.x*.5+.5)*r.width,_=r.top+(-p.y*.5+.5)*r.height,m=Math.hypot(e-g,n-_);m<h&&(h=m,c=u)}return c}setHover(t){this.hover!==t&&(this.hover=t,this.applyDoorGlow(0))}setNear(t){this.near!==t&&(this.near=t,t||(this.nearStrength=0),this.applyDoorGlow(0))}setNearStrength(t){const e=hn.clamp(t,0,1);Math.abs(e-this.nearStrength)<.01||(this.nearStrength=e)}updateDoorFx(t){this.applyDoorGlow(t)}applyDoorGlow(t){const e=.5+.5*Math.sin(t*7.25),n=.5+.5*Math.sin(t*2.35);for(const[i,a]of this.doorGroups){const r=this.hover===i||this.near===i,o=this.hover===i?1:this.near===i?Math.max(.12,this.nearStrength):0,l=i==="arena"&&r?.36*o:0,c=(i==="arena"?.18:.138)+n*(i==="arena"?.112:.078),h=this.hover===i?.98+e*.68:this.near===i?(.6+e*.74)*o+c*(1-o):c;a.traverse(M=>{const y=M.material;y!=null&&y.userData.doorGlow&&(y.userData.baseEmissive==null&&(y.userData.baseEmissive=y.emissiveIntensity),y.emissiveIntensity=y.userData.baseEmissive+h+l)});const u=r?1+.06*o+e*.03*o:1+n*.013;a.scale.set(u,1+(u-1)*.94,u);const d=this.doorLights.get(i);if(d){const M=i==="arena"?2.08:1.74;d.intensity=r?M*(.26+.74*o)+e*(i==="arena"?3.45:3.02)*o:M*(.38+n*.26)}const p=this.doorFloorMats.get(i);if(p){const M=i==="arena"?.64:.51;p.emissiveIntensity=r?M*(.26+.74*o)+e*1.48*o:M*(.16+n*.28)}const g=this.doorSillMats.get(i);if(g){const M=i==="arena"?.9:.8;g.emissiveIntensity=r?M*(.28+.72*o)+e*2.02*o:M*(.12+n*.3)}const _=this.doorOuterSillMats.get(i);if(_){const M=i==="arena"?.84:.7;_.emissiveIntensity=r?M*(.26+.74*o)+e*1.96*o:M*(.08+n*.28)}const m=this.doorSigns.get(i);if(m){const M=r?1+e*.195*o:1+n*.046;m.scale.set(M,M,1),m.position.y=m.userData.baseY+(r?e*.076*o:n*.026)}const f=this.doorSignMats.get(i);f&&(f.opacity=r?.96+e*.04*o:.56+n*.24)}}addDoor(t,e,n,i,a){const r=new Qt;r.userData.hubRoom=t;const o=2.4,l=3.1,c=.28,h=.42,u=new Wt(c,l,h),d=new Wt(o+c,.28,h),p=new yt(u,this.matMetal);p.position.set(-o/2,l/2,0),p.castShadow=!0;const g=new yt(u.clone(),this.matMetal);g.position.set(o/2,l/2,0),g.castShadow=!0;const _=new yt(d,this.matMetal);_.position.set(0,l+.08,0),_.castShadow=!0;const m=rn(a,.38);m.userData.doorGlow=!0;const f=new yt(new Wt(o-.08,.045,.05),m);f.position.set(0,l-.04,.18);const M=new yt(new Wt(.045,l-.08,.05),m);M.position.set(-o/2+.12,l/2,.18);const w=m.clone();w.userData.doorGlow=!0;const y=new yt(new Wt(.045,l-.08,.05),w);y.position.set(o/2-.12,l/2,.18);const D=new yt(new Wt(o+.2,l+.2,.14),this.matDark);D.position.set(0,l/2,-.32);const E=wD(i,a);E.position.set(0,l+.42,.28);const C=new yt(new Wt(o+.8,l+1.1,1.4),new ui({transparent:!0,opacity:0,depthWrite:!1,side:Ve}));C.position.set(0,l/2+.15,.15),C.userData.hubRoom=t,r.add(p,g,_,f,M,y,D,E,C),E.userData.baseY=E.position.y,this.doorSigns.set(t,E);const L=E.material;L.transparent=!0,L.opacity=.78,this.doorSignMats.set(t,L);const S=new Xo(a,t==="arena"?.55:.48,8.2,2);S.position.set(0,l*.72,.55),r.add(S),this.doorLights.set(t,S);const b=rn(a,t==="arena"?.62:.58);b.userData.doorGlow=!0;const P=new yt(new Wt(o+.84,.16,1.92),b);P.position.set(0,.08,1.4),r.add(P),this.doorSillMats.set(t,b);const O=rn(a,t==="arena"?.62:.58);O.userData.doorGlow=!0;const N=new yt(new Wt(o+1.96,.108,1.68),O);N.position.set(0,.054,2.52),r.add(N),this.doorOuterSillMats.set(t,O);const V=rn(a,t==="arena"?.54:.5);V.userData.doorGlow=!0;const Y=new yt(new Wt(.13,l-.02,.17),V);Y.position.set(-o/2+.3,l/2,.46);const G=V.clone();G.userData.doorGlow=!0;const Z=new yt(new Wt(.13,l-.02,.17),G);Z.position.set(o/2-.3,l/2,.46),r.add(Y,Z);const $=rn(a,t==="arena"?.4:.36);$.userData.doorGlow=!0;const nt=new yt(new Wt(o-.2,.04,.06),$);nt.position.set(0,l-.02,.22),r.add(nt),r.position.copy(e),r.position.y=0,r.rotation.y=n,this.group.add(r),this.pickables.push(r),this.doorGroups.set(t,r)}addBiolume(){const t=(a,r,o,l,c)=>{const h=new yt(new Wt(a,.035,r),c);return h.position.set(o,.02,l),this.group.add(h),h};t(18,.16,0,0,this.matCyan),t(.16,14,0,0,this.matAmber);const e=rn(wr,.4);e.userData.doorGlow=!0,t(6.5,.58,this.doors.home.x+2.16,0,e),this.doorFloorMats.set("home",e);const n=rn(da,.4);n.userData.doorGlow=!0,t(6.5,.58,this.doors.shop.x-2.16,0,n),this.doorFloorMats.set("shop",n);const i=rn(da,.48);i.userData.doorGlow=!0,t(.58,6.5,0,this.doors.arena.z-2.44,i),this.doorFloorMats.set("arena",i),t(10,.1,0,-9.4,this.matCyan),t(10,.1,0,9.4,this.matAmber)}}function rn(s,t){return new Te({color:2762276,emissive:s,emissiveIntensity:t,metalness:.2,roughness:.7})}function wD(s,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(12,10,9,0.88)",n.fillRect(0,0,256,64);const i=`#${t.toString(16).padStart(6,"0")}`;n.strokeStyle=i,n.lineWidth=3,n.strokeRect(8,8,240,48),n.fillStyle=i,n.font="700 30px Trebuchet MS, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(s,128,34);const a=new Eh(e),r=new ui({map:a,transparent:!0,side:Ve});return new yt(new Ji(1.65,.4),r)}function Er(s,t=Math.random){const e=Math.max(1,Math.min(10,s)),n=7+(e-1),i={stamina:0,struggle:0,tickle:0},a=["stamina","struggle","tickle"];for(let c=0;c<n;c++){const h=a.filter(d=>i[d]<wn);if(!h.length)break;const u=h[Math.floor(t()*h.length)];i[u]+=1}const r=e<=2?.4:e<=5?.22:.12;let o=0,l=0;if(t()>r){const c=Math.min(Ms.length,Math.max(1,Math.ceil(e*.7)));o=1+Math.floor(t()*c)}if(t()>r){const c=Math.min(Ss.length,Math.max(1,Math.ceil(e*.8)));l=1+Math.floor(t()*c)}return{blocks:i,weapon:o,armor:l}}const Xh="tb-amateur-save",ED=2.35;class TD{constructor(t){R(this,"renderer");R(this,"scene",new _g);R(this,"camera",new Be(72,1,.08,120));R(this,"map",new y_);R(this,"plaza",new SD);R(this,"fighters",[]);R(this,"player");R(this,"input",new WU);R(this,"mode","hub");R(this,"arenaMode","team-quick");R(this,"countdown",mc);R(this,"timedLeft",0);R(this,"tapScore",[0,0]);R(this,"clock",new zg);R(this,"pairCd",new Map);R(this,"joinList",new Map);R(this,"firstTickler",new Map);R(this,"ffaScore",new Map);R(this,"contactHold",new Map);R(this,"nudgeT",0);R(this,"nudgeFrom",new A);R(this,"nudgeTo",new A);R(this,"nudgeIds",[]);R(this,"overlay");R(this,"hub");R(this,"save");R(this,"coinsEarned",0);R(this,"payouts",[]);R(this,"matchLoadout","");R(this,"matchWeapon",0);R(this,"matchArmor",0);R(this,"plazaPreview",null);R(this,"plazaPoseTarget",new A(0,0,1.35));R(this,"plazaYawTarget",Math.PI*.92);R(this,"hubLaughWas",!1);R(this,"hubPos",new A(0,0,-2.4));R(this,"hubYaw",Math.PI);R(this,"hubPitch",0);R(this,"hubNear",null);R(this,"hubPrompted",null);R(this,"hubConfirmGrace",0);R(this,"matchRewardsCommitted",!1);R(this,"result","");R(this,"toastT",0);R(this,"toast","");R(this,"lookPitch",0);R(this,"combatAnnounced",!1);R(this,"countdownTickCeil",-1);R(this,"vanishTickCeil",-1);R(this,"liveT",0);R(this,"hudEls",{});R(this,"rearCue");R(this,"fpArms");R(this,"fpArmT",0);R(this,"wallPrev",performance.now());this.save=Oc(),this.renderer=new gg({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=!0,t.appendChild(this.renderer.domElement),this.overlay=document.createElement("div"),this.overlay.id="overlay",this.overlay.innerHTML=RD(),t.appendChild(this.overlay),this.hub=new gD(this.overlay,()=>this.save,()=>this.persistSave(),n=>{this.arenaMode=n,this.beginMatch(this.input.padActive)}),this.hub.bind(),this.cacheHud(),this.input.bindHud(this.overlay),this.scene.fog=new oi(1709588,18,48),this.scene.background=new Bt(1446672),this.scene.add(new Fg(9076856,1708560,.7));const e=new Og(13154464,1.05);e.position.set(8,18,6),e.castShadow=!0,this.scene.add(e),this.scene.add(this.map.group),this.scene.add(this.plaza.group),this.plaza.group.visible=!1,this.rearCue=new yt(new Vo(.38,.72,28),new ui({color:13935194,transparent:!0,opacity:.92,side:Ve,depthWrite:!1})),this.rearCue.rotation.x=-Math.PI/2,this.rearCue.visible=!1,this.scene.add(this.rearCue),this.fpArms=AD(),this.scene.add(this.camera),this.camera.add(this.fpArms),this.fpArms.visible=!1,this.bindUi(),window.addEventListener("resize",()=>this.resize()),this.resize(),this.showHub(),this.renderer.setAnimationLoop(()=>this.frame())}cacheHud(){for(const t of["boot","results","hud","stamina-fill","escape-fill","meta-left","meta-right","top-left","top-right","countdown","toast","face","btn-tickle","btn-escape","statline","top","crosshair","radar","roster","face-still","elara-still","player-portrait","pad-status","again-hint","btn-leave","tickle-flash"]){const e=this.overlay.querySelector("#"+t);e&&(this.hudEls[t]=e)}}bindUi(){var t,e;iD(document),(t=this.overlay.querySelector("#again"))==null||t.addEventListener("click",()=>this.returnToPlaza("click")),(e=this.overlay.querySelector("#btn-leave"))==null||e.addEventListener("click",()=>this.bailCountdown()),this.renderer.domElement.addEventListener("click",n=>{var i,a,r,o;if(!this.tryPlazaDoor(n.clientX,n.clientY)){if(this.mode==="hub"&&this.hub.room==="plaza"&&!this.input.padActive){(a=(i=this.renderer.domElement).requestPointerLock)==null||a.call(i);return}this.mode==="play"&&!this.input.padActive&&((o=(r=this.renderer.domElement).requestPointerLock)==null||o.call(r))}}),this.overlay.addEventListener("click",n=>{const i=n.target;i instanceof Element&&(i.closest("button, a, input, [data-hub], .hub-item, .roster, #play")||this.tryPlazaDoor(n.clientX,n.clientY))}),window.addEventListener("pointermove",n=>{if(this.mode!=="hub"||this.hub.room!=="plaza"){document.body.style.cursor==="pointer"&&(document.body.style.cursor="");return}const i=this.overlay.querySelector("#boot .card"),a=this.plaza.pickDoor(this.camera,n.clientX,n.clientY,this.renderer.domElement,i==null?void 0:i.getBoundingClientRect());this.plaza.setHover(a);const r=a?"pointer":"";this.renderer.domElement.style.cursor=r,document.body.style.cursor=r})}tryPlazaDoor(t,e){if(this.mode!=="hub"||this.hub.room!=="plaza")return!1;const n=this.overlay.querySelector("#boot .card"),i=this.plaza.pickDoor(this.camera,t,e,this.renderer.domElement,n==null?void 0:n.getBoundingClientRect());return i?(this.plaza.setHover(null),this.renderer.domElement.style.cursor="",document.body.style.cursor="",i==="arena"?(this.hubConfirmGrace>0||(this.arenaMode="team-quick",this.beginMatch(this.input.padActive)),!0):(this.hub.show(i),this.hub.render(),this.syncPlazaHall(),!0)):!1}syncPlazaHall(){this.hudEls.boot.classList.toggle("plaza-hall",this.mode==="hub"&&this.hub.room==="plaza")}persistSave(){Eo(this.save),this.syncPlazaPreview()}tickCountdownAudio(){if(this.countdown>0){const e=Math.ceil(this.countdown);if(e<=3&&e>=1&&e!==this.countdownTickCeil){this.countdownTickCeil=e;const n=f_[3-e];vr(n,e)}}const t=this.player;if(t&&t.occupancy==="vanished"&&t.vanishLeft>0){const e=Math.ceil(t.vanishLeft);if(e<=3&&e>=1&&e!==this.vanishTickCeil){this.vanishTickCeil=e;const n=p_[3-e];vr(n,e,!0)}}else this.vanishTickCeil=-1}bailCountdown(){this.mode!=="play"||this.countdown<=0||(vr(.78,2),this.countdown=0,this.coinsEarned=0,this.payouts=[],this.resetMatchEphemeral(),this.clearFighters(),this.say("Left during countdown — no coins, no XP"),this.returnToPlaza("leave"))}resetMatchEphemeral(){this.countdownTickCeil=-1,this.vanishTickCeil=-1,this.combatAnnounced=!1,this.coinsEarned=0,this.payouts=[],this.matchRewardsCommitted=!1,this.joinList.clear(),this.firstTickler.clear(),this.ffaScore.clear(),this.pairCd.clear(),this.contactHold.clear(),this.tapScore=[0,0],this.timedLeft=0,this.nudgeT=0,this.nudgeIds=[],this.liveT=0,this.result="",this.matchLoadout="",this.lookPitch=0,this.fpArmT=0,this.wallPrev=performance.now()}returnToPlaza(t){var e;this.showHub(),(e=document.exitPointerLock)==null||e.call(document),this.input.endFrame(),this.hubConfirmGrace=ED,this.matchRewardsCommitted=!1}beginMatch(t){var e,n;this.mode!=="play"&&(this.hubConfirmGrace>0||(Gh(),!t&&!this.input.padActive&&((n=(e=this.renderer.domElement).requestPointerLock)==null||n.call(e)),this.startMatch()))}showHub(){this.mode="hub",this.countdown=0,this.clearFighters(),this.map.group.visible=!1,this.plaza.group.visible=!0,this.scene.fog=new oi(1709588,32,80),this.hudEls.boot.style.display="flex",this.hudEls.results.style.display="none",this.hudEls.hud.style.display="none",this.hudEls.countdown.style.display="none",this.hudEls.top&&(this.hudEls.top.style.display="none"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="none"),this.hudEls.radar&&(this.hudEls.radar.style.display="none"),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display="none"),this.rearCue.visible=!1,this.save=Oc(),this.hubPos.set(0,0,-2.4),this.hubYaw=Math.PI,this.hubPitch=0,this.hubNear=null,this.hubPrompted=null,this.hub.show("plaza"),this.hub.render(),this.fillElaraPortrait(),this.fillRosterStrip(),this.syncPlazaHall(),this.syncPlazaPreview(),this.plaza.setHover(null),this.plaza.setNear(null),this.plaza.setNearStrength(0),this.resetMatchEphemeral(),this.persistSave()}aimPlazaCamera(){const t=this.clock.elapsedTime*.12,e=this.hub.room;if(e==="home"){this.camera.position.set(-6.4,3.5,.35),this.camera.lookAt(this.plaza.doors.home.x,1.55,this.plaza.doors.home.z);return}if(e==="shop"){this.camera.position.set(6.4,3.5,.35),this.camera.lookAt(this.plaza.doors.shop.x,1.55,this.plaza.doors.shop.z);return}if(e==="arena"){this.camera.position.set(0,3.7,4.4),this.camera.lookAt(this.plaza.doors.arena.x,1.55,this.plaza.doors.arena.z);return}this.camera.position.set(Math.sin(t)*1.4+2.35,1.78,4.85),this.camera.lookAt(0,1.12,1.35)}tickHubWalk(t){const e=this.input.consumeLook();this.hubYaw-=e.x,this.hubPitch=hn.clamp(this.hubPitch-e.y,-1.05,.95);const n=this.input.moveVec(),i=Bi*.88,a=-Math.sin(this.hubYaw),r=-Math.cos(this.hubYaw),o=Math.cos(this.hubYaw),l=-Math.sin(this.hubYaw),c=(a*n.z+o*n.x)*i*t,h=(r*n.z+l*n.x)*i*t,u=this.plaza.resolve(this.hubPos.x+c,this.hubPos.z+h);if(this.hubPos.x=u.x,this.hubPos.z=u.z,this.hubPos.y=0,this.hubNear=this.plaza.nearDoor(this.hubPos.x,this.hubPos.z),this.plaza.setNear(this.hubNear),this.hubNear){const d=this.plaza.doors[this.hubNear],p=Math.hypot(this.hubPos.x-d.x,this.hubPos.z-d.z),_=1-Math.min(1,p/Wh),m=_*_*(3-2*_),f=m*m*(3-2*m),M=f*f*(3-2*f),w=M*M*(3-2*M),y=w*w*(3-2*w),D=y*y*(3-2*y),E=D*D*(3-2*D);this.plaza.setNearStrength(E*E*(3-2*E))}else this.plaza.setNearStrength(0);this.hubNear!==this.hubPrompted&&(this.hubPrompted=this.hubNear,this.hubNear==="arena"?this.say("Arena — A / Enter / E / click starts Amateur Team Quick"):this.hubNear==="home"?this.say("Home — A / Enter / E / click (Look · Skills · Loadout)"):this.hubNear==="shop"&&this.say("Shop — A / Enter / E / click (Amateur gear)"))}interactHubDoor(t){const e=this.hubNear;if(e==="arena"){this.arenaMode="team-quick",this.beginMatch(this.input.padActive);return}if(e==="home"||e==="shop"){this.hub.show(e),this.hub.render(),this.syncPlazaHall();return}t&&(this.arenaMode="team-quick",this.beginMatch(this.input.padActive))}aimHubWalkCamera(){this.camera.position.set(this.hubPos.x+Math.sin(this.hubYaw)*2.55,this.hubPos.y+1.62,this.hubPos.z+Math.cos(this.hubYaw)*2.55),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.hubYaw,this.camera.rotation.x=this.hubPitch,this.camera.rotation.z=0}fillElaraPortrait(){const t=this.hudEls["elara-still"],e=zi(this.save.look),n=Wn(e.slug);!t||!n||(t.hidden=!0,t.alt=e.display,ln(n).then(i=>{t.src=i.keyedUrl,t.hidden=!1;const a=this.overlay.querySelector("#look-preview img");a&&(a.src=i.keyedUrl)}))}fillRosterStrip(){const t=this.hudEls.roster;if(t){t.innerHTML=ys.map(e=>Wn(e.slug)?`<figure class="slot"><img data-slug="${e.slug}" alt="${e.display}" hidden /><figcaption>${e.display}</figcaption></figure>`:`<div class="slot empty"><span>${e.display}</span></div>`).join("");for(const e of ys){const n=Wn(e.slug);n&&ln(n).then(i=>{const a=t.querySelector(`img[data-slug="${e.slug}"]`);a&&(a.src=i.keyedUrl,a.hidden=!1)})}}}startMatch(){this.mode="play",this.map.group.visible=!0,this.plaza.group.visible=!1,this.scene.fog=new oi(1709588,18,48),this.countdown=mc,this.timedLeft=this.arenaMode==="team-timed"||this.arenaMode==="ffa-timed"?Kg:0,this.tapScore=[0,0],this.coinsEarned=0,this.payouts=[],this.matchRewardsCommitted=!1,this.joinList.clear(),this.firstTickler.clear(),this.ffaScore.clear(),this.pairCd.clear(),this.contactHold.clear(),this.nudgeT=0,this.combatAnnounced=!1,this.countdownTickCeil=-1,this.vanishTickCeil=-1,this.liveT=0,this.wallPrev=performance.now(),this.clearFighters(),this.lockMatchLoadout(),this.spawnRoster(),this.hudEls.boot.style.display="none",this.hudEls.results.style.display="none",this.hudEls.hud.style.display="flex",this.syncPlazaHall(),this.plazaPreview&&(this.plazaPreview.group.visible=!1),this.hudEls.top&&(this.hudEls.top.style.display="flex"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="block"),this.hudEls.radar&&(this.hudEls.radar.style.display="flex"),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display="block"),ca(220,.12)}clearFighters(){for(const t of this.fighters)this.scene.remove(t.group);this.fighters=[]}spawnRoster(){const t=["hunter","flanker","ambusher","escape","sticky"],e=zi(this.save.look),n=this.lookPalette(e.id),i=new Set([n]),a=()=>{for(let h=1;h<Ra.length;h++)if(!i.has(h))return i.add(h),h;return 1},r={...this.save.blocks},o=this.isFfa(),l=ys.filter(h=>h.slug!==e.slug);this.player=new hs({team:o?0:ra.CYAN,isPlayer:!0,look:n,name:"Elara Case",slug:e.slug,role:null,blocks:r,weapon:this.matchWeapon,armor:this.matchArmor});const c=o?this.map.soloPads[0].clone():this.map.spawnA.clone();if(this.place(this.player,c),this.player.yaw=o?Tr(c,new A):-Math.PI/2,this.fighters.push(this.player),this.scene.add(this.player.group),this.player.body.visible=!1,o){for(let h=0;h<11;h++){const u=Er(this.save.level),d=this.map.soloPads[h+1]??this.map.spawnB.clone(),p=new hs({team:h+1,isPlayer:!1,look:a(),name:l[h].display,slug:l[h].slug,role:t[h%t.length],blocks:u.blocks,weapon:u.weapon,armor:u.armor});this.place(p,d.clone()),p.yaw=Tr(d,new A),this.fighters.push(p),this.scene.add(p.group)}return}for(let h=0;h<5;h++){const u=Er(this.save.level),d=new hs({team:ra.CYAN,isPlayer:!1,look:a(),name:l[h].display,slug:l[h].slug,role:t[h%t.length],blocks:u.blocks,weapon:u.weapon,armor:u.armor});this.place(d,this.map.spawnA.clone().add(new A(-1+h*.4,0,-2+h*.8))),d.yaw=-Math.PI/2,this.fighters.push(d),this.scene.add(d.group)}for(let h=0;h<6;h++){const u=Er(this.save.level),d=t[h%t.length],p=d==="escape",g=new hs({team:ra.AMBER,isPlayer:!1,look:a(),name:l[5+h].display,slug:l[5+h].slug,role:d,blocks:u.blocks,weapon:u.weapon,armor:u.armor});g.bait=p,p?(this.place(g,new A(go,0,_o)),g.yaw=-Math.PI/2,g.rim.intensity=3.6):(this.place(g,this.map.spawnB.clone().add(new A(1-h%3*.5,0,-2+h%3*1.1))),g.yaw=Math.PI/2),this.fighters.push(g),this.scene.add(g.group)}}place(t,e){e.y=this.map.groundY(e.x,e.z),t.pos.copy(e),t.syncMesh(),t.settle()}lockMatchLoadout(){this.matchWeapon=this.save.weapon,this.matchArmor=this.save.armor,this.matchLoadout=OU(this.matchWeapon,this.matchArmor)}lookPalette(t){return t===0?0:(t-1)%Math.max(1,Ra.length-1)+1}syncPlazaPreview(){const t=zi(this.save.look),e=this.lookPalette(t.id),n=this.mode==="hub"&&this.hub.room==="plaza",i=this.mode!=="play";if(this.plazaPreview)this.plazaPreview.applyGear(this.save.weapon,this.save.armor),this.plazaPreview.blocks={...this.save.blocks},this.plazaPreview.recalc(),(this.plazaPreview.slug!==t.slug||this.plazaPreview.look!==e)&&(this.plazaPreview.name=t.display,this.plazaPreview.applyLookSlug(t.slug,e));else{this.plazaPreview=new hs({team:ra.CYAN,isPlayer:!1,look:e,name:t.display,slug:t.slug,role:null,blocks:{...this.save.blocks},weapon:this.save.weapon,armor:this.save.armor}),this.plazaPreview.pos.set(0,0,1.35),this.plazaPreview.yaw=Math.PI*.92,this.plazaPreview.syncMesh(),this.plazaPreview.settle();for(const a of[...this.plazaPreview.group.children])a instanceof Aa&&a!==this.plazaPreview.portraitSprite&&(a.visible=!1);this.scene.add(this.plazaPreview.group)}n?(this.plazaPoseTarget.copy(this.hubPos),this.plazaYawTarget=this.hubYaw):(this.mode==="hub"||this.mode==="results")&&(this.plazaPoseTarget.set(0,0,1.35),this.plazaYawTarget=Math.PI*.92),this.plazaPreview.pos.distanceToSquared(this.plazaPoseTarget)>36&&(this.plazaPreview.pos.copy(this.plazaPoseTarget),this.plazaPreview.yaw=this.plazaYawTarget,this.plazaPreview.settle()),this.plazaPreview.group.visible=i}tickPlazaMannequinContinuity(t){const e=this.plazaPreview;if(!e||this.mode==="play")return;const i=this.mode==="hub"&&this.hub.room==="plaza"?18:3.8,a=1-Math.exp(-t*i),r=e.pos.clone();e.pos.lerp(this.plazaPoseTarget,a);let o=this.plazaYawTarget-e.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;e.yaw+=o*a,r.distanceToSquared(e.pos)>2.25&&e.settle()}isFfa(){return this.arenaMode==="ffa-quick"||this.arenaMode==="ffa-timed"}joinCap(){return this.isFfa()?1:Jg}packsOn(){return!this.isFfa()}byId(t){return this.fighters.find(e=>e.id===t)}frame(){const t=performance.now(),e=Math.min(.35,Math.max(0,(t-this.wallPrev)/1e3));this.wallPrev=t;const n=Math.min(.05,this.clock.getDelta()||e);if(this.input.poll(n),this.syncPadChrome(),this.input.justConnected&&this.say(`${this.input.padLabel} ready — LS move, RS look`),this.mode==="hub"){this.hubConfirmGrace>0&&(this.hubConfirmGrace=Math.max(0,this.hubConfirmGrace-e));const r=this.hub.handlePad(this.input);if(this.hub.room==="plaza"){r||this.tickHubWalk(n);const o=this.hubConfirmGrace>0;if(this.input.confirm&&!r&&!o){this.interactHubDoor(!0),this.input.endFrame();return}if(!r&&!o&&this.hubNear&&this.input.keys.has("KeyE")){this.interactHubDoor(!1),this.input.keys.delete("KeyE"),this.input.endFrame();return}if(o&&(this.input.confirm||this.input.keys.has("KeyE"))){this.input.keys.delete("KeyE"),this.input.endFrame();return}}if(this.syncPlazaHall(),this.syncPlazaPreview(),this.tickPlazaMannequinContinuity(Math.min(.05,e)),this.plazaPreview){const o=this.hub.laughing;this.plazaPreview.occupancy=o?"ticklee":"free",o?this.plazaPreview.stamina=this.plazaPreview.maxStamina*(1-this.hub.laughProgress):(this.plazaPreview.stamina=this.plazaPreview.maxStamina,this.hubLaughWas&&this.plazaPreview.softenIdleSheetEnter(.25)),this.hubLaughWas=o,this.plazaPreview.tickAnim(Math.min(.05,e)),this.plazaPreview.syncMesh()}this.scene.fog=new oi(1709588,32,80),this.hub.room==="plaza"?(this.aimHubWalkCamera(),this.plaza.updateDoorFx(this.clock.elapsedTime)):(this.plaza.setNear(null),this.aimPlazaCamera()),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug();return}if(this.mode==="results"){if(this.input.back||this.input.confirm){this.returnToPlaza("return");return}if(this.syncPlazaPreview(),this.tickPlazaMannequinContinuity(Math.min(.05,e)),this.plazaPreview){const o=this.hub.laughing;this.plazaPreview.occupancy=o?"ticklee":"free",o?this.plazaPreview.stamina=this.plazaPreview.maxStamina*(1-this.hub.laughProgress):(this.plazaPreview.stamina=this.plazaPreview.maxStamina,this.hubLaughWas&&this.plazaPreview.softenIdleSheetEnter(.25)),this.hubLaughWas=o,this.plazaPreview.tickAnim(Math.min(.05,e)),this.plazaPreview.syncMesh()}const r=this.clock.elapsedTime*.1;this.camera.position.set(Math.cos(r)*4,8,14),this.camera.lookAt(0,1.2,0),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug();return}const i=this.countdown<=0;if(this.countdown=Math.max(0,this.countdown-e),this.tickCountdownAudio(),this.countdown<=0&&(this.liveT+=e),(this.arenaMode==="team-timed"||this.arenaMode==="ffa-timed")&&i&&(this.timedLeft=Math.max(0,this.timedLeft-e)),this.countdown>0&&this.input.back){this.bailCountdown(),this.input.endFrame();return}!this.combatAnnounced&&this.countdown===0&&(this.combatAnnounced=!0,this.liftCountdownIgnore(),this.say(this.isFfa()?"Combat live — every other rim is a rival. Mid lane, get behind — tickle starts.":"Combat live — amber ring at their back. Walk in — tickle starts."));for(const[r,o]of[...this.pairCd.entries()]){const l=o-e;l<=0?this.pairCd.delete(r):this.pairCd.set(r,l)}this.applyLook();let a=e;for(;a>1e-4;){const r=Math.min(.05,a);this.tickNudge(r),this.tickPlayer(r);for(const o of this.fighters)o.isPlayer||JU(o,this.fighters,this.map,r,this.countdown,this.liveT,(l,c)=>this.startTickle(l,c),(l,c)=>this.tryJoin(l,c),l=>{l.wantTickle=!0},l=>{l.wantEscape=!0},performance.now());this.resolveTaps(),this.tickCombatState(r),a-=r}this.updateVisibility();for(const r of this.fighters){if((r.occupancy==="tickler"||r.occupancy==="nudge"&&r.joinOn>=0)&&r.joinOn>=0){const o=this.byId(r.joinOn);if(o&&o.maxStamina>0){const l=Math.max(0,Math.min(100,100-100*o.stamina/o.maxStamina))/100,c=l<.5?.5*Math.pow(l*2,yc):1-.5*Math.pow((1-l)*2,yc),h=(this.joinList.get(o.id)??[]).length,u=Math.min(l_,Math.max(0,h-1)*o_);r.tickleIntensity=Math.max(.01,Math.min(100,(c+u)*100))}else r.tickleIntensity=0}else r.tickleIntensity=0;r.tickAnim(Math.min(.05,e)),r.syncMesh()}this.updateCamera(),this.updateHud(e),this.checkWin(),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug()}liftCountdownIgnore(){for(const t of this.fighters)t.spawnIgnore=0,t.contactEdge.clear();for(let t=0;t<this.fighters.length;t++){const e=this.fighters[t];for(let n=t+1;n<this.fighters.length;n++){const i=this.fighters[n];Ye(e,i)&&(an(e,i)||an(i,e)||(e.contactEdge.set(i.id,!0),i.contactEdge.set(e.id,!0)))}}}publishDebug(){const t=this.player,e=this.fighters.find(i=>i.bait),n=!!e&&t&&us(t,e,an(t,e))&&an(t,e);Object.assign(window,{__tb:()=>{var i,a,r;return{mode:this.mode,room:this.hub.room,hubPos:[+this.hubPos.x.toFixed(2),+this.hubPos.z.toFixed(2)],hubYaw:+this.hubYaw.toFixed(2),hubNear:this.hubNear,countdown:+this.countdown.toFixed(2),liveT:+this.liveT.toFixed(2),occ:t==null?void 0:t.occupancy,pos:t?[+t.pos.x.toFixed(2),+t.pos.z.toFixed(2)]:null,yaw:t?+t.yaw.toFixed(2):null,joinOn:t==null?void 0:t.joinOn,nudgeT:+this.nudgeT.toFixed(3),tickleHeld:this.input.tickleHeld,escapeHeld:this.input.escapeHeld,toast:this.toast,stam:t?+(100*(((i=this.byId(t.joinOn))==null?void 0:i.stamina)??t.stamina)/(((a=this.byId(t.joinOn))==null?void 0:a.maxStamina)??t.maxStamina)).toFixed(1):0,escape:(t==null?void 0:t.occupancy)==="ticklee"?+t.escape.toFixed(1):+(((r=this.byId((t==null?void 0:t.joinOn)??-1))==null?void 0:r.escape)??0).toFixed(1),vanishLeft:(t==null?void 0:t.vanishLeft)??0,reappearIgnore:t?+t.reappearIgnore.toFixed(2):0,spawnIgnore:t?+t.spawnIgnore.toFixed(2):0,rising:!!(e&&t&&this.risingBlocked(t,e)),pairCd:e&&t?+(this.pairCd.get(Pi(t.id,e.id))??0).toFixed(2):0,reappearFlash:t?+t.reappearFlash.toFixed(2):0,tickle:t?t.tickleDebug():null,vanishHud:(t==null?void 0:t.occupancy)==="vanished",bait:e?{name:e.name,occ:e.occupancy,pos:[+e.pos.x.toFixed(2),+e.pos.z.toFixed(2)],yaw:+e.yaw.toFixed(2),stam:+(100*e.stamina/e.maxStamina).toFixed(1),escape:+e.escape.toFixed(1),vanish:+e.vanishLeft.toFixed(1),reappearIgnore:+e.reappearIgnore.toFixed(2),reappearFlash:+e.reappearFlash.toFixed(2)}:null,rear:n,distBait:e&&t?+t.pos.distanceTo(e.pos).toFixed(2):null,coins:this.save.coins,look:this.save.look,weapon:this.save.weapon,armor:this.save.armor,ownedWeapons:this.save.ownedWeapons,ownedArmors:this.save.ownedArmors,padActive:this.input.padActive,padMove:[this.input.stickX,this.input.moveVec().x,this.input.moveVec().z],coinsEarned:this.coinsEarned,payouts:this.payouts,loadout:this.matchLoadout,lockedWeapon:this.matchWeapon,lockedArmor:this.matchArmor,hub:this.hub.debugPad(),result:this.result}},__tbLaugh:()=>{const i=a=>a?{name:a.name,occ:a.occupancy,stam:+(100*a.stamina/Math.max(1,a.maxStamina)).toFixed(1),frame:a.laughFrameIndex,fps:+a.laughFps.toFixed(2)}:null;return{preview:i(this.plazaPreview),ticklees:this.fighters.filter(a=>a.occupancy==="ticklee").map(i),bills:this.fighters.map(a=>({name:a.name,occ:a.occupancy,clip:a.locomotionClip(),w:a.portraitSprite?+a.portraitSprite.scale.x.toFixed(2):null,h:a.portraitSprite?+a.portraitSprite.scale.y.toFixed(2):null,x:a.portraitSprite?+a.portraitSprite.position.x.toFixed(2):null,y:a.portraitSprite?+a.portraitSprite.position.y.toFixed(2):null}))}},__tbLaughStam:i=>{for(const a of this.fighters)!a.isPlayer&&a.occupancy==="ticklee"&&(a.stamina=a.maxStamina*Math.max(0,Math.min(100,i))/100)},__tbHold:i=>{for(const a of i)this.input.keys.add(a);(i.includes("KeyT")||i.includes("Space"))&&(this.input.tickle=!0,this.input.tickleHeld=!0),i.includes("KeyE")&&(this.input.escape=!0,this.input.escapeHeld=!0),i.includes("KeyQ")&&(this.input.releaseHeld=!0)},__tbRelease:()=>{this.input.keys.clear(),this.input.tickleHeld=!1,this.input.escapeHeld=!1},__tbFaceLane:()=>{this.player&&(this.player.yaw=-Math.PI/2,this.player.pitch=0)},__tbForceResults:()=>{if(this.mode==="play"){for(const i of this.fighters)!i.isPlayer&&i.team!==this.player.team&&(i.occupancy="tapped");this.checkWin()}},__tbParkBehindBait:()=>{if(this.mode!=="play")return;const i=this.fighters.find(o=>o.bait&&_e(o)&&o.occupancy!=="vanished"),a=this.player;if(!i||!a)return;(this.map.inSpawnPocket(i.pos,i.team)||this.map.inSpawnPocket(i.pos,1-i.team))&&(this.place(i,new A(go,0,_o)),i.yaw=-Math.PI/2);const r=i.pos.clone().add(i.forward().multiplyScalar(-1.25));this.place(a,r),a.yaw=i.yaw,a.pitch=0,i.scriptHold=!0},__tbStartOnPlayer:()=>{if(this.mode!=="play"||this.countdown>0)return;const i=this.player;this.nudgeIds.includes(i.id)&&(this.nudgeT=0,this.nudgeIds=[]),(i.occupancy==="tickler"||i.occupancy==="nudge")&&this.release(i),i.occupancy==="nudge"&&(i.occupancy="free",i.joinOn=-1,i.targetId=-1);const a=this.fighters.find(l=>!l.isPlayer&&l.team!==i.team&&l.occupancy==="free"&&_e(l));if(!a||i.occupancy!=="free"&&i.occupancy!=="ticklee"||i.occupancy==="ticklee")return;const r=new A(0,0,0);this.place(i,r),i.yaw=-Math.PI/2,i.pitch=0;const o=i.pos.clone().add(i.forward().multiplyScalar(-1.15));this.place(a,o),a.yaw=i.yaw,a.scriptHold=!0,i.contactEdge.delete(a.id),a.contactEdge.delete(i.id),this.pairCd.delete(Pi(a.id,i.id)),this.startTickle(a,i)},__tbEndVanish:()=>{for(const i of this.fighters)i.occupancy==="vanished"&&(i.vanishLeft=.04)},__tbParkAway:()=>{if(this.mode!=="play")return;const i=this.player;if(i){this.place(i,this.map.spawnA.clone()),i.yaw=-Math.PI/2,i.pitch=0,i.contactEdge.clear();for(const a of this.fighters)a.contactEdge.delete(i.id)}},__tbForceWallCancel:()=>{if(this.mode!=="play"||this.countdown>0)return;const i=this.player,a=this.fighters.find(o=>o.bait&&_e(o)&&o.occupancy!=="vanished");if(!i||!a)return;i.occupancy==="tickler"&&this.release(i),(this.nudgeIds.includes(i.id)||this.nudgeIds.includes(a.id))&&(this.nudgeT=0,this.nudgeIds=[]),i.occupancy="free",i.joinOn=-1,a.occupancy="free",a.joinOn=-1,a.scriptHold=!0,this.place(a,this.map.spawnA.clone()),a.yaw=-Math.PI/2;const r=a.pos.clone().add(a.forward().multiplyScalar(-1.25));this.place(i,r),i.yaw=a.yaw,i.pitch=0,i.contactEdge.delete(a.id),a.contactEdge.delete(i.id),this.pairCd.delete(Pi(i.id,a.id)),this.startTickle(i,a)},__tbBenchBots:()=>{if(this.mode==="play"){this.nudgeT=0,this.nudgeIds=[];for(const i of this.fighters)if(!(i.isPlayer||i.bait)){if(i.occupancy==="tickler"&&this.release(i),i.occupancy==="ticklee"){const a=this.joinList.get(i.id)??[];for(const r of a){const o=this.byId(r);o&&(o.occupancy="free",o.joinOn=-1,o.targetId=-1)}this.joinList.delete(i.id),i.occupancy="free",i.joinOn=-1,i.targetId=-1}if(i.occupancy==="nudge"||i.occupancy==="free"){i.occupancy="free",i.joinOn=-1,i.targetId=-1;const a=(i.team===0?this.map.spawnA:this.map.spawnB).clone();this.place(i,a)}}}},__tbConnectPad:()=>$h(),__tbPad:i=>XU(i),__tbDisconnectPad:()=>qU()})}applyLook(){const t=this.player,e=this.input.consumeLook();t.occupancy==="ticklee"?this.lookPitch=hn.clamp(this.lookPitch+e.y,-.9,.6):t.occupancy!=="tapped"&&t.occupancy!=="spectate"&&(t.yaw-=e.x,t.pitch=hn.clamp(t.pitch-e.y,-1.2,1.1))}tickPlayer(t){const e=this.player;if(!(e.occupancy==="tickler"||e.occupancy==="ticklee"||e.occupancy==="nudge"||e.occupancy==="tapped")&&e.occupancy!=="spectate"){const i=this.input.moveVec(),a=e.occupancy==="vanished"?Bi*1.05:Bi,r=-Math.sin(e.yaw),o=-Math.cos(e.yaw),l=Math.cos(e.yaw),c=-Math.sin(e.yaw),h=(r*i.z+l*i.x)*a*t,u=(o*i.z+c*i.x)*a*t,d=this.map.resolve(e.pos.x+h,e.pos.z+u,e.pos.y);let p=d.x,g=d.z;if(this.countdown>0){const _=this.map.clampSpawnPocket(p,g,e.team);p=_.x,g=_.z}e.pos.x=p,e.pos.z=g,e.pos.y=this.map.groundY(e.pos.x,e.pos.z)}this.inNudgePile(e.id)||e.occupancy==="nudge"||(e.occupancy==="free"&&this.autoStartTickle(e),e.occupancy==="tickler"&&(this.input.tickle||this.input.tickleHeld)&&(e.wantTickle=!0),e.occupancy==="ticklee"&&(this.input.escape||this.input.escapeHeld)&&(e.wantEscape=!0),e.occupancy==="tickler"&&this.input.releaseHeld&&this.release(e))}resolveTaps(){for(const t of this.fighters)t.wantEscape&&this.tapEscape(t),t.wantEscape=!1;for(const t of this.fighters)t.wantTickle&&this.tapTickle(t),t.wantTickle=!1}inNudgePile(t){return this.nudgeT>0&&this.nudgeIds.includes(t)}autoStartTickle(t){if(this.countdown>0||this.inNudgePile(t.id)||t.occupancy!=="free")return;let e=null,n=1e9;for(const r of this.fighters){if(!this.canAutoTickle(t,r))continue;const o=t.pos.distanceTo(r.pos);o<n&&(n=o,e=r)}const a=this.fighters.find(r=>r.bait&&this.canAutoTickle(t,r))??e;a&&(a.occupancy==="ticklee"?this.tryJoin(t,a,!0):this.startTickle(t,a,!0))}canAutoTickle(t,e){if(this.startLocked(t,e)||this.risingBlocked(t,e)||t.team===e.team||!_e(e)||e.occupancy==="vanished")return!1;const n=an(t,e),i=this.packsOn()&&ds(this.fighters,t,e);return!n&&!i?!1:i&&(Ye(t,e)||us(t,e,!1))?!0:us(t,e,n)}startLocked(t,e){return!!(this.countdown>0||this.inNudgePile(t.id)||this.inNudgePile(e.id)||t.spawnIgnore>0||e.spawnIgnore>0||t.reappearIgnore>0||e.reappearIgnore>0||this.pairCd.has(Pi(t.id,e.id)))}tickNudge(t){if(this.nudgeIds.length===0){this.nudgeT=0;return}if(this.nudgeT>0){const e=pc,n=1-this.nudgeT/e,i=this.nudgeFrom.clone().lerp(this.nudgeTo,Math.min(1,n)),a=this.byId(this.nudgeIds[0]);if(a){const r=i.clone().sub(a.pos);r.y=0;for(const o of this.nudgeIds){const l=this.byId(o);l&&(l.pos.x+=r.x,l.pos.z+=r.z,l.pos.y=this.map.groundY(l.pos.x,l.pos.z),l.occupancy="nudge")}}this.nudgeT=Math.max(0,this.nudgeT-t)}this.nudgeT<=0&&this.finishNudge()}finishNudge(){const t=this.byId(this.nudgeIds[0]);if(!t)return;t.occupancy="ticklee";const e=this.joinList.get(t.id)??[];for(const n of e){const i=this.byId(n);i&&(i.occupancy="tickler",i.joinOn=t.id,i.targetId=t.id)}this.attachSockets(t),this.nudgeIds=[],this.nudgeT=0}startTickle(t,e,n=!1){if(this.startLocked(t,e)||t.team===e.team||!_e(t)||t.occupancy==="vanished"||t.occupancy==="ticklee"||e.occupancy==="vanished"||e.occupancy==="tapped"||this.pairCd.has(Pi(t.id,e.id)))return!1;const i=an(t,e),a=this.packsOn()&&ds(this.fighters,t,e);if(!us(t,e,i)&&!(a&&Ye(t,e))||this.risingBlocked(t,e))return!1;if(e.occupancy==="ticklee")return this.tryJoin(t,e,n);if(e.occupancy==="tickler"){if(e.isPlayer){const o=this.byId(e.joinOn);return o&&o.occupancy==="ticklee"&&t.team!==o.team?this.tryJoin(t,o,n):!1}return this.peel(t,e),!0}if(!a&&!i)return!1;const r=this.map.findNudge(e.pos,.95);return r?(this.beginDuel(e,t,r),!0):(this.pairCd.set(Pi(t.id,e.id),qg),t.isPlayer&&this.say("No clear space — tickle cancelled"),ca(90,.1,"sawtooth",.04),!1)}risingBlocked(t,e){return e.occupancy!=="free"?!1:!!(t.contactEdge.get(e.id)&&Ye(t,e))}beginDuel(t,e,n){this.joinList.set(t.id,[e.id]),this.firstTickler.set(t.id,e.id),e.targetId=t.id,e.joinOn=t.id;const i=[t,e];this.nudgeFrom.copy(t.pos),this.nudgeTo.copy(n),this.nudgeIds=i.map(a=>a.id),this.nudgeT=n.distanceTo(t.pos)<.08?.01:pc;for(const a of i)a.occupancy="nudge";t.escape=Math.min(t.escape,0),t.flashT=0,this.nudgeT<=.02&&this.finishNudge(),sD(),this.say(`${e.name} tickles ${t.name}`),e.isPlayer&&this.input.rumble(90,.45,.25)}tryJoin(t,e,n=!1){if(this.startLocked(t,e)||e.occupancy!=="ticklee"||t.team===e.team)return!1;const i=this.joinList.get(e.id)??[];if(i.includes(t.id))return!0;if(i.length>=this.joinCap())return t.isPlayer&&!n&&this.say(this.isFfa()?"FFA — no packs, hunt another rival":"Join cap 6 — pile is full"),!1;const a=t.isPlayer?ba:0;if(!Ye(t,e)&&t.pos.distanceTo(e.pos)>Ni+a)return!1;const r=this.packsOn()&&i.length>=1;if(i.length===0){if(!an(t,e)&&!r)return!1}else if(!r&&!an(t,e))return!1;const o=this.socketWorld(e,i.length);if(this.map.blockedAt(o.x,o.z,o.y,.55)){const l=this.map.findNudge(o,.55);if(!l)return!1;t.pos.copy(l)}else t.pos.copy(o);return i.push(t.id),this.joinList.set(e.id,i),t.occupancy="tickler",t.joinOn=e.id,t.targetId=e.id,t.isPlayer||(t.pileTimer=t.role==="sticky"?_c:gc),this.attachSockets(e),ca(280,.06),!0}peel(t,e){const n=e.joinOn,i=this.byId(n);i&&this.dropTickler(i,e),(e.occupancy==="tickler"||e.occupancy==="free"||e.occupancy==="nudge")&&(e.occupancy="free"),this.startTickle(t,e)}dropTickler(t,e){const n=(this.joinList.get(t.id)??[]).filter(i=>i!==e.id);this.joinList.set(t.id,n),e.occupancy="free",e.joinOn=-1,e.targetId=-1,e.isPlayer||(e.pileTimer=Math.max(e.pileTimer,e.role==="sticky"?_c:gc)),n.length===0?(t.occupancy="free",this.joinList.delete(t.id)):this.attachSockets(t)}release(t){if(t.occupancy!=="tickler")return;const e=this.byId(t.joinOn);e&&this.dropTickler(e,t)}socketWorld(t,e){const n=[[0,.2,.85],[.75,.15,.15],[.6,.35,.2],[.2,-.55,.7],[0,.55,-.55],[.5,-.35,.25]][Math.min(e,5)],i=t.forward(),a=new A(i.z,0,-i.x);return t.pos.clone().add(i.multiplyScalar(n[2])).add(a.multiplyScalar(n[0])).add(new A(0,n[1],0))}attachSockets(t){(this.joinList.get(t.id)??[]).forEach((n,i)=>{const a=this.byId(n);if(!a)return;const r=this.socketWorld(t,i);a.pos.x=r.x,a.pos.z=r.z,a.pos.y=this.map.groundY(r.x,r.z);const o=t.pos.clone().sub(a.pos);a.yaw=Math.atan2(-o.x,-o.z)})}tapTickle(t){if(this.inNudgePile(t.id)||t.occupancy==="nudge"||t.occupancy!=="tickler"||t.tapCd>0)return;const e=this.byId(t.joinOn);if(!e||e.occupancy!=="ticklee")return;t.tapCd=fc;const a=(this.joinList.get(e.id)??[]).indexOf(t.id)===0?1:.5,r=t.ticklePower()*a;e.stamina=Math.max(0,e.stamina-r),e.regenWait=Qg,rD(),e.stamina<=0&&this.tapOut(e)}tapEscape(t){this.inNudgePile(t.id)||t.occupancy==="nudge"||t.occupancy==="ticklee"&&(t.tapCd>0||(t.tapCd=fc,t.escape=Math.min(100,t.escape+t.escapePower()),oD(),t.escape>=100&&this.vanish(t)))}vanish(t){const e=this.joinList.get(t.id)??[];for(const n of e){const i=this.byId(n);i&&(i.occupancy="free",i.joinOn=-1,i.targetId=-1)}this.joinList.delete(t.id),this.nudgeT=0,this.nudgeIds=[],t.occupancy="vanished",t.escape=0,t.vanishLeft=Wg,t.group.visible=!1;for(const[n]of[...this.pairCd.entries()])(n.startsWith(`${t.id}:`)||n.endsWith(`:${t.id}`))&&this.pairCd.delete(n);lD(),this.firstTickler.delete(t.id),t.isPlayer&&this.say("Vanished — map only, 20s"),this.checkWin()}tapOut(t){const e=this.joinList.get(t.id)??[],n=this.firstTickler.get(t.id)??e[0],i=n!=null?this.byId(n):void 0;if(i&&i.occupancy!=="tapped"&&i.occupancy!=="spectate"&&(this.award(i,3,"opener",t.name),!this.isFfa()))for(const a of e){if(a===i.id)continue;const r=this.byId(a);r&&this.award(r,1,"assist",t.name)}this.firstTickler.delete(t.id);for(const a of e){const r=this.byId(a);r&&(r.occupancy="free",r.joinOn=-1)}if(this.joinList.delete(t.id),this.arenaMode==="team-timed"){i&&i.team!==t.team&&(this.tapScore[i.team]+=1),yr(),this.say(`${t.name} tapped out`),this.respawn(t);return}if(this.arenaMode==="ffa-timed"){i&&this.ffaScore.set(i.id,(this.ffaScore.get(i.id)??0)+1),yr(),this.say(`${t.name} tapped out`),this.respawn(t);return}t.occupancy=t.isPlayer?"spectate":"tapped",t.stamina=0,t.group.visible=!0,t.body.rotation.x=.2,yr(),this.say(`${t.name} tapped out`),this.checkWin()}respawn(t){if(t.occupancy="free",t.joinOn=-1,t.targetId=-1,t.escape=0,t.vanishLeft=0,t.reappearIgnore=0,t.reappearFlash=0,t.stamina=t.maxStamina,t.spawnIgnore=Yg,t.body.rotation.x=0,t.group.visible=!0,this.isFfa()){let e=this.map.soloPads[t.team]??this.map.soloPads[0],n=e,i=-1;for(const a of this.map.soloPads){let r=1e9;for(const o of this.fighters)o.id!==t.id&&(r=Math.min(r,o.pos.distanceTo(a)));r>i&&(i=r,n=a)}e=n,this.place(t,e.clone()),t.yaw=Tr(e,new A)}else{const e=(t.team===0?this.map.spawnA:this.map.spawnB).clone();e.x+=(Math.random()-.5)*1.6,e.z+=(Math.random()-.5)*1.6,this.place(t,e),t.yaw=t.team===0?-Math.PI/2:Math.PI/2}t.isPlayer&&(t.body.visible=!1)}award(t,e,n="opener",i=""){t.isPlayer&&(this.coinsEarned+=e,this.payouts.push({role:n,coins:e,victim:i}))}commitMatchRewards(){if(this.matchRewardsCommitted)return!1;this.matchRewardsCommitted=!0,this.save.coins+=this.coinsEarned;const t=Math.max(15,this.coinsEarned*8+(this.result==="Victory"?40:10));this.save.xp=(this.save.xp??0)+t;let e=!1;for(;this.save.level<10;){const n=100+20*(this.save.level-1);if(this.save.xp<n)break;this.save.xp-=n,this.save.level+=1,this.save.unspent+=1,e=!0}return this.save.level>=10&&(this.save.xp=0),this.persistSave(),e}tickCombatState(t){for(const e of this.fighters){if(e.tapCd=Math.max(0,e.tapCd-t),this.countdown<=0){e.spawnIgnore=Math.max(0,e.spawnIgnore-t);const n=e.reappearIgnore>0;if(e.reappearIgnore=Math.max(0,e.reappearIgnore-t),n)for(const i of this.fighters)i.id!==e.id&&Ye(e,i)&&(e.contactEdge.set(i.id,!0),i.contactEdge.set(e.id,!0))}if(e.occupancy==="ticklee"){e.flashT+=t;const n=e.flashT%Zg<.18;e.rim.color.set(n?12868728:e.team===0?6211800:13935194),e.rim.intensity=n?5:2.2}else e.occupancy!=="vanished"&&(e.rim.color.set(e.team===0?6211800:13935194),e.rim.intensity=2.2);if(e.reappearFlash>0&&(e.reappearFlash=Math.max(0,e.reappearFlash-t),e.rim.color.set(16777215),e.rim.intensity=s_),e.occupancy==="vanished"){if(e.vanishLeft=Math.max(0,e.vanishLeft-t),e.vanishLeft<=0){e.occupancy="free",e.group.visible=!0,e.reappearIgnore=e_,e.reappearFlash=i_,(e.isPlayer||this.player.pos.distanceTo(e.pos)<n_)&&(aD(),this.say(e.isPlayer?"You reappeared":`${e.name} reappeared`));for(const i of this.fighters)i.id!==e.id&&Ye(i,e)&&(i.contactEdge.set(e.id,!0),e.contactEdge.set(i.id,!0))}}else e.occupancy==="free"&&(e.regenWait=Math.max(0,e.regenWait-t),e.regenWait<=0&&(e.stamina=Math.min(e.maxStamina,e.stamina+t_*t)));for(const[n,i]of[...e.contactEdge.entries()]){if(this.countdown>0){e.contactEdge.delete(n);continue}if(!i){e.contactEdge.delete(n);continue}const a=this.byId(n);(!a||!Ye(e,a))&&e.contactEdge.delete(n)}}}updateVisibility(){const t=this.player,e=t.occupancy==="vanished";for(const n of this.fighters){if(n.occupancy==="vanished"){n.group.visible=!1;continue}if(e&&n.id!==t.id){n.group.visible=!1;continue}n.group.visible=!0,n.isPlayer?n.body.visible=t.occupancy==="ticklee"||t.occupancy==="tapped":n.portraitSprite&&(n.body.visible=!1)}}updateCamera(){const t=this.player,e=innerWidth/innerHeight;if(this.camera.aspect=e,this.camera.updateProjectionMatrix(),t.occupancy==="spectate"||t.occupancy==="tapped"){const i=this.fighters.find(a=>a.team===t.team&&_e(a)&&!a.isPlayer)??this.fighters.find(a=>_e(a));if(i){const a=i.forward().multiplyScalar(-4);this.camera.position.copy(i.pos).add(a).add(new A(0,2.2,0)),this.camera.lookAt(i.pos.clone().add(new A(0,1.1,0)))}return}if(t.occupancy==="ticklee"){const n=t.forward(),i=n.clone().multiplyScalar(-2.4);this.camera.position.copy(t.pos).add(i).add(new A(0,1.7,0));const a=t.pos.clone().add(new A(0,1.05-this.lookPitch*.8,0)).add(n.multiplyScalar(.3));this.camera.lookAt(a);return}this.camera.position.copy(t.pos).add(new A(0,Ph,0)),this.camera.rotation.order="YXZ",this.camera.rotation.y=t.yaw,this.camera.rotation.x=t.pitch}updateFpTickle(t){const e=this.player,n=this.mode==="play"&&(e.occupancy==="tickler"||e.occupancy==="nudge"),i=this.hudEls["tickle-flash"];if(i&&i.classList.toggle("on",n),!this.fpArms)return;const a=n&&e.occupancy!=="spectate"&&e.occupancy!=="tapped"&&e.occupancy!=="ticklee";if(this.fpArms.visible=!!a,!a)return;this.fpArmT+=t;const r=Oh(e.slug),o=r.rate,l=r.twistRate,c=r.shoulderAmp,h=r.elbowAmp,u=r.weaponWag,d=Math.sin(this.fpArmT*o),p=Math.sin(this.fpArmT*l),g=this.fpArms.getObjectByName("fp-left"),_=this.fpArms.getObjectByName("fp-right");g&&(g.rotation.x=-.35+d*c,g.rotation.z=.25+p*(h*.28),g.position.y=-.28+Math.abs(d)*.04),_&&(_.rotation.x=-.28-d*(c*.9),_.rotation.z=-.22-p*(h*.24),_.position.y=-.3+Math.abs(p)*.035);const m=this.fpArms.getObjectByName("fp-weapon");m&&(m.rotation.z=d*u*.7,m.position.y=-.02+p*.02)}updateHud(t=.016){const e=this.player;this.updateFpTickle(t);const n=this.hudEls["stamina-fill"],i=this.hudEls["escape-fill"],r=(e.occupancy==="tickler"?this.byId(e.joinOn):(e.occupancy==="ticklee",e))??e;n.style.width=`${100*r.stamina/r.maxStamina}%`,i.style.width=`${r.escape}%`;const o=e.locomotionClip();if(this.hudEls["meta-left"].textContent=e.occupancy==="vanished"?`VANISH ${r.vanishLeft.toFixed(1)}s — map only`:`${r.name}  ·  ${r.occupancy}  ·  ${o}  ·  ${this.matchLoadout}`,this.hudEls["player-portrait"]){const w=this.hudEls["player-portrait"];w.dataset.clip=o,w.classList.toggle("running",o==="run"),w.classList.toggle("walking",o==="walk"),w.classList.toggle("tickling",e.occupancy==="tickler"||e.occupancy==="nudge"&&e.joinOn>=0)}this.hudEls["top-left"].textContent=this.countdown>0?"Spawn lock — bots parked · tickle at 0 · mid-lane amber waits":this.arenaMode==="team-timed"?`Team Timed  ·  ${zc(this.timedLeft)}`:this.arenaMode==="ffa-timed"?`FFA Timed  ·  ${zc(this.timedLeft)}`:this.arenaMode==="ffa-quick"?"FFA Quick  ·  one life":"Team Quick  ·  one life";const l=this.aliveCount(),c=this.fighters.filter(w=>_e(w)).length,h=this.ffaScore.get(e.id)??0;this.hudEls["meta-right"].textContent=this.arenaMode==="team-timed"?`TAPS CYAN ${this.tapScore[0]}  ·  AMBER ${this.tapScore[1]}  ·  coins +${this.coinsEarned}`:this.arenaMode==="ffa-timed"?`YOUR TAPS ${h}  ·  ${c} up  ·  coins +${this.coinsEarned}`:this.isFfa()?`${c} standing  ·  coins +${this.coinsEarned}`:`CYAN ${l[0]}  ·  AMBER ${l[1]}  ·  coins +${this.coinsEarned}`;let u="";if(e.occupancy==="free")for(const w of this.fighters){if(w.team===e.team||!_e(w)||w.occupancy==="vanished")continue;const y=an(e,w);if(!us(e,w,y)&&e.pos.distanceTo(w.pos)>Ni+ba)continue;const D=Math.max(e.reappearIgnore,w.reappearIgnore),E=Math.max(e.spawnIgnore,w.spawnIgnore);if(D>0){u=`REAPPEAR LOCK  ·  ${D.toFixed(1)}s`;break}if(E>0){u=`SPAWN IGNORE  ·  ${E.toFixed(1)}s`;break}if(this.startLocked(e,w)||this.risingBlocked(e,w)){u="BREAK CONTACT — then rear/pack starts";break}if(this.packsOn()&&ds(this.fighters,e,w)){u=this.countdown>0?"PACK 2+ — tickle at 0":"PACK 2+ — tickle starts";break}if(y){u=this.countdown>0?"BEHIND — tickle at 0":"BEHIND — tickle starts";break}}this.hudEls["top-right"].textContent=this.countdown>0?u?`SPAWN LOCK  ·  ${u}`:this.input.padActive?"SPAWN LOCK  ·  B / View to leave":"SPAWN LOCK  ·  Leave countdown":e.occupancy==="vanished"?"VANISH — map only · clock is yours":e.occupancy==="ticklee"?this.input.padActive?"TAP B / LT  ESCAPE":"TAP ESCAPE":e.occupancy==="tickler"?this.input.padActive?"TAP A / RT  TICKLE":"TAP TICKLE":u||(this.input.padActive?"FP  ·  behind auto-tickle  A tickle  B escape  Y release":"FP  ·  behind auto-tickle  T tickle  E escape"),this.updateRadar(),this.updateRearCue();const d=e.occupancy==="vanished";this.hudEls.countdown.classList.toggle("vanish-clock",d),d?(this.hudEls.countdown.style.display="block",this.hudEls.countdown.textContent=String(Math.ceil(e.vanishLeft))):(this.hudEls.countdown.style.display=this.countdown>0?"block":"none",this.hudEls.countdown.textContent=this.countdown>0?String(Math.ceil(this.countdown)):""),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display=this.countdown>0?"block":"none");const p=this.hudEls.face,g=this.hudEls["face-still"],_=e.occupancy==="ticklee"||e.occupancy==="tickler"&&r.occupancy==="ticklee";if(p.style.display=_?"block":"none",g){const w=r.keyedPortrait||r.portraitUrl;if(_&&w){g.src=w,g.style.display="block";const y=p.querySelector(".head");y&&(y.style.display="none")}else{g.style.display="none";const y=p.querySelector(".head");y&&(y.style.display="block")}}const m=this.hudEls["btn-tickle"],f=this.hudEls["btn-escape"];m.disabled=e.occupancy!=="tickler",f.disabled=e.occupancy!=="ticklee";const M=this.input.padActive;if(m.textContent=M?"Tickle  A":"Tickle",f.textContent=M?"Escape  B":"Escape",this.hudEls["player-portrait"]){const w=e.occupancy==="tickler"||e.occupancy==="nudge"&&e.joinOn>=0,y=e.occupancy==="ticklee",D=e.locomotionClip(),E=w&&e.tickleFramePortrait||y&&e.laughFramePortrait||(D==="run"||D==="walk")&&e.runFramePortrait||e.keyedPortrait||e.portraitUrl,C=this.hudEls["player-portrait"];E?(C.src=E,C.style.display="block"):C.style.display="none",C.classList.toggle("tickling",!!w)}this.hudEls.crosshair&&(this.hudEls.crosshair.style.display=e.occupancy==="ticklee"||e.occupancy==="spectate"||e.occupancy==="tapped"?"none":"block"),this.toastT-=t||.016,this.hudEls.toast.style.display=this.toastT>0?"block":"none",this.hudEls.toast.textContent=this.toast}updateRearCue(){const t=this.player;if(this.mode!=="play"||t.occupancy!=="free"||!this.map.group.visible){this.rearCue.visible=!1;return}const e=Ni+ba;let n=null,i=!1,a=null,r=5.2;for(const h of this.fighters){if(h.team===t.team||!_e(h)||h.occupancy==="vanished")continue;const u=t.pos.distanceTo(h.pos);if(u<r&&(r=u,a=h),!(u>e)){if(this.packsOn()&&ds(this.fighters,t,h)){n=h,i=!0;break}an(t,h)&&(n=h)}}const o=n??a;if(!o){this.rearCue.visible=!1;return}const l=i?o.pos:o.pos.clone().add(o.forward().multiplyScalar(-.82));this.rearCue.position.set(l.x,o.pos.y+.05,l.z);const c=this.rearCue.material;c.color.set(i?6211800:this.isFfa()?12868728:13935194),c.opacity=n?this.countdown>0?.7:.92:.45,this.rearCue.visible=!0}updateRadar(){const t=this.hudEls.radar;if(!t)return;const e=this.player;if(e.occupancy==="ticklee"||e.occupancy==="spectate"||e.occupancy==="tapped"||e.occupancy==="vanished"){t.style.display="none";return}t.style.display="flex";let n=null,i=1e9;const a=this.fighters.find(u=>u.bait&&_e(u)&&u.occupancy!=="vanished");for(const u of this.fighters){if(u.team===e.team||!_e(u)||u.occupancy==="vanished")continue;const d=e.pos.distanceToSquared(u.pos);d<i&&(i=d,n=u)}a&&e.pos.distanceTo(a.pos)<18&&(n=a,i=e.pos.distanceToSquared(a.pos));const r=this.overlay.querySelector("#radar-copy"),o=t.querySelector(".needle");if(!n){r&&(r.textContent=this.isFfa()?"No rival up":"No amber up");return}const l=Math.sqrt(i),c=n.pos.clone().sub(e.pos),h=Math.atan2(-c.x,-c.z)-e.yaw;if(o&&(o.style.transform=`rotate(${h*180/Math.PI}deg)`),r){const u=this.isFfa()?"rival":"amber";r.textContent=l<1.4?this.packsOn()&&ds(this.fighters,e,n)?`${n.name}  ·  pack 2+ · tickle starts`:`${n.name}  ·  behind · tickle starts`:n.bait?`${n.name}  ·  mid-lane bait  ·  ${l.toFixed(0)}m amber`:`${n.name}  ·  ${l.toFixed(0)}m ${u}`}}aliveCount(){const t=this.fighters.filter(n=>n.team===0&&_e(n)).length,e=this.fighters.filter(n=>n.team===1&&_e(n)).length;return[t,e]}checkWin(){var r,o,l;if(this.mode!=="play")return;let t="",e=!1,n="";if(this.arenaMode==="team-timed"){if(this.timedLeft>0)return;const[c,h]=this.tapScore;c===h?(t="DRAW",e=!1,n=`Timer ended even at ${c}–${h} tap-outs.`):c>h?(t="CYAN",e=this.player.team===0,n=`CYAN ${c} tap-outs to AMBER ${h}.`):(t="AMBER",e=this.player.team===1,n=`AMBER ${h} tap-outs to CYAN ${c}.`)}else if(this.arenaMode==="ffa-timed"){if(this.timedLeft>0)return;let c=0;for(const d of this.fighters)c=Math.max(c,this.ffaScore.get(d.id)??0);const h=this.fighters.filter(d=>(this.ffaScore.get(d.id)??0)===c),u=this.ffaScore.get(this.player.id)??0;c===0||h.length!==1?(t="DRAW",e=!1,n=`FFA timer ended. Top taps ${c}. Yours ${u}.`):(e=h[0].isPlayer,t=e?"ELARA":h[0].name,n=`FFA Timed · ${t} leads with ${c} taps · you ${u}.`)}else if(this.isFfa()){const c=this.fighters.filter(h=>_e(h));if(c.length>1)return;e=!!((r=c[0])!=null&&r.isPlayer),t=e?"ELARA":((o=c[0])==null?void 0:o.name)??"RIVAL",n=`${t} last standing. FFA Quick.`}else{const[c,h]=this.aliveCount();if(c>0&&h>0)return;t=c>0?"CYAN":"AMBER",e=this.player.team===0&&c>0||this.player.team===1&&h>0,n=`${t} still has fighters up. Last team standing.`}for(const c of this.fighters)c.occupancy==="vanished"&&(c.occupancy="free",c.vanishLeft=0);this.mode="results",this.map.group.visible=!1,this.plaza.group.visible=!0,this.scene.fog=new oi(1709588,32,80),this.result=t==="DRAW"?"Draw":e?"Victory":"Defeat",this.hudEls.top&&(this.hudEls.top.style.display="none"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="none"),this.hudEls.radar&&(this.hudEls.radar.style.display="none"),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display="none"),this.rearCue.visible=!1;const i=this.commitMatchRewards();this.clearFighters(),this.result==="Draw"?ca(220,.15):e?cD():hD(),this.hudEls.results.style.display="flex",this.hudEls.hud.style.display="none";const a=this.overlay.querySelector("#result-copy");if(a){const c=this.save.level<10?100+20*(this.save.level-1):0,h=i?`Level ${this.save.level}  ·  +1 skill point (${this.save.unspent} unspent)  ·  XP ${this.save.xp}/${c||"—"}`:this.save.level>=10?`Level 10 cap  ·  ${this.save.unspent} unspent`:`Level ${this.save.level}  ·  XP ${this.save.xp}/${c}  ·  ${this.save.unspent} unspent`;a.innerHTML=`<h1>${this.result}</h1>
        <p class="sub">${n}</p>
        <ul class="payouts">${this.payoutItems()}</ul>
        <p class="statline">${h}</p>
        <p class="hint">Match loadout locked as ${this.matchLoadout}. Spend new points in Home. Return writes you back to the plaza.</p>`}(l=document.exitPointerLock)==null||l.call(document)}payoutItems(){if(this.payouts.length===0)return`<li>0 coins this match. Bank ${this.save.coins}.</li><li>First tickler +3 from the tick-start opener. Team assists +1.</li>`;const t=this.payouts.map(e=>e.role==="opener"?`<li>+${e.coins} first tickler vs ${e.victim}</li>`:`<li>+${e.coins} assist vs ${e.victim}</li>`);return t.push(`<li>Bank ${this.save.coins} coins.</li>`),t.join("")}payoutLines(){return this.payouts.length===0?`0 coins this match. Bank ${this.save.coins}. First tickler +3, assists +1 (team).`:`${this.payouts.map(e=>e.role==="opener"?`+${e.coins} first tickler vs ${e.victim}`:`+${e.coins} assist vs ${e.victim}`).join(" · ")}. Bank ${this.save.coins}.`}syncPadChrome(){this.overlay.classList.toggle("pad-live",this.input.padActive);const t=this.hudEls["pad-status"];t&&(t.textContent=this.input.padActive?`${this.input.padLabel} connected — A or Menu to play`:"Xbox first: connect a controller and press any button.",t.classList.toggle("on",this.input.padActive));const e=this.hudEls["again-hint"];e&&(e.textContent=this.input.padActive?"B, A, or Menu — return to plaza":"Click Return, or press B / Menu on a pad."),this.mode!=="play"&&this.hudEls.toast&&(this.toastT>0&&(this.toastT-=.016),this.hudEls.toast.style.display=this.toastT>0?"block":"none",this.hudEls.toast.textContent=this.toast)}say(t){this.toast=t,this.toastT=2.2}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}}function Oc(){try{const s=localStorage.getItem(Xh),t=bc(s?JSON.parse(s):null);return Eo(t),t}catch{const s=bc(null);return Eo(s),s}}function Eo(s){localStorage.setItem(Xh,JSON.stringify(s))}function zc(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}function Tr(s,t){const e=t.x-s.x,n=t.z-s.z;return e*e+n*n<1e-6?0:Math.atan2(-e,-n)}function AD(){const s=new Qt;s.name="fp-arms";const t=new Te({color:12886160,roughness:.55,metalness:0}),e=new Te({color:3812920,roughness:.75,metalness:0}),n=(r,o)=>{const l=new Qt;l.name=r;const c=new yt(new Gn(.045,.22,3,6),t);c.rotation.x=Math.PI/2,c.position.set(0,0,-.14);const h=new yt(new Gn(.038,.2,3,6),t);h.rotation.x=Math.PI/2,h.position.set(0,-.02,-.36);const u=new yt(new Cs(.055,8,6),t);u.position.set(0,-.02,-.5);const d=new yt(new Gn(.05,.08,2,6),e);return d.rotation.x=Math.PI/2,d.position.set(0,.02,-.06),l.add(c,h,u,d),l.position.set(o*.28,-.32,-.45),l.rotation.x=-.3,l.rotation.z=-o*.2,l};s.add(n("fp-left",-1)),s.add(n("fp-right",1));const i=new Qt;i.name="fp-weapon";const a=new yt(new Wt(.1,.04,.12),new Te({color:6965818,roughness:.85,metalness:0}));return a.position.set(.28,-.34,-.52),i.add(a),s.add(i),s}function RD(){return`
  <div id="boot">
    <div class="card panel">
      <div id="hub-root"></div>
    </div>
  </div>
  <div id="results" style="display:none">
    <div class="card panel">
      <div id="result-copy"></div>
      <div class="row"><button class="cta" id="again">Return to plaza</button></div>
      <p class="hint" id="again-hint">Click Return, or press B / Menu on a pad.</p>
    </div>
  </div>
  <div id="top">
    <div class="banner" id="top-left"></div>
    <div class="banner" id="top-right"></div>
  </div>
  <div id="countdown"></div>
  <div id="crosshair"></div>
  <div id="tickle-flash" aria-hidden="true"></div>
  <div id="radar"><span class="needle">▲</span><span id="radar-copy"></span></div>
  <div id="toast"></div>
  <div id="face"><img id="face-still" alt="" /><div class="head"><span class="eye" style="left:18px"></span><span class="eye" style="right:18px"></span><span class="mouth"></span></div></div>
  <div id="hud" style="display:none">
    <img id="player-portrait" alt="Elara Case" />
    <div class="meta"><span id="meta-left"></span><span id="meta-right"></span></div>
    <div class="bars">
      <div class="bar stamina"><div class="fill" id="stamina-fill"></div><label>Stamina</label></div>
      <div class="bar"><div class="fill" id="escape-fill"></div><label>Escape</label></div>
    </div>
    <div id="actions">
      <button id="btn-tickle">Tickle</button>
      <button id="btn-escape">Escape</button>
    </div>
    <button type="button" class="cta ghost" id="btn-leave">Leave countdown (no coins)</button>
  </div>
  <div id="stick"><div class="knob"></div></div>
  <div id="lookzone"></div>
  `}const qh=document.querySelector("#app");if(!qh)throw new Error("#app missing");new TD(qh);
