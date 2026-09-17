var Rh=Object.defineProperty;var Ch=(s,t,e)=>t in s?Rh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var P=(s,t,e)=>Ch(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="170",Ph=0,Go=1,Lh=2,Tc=1,Dh=2,pn=3,Bn=0,Le=1,He=2,Nn=0,Ti=1,$o=2,Wo=3,Xo=4,Ih=5,Jn=100,Uh=101,Nh=102,Fh=103,kh=104,Oh=200,Bh=201,zh=202,Hh=203,fr=204,pr=205,Vh=206,Gh=207,$h=208,Wh=209,Xh=210,qh=211,Yh=212,jh=213,Kh=214,mr=0,gr=1,_r=2,Ui=3,vr=4,yr=5,xr=6,Mr=7,Rc=0,Jh=1,Zh=2,Fn=0,Qh=1,tu=2,eu=3,nu=4,iu=5,su=6,au=7,Cc=300,Ni=301,Fi=302,Sr=303,br=304,ga=306,Er=1e3,ti=1001,wr=1002,Je=1003,ru=1004,Cs=1005,sn=1006,Ma=1007,ei=1008,xn=1009,Pc=1010,Lc=1011,ys=1012,ho=1013,ni=1014,mn=1015,Es=1016,uo=1017,fo=1018,ki=1020,Dc=35902,Ic=1021,Uc=1022,Ke=1023,Nc=1024,Fc=1025,Ri=1026,Oi=1027,kc=1028,po=1029,Oc=1030,mo=1031,go=1033,aa=33776,ra=33777,oa=33778,la=33779,Ar=35840,Tr=35841,Rr=35842,Cr=35843,Pr=36196,Lr=37492,Dr=37496,Ir=37808,Ur=37809,Nr=37810,Fr=37811,kr=37812,Or=37813,Br=37814,zr=37815,Hr=37816,Vr=37817,Gr=37818,$r=37819,Wr=37820,Xr=37821,ca=36492,qr=36494,Yr=36495,Bc=36283,jr=36284,Kr=36285,Jr=36286,ou=3200,lu=3201,zc=0,cu=1,In="",Pe="srgb",Hi="srgb-linear",_a="linear",Kt="srgb",ri=7680,qo=519,hu=512,uu=513,du=514,Hc=515,fu=516,pu=517,mu=518,gu=519,Zr=35044,Yo="300 es",gn=2e3,fa=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jo=1234567;const ls=Math.PI/180,xs=180/Math.PI;function vn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function _o(s,t){return(s%t+t)%t}function _u(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function vu(s,t,e){return s!==t?(e-s)/(t-s):0}function cs(s,t,e){return(1-e)*s+e*t}function yu(s,t,e,n){return cs(s,t,1-Math.exp(-e*n))}function xu(s,t=1){return t-Math.abs(_o(s,t*2)-t)}function Mu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Su(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function bu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Eu(s,t){return s+Math.random()*(t-s)}function wu(s){return s*(.5-Math.random())}function Au(s){s!==void 0&&(jo=s);let t=jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tu(s){return s*ls}function Ru(s){return s*xs}function Cu(s){return(s&s-1)===0&&s!==0}function Pu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Du(s,t,e,n,i){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),u=a((t-n)/2),d=r((t-n)/2),f=a((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wi={DEG2RAD:ls,RAD2DEG:xs,generateUUID:vn,clamp:ve,euclideanModulo:_o,mapLinear:_u,inverseLerp:vu,lerp:cs,damp:yu,pingpong:xu,smoothstep:Mu,smootherstep:Su,randInt:bu,randFloat:Eu,randFloatSpread:wu,seededRandom:Au,degToRad:Tu,radToDeg:Ru,isPowerOfTwo:Cu,ceilPowerOfTwo:Pu,floorPowerOfTwo:Lu,setQuaternionFromProperEuler:Du,normalize:jt,denormalize:je};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,i,a,r,o,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],b=i[4],M=i[7],F=i[2],A=i[5],R=i[8];return a[0]=r*_+o*E+l*F,a[3]=r*m+o*b+l*A,a[6]=r*p+o*M+l*R,a[1]=c*_+h*E+u*F,a[4]=c*m+h*b+u*A,a[7]=c*p+h*M+u*R,a[2]=d*_+f*E+g*F,a[5]=d*m+f*b+g*A,a[8]=d*p+f*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*a,f=c*a-r*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*r)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*a-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Dt;function Vc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Iu(){const s=Ms("canvas");return s.style.display="block",s}const Ko={};function rs(s){s in Ko||(Ko[s]=!0,console.warn(s))}function Uu(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Nu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Kt&&(s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Kt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?_a:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function yn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ci(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Jo=[.64,.33,.3,.6,.15,.06],Zo=[.2126,.7152,.0722],Qo=[.3127,.329],tl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),el=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Hi]:{primaries:Jo,whitePoint:Qo,transfer:_a,toXYZ:tl,fromXYZ:el,luminanceCoefficients:Zo,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Jo,whitePoint:Qo,transfer:Kt,toXYZ:tl,fromXYZ:el,luminanceCoefficients:Zo,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let oi;class ku{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=Ms("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=yn(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ou=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ba(i[r].image)):a.push(ba(i[r]))}else a=ba(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function ba(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bu=0;class we extends Vi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=ti,i=ti,a=sn,r=ei,o=Ke,l=xn,c=we.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=vn(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Er:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Er:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Cc;we.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(f+1)/2,F=(p+1)/2,A=(h+d)/4,R=(u+_)/4,L=(g+m)/4;return b>M&&b>F?b<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(b),i=A/n,a=R/n):M>F?M<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(M),n=A/i,a=L/i):F<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(F),n=R/a,i=L/a),this.set(n,i,a,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zu extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $c extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hu extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=a[r+0],f=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const F=Math.sqrt(b),A=Math.atan2(F,p*E);m=Math.sin(m*A)/F,o=Math.sin(o*A)/F}const M=o*E;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=a[r],d=a[r+1],f=a[r+2],g=a[r+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(a/2),d=l(n/2),f=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(r-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(a+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(a-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-a*i),u=2*(a*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=i+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new T,nl=new ws;class As{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,We):We.fromBufferAttribute(a,r),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),Ls.subVectors(this.max,Yi),li.subVectors(t.a,Yi),ci.subVectors(t.b,Yi),hi.subVectors(t.c,Yi),bn.subVectors(ci,li),En.subVectors(hi,ci),Vn.subVectors(li,hi);let e=[0,-bn.z,bn.y,0,-En.z,En.y,0,-Vn.z,Vn.y,bn.z,0,-bn.x,En.z,0,-En.x,Vn.z,0,-Vn.x,-bn.y,bn.x,0,-En.y,En.x,0,-Vn.y,Vn.x,0];return!wa(e,li,ci,hi,Ls)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,li,ci,hi,Ls))?!1:(Ds.crossVectors(bn,En),e=[Ds.x,Ds.y,Ds.z],wa(e,li,ci,hi,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new T,new T,new T,new T,new T,new T,new T,new T],We=new T,Ps=new As,li=new T,ci=new T,hi=new T,bn=new T,En=new T,Vn=new T,Yi=new T,Ls=new T,Ds=new T,Gn=new T;function wa(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Gn.fromArray(s,a);const o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Vu=new As,ji=new T,Aa=new T;class vo{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vu.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ji,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(Aa)),this.expandByPoint(ji.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new T,Ta=new T,Is=new T,wn=new T,Ra=new T,Us=new T,Ca=new T;class Wc{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ta.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Ta);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Is),o=wn.dot(this.direction),l=-wn.dot(Is),c=wn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ta).addScaledVector(Is,d),f}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),i=hn.dot(hn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,i,a){Ra.subVectors(e,t),Us.subVectors(n,t),Ca.crossVectors(Ra,Us);let r=this.direction.dot(Ca),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;wn.subVectors(this.origin,t);const l=o*this.direction.dot(Us.crossVectors(wn,Us));if(l<0)return null;const c=o*this.direction.dot(Ra.cross(wn));if(c<0||l+c>r)return null;const h=-o*wn.dot(Ca);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,a,r,o,l,c,h,u,d,f,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,a,r,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),a=1/ui.setFromMatrixColumn(t,1).length(),r=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,f=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-r*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=_-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*l,f=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gu,t,$u)}lookAt(t,e,n){const i=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),An.crossVectors(n,Ue),An.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),An.crossVectors(n,Ue)),An.normalize(),Ns.crossVectors(Ue,An),i[0]=An.x,i[4]=Ns.x,i[8]=Ue.x,i[1]=An.y,i[5]=Ns.y,i[9]=Ue.y,i[2]=An.z,i[6]=Ns.z,i[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],b=n[7],M=n[11],F=n[15],A=i[0],R=i[4],L=i[8],S=i[12],x=i[1],C=i[5],H=i[9],O=i[13],$=i[2],K=i[6],W=i[10],Q=i[14],V=i[3],nt=i[7],ht=i[11],Mt=i[15];return a[0]=r*A+o*x+l*$+c*V,a[4]=r*R+o*C+l*K+c*nt,a[8]=r*L+o*H+l*W+c*ht,a[12]=r*S+o*O+l*Q+c*Mt,a[1]=h*A+u*x+d*$+f*V,a[5]=h*R+u*C+d*K+f*nt,a[9]=h*L+u*H+d*W+f*ht,a[13]=h*S+u*O+d*Q+f*Mt,a[2]=g*A+_*x+m*$+p*V,a[6]=g*R+_*C+m*K+p*nt,a[10]=g*L+_*H+m*W+p*ht,a[14]=g*S+_*O+m*Q+p*Mt,a[3]=E*A+b*x+M*$+F*V,a[7]=E*R+b*C+M*K+F*nt,a[11]=E*L+b*H+M*W+F*ht,a[15]=E*S+b*O+M*Q+F*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+a*l*u-i*c*u-a*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+a*r*d-i*r*f+i*c*h-a*l*h)+m*(+e*c*u-e*o*f-a*r*u+n*r*f+a*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,b=g*d*c-h*m*c-g*l*f+r*m*f+h*l*p-r*d*p,M=h*_*c-g*u*c+g*o*f-r*_*f-h*o*p+r*u*p,F=g*u*l-h*_*l-g*o*d+r*_*d+h*o*m-r*u*m,A=e*E+n*b+i*M+a*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=E*R,t[1]=(_*d*a-u*m*a-_*i*f+n*m*f+u*i*p-n*d*p)*R,t[2]=(o*m*a-_*l*a+_*i*c-n*m*c-o*i*p+n*l*p)*R,t[3]=(u*l*a-o*d*a-u*i*c+n*d*c+o*i*f-n*l*f)*R,t[4]=b*R,t[5]=(h*m*a-g*d*a+g*i*f-e*m*f-h*i*p+e*d*p)*R,t[6]=(g*l*a-r*m*a-g*i*c+e*m*c+r*i*p-e*l*p)*R,t[7]=(r*d*a-h*l*a+h*i*c-e*d*c-r*i*f+e*l*f)*R,t[8]=M*R,t[9]=(g*u*a-h*_*a-g*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(r*_*a-g*o*a+g*n*c-e*_*c-r*n*p+e*o*p)*R,t[11]=(h*o*a-r*u*a-h*n*c+e*u*c+r*n*f-e*o*f)*R,t[12]=F*R,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*o*i-r*_*i-g*n*l+e*_*l+r*n*m-e*o*m)*R,t[15]=(r*u*i-h*o*i+h*n*l-e*u*l-r*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,d=a*c,f=a*h,g=a*u,_=r*h,m=r*u,p=o*u,E=l*c,b=l*h,M=l*u,F=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*F,i[1]=(f+M)*F,i[2]=(g-b)*F,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(d+p))*A,i[6]=(m+E)*A,i[7]=0,i[8]=(g+b)*R,i[9]=(m-E)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=ui.set(i[0],i[1],i[2]).length();const r=ui.set(i[4],i[5],i[6]).length(),o=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const c=1/a,h=1/r,u=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=u,Xe.elements[9]*=u,Xe.elements[10]*=u,e.setFromRotationMatrix(Xe),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=gn){const l=this.elements,c=2*a/(e-t),h=2*a/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===gn)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===fa)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=gn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-a),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===gn)g=(r+a)*u,_=-2*u;else if(o===fa)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new T,Xe=new ie,Gu=new T(0,0,0),$u=new T(1,1,1),An=new T,Ns=new T,Ue=new T,il=new ie,sl=new ws;class an{constructor(t=0,e=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sl.setFromEuler(this),this.setFromQuaternion(sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wu=0;const al=new T,di=new ws,un=new ie,Fs=new T,Ki=new T,Xu=new T,qu=new ws,rl=new T(1,0,0),ol=new T(0,1,0),ll=new T(0,0,1),cl={type:"added"},Yu={type:"removed"},fi={type:"childadded",child:null},Pa={type:"childremoved",child:null};class ye extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new T,e=new an,n=new ws,i=new T(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Dt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(rl,t)}rotateY(t){return this.rotateOnAxis(ol,t)}rotateZ(t){return this.rotateOnAxis(ll,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rl,t)}translateY(t){return this.translateOnAxis(ol,t)}translateZ(t){return this.translateOnAxis(ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ki,Fs,this.up):un.lookAt(Fs,Ki,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),di.setFromRotationMatrix(un),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cl),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yu),Pa.child=t,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cl),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new T(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new T,dn=new T,La=new T,fn=new T,pi=new T,mi=new T,hl=new T,Da=new T,Ia=new T,Ua=new T,Na=new Zt,Fa=new Zt,ka=new Zt;class Ve{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qe.subVectors(t,e),i.cross(qe);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){qe.subVectors(i,e),dn.subVectors(n,e),La.subVectors(t,e);const r=qe.dot(qe),o=qe.dot(dn),l=qe.dot(La),c=dn.dot(dn),h=dn.dot(La),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,fn.x),l.addScaledVector(r,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(t,e,n,i,a,r){return Na.setScalar(0),Fa.setScalar(0),ka.setScalar(0),Na.fromBufferAttribute(t,e),Fa.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Na,a.x),r.addScaledVector(Fa,a.y),r.addScaledVector(ka,a.z),r}static isFrontFacing(t,e,n,i){return qe.subVectors(n,e),dn.subVectors(t,e),qe.cross(dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),qe.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;pi.subVectors(i,n),mi.subVectors(a,n),Da.subVectors(t,n);const l=pi.dot(Da),c=mi.dot(Da);if(l<=0&&c<=0)return e.copy(n);Ia.subVectors(t,i);const h=pi.dot(Ia),u=mi.dot(Ia);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(pi,r);Ua.subVectors(t,a);const f=pi.dot(Ua),g=mi.dot(Ua);if(g>=0&&f<=g)return e.copy(a);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(mi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return hl.subVectors(a,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(hl,o);const p=1/(m+_+d);return r=_*p,o=d*p,e.copy(n).addScaledVector(pi,r).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Oa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=_o(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Oa(r,a,t+1/3),this.g=Oa(r,a,t),this.b=Oa(r,a,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=Xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return $t.fromWorkingColorSpace(Se.copy(this),t),Math.round(ve(Se.r*255,0,255))*65536+Math.round(ve(Se.g*255,0,255))*256+Math.round(ve(Se.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,i=Se.g,a=Se.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-a)/u+(i<a?6:0);break;case i:l=(a-n)/u+2;break;case a:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Pe){$t.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,i=Se.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(ks);const n=cs(Tn.h,ks.h,e),i=cs(Tn.s,ks.s,e),a=cs(Tn.l,ks.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Ot;Ot.NAMES=Xc;let ju=0;class Gi extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=vn(),this.name="",this.blending=Ti,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=pr,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==pr&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends Gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new T,Os=new ct;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zr,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=je(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=je(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=je(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),a=jt(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zr&&(t.usage=this.usage),t}}class qc extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ku=0;const Be=new ie,Ba=new ye,gi=new T,Ne=new As,Ji=new As,ge=new T;class De extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vc(t)?Yc:qc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Dt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,i=e.count;n<i;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Ne.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ne.min,Ji.min),Ne.expandByPoint(ge),ge.addVectors(Ne.max,Ji.max),Ne.expandByPoint(ge)):(Ne.expandByPoint(Ji.min),Ne.expandByPoint(Ji.max))}Ne.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)ge.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(t,c),ge.add(gi)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new T,l[L]=new T;const c=new T,h=new T,u=new T,d=new ct,f=new ct,g=new ct,_=new T,m=new T;function p(L,S,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),d.fromBufferAttribute(a,L),f.fromBufferAttribute(a,S),g.fromBufferAttribute(a,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[L].add(_),o[S].add(_),o[x].add(_),l[L].add(m),l[S].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,S=E.length;L<S;++L){const x=E[L],C=x.start,H=x.count;for(let O=C,$=C+H;O<$;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new T,M=new T,F=new T,A=new T;function R(L){F.fromBufferAttribute(i,L),A.copy(F);const S=o[L];b.copy(S),b.sub(F.multiplyScalar(F.dot(S))).normalize(),M.crossVectors(A,S);const C=M.dot(l[L])<0?-1:1;r.setXYZW(L,b.x,b.y,b.z,C)}for(let L=0,S=E.length;L<S;++L){const x=E[L],C=x.start,H=x.count;for(let O=C,$=C+H;O<$;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,a=new T,r=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new ie,$n=new Wc,Bs=new vo,dl=new T,zs=new T,Hs=new T,Vs=new T,za=new T,Gs=new T,fl=new T,$s=new T;class St extends ye{constructor(t=new De,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){Gs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(za.fromBufferAttribute(u,t),r?Gs.addScaledVector(za,h):Gs.addScaledVector(za.sub(e),h))}e.add(Gs)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(a),$n.copy(t.ray).recast(t.near),!(Bs.containsPoint($n.origin)===!1&&($n.intersectSphere(Bs,dl)===null||$n.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(ul.copy(a).invert(),$n.copy(t.ray).applyMatrix4(ul),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,F=b;M<F;M+=3){const A=o.getX(M),R=o.getX(M+1),L=o.getX(M+2);i=Ws(this,p,t,n,c,h,u,A,R,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);i=Ws(this,r,t,n,c,h,u,E,b,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,F=b;M<F;M+=3){const A=M,R=M+1,L=M+2;i=Ws(this,p,t,n,c,h,u,A,R,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,b=m+1,M=m+2;i=Ws(this,r,t,n,c,h,u,E,b,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ju(s,t,e,n,i,a,r,o){let l;if(t.side===Le?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===Bn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:s}}function Ws(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,zs),s.getVertexPosition(l,Hs),s.getVertexPosition(c,Vs);const h=Ju(s,t,e,n,zs,Hs,Vs,fl);if(h){const u=new T;Ve.getBarycoord(fl,zs,Hs,Vs,u),i&&(h.uv=Ve.getInterpolatedAttribute(i,o,l,c,u,new ct)),a&&(h.uv1=Ve.getInterpolatedAttribute(a,o,l,c,u,new ct)),r&&(h.normal=Ve.getInterpolatedAttribute(r,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};Ve.getNormal(zs,Hs,Vs,d.normal),h.face=d,h.barycoord=u}return h}class te extends De{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,m,p,E,b,M,F,A,R,L,S){const x=M/R,C=F/L,H=M/2,O=F/2,$=A/2,K=R+1,W=L+1;let Q=0,V=0;const nt=new T;for(let ht=0;ht<W;ht++){const Mt=ht*C-O;for(let Nt=0;Nt<K;Nt++){const Qt=Nt*x-H;nt[_]=Qt*E,nt[m]=Mt*b,nt[p]=$,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Nt/R),u.push(1-ht/L),Q+=1}}for(let ht=0;ht<L;ht++)for(let Mt=0;Mt<R;Mt++){const Nt=d+Mt+K*ht,Qt=d+Mt+K*(ht+1),q=d+(Mt+1)+K*(ht+1),et=d+(Mt+1)+K*ht;l.push(Nt,Qt,et),l.push(Qt,q,et),V+=6}o.addGroup(f,V,S),f+=V,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const n=Bi(s[e]);for(const i in n)t[i]=n[i]}return t}function Zu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function jc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Qu={clone:Bi,merge:Te};var td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new T,pl=new ct,ml=new ct;class Fe extends Kc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,vi=1;class nd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(_i,vi,t,e);i.layers=this.layers,this.add(i);const a=new Fe(_i,vi,t,e);a.layers=this.layers,this.add(a);const r=new Fe(_i,vi,t,e);r.layers=this.layers,this.add(r);const o=new Fe(_i,vi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(_i,vi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(_i,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jc extends we{constructor(t,e,n,i,a,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class id extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new te(5,5,5),a=new zn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Nn});a.uniforms.tEquirect.value=e;const r=new St(i,a),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=sn),new nd(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const Ha=new T,sd=new T,ad=new Dt;class jn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ha.subVectors(n,e).cross(sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),i=this.coplanarPoint(Ha).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new vo,Xs=new T;class xo{constructor(t=new jn,e=new jn,n=new jn,i=new jn,a=new jn,r=new jn){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],b=i[14],M=i[15];if(n[0].setComponents(l-a,d-c,m-f,M-p).normalize(),n[1].setComponents(l+a,d+c,m+f,M+p).normalize(),n[2].setComponents(l+r,d+h,m+g,M+E).normalize(),n[3].setComponents(l-r,d-h,m-g,M-E).normalize(),n[4].setComponents(l-o,d-u,m-_,M-b).normalize(),e===gn)n[5].setComponents(l+o,d+u,m+_,M+b).normalize();else if(e===fa)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xs.x=i.normal.x>0?t.max.x:t.min.x,Xs.y=i.normal.y>0?t.max.y:t.min.y,Xs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function rd(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}class $i extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-r;for(let b=0;b<c;b++){const M=b*u-a;g.push(M,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const b=E+c*p,M=E+c*(p+1),F=E+1+c*(p+1),A=E+1+c*p;f.push(b,M,A),f.push(M,F,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.width,t.height,t.widthSegments,t.heightSegments)}}var od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ld=`#ifdef USE_ALPHAHASH
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
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md=`#ifdef USE_BATCHING
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
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xd=`#ifdef USE_IRIDESCENCE
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pd=`#define PI 3.141592653589793
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
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dd=`vec3 transformedNormal = objectNormal;
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
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
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
}`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
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
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
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
#endif`,rf=`struct PhysicalMaterial {
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
}`,of=`
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_f=`#if defined( USE_POINTS_UV )
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
#endif`,vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
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
#endif`,Lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xf=`float getShadowMask() {
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
}`,qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,Jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lp=`uniform sampler2D t2D;
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,pp=`#if DEPTH_PACKING == 3200
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
}`,mp=`#define DISTANCE
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
}`,gp=`#define DISTANCE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,Sp=`uniform vec3 diffuse;
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
}`,bp=`#define LAMBERT
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
}`,Ep=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Ap=`#define MATCAP
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
}`,Tp=`#define NORMAL
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
}`,Rp=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Pp=`#define PHONG
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
}`,Lp=`#define STANDARD
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
}`,Dp=`#define STANDARD
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
}`,Ip=`#define TOON
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
}`,Up=`#define TOON
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
}`,Np=`uniform float size;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,Bp=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:od,alphahash_pars_fragment:ld,alphamap_fragment:cd,alphamap_pars_fragment:hd,alphatest_fragment:ud,alphatest_pars_fragment:dd,aomap_fragment:fd,aomap_pars_fragment:pd,batching_pars_vertex:md,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:vd,bsdfs:yd,iridescence_fragment:xd,bumpmap_pars_fragment:Md,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:wd,color_fragment:Ad,color_pars_fragment:Td,color_pars_vertex:Rd,color_vertex:Cd,common:Pd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Id,displacementmap_vertex:Ud,emissivemap_fragment:Nd,emissivemap_pars_fragment:Fd,colorspace_fragment:kd,colorspace_pars_fragment:Od,envmap_fragment:Bd,envmap_common_pars_fragment:zd,envmap_pars_fragment:Hd,envmap_pars_vertex:Vd,envmap_physical_pars_fragment:Qd,envmap_vertex:Gd,fog_vertex:$d,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:jd,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Jd,lights_pars_begin:Zd,lights_toon_fragment:tf,lights_toon_pars_fragment:ef,lights_phong_fragment:nf,lights_phong_pars_fragment:sf,lights_physical_fragment:af,lights_physical_pars_fragment:rf,lights_fragment_begin:of,lights_fragment_maps:lf,lights_fragment_end:cf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:df,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:_f,metalnessmap_fragment:vf,metalnessmap_pars_fragment:yf,morphinstance_vertex:xf,morphcolor_vertex:Mf,morphnormal_vertex:Sf,morphtarget_pars_vertex:bf,morphtarget_vertex:Ef,normal_fragment_begin:wf,normal_fragment_maps:Af,normal_pars_fragment:Tf,normal_pars_vertex:Rf,normal_vertex:Cf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:If,iridescence_pars_fragment:Uf,opaque_fragment:Nf,packing:Ff,premultiplied_alpha_fragment:kf,project_vertex:Of,dithering_fragment:Bf,dithering_pars_fragment:zf,roughnessmap_fragment:Hf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:$f,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:qf,skinning_pars_vertex:Yf,skinning_vertex:jf,skinnormal_vertex:Kf,specularmap_fragment:Jf,specularmap_pars_fragment:Zf,tonemapping_fragment:Qf,tonemapping_pars_fragment:tp,transmission_fragment:ep,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:sp,uv_vertex:ap,worldpos_vertex:rp,background_vert:op,background_frag:lp,backgroundCube_vert:cp,backgroundCube_frag:hp,cube_vert:up,cube_frag:dp,depth_vert:fp,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:_p,equirect_frag:vp,linedashed_vert:yp,linedashed_frag:xp,meshbasic_vert:Mp,meshbasic_frag:Sp,meshlambert_vert:bp,meshlambert_frag:Ep,meshmatcap_vert:wp,meshmatcap_frag:Ap,meshnormal_vert:Tp,meshnormal_frag:Rp,meshphong_vert:Cp,meshphong_frag:Pp,meshphysical_vert:Lp,meshphysical_frag:Dp,meshtoon_vert:Ip,meshtoon_frag:Up,points_vert:Np,points_frag:Fp,shadow_vert:kp,shadow_frag:Op,sprite_vert:Bp,sprite_frag:zp},it={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},nn={basic:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Te([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Te([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Te([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Te([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Te([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Te([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Te([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Te([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Te([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Te([it.common,it.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Te([it.lights,it.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};nn.physical={uniforms:Te([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const qs={r:0,b:0,g:0},Xn=new an,Hp=new ie;function Vp(s,t,e,n,i,a,r){const o=new Ot(0);let l=a===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const M=g(E);M===null?p(o,l):M&&M.isColor&&(p(M,1),b=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,r):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===ga)?(h===void 0&&(h=new St(new te(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Bi(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xn.copy(b.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(Xn)),h.material.toneMapped=$t.getTransfer(M.colorSpace)!==Kt,(u!==M||d!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new St(new $i(2,2),new zn({name:"BackgroundMaterial",uniforms:Bi(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$t.getTransfer(M.colorSpace)!==Kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB(qs,jc(s)),n.buffers.color.setClear(qs.r,qs.g,qs.b,b,r)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m}}function Gp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let a=i,r=!1;function o(x,C,H,O,$){let K=!1;const W=u(O,H,C);a!==W&&(a=W,c(a.object)),K=f(x,O,H,$),K&&g(x,O,H,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,M(x,C,H,O),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,C,H){const O=H.wireframe===!0;let $=n[x.id];$===void 0&&($={},n[x.id]=$);let K=$[C.id];K===void 0&&(K={},$[C.id]=K);let W=K[O];return W===void 0&&(W=d(l()),K[O]=W),W}function d(x){const C=[],H=[],O=[];for(let $=0;$<e;$++)C[$]=0,H[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,C,H,O){const $=a.attributes,K=C.attributes;let W=0;const Q=H.getAttributes();for(const V in Q)if(Q[V].location>=0){const ht=$[V];let Mt=K[V];if(Mt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),ht===void 0||ht.attribute!==Mt||Mt&&ht.data!==Mt.data)return!0;W++}return a.attributesNum!==W||a.index!==O}function g(x,C,H,O){const $={},K=C.attributes;let W=0;const Q=H.getAttributes();for(const V in Q)if(Q[V].location>=0){let ht=K[V];ht===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const Mt={};Mt.attribute=ht,ht&&ht.data&&(Mt.data=ht.data),$[V]=Mt,W++}a.attributes=$,a.attributesNum=W,a.index=O}function _(){const x=a.newAttributes;for(let C=0,H=x.length;C<H;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const H=a.newAttributes,O=a.enabledAttributes,$=a.attributeDivisors;H[x]=1,O[x]===0&&(s.enableVertexAttribArray(x),O[x]=1),$[x]!==C&&(s.vertexAttribDivisor(x,C),$[x]=C)}function E(){const x=a.newAttributes,C=a.enabledAttributes;for(let H=0,O=C.length;H<O;H++)C[H]!==x[H]&&(s.disableVertexAttribArray(H),C[H]=0)}function b(x,C,H,O,$,K,W){W===!0?s.vertexAttribIPointer(x,C,H,$,K):s.vertexAttribPointer(x,C,H,O,$,K)}function M(x,C,H,O){_();const $=O.attributes,K=H.getAttributes(),W=C.defaultAttributeValues;for(const Q in K){const V=K[Q];if(V.location>=0){let nt=$[Q];if(nt===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),nt!==void 0){const ht=nt.normalized,Mt=nt.itemSize,Nt=t.get(nt);if(Nt===void 0)continue;const Qt=Nt.buffer,q=Nt.type,et=Nt.bytesPerElement,vt=q===s.INT||q===s.UNSIGNED_INT||nt.gpuType===ho;if(nt.isInterleavedBufferAttribute){const at=nt.data,At=at.stride,Ct=nt.offset;if(at.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft,at.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)m(V.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Ft=0;Ft<V.locationSize;Ft++)b(V.location+Ft,Mt/V.locationSize,q,ht,At*et,(Ct+Mt/V.locationSize*Ft)*et,vt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)p(V.location+at,nt.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let at=0;at<V.locationSize;at++)b(V.location+at,Mt/V.locationSize,q,ht,Mt*et,Mt/V.locationSize*at*et,vt)}}else if(W!==void 0){const ht=W[Q];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(V.location,ht);break;case 3:s.vertexAttrib3fv(V.location,ht);break;case 4:s.vertexAttrib4fv(V.location,ht);break;default:s.vertexAttrib1fv(V.location,ht)}}}}E()}function F(){L();for(const x in n){const C=n[x];for(const H in C){const O=C[H];for(const $ in O)h(O[$].object),delete O[$];delete C[H]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const H in C){const O=C[H];for(const $ in O)h(O[$].object),delete O[$];delete C[H]}delete n[x.id]}function R(x){for(const C in n){const H=n[C];if(H[x.id]===void 0)continue;const O=H[x.id];for(const $ in O)h(O[$].object),delete O[$];delete H[x.id]}}function L(){S(),r=!0,a!==i&&(a=i,c(a.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function $p(s,t,e){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wp(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==Ke&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==xn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mn&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:F,maxSamples:A}}function Xp(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new jn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||a&&!m)a?h(null):c();else{const E=a?0:n,b=E*4;let M=p.clippingState||null;l.value=M,M=h(g,d,b,f);for(let F=0;F!==b;++F)M[F]=e[F];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==_;++b,M+=4)r.copy(u[b]).applyMatrix4(E,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function qp(s){let t=new WeakMap;function e(r,o){return o===Sr?r.mapping=Ni:o===br&&(r.mapping=Fi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Sr||o===br)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new id(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Qc extends Kc{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ai=4,gl=[.125,.215,.35,.446,.526,.582],Zn=20,Va=new Qc,_l=new Ot;let Ga=null,$a=0,Wa=0,Xa=!1;const Kn=(1+Math.sqrt(5))/2,yi=1/Kn,vl=[new T(-Kn,yi,0),new T(Kn,yi,0),new T(-yi,0,Kn),new T(yi,0,Kn),new T(0,Kn,-yi),new T(0,Kn,yi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ga=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,$a,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Es,format:Ke,colorSpace:Hi,depthBuffer:!1},i=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(a)),this._blurMaterial=jp(a,t,e)}return i}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_l),h.toneMapping=Fn,h.autoClear=!1;const f=new si({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new St(new te,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(_l),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;Ys(i,E*b,p>2?b:0,b,b),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ni||t.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new St(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=vl[(i-a-1)%vl.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new St(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Zn-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):Zn;m>Zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const p=[];let E=0;for(let R=0;R<Zn;++R){const L=R/_,S=Math.exp(-L*L/2);p.push(S),R===0?E+=S:R<m&&(E+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const M=this._sizeLods[i],F=3*M*(i>b-Ai?i-b+Ai:0),A=4*(this._cubeSize-M);Ys(e,F,A,3*M,2*M),l.setRenderTarget(e),l.render(u,Va)}}function Yp(s){const t=[],e=[],n=[];let i=s;const a=s-Ai+1+gl.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>s-Ai?l=gl[r-s+Ai-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,L=A>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(S,_*g*A),b.set(d,m*g*A);const x=[A,A,A,A,A,A];M.set(x,p*g*A)}const F=new De;F.setAttribute("position",new Ze(E,_)),F.setAttribute("uv",new Ze(b,m)),F.setAttribute("faceIndex",new Ze(M,p)),t.push(F),i>Ai&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(s,t,e){const n=new ii(s,t,e);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jp(s,t,e){const n=new Float32Array(Zn),i=new T(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ml(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Sl(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function Kp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sr||l===br,h=l===Ni||l===Fi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new yl(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new yl(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Jp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zp(s,t,e,n){const i={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=a.get(d);f&&(t.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let b=0,M=E.length;b<M;b+=3){const F=E[b+0],A=E[b+1],R=E[b+2];d.push(F,A,A,R,R,F)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const F=b+0,A=b+1,R=b+2;d.push(F,A,A,R,R,F)}}else return;const m=new(Vc(d)?Yc:qc)(d,1);m.version=_;const p=a.get(u);p&&t.remove(p),a.set(u,m)}function h(u){const d=a.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Qp(s,t,e){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,f){s.drawElements(n,f,a,d*r),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,a,d*r,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function em(s,t,e){const n=new WeakMap,i=new Zt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let M=o.attributes.position.count*b,F=1;M>t.maxTextureSize&&(F=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*F*4*u),R=new $c(A,M,F,u);R.type=mn,R.needsUpdate=!0;const L=b*4;for(let x=0;x<u;x++){const C=m[x],H=p[x],O=E[x],$=M*F*4*x;for(let K=0;K<C.count;K++){const W=K*L;f===!0&&(i.fromBufferAttribute(C,K),A[$+W+0]=i.x,A[$+W+1]=i.y,A[$+W+2]=i.z,A[$+W+3]=0),g===!0&&(i.fromBufferAttribute(H,K),A[$+W+4]=i.x,A[$+W+5]=i.y,A[$+W+6]=i.z,A[$+W+7]=0),_===!0&&(i.fromBufferAttribute(O,K),A[$+W+8]=i.x,A[$+W+9]=i.y,A[$+W+10]=i.z,A[$+W+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new ct(M,F)},n.set(o,d),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function nm(s,t,e,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class th extends we{constructor(t,e,n,i,a,r,o,l,c,h=Ri){if(h!==Ri&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=ni),n===void 0&&h===Oi&&(n=ki),super(null,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eh=new we,bl=new th(1,1),nh=new $c,ih=new Hu,sh=new Jc,El=[],wl=[],Al=new Float32Array(16),Tl=new Float32Array(9),Rl=new Float32Array(4);function Wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=El[i];if(a===void 0&&(a=new Float32Array(i),El[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function va(s,t){let e=wl[t];e===void 0&&(e=new Int32Array(t),wl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function im(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function am(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function om(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Rl.set(n),s.uniformMatrix2fv(this.addr,!1,Rl),me(e,n)}}function lm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Tl.set(n),s.uniformMatrix3fv(this.addr,!1,Tl),me(e,n)}}function cm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Al.set(n),s.uniformMatrix4fv(this.addr,!1,Al),me(e,n)}}function hm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function pm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function _m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function vm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(bl.compareFunction=Hc,a=bl):a=eh,e.setTexture2D(t||a,i)}function ym(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ih,i)}function xm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sh,i)}function Mm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nh,i)}function Sm(s){switch(s){case 5126:return im;case 35664:return sm;case 35665:return am;case 35666:return rm;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Mm}}function bm(s,t){s.uniform1fv(this.addr,t)}function Em(s,t){const e=Wi(t,this.size,2);s.uniform2fv(this.addr,e)}function wm(s,t){const e=Wi(t,this.size,3);s.uniform3fv(this.addr,e)}function Am(s,t){const e=Wi(t,this.size,4);s.uniform4fv(this.addr,e)}function Tm(s,t){const e=Wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Rm(s,t){const e=Wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cm(s,t){const e=Wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Pm(s,t){s.uniform1iv(this.addr,t)}function Lm(s,t){s.uniform2iv(this.addr,t)}function Dm(s,t){s.uniform3iv(this.addr,t)}function Im(s,t){s.uniform4iv(this.addr,t)}function Um(s,t){s.uniform1uiv(this.addr,t)}function Nm(s,t){s.uniform2uiv(this.addr,t)}function Fm(s,t){s.uniform3uiv(this.addr,t)}function km(s,t){s.uniform4uiv(this.addr,t)}function Om(s,t,e){const n=this.cache,i=t.length,a=va(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||eh,a[r])}function Bm(s,t,e){const n=this.cache,i=t.length,a=va(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||ih,a[r])}function zm(s,t,e){const n=this.cache,i=t.length,a=va(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||sh,a[r])}function Hm(s,t,e){const n=this.cache,i=t.length,a=va(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||nh,a[r])}function Vm(s){switch(s){case 5126:return bm;case 35664:return Em;case 35665:return wm;case 35666:return Am;case 35674:return Tm;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Dm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Hm}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class $m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vm(e.type)}}class Wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Cl(s,t){s.seq.push(t),s.map[t.id]=t}function Xm(s,t,e){const n=s.name,i=n.length;for(qa.lastIndex=0;;){const a=qa.exec(n),r=qa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Cl(e,c===void 0?new Gm(o,s,t):new $m(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Wm(o),Cl(e,u)),e=u}}}class ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);Xm(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Pl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const qm=37297;let Ym=0;function jm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Ll=new Dt;function Km(s){$t._getMatrix(Ll,$t.workingColorSpace,s);const t=`mat3( ${Ll.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case _a:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+jm(s.getShaderSource(t),r)}else return i}function Jm(s,t){const e=Km(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zm(s,t){let e;switch(t){case Qh:e="Linear";break;case tu:e="Reinhard";break;case eu:e="Cineon";break;case nu:e="ACESFilmic";break;case su:e="AgX";break;case au:e="Neutral";break;case iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new T;function Qm(){$t.getLuminanceCoefficients(js);const s=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function e0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function os(s){return s!==""}function Il(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qr(s){return s.replace(i0,a0)}const s0=new Map;function a0(s,t){let e=Ut[t];if(e===void 0){const n=s0.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qr(e)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(s){return s.replace(r0,o0)}function o0(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Fl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function l0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function c0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function u0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case Zh:t="ENVMAP_BLENDING_ADD";break}return t}function d0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f0(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=l0(e),c=c0(e),h=h0(e),u=u0(e),d=d0(e),f=t0(e),g=e0(a),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),p.length>0&&(p+=`
`)):(m=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),p=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Jm("linearToOutputTexel",e.outputColorSpace),Qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),r=Qr(r),r=Il(r,e),r=Ul(r,e),o=Qr(o),o=Il(o,e),o=Ul(o,e),r=Nl(r),o=Nl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+r,M=E+p+o,F=Pl(i,i.VERTEX_SHADER,b),A=Pl(i,i.FRAGMENT_SHADER,M);i.attachShader(_,F),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(C){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(F).trim(),$=i.getShaderInfoLog(A).trim();let K=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,F,A);else{const Q=Dl(i,F,"vertex"),V=Dl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+Q+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||$==="")&&(W=!1);W&&(C.diagnostics={runnable:K,programLog:H,vertexShader:{log:O,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(F),i.deleteShader(A),L=new ha(i,_),S=n0(i,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,qm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=A,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g0(t),e.set(t,n)),n}}class g0{constructor(t){this.id=p0++,this.code=t,this.usedTimes=0}}function _0(s,t,e,n,i,a,r){const o=new yo,l=new m0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,H,O){const $=H.fog,K=O.geometry,W=S.isMeshStandardMaterial?H.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),V=Q&&Q.mapping===ga?Q.image.height:null,nt=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=ht!==void 0?ht.length:0;let Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let Qt,q,et,vt;if(nt){const Yt=nn[nt];Qt=Yt.vertexShader,q=Yt.fragmentShader}else Qt=S.vertexShader,q=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);const at=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Ct=O.isInstancedMesh===!0,Ft=O.isBatchedMesh===!0,le=!!S.map,Vt=!!S.matcap,he=!!Q,N=!!S.aoMap,ke=!!S.lightMap,Bt=!!S.bumpMap,zt=!!S.normalMap,Et=!!S.displacementMap,se=!!S.emissiveMap,bt=!!S.metalnessMap,w=!!S.roughnessMap,v=S.anisotropy>0,k=S.clearcoat>0,Y=S.dispersion>0,J=S.iridescence>0,X=S.sheen>0,yt=S.transmission>0,rt=v&&!!S.anisotropyMap,dt=k&&!!S.clearcoatMap,Gt=k&&!!S.clearcoatNormalMap,Z=k&&!!S.clearcoatRoughnessMap,ft=J&&!!S.iridescenceMap,wt=J&&!!S.iridescenceThicknessMap,Tt=X&&!!S.sheenColorMap,pt=X&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,It=!!S.specularColorMap,ee=!!S.specularIntensityMap,D=yt&&!!S.transmissionMap,st=yt&&!!S.thicknessMap,G=!!S.gradientMap,j=!!S.alphaMap,ut=S.alphaTest>0,ot=!!S.alphaHash,Pt=!!S.extensions;let ce=Fn;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=s.toneMapping);const xe={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Qt,fragmentShader:q,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&O._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&O.instanceColor!==null,instancingMorph:Ct&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Hi,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:Vt,envMap:he,envMapMode:he&&Q.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:ke,bumpMap:Bt,normalMap:zt,displacementMap:d&&Et,emissiveMap:se,normalMapObjectSpace:zt&&S.normalMapType===cu,normalMapTangentSpace:zt&&S.normalMapType===zc,metalnessMap:bt,roughnessMap:w,anisotropy:v,anisotropyMap:rt,clearcoat:k,clearcoatMap:dt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Z,dispersion:Y,iridescence:J,iridescenceMap:ft,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Tt,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:It,specularIntensityMap:ee,transmission:yt,transmissionMap:D,thicknessMap:st,gradientMap:G,opaque:S.transparent===!1&&S.blending===Ti&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ut,alphaHash:ot,combine:S.combine,mapUv:le&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:ke&&_(S.lightMap.channel),bumpMapUv:Bt&&_(S.bumpMap.channel),normalMapUv:zt&&_(S.normalMap.channel),displacementMapUv:Et&&_(S.displacementMap.channel),emissiveMapUv:se&&_(S.emissiveMap.channel),metalnessMapUv:bt&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:rt&&_(S.anisotropyMap.channel),clearcoatMapUv:dt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ht&&_(S.specularMap.channel),specularColorMapUv:It&&_(S.specularColorMap.channel),specularIntensityMapUv:ee&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:st&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(zt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(le||j),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===He,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(E(x,S),b(x,S),x.push(s.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function b(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const x=g[S.type];let C;if(x){const H=nn[x];C=Qu.clone(H.uniforms)}else C=S.uniforms;return C}function F(S,x){let C;for(let H=0,O=h.length;H<O;H++){const $=h[H];if($.cacheKey===x){C=$,++C.usedTimes;break}}return C===void 0&&(C=new f0(s,x,S,a),h.push(C)),C}function A(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:F,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:L}}function v0(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function y0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function kl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ol(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||y0),n.length>1&&n.sort(d||kl),i.length>1&&i.sort(d||kl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:h,sort:c}}function x0(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Ol,s.set(n,[r])):i>=a.length?(r=new Ol,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function M0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ot};break;case"SpotLight":e={position:new T,direction:new T,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function S0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let b0=0;function E0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function w0(s){const t=new M0,e=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,a=new ie,r=new ie;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,b=0,M=0,F=0,A=0,R=0;c.sort(E0);for(let S=0,x=c.length;S<x;S++){const C=c[S],H=C.color,O=C.intensity,$=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*O,u+=H.g*O,d+=H.b*O;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],O);R++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=C.shadow.matrix,E++}n.directional[f]=W,f++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(H).multiplyScalar(O),W.distance=$,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[_]=W;const Q=C.shadow;if(C.map&&(n.spotLightMap[F]=C.map,F++,Q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=Q.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=K,M++}_++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(H).multiplyScalar(O),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=W,g++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(O),W.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==F||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+F-A,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=F,L.numLightProbes=R,n.version=b0++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),r.identity(),a.copy(b.matrixWorld),a.premultiply(m),r.extractRotation(a),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Bl(s){const t=new w0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function A0(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Bl(s),t.set(i,[o])):a>=r.length?(o=new Bl(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class T0 extends Gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R0 extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function L0(s,t,e){let n=new xo;const i=new ct,a=new ct,r=new Zt,o=new T0({depthPacking:lu}),l=new R0,c={},h=e.maxTextureSize,u={[Bn]:Le,[Le]:Bn,[He]:He},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:C0,fragmentShader:P0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let p=this.type;this.render=function(A,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Nn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=p!==pn&&this.type===pn,$=p===pn&&this.type!==pn;for(let K=0,W=A.length;K<W;K++){const Q=A[K],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const nt=V.getFrameExtents();if(i.multiply(nt),a.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/nt.x),i.x=a.x*nt.x,V.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/nt.y),i.y=a.y*nt.y,V.mapSize.y=a.y)),V.map===null||O===!0||$===!0){const Mt=this.type!==pn?{minFilter:Je,magFilter:Je}:{};V.map!==null&&V.map.dispose(),V.map=new ii(i.x,i.y,Mt),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ht=V.getViewportCount();for(let Mt=0;Mt<ht;Mt++){const Nt=V.getViewport(Mt);r.set(a.x*Nt.x,a.y*Nt.y,a.x*Nt.z,a.y*Nt.w),H.viewport(r),V.updateMatrices(Q,Mt),n=V.getFrustum(),M(R,L,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===pn&&E(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,x,C)};function E(A,R){const L=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ii(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,L,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,L,f,_,null)}function b(A,R,L,S){let x=null;const C=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)x=C;else if(x=L.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=x.uuid,O=R.uuid;let $=c[H];$===void 0&&($={},c[H]=$);let K=$[O];K===void 0&&(K=x.clone(),$[O]=K,R.addEventListener("dispose",F)),x=K}if(x.visible=R.visible,x.wireframe=R.wireframe,S===pn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=s.properties.get(x);H.light=L}return x}function M(A,R,L,S,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const O=t.update(A),$=A.material;if(Array.isArray($)){const K=O.groups;for(let W=0,Q=K.length;W<Q;W++){const V=K[W],nt=$[V.materialIndex];if(nt&&nt.visible){const ht=b(A,nt,S,x);A.onBeforeShadow(s,A,R,L,O,ht,V),s.renderBufferDirect(L,null,O,ht,A,V),A.onAfterShadow(s,A,R,L,O,ht,V)}}}else if($.visible){const K=b(A,$,S,x);A.onBeforeShadow(s,A,R,L,O,K,null),s.renderBufferDirect(L,null,O,K,A,null),A.onAfterShadow(s,A,R,L,O,K,null)}}const H=A.children;for(let O=0,$=H.length;O<$;O++)M(H[O],R,L,S,x)}function F(A){A.target.removeEventListener("dispose",F);for(const L in c){const S=c[L],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const D0={[mr]:gr,[_r]:xr,[vr]:Mr,[Ui]:yr,[gr]:mr,[xr]:_r,[Mr]:vr,[yr]:Ui};function I0(s,t){function e(){let D=!1;const st=new Zt;let G=null;const j=new Zt(0,0,0,0);return{setMask:function(ut){G!==ut&&!D&&(s.colorMask(ut,ut,ut,ut),G=ut)},setLocked:function(ut){D=ut},setClear:function(ut,ot,Pt,ce,xe){xe===!0&&(ut*=ce,ot*=ce,Pt*=ce),st.set(ut,ot,Pt,ce),j.equals(st)===!1&&(s.clearColor(ut,ot,Pt,ce),j.copy(st))},reset:function(){D=!1,G=null,j.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,G=null,j=null,ut=null;return{setReversed:function(ot){if(st!==ot){const Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ut;ut=null,this.setClear(ce)}st=ot},getReversed:function(){return st},setTest:function(ot){ot?at(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ot){G!==ot&&!D&&(s.depthMask(ot),G=ot)},setFunc:function(ot){if(st&&(ot=D0[ot]),j!==ot){switch(ot){case mr:s.depthFunc(s.NEVER);break;case gr:s.depthFunc(s.ALWAYS);break;case _r:s.depthFunc(s.LESS);break;case Ui:s.depthFunc(s.LEQUAL);break;case vr:s.depthFunc(s.EQUAL);break;case yr:s.depthFunc(s.GEQUAL);break;case xr:s.depthFunc(s.GREATER);break;case Mr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ot}},setLocked:function(ot){D=ot},setClear:function(ot){ut!==ot&&(st&&(ot=1-ot),s.clearDepth(ot),ut=ot)},reset:function(){D=!1,G=null,j=null,ut=null,st=!1}}}function i(){let D=!1,st=null,G=null,j=null,ut=null,ot=null,Pt=null,ce=null,xe=null;return{setTest:function(Yt){D||(Yt?at(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Yt){st!==Yt&&!D&&(s.stencilMask(Yt),st=Yt)},setFunc:function(Yt,Ge,on){(G!==Yt||j!==Ge||ut!==on)&&(s.stencilFunc(Yt,Ge,on),G=Yt,j=Ge,ut=on)},setOp:function(Yt,Ge,on){(ot!==Yt||Pt!==Ge||ce!==on)&&(s.stencilOp(Yt,Ge,on),ot=Yt,Pt=Ge,ce=on)},setLocked:function(Yt){D=Yt},setClear:function(Yt){xe!==Yt&&(s.clearStencil(Yt),xe=Yt)},reset:function(){D=!1,st=null,G=null,j=null,ut=null,ot=null,Pt=null,ce=null,xe=null}}}const a=new e,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,M=null,F=null,A=null,R=new Ot(0,0,0),L=0,S=!1,x=null,C=null,H=null,O=null,$=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Q>=2);let nt=null,ht={};const Mt=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),Qt=new Zt().fromArray(Mt),q=new Zt().fromArray(Nt);function et(D,st,G,j){const ut=new Uint8Array(4),ot=s.createTexture();s.bindTexture(D,ot),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<G;Pt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(st+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ot}const vt={};vt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(s.DEPTH_TEST),r.setFunc(Ui),Bt(!1),zt(Go),at(s.CULL_FACE),N(Nn);function at(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function At(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ct(D,st){return u[D]!==st?(s.bindFramebuffer(D,st),u[D]=st,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Ft(D,st){let G=f,j=!1;if(D){G=d.get(st),G===void 0&&(G=[],d.set(st,G));const ut=D.textures;if(G.length!==ut.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Pt=ut.length;ot<Pt;ot++)G[ot]=s.COLOR_ATTACHMENT0+ot;G.length=ut.length,j=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,j=!0);j&&s.drawBuffers(G)}function le(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Vt={[Jn]:s.FUNC_ADD,[Uh]:s.FUNC_SUBTRACT,[Nh]:s.FUNC_REVERSE_SUBTRACT};Vt[Fh]=s.MIN,Vt[kh]=s.MAX;const he={[Oh]:s.ZERO,[Bh]:s.ONE,[zh]:s.SRC_COLOR,[fr]:s.SRC_ALPHA,[Xh]:s.SRC_ALPHA_SATURATE,[$h]:s.DST_COLOR,[Vh]:s.DST_ALPHA,[Hh]:s.ONE_MINUS_SRC_COLOR,[pr]:s.ONE_MINUS_SRC_ALPHA,[Wh]:s.ONE_MINUS_DST_COLOR,[Gh]:s.ONE_MINUS_DST_ALPHA,[qh]:s.CONSTANT_COLOR,[Yh]:s.ONE_MINUS_CONSTANT_COLOR,[jh]:s.CONSTANT_ALPHA,[Kh]:s.ONE_MINUS_CONSTANT_ALPHA};function N(D,st,G,j,ut,ot,Pt,ce,xe,Yt){if(D===Nn){_===!0&&(At(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),D!==Ih){if(D!==m||Yt!==S){if((p!==Jn||M!==Jn)&&(s.blendEquation(s.FUNC_ADD),p=Jn,M=Jn),Yt)switch(D){case Ti:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.ONE,s.ONE);break;case Wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,b=null,F=null,A=null,R.set(0,0,0),L=0,m=D,S=Yt}return}ut=ut||st,ot=ot||G,Pt=Pt||j,(st!==p||ut!==M)&&(s.blendEquationSeparate(Vt[st],Vt[ut]),p=st,M=ut),(G!==E||j!==b||ot!==F||Pt!==A)&&(s.blendFuncSeparate(he[G],he[j],he[ot],he[Pt]),E=G,b=j,F=ot,A=Pt),(ce.equals(R)===!1||xe!==L)&&(s.blendColor(ce.r,ce.g,ce.b,xe),R.copy(ce),L=xe),m=D,S=!1}function ke(D,st){D.side===He?At(s.CULL_FACE):at(s.CULL_FACE);let G=D.side===Le;st&&(G=!G),Bt(G),D.blending===Ti&&D.transparent===!1?N(Nn):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function zt(D){D!==Ph?(at(s.CULL_FACE),D!==C&&(D===Go?s.cullFace(s.BACK):D===Lh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),C=D}function Et(D){D!==H&&(W&&s.lineWidth(D),H=D)}function se(D,st,G){D?(at(s.POLYGON_OFFSET_FILL),(O!==st||$!==G)&&(s.polygonOffset(st,G),O=st,$=G)):At(s.POLYGON_OFFSET_FILL)}function bt(D){D?at(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function w(D){D===void 0&&(D=s.TEXTURE0+K-1),nt!==D&&(s.activeTexture(D),nt=D)}function v(D,st,G){G===void 0&&(nt===null?G=s.TEXTURE0+K-1:G=nt);let j=ht[G];j===void 0&&(j={type:void 0,texture:void 0},ht[G]=j),(j.type!==D||j.texture!==st)&&(nt!==G&&(s.activeTexture(G),nt=G),s.bindTexture(D,st||vt[D]),j.type=D,j.texture=st)}function k(){const D=ht[nt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(D){Qt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function pt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ht(D,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let j=G.get(D);j===void 0&&(j=s.getUniformBlockIndex(st,D.name),G.set(D,j))}function It(D,st){const j=c.get(st).get(D);l.get(st)!==j&&(s.uniformBlockBinding(st,j,D.__bindingPointIndex),l.set(st,j))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,ht={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,M=null,F=null,A=null,R=new Ot(0,0,0),L=0,S=!1,x=null,C=null,H=null,O=null,$=null,Qt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:At,bindFramebuffer:Ct,drawBuffers:Ft,useProgram:le,setBlending:N,setMaterial:ke,setFlipSided:Bt,setCullFace:zt,setLineWidth:Et,setPolygonOffset:se,setScissorTest:bt,activeTexture:w,bindTexture:v,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:ft,texImage3D:wt,updateUBOMapping:Ht,uniformBlockBinding:It,texStorage2D:Gt,texStorage3D:Z,texSubImage2D:X,texSubImage3D:yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:Tt,viewport:pt,reset:ee}}function zl(s,t,e,n){const i=U0(n);switch(e){case Ic:return s*t;case Nc:return s*t;case Fc:return s*t*2;case kc:return s*t/i.components*i.byteLength;case po:return s*t/i.components*i.byteLength;case Oc:return s*t*2/i.components*i.byteLength;case mo:return s*t*2/i.components*i.byteLength;case Uc:return s*t*3/i.components*i.byteLength;case Ke:return s*t*4/i.components*i.byteLength;case go:return s*t*4/i.components*i.byteLength;case aa:case ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oa:case la:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tr:case Cr:return Math.max(s,16)*Math.max(t,8)/4;case Ar:case Rr:return Math.max(s,8)*Math.max(t,8)/2;case Pr:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ur:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case kr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Or:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Hr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $r:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ca:case qr:case Yr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Bc:case jr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Kr:case Jr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function U0(s){switch(s){case xn:case Pc:return{byteLength:1,components:1};case ys:case Lc:case Es:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case ni:case ho:case mn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function N0(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Ms("canvas")}function _(w,v,k){let Y=1;const J=bt(w);if((J.width>k||J.height>k)&&(Y=k/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(Y*J.width),yt=Math.floor(Y*J.height);u===void 0&&(u=g(X,yt));const rt=v?g(X,yt):u;return rt.width=X,rt.height=yt,rt.getContext("2d").drawImage(w,0,0,X,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+yt+")."),rt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,v,k,Y,J=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=v;if(v===s.RED&&(k===s.FLOAT&&(X=s.R32F),k===s.HALF_FLOAT&&(X=s.R16F),k===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.R8UI),k===s.UNSIGNED_SHORT&&(X=s.R16UI),k===s.UNSIGNED_INT&&(X=s.R32UI),k===s.BYTE&&(X=s.R8I),k===s.SHORT&&(X=s.R16I),k===s.INT&&(X=s.R32I)),v===s.RG&&(k===s.FLOAT&&(X=s.RG32F),k===s.HALF_FLOAT&&(X=s.RG16F),k===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RG8UI),k===s.UNSIGNED_SHORT&&(X=s.RG16UI),k===s.UNSIGNED_INT&&(X=s.RG32UI),k===s.BYTE&&(X=s.RG8I),k===s.SHORT&&(X=s.RG16I),k===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RGB8UI),k===s.UNSIGNED_SHORT&&(X=s.RGB16UI),k===s.UNSIGNED_INT&&(X=s.RGB32UI),k===s.BYTE&&(X=s.RGB8I),k===s.SHORT&&(X=s.RGB16I),k===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),k===s.UNSIGNED_INT&&(X=s.RGBA32UI),k===s.BYTE&&(X=s.RGBA8I),k===s.SHORT&&(X=s.RGBA16I),k===s.INT&&(X=s.RGBA32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),v===s.RGBA){const yt=J?_a:$t.getTransfer(Y);k===s.FLOAT&&(X=s.RGBA32F),k===s.HALF_FLOAT&&(X=s.RGBA16F),k===s.UNSIGNED_BYTE&&(X=yt===Kt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(w,v){let k;return w?v===null||v===ni||v===ki?k=s.DEPTH24_STENCIL8:v===mn?k=s.DEPTH32F_STENCIL8:v===ys&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ni||v===ki?k=s.DEPTH_COMPONENT24:v===mn?k=s.DEPTH_COMPONENT32F:v===ys&&(k=s.DEPTH_COMPONENT16),k}function F(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Je&&w.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&h.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),x(v)}function L(w){const v=n.get(w);if(v.__webglInit===void 0)return;const k=w.source,Y=d.get(k);if(Y){const J=Y[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(w),Object.keys(Y).length===0&&d.delete(k)}n.remove(w)}function S(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const k=w.source,Y=d.get(k);delete Y[v.__cacheKey],r.memory.textures--}function x(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let J=0;J<v.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=w.textures;for(let Y=0,J=k.length;Y<J;Y++){const X=n.get(k[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),r.memory.textures--),n.remove(k[Y])}n.remove(w)}let C=0;function H(){C=0}function O(){const w=C;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),C+=1,w}function $(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function K(w,v){const k=n.get(w);if(w.isVideoTexture&&Et(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,w,v);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function W(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function Q(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function V(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){et(k,w,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}const nt={[Er]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[wr]:s.MIRRORED_REPEAT},ht={[Je]:s.NEAREST,[ru]:s.NEAREST_MIPMAP_NEAREST,[Cs]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Ma]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},Mt={[hu]:s.NEVER,[gu]:s.ALWAYS,[uu]:s.LESS,[Hc]:s.LEQUAL,[du]:s.EQUAL,[mu]:s.GEQUAL,[fu]:s.GREATER,[pu]:s.NOTEQUAL};function Nt(w,v){if(v.type===mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===Ma||v.magFilter===Cs||v.magFilter===ei||v.minFilter===sn||v.minFilter===Ma||v.minFilter===Cs||v.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,nt[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,nt[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,nt[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ht[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Je||v.minFilter!==Cs&&v.minFilter!==ei||v.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Qt(w,v){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let J=d.get(Y);J===void 0&&(J={},d.set(Y,J));const X=$(v);if(X!==w.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),J[X].usedTimes++;const yt=J[w.__cacheKey];yt!==void 0&&(J[w.__cacheKey].usedTimes--,yt.usedTimes===0&&S(v)),w.__cacheKey=X,w.__webglTexture=J[X].texture}return k}function q(w,v,k){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);const J=Qt(w,v),X=v.source;e.bindTexture(Y,w.__webglTexture,s.TEXTURE0+k);const yt=n.get(X);if(X.version!==yt.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const rt=$t.getPrimaries($t.workingColorSpace),dt=v.colorSpace===In?null:$t.getPrimaries(v.colorSpace),Gt=v.colorSpace===In||rt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Z=_(v.image,!1,i.maxTextureSize);Z=se(v,Z);const ft=a.convert(v.format,v.colorSpace),wt=a.convert(v.type);let Tt=b(v.internalFormat,ft,wt,v.colorSpace,v.isVideoTexture);Nt(Y,v);let pt;const Ht=v.mipmaps,It=v.isVideoTexture!==!0,ee=yt.__version===void 0||J===!0,D=X.dataReady,st=F(v,Z);if(v.isDepthTexture)Tt=M(v.format===Oi,v.type),ee&&(It?e.texStorage2D(s.TEXTURE_2D,1,Tt,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,Tt,Z.width,Z.height,0,ft,wt,null));else if(v.isDataTexture)if(Ht.length>0){It&&ee&&e.texStorage2D(s.TEXTURE_2D,st,Tt,Ht[0].width,Ht[0].height);for(let G=0,j=Ht.length;G<j;G++)pt=Ht[G],It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(s.TEXTURE_2D,G,Tt,pt.width,pt.height,0,ft,wt,pt.data);v.generateMipmaps=!1}else It?(ee&&e.texStorage2D(s.TEXTURE_2D,st,Tt,Z.width,Z.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,ft,wt,Z.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,Z.width,Z.height,0,ft,wt,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){It&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Tt,Ht[0].width,Ht[0].height,Z.depth);for(let G=0,j=Ht.length;G<j;G++)if(pt=Ht[G],v.format!==Ke)if(ft!==null)if(It){if(D)if(v.layerUpdates.size>0){const ut=zl(pt.width,pt.height,v.format,v.type);for(const ot of v.layerUpdates){const Pt=pt.data.subarray(ot*ut/pt.data.BYTES_PER_ELEMENT,(ot+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ot,pt.width,pt.height,1,ft,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,Z.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Tt,pt.width,pt.height,Z.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,Z.depth,ft,wt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Tt,pt.width,pt.height,Z.depth,0,ft,wt,pt.data)}else{It&&ee&&e.texStorage2D(s.TEXTURE_2D,st,Tt,Ht[0].width,Ht[0].height);for(let G=0,j=Ht.length;G<j;G++)pt=Ht[G],v.format!==Ke?ft!==null?It?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Tt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(s.TEXTURE_2D,G,Tt,pt.width,pt.height,0,ft,wt,pt.data)}else if(v.isDataArrayTexture)if(It){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Tt,Z.width,Z.height,Z.depth),D)if(v.layerUpdates.size>0){const G=zl(Z.width,Z.height,v.format,v.type);for(const j of v.layerUpdates){const ut=Z.data.subarray(j*G/Z.data.BYTES_PER_ELEMENT,(j+1)*G/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,ft,wt,ut)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ft,wt,Z.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,Z.width,Z.height,Z.depth,0,ft,wt,Z.data);else if(v.isData3DTexture)It?(ee&&e.texStorage3D(s.TEXTURE_3D,st,Tt,Z.width,Z.height,Z.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ft,wt,Z.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,Z.width,Z.height,Z.depth,0,ft,wt,Z.data);else if(v.isFramebufferTexture){if(ee)if(It)e.texStorage2D(s.TEXTURE_2D,st,Tt,Z.width,Z.height);else{let G=Z.width,j=Z.height;for(let ut=0;ut<st;ut++)e.texImage2D(s.TEXTURE_2D,ut,Tt,G,j,0,ft,wt,null),G>>=1,j>>=1}}else if(Ht.length>0){if(It&&ee){const G=bt(Ht[0]);e.texStorage2D(s.TEXTURE_2D,st,Tt,G.width,G.height)}for(let G=0,j=Ht.length;G<j;G++)pt=Ht[G],It?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,ft,wt,pt):e.texImage2D(s.TEXTURE_2D,G,Tt,ft,wt,pt);v.generateMipmaps=!1}else if(It){if(ee){const G=bt(Z);e.texStorage2D(s.TEXTURE_2D,st,Tt,G.width,G.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,wt,Z)}else e.texImage2D(s.TEXTURE_2D,0,Tt,ft,wt,Z);m(v)&&p(Y),yt.__version=X.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function et(w,v,k){if(v.image.length!==6)return;const Y=Qt(w,v),J=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);const X=n.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(s.TEXTURE0+k);const yt=$t.getPrimaries($t.workingColorSpace),rt=v.colorSpace===In?null:$t.getPrimaries(v.colorSpace),dt=v.colorSpace===In||yt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!Gt&&!Z?ft[j]=_(v.image[j],!0,i.maxCubemapSize):ft[j]=Z?v.image[j].image:v.image[j],ft[j]=se(v,ft[j]);const wt=ft[0],Tt=a.convert(v.format,v.colorSpace),pt=a.convert(v.type),Ht=b(v.internalFormat,Tt,pt,v.colorSpace),It=v.isVideoTexture!==!0,ee=X.__version===void 0||Y===!0,D=J.dataReady;let st=F(v,wt);Nt(s.TEXTURE_CUBE_MAP,v);let G;if(Gt){It&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ht,wt.width,wt.height);for(let j=0;j<6;j++){G=ft[j].mipmaps;for(let ut=0;ut<G.length;ut++){const ot=G[ut];v.format!==Ke?Tt!==null?It?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,ot.width,ot.height,Tt,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,Ht,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,ot.width,ot.height,Tt,pt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,Ht,ot.width,ot.height,0,Tt,pt,ot.data)}}}else{if(G=v.mipmaps,It&&ee){G.length>0&&st++;const j=bt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(Z){It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,Tt,pt,ft[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,ft[j].width,ft[j].height,0,Tt,pt,ft[j].data);for(let ut=0;ut<G.length;ut++){const Pt=G[ut].image[j].image;It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,Pt.width,Pt.height,Tt,pt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,Ht,Pt.width,Pt.height,0,Tt,pt,Pt.data)}}else{It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Tt,pt,ft[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,Tt,pt,ft[j]);for(let ut=0;ut<G.length;ut++){const ot=G[ut];It?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,Tt,pt,ot.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,Ht,Tt,pt,ot.image[j])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function vt(w,v,k,Y,J,X){const yt=a.convert(k.format,k.colorSpace),rt=a.convert(k.type),dt=b(k.internalFormat,yt,rt,k.colorSpace),Gt=n.get(v),Z=n.get(k);if(Z.__renderTarget=v,!Gt.__hasExternalTextures){const ft=Math.max(1,v.width>>X),wt=Math.max(1,v.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,X,dt,ft,wt,v.depth,0,yt,rt,null):e.texImage2D(J,X,dt,ft,wt,0,yt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),zt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,Z.__webglTexture,0,Bt(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,Z.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(w,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer){const Y=v.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=M(v.stencilBuffer,J),yt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=Bt(v);zt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,X,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,w)}else{const Y=v.textures;for(let J=0;J<Y.length;J++){const X=Y[J],yt=a.convert(X.format,X.colorSpace),rt=a.convert(X.type),dt=b(X.internalFormat,yt,rt,X.colorSpace),Gt=Bt(v);k&&zt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,dt,v.width,v.height):zt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,dt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,dt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const J=Y.__webglTexture,X=Bt(v);if(v.depthTexture.format===Ri)zt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===Oi)zt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ct(w){const v=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Y}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(v.__webglFramebuffer,w)}else if(k){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),at(v.__webglDepthbuffer[Y],w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),at(v.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(w,v,k){const Y=n.get(w);v!==void 0&&vt(Y.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ct(w)}function le(w){const v=w.texture,k=n.get(w),Y=n.get(v);w.addEventListener("dispose",R);const J=w.textures,X=w.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,r.memory.textures++),X){k.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[rt]=[];for(let dt=0;dt<v.mipmaps.length;dt++)k.__webglFramebuffer[rt][dt]=s.createFramebuffer()}else k.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)k.__webglFramebuffer[rt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(yt)for(let rt=0,dt=J.length;rt<dt;rt++){const Gt=n.get(J[rt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),r.memory.textures++)}if(w.samples>0&&zt(w)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const dt=J[rt];k.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[rt]);const Gt=a.convert(dt.format,dt.colorSpace),Z=a.convert(dt.type),ft=b(dt.internalFormat,Gt,Z,dt.colorSpace,w.isXRRenderTarget===!0),wt=Bt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,ft,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,k.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),at(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)vt(k.__webglFramebuffer[rt][dt],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else vt(k.__webglFramebuffer[rt],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let rt=0,dt=J.length;rt<dt;rt++){const Gt=J[rt],Z=n.get(Gt);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture),Nt(s.TEXTURE_2D,Gt),vt(k.__webglFramebuffer,w,Gt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(Gt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Nt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)vt(k.__webglFramebuffer[dt],w,v,s.COLOR_ATTACHMENT0,rt,dt);else vt(k.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,rt,0);m(v)&&p(rt),e.unbindTexture()}w.depthBuffer&&Ct(w)}function Vt(w){const v=w.textures;for(let k=0,Y=v.length;k<Y;k++){const J=v[k];if(m(J)){const X=E(w),yt=n.get(J).__webglTexture;e.bindTexture(X,yt),p(X),e.unbindTexture()}}}const he=[],N=[];function ke(w){if(w.samples>0){if(zt(w)===!1){const v=w.textures,k=w.width,Y=w.height;let J=s.COLOR_BUFFER_BIT;const X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(w),rt=v.length>1;if(rt)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);const Gt=n.get(v[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Gt,0)}s.blitFramebuffer(0,0,k,Y,0,0,k,Y,J,s.NEAREST),l===!0&&(he.length=0,N.length=0,he.push(s.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(he.push(X),N.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);const Gt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Bt(w){return Math.min(i.maxSamples,w.samples)}function zt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Et(w){const v=r.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function se(w,v){const k=w.colorSpace,Y=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Hi&&k!==In&&($t.getTransfer(k)===Kt?(Y!==Ke||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=zt}function F0(s,t){function e(n,i=In){let a;const r=$t.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return s.BYTE;if(n===Lc)return s.SHORT;if(n===ys)return s.UNSIGNED_SHORT;if(n===ho)return s.INT;if(n===ni)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===Es)return s.HALF_FLOAT;if(n===Ic)return s.ALPHA;if(n===Uc)return s.RGB;if(n===Ke)return s.RGBA;if(n===Nc)return s.LUMINANCE;if(n===Fc)return s.LUMINANCE_ALPHA;if(n===Ri)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===kc)return s.RED;if(n===po)return s.RED_INTEGER;if(n===Oc)return s.RG;if(n===mo)return s.RG_INTEGER;if(n===go)return s.RGBA_INTEGER;if(n===aa||n===ra||n===oa||n===la)if(r===Kt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ar||n===Tr||n===Rr||n===Cr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ar)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pr||n===Lr||n===Dr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Pr||n===Lr)return r===Kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Dr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ir||n===Ur||n===Nr||n===Fr||n===kr||n===Or||n===Br||n===zr||n===Hr||n===Vr||n===Gr||n===$r||n===Wr||n===Xr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ir)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ur)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Or)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Br)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$r)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xr)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===qr||n===Yr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===ca)return r===Kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===jr||n===Kr||n===Jr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===ca)return a.COMPRESSED_RED_RGTC1_EXT;if(n===jr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class k0 extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
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

}`;class H0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:B0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V0 extends Vi{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new H0,m=e.getContextAttributes();let p=null,E=null;const b=[],M=[],F=new ct;let A=null;const R=new Fe;R.viewport=new Zt;const L=new Fe;L.viewport=new Zt;const S=[R,L],x=new k0;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=b[q];return et===void 0&&(et=new Ya,b[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=b[q];return et===void 0&&(et=new Ya,b[q]=et),et.getGripSpace()},this.getHand=function(q){let et=b[q];return et===void 0&&(et=new Ya,b[q]=et),et.getHandSpace()};function O(q){const et=M.indexOf(q.inputSource);if(et===-1)return;const vt=b[et];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||r),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",K);for(let q=0;q<b.length;q++){const et=M[q];et!==null&&(M[q]=null,b[q].disconnect(et))}C=null,H=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,E=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",$),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(F),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ii(f.framebufferWidth,f.framebufferHeight,{format:Ke,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Oi:Ri,vt=m.stencil?ki:ni);const At={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:a};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new ii(d.textureWidth,d.textureHeight,{format:Ke,type:xn,depthTexture:new th(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(q){for(let et=0;et<q.removed.length;et++){const vt=q.removed[et],at=M.indexOf(vt);at>=0&&(M[at]=null,b[at].disconnect(vt))}for(let et=0;et<q.added.length;et++){const vt=q.added[et];let at=M.indexOf(vt);if(at===-1){for(let Ct=0;Ct<b.length;Ct++)if(Ct>=M.length){M.push(vt),at=Ct;break}else if(M[Ct]===null){M[Ct]=vt,at=Ct;break}if(at===-1)break}const At=b[at];At&&At.connect(vt)}}const W=new T,Q=new T;function V(q,et,vt){W.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const at=W.distanceTo(Q),At=et.projectionMatrix.elements,Ct=vt.projectionMatrix.elements,Ft=At[14]/(At[10]-1),le=At[14]/(At[10]+1),Vt=(At[9]+1)/At[5],he=(At[9]-1)/At[5],N=(At[8]-1)/At[0],ke=(Ct[8]+1)/Ct[0],Bt=Ft*N,zt=Ft*ke,Et=at/(-N+ke),se=Et*-N;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(se),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const bt=Ft+Et,w=le+Et,v=Bt-se,k=zt+(at-se),Y=Vt*le/w*bt,J=he*le/w*bt;q.projectionMatrix.makePerspective(v,k,Y,J,bt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),x.near=L.near=R.near=et,x.far=L.far=R.far=vt,(C!==x.near||H!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,H=x.far),R.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,x.layers.mask=R.layers.mask|L.layers.mask;const at=q.parent,At=x.cameras;nt(x,at);for(let Ct=0;Ct<At.length;Ct++)nt(At[Ct],at);At.length===2?V(x,R,L):x.projectionMatrix.copy(R.projectionMatrix),ht(q,x,at)};function ht(q,et,vt){vt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Mt=null;function Nt(q,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let at=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Ct=0;Ct<vt.length;Ct++){const Ft=vt[Ct];let le=null;if(f!==null)le=f.getViewport(Ft);else{const he=u.getViewSubImage(d,Ft);le=he.viewport,Ct===0&&(t.setRenderTargetTextures(E,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(E))}let Vt=S[Ct];Vt===void 0&&(Vt=new Fe,Vt.layers.enable(Ct),Vt.viewport=new Zt,S[Ct]=Vt),Vt.matrix.fromArray(Ft.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ft.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(x.matrix.copy(Vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Vt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Ct=u.getDepthInformation(vt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,i.renderState)}}for(let vt=0;vt<b.length;vt++){const at=M[vt],At=b[vt];at!==null&&At!==void 0&&At.update(at,et,c||r)}Mt&&Mt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Qt=new Zc;Qt.setAnimationLoop(Nt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const qn=new an,G0=new ie;function $0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,qn.copy(M),qn.x*=-1,qn.y*=-1,qn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(qn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function W0(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const M=b.program;n.uniformBlockBinding(E,M)}function c(E,b){let M=i[E.id];M===void 0&&(g(E),M=h(E),i[E.id]=M,E.addEventListener("dispose",m));const F=b.program;n.updateUBOMapping(E,F);const A=t.render.frame;a[E.id]!==A&&(d(E),a[E.id]=A)}function h(E){const b=u();E.__bindingPointIndex=b;const M=s.createBuffer(),F=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,F,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function u(){for(let E=0;E<o;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=i[E.id],M=E.uniforms,F=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,R=M.length;A<R;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,x=L.length;S<x;S++){const C=L[S];if(f(C,A,S,F)===!0){const H=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let $=0;for(let K=0;K<O.length;K++){const W=O[K],Q=_(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,H+$,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,b,M,F){const A=E.value,R=b+"_"+M;if(F[R]===void 0)return typeof A=="number"||typeof A=="boolean"?F[R]=A:F[R]=A.clone(),!0;{const L=F[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return F[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(E){const b=E.uniforms;let M=0;const F=16;for(let R=0,L=b.length;R<L;R++){const S=Array.isArray(b[R])?b[R]:[b[R]];for(let x=0,C=S.length;x<C;x++){const H=S[x],O=Array.isArray(H.value)?H.value:[H.value];for(let $=0,K=O.length;$<K;$++){const W=O[$],Q=_(W),V=M%F,nt=V%Q.boundary,ht=V+nt;M+=nt,ht!==0&&F-ht<Q.storage&&(M+=F-ht),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Q.storage}}}const A=M%F;return A>0&&(M+=F-A),E.__size=M,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=r.indexOf(b.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete a[b.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);r=[],i={},a={}}return{bind:l,update:c,dispose:p}}class X0{constructor(t={}){const{canvas:e=Iu(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Fn,this.toneMappingExposure=1;const M=this;let F=!1,A=0,R=0,L=null,S=-1,x=null;const C=new Zt,H=new Zt;let O=null;const $=new Ot(0);let K=0,W=e.width,Q=e.height,V=1,nt=null,ht=null;const Mt=new Zt(0,0,W,Q),Nt=new Zt(0,0,W,Q);let Qt=!1;const q=new xo;let et=!1,vt=!1;const at=new ie,At=new ie,Ct=new T,Ft=new Zt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function he(){return L===null?V:1}let N=n;function ke(y,I){return e.getContext(y,I)}try{const y={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${co}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const I="webgl2";if(N=ke(I,y),N===null)throw ke(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Bt,zt,Et,se,bt,w,v,k,Y,J,X,yt,rt,dt,Gt,Z,ft,wt,Tt,pt,Ht,It,ee,D;function st(){Bt=new Jp(N),Bt.init(),It=new F0(N,Bt),zt=new Wp(N,Bt,t,It),Et=new I0(N,Bt),zt.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),se=new tm(N),bt=new v0,w=new N0(N,Bt,Et,bt,zt,It,se),v=new qp(M),k=new Kp(M),Y=new rd(N),ee=new Gp(N,Y),J=new Zp(N,Y,se,ee),X=new nm(N,J,Y,se),Tt=new em(N,zt,w),Z=new Xp(bt),yt=new _0(M,v,k,Bt,zt,ee,Z),rt=new $0(M,bt),dt=new x0,Gt=new A0(Bt),wt=new Vp(M,v,k,Et,X,f,l),ft=new L0(M,X,zt),D=new W0(N,se,zt,Et),pt=new $p(N,Bt,se),Ht=new Qp(N,Bt,se),se.programs=yt.programs,M.capabilities=zt,M.extensions=Bt,M.properties=bt,M.renderLists=dt,M.shadowMap=ft,M.state=Et,M.info=se}st();const G=new V0(M,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Bt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Bt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,Q,!1))},this.getSize=function(y){return y.set(W,Q)},this.setSize=function(y,I,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,Q=I,e.width=Math.floor(y*V),e.height=Math.floor(I*V),B===!0&&(e.style.width=y+"px",e.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(W*V,Q*V).floor()},this.setDrawingBufferSize=function(y,I,B){W=y,Q=I,V=B,e.width=Math.floor(y*B),e.height=Math.floor(I*B),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,I,B,z){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,I,B,z),Et.viewport(C.copy(Mt).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Nt)},this.setScissor=function(y,I,B,z){y.isVector4?Nt.set(y.x,y.y,y.z,y.w):Nt.set(y,I,B,z),Et.scissor(H.copy(Nt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(y){Et.setScissorTest(Qt=y)},this.setOpaqueSort=function(y){nt=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(y=!0,I=!0,B=!0){let z=0;if(y){let U=!1;if(L!==null){const tt=L.texture.format;U=tt===go||tt===mo||tt===po}if(U){const tt=L.texture.type,lt=tt===xn||tt===ni||tt===ys||tt===ki||tt===uo||tt===fo,mt=wt.getClearColor(),gt=wt.getClearAlpha(),Rt=mt.r,Lt=mt.g,_t=mt.b;lt?(g[0]=Rt,g[1]=Lt,g[2]=_t,g[3]=gt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Rt,_[1]=Lt,_[2]=_t,_[3]=gt,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),dt.dispose(),Gt.dispose(),bt.dispose(),v.dispose(),k.dispose(),X.dispose(),ee.dispose(),D.dispose(),yt.dispose(),G.dispose(),G.removeEventListener("sessionstart",No),G.removeEventListener("sessionend",Fo),Hn.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=se.autoReset,I=ft.enabled,B=ft.autoUpdate,z=ft.needsUpdate,U=ft.type;st(),se.autoReset=y,ft.enabled=I,ft.autoUpdate=B,ft.needsUpdate=z,ft.type=U}function ot(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pt(y){const I=y.target;I.removeEventListener("dispose",Pt),ce(I)}function ce(y){xe(y),bt.remove(y)}function xe(y){const I=bt.get(y).programs;I!==void 0&&(I.forEach(function(B){yt.releaseProgram(B)}),y.isShaderMaterial&&yt.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,B,z,U,tt){I===null&&(I=le);const lt=U.isMesh&&U.matrixWorld.determinant()<0,mt=wh(y,I,B,z,U);Et.setMaterial(z,lt);let gt=B.index,Rt=1;if(z.wireframe===!0){if(gt=J.getWireframeAttribute(B),gt===void 0)return;Rt=2}const Lt=B.drawRange,_t=B.attributes.position;let Wt=Lt.start*Rt,ne=(Lt.start+Lt.count)*Rt;tt!==null&&(Wt=Math.max(Wt,tt.start*Rt),ne=Math.min(ne,(tt.start+tt.count)*Rt)),gt!==null?(Wt=Math.max(Wt,0),ne=Math.min(ne,gt.count)):_t!=null&&(Wt=Math.max(Wt,0),ne=Math.min(ne,_t.count));const ae=ne-Wt;if(ae<0||ae===1/0)return;ee.setup(U,z,mt,B,gt);let Re,Xt=pt;if(gt!==null&&(Re=Y.get(gt),Xt=Ht,Xt.setIndex(Re)),U.isMesh)z.wireframe===!0?(Et.setLineWidth(z.wireframeLinewidth*he()),Xt.setMode(N.LINES)):Xt.setMode(N.TRIANGLES);else if(U.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),Et.setLineWidth(xt*he()),U.isLineSegments?Xt.setMode(N.LINES):U.isLineLoop?Xt.setMode(N.LINE_LOOP):Xt.setMode(N.LINE_STRIP)}else U.isPoints?Xt.setMode(N.POINTS):U.isSprite&&Xt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const xt=U._multiDrawStarts,ln=U._multiDrawCounts,qt=U._multiDrawCount,$e=gt?Y.get(gt).bytesPerElement:1,ai=bt.get(z).currentProgram.getUniforms();for(let Ie=0;Ie<qt;Ie++)ai.setValue(N,"_gl_DrawID",Ie),Xt.render(xt[Ie]/$e,ln[Ie])}else if(U.isInstancedMesh)Xt.renderInstances(Wt,ae,U.count);else if(B.isInstancedBufferGeometry){const xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ln=Math.min(B.instanceCount,xt);Xt.renderInstances(Wt,ae,ln)}else Xt.render(Wt,ae)};function Yt(y,I,B){y.transparent===!0&&y.side===He&&y.forceSinglePass===!1?(y.side=Le,y.needsUpdate=!0,Rs(y,I,B),y.side=Bn,y.needsUpdate=!0,Rs(y,I,B),y.side=He):Rs(y,I,B)}this.compile=function(y,I,B=null){B===null&&(B=y),p=Gt.get(B),p.init(I),b.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const mt=tt[lt];Yt(mt,B,U),z.add(mt)}else Yt(tt,B,U),z.add(tt)}),b.pop(),p=null,z},this.compileAsync=function(y,I,B=null){const z=this.compile(y,I,B);return new Promise(U=>{function tt(){if(z.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){U(y);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ge=null;function on(y){Ge&&Ge(y)}function No(){Hn.stop()}function Fo(){Hn.start()}const Hn=new Zc;Hn.setAnimationLoop(on),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(y){Ge=y,G.setAnimationLoop(y),y===null?Hn.stop():Hn.start()},G.addEventListener("sessionstart",No),G.addEventListener("sessionend",Fo),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,I,L),p=Gt.get(y,b.length),p.init(I),b.push(p),At.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(At),vt=this.localClippingEnabled,et=Z.init(this.clippingPlanes,vt),m=dt.get(y,E.length),m.init(),E.push(m),G.enabled===!0&&G.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&xa(tt,I,-1/0,M.sortObjects)}xa(y,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(nt,ht),Vt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Vt&&wt.addToRenderList(m,y),this.info.render.frame++,et===!0&&Z.beginShadows();const B=p.state.shadowsArray;ft.render(B,y,I),et===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),I.isArrayCamera){const tt=I.cameras;if(U.length>0)for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];Oo(z,U,y,gt)}Vt&&wt.render(y);for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];ko(m,y,gt,gt.viewport)}}else U.length>0&&Oo(z,U,y,I),Vt&&wt.render(y),ko(m,y,I);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(M,y,I),ee.resetDefaultState(),S=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],et===!0&&Z.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function xa(y,I,B,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){z&&Ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(At);const lt=X.update(y),mt=y.material;mt.visible&&m.push(y,lt,mt,B,Ft.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const lt=X.update(y),mt=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ft.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ft.copy(lt.boundingSphere.center)),Ft.applyMatrix4(y.matrixWorld).applyMatrix4(At)),Array.isArray(mt)){const gt=lt.groups;for(let Rt=0,Lt=gt.length;Rt<Lt;Rt++){const _t=gt[Rt],Wt=mt[_t.materialIndex];Wt&&Wt.visible&&m.push(y,lt,Wt,B,Ft.z,_t)}}else mt.visible&&m.push(y,lt,mt,B,Ft.z,null)}}const tt=y.children;for(let lt=0,mt=tt.length;lt<mt;lt++)xa(tt[lt],I,B,z)}function ko(y,I,B,z){const U=y.opaque,tt=y.transmissive,lt=y.transparent;p.setupLightsView(B),et===!0&&Z.setGlobalState(M.clippingPlanes,B),z&&Et.viewport(C.copy(z)),U.length>0&&Ts(U,I,B),tt.length>0&&Ts(tt,I,B),lt.length>0&&Ts(lt,I,B),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Oo(y,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ii(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Es:xn,minFilter:ei,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const tt=p.state.transmissionRenderTarget[z.id],lt=z.viewport||C;tt.setSize(lt.z,lt.w);const mt=M.getRenderTarget();M.setRenderTarget(tt),M.getClearColor($),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),M.clear(),Vt&&wt.render(B);const gt=M.toneMapping;M.toneMapping=Fn;const Rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),et===!0&&Z.setGlobalState(M.clippingPlanes,z),Ts(y,B,z),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let _t=0,Wt=I.length;_t<Wt;_t++){const ne=I[_t],ae=ne.object,Re=ne.geometry,Xt=ne.material,xt=ne.group;if(Xt.side===He&&ae.layers.test(z.layers)){const ln=Xt.side;Xt.side=Le,Xt.needsUpdate=!0,Bo(ae,B,z,Re,Xt,xt),Xt.side=ln,Xt.needsUpdate=!0,Lt=!0}}Lt===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}M.setRenderTarget(mt),M.setClearColor($,K),Rt!==void 0&&(z.viewport=Rt),M.toneMapping=gt}function Ts(y,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,tt=y.length;U<tt;U++){const lt=y[U],mt=lt.object,gt=lt.geometry,Rt=z===null?lt.material:z,Lt=lt.group;mt.layers.test(B.layers)&&Bo(mt,I,B,gt,Rt,Lt)}}function Bo(y,I,B,z,U,tt){y.onBeforeRender(M,I,B,z,U,tt),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,I,B,z,y,tt),U.transparent===!0&&U.side===He&&U.forceSinglePass===!1?(U.side=Le,U.needsUpdate=!0,M.renderBufferDirect(B,I,z,U,y,tt),U.side=Bn,U.needsUpdate=!0,M.renderBufferDirect(B,I,z,U,y,tt),U.side=He):M.renderBufferDirect(B,I,z,U,y,tt),y.onAfterRender(M,I,B,z,U,tt)}function Rs(y,I,B){I.isScene!==!0&&(I=le);const z=bt.get(y),U=p.state.lights,tt=p.state.shadowsArray,lt=U.state.version,mt=yt.getParameters(y,U.state,tt,I,B),gt=yt.getProgramCacheKey(mt);let Rt=z.programs;z.environment=y.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Pt),Rt=new Map,z.programs=Rt);let Lt=Rt.get(gt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===lt)return Ho(y,mt),Lt}else mt.uniforms=yt.getUniforms(y),y.onBeforeCompile(mt,M),Lt=yt.acquireProgram(mt,gt),Rt.set(gt,Lt),z.uniforms=mt.uniforms;const _t=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(_t.clippingPlanes=Z.uniform),Ho(y,mt),z.needsLights=Th(y),z.lightsStateVersion=lt,z.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function zo(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=ha.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Ho(y,I){const B=bt.get(y);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function wh(y,I,B,z,U){I.isScene!==!0&&(I=le),w.resetTextureUnits();const tt=I.fog,lt=z.isMeshStandardMaterial?I.environment:null,mt=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Hi,gt=(z.isMeshStandardMaterial?k:v).get(z.envMap||lt),Rt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Lt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_t=!!B.morphAttributes.position,Wt=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color;let ae=Fn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ae=M.toneMapping);const Re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Xt=Re!==void 0?Re.length:0,xt=bt.get(z),ln=p.state.lights;if(et===!0&&(vt===!0||y!==x)){const Oe=y===x&&z.id===S;Z.setState(z,y,Oe)}let qt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==ln.state.version||xt.outputColorSpace!==mt||U.isBatchedMesh&&xt.batching===!1||!U.isBatchedMesh&&xt.batching===!0||U.isBatchedMesh&&xt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xt.instancing===!1||!U.isInstancedMesh&&xt.instancing===!0||U.isSkinnedMesh&&xt.skinning===!1||!U.isSkinnedMesh&&xt.skinning===!0||U.isInstancedMesh&&xt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xt.instancingMorph===!1&&U.morphTexture!==null||xt.envMap!==gt||z.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Z.numPlanes||xt.numIntersection!==Z.numIntersection)||xt.vertexAlphas!==Rt||xt.vertexTangents!==Lt||xt.morphTargets!==_t||xt.morphNormals!==Wt||xt.morphColors!==ne||xt.toneMapping!==ae||xt.morphTargetsCount!==Xt)&&(qt=!0):(qt=!0,xt.__version=z.version);let $e=xt.currentProgram;qt===!0&&($e=Rs(z,I,U));let ai=!1,Ie=!1,Xi=!1;const re=$e.getUniforms(),Qe=xt.uniforms;if(Et.useProgram($e.program)&&(ai=!0,Ie=!0,Xi=!0),z.id!==S&&(S=z.id,Ie=!0),ai||x!==y){Et.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),Nu(at),Fu(at),re.setValue(N,"projectionMatrix",at)):re.setValue(N,"projectionMatrix",y.projectionMatrix),re.setValue(N,"viewMatrix",y.matrixWorldInverse);const Mn=re.map.cameraPosition;Mn!==void 0&&Mn.setValue(N,Ct.setFromMatrixPosition(y.matrixWorld)),zt.logarithmicDepthBuffer&&re.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Ie=!0,Xi=!0)}if(U.isSkinnedMesh){re.setOptional(N,U,"bindMatrix"),re.setOptional(N,U,"bindMatrixInverse");const Oe=U.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),re.setValue(N,"boneTexture",Oe.boneTexture,w))}U.isBatchedMesh&&(re.setOptional(N,U,"batchingTexture"),re.setValue(N,"batchingTexture",U._matricesTexture,w),re.setOptional(N,U,"batchingIdTexture"),re.setValue(N,"batchingIdTexture",U._indirectTexture,w),re.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(N,"batchingColorTexture",U._colorsTexture,w));const qi=B.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&Tt.update(U,B,$e),(Ie||xt.receiveShadow!==U.receiveShadow)&&(xt.receiveShadow=U.receiveShadow,re.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qe.envMap.value=gt,Qe.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(Qe.envMapIntensity.value=I.environmentIntensity),Ie&&(re.setValue(N,"toneMappingExposure",M.toneMappingExposure),xt.needsLights&&Ah(Qe,Xi),tt&&z.fog===!0&&rt.refreshFogUniforms(Qe,tt),rt.refreshMaterialUniforms(Qe,z,V,Q,p.state.transmissionRenderTarget[y.id]),ha.upload(N,zo(xt),Qe,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ha.upload(N,zo(xt),Qe,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(N,"center",U.center),re.setValue(N,"modelViewMatrix",U.modelViewMatrix),re.setValue(N,"normalMatrix",U.normalMatrix),re.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Oe=z.uniformsGroups;for(let Mn=0,Sn=Oe.length;Mn<Sn;Mn++){const Vo=Oe[Mn];D.update(Vo,$e),D.bind(Vo,$e)}}return $e}function Ah(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Th(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,I,B){bt.get(y.texture).__webglTexture=I,bt.get(y.depthTexture).__webglTexture=B;const z=bt.get(y);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const B=bt.get(y);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,B=0){L=y,A=I,R=B;let z=!0,U=null,tt=!1,lt=!1;if(y){const gt=bt.get(y);if(gt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(gt.__hasExternalTextures)w.rebindTextures(y,bt.get(y.texture).__webglTexture,bt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const _t=y.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&bt.has(_t)&&(y.width!==_t.image.width||y.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Lt=bt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Lt[I])?U=Lt[I][B]:U=Lt[I],tt=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?U=bt.get(y).__webglMultisampledFramebuffer:Array.isArray(Lt)?U=Lt[B]:U=Lt,C.copy(y.viewport),H.copy(y.scissor),O=y.scissorTest}else C.copy(Mt).multiplyScalar(V).floor(),H.copy(Nt).multiplyScalar(V).floor(),O=Qt;if(Et.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&Et.drawBuffers(y,U),Et.viewport(C),Et.scissor(H),Et.setScissorTest(O),tt){const gt=bt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,B)}else if(lt){const gt=bt.get(y.texture),Rt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.__webglTexture,B||0,Rt)}S=-1},this.readRenderTargetPixels=function(y,I,B,z,U,tt,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){Et.bindFramebuffer(N.FRAMEBUFFER,mt);try{const gt=y.texture,Rt=gt.format,Lt=gt.type;if(!zt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U&&N.readPixels(I,B,z,U,It.convert(Rt),It.convert(Lt),tt)}finally{const gt=L!==null?bt.get(L).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(y,I,B,z,U,tt,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=bt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=y.texture,Rt=gt.format,Lt=gt.type;if(!zt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=y.width-z&&B>=0&&B<=y.height-U){Et.bindFramebuffer(N.FRAMEBUFFER,mt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),N.readPixels(I,B,z,U,It.convert(Rt),It.convert(Lt),0);const Wt=L!==null?bt.get(L).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,Wt);const ne=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Uu(N,ne,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(_t),N.deleteSync(ne),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,I=null,B=0){y.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,y=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(y.image.width*z),tt=Math.floor(y.image.height*z),lt=I!==null?I.x:0,mt=I!==null?I.y:0;w.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,lt,mt,U,tt),Et.unbindTexture()},this.copyTextureToTexture=function(y,I,B=null,z=null,U=0){y.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,y=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let tt,lt,mt,gt,Rt,Lt,_t,Wt,ne;const ae=y.isCompressedTexture?y.mipmaps[U]:y.image;B!==null?(tt=B.max.x-B.min.x,lt=B.max.y-B.min.y,mt=B.isBox3?B.max.z-B.min.z:1,gt=B.min.x,Rt=B.min.y,Lt=B.isBox3?B.min.z:0):(tt=ae.width,lt=ae.height,mt=ae.depth||1,gt=0,Rt=0,Lt=0),z!==null?(_t=z.x,Wt=z.y,ne=z.z):(_t=0,Wt=0,ne=0);const Re=It.convert(I.format),Xt=It.convert(I.type);let xt;I.isData3DTexture?(w.setTexture3D(I,0),xt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),xt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const ln=N.getParameter(N.UNPACK_ROW_LENGTH),qt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),$e=N.getParameter(N.UNPACK_SKIP_PIXELS),ai=N.getParameter(N.UNPACK_SKIP_ROWS),Ie=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Lt);const Xi=y.isDataArrayTexture||y.isData3DTexture,re=I.isDataArrayTexture||I.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Qe=bt.get(y),qi=bt.get(I),Oe=bt.get(Qe.__renderTarget),Mn=bt.get(qi.__renderTarget);Et.bindFramebuffer(N.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Sn=0;Sn<mt;Sn++)Xi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.get(y).__webglTexture,U,Lt+Sn),y.isDepthTexture?(re&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.get(I).__webglTexture,U,ne+Sn),N.blitFramebuffer(gt,Rt,tt,lt,_t,Wt,tt,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):re?N.copyTexSubImage3D(xt,U,_t,Wt,ne+Sn,gt,Rt,tt,lt):N.copyTexSubImage2D(xt,U,_t,Wt,ne+Sn,gt,Rt,tt,lt);Et.bindFramebuffer(N.READ_FRAMEBUFFER,null),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else re?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(xt,U,_t,Wt,ne,tt,lt,mt,Re,Xt,ae.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,U,_t,Wt,ne,tt,lt,mt,Re,ae.data):N.texSubImage3D(xt,U,_t,Wt,ne,tt,lt,mt,Re,Xt,ae):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_t,Wt,tt,lt,Re,Xt,ae.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_t,Wt,ae.width,ae.height,Re,ae.data):N.texSubImage2D(N.TEXTURE_2D,U,_t,Wt,tt,lt,Re,Xt,ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,ln),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$e),N.pixelStorei(N.UNPACK_SKIP_ROWS,ai),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie),U===0&&I.generateMipmaps&&N.generateMipmap(xt),Et.unbindTexture()},this.copyTextureToTexture3D=function(y,I,B=null,z=null,U=0){return y.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,y=arguments[2],I=arguments[3],U=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,B,z,U)},this.initRenderTarget=function(y){bt.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Et.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,Et.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Qn{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new Qn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class q0 extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Y0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zr,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,a=this.stride;i<a;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new T;class pa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),a=jt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class So extends Gi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xi;const Zi=new T,Mi=new T,Si=new T,bi=new ct,Qi=new ct,ah=new ie,Ks=new T,ts=new T,Js=new T,Hl=new ct,ja=new ct,Vl=new ct;class rh extends ye{constructor(t=new So){if(super(),this.isSprite=!0,this.type="Sprite",xi===void 0){xi=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Y0(e,5);xi.setIndex([0,1,2,0,2,3]),xi.setAttribute("position",new pa(n,3,0,!1)),xi.setAttribute("uv",new pa(n,2,3,!1))}this.geometry=xi,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),ah.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;Zs(Ks.set(-.5,-.5,0),Si,r,Mi,i,a),Zs(ts.set(.5,-.5,0),Si,r,Mi,i,a),Zs(Js.set(.5,.5,0),Si,r,Mi,i,a),Hl.set(0,0),ja.set(1,0),Vl.set(1,1);let o=t.ray.intersectTriangle(Ks,ts,Js,!1,Zi);if(o===null&&(Zs(ts.set(-.5,.5,0),Si,r,Mi,i,a),ja.set(0,1),o=t.ray.intersectTriangle(Ks,Js,ts,!1,Zi),o===null))return;const l=t.ray.origin.distanceTo(Zi);l<t.near||l>t.far||e.push({distance:l,point:Zi.clone(),uv:Ve.getInterpolation(Zi,Ks,ts,Js,Hl,ja,Vl,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zs(s,t,e,n,i,a){bi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Qi.x=a*bi.x-i*bi.y,Qi.y=i*bi.x+a*bi.y):Qi.copy(bi),s.copy(t),s.x+=Qi.x,s.y+=Qi.y,s.applyMatrix4(ah)}class oh extends we{constructor(t,e,n,i,a,r,o,l,c){super(t,e,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(a-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(a-1)}getTangent(t,e){let i=t-1e-4,a=t+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),l=e||(r.isVector2?new ct:new T);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],a=[],r=[],o=new T,l=new ie;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new T)}a[0]=new T,r[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ve(i[f-1].dot(i[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(i[f],a[f])}if(e===!0){let f=Math.acos(ve(a[0].dot(a[t]),-1,1));f/=t,i[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bo extends rn{constructor(t=0,e=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class j0 extends bo{constructor(t,e,n,i,a,r){super(t,e,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Eo(){let s=0,t=0,e=0,n=0;function i(a,r,o,l){s=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){i(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,u){let d=(r-a)/c-(o-a)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+u)+(l-o)/u;d*=h,f*=h,i(r,o,d,f)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+n*o}}}const Qs=new T,Ka=new Eo,Ja=new Eo,Za=new Eo;class K0 extends rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,a=i.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%a]:(Qs.subVectors(i[0],i[1]).add(i[0]),c=Qs);const u=i[o%a],d=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(Qs.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ka.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ja.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Za.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ja.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Za.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ka.calc(l),Ja.calc(l),Za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gl(s,t,e,n,i){const a=(n-t)*.5,r=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*s+e}function J0(s,t){const e=1-s;return e*e*t}function Z0(s,t){return 2*(1-s)*s*t}function Q0(s,t){return s*s*t}function hs(s,t,e,n){return J0(s,t)+Z0(s,e)+Q0(s,n)}function tg(s,t){const e=1-s;return e*e*e*t}function eg(s,t){const e=1-s;return 3*e*e*s*t}function ng(s,t){return 3*(1-s)*s*s*t}function ig(s,t){return s*s*s*t}function us(s,t,e,n,i){return tg(s,t)+eg(s,e)+ng(s,n)+ig(s,i)}class lh extends rn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(us(t,i.x,a.x,r.x,o.x),us(t,i.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sg extends rn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(us(t,i.x,a.x,r.x,o.x),us(t,i.y,a.y,r.y,o.y),us(t,i.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ch extends rn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ag extends rn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends rn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(hs(t,i.x,a.x,r.x),hs(t,i.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rg extends rn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(hs(t,i.x,a.x,r.x),hs(t,i.y,a.y,r.y),hs(t,i.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,a=(i.length-1)*t,r=Math.floor(a),o=a-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Gl(o,l.x,c.x,h.x,u.x),Gl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var $l=Object.freeze({__proto__:null,ArcCurve:j0,CatmullRomCurve3:K0,CubicBezierCurve:lh,CubicBezierCurve3:sg,EllipseCurve:bo,LineCurve:ch,LineCurve3:ag,QuadraticBezierCurve:hh,QuadraticBezierCurve3:rg,SplineCurve:uh});class og extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $l[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const r=i[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const r=a[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new $l[i.type]().fromJSON(i))}return this}}class lg extends og{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ch(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const a=new hh(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,a,r){const o=new lh(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new uh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,a,r),this}absarc(t,e,n,i,a,r){return this.absellipse(t,e,n,n,i,a,r),this}ellipse(t,e,n,i,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,a,r,o,l),this}absellipse(t,e,n,i,a,r,o,l){const c=new bo(t,e,n,i,a,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wo extends De{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ve(i,0,Math.PI*2);const a=[],r=[],o=[],l=[],c=[],h=1/e,u=new T,d=new ct,f=new T,g=new T,_=new T;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let E=0;E<=e;E++){const b=n+E*h*i,M=Math.sin(b),F=Math.cos(b);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*F,r.push(u.x,u.y,u.z),d.x=E/e,d.y=A/(t.length-1),o.push(d.x,d.y);const R=l[3*A+0]*M,L=l[3*A+1],S=l[3*A+0]*F;c.push(R,L,S)}}for(let E=0;E<e;E++)for(let b=0;b<t.length-1;b++){const M=b+E*t.length,F=M,A=M+t.length,R=M+t.length+1,L=M+1;a.push(F,A,L),a.push(R,L,A)}this.setIndex(a),this.setAttribute("position",new oe(r,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.points,t.segments,t.phiStart,t.phiLength)}}class kn extends wo{constructor(t=1,e=1,n=4,i=8){const a=new lg;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new kn(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ao extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new T,h=new ct;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class To extends De{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function E(){const M=new T,F=new T;let A=0;const R=(e-t)/n;for(let L=0;L<=a;L++){const S=[],x=L/a,C=x*(e-t)+t;for(let H=0;H<=i;H++){const O=H/i,$=O*l+o,K=Math.sin($),W=Math.cos($);F.x=C*K,F.y=-x*n+m,F.z=C*W,u.push(F.x,F.y,F.z),M.set(K,R,W).normalize(),d.push(M.x,M.y,M.z),f.push(O,1-x),S.push(g++)}_.push(S)}for(let L=0;L<i;L++)for(let S=0;S<a;S++){const x=_[S][L],C=_[S+1][L],H=_[S+1][L+1],O=_[S][L+1];(t>0||S!==0)&&(h.push(x,C,O),A+=3),(e>0||S!==a-1)&&(h.push(C,H,O),A+=3)}c.addGroup(p,A,0),p+=A}function b(M){const F=g,A=new ct,R=new T;let L=0;const S=M===!0?t:e,x=M===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const C=g;for(let H=0;H<=i;H++){const $=H/i*l+o,K=Math.cos($),W=Math.sin($);R.x=S*W,R.y=m*x,R.z=S*K,u.push(R.x,R.y,R.z),d.push(0,x,0),A.x=K*.5+.5,A.y=W*.5*x+.5,f.push(A.x,A.y),g++}for(let H=0;H<i;H++){const O=F+H,$=C+H;M===!0?h.push($,$+1,O):h.push($+1,$,O),L+=3}c.addGroup(p,L,M===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pi extends To{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Pi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ro extends De{constructor(t=.5,e=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new T,g=new ct;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=a+m/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,b=E,M=E+n+1,F=E+n+2,A=E+1;o.push(b,M,A),o.push(M,F,A)}}this.setIndex(o),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ss extends De{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],b=p/n;let M=0;p===0&&r===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let F=0;F<=e;F++){const A=F/e;u.x=-t*Math.cos(i+A*a)*Math.sin(r+b*o),u.y=t*Math.cos(r+b*o),u.z=t*Math.sin(i+A*a)*Math.sin(r+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+M,1-b),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const b=h[p][E+1],M=h[p][E],F=h[p+1][E],A=h[p+1][E+1];(p!==0||r>0)&&f.push(b,M,A),(p!==n-1||l<Math.PI)&&f.push(M,F,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Co extends De{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*a,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;r.push(_,m,E),r.push(m,p,E)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ee extends Gi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Wl={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class cg{constructor(t,e,n){const i=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,a===!1&&i.onStart!==void 0&&i.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const hg=new cg;class Po{constructor(t){this.manager=t!==void 0?t:hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,a){n.load(t,i,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Po.DEFAULT_MATERIAL_NAME="__DEFAULT";class ug extends Po{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=Wl.get(t);if(r!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0),r;const o=Ms("img");function l(){h(),Wl.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(u){h(),i&&i(u),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class dh extends Po{constructor(t){super(t)}load(t,e,n,i){const a=new we,r=new ug(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},n,i),a}}class Lo extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dg extends Lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qa=new ie,Xl=new T,ql=new T;class fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ql),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yl=new ie,es=new T,tr=new T;class fg extends fh{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),tr.copy(n.position),tr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(tr),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl)}}class ph extends Lo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class pg extends fh{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mg extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new pg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=jl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function jl(){return performance.now()}const Kl=new ie;class _g{constructor(t,e,n=0,i=1/0){this.ray=new Wc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Kl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(t,e=!0,n=[]){return to(t,this,n,e),n.sort(Jl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)to(t[i],this,n,e);return n.sort(Jl),n}}function Jl(s,t){return s.distance-t.distance}function to(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)to(a[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const ta={CYAN:0,AMBER:1},Li=1.38,ua=.55,vg=1.9,eo=-8.2,no=0,er=12,yg=.4,mh=1.52,bs=6.4,xg=Math.cos(70*Math.PI/180),Mg=Math.cos(80*Math.PI/180),Zl=.35,Sg=20,bg=1.5,Ql=.42,Eg=.6,tc=10,wg=240,Ag=5,Tg=6,ec=2.75,nc=1.35,Rg=1,Cg=3,Pg=6,Lg=.85,Dg=12,Ig=.4,Un={stamina:3,struggle:3,tickle:3},Ug=28,Ng=.95,Fg=11.2,ma=[{hair:1708560,skin:12886160,cloth:3812920,name:"Elara Case"},{hair:3875352,skin:9263676,cloth:2896704,name:"Kora Vale"},{hair:13153418,skin:14730152,cloth:4864048,name:"Sable Quinn"},{hair:920588,skin:6044202,cloth:2761768,name:"Ryn Ashford"},{hair:6960168,skin:13934714,cloth:2372142,name:"Vesh Marlowe"},{hair:2759202,skin:11565666,cloth:3813428,name:"Nim Cortez"},{hair:4861984,skin:15782580,cloth:3024944,name:"Lyra Finch"},{hair:1118228,skin:8015416,cloth:4207160,name:"Toren Blake"},{hair:10123856,skin:13607040,cloth:2240570,name:"Mira Solis"},{hair:2103320,skin:9660492,cloth:3682348,name:"Cass Wynn"},{hair:5914680,skin:14530714,cloth:2762804,name:"Juno Hale"},{hair:1313808,skin:7226932,cloth:3812392,name:"Briar Knox"}],ds=[{slug:"KoraVale",display:"Kora Vale"},{slug:"SableQuinn",display:"Sable Quinn"},{slug:"RynAshford",display:"Ryn Ashford"},{slug:"VeshMarlowe",display:"Vesh Marlowe"},{slug:"NimCortez",display:"Nim Cortez"},{slug:"LyraFinch",display:"Lyra Finch"},{slug:"TorenBlake",display:"Toren Blake"},{slug:"MiraSolis",display:"Mira Solis"},{slug:"CassWynn",display:"Cass Wynn"},{slug:"JunoHale",display:"Juno Hale"},{slug:"BriarKnox",display:"Briar Knox"},{slug:"EmberLang",display:"Ember Lang"}];ds.map(s=>s.display);function kg(){return{coins:12,level:1,xp:0,unspent:7,blocks:{stamina:0,struggle:0,tickle:0},look:0,weapon:0,armor:0,ownedWeapons:[0],ownedArmors:[0]}}function nr(s){const t=kg();if(!s||typeof s!="object")return t;const e=s.blocks??t.blocks,n=Array.isArray(s.ownedWeapons)?s.ownedWeapons:t.ownedWeapons,i=Array.isArray(s.ownedArmors)?s.ownedArmors:t.ownedArmors;return{coins:Math.max(0,Number(s.coins)||0),level:ns(s.level??1,1,10),xp:Math.max(0,Number(s.xp)||0),unspent:Math.max(0,Number(s.unspent)||0),blocks:{stamina:ns(e.stamina??0,0,10),struggle:ns(e.struggle??0,0,10),tickle:ns(e.tickle??0,0,10)},look:ns(s.look??0,0,12),weapon:Number(s.weapon)||0,armor:Number(s.armor)||0,ownedWeapons:ic([0,...n]),ownedArmors:ic([0,...i])}}function ns(s,t,e){return Math.max(t,Math.min(e,Math.round(Number(s)||0)))}function ic(s){return[...new Set(s.map(t=>Math.max(0,Math.round(Number(t)||0))))].sort((t,e)=>t-e)}class Og{constructor(){P(this,"group",new Jt);P(this,"walls",[]);P(this,"decks",[]);P(this,"ramp",{minx:-6,maxx:2,minz:12.2,maxz:16.6,y0:0,y1:3.4});P(this,"spawnA",new T(-18,0,0));P(this,"spawnB",new T(18,0,0));P(this,"soloPads",[new T(-18,0,0),new T(18,0,0),new T(0,0,0),new T(-10,0,12),new T(10,0,-12),new T(-12,0,-8),new T(12,0,6),new T(-4,0,-14),new T(6,0,12),new T(0,0,16),new T(-8,0,4),new T(8,0,-4)]);P(this,"matMetal");P(this,"matDark");P(this,"matFloor");this.matMetal=new Ee({color:5919564,metalness:.72,roughness:.38}),this.matDark=new Ee({color:2762276,metalness:.55,roughness:.5}),this.matFloor=new Ee({color:3814704,metalness:.4,roughness:.62}),this.build()}addWall(t,e,n,i,a=3.6,r=0){const o=new St(new te(n,a,i),this.matMetal);o.position.set(t,r+a/2,e),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.walls.push({minx:t-n/2,maxx:t+n/2,minz:e-i/2,maxz:e+i/2,miny:r,maxy:r+a})}addDeck(t,e,n,i,a,r=.35){const o=new St(new te(n,r,i),this.matDark);o.position.set(t,a+r/2,e),o.receiveShadow=!0,this.group.add(o),this.decks.push({minx:t-n/2,maxx:t+n/2,minz:e-i/2,maxz:e+i/2,miny:a,maxy:a+r+.05})}build(){const t=new St(new te(52,.4,40),this.matFloor);t.position.y=-.2,t.receiveShadow=!0,this.group.add(t),this.addWall(0,-19.5,52,1.2,4.2),this.addWall(0,19.5,52,1.2,4.2),this.addWall(-25.5,0,1.2,40,4.2),this.addWall(25.5,0,1.2,40,4.2),this.addWall(-18,-8,12,1,3.2),this.addWall(-18,8,12,1,3.2),this.addWall(18,-8,12,1,3.2),this.addWall(18,8,12,1,3.2),this.addWall(-8,-6.6,1.4,6.2,3.4),this.addWall(-8,6.6,1.4,6.2,3.4),this.addWall(8,-6.6,1.4,6.2,3.4),this.addWall(8,8.4,1.4,6.2,3.4),this.addWall(-6,10,8,1.3,3.4),this.addWall(8,10,8,1.3,3.4),this.addWall(-4,-10,10,1.3,3.4),this.addWall(6,-10,1.3,6,3.4),this.addWall(-12,8,6,1.2,3.2),this.addWall(12,-6,6,1.2,3.2);const e=new St(new te(32,.05,1.7),new Ee({color:3813932,emissive:5914672,emissiveIntensity:.35,metalness:.2,roughness:.7}));e.position.set(0,.03,0),e.receiveShadow=!0,this.group.add(e),this.addLaneMarks(),this.addWall(-3,5.5,1.6,1.6,4),this.addWall(3,-5.5,1.6,1.6,4),this.addDeck(4,14.4,12,4.8,3.35);const n=new St(new te(8.4,.28,3.4),this.matDark);n.position.set(-2,1.7,14.4),n.rotation.z=-.38,n.receiveShadow=!0,this.group.add(n);const i=new ph(8939093,12,28,2);i.position.set(0,6,0),this.group.add(i)}addLaneMarks(){const t=a=>new Ee({color:2762276,emissive:a,emissiveIntensity:.42,metalness:.2,roughness:.7}),e=t(6211800),n=t(13935194),i=(a,r,o)=>{const l=new St(new Pi(.2,.62,3),o);l.rotation.z=r?-Math.PI/2:Math.PI/2,l.position.set(a,.12,0),this.group.add(l)};i(-14.2,!0,e),i(-10.4,!0,e),i(14.2,!1,n),i(10.4,!1,n)}groundY(t,e){const n=this.ramp;if(t>=n.minx&&t<=n.maxx&&e>=n.minz&&e<=n.maxz){const i=(t-n.minx)/(n.maxx-n.minx);return wi.lerp(n.y0,n.y1,i)}for(const i of this.decks)if(t>=i.minx&&t<=i.maxx&&e>=i.minz&&e<=i.maxz)return 3.45;return 0}inSpawnPocket(t,e){return e===0?t.x<-14&&Math.abs(t.z)<7.2:t.x>14&&Math.abs(t.z)<7.2}clampSpawnPocket(t,e,n){const i=wi.clamp(e,-7.19,7.19);return n===0?{x:Math.min(t,-14.01),z:i}:{x:Math.max(t,14.01),z:i}}resolve(t,e,n,i=yg){let a=t,r=e;for(let o=0;o<4;o++)for(const l of this.walls){if(n+1.4<l.miny||n>l.maxy)continue;Math.max(l.minx-i,Math.min(a,l.maxx+i)),Math.max(l.minz-i,Math.min(r,l.maxz+i));const c=a>l.minx-i&&a<l.maxx+i,h=r>l.minz-i&&r<l.maxz+i;if(c&&h){const u=a-(l.minx-i),d=l.maxx+i-a,f=r-(l.minz-i),g=l.maxz+i-r,_=Math.min(u,d,f,g);_===u?a=l.minx-i-.001:_===d?a=l.maxx+i+.001:_===f?r=l.minz-i-.001:r=l.maxz+i+.001}}return a=wi.clamp(a,-24.6,24.6),r=wi.clamp(r,-18.6,18.6),{x:a,z:r}}navWaypoint(t,e){const n=e.y;if(!(t.x*e.x<0&&Math.abs(t.x)>4&&Math.abs(e.x)>2))return Math.abs(t.z)>3.2&&Math.abs(t.x)>2&&Math.abs(e.z)<2?new T(t.x,n,0):e.clone();if(Math.abs(t.z)>1.1)return new T(t.x,n,0);const a=t.x<e.x?[-10,-4,0,4,10,e.x]:[10,4,0,-4,-10,e.x];for(const r of a){if(t.x<e.x&&t.x<r-.85)return new T(r,n,0);if(t.x>e.x&&t.x>r+.85)return new T(r,n,0)}return e.clone()}laneRoute(t,e){return this.navWaypoint(t,e)}blockedAt(t,e,n,i=.9){const a=this.resolve(t,e,n,i);return Math.hypot(a.x-t,a.z-e)>.04}findNudge(t,e){const n=(o,l)=>{const c=this.groundY(o,l);if(Math.abs(c-t.y)>.85||this.inSpawnPocket(new T(o,c,l),0)||this.inSpawnPocket(new T(o,c,l),1)||this.blockedAt(o,l,c,e))return-1;let h=0;const u=[[1,0],[-1,0],[0,1],[0,-1]];for(const[f,g]of u){const _=this.resolve(o+f*1.1,l+g*1.1,c,e);h+=Math.hypot(_.x-o,_.z-l)}const d=Math.hypot(o-t.x,l-t.z);return h-d*.2};if(n(t.x,t.z)>=0)return t.clone();const i=[];for(let o=0;o<16;o++){const l=o/16*Math.PI*2;i.push([Math.cos(l),Math.sin(l)])}let a=null,r=-1;for(let o=.3;o<=bg+.01;o+=.3)for(const[l,c]of i){const h=t.x+l*o,u=t.z+c*o,d=n(h,u);d>r&&(r=d,a=new T(h,this.groundY(h,u),u))}return a}}const Bg=""+new URL("BriarKnox-Dpa0Hutf.jpg",import.meta.url).href,zg=""+new URL("CassWynn-DlWuid-D.jpg",import.meta.url).href,Hg=""+new URL("EmberLang-DX9vz0jP.jpg",import.meta.url).href,Vg=""+new URL("JunoHale-CrdaXpZ2.jpg",import.meta.url).href,Gg=""+new URL("KoraVale-Bxh0eoY1.jpg",import.meta.url).href,$g=""+new URL("LyraFinch-CSDNR9Pf.jpg",import.meta.url).href,Wg=""+new URL("MiraSolis-CmAre_4Z.jpg",import.meta.url).href,Xg=""+new URL("NimCortez-_04Y7Q6K.jpg",import.meta.url).href,qg=""+new URL("RynAshford-Dug0-cz-.jpg",import.meta.url).href,Yg=""+new URL("SableQuinn-mzonjDUr.jpg",import.meta.url).href,jg=""+new URL("TorenBlake-CbL0FLGN.jpg",import.meta.url).href,Kg=""+new URL("VeshMarlowe-BWw8zQpl.jpg",import.meta.url).href,Jg=""+new URL("ElaraCase-D5jHayJQ.jpg",import.meta.url).href,Zg=Object.assign({"../../assets/characters/amateur/BriarKnox.jpg":Bg,"../../assets/characters/amateur/CassWynn.jpg":zg,"../../assets/characters/amateur/EmberLang.jpg":Hg,"../../assets/characters/amateur/JunoHale.jpg":Vg,"../../assets/characters/amateur/KoraVale.jpg":Gg,"../../assets/characters/amateur/LyraFinch.jpg":$g,"../../assets/characters/amateur/MiraSolis.jpg":Wg,"../../assets/characters/amateur/NimCortez.jpg":Xg,"../../assets/characters/amateur/RynAshford.jpg":qg,"../../assets/characters/amateur/SableQuinn.jpg":Yg,"../../assets/characters/amateur/TorenBlake.jpg":jg,"../../assets/characters/amateur/VeshMarlowe.jpg":Kg}),Qg=Object.assign({"../../assets/characters/player/ElaraCase.jpg":Jg}),gh={};for(const[s,t]of Object.entries(Zg)){const e=s.split("/").pop();e&&(gh[e.replace(/\.jpg$/i,"")]=t)}const _h={};for(const[s,t]of Object.entries(Qg)){const e=s.split("/").pop();e&&(_h[e.replace(/\.jpg$/i,"")]=t)}function On(s){if(s)return gh[s]??_h[s]}const t_="ElaraCase",Di=[{id:0,slug:t_,display:"Elara Case",metalException:!0},...ds.map((s,t)=>({id:t+1,slug:s.slug,display:s.display,metalException:!1}))];Di.length-1;function Ii(s){return Di.find(t=>t.id===s)??Di[0]}const sc=new Map;function e_(s,t,e){const n=Math.max(s,t,e),i=Math.min(s,t,e);return n>228&&i>214&&n-i<22}function n_(s,t,e){return s<<16|t<<8|e}function i_(s){return new Promise((t,e)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=()=>e(new Error("still load failed")),n.src=s})}function s_(s){const t=s.naturalWidth,e=s.naturalHeight,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.drawImage(s,0,0);const a=i.getImageData(0,0,t,e),r=a.data,o=new Uint8Array(t*e),l=[],c=(A,R)=>{if(A<0||R<0||A>=t||R>=e)return;const L=R*t+A;if(o[L])return;const S=L*4;e_(r[S],r[S+1],r[S+2])&&(o[L]=1,l.push(L))};for(let A=0;A<t;A++)c(A,0),c(A,e-1);for(let A=0;A<e;A++)c(0,A),c(t-1,A);for(;l.length;){const A=l.pop(),R=A%t,L=A/t|0,S=A*4;r[S+3]=0,c(R+1,L),c(R-1,L),c(R,L+1),c(R,L-1)}for(let A=1;A<e-1;A++)for(let R=1;R<t-1;R++){const L=(A*t+R)*4;if(r[L+3]===0)continue;let S=0;r[((A-1)*t+R)*4+3]===0&&S++,r[((A+1)*t+R)*4+3]===0&&S++,r[(A*t+R-1)*4+3]===0&&S++,r[(A*t+R+1)*4+3]===0&&S++,S&&(r[L+3]=Math.max(0,r[L+3]-S*70))}let h=t,u=e,d=0,f=0;for(let A=0;A<e;A++)for(let R=0;R<t;R++)r[(A*t+R)*4+3]<40||(R<h&&(h=R),A<u&&(u=A),R>d&&(d=R),A>f&&(f=A));d<=h&&(h=0,u=0,d=t-1,f=e-1);const g=4;h=Math.max(0,h-g),u=Math.max(0,u-g),d=Math.min(t-1,d+g),f=Math.min(e-1,f+g),i.putImageData(a,0,0);const _=d-h+1,m=f-u+1,p=document.createElement("canvas");p.width=_,p.height=m,p.getContext("2d").drawImage(n,h,u,_,m,0,0,_,m);const E=Math.max(8,Math.floor(m*.28)),b=document.createElement("canvas");b.width=_,b.height=E,b.getContext("2d").drawImage(p,0,0,_,E,0,0,_,E);const M=p.getContext("2d").getImageData(0,0,_,m).data,F=(A,R,L,S)=>{let x=0,C=0,H=0,O=0;const $=Math.max(0,Math.floor(A)),K=Math.max(0,Math.floor(R)),W=Math.min(_-1,Math.floor(L)),Q=Math.min(m-1,Math.floor(S));for(let V=K;V<=Q;V+=2)for(let nt=$;nt<=W;nt+=2){const ht=(V*_+nt)*4;M[ht+3]<80||(x+=M[ht],C+=M[ht+1],H+=M[ht+2],O++)}return O?n_(x/O|0,C/O|0,H/O|0):12886160};return{keyedUrl:p.toDataURL("image/png"),faceUrl:b.toDataURL("image/png"),hair:F(_*.3,m*.02,_*.7,m*.16),skin:F(_*.42,m*.22,_*.58,m*.32),cloth:F(_*.35,m*.48,_*.65,m*.62)}}function zi(s){let t=sc.get(s);return t||(t=i_(s).then(s_),sc.set(s,t)),t}const a_="run",r_="BriarKnox",o_="Briar Knox",l_=!1,c_=!1,h_={rate:6.84,amp:.456,lean:.057,billBob:.029,billRate:8.075},u_={rate:10.45,amp:.684,lean:.171,billBob:.065,billRate:12.35},d_=4.4,f_=.4,p_={clip:a_,slug:r_,display:o_,playerOnly:l_,metalException:c_,walk:h_,run:u_,runSpeed:d_,walkSpeed:f_},m_="run",g_="CassWynn",__="Cass Wynn",v_=!1,y_=!1,x_={rate:7.488,amp:.499,lean:.062,billBob:.031,billRate:8.84},M_={rate:11.44,amp:.749,lean:.187,billBob:.071,billRate:13.52},S_=4.4,b_=.4,E_={clip:m_,slug:g_,display:__,playerOnly:v_,metalException:y_,walk:x_,run:M_,runSpeed:S_,walkSpeed:b_},w_="run",A_="ElaraCase",T_="Elara Case",R_=!0,C_=!0,P_={rate:6.624,amp:.442,lean:.058,billBob:.028,billRate:7.82},L_={rate:10.12,amp:.662,lean:.174,billBob:.064,billRate:11.96},D_=4.4,I_=.4,U_={clip:w_,slug:A_,display:T_,playerOnly:R_,metalException:C_,walk:P_,run:L_,runSpeed:D_,walkSpeed:I_},N_="run",F_="EmberLang",k_="Ember Lang",O_=!1,B_=!1,z_={rate:7.056,amp:.47,lean:.059,billBob:.03,billRate:8.33},H_={rate:10.78,amp:.706,lean:.176,billBob:.068,billRate:12.74},V_=4.4,G_=.4,$_={clip:N_,slug:F_,display:k_,playerOnly:O_,metalException:B_,walk:z_,run:H_,runSpeed:V_,walkSpeed:G_},W_="run",X_="JunoHale",q_="Juno Hale",Y_=!1,j_=!1,K_={rate:6.624,amp:.442,lean:.055,billBob:.028,billRate:7.82},J_={rate:10.12,amp:.662,lean:.166,billBob:.064,billRate:11.96},Z_=4.4,Q_=.4,tv={clip:W_,slug:X_,display:q_,playerOnly:Y_,metalException:j_,walk:K_,run:J_,runSpeed:Z_,walkSpeed:Q_},ev="run",nv="KoraVale",iv="Kora Vale",sv=!1,av=!1,rv={rate:6.84,amp:.456,lean:.057,billBob:.029,billRate:8.075},ov={rate:10.45,amp:.684,lean:.171,billBob:.065,billRate:12.35},lv=4.4,cv=.4,hv={clip:ev,slug:nv,display:iv,playerOnly:sv,metalException:av,walk:rv,run:ov,runSpeed:lv,walkSpeed:cv},uv="run",dv="LyraFinch",fv="Lyra Finch",pv=!1,mv=!1,gv={rate:6.84,amp:.456,lean:.057,billBob:.029,billRate:8.075},_v={rate:10.45,amp:.684,lean:.171,billBob:.065,billRate:12.35},vv=4.4,yv=.4,xv={clip:uv,slug:dv,display:fv,playerOnly:pv,metalException:mv,walk:gv,run:_v,runSpeed:vv,walkSpeed:yv},Mv="run",Sv="MiraSolis",bv="Mira Solis",Ev=!1,wv=!1,Av={rate:7.272,amp:.485,lean:.061,billBob:.03,billRate:8.585},Tv={rate:11.11,amp:.727,lean:.182,billBob:.07,billRate:13.13},Rv=4.4,Cv=.4,Pv={clip:Mv,slug:Sv,display:bv,playerOnly:Ev,metalException:wv,walk:Av,run:Tv,runSpeed:Rv,walkSpeed:Cv},Lv="run",Dv="NimCortez",Iv="Nim Cortez",Uv=!1,Nv=!1,Fv={rate:6.624,amp:.442,lean:.055,billBob:.028,billRate:7.82},kv={rate:10.12,amp:.662,lean:.166,billBob:.064,billRate:11.96},Ov=4.4,Bv=.4,zv={clip:Lv,slug:Dv,display:Iv,playerOnly:Uv,metalException:Nv,walk:Fv,run:kv,runSpeed:Ov,walkSpeed:Bv},Hv="run",Vv="RynAshford",Gv="Ryn Ashford",$v=!1,Wv=!1,Xv={rate:7.272,amp:.485,lean:.061,billBob:.03,billRate:8.585},qv={rate:11.11,amp:.727,lean:.182,billBob:.07,billRate:13.13},Yv=4.4,jv=.4,Kv={clip:Hv,slug:Vv,display:Gv,playerOnly:$v,metalException:Wv,walk:Xv,run:qv,runSpeed:Yv,walkSpeed:jv},Jv="run",Zv="SableQuinn",Qv="Sable Quinn",ty=!1,ey=!1,ny={rate:7.056,amp:.47,lean:.059,billBob:.03,billRate:8.33},iy={rate:10.78,amp:.706,lean:.176,billBob:.068,billRate:12.74},sy=4.4,ay=.4,ry={clip:Jv,slug:Zv,display:Qv,playerOnly:ty,metalException:ey,walk:ny,run:iy,runSpeed:sy,walkSpeed:ay},oy="run",ly="TorenBlake",cy="Toren Blake",hy=!1,uy=!1,dy={rate:7.056,amp:.47,lean:.059,billBob:.03,billRate:8.33},fy={rate:10.78,amp:.706,lean:.176,billBob:.068,billRate:12.74},py=4.4,my=.4,gy={clip:oy,slug:ly,display:cy,playerOnly:hy,metalException:uy,walk:dy,run:fy,runSpeed:py,walkSpeed:my},_y="run",vy="VeshMarlowe",yy="Vesh Marlowe",xy=!1,My=!1,Sy={rate:7.488,amp:.499,lean:.062,billBob:.031,billRate:8.84},by={rate:11.44,amp:.749,lean:.187,billBob:.071,billRate:13.52},Ey=4.4,wy=.4,Ay={clip:_y,slug:vy,display:yy,playerOnly:xy,metalException:My,walk:Sy,run:by,runSpeed:Ey,walkSpeed:wy},Ty=Object.assign({"../../assets/binds/run/BriarKnox.run.json":p_,"../../assets/binds/run/CassWynn.run.json":E_,"../../assets/binds/run/ElaraCase.run.json":U_,"../../assets/binds/run/EmberLang.run.json":$_,"../../assets/binds/run/JunoHale.run.json":tv,"../../assets/binds/run/KoraVale.run.json":hv,"../../assets/binds/run/LyraFinch.run.json":xv,"../../assets/binds/run/MiraSolis.run.json":Pv,"../../assets/binds/run/NimCortez.run.json":zv,"../../assets/binds/run/RynAshford.run.json":Kv,"../../assets/binds/run/SableQuinn.run.json":ry,"../../assets/binds/run/TorenBlake.run.json":gy,"../../assets/binds/run/VeshMarlowe.run.json":Ay}),io={};var bc;for(const[s,t]of Object.entries(Ty)){const e=(bc=s.split("/").pop())==null?void 0:bc.replace(/\.run\.json$/i,"");!e||!t||(io[e]=t,t.slug&&(io[t.slug]=t))}const ac={clip:"run",slug:"default",display:"Default",walk:{rate:7.2,amp:.48,lean:.06,billBob:.025,billRate:8.5},run:{rate:11,amp:.72,lean:.18,billBob:.055,billRate:13},runSpeed:4.4,walkSpeed:.4};function Ry(s){return s?io[s]??ac:ac}function Cy(s,t){return t==="run"?s.run:s.walk}function ir(s,t=.62){return new Ee({color:s,roughness:t,metalness:0})}function da(s,t,e,n=6){const i=new St(new kn(s,t,3,n),e);return i.castShadow=!0,i}function Cn(s,t,e,n=6){const i=da(s,t,e,n);return i.position.y=-(t/2),i}class Py{constructor(t,e,n,i){P(this,"root",new Jt);P(this,"hips");P(this,"spine");P(this,"chest");P(this,"neck");P(this,"head");P(this,"lShoulder");P(this,"lElbow");P(this,"rShoulder");P(this,"rElbow");P(this,"lHip");P(this,"lKnee");P(this,"rHip");P(this,"rKnee");P(this,"face");P(this,"skinMat");P(this,"clothMat");P(this,"hairMat");P(this,"weaponMesh",null);P(this,"armorMesh",null);P(this,"armorChest",null);P(this,"shortsMesh");P(this,"faceTex");this.skinMat=ir(t,.52),this.clothMat=ir(e,.72),this.hairMat=ir(n,.78),this.hips=new Jt,this.hips.position.y=.92,this.root.add(this.hips),this.shortsMesh=new St(new te(.34,.16,.2),this.clothMat),this.shortsMesh.position.y=-.02,this.hips.add(this.shortsMesh),this.lHip=new Jt,this.lHip.position.set(-.09,-.06,0),this.hips.add(this.lHip),this.lHip.add(Cn(.065,.34,this.skinMat)),this.lKnee=new Jt,this.lKnee.position.y=-.36,this.lHip.add(this.lKnee),this.lKnee.add(Cn(.055,.34,this.skinMat));const a=new St(new te(.08,.05,.16),this.skinMat);a.position.set(0,-.38,.03),this.lKnee.add(a),this.rHip=new Jt,this.rHip.position.set(.09,-.06,0),this.hips.add(this.rHip),this.rHip.add(Cn(.065,.34,this.skinMat)),this.rKnee=new Jt,this.rKnee.position.y=-.36,this.rHip.add(this.rKnee),this.rKnee.add(Cn(.055,.34,this.skinMat));const r=a.clone();this.rKnee.add(r),this.spine=new Jt,this.spine.position.y=.08,this.hips.add(this.spine),this.spine.add(da(.12,.22,this.skinMat)),this.chest=new Jt,this.chest.position.y=.22,this.spine.add(this.chest),this.chest.add(da(.13,.2,this.skinMat));const o=new St(new te(.28,.08,.16),this.clothMat);o.position.y=.12,this.chest.add(o),this.lShoulder=new Jt,this.lShoulder.position.set(-.2,.12,0),this.chest.add(this.lShoulder),this.lShoulder.add(Cn(.05,.24,this.skinMat)),this.lElbow=new Jt,this.lElbow.position.y=-.26,this.lShoulder.add(this.lElbow),this.lElbow.add(Cn(.045,.22,this.skinMat)),this.rShoulder=new Jt,this.rShoulder.position.set(.2,.12,0),this.chest.add(this.rShoulder),this.rShoulder.add(Cn(.05,.24,this.skinMat)),this.rElbow=new Jt,this.rElbow.position.y=-.26,this.rShoulder.add(this.rElbow),this.rElbow.add(Cn(.045,.22,this.skinMat)),this.neck=new Jt,this.neck.position.y=.22,this.chest.add(this.neck),this.neck.add(da(.045,.08,this.skinMat,5)),this.head=new Jt,this.head.position.y=.16,this.neck.add(this.head);const l=new St(new Ss(.13,10,8),this.skinMat);this.head.add(l);const c=new St(new Ss(.14,8,6),this.hairMat);c.position.y=.05,c.scale.set(1.08,.72,1.12),this.head.add(c),this.face=new St(new $i(.2,.24),new si({transparent:!0,opacity:0,depthWrite:!1})),this.face.position.set(0,.02,-.128),this.face.rotation.y=Math.PI,this.head.add(this.face);const h=new St(new Co(.16,.018,6,14),new Ee({color:i,emissive:i,emissiveIntensity:.55,metalness:.15,roughness:.45}));h.position.y=.02,h.rotation.x=Math.PI/2,this.chest.add(h);const u=new St(new Ao(.28,12),new si({color:0,transparent:!0,opacity:.28,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.02,this.root.add(u)}setWeapon(t){if(this.weaponMesh&&(this.rElbow.remove(this.weaponMesh),this.weaponMesh.traverse(n=>{if(!(n instanceof St))return;n.geometry.dispose();const i=n.material;Array.isArray(i)?i.forEach(a=>a.dispose()):i.dispose()}),this.weaponMesh=null),t<=0)return;const e=Math.max(1,Math.min(6,Math.round(t)));this.weaponMesh=Iy(e),this.rElbow.add(this.weaponMesh)}setArmor(t){var i,a;if(this.armorMesh&&((i=this.armorMesh.parent)==null||i.remove(this.armorMesh),rc(this.armorMesh),this.armorMesh=null),this.armorChest&&((a=this.armorChest.parent)==null||a.remove(this.armorChest),rc(this.armorChest),this.armorChest=null),this.shortsMesh.visible=!0,t<=0)return;const e=Math.max(1,Math.min(8,Math.round(t))),n=Fy(e);this.armorMesh=n.hips,this.armorChest=n.chest,this.hips.add(this.armorMesh),this.chest.add(this.armorChest),this.shortsMesh.visible=e<3}applyLook(t){this.skinMat.color.setHex(t.skin),this.clothMat.color.setHex(t.cloth),this.hairMat.color.setHex(t.hair),new dh().load(t.faceUrl,n=>{n.colorSpace=Pe,this.faceTex=n;const i=this.face.material;i.map=n,i.opacity=1,i.needsUpdate=!0})}pose(t,e,n){if(this.hips.rotation.set(0,0,0),this.spine.rotation.set(0,0,0),this.chest.rotation.set(0,0,0),this.neck.rotation.set(0,0,0),this.head.rotation.set(0,0,0),this.lShoulder.rotation.set(0,0,.12),this.rShoulder.rotation.set(0,0,-.12),this.lElbow.rotation.set(.15,0,0),this.rElbow.rotation.set(.15,0,0),this.lHip.rotation.set(0,0,.03),this.rHip.rotation.set(0,0,-.03),this.lKnee.rotation.set(.08,0,0),this.rKnee.rotation.set(.08,0,0),this.chest.position.y=.22,this.root.position.y=0,t==="idle"){const i=Math.sin(e*2.2)*.015;this.spine.rotation.x=i,this.chest.position.y=.22+i*.4,this.lShoulder.rotation.z=.12+Math.sin(e*2.2)*.02,this.rShoulder.rotation.z=-.12-Math.sin(e*2.2)*.02;return}if(t==="walk"||t==="run"){const i=t==="run",a=n,r=(a==null?void 0:a.rate)??(i?11:7.2),o=(a==null?void 0:a.amp)??(i?.72:.48),l=(a==null?void 0:a.lean)??(i?.18:.06),c=e*r;this.lHip.rotation.x=Math.sin(c)*o,this.rHip.rotation.x=Math.sin(c+Math.PI)*o,this.lKnee.rotation.x=.1+Math.max(0,-Math.sin(c))*(i?.9:.55),this.rKnee.rotation.x=.1+Math.max(0,-Math.sin(c+Math.PI))*(i?.9:.55),this.lShoulder.rotation.x=Math.sin(c+Math.PI)*(i?.7:.42),this.rShoulder.rotation.x=Math.sin(c)*(i?.7:.42),this.lElbow.rotation.x=.35+(i?.5:.2),this.rElbow.rotation.x=.35+(i?.5:.2),this.spine.rotation.x=l,this.chest.rotation.y=Math.sin(c)*(i?.12:.06),this.root.position.y=Math.abs(Math.sin(c*2))*(i?.06:.03);return}if(t==="tickle"){const i=n,a=(i==null?void 0:i.rate)??28,r=(i==null?void 0:i.twistRate)??37,o=(i==null?void 0:i.spineBase)??.28,l=(i==null?void 0:i.spineAmp)??.04,c=(i==null?void 0:i.chestAmp)??.08,h=(i==null?void 0:i.shoulderAmp)??.22,u=(i==null?void 0:i.elbowAmp)??.4,d=Math.sin(e*a),f=Math.sin(e*r);this.spine.rotation.x=o+d*l,this.chest.rotation.y=f*c,this.lShoulder.rotation.set(-1.25,.2,.55+d*h),this.rShoulder.rotation.set(-1.15,-.25,-.45-d*h),this.lElbow.rotation.x=-.45+d*u,this.rElbow.rotation.x=-.3-d*u*.95,this.head.rotation.x=.2,this.lHip.rotation.x=.12,this.rHip.rotation.x=-.08,this.weaponMesh&&(this.weaponMesh.rotation.z=d*((i==null?void 0:i.weaponWag)??.45));return}if(t==="squirm"){const i=n,a=(i==null?void 0:i.rate)??14,r=(i==null?void 0:i.amp)??.1,o=(i==null?void 0:i.lean)??.12,l=Math.sin(e*a),c=Math.sin(e*a*.68);this.hips.rotation.z=l*r,this.spine.rotation.set(.18+c*o*.67,0,l*o*1.15),this.chest.rotation.z=-l*r*.8,this.head.rotation.set(.25+c*o*.83,l*o,0),this.lShoulder.rotation.set(-.4,0,.55+l*r*2),this.rShoulder.rotation.set(-.35,0,-.55-l*r*2),this.lElbow.rotation.x=.6,this.rElbow.rotation.x=.55,this.lHip.rotation.x=.2+l*r*.8,this.rHip.rotation.x=.15-l*r*.8,this.lKnee.rotation.x=.45,this.rKnee.rotation.x=.4;return}this.hips.rotation.x=.55,this.spine.rotation.x=.4,this.head.rotation.x=.35,this.lShoulder.rotation.set(.4,0,.5),this.rShoulder.rotation.set(.35,0,-.45),this.lHip.rotation.x=.8,this.rHip.rotation.x=.75,this.lKnee.rotation.x=.9,this.rKnee.rotation.x=.85}clipFor(t,e,n){return t==="tapped"||t==="spectate"?"tapped":t==="ticklee"||t==="nudge"&&n<0?"squirm":t==="tickler"||t==="nudge"?"tickle":e>4.4?"run":e>.4?"walk":"idle"}}const Ly=[6965818,4872776,5913160,3820122,5916720,4864080];function Dy(s){return new Ee({color:Ly[s-1]??5914680,roughness:.82,metalness:0})}function Iy(s){const t=new Jt,e=Dy(s);let n;if(s===1)n=new St(new te(.09,.05,.1),e);else if(s===2)n=new St(new kn(.032,.12,3,6),e);else if(s===3)n=new St(new Pi(.02,.18,6),e),n.rotation.x=Math.PI;else if(s===4)n=new St(new te(.16,.018,.09),e);else if(s===5)n=new St(new kn(.02,.22,3,6),e),n.scale.set(1,1.15,1);else{const i=new St(new Pi(.022,.16,5),e),a=new St(new Pi(.022,.16,5),e.clone());return i.rotation.set(Math.PI,0,-.18),a.rotation.set(Math.PI,0,.18),i.position.x=-.03,a.position.x=.03,i.castShadow=!0,a.castShadow=!0,t.add(i,a),t.position.set(.015,-.26,.04),t}return n.castShadow=!0,t.add(n),t.position.set(.015,-.26,.04),t}const Uy=[3813932,3288626,2895924,2762788,2367528,3027496,2499618,2104354];function Ny(s){return new Ee({color:Uy[s-1]??2762276,roughness:.86+Math.min(.08,s*.008),metalness:0})}function tn(s,t,e,n,i=0,a=0,r=0){const o=new St(new te(s,t,e),n);return o.position.set(i,a,r),o.castShadow=!0,o}function Fy(s){const t=new Jt,e=new Jt,n=Ny(s),i=1+(s-1)*.028;if(s===1)return t.add(tn(.36*i,.1,.22*i,n,0,-.04,0)),{hips:t,chest:e};if(s===2)return t.add(tn(.37*i,.11,.225*i,n,0,-.035,0)),e.add(tn(.29*i,.055,.17*i,n.clone(),0,.125,0)),{hips:t,chest:e};const a=.17+Math.min(.03,(s-3)*.006);if(t.add(tn(.38*i,a,.23*i,n,0,-.03,0)),s===3){const o=n.clone();return e.add(tn(.08,.1,.15,o,-.12,.1,0)),e.add(tn(.08,.1,.15,o.clone(),.12,.1,0)),{hips:t,chest:e}}const r=.085+(s-4)*.008;if(e.add(tn(.3*i,r,.175*i,n.clone(),0,.115,0)),s>=6){const o=n.clone();e.add(tn(.045,.12,.04,o,-.08,.12,.07)),e.add(tn(.045,.12,.04,o.clone(),.08,.12,.07))}return s>=8&&e.add(tn(.22*i,.045,.14,n.clone(),0,.16,0)),{hips:t,chest:e}}function rc(s){s.traverse(t=>{if(!(t instanceof St))return;t.geometry.dispose();const e=t.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()})}const ky="laugh_squirm",Oy="BriarKnox",By="Briar Knox",zy=!1,Hy=!1,Vy={s0:{staminaMin:70,rate:8.085,amp:.0477,lean:.048,billShake:.027999999999999997,billRate:11.899999999999999},s1:{staminaMin:40,rate:11.76,amp:.0795,lean:.08399999999999999,billShake:.055999999999999994,billRate:15.3},s2:{staminaMin:15,rate:14.7,amp:.106,lean:.12,billShake:.08,billRate:17},s3:{staminaMin:0,rate:16.904999999999998,amp:.1325,lean:.144,billShake:.10800000000000001,billRate:20.4}},Gy=2e3,$y={clip:ky,slug:Oy,display:By,playerOnly:zy,metalException:Hy,stages:Vy,hubPreviewMs:Gy},Wy="laugh_squirm",Xy="CassWynn",qy="Cass Wynn",Yy=!1,jy=!1,Ky={s0:{staminaMin:70,rate:8.277500000000002,amp:.0477,lean:.06,billShake:.027999999999999997,billRate:11.899999999999999},s1:{staminaMin:40,rate:12.040000000000001,amp:.0795,lean:.105,billShake:.055999999999999994,billRate:15.3},s2:{staminaMin:15,rate:15.05,amp:.106,lean:.15,billShake:.08,billRate:17},s3:{staminaMin:0,rate:17.3075,amp:.1325,lean:.18,billShake:.10800000000000001,billRate:20.4}},Jy=2e3,Zy={clip:Wy,slug:Xy,display:qy,playerOnly:Yy,metalException:jy,stages:Ky,hubPreviewMs:Jy},Qy="laugh_squirm",tx="ElaraCase",ex="Elara Case",nx=!0,ix=!0,sx={s0:{staminaMin:70,rate:8.47,amp:.0405,lean:.054000000000000006,billShake:.0315,billRate:10.5},s1:{staminaMin:40,rate:12.32,amp:.0675,lean:.0945,billShake:.063,billRate:13.5},s2:{staminaMin:15,rate:15.4,amp:.09,lean:.135,billShake:.09,billRate:15},s3:{staminaMin:0,rate:17.709999999999997,amp:.11249999999999999,lean:.162,billShake:.1215,billRate:18}},ax=2e3,rx={clip:Qy,slug:tx,display:ex,playerOnly:nx,metalException:ix,stages:sx,hubPreviewMs:ax},ox="laugh_squirm",lx="EmberLang",cx="Ember Lang",hx=!1,ux=!1,dx={s0:{staminaMin:70,rate:8.085,amp:.0477,lean:.054000000000000006,billShake:.0315,billRate:11.899999999999999},s1:{staminaMin:40,rate:11.76,amp:.0795,lean:.0945,billShake:.063,billRate:15.3},s2:{staminaMin:15,rate:14.7,amp:.106,lean:.135,billShake:.09,billRate:17},s3:{staminaMin:0,rate:16.904999999999998,amp:.1325,lean:.162,billShake:.1215,billRate:20.4}},fx=2e3,px={clip:ox,slug:lx,display:cx,playerOnly:hx,metalException:ux,stages:dx,hubPreviewMs:fx},mx="laugh_squirm",gx="JunoHale",_x="Juno Hale",vx=!1,yx=!1,xx={s0:{staminaMin:70,rate:8.855000000000002,amp:.0405,lean:.06,billShake:.041999999999999996,billRate:10.5},s1:{staminaMin:40,rate:12.880000000000003,amp:.0675,lean:.105,billShake:.08399999999999999,billRate:13.5},s2:{staminaMin:15,rate:16.1,amp:.09,lean:.15,billShake:.12,billRate:15},s3:{staminaMin:0,rate:18.515,amp:.11249999999999999,lean:.18,billShake:.162,billRate:18}},Mx=2e3,Sx={clip:mx,slug:gx,display:_x,playerOnly:vx,metalException:yx,stages:xx,hubPreviewMs:Mx},bx="laugh_squirm",Ex="KoraVale",wx="Kora Vale",Ax=!1,Tx=!1,Rx={s0:{staminaMin:70,rate:8.662500000000001,amp:.0549,lean:.054000000000000006,billShake:.0385,billRate:13.299999999999999},s1:{staminaMin:40,rate:12.600000000000001,amp:.0915,lean:.0945,billShake:.077,billRate:17.1},s2:{staminaMin:15,rate:15.75,amp:.122,lean:.135,billShake:.11,billRate:19},s3:{staminaMin:0,rate:18.112499999999997,amp:.1525,lean:.162,billShake:.14850000000000002,billRate:22.8}},Cx=2e3,Px={clip:bx,slug:Ex,display:wx,playerOnly:Ax,metalException:Tx,stages:Rx,hubPreviewMs:Cx},Lx="laugh_squirm",Dx="LyraFinch",Ix="Lyra Finch",Ux=!1,Nx=!1,Fx={s0:{staminaMin:70,rate:7.700000000000001,amp:.0441,lean:.048,billShake:.034999999999999996,billRate:11.2},s1:{staminaMin:40,rate:11.200000000000001,amp:.07350000000000001,lean:.08399999999999999,billShake:.06999999999999999,billRate:14.4},s2:{staminaMin:15,rate:14,amp:.098,lean:.12,billShake:.1,billRate:16},s3:{staminaMin:0,rate:16.099999999999998,amp:.1225,lean:.144,billShake:.135,billRate:19.2}},kx=2e3,Ox={clip:Lx,slug:Dx,display:Ix,playerOnly:Ux,metalException:Nx,stages:Fx,hubPreviewMs:kx},Bx="laugh_squirm",zx="MiraSolis",Hx="Mira Solis",Vx=!1,Gx=!1,$x={s0:{staminaMin:70,rate:8.662500000000001,amp:.0405,lean:.06599999999999999,billShake:.0385,billRate:10.5},s1:{staminaMin:40,rate:12.600000000000001,amp:.0675,lean:.11549999999999998,billShake:.077,billRate:13.5},s2:{staminaMin:15,rate:15.75,amp:.09,lean:.16499999999999998,billShake:.11,billRate:15},s3:{staminaMin:0,rate:18.112499999999997,amp:.11249999999999999,lean:.19799999999999998,billShake:.14850000000000002,billRate:18}},Wx=2e3,Xx={clip:Bx,slug:zx,display:Hx,playerOnly:Vx,metalException:Gx,stages:$x,hubPreviewMs:Wx},qx="laugh_squirm",Yx="NimCortez",jx="Nim Cortez",Kx=!1,Jx=!1,Zx={s0:{staminaMin:70,rate:8.855000000000002,amp:.0513,lean:.06599999999999999,billShake:.0455,billRate:12.6},s1:{staminaMin:40,rate:12.880000000000003,amp:.08549999999999999,lean:.11549999999999998,billShake:.091,billRate:16.2},s2:{staminaMin:15,rate:16.1,amp:.11399999999999999,lean:.16499999999999998,billShake:.13,billRate:18},s3:{staminaMin:0,rate:18.515,amp:.1425,lean:.19799999999999998,billShake:.17550000000000002,billRate:21.599999999999998}},Qx=2e3,tM={clip:qx,slug:Yx,display:jx,playerOnly:Kx,metalException:Jx,stages:Zx,hubPreviewMs:Qx},eM="laugh_squirm",nM="RynAshford",iM="Ryn Ashford",sM=!1,aM=!1,rM={s0:{staminaMin:70,rate:8.085,amp:.0549,lean:.048,billShake:.041999999999999996,billRate:13.299999999999999},s1:{staminaMin:40,rate:11.76,amp:.0915,lean:.08399999999999999,billShake:.08399999999999999,billRate:17.1},s2:{staminaMin:15,rate:14.7,amp:.122,lean:.12,billShake:.12,billRate:19},s3:{staminaMin:0,rate:16.904999999999998,amp:.1525,lean:.144,billShake:.162,billRate:22.8}},oM=2e3,lM={clip:eM,slug:nM,display:iM,playerOnly:sM,metalException:aM,stages:rM,hubPreviewMs:oM},cM="laugh_squirm",hM="SableQuinn",uM="Sable Quinn",dM=!1,fM=!1,pM={s0:{staminaMin:70,rate:8.085,amp:.0405,lean:.06,billShake:.034999999999999996,billRate:10.5},s1:{staminaMin:40,rate:11.76,amp:.0675,lean:.105,billShake:.06999999999999999,billRate:13.5},s2:{staminaMin:15,rate:14.7,amp:.09,lean:.15,billShake:.1,billRate:15},s3:{staminaMin:0,rate:16.904999999999998,amp:.11249999999999999,lean:.18,billShake:.135,billRate:18}},mM=2e3,gM={clip:cM,slug:hM,display:uM,playerOnly:dM,metalException:fM,stages:pM,hubPreviewMs:mM},_M="laugh_squirm",vM="TorenBlake",yM="Toren Blake",xM=!1,MM=!1,SM={s0:{staminaMin:70,rate:8.662500000000001,amp:.0549,lean:.06599999999999999,billShake:.0385,billRate:13.299999999999999},s1:{staminaMin:40,rate:12.600000000000001,amp:.0915,lean:.11549999999999998,billShake:.077,billRate:17.1},s2:{staminaMin:15,rate:15.75,amp:.122,lean:.16499999999999998,billShake:.11,billRate:19},s3:{staminaMin:0,rate:18.112499999999997,amp:.1525,lean:.19799999999999998,billShake:.14850000000000002,billRate:22.8}},bM=2e3,EM={clip:_M,slug:vM,display:yM,playerOnly:xM,metalException:MM,stages:SM,hubPreviewMs:bM},wM="laugh_squirm",AM="VeshMarlowe",TM="Vesh Marlowe",RM=!1,CM=!1,PM={s0:{staminaMin:70,rate:8.855000000000002,amp:.0513,lean:.054000000000000006,billShake:.0455,billRate:12.6},s1:{staminaMin:40,rate:12.880000000000003,amp:.08549999999999999,lean:.0945,billShake:.091,billRate:16.2},s2:{staminaMin:15,rate:16.1,amp:.11399999999999999,lean:.135,billShake:.13,billRate:18},s3:{staminaMin:0,rate:18.515,amp:.1425,lean:.162,billShake:.17550000000000002,billRate:21.599999999999998}},LM=2e3,DM={clip:wM,slug:AM,display:TM,playerOnly:RM,metalException:CM,stages:PM,hubPreviewMs:LM},IM=Object.assign({"../../assets/binds/laugh/BriarKnox.laugh.json":$y,"../../assets/binds/laugh/CassWynn.laugh.json":Zy,"../../assets/binds/laugh/ElaraCase.laugh.json":rx,"../../assets/binds/laugh/EmberLang.laugh.json":px,"../../assets/binds/laugh/JunoHale.laugh.json":Sx,"../../assets/binds/laugh/KoraVale.laugh.json":Px,"../../assets/binds/laugh/LyraFinch.laugh.json":Ox,"../../assets/binds/laugh/MiraSolis.laugh.json":Xx,"../../assets/binds/laugh/NimCortez.laugh.json":tM,"../../assets/binds/laugh/RynAshford.laugh.json":lM,"../../assets/binds/laugh/SableQuinn.laugh.json":gM,"../../assets/binds/laugh/TorenBlake.laugh.json":EM,"../../assets/binds/laugh/VeshMarlowe.laugh.json":DM}),so={};var Ec;for(const[s,t]of Object.entries(IM)){const e=(Ec=s.split("/").pop())==null?void 0:Ec.replace(/\.laugh\.json$/i,"");!e||!t||(so[e]=t,t.slug&&(so[t.slug]=t))}const oc={clip:"laugh_squirm",slug:"default",display:"Default",stages:{s0:{staminaMin:70,rate:8,amp:.04,lean:.05,billShake:.03,billRate:10},s1:{staminaMin:40,rate:11,amp:.07,lean:.09,billShake:.06,billRate:13},s2:{staminaMin:15,rate:14,amp:.1,lean:.12,billShake:.09,billRate:16},s3:{staminaMin:0,rate:16,amp:.13,lean:.15,billShake:.12,billRate:19}},hubPreviewMs:2e3};function vh(s){return s?so[s]??oc:oc}function yh(s){const t=Ii(s);return vh(t.slug)}function UM(s,t){const e=Math.max(0,Math.min(100,t));return e>=s.stages.s0.staminaMin?"s0":e>=s.stages.s1.staminaMin?"s1":e>=s.stages.s2.staminaMin?"s2":"s3"}function NM(s,t){return s.stages[UM(s,t)]}const FM="tickle",kM="BriarKnox",OM="Briar Knox",BM=!1,zM=!1,HM=27.4,VM=36.2,GM=.275,$M=.043,WM=.075,XM=.215,qM=.39,YM=.44,jM=.052,KM=25.6,JM={clip:FM,slug:kM,display:OM,playerOnly:BM,metalException:zM,rate:HM,twistRate:VM,spineBase:GM,spineAmp:$M,chestAmp:WM,shoulderAmp:XM,elbowAmp:qM,weaponWag:YM,billWag:jM,billRate:KM},ZM="tickle",QM="CassWynn",tS="Cass Wynn",eS=!1,nS=!1,iS=28.6,sS=37.8,aS=.285,rS=.039,oS=.082,lS=.225,cS=.41,hS=.47,uS=.058,dS=26.4,fS={clip:ZM,slug:QM,display:tS,playerOnly:eS,metalException:nS,rate:iS,twistRate:sS,spineBase:aS,spineAmp:rS,chestAmp:oS,shoulderAmp:lS,elbowAmp:cS,weaponWag:hS,billWag:uS,billRate:dS},pS="tickle",mS="ElaraCase",gS="Elara Case",_S=!0,vS=!0,yS=29.2,xS=38.5,MS=.29,SS=.046,bS=.087,ES=.23,wS=.43,AS=.5,TS=.064,RS=27.2,CS={clip:pS,slug:mS,display:gS,playerOnly:_S,metalException:vS,rate:yS,twistRate:xS,spineBase:MS,spineAmp:SS,chestAmp:bS,shoulderAmp:ES,elbowAmp:wS,weaponWag:AS,billWag:TS,billRate:RS},PS="tickle",LS="EmberLang",DS="Ember Lang",IS=!1,US=!1,NS=26.8,FS=35.4,kS=.268,OS=.041,BS=.071,zS=.205,HS=.38,VS=.42,GS=.049,$S=25,WS={clip:PS,slug:LS,display:DS,playerOnly:IS,metalException:US,rate:NS,twistRate:FS,spineBase:kS,spineAmp:OS,chestAmp:BS,shoulderAmp:zS,elbowAmp:HS,weaponWag:VS,billWag:GS,billRate:$S},XS="tickle",qS="JunoHale",YS="Juno Hale",jS=!1,KS=!1,JS=28.1,ZS=37.1,QS=.28,tb=.044,eb=.078,nb=.218,ib=.4,sb=.45,ab=.055,rb=25.9,ob={clip:XS,slug:qS,display:YS,playerOnly:jS,metalException:KS,rate:JS,twistRate:ZS,spineBase:QS,spineAmp:tb,chestAmp:eb,shoulderAmp:nb,elbowAmp:ib,weaponWag:sb,billWag:ab,billRate:rb},lb="tickle",cb="KoraVale",hb="Kora Vale",ub=!1,db=!1,fb=29,pb=38.2,mb=.288,gb=.047,_b=.084,vb=.228,yb=.42,xb=.48,Mb=.061,Sb=26.8,bb={clip:lb,slug:cb,display:hb,playerOnly:ub,metalException:db,rate:fb,twistRate:pb,spineBase:mb,spineAmp:gb,chestAmp:_b,shoulderAmp:vb,elbowAmp:yb,weaponWag:xb,billWag:Mb,billRate:Sb},Eb="tickle",wb="LyraFinch",Ab="Lyra Finch",Tb=!1,Rb=!1,Cb=27.7,Pb=36.6,Lb=.278,Db=.04,Ib=.076,Ub=.212,Nb=.4,Fb=.44,kb=.053,Ob=25.7,Bb={clip:Eb,slug:wb,display:Ab,playerOnly:Tb,metalException:Rb,rate:Cb,twistRate:Pb,spineBase:Lb,spineAmp:Db,chestAmp:Ib,shoulderAmp:Ub,elbowAmp:Nb,weaponWag:Fb,billWag:kb,billRate:Ob},zb="tickle",Hb="MiraSolis",Vb="Mira Solis",Gb=!1,$b=!1,Wb=28.8,Xb=37.9,qb=.286,Yb=.045,jb=.081,Kb=.224,Jb=.415,Zb=.47,Qb=.059,tE=26.6,eE={clip:zb,slug:Hb,display:Vb,playerOnly:Gb,metalException:$b,rate:Wb,twistRate:Xb,spineBase:qb,spineAmp:Yb,chestAmp:jb,shoulderAmp:Kb,elbowAmp:Jb,weaponWag:Zb,billWag:Qb,billRate:tE},nE="tickle",iE="NimCortez",sE="Nim Cortez",aE=!1,rE=!1,oE=27.2,lE=35.9,cE=.272,hE=.042,uE=.073,dE=.209,fE=.385,pE=.43,mE=.05,gE=25.3,_E={clip:nE,slug:iE,display:sE,playerOnly:aE,metalException:rE,rate:oE,twistRate:lE,spineBase:cE,spineAmp:hE,chestAmp:uE,shoulderAmp:dE,elbowAmp:fE,weaponWag:pE,billWag:mE,billRate:gE},vE="tickle",yE="RynAshford",xE="Ryn Ashford",ME=!1,SE=!1,bE=29.4,EE=38.9,wE=.292,AE=.048,TE=.089,RE=.234,CE=.44,PE=.51,LE=.066,DE=27.5,IE={clip:vE,slug:yE,display:xE,playerOnly:ME,metalException:SE,rate:bE,twistRate:EE,spineBase:wE,spineAmp:AE,chestAmp:TE,shoulderAmp:RE,elbowAmp:CE,weaponWag:PE,billWag:LE,billRate:DE},UE="tickle",NE="SableQuinn",FE="Sable Quinn",kE=!1,OE=!1,BE=28.3,zE=37.4,HE=.282,VE=.043,GE=.079,$E=.22,WE=.405,XE=.46,qE=.057,YE=26.1,jE={clip:UE,slug:NE,display:FE,playerOnly:kE,metalException:OE,rate:BE,twistRate:zE,spineBase:HE,spineAmp:VE,chestAmp:GE,shoulderAmp:$E,elbowAmp:WE,weaponWag:XE,billWag:qE,billRate:YE},KE="tickle",JE="TorenBlake",ZE="Toren Blake",QE=!1,tw=!1,ew=26.5,nw=35.1,iw=.265,sw=.038,aw=.069,rw=.201,ow=.37,lw=.41,cw=.047,hw=24.8,uw={clip:KE,slug:JE,display:ZE,playerOnly:QE,metalException:tw,rate:ew,twistRate:nw,spineBase:iw,spineAmp:sw,chestAmp:aw,shoulderAmp:rw,elbowAmp:ow,weaponWag:lw,billWag:cw,billRate:hw},dw="tickle",fw="VeshMarlowe",pw="Vesh Marlowe",mw=!1,gw=!1,_w=29.7,vw=39.3,yw=.295,xw=.049,Mw=.092,Sw=.238,bw=.45,Ew=.53,ww=.068,Aw=27.8,Tw={clip:dw,slug:fw,display:pw,playerOnly:mw,metalException:gw,rate:_w,twistRate:vw,spineBase:yw,spineAmp:xw,chestAmp:Mw,shoulderAmp:Sw,elbowAmp:bw,weaponWag:Ew,billWag:ww,billRate:Aw},Rw=Object.assign({"../../assets/binds/tickle/BriarKnox.tickle.json":JM,"../../assets/binds/tickle/CassWynn.tickle.json":fS,"../../assets/binds/tickle/ElaraCase.tickle.json":CS,"../../assets/binds/tickle/EmberLang.tickle.json":WS,"../../assets/binds/tickle/JunoHale.tickle.json":ob,"../../assets/binds/tickle/KoraVale.tickle.json":bb,"../../assets/binds/tickle/LyraFinch.tickle.json":Bb,"../../assets/binds/tickle/MiraSolis.tickle.json":eE,"../../assets/binds/tickle/NimCortez.tickle.json":_E,"../../assets/binds/tickle/RynAshford.tickle.json":IE,"../../assets/binds/tickle/SableQuinn.tickle.json":jE,"../../assets/binds/tickle/TorenBlake.tickle.json":uw,"../../assets/binds/tickle/VeshMarlowe.tickle.json":Tw}),ao={};var wc;for(const[s,t]of Object.entries(Rw)){const e=(wc=s.split("/").pop())==null?void 0:wc.replace(/\.tickle\.json$/i,"");!e||!t||(ao[e]=t,t.slug&&(ao[t.slug]=t))}const lc={clip:"tickle",slug:"default",display:"Default",rate:28,twistRate:37,spineBase:.28,spineAmp:.04,chestAmp:.08,shoulderAmp:.22,elbowAmp:.4,weaponWag:.45,billWag:.05,billRate:26};function Cw(s){return s?ao[s]??lc:lc}const Pw="idle",Lw="BriarKnox",Dw="Briar Knox",Iw=!1,Uw=!1,Nw="a_pose",Fw=2.13,kw=.031,Ow=.014,Bw=.021,zw={clip:Pw,slug:Lw,display:Dw,playerOnly:Iw,metalException:Uw,pose:Nw,breatheRate:Fw,breatheAmp:kw,sway:Ow,scalePulse:Bw},Hw="idle",Vw="CassWynn",Gw="Cass Wynn",$w=!1,Ww=!1,Xw="a_pose",qw=2,Yw=.023,jw=.024,Kw=.021,Jw={clip:Hw,slug:Vw,display:Gw,playerOnly:$w,metalException:Ww,pose:Xw,breatheRate:qw,breatheAmp:Yw,sway:jw,scalePulse:Kw},Zw="idle",Qw="ElaraCase",t1="Elara Case",e1=!0,n1=!0,i1="a_pose",s1=2.07,a1=.021,r1=.015,o1=.016,l1={clip:Zw,slug:Qw,display:t1,playerOnly:e1,metalException:n1,pose:i1,breatheRate:s1,breatheAmp:a1,sway:r1,scalePulse:o1},c1="idle",h1="EmberLang",u1="Ember Lang",d1=!1,f1=!1,p1="a_pose",m1=2.35,g1=.029,_1=.023,v1=.015,y1={clip:c1,slug:h1,display:u1,playerOnly:d1,metalException:f1,pose:p1,breatheRate:m1,breatheAmp:g1,sway:_1,scalePulse:v1},x1="idle",M1="JunoHale",S1="Juno Hale",b1=!1,E1=!1,w1="a_pose",A1=2.1,T1=.025,R1=.013,C1=.021,P1={clip:x1,slug:M1,display:S1,playerOnly:b1,metalException:E1,pose:w1,breatheRate:A1,breatheAmp:T1,sway:R1,scalePulse:C1},L1="idle",D1="KoraVale",I1="Kora Vale",U1=!1,N1=!1,F1="a_pose",k1=2.25,O1=.033,B1=.013,z1=.022,H1={clip:L1,slug:D1,display:I1,playerOnly:U1,metalException:N1,pose:F1,breatheRate:k1,breatheAmp:O1,sway:B1,scalePulse:z1},V1="idle",G1="LyraFinch",$1="Lyra Finch",W1=!1,X1=!1,q1="a_pose",Y1=2.12,j1=.028,K1=.022,J1=.013,Z1={clip:V1,slug:G1,display:$1,playerOnly:W1,metalException:X1,pose:q1,breatheRate:Y1,breatheAmp:j1,sway:K1,scalePulse:J1},Q1="idle",tA="MiraSolis",eA="Mira Solis",nA=!1,iA=!1,sA="a_pose",aA=2.24,rA=.033,oA=.023,lA=.019,cA={clip:Q1,slug:tA,display:eA,playerOnly:nA,metalException:iA,pose:sA,breatheRate:aA,breatheAmp:rA,sway:oA,scalePulse:lA},hA="idle",uA="NimCortez",dA="Nim Cortez",fA=!1,pA=!1,mA="a_pose",gA=2.1,_A=.027,vA=.018,yA=.019,xA={clip:hA,slug:uA,display:dA,playerOnly:fA,metalException:pA,pose:mA,breatheRate:gA,breatheAmp:_A,sway:vA,scalePulse:yA},MA="idle",SA="RynAshford",bA="Ryn Ashford",EA=!1,wA=!1,AA="a_pose",TA=2.39,RA=.025,CA=.016,PA=.016,LA={clip:MA,slug:SA,display:bA,playerOnly:EA,metalException:wA,pose:AA,breatheRate:TA,breatheAmp:RA,sway:CA,scalePulse:PA},DA="idle",IA="SableQuinn",UA="Sable Quinn",NA=!1,FA=!1,kA="a_pose",OA=2.33,BA=.026,zA=.013,HA=.013,VA={clip:DA,slug:IA,display:UA,playerOnly:NA,metalException:FA,pose:kA,breatheRate:OA,breatheAmp:BA,sway:zA,scalePulse:HA},GA="idle",$A="TorenBlake",WA="Toren Blake",XA=!1,qA=!1,YA="a_pose",jA=2.15,KA=.022,JA=.019,ZA=.02,QA={clip:GA,slug:$A,display:WA,playerOnly:XA,metalException:qA,pose:YA,breatheRate:jA,breatheAmp:KA,sway:JA,scalePulse:ZA},tT="idle",eT="VeshMarlowe",nT="Vesh Marlowe",iT=!1,sT=!1,aT="a_pose",rT=2.22,oT=.026,lT=.021,cT=.012,hT={clip:tT,slug:eT,display:nT,playerOnly:iT,metalException:sT,pose:aT,breatheRate:rT,breatheAmp:oT,sway:lT,scalePulse:cT},uT=Object.assign({"../../assets/binds/idle/BriarKnox.idle.json":zw,"../../assets/binds/idle/CassWynn.idle.json":Jw,"../../assets/binds/idle/ElaraCase.idle.json":l1,"../../assets/binds/idle/EmberLang.idle.json":y1,"../../assets/binds/idle/JunoHale.idle.json":P1,"../../assets/binds/idle/KoraVale.idle.json":H1,"../../assets/binds/idle/LyraFinch.idle.json":Z1,"../../assets/binds/idle/MiraSolis.idle.json":cA,"../../assets/binds/idle/NimCortez.idle.json":xA,"../../assets/binds/idle/RynAshford.idle.json":LA,"../../assets/binds/idle/SableQuinn.idle.json":VA,"../../assets/binds/idle/TorenBlake.idle.json":QA,"../../assets/binds/idle/VeshMarlowe.idle.json":hT}),ro={};var Ac;for(const[s,t]of Object.entries(uT)){const e=(Ac=s.split("/").pop())==null?void 0:Ac.replace(/\.idle\.json$/i,"");!e||!t||(ro[e]=t,t.slug&&(ro[t.slug]=t))}const cc={clip:"idle",slug:"default",display:"Default",pose:"a_pose",breatheRate:2.2,breatheAmp:.02,sway:.015,scalePulse:.015};function dT(s){return s?ro[s]??cc:cc}const fs={id:0,name:"Bare hand",price:0,ticklePct:0,blurb:"Tier 0. No technique bonus."},ps={id:0,name:"Base attire",price:0,stamPct:0,escPct:0,blurb:"Bikini / shorts. Tier 0."},ms=[{id:1,name:"Palm Mitts",price:8,ticklePct:.05,blurb:"Padded palms. +5% tickle."},{id:2,name:"Rib Brush",price:14,ticklePct:.1,blurb:"Soft rake along the ribs. +10% tickle."},{id:3,name:"Nerve Wand",price:22,ticklePct:.15,blurb:"Narrow contact point. +15% tickle."},{id:4,name:"Flank Fans",price:32,ticklePct:.2,blurb:"Twin paddles. +20% tickle."},{id:5,name:"Spine Rake",price:44,ticklePct:.25,blurb:"Long reach on the back line. +25% tickle."},{id:6,name:"Chorus Forks",price:58,ticklePct:.3,blurb:"Amateur cap piece. +30% tickle."}],gs=[{id:1,name:"Weave Shorts",price:7,stamPct:.04,escPct:0,blurb:"+4% stamina."},{id:2,name:"Mesh Wrap",price:12,stamPct:.06,escPct:.02,blurb:"+6% stam / +2% escape."},{id:3,name:"Rib Guard",price:18,stamPct:.08,escPct:.04,blurb:"+8% stam / +4% escape."},{id:4,name:"Plasm Vest",price:26,stamPct:.1,escPct:.06,blurb:"+10% stam / +6% escape."},{id:5,name:"Night Shell",price:36,stamPct:.12,escPct:.08,blurb:"+12% stam / +8% escape."},{id:6,name:"Lattice Harness",price:48,stamPct:.14,escPct:.1,blurb:"+14% stam / +10% escape."},{id:7,name:"Vault Plate",price:62,stamPct:.16,escPct:.12,blurb:"+16% stam / +12% escape."},{id:8,name:"Apex Weave",price:78,stamPct:.18,escPct:.12,blurb:"+18% stam / +12% escape. Amateur cap."}],_n=10,oo=25;function _s(s){return s===0?fs:ms.find(t=>t.id===s)??fs}function vs(s){return s===0?ps:gs.find(t=>t.id===s)??ps}function fT(s,t){return`${_s(s).name} / ${vs(t).name}`}let pT=0;const Yn=1.35,Pn=2.1,Ln=1.12;class is{constructor(t){P(this,"id",pT++);P(this,"team");P(this,"isPlayer");P(this,"name");P(this,"look");P(this,"role");P(this,"group",new Jt);P(this,"body");P(this,"humanoid");P(this,"yaw",0);P(this,"pitch",0);P(this,"pos",new T);P(this,"vel",new T);P(this,"occupancy","free");P(this,"targetId",-1);P(this,"joinOn",-1);P(this,"vanishLeft",0);P(this,"stamina",100);P(this,"maxStamina",100);P(this,"escape",0);P(this,"tapCd",0);P(this,"regenWait",0);P(this,"flashT",0);P(this,"blocks");P(this,"weaponId",0);P(this,"armorId",0);P(this,"weaponPct",0);P(this,"armorStamPct",0);P(this,"armorEscPct",0);P(this,"active",!0);P(this,"lastKnown",new T);P(this,"lastSeen",0);P(this,"pileTimer",0);P(this,"wantTickle",!1);P(this,"wantEscape",!1);P(this,"spawnIgnore",0);P(this,"reappearIgnore",0);P(this,"reappearFlash",0);P(this,"contactEdge",new Map);P(this,"hidden",!1);P(this,"slug");P(this,"bait",!1);P(this,"scriptHold",!1);P(this,"portraitUrl");P(this,"keyedPortrait");P(this,"portraitSprite");P(this,"headMat");P(this,"skinMat");P(this,"rim");P(this,"prevPos",new T);P(this,"animT",Math.random()*8);P(this,"speed",0);this.team=t.team,this.isPlayer=t.isPlayer,this.look=t.look,this.name=t.name,this.role=t.role,this.slug=t.slug,this.portraitUrl=On(t.slug),this.blocks=t.blocks;const e=ma[t.look]??ma[0],n=t.team===0?6211800:13935194;if(this.humanoid=new Py(e.skin,e.cloth,e.hair,n),this.body=this.humanoid.root,this.skinMat=this.humanoid.skinMat,this.headMat=this.humanoid.skinMat,this.group.add(this.body),this.rim=new ph(n,2.2,3.2,2),this.rim.position.set(0,1.3,0),this.group.add(this.rim),!this.isPlayer){const i=mT(this.name,n);i.position.y=2.4,this.group.add(i),this.portraitUrl&&(this.body.visible=!1)}this.portraitUrl&&zi(this.portraitUrl).then(i=>{this.keyedPortrait=i.keyedUrl,this.humanoid.applyLook(i),this.ensureStillBillboard(i.keyedUrl)}),this.applyGear(t.weapon??0,t.armor??0),this.stamina=this.maxStamina}applyGear(t,e){const n=_s(t),i=vs(e);this.weaponId=n.id,this.armorId=i.id,this.weaponPct=n.ticklePct,this.armorStamPct=i.stamPct,this.armorEscPct=i.escPct,this.recalc(),this.humanoid.setWeapon(this.weaponId),this.humanoid.setArmor(this.armorId)}applyLookSlug(t,e){this.slug=t,this.look=e;const n=On(t);this.portraitUrl=n,n&&(this.isPlayer||(this.body.visible=!1),zi(n).then(i=>{this.slug===t&&(this.keyedPortrait=i.keyedUrl,this.humanoid.applyLook(i),this.ensureStillBillboard(i.keyedUrl))}))}ensureStillBillboard(t){if(this.isPlayer)return;const e=new dh().load(t);if(e.colorSpace=Pe,this.portraitSprite){const n=this.portraitSprite.material;n.map=e,n.needsUpdate=!0,this.portraitSprite.scale.set(Yn,Pn,1),this.portraitSprite.position.set(0,Ln,0)}else{const n=new So({map:e,transparent:!0,depthTest:!0,alphaTest:.12}),i=new rh(n);i.scale.set(Yn,Pn,1),i.position.set(0,Ln,0),i.renderOrder=1,this.group.add(i),this.portraitSprite=i}this.body.visible=!1}recalc(){const t=Un.stamina+2*this.blocks.stamina;Un.tickle+1.5*this.blocks.tickle,Un.struggle+3.5*this.blocks.struggle,this.maxStamina=t*Ug*(1+this.armorStamPct),this.stamina=Math.min(this.stamina,this.maxStamina)}ticklePower(){return(Un.tickle+1.5*this.blocks.tickle)*Ng*(1+this.weaponPct)}escapePower(){return(Un.struggle+3.5*this.blocks.struggle)*Fg*(1+this.armorEscPct)}forward(){return new T(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}tickAnim(t){const e=this.pos.distanceTo(this.prevPos);this.speed=t>1e-4?e/t:0,this.prevPos.copy(this.pos),this.animT+=t;const n=this.humanoid.clipFor(this.occupancy,this.speed,this.joinOn),i=n==="squirm"?NM(this.slug?vh(this.slug):yh(this.look),this.stamina/Math.max(1,this.maxStamina)*100):void 0,a=Ry(this.slug),r=n==="walk"||n==="run"?Cy(a,n):void 0,o=n==="tickle"?Cw(this.slug):void 0;this.humanoid.pose(n,this.animT,o??i??r),this.tickBillboardAnim(n,a,i,o)}locomotionClip(){if(this.occupancy!=="free")return"busy";const t=this.humanoid.clipFor(this.occupancy,this.speed,this.joinOn);return t==="run"||t==="walk"||t==="idle"?t:"busy"}tickBillboardAnim(t,e,n,i){const a=this.portraitSprite;if(!a)return;const r=a.material,o=this.animT;let l=Yn,c=Pn,h=0,u=Ln,d=0;if(this.occupancy==="tickler"||this.occupancy==="nudge"&&this.joinOn>=0){const f=(i==null?void 0:i.billWag)??.05,g=(i==null?void 0:i.billRate)??26,_=Math.sin(o*g),m=Math.sin(o*g*1.58);l=Yn*(1+_*f),c=Pn*(1+m*f*.8),h=m*f,u=Ln+Math.abs(_)*f*1.4,d=_*f*1.15}else if(this.occupancy==="ticklee"||this.occupancy==="nudge"&&this.joinOn<0){const f=(n==null?void 0:n.billShake)??.09,g=(n==null?void 0:n.billRate)??16,_=Math.sin(o*g),m=Math.sin(o*g*.7);l=Yn*(1+_*f*.8),c=Pn*(1-_*f*.35),h=_*f*1.1,u=Ln+Math.abs(m)*f*.55,d=m*f*.9}else if(this.occupancy==="tapped")c=Pn*.72,u=Ln*.55,d=.35;else if(t==="run"||t==="walk"){const f=e?t==="run"?e.run:e.walk:void 0,g=(f==null?void 0:f.billRate)??(t==="run"?13:8.5),_=(f==null?void 0:f.billBob)??(t==="run"?.055:.025),m=Math.sin(o*g);l=Yn*(1+m*_*.35),c=Pn*(1+Math.abs(m)*_*.25),h=m*_*.4,u=Ln+Math.abs(m)*_,d=m*_*.5}else{const f=dT(this.slug),g=Math.sin(o*f.breatheRate)*f.breatheAmp,_=Math.sin(o*f.breatheRate*.65)*f.sway;l=Yn*(1+Math.sin(o*f.breatheRate)*f.scalePulse),c=Pn*(1+g*.5),h=_,u=Ln+g,d=_*.4}a.scale.set(l,c,1),a.position.set(h,u,0),r.rotation=d}settle(){this.prevPos.copy(this.pos)}syncMesh(){this.group.position.copy(this.pos),this.body.rotation.y=this.yaw,this.body.rotation.x=0,this.body.rotation.z=0,!this.isPlayer&&this.portraitSprite&&(this.body.visible=!1)}eyeWorld(){return this.pos.clone().add(new T(0,mh,0))}setHidden(t){this.hidden=t,this.group.visible=!t&&this.occupancy!=="vanished"&&this.occupancy!=="tapped",this.occupancy==="tapped"&&(this.group.visible=!0),this.occupancy==="vanished"&&(this.group.visible=!1),!this.isPlayer&&this.portraitSprite&&(this.body.visible=!1)}}function mT(s,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(10,8,8,0.55)",n.fillRect(0,0,256,64),n.fillStyle=`#${t.toString(16).padStart(6,"0")}`,n.font="700 28px Trebuchet MS, sans-serif",n.textAlign="center",n.fillText(s,128,42);const i=new oh(e),a=new So({map:i,transparent:!0,depthTest:!1}),r=new rh(a);return r.scale.set(1.4,.35,1),r}const gT=.18,_T=3.15,vT=2.55,kt={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,VIEW:8,MENU:9,DUP:12,DDOWN:13,DLEFT:14,DRIGHT:15};function Dn(s,t){const e=s.axes[t]??0;return Math.abs(e)<gT?0:e}function yT(s,t){return s.buttons[t]}function de(s,t,e=.22){const n=yT(s,t);return n?n.pressed||n.value>=e:!1}class xT{constructor(){P(this,"keys",new Set);P(this,"tickle",!1);P(this,"escape",!1);P(this,"confirm",!1);P(this,"back",!1);P(this,"tickleHeld",!1);P(this,"escapeHeld",!1);P(this,"releaseHeld",!1);P(this,"lookX",0);P(this,"lookY",0);P(this,"stickX",0);P(this,"stickY",0);P(this,"pointerLocked",!1);P(this,"mobile",!1);P(this,"padActive",!1);P(this,"padLabel","");P(this,"justConnected",!1);P(this,"padHome",!1);P(this,"padShop",!1);P(this,"padArena",!1);P(this,"padUp",!1);P(this,"padDown",!1);P(this,"padLeft",!1);P(this,"padRight",!1);P(this,"padTabPrev",!1);P(this,"padTabNext",!1);P(this,"lookId",null);P(this,"lastLook",null);P(this,"touchTickle",!1);P(this,"touchEscape",!1);P(this,"padMoveX",0);P(this,"padMoveY",0);P(this,"prevPad",new Set);P(this,"rumblePad",null);P(this,"prevKeys",new Set);P(this,"navDir",null);P(this,"navAge",0);this.mobile=matchMedia("(pointer: coarse)").matches||innerWidth<820,window.addEventListener("keydown",t=>{this.keys.add(t.code),(t.code==="KeyT"||t.code==="Space")&&(this.tickle=!0),t.code==="KeyE"&&(this.escape=!0),t.code==="KeyQ"&&(this.releaseHeld=!0),(t.code==="Enter"||t.code==="NumpadEnter")&&(this.confirm=!0),t.code==="Escape"&&(this.back=!0),(t.code==="Digit1"||t.code==="KeyH")&&(this.padHome=!0),t.code==="Digit2"&&(this.padShop=!0),t.code==="Digit3"&&(this.padArena=!0),["Space","KeyT","KeyE"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys.delete(t.code),t.code==="KeyQ"&&(this.releaseHeld=!1)}),window.addEventListener("mousemove",t=>{this.pointerLocked&&(this.lookX+=t.movementX*.0024,this.lookY+=t.movementY*.0022)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement!==null}),window.addEventListener("gamepadconnected",t=>{this.justConnected=!0,this.padActive=!0;const e=t.gamepad;this.padLabel=e?uc(e):"Xbox controller"}),window.addEventListener("gamepaddisconnected",()=>{this.padActive=!1,this.padLabel="",this.padMoveX=0,this.padMoveY=0,this.prevPad.clear(),this.rumblePad=null})}bindHud(t){const e=(r,o)=>{const l=t.querySelector(`#${r}`);if(!l)return;const c=u=>{u.preventDefault(),this[o]=!0,o==="tickle"&&(this.touchTickle=!0),o==="escape"&&(this.touchEscape=!0)},h=()=>{o==="tickle"&&(this.touchTickle=!1),o==="escape"&&(this.touchEscape=!1)};l.addEventListener("pointerdown",c),l.addEventListener("pointerup",h),l.addEventListener("pointerleave",h)};e("btn-tickle","tickle"),e("btn-escape","escape");const n=t.querySelector("#stick"),i=t.querySelector("#stick .knob");if(n&&i){const r=(l,c,h,u)=>{const d=h-l,f=u-c,g=Math.min(40,Math.hypot(d,f)),_=Math.atan2(f,d);this.stickX=g/40*Math.cos(_),this.stickY=g/40*Math.sin(_),i.style.left=`${33+this.stickX*28}px`,i.style.top=`${33+this.stickY*28}px`},o=()=>{this.stickX=0,this.stickY=0,i.style.left="33px",i.style.top="33px"};n.addEventListener("pointerdown",l=>{n.setPointerCapture(l.pointerId);const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,l.clientX,l.clientY)}),n.addEventListener("pointermove",l=>{if(!n.hasPointerCapture(l.pointerId))return;const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,l.clientX,l.clientY)}),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o)}const a=t.querySelector("#lookzone");a==null||a.addEventListener("pointerdown",r=>{this.lookId=r.pointerId,this.lastLook={x:r.clientX,y:r.clientY},a.setPointerCapture(r.pointerId)}),a==null||a.addEventListener("pointermove",r=>{this.lookId!==r.pointerId||!this.lastLook||(this.lookX+=(r.clientX-this.lastLook.x)*.004,this.lookY+=(r.clientY-this.lastLook.y)*.0035,this.lastLook={x:r.clientX,y:r.clientY})}),a==null||a.addEventListener("pointerup",()=>{this.lookId=null,this.lastLook=null})}poll(t){this.pollGamepad(t),this.pollNav(t),this.keys.has("BracketLeft")&&!this.prevKeys.has("BracketLeft")&&(this.padTabPrev=!0),this.keys.has("BracketRight")&&!this.prevKeys.has("BracketRight")&&(this.padTabNext=!0),this.prevKeys=new Set(this.keys);const e=this.keys.has("KeyT")||this.keys.has("Space"),n=this.keys.has("KeyE");this.padActive?(this.tickleHeld=this.tickleHeld||e,this.escapeHeld=this.escapeHeld||n):(this.tickleHeld=this.touchTickle||e,this.escapeHeld=this.touchEscape||n,this.releaseHeld=this.keys.has("KeyQ"))}moveVec(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),t+=this.padMoveX,e+=-this.padMoveY,(this.mobile||Math.hypot(this.stickX,this.stickY)>.08)&&(t+=this.stickX,e+=-this.stickY);const n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{x:t,z:e}}consumeLook(){const t={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,t}rumble(t=70,e=.35,n=.2){const i=this.rumblePad,a=i==null?void 0:i.vibrationActuator;a&&a.playEffect("dual-rumble",{startDelay:0,duration:t,strongMagnitude:e,weakMagnitude:n}).catch(()=>{})}endFrame(){this.tickle=!1,this.escape=!1,this.confirm=!1,this.back=!1,this.justConnected=!1,this.padHome=!1,this.padShop=!1,this.padArena=!1,this.padUp=!1,this.padDown=!1,this.padLeft=!1,this.padRight=!1,this.padTabPrev=!1,this.padTabNext=!1,!this.keys.has("KeyQ")&&!this.padActive&&(this.releaseHeld=!1)}pollGamepad(t){const e=hc();if(!e){this.padActive=!1,this.padMoveX=0,this.padMoveY=0,this.prevPad.clear(),this.rumblePad=null;return}this.padActive=!0,this.padLabel=uc(e),this.rumblePad=e;let n=Dn(e,0),i=Dn(e,1);de(e,kt.DLEFT)&&(n-=1),de(e,kt.DRIGHT)&&(n+=1),de(e,kt.DUP)&&(i-=1),de(e,kt.DDOWN)&&(i+=1);const a=Math.hypot(n,i);a>1&&(n/=a,i/=a),this.padMoveX=n,this.padMoveY=i;const r=Dn(e,2),o=Dn(e,3);this.lookX+=r*_T*t,this.lookY+=o*vT*t;const l=new Set,c=_=>de(e,_)&&!this.prevPad.has(_);for(let _=0;_<e.buttons.length;_++)de(e,_)&&l.add(_);const h=de(e,kt.RT)||Dn(e,5)>.22,u=de(e,kt.LT)||Dn(e,4)>.22,d=de(e,kt.A)||h,f=de(e,kt.B)||u,g=de(e,kt.Y);(c(kt.A)||c(kt.RT))&&(this.tickle=!0),(c(kt.B)||c(kt.LT))&&(this.escape=!0),(c(kt.A)||c(kt.MENU))&&(this.confirm=!0),(c(kt.B)||c(kt.VIEW)||c(kt.MENU))&&(this.back=!0),c(kt.X)&&(this.padHome=!0),c(kt.Y)&&(this.padShop=!0),c(kt.RB)&&(this.padArena=!0),c(kt.LB)&&(this.padTabPrev=!0),c(kt.RB)&&(this.padTabNext=!0),c(kt.DUP)&&this.fireNav("up"),c(kt.DDOWN)&&this.fireNav("down"),c(kt.DLEFT)&&this.fireNav("left"),c(kt.DRIGHT)&&this.fireNav("right"),this.tickleHeld=this.touchTickle||d,this.escapeHeld=this.touchEscape||f,this.releaseHeld=this.keys.has("KeyQ")||g,this.prevPad=l}pollNav(t){const e=hc();let n=null;if(e)if(de(e,kt.DUP))n="up";else if(de(e,kt.DDOWN))n="down";else if(de(e,kt.DLEFT))n="left";else if(de(e,kt.DRIGHT))n="right";else{const i=Dn(e,0),a=Dn(e,1);a<-.55?n="up":a>.55?n="down":i<-.55?n="left":i>.55&&(n="right")}if(n||(this.keys.has("ArrowUp")?n="up":this.keys.has("ArrowDown")?n="down":this.keys.has("ArrowLeft")?n="left":this.keys.has("ArrowRight")&&(n="right")),n!==this.navDir){this.navDir=n,this.navAge=0;const i=!!e&&(de(e,kt.DUP)||de(e,kt.DDOWN)||de(e,kt.DLEFT)||de(e,kt.DRIGHT));n&&!i&&this.fireNav(n)}else n&&(this.navAge+=t,this.navAge>=.42&&(this.fireNav(n),this.navAge=.22))}fireNav(t){t==="up"&&(this.padUp=!0),t==="down"&&(this.padDown=!0),t==="left"&&(this.padLeft=!0),t==="right"&&(this.padRight=!0)}}function hc(){var e;if(Ce!=null&&Ce.connected)return Ce;const s=((e=navigator.getGamepads)==null?void 0:e.call(navigator))??[];let t=null;for(const n of s)if(!(!n||!n.connected)){if(n.mapping==="standard")return n;t||(t=n)}return t}let Ce=null;function xh(){Ce={id:"Xbox controller (standard)",index:0,connected:!0,mapping:"standard",timestamp:performance.now(),axes:[0,0,0,0,0,0],buttons:Array.from({length:17},()=>({pressed:!1,touched:!1,value:0}))},window.dispatchEvent(new Event("gamepadconnected"))}function MT(s){if(Ce||xh(),!!Ce){if(Ce.timestamp=performance.now(),s.reset){Ce.axes.fill(0);for(const t of Ce.buttons)t.value=0,t.pressed=!1,t.touched=!1}if(s.axes)for(let t=0;t<s.axes.length&&t<Ce.axes.length;t++)Ce.axes[t]=s.axes[t];if(s.buttons)for(const[t,e]of Object.entries(s.buttons)){const n=Number(t),i=Ce.buttons[n];i&&(i.value=e,i.pressed=e>=.22,i.touched=i.pressed)}}}function ST(){Ce=null,window.dispatchEvent(new Event("gamepaddisconnected"))}function uc(s){const t=s.id||"Xbox controller";return/xbox|xinput|045e/i.test(t)?"Xbox controller":/standard/i.test(s.mapping)?"Xbox layout":t.replace(/\s*\(.*$/,"").slice(0,42)||"Controller"}function Ei(s,t){return`${s}:${t}`}function Ye(s,t){return s.pos.distanceTo(t.pos)<=Li}function ss(s,t,e){const n=s.pos.distanceTo(t.pos);return n<=Li?!0:s.isPlayer?e?n<=vg:n<=Li+ua:!1}function en(s,t){const e=s.pos.clone().sub(t.pos);e.y=0;const n=e.length();if(n<1e-6)return!0;e.normalize();const i=t.forward().multiplyScalar(-1),a=s.isPlayer?Mg:xg;return i.dot(e)>=a||n<.5&&s.forward().dot(t.forward())>.55}function bT(s){return s.occupancy!=="vanished"&&s.occupancy!=="tapped"&&s.occupancy!=="spectate"}function _e(s){return s.occupancy!=="tapped"&&s.occupancy!=="spectate"}function ET(s,t,e){return s.filter(n=>n.team===e&&n.id!==t.id&&bT(n)&&n.occupancy!=="ticklee"&&Ye(n,t))}function as(s,t,e){return ET(s,e,t.team).length>=2}function wT(s,t,e,n,i,a,r,o,l,c,h){if(!_e(s)||s.isPlayer)return;if(s.pileTimer=Math.max(0,s.pileTimer-n),s.occupancy==="ticklee"){!s.scriptHold&&Math.random()<.028&&c(s);return}if(s.occupancy==="tickler"||s.occupancy==="nudge"){if(s.scriptHold)return;const m=t.find(E=>E.id===s.joinOn),p=m!=null&&m.isPlayer?.32:.2;Math.random()<p&&l(s);return}if(s.occupancy==="vanished"){fc(s,e,n);return}if(i>0){s.bait?dc(s,e,n):AT(s,e,n);return}if(s.bait){dc(s,e,n);return}const u=t.filter(m=>m.team!==s.team&&_e(m)&&m.occupancy!=="vanished"),d=t.find(m=>m.isPlayer&&_e(m)&&m.occupancy!=="vanished"),f=t.find(m=>m.team===s.team&&m.occupancy==="tickler"&&m.id!==s.id);let g=null;if(d&&s.team!==d.team&&s.role==="hunter"&&d.occupancy==="free"&&(g=d),!g&&f&&s.pileTimer<=0){const m=t.find(p=>p.id===f.joinOn);if(m&&m.occupancy==="ticklee"){if(Ye(s,m)){o(s,m)||r(s,m);return}s.pos.distanceTo(f.pos)<9&&(g=m)}}if(!g)if(d&&s.team!==d.team&&s.role==="hunter")if(d.occupancy==="tickler"||d.occupancy==="nudge"){const m=u.filter(p=>!p.isPlayer&&!p.bait);g=sr(s,m.length?m:u.filter(p=>!p.bait))}else d.occupancy,g=d;else{const m=u.filter(p=>!p.isPlayer&&!(p.bait&&s.team===0&&a<er));g=sr(s,m.length?m:u.filter(p=>!(p.bait&&a<er)))}if(g!=null&&g.bait&&s.team===0&&a<er){const m=u.filter(p=>!p.bait&&!p.isPlayer);g=sr(s,m)}if(!g){fc(s,e,n);return}const _=g.pos.clone().add(g.forward().multiplyScalar(-1.15));(s.role==="ambusher"||s.role==="flanker")&&_.add(new T(-g.forward().z,0,g.forward().x).multiplyScalar(1.4)),Do(s,e,e.laneRoute(s.pos,_),n),Ye(s,g)&&(g.occupancy==="ticklee"?s.pileTimer<=0&&o(s,g):r(s,g))}function dc(s,t,e){const n=new T(eo,s.pos.y,no);s.pos.distanceToSquared(n)>.35&&Do(s,t,n,e),s.yaw=-Math.PI/2,s.pos.y=t.groundY(s.pos.x,s.pos.z)}function sr(s,t){let e=null,n=1e9;for(const i of t){const a=s.pos.distanceToSquared(i.pos);a<n&&(n=a,e=i)}return e}function Do(s,t,e,n){const a=t.navWaypoint(s.pos,e).clone().sub(s.pos);if(a.y=0,a.lengthSq()<.04)return;a.normalize();const o=bs*(s.role==="hunter"?1.05:.95)*n,l=(d,f)=>{const g=t.resolve(s.pos.x+d,s.pos.z+f,s.pos.y),_=Math.hypot(g.x-s.pos.x,g.z-s.pos.z),m=(g.x-s.pos.x)*a.x+(g.z-s.pos.z)*a.z;return{r:g,moved:_,progress:m}},c=l(a.x*o,a.z*o);let h=c,u=a.clone();if(c.moved<o*.4){const d=[.55,-.55,.95,-.95,1.35,-1.35,Math.PI/2,-Math.PI/2];for(const f of d){const g=Math.cos(f),_=Math.sin(f),m=a.x*g-a.z*_,p=a.x*_+a.z*g,E=l(m*o,p*o);if(E.moved<o*.2)continue;(E.progress>h.progress+.002||Math.abs(E.progress-h.progress)<.002&&E.moved>h.moved)&&(h=E,u.set(m,0,p).normalize())}}h.moved<1e-4||(s.yaw=Math.atan2(-u.x,-u.z),s.pos.x=h.r.x,s.pos.z=h.r.z,s.pos.y=t.groundY(s.pos.x,s.pos.z))}function fc(s,t,e){s.yaw+=(Math.random()-.5)*1.8*e;const n=s.forward(),i=s.pos.x+n.x*bs*.55*e,a=s.pos.z+n.z*bs*.55*e,r=t.resolve(i,a,s.pos.y);s.pos.x=r.x,s.pos.z=r.z,s.pos.y=t.groundY(s.pos.x,s.pos.z)}function AT(s,t,e){if(!t.inSpawnPocket(s.pos,s.team)){const n=s.team===0?t.spawnA:t.spawnB;s.pos.distanceToSquared(n)>.09&&Do(s,t,t.laneRoute(s.pos,n),e);return}s.pos.y=t.groundY(s.pos.x,s.pos.z)}const TT=["tickle-lock","tickle","vanish","tap-out"];function Io(){try{return new AudioContext}catch{return null}}let be=null;const Mh=new Map;let ea=null;function Uo(){return be||(be=Io()),be}function pc(s,t){return`${"./".endsWith("/")?"./":".//"}sfx/${s}.${t}`}async function mc(s,t){try{const e=await fetch(t);if(!e.ok)return null;const n=await e.arrayBuffer();return await s.decodeAudioData(n.slice(0))}catch{return null}}async function RT(s,t){const e=await mc(s,pc(t,"ogg"))??await mc(s,pc(t,"mp3"));e&&Mh.set(t,e)}function Sh(){const s=Uo();return s?ea||(ea=(async()=>{await Promise.all(TT.map(t=>RT(s,t)))})(),ea):Promise.resolve()}function CT(s,t=.7){const e=Uo(),n=Mh.get(s);if(!e||!n)return!1;try{e.state==="suspended"&&e.resume();const i=e.createBufferSource(),a=e.createGain();return i.buffer=n,a.gain.value=t,i.connect(a),a.connect(e.destination),i.start(),!0}catch{return!1}}function ya(s,t,e){Sh(),!CT(s,t)&&e()}function na(s,t=.08,e="triangle",n=.05){if(be||(be=Io()),!be)return;const i=be.createOscillator(),a=be.createGain();i.type=e,i.frequency.value=s,a.gain.value=n,a.gain.exponentialRampToValueAtTime(.001,be.currentTime+t),i.connect(a),a.connect(be.destination),i.start(),i.stop(be.currentTime+t)}function fe(s,t,e,n=.055,i=0,a){const r=Uo();if(!r)return;const o=r.currentTime+i,l=r.createOscillator(),c=r.createGain();l.type=e,l.frequency.setValueAtTime(Math.max(1,s),o),a!=null&&l.frequency.exponentialRampToValueAtTime(Math.max(1,a),o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.008),c.gain.exponentialRampToValueAtTime(.001,o+t),l.connect(c),c.connect(r.destination),l.start(o),l.stop(o+t)}function PT(){be||(be=Io()),be==null||be.resume(),Sh()}function LT(){ya("tickle-lock",.75,()=>fe(155,.09,"square",.06))}function DT(){fe(880,.1,"sine",.045),fe(1320,.12,"triangle",.03,.04)}function IT(){ya("tickle",.62,()=>{fe(720,.045,"triangle",.045),fe(960,.05,"triangle",.04,.04)})}function UT(){fe(180,.2,"sawtooth",.05,0,430)}function NT(){ya("vanish",.7,()=>{fe(640,.32,"sine",.05,0,88),fe(420,.22,"triangle",.03,.04,70)})}function ar(){ya("tap-out",.72,()=>{fe(148,.18,"sawtooth",.07),fe(92,.16,"square",.055,.14)})}function FT(){fe(392,.14,"sine",.05),fe(523,.16,"sine",.05,.1),fe(659,.22,"triangle",.055,.2)}function kT(){fe(277,.16,"triangle",.055),fe(208,.18,"triangle",.05,.12),fe(131,.28,"sawtooth",.045,.24,90)}function OT(){fe(988,.12,"sine",.06),fe(1480,.08,"triangle",.03,.02)}function BT(){fe(392,.14,"triangle",.05,0,196)}const ia=["look","skills","loadout"],sa=["weapons","armors"],lo=["stamina","struggle","tickle"],rr=["team-quick","team-timed","ffa-timed","ffa-quick"],zT=7,gc={stamina:2,struggle:3.5,tickle:1.5},HT={stamina:Un.stamina,struggle:Un.struggle,tickle:Un.tickle},VT={stamina:"Stamina",struggle:"Escape",tickle:"Tickle"};class GT{constructor(t,e,n,i){P(this,"room","plaza");P(this,"overlay");P(this,"getSave");P(this,"persist");P(this,"onPlay");P(this,"root",null);P(this,"bound",!1);P(this,"homeTab","look");P(this,"shopTab","weapons");P(this,"laughTimer",0);P(this,"laughUntil",0);P(this,"focus",0);P(this,"arenaFocus",0);P(this,"loadoutItems",[]);this.overlay=t,this.getSave=e,this.persist=n,this.onPlay=i}bind(){const t=this.overlay.querySelector("#hub-root");if(!(t instanceof HTMLElement))return;this.root=t;const e=this.overlay.querySelector("#elara-still"),n=!!(e&&!t.contains(e));t.innerHTML=WT(!n),this.bound||(t.addEventListener("click",i=>this.onClick(i)),this.bound=!0),this.show(this.room),this.render()}render(){const t=this.root;if(!t)return;const e=this.getSave(),n=_s(e.weapon),i=vs(e.armor),a=t.querySelector("#statline");if(a){const r=e.level<10?100+20*(e.level-1):0,o=e.level>=10?"XP capped":`XP ${e.xp??0}/${r}`;a.textContent=`Elara Case  ·  Lv ${e.level}  ·  ${o}  ·  ${e.coins} coins  ·  ${e.unspent} skill pts  ·  ${n.name} / ${i.name}`}this.syncTabs(t),this.renderLook(t,e),this.renderSkills(t,e),this.renderLoadout(t,e),this.renderShop(t,e),this.renderArena(t,e,n,i),this.paintFocus(),this.syncPadHint()}handlePad(t){return this.room==="plaza"?(t.padHome?this.show("home"):t.padShop?this.show("shop"):t.padArena&&this.show("arena"),!1):t.back?(this.show("plaza"),!0):(t.padTabPrev&&this.cycleTab(-1),t.padTabNext&&this.cycleTab(1),t.padLeft&&this.moveFocus(-1,0),t.padRight&&this.moveFocus(1,0),t.padUp&&this.moveFocus(0,-1),t.padDown&&this.moveFocus(0,1),t.confirm?(this.activateFocus(),!0):!1)}get laughing(){return performance.now()<this.laughUntil}debugPad(){return{room:this.room,homeTab:this.homeTab,shopTab:this.shopTab,focus:this.focus,arenaMode:rr[this.arenaFocus]??"team-quick"}}show(t){var r;const e=this.room!==t;this.room=t;const n=this.root;if(!n)return;for(const o of["plaza","home","shop","arena"])(r=n.querySelector(`#hub-${o}`))==null||r.classList.toggle("on",o===t);const i=n.querySelector("#hub-back"),a=n.querySelector(`#hub-${t}`);i&&(i.hidden=t==="plaza",a&&t!=="plaza"&&a.prepend(i)),(t==="home"||t==="shop")&&this.syncTabs(n),e&&this.resetFocus(),this.paintFocus(),this.syncPadHint()}onClick(t){const e=t.target;if(!(e instanceof Element))return;const n=e.closest("[data-hub], #hub-back, #play, #arena-start, #arena-timed, #arena-ffa-timed, #arena-ffa-quick, #btn-laugh");if(!n)return;switch(n.getAttribute("data-hub")??n.id){case"hub-back":this.show("plaza");return;case"door-home":this.show("home");return;case"door-shop":this.show("shop");return;case"door-arena":this.show("arena");return;case"play":case"arena-start":this.onPlay("team-quick");return;case"arena-timed":this.onPlay("team-timed");return;case"arena-ffa-quick":this.onPlay("ffa-quick");return;case"arena-ffa-timed":this.onPlay("ffa-timed");return;case"tab-look":this.homeTab="look",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-skills":this.homeTab="skills",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-loadout":this.homeTab="loadout",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-weapons":this.shopTab="weapons",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-armors":this.shopTab="armors",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"btn-laugh":this.previewLaugh();return;case"spend-stamina":this.spend("stamina");return;case"spend-struggle":this.spend("struggle");return;case"spend-tickle":this.spend("tickle");return;case"equip":{const a=n.getAttribute("data-kind"),r=Number(n.getAttribute("data-id"));(a==="weapon"||a==="armor")&&this.equip(a,r);return}case"buy":{const a=n.getAttribute("data-kind"),r=Number(n.getAttribute("data-id"));(a==="weapon"||a==="armor")&&this.buy(a,r);return}case"pick-look":{const a=Number(n.getAttribute("data-id"));this.pickLook(a);return}default:return}}cycleTab(t){if(this.room==="home"){const e=ia.indexOf(this.homeTab);this.homeTab=ia[(e+t+ia.length)%ia.length],this.resetFocus(),this.syncTabs(this.root),this.paintFocus(),this.syncPadHint();return}if(this.room==="shop"){const e=sa.indexOf(this.shopTab);this.shopTab=sa[(e+t+sa.length)%sa.length],this.resetFocus(),this.syncTabs(this.root),this.paintFocus(),this.syncPadHint()}}resetFocus(){const t=this.getSave();if(this.room==="home"&&this.homeTab==="look")this.focus=t.look;else if(this.room==="home"&&this.homeTab==="skills")this.focus=0;else if(this.room==="home"&&this.homeTab==="loadout"){const e=this.loadoutItems.findIndex(n=>n.kind==="weapon"&&n.id===t.weapon);this.focus=e>=0?e:0}else this.room==="shop"&&this.shopTab==="weapons"?this.focus=t.weapon:this.room==="shop"&&this.shopTab==="armors"?this.focus=t.armor:this.room==="arena"?this.focus=this.arenaFocus:this.focus=0}focusCount(){return this.room==="home"&&this.homeTab==="look"?Di.length:this.room==="home"&&this.homeTab==="skills"?lo.length:this.room==="home"&&this.homeTab==="loadout"?Math.max(1,this.loadoutItems.length):this.room==="shop"&&this.shopTab==="weapons"?ms.length+1:this.room==="shop"&&this.shopTab==="armors"?gs.length+1:this.room==="arena"?rr.length:1}moveFocus(t,e){const n=this.focusCount();if(this.room==="home"&&this.homeTab==="look")t&&(this.focus=(this.focus+t+n)%n),e&&(this.focus=Math.max(0,Math.min(n-1,this.focus+e*zT)));else{const i=t||e;i&&(this.focus=(this.focus+i+n)%n),this.room==="arena"&&(this.arenaFocus=this.focus)}this.paintFocus(),this.syncPadHint()}activateFocus(){if(this.room==="home"&&this.homeTab==="look"){this.pickLook(this.focus);return}if(this.room==="home"&&this.homeTab==="skills"){const t=lo[this.focus];t&&this.spend(t);return}if(this.room==="home"&&this.homeTab==="loadout"){const t=this.loadoutItems[this.focus];t&&this.equip(t.kind,t.id);return}if(this.room==="shop"){const t=this.shopTab==="weapons"?"weapon":"armor";this.buy(t,this.focus);return}this.room==="arena"&&(this.arenaFocus=this.focus,this.onPlay(rr[this.arenaFocus]??"team-quick"))}paintFocus(){const t=this.root;if(!t||this.room==="plaza")return;t.querySelectorAll(".focus").forEach(a=>a.classList.remove("focus"));const e=`[data-focus="${this.room==="arena"?this.arenaFocus:this.focus}"]`,i=((this.room==="home"?this.homeTab==="look"?t.querySelector("#look-grid"):this.homeTab==="skills"?t.querySelector("#home-skills"):t.querySelector("#loadout-list"):this.room==="shop"?this.shopTab==="weapons"?t.querySelector("#shop-weapons"):t.querySelector("#shop-armors"):t.querySelector("#hub-arena"))??t).querySelector(e);i==null||i.classList.add("focus")}syncPadHint(){var n;const t=(n=this.root)==null?void 0:n.querySelector("#hub-pad-hint");if(!t)return;if(this.room==="plaza"){t.textContent="Xbox: A / Menu Play · X Home · Y Shop · RB Arena · B back";return}const e=this.room==="home"?this.homeTab:this.room==="shop"?this.shopTab:"mode";t.textContent=`D-pad / LS move · A ${this.room==="arena"?"Start":"confirm"} · LB/RB ${e} tabs · B plaza`}spend(t){const e=this.getSave();e.unspent<1||e.blocks[t]>=_n||(e.unspent-=1,e.blocks[t]+=1,this.persist(),BT(),this.render())}pickLook(t){const e=Ii(t),n=this.getSave();if(n.look===e.id){this.previewLaugh();return}n.look=e.id,this.focus=e.id,this.persist(),this.render(),this.previewLaugh()}buy(t,e){var o,l;if(e===0)return;const n=this.getSave(),i=t==="weapon"?_s(e):vs(e);if(i.id!==e)return;const a=t==="weapon"?n.ownedWeapons:n.ownedArmors;if(a.includes(e)){this.equip(t,e);return}if(n.coins<i.price){const c=(o=this.root)==null?void 0:o.querySelector("#shop-note");c&&(c.textContent=`Need ${i.price} coins for ${i.name} — you have ${n.coins}.`);return}n.coins-=i.price,a.push(e),t==="weapon"?n.weapon=e:n.armor=e,this.persist(),OT(),this.render();const r=(l=this.root)==null?void 0:l.querySelector("#shop-note");r&&(r.textContent=`Bought and equipped ${i.name}. Owned ids saved.`)}equip(t,e){const n=this.getSave();!(t==="weapon"?n.ownedWeapons:n.ownedArmors).includes(e)&&e!==0||(t==="weapon"?n.weapon=e:n.armor=e,this.persist(),this.render())}previewLaugh(){var a;const t=(a=this.root)==null?void 0:a.querySelector("#look-preview");if(!t)return;const e=this.getSave(),i=yh(e.look??0).hubPreviewMs??2e3;t.classList.add("laughing"),this.laughUntil=performance.now()+i,window.clearTimeout(this.laughTimer),this.laughTimer=window.setTimeout(()=>t.classList.remove("laughing"),i)}syncTabs(t){var e,n,i,a,r,o,l,c,h,u;t&&((e=t.querySelector("#tab-look"))==null||e.classList.toggle("on",this.homeTab==="look"),(n=t.querySelector("#tab-skills"))==null||n.classList.toggle("on",this.homeTab==="skills"),(i=t.querySelector("#tab-loadout"))==null||i.classList.toggle("on",this.homeTab==="loadout"),(a=t.querySelector("#home-look"))==null||a.classList.toggle("on",this.homeTab==="look"),(r=t.querySelector("#home-skills"))==null||r.classList.toggle("on",this.homeTab==="skills"),(o=t.querySelector("#home-loadout"))==null||o.classList.toggle("on",this.homeTab==="loadout"),(l=t.querySelector("#tab-weapons"))==null||l.classList.toggle("on",this.shopTab==="weapons"),(c=t.querySelector("#tab-armors"))==null||c.classList.toggle("on",this.shopTab==="armors"),(h=t.querySelector("#shop-weapons"))==null||h.classList.toggle("on",this.shopTab==="weapons"),(u=t.querySelector("#shop-armors"))==null||u.classList.toggle("on",this.shopTab==="armors"))}renderLook(t,e){const n=Ii(e.look),i=t.querySelector("#look-name");i&&(i.textContent=n.metalException?`${n.display} · default · metal exception (earrings + pendant)`:`${n.display} · Amateur 12 · metal-free`);const a=t.querySelector("#look-preview img"),r=this.overlay.querySelector("#elara-still"),o=On(n.slug);o&&zi(o).then(c=>{a&&(a.src=c.keyedUrl,a.alt=n.display),r&&(r.src=c.keyedUrl,r.alt=n.display,r.hidden=!1)});const l=t.querySelector("#look-grid");if(l){l.innerHTML=Di.map(c=>{const h=On(c.slug)??"";return`<button type="button" class="look-chip${c.id===e.look?" on":""}" data-hub="pick-look" data-id="${c.id}" data-focus="${c.id}" title="${ze(c.display)}">
          <img data-look="${c.id}" alt="${ze(c.display)}" ${h?"":"hidden"} />
          <span>${ze(c.display.split(" ")[0]??c.display)}</span>
        </button>`}).join("");for(const c of Di){const h=On(c.slug);h&&zi(h).then(u=>{const d=l.querySelector(`img[data-look="${c.id}"]`);d&&(d.src=u.keyedUrl,d.hidden=!1)})}}}renderSkills(t,e){const n=t.querySelector("#skill-unspent");n&&(n.textContent=`${e.unspent} unspent`);for(const i of["stamina","struggle","tickle"]){const a=e.blocks[i],r=HT[i]+gc[i]*a,o=t.querySelector(`[data-track="${i}"]`);if(!o)continue;const l=o.querySelector(".skill-meta");l&&(l.textContent=`${a} / ${_n}  ·  flat ${$T(r)}  ·  +${gc[i]} / block`),o.querySelectorAll(".skill-cells i").forEach((u,d)=>{u.classList.toggle("on",d<a),u.classList.toggle("lock",d>=_n)});const h=o.querySelector("button");h&&(h.disabled=e.unspent<1||a>=_n)}}renderLoadout(t,e){const n=t.querySelector("#loadout-list");if(!n)return;const i=_c(e.ownedWeapons,_s,fs),a=_c(e.ownedArmors,vs,ps);n.innerHTML='<h3 class="hub-subhead">Weapons</h3>'+i.map((r,o)=>vc("weapon",r,e.weapon,or(r),o)).join("")+'<h3 class="hub-subhead">Armors</h3>'+a.map((r,o)=>vc("armor",r,e.armor,lr(r),i.length+o)).join(""),this.loadoutItems=[...i.map(r=>({kind:"weapon",id:r.id})),...a.map(r=>({kind:"armor",id:r.id}))]}renderShop(t,e){const n=t.querySelector("#shop-coins");n&&(n.textContent=`${e.coins} coins`);const i=t.querySelector("#shop-note");i&&!i.textContent&&(i.textContent="Buy spends coins. Equip is immediate. Ids persist.");const a=t.querySelector("#shop-weapons");a&&(a.innerHTML=[fs,...ms].map(o=>yc("weapon",o,e.ownedWeapons,e.weapon,e.coins,or(o))).join(""));const r=t.querySelector("#shop-armors");r&&(r.innerHTML=[ps,...gs].map(o=>yc("armor",o,e.ownedArmors,e.armor,e.coins,lr(o))).join(""))}renderArena(t,e,n,i){const a=t.querySelector("#arena-loadout");a&&(a.textContent=`Loadout locks at Start · ${n.name} / ${i.name} · Lv ${e.level}`);const r=t.querySelector("#arena-catalog");if(r){const o=[fs,...ms].map(c=>`<li>${ze(c.name)} · ${c.price?`${c.price}c`:"free"} · ${ze(or(c))}</li>`).join(""),l=[ps,...gs].map(c=>`<li>${ze(c.name)} · ${c.price?`${c.price}c`:"free"} · ${ze(lr(c))}</li>`).join("");r.innerHTML=`<div class="arena-cat-col"><h3 class="hub-subhead">Weapons</h3><ul class="arena-cat">${o}</ul></div>
        <div class="arena-cat-col"><h3 class="hub-subhead">Armors</h3><ul class="arena-cat">${l}</ul></div>`}}}function $T(s){return Number.isInteger(s)?String(s):s.toFixed(1)}function or(s){return s.ticklePct?`+${Math.round(s.ticklePct*100)}% tickle`:"no bonus"}function lr(s){const t=[];return s.stamPct&&t.push(`+${Math.round(s.stamPct*100)}% stam`),s.escPct&&t.push(`+${Math.round(s.escPct*100)}% escape`),t.length?t.join(" / "):"no bonus"}function _c(s,t,e){return[...new Set([0,...s])].sort((i,a)=>i-a).map(i=>{const a=t(i);return a.id===i?a:e})}function vc(s,t,e,n,i){return`<button type="button" class="hub-item${t.id===e?" on":""}" data-hub="equip" data-kind="${s}" data-id="${t.id}" data-focus="${i}">
    <span class="hub-item-name">${ze(t.name)}</span>
    <span class="hub-item-meta">${ze(n)} · ${t.id===e?"equipped":"equip"}</span>
  </button>`}function yc(s,t,e,n,i,a){const r=t.id===0||e.includes(t.id),o=t.id===n;let l,c="";if(t.id===0)l=o?"owned · equipped · not for sale":"owned · not for sale",c=`<button type="button" class="cta ghost" data-hub="equip" data-kind="${s}" data-id="${t.id}">${o?"Equipped":"Equip"}</button>`;else if(o)l="owned · equipped",c='<button type="button" class="cta ghost" disabled>Equipped</button>';else if(r)l="owned",c=`<button type="button" class="cta ghost" data-hub="equip" data-kind="${s}" data-id="${t.id}">Equip</button>`;else{const h=i>=t.price;l=`${t.price} coins`,c=`<button type="button" class="cta${h?"":" ghost"}" data-hub="buy" data-kind="${s}" data-id="${t.id}">${h?"Buy":`Need ${t.price}c`}</button>`}return`<div class="hub-item${o?" on":""}" data-focus="${t.id}">
    <div class="hub-item-copy">
      <span class="hub-item-name">${ze(t.name)}</span>
      <span class="hub-item-meta">${ze(a)} · ${ze(l)}</span>
    </div>
    ${c}
  </div>`}function ze(s){return s.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t)}function cr(s){const t=Array.from({length:_n},()=>"<i></i>").join(""),e=Array.from({length:oo-_n},()=>'<i class="lock"></i>').join("");return`<div class="skill-track" data-track="${s}" data-focus="${lo.indexOf(s)}">
    <div class="skill-head">
      <span>${VT[s]}</span>
      <span class="skill-meta"></span>
    </div>
    <div class="skill-cells amateur">${t}</div>
    <div class="skill-lock-label">Pro lock · ${oo-_n} blocks</div>
    <div class="skill-cells pro">${e}</div>
    <button type="button" class="cta" id="spend-${s}" data-hub="spend-${s}">Spend 1</button>
  </div>`}function WT(s){return`
  <button type="button" class="cta ghost hub-back" id="hub-back" data-hub="hub-back" hidden>Back</button>
  <p class="statline" id="hub-pad-hint">Xbox: A / Menu Play · X Home · Y Shop · RB Arena · B back</p>
  <div id="hub-plaza" class="hub-panel on">
    <h1>Tickle Battle</h1>
    <p class="sub">Amateur Team Quick — 6v6, one life, last team standing. You play Elara Case. AI fill is Amateur 12 (metal-free).</p>
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
      <p class="hint">Permanent spend. No respec. Amateur can fill the first ${_n} of ${oo} blocks. Rest lock until Pro.</p>
      ${cr("stamina")}
      ${cr("struggle")}
      ${cr("tickle")}
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
  </div>`}const XT=5919564,qT=2762276,YT=3814704,xc=6211800,Mc=13935194;class jT{constructor(){P(this,"group",new Jt);P(this,"doors");P(this,"matMetal");P(this,"matDark");P(this,"matFloor");P(this,"matCyan");P(this,"matAmber");P(this,"pickables",[]);P(this,"ray",new _g);P(this,"ndc",new ct);P(this,"hover",null);P(this,"doorGroups",new Map);this.matMetal=new Ee({color:XT,metalness:.72,roughness:.38}),this.matDark=new Ee({color:qT,metalness:.55,roughness:.5}),this.matFloor=new Ee({color:YT,metalness:.4,roughness:.62}),this.matCyan=hr(xc,.22),this.matAmber=hr(Mc,.2),this.doors={home:new T(-13.2,1.55,0),shop:new T(13.2,1.55,0),arena:new T(0,1.55,10.2)},this.build()}addBox(t,e,n,i,a,r,o,l=!0){const c=new St(new te(i,a,r),o);return c.position.set(t,e,n),l&&(c.castShadow=!0,c.receiveShadow=!0),this.group.add(c),c}build(){const t=new St(new te(28,.4,22),this.matFloor);t.position.y=-.2,t.receiveShadow=!0,this.group.add(t);const e=4.2,n=e/2,i=.8,a=2.4,r=3.1,o=a/2,l=14,c=11,h=c-i/2,u=-10.6,d=-13.6,f=l-i/2,g=l-o,_=c-o;this.addBox(0,n,u,28,e,i,this.matMetal),this.addBox(-7.6000000000000005,n,h,g,e,i,this.matMetal),this.addBox(o+g/2,n,h,g,e,i,this.matMetal),this.addBox(0,r+(e-r)/2,h,a,e-r,i,this.matMetal),this.addBox(d,n,-6.1000000000000005,i,e,_,this.matMetal),this.addBox(d,n,o+_/2,i,e,_,this.matMetal),this.addBox(d,r+(e-r)/2,0,i,e-r,a,this.matMetal),this.addBox(f,n,-6.1000000000000005,i,e,_,this.matMetal),this.addBox(f,n,o+_/2,i,e,_,this.matMetal),this.addBox(f,r+(e-r)/2,0,i,e-r,a,this.matMetal),this.addDoor("home",this.doors.home,Math.PI/2,"HOME",xc),this.addDoor("shop",this.doors.shop,-Math.PI/2,"SHOP",Mc),this.addDoor("arena",this.doors.arena,Math.PI,"ARENA",12103844);for(const[m,p]of[[-6.2,-5.2],[6.2,-5.2],[-6.2,5.2],[6.2,5.2]])this.addBox(m,2.05,p,.7,4.1,.7,this.matMetal);this.addBox(0,.45,-6.4,8.4,.9,.45,this.matDark),this.addBox(-4.8,.38,3.2,3.6,.76,.4,this.matDark),this.addBox(4.8,.38,3.2,3.6,.76,.4,this.matDark),this.addBox(0,4.15,-3.5,26,.22,.45,this.matDark,!1),this.addBox(0,4.15,3.5,26,.22,.45,this.matDark,!1),this.addBiolume()}pickDoor(t,e,n,i,a){const r=i.getBoundingClientRect();if(r.width<=0||r.height<=0)return null;this.ndc.set((e-r.left)/r.width*2-1,-((n-r.top)/r.height)*2+1),this.ray.setFromCamera(this.ndc,t);const o=this.ray.intersectObjects(this.pickables,!0);for(const u of o){let d=u.object;for(;d;){const f=d.userData.hubRoom;if(f)return f;d=d.parent}}if(!!a&&e>=a.left&&e<=a.right&&n>=a.top&&n<=a.bottom)return null;t.updateMatrixWorld();let c=null,h=96;for(const[u,d]of this.doorGroups){const f=new T;if(d.getWorldPosition(f),f.y=1.7,f.project(t),f.z>1)continue;const g=r.left+(f.x*.5+.5)*r.width,_=r.top+(-f.y*.5+.5)*r.height,m=Math.hypot(e-g,n-_);m<h&&(h=m,c=u)}return c}setHover(t){if(this.hover!==t){this.hover=t;for(const[e,n]of this.doorGroups)n.traverse(i=>{const r=i.material;r!=null&&r.userData.doorGlow&&(r.userData.baseEmissive==null&&(r.userData.baseEmissive=r.emissiveIntensity),r.emissiveIntensity=e===t?r.userData.baseEmissive+.55:r.userData.baseEmissive)})}}addDoor(t,e,n,i,a){const r=new Jt;r.userData.hubRoom=t;const o=2.4,l=3.1,c=.28,h=.42,u=new te(c,l,h),d=new te(o+c,.28,h),f=new St(u,this.matMetal);f.position.set(-o/2,l/2,0),f.castShadow=!0;const g=new St(u.clone(),this.matMetal);g.position.set(o/2,l/2,0),g.castShadow=!0;const _=new St(d,this.matMetal);_.position.set(0,l+.08,0),_.castShadow=!0;const m=hr(a,.38);m.userData.doorGlow=!0;const p=new St(new te(o-.08,.045,.05),m);p.position.set(0,l-.04,.18);const E=new St(new te(.045,l-.08,.05),m);E.position.set(-o/2+.12,l/2,.18);const b=m.clone();b.userData.doorGlow=!0;const M=new St(new te(.045,l-.08,.05),b);M.position.set(o/2-.12,l/2,.18);const F=new St(new te(o+.2,l+.2,.14),this.matDark);F.position.set(0,l/2,-.32);const A=KT(i,a);A.position.set(0,l+.42,.28);const R=new St(new te(o+.8,l+1.1,1.4),new si({transparent:!0,opacity:0,depthWrite:!1,side:He}));R.position.set(0,l/2+.15,.15),R.userData.hubRoom=t,r.add(f,g,_,p,E,M,F,A,R),r.position.copy(e),r.position.y=0,r.rotation.y=n,this.group.add(r),this.pickables.push(r),this.doorGroups.set(t,r)}addBiolume(){const t=(e,n,i,a,r)=>{const o=new St(new te(e,.035,n),r);o.position.set(i,.02,a),this.group.add(o)};t(18,.16,0,0,this.matCyan),t(.16,14,0,0,this.matAmber),t(2.6,.12,this.doors.home.x+1.1,0,this.matCyan),t(2.6,.12,this.doors.shop.x-1.1,0,this.matAmber),t(.12,2.4,0,this.doors.arena.z-1.1,this.matAmber),t(10,.1,0,-9.4,this.matCyan),t(10,.1,0,9.4,this.matAmber)}}function hr(s,t){return new Ee({color:2762276,emissive:s,emissiveIntensity:t,metalness:.2,roughness:.7})}function KT(s,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(12,10,9,0.88)",n.fillRect(0,0,256,64);const i=`#${t.toString(16).padStart(6,"0")}`;n.strokeStyle=i,n.lineWidth=3,n.strokeRect(8,8,240,48),n.fillStyle=i,n.font="700 30px Trebuchet MS, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(s,128,34);const a=new oh(e),r=new si({map:a,transparent:!0,side:He});return new St(new $i(1.65,.4),r)}function ur(s,t=Math.random){const e=Math.max(1,Math.min(10,s)),n=7+(e-1),i={stamina:0,struggle:0,tickle:0},a=["stamina","struggle","tickle"];for(let c=0;c<n;c++){const h=a.filter(d=>i[d]<_n);if(!h.length)break;const u=h[Math.floor(t()*h.length)];i[u]+=1}const r=e<=2?.4:e<=5?.22:.12;let o=0,l=0;if(t()>r){const c=Math.min(ms.length,Math.max(1,Math.ceil(e*.7)));o=1+Math.floor(t()*c)}if(t()>r){const c=Math.min(gs.length,Math.max(1,Math.ceil(e*.8)));l=1+Math.floor(t()*c)}return{blocks:i,weapon:o,armor:l}}const bh="tb-amateur-save";class JT{constructor(t){P(this,"renderer");P(this,"scene",new q0);P(this,"camera",new Fe(72,1,.08,120));P(this,"map",new Og);P(this,"plaza",new jT);P(this,"fighters",[]);P(this,"player");P(this,"input",new xT);P(this,"mode","hub");P(this,"arenaMode","team-quick");P(this,"countdown",tc);P(this,"timedLeft",0);P(this,"tapScore",[0,0]);P(this,"clock",new gg);P(this,"pairCd",new Map);P(this,"joinList",new Map);P(this,"firstTickler",new Map);P(this,"ffaScore",new Map);P(this,"contactHold",new Map);P(this,"nudgeT",0);P(this,"nudgeFrom",new T);P(this,"nudgeTo",new T);P(this,"nudgeIds",[]);P(this,"overlay");P(this,"hub");P(this,"save");P(this,"coinsEarned",0);P(this,"payouts",[]);P(this,"matchLoadout","");P(this,"matchWeapon",0);P(this,"matchArmor",0);P(this,"plazaPreview",null);P(this,"result","");P(this,"toastT",0);P(this,"toast","");P(this,"lookPitch",0);P(this,"combatAnnounced",!1);P(this,"liveT",0);P(this,"hudEls",{});P(this,"rearCue");P(this,"fpArms");P(this,"fpArmT",0);P(this,"wallPrev",performance.now());this.save=ZT(),this.renderer=new X0({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=!0,t.appendChild(this.renderer.domElement),this.overlay=document.createElement("div"),this.overlay.id="overlay",this.overlay.innerHTML=e2(),t.appendChild(this.overlay),this.hub=new GT(this.overlay,()=>this.save,()=>this.persistSave(),n=>{this.arenaMode=n,this.beginMatch(this.input.padActive)}),this.hub.bind(),this.cacheHud(),this.input.bindHud(this.overlay),this.scene.fog=new Qn(1709588,18,48),this.scene.background=new Ot(1446672),this.scene.add(new dg(9076856,1708560,.7));const e=new mg(13154464,1.05);e.position.set(8,18,6),e.castShadow=!0,this.scene.add(e),this.scene.add(this.map.group),this.scene.add(this.plaza.group),this.plaza.group.visible=!1,this.rearCue=new St(new Ro(.38,.72,28),new si({color:13935194,transparent:!0,opacity:.92,side:He,depthWrite:!1})),this.rearCue.rotation.x=-Math.PI/2,this.rearCue.visible=!1,this.scene.add(this.rearCue),this.fpArms=t2(),this.scene.add(this.camera),this.camera.add(this.fpArms),this.fpArms.visible=!1,this.bindUi(),window.addEventListener("resize",()=>this.resize()),this.resize(),this.showHub(),this.renderer.setAnimationLoop(()=>this.frame())}cacheHud(){for(const t of["boot","results","hud","stamina-fill","escape-fill","meta-left","meta-right","top-left","top-right","countdown","toast","face","btn-tickle","btn-escape","statline","top","crosshair","radar","roster","face-still","elara-still","player-portrait","pad-status","again-hint","btn-leave","tickle-flash"]){const e=this.overlay.querySelector("#"+t);e&&(this.hudEls[t]=e)}}bindUi(){var t,e;(t=this.overlay.querySelector("#again"))==null||t.addEventListener("click",()=>this.showHub()),(e=this.overlay.querySelector("#btn-leave"))==null||e.addEventListener("click",()=>this.bailCountdown()),this.renderer.domElement.addEventListener("click",n=>{var i,a;this.tryPlazaDoor(n.clientX,n.clientY)||this.mode==="play"&&!this.input.padActive&&((a=(i=this.renderer.domElement).requestPointerLock)==null||a.call(i))}),this.overlay.addEventListener("click",n=>{const i=n.target;i instanceof Element&&(i.closest("button, a, input, [data-hub], .hub-item, .roster, #play")||this.tryPlazaDoor(n.clientX,n.clientY))}),window.addEventListener("pointermove",n=>{if(this.mode!=="hub"||this.hub.room!=="plaza"){document.body.style.cursor==="pointer"&&(document.body.style.cursor="");return}const i=this.overlay.querySelector("#boot .card"),a=this.plaza.pickDoor(this.camera,n.clientX,n.clientY,this.renderer.domElement,i==null?void 0:i.getBoundingClientRect());this.plaza.setHover(a);const r=a?"pointer":"";this.renderer.domElement.style.cursor=r,document.body.style.cursor=r})}tryPlazaDoor(t,e){if(this.mode!=="hub"||this.hub.room!=="plaza")return!1;const n=this.overlay.querySelector("#boot .card"),i=this.plaza.pickDoor(this.camera,t,e,this.renderer.domElement,n==null?void 0:n.getBoundingClientRect());return i?(this.hub.show(i),this.hub.render(),this.syncPlazaHall(),this.plaza.setHover(null),this.renderer.domElement.style.cursor="",document.body.style.cursor="",!0):!1}syncPlazaHall(){this.hudEls.boot.classList.toggle("plaza-hall",this.mode==="hub"&&this.hub.room==="plaza")}persistSave(){QT(this.save),this.syncPlazaPreview()}bailCountdown(){var t;this.mode!=="play"||this.countdown<=0||(this.clearFighters(),this.say("Left during countdown — no coins, no XP"),this.showHub(),(t=document.exitPointerLock)==null||t.call(document))}beginMatch(t){var e,n;this.mode!=="play"&&(PT(),!t&&!this.input.padActive&&((n=(e=this.renderer.domElement).requestPointerLock)==null||n.call(e)),this.startMatch())}showHub(){this.mode="hub",this.clearFighters(),this.map.group.visible=!1,this.plaza.group.visible=!0,this.scene.fog=new Qn(1709588,32,80),this.hudEls.boot.style.display="flex",this.hudEls.results.style.display="none",this.hudEls.hud.style.display="none",this.hudEls.countdown.style.display="none",this.hudEls.top&&(this.hudEls.top.style.display="none"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="none"),this.hudEls.radar&&(this.hudEls.radar.style.display="none"),this.rearCue.visible=!1,this.save,this.hub.show("plaza"),this.hub.render(),this.fillElaraPortrait(),this.fillRosterStrip(),this.syncPlazaHall(),this.syncPlazaPreview(),this.plaza.setHover(null)}aimPlazaCamera(){const t=this.clock.elapsedTime*.12,e=this.hub.room;if(e==="home"){this.camera.position.set(-6.4,3.5,.35),this.camera.lookAt(this.plaza.doors.home.x,1.55,this.plaza.doors.home.z);return}if(e==="shop"){this.camera.position.set(6.4,3.5,.35),this.camera.lookAt(this.plaza.doors.shop.x,1.55,this.plaza.doors.shop.z);return}if(e==="arena"){this.camera.position.set(0,3.7,4.4),this.camera.lookAt(this.plaza.doors.arena.x,1.55,this.plaza.doors.arena.z);return}this.camera.position.set(Math.sin(t)*1.4+2.35,1.78,4.85),this.camera.lookAt(0,1.12,1.35)}fillElaraPortrait(){const t=this.hudEls["elara-still"],e=Ii(this.save.look),n=On(e.slug);!t||!n||(t.hidden=!0,t.alt=e.display,zi(n).then(i=>{t.src=i.keyedUrl,t.hidden=!1;const a=this.overlay.querySelector("#look-preview img");a&&(a.src=i.keyedUrl)}))}fillRosterStrip(){const t=this.hudEls.roster;if(t){t.innerHTML=ds.map(e=>On(e.slug)?`<figure class="slot"><img data-slug="${e.slug}" alt="${e.display}" hidden /><figcaption>${e.display}</figcaption></figure>`:`<div class="slot empty"><span>${e.display}</span></div>`).join("");for(const e of ds){const n=On(e.slug);n&&zi(n).then(i=>{const a=t.querySelector(`img[data-slug="${e.slug}"]`);a&&(a.src=i.keyedUrl,a.hidden=!1)})}}}startMatch(){this.mode="play",this.map.group.visible=!0,this.plaza.group.visible=!1,this.scene.fog=new Qn(1709588,18,48),this.countdown=tc,this.timedLeft=this.arenaMode==="team-timed"||this.arenaMode==="ffa-timed"?wg:0,this.tapScore=[0,0],this.coinsEarned=0,this.payouts=[],this.joinList.clear(),this.firstTickler.clear(),this.ffaScore.clear(),this.pairCd.clear(),this.contactHold.clear(),this.nudgeT=0,this.combatAnnounced=!1,this.liveT=0,this.wallPrev=performance.now(),this.clearFighters(),this.lockMatchLoadout(),this.spawnRoster(),this.hudEls.boot.style.display="none",this.hudEls.results.style.display="none",this.hudEls.hud.style.display="flex",this.syncPlazaHall(),this.plazaPreview&&(this.plazaPreview.group.visible=!1),this.hudEls.top&&(this.hudEls.top.style.display="flex"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="block"),this.hudEls.radar&&(this.hudEls.radar.style.display="flex"),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display="block"),na(220,.12)}clearFighters(){for(const t of this.fighters)this.scene.remove(t.group);this.fighters=[]}spawnRoster(){const t=["hunter","flanker","ambusher","escape","sticky"],e=Ii(this.save.look),n=this.lookPalette(e.id),i=new Set([n]),a=()=>{for(let h=1;h<ma.length;h++)if(!i.has(h))return i.add(h),h;return 1},r={...this.save.blocks},o=this.isFfa(),l=ds.filter(h=>h.slug!==e.slug);this.player=new is({team:o?0:ta.CYAN,isPlayer:!0,look:n,name:"Elara Case",slug:e.slug,role:null,blocks:r,weapon:this.matchWeapon,armor:this.matchArmor});const c=o?this.map.soloPads[0].clone():this.map.spawnA.clone();if(this.place(this.player,c),this.player.yaw=o?dr(c,new T):-Math.PI/2,this.fighters.push(this.player),this.scene.add(this.player.group),this.player.body.visible=!1,o){for(let h=0;h<11;h++){const u=ur(this.save.level),d=this.map.soloPads[h+1]??this.map.spawnB.clone(),f=new is({team:h+1,isPlayer:!1,look:a(),name:l[h].display,slug:l[h].slug,role:t[h%t.length],blocks:u.blocks,weapon:u.weapon,armor:u.armor});this.place(f,d.clone()),f.yaw=dr(d,new T),this.fighters.push(f),this.scene.add(f.group)}return}for(let h=0;h<5;h++){const u=ur(this.save.level),d=new is({team:ta.CYAN,isPlayer:!1,look:a(),name:l[h].display,slug:l[h].slug,role:t[h%t.length],blocks:u.blocks,weapon:u.weapon,armor:u.armor});this.place(d,this.map.spawnA.clone().add(new T(-1+h*.4,0,-2+h*.8))),d.yaw=-Math.PI/2,this.fighters.push(d),this.scene.add(d.group)}for(let h=0;h<6;h++){const u=ur(this.save.level),d=t[h%t.length],f=d==="escape",g=new is({team:ta.AMBER,isPlayer:!1,look:a(),name:l[5+h].display,slug:l[5+h].slug,role:d,blocks:u.blocks,weapon:u.weapon,armor:u.armor});g.bait=f,f?(this.place(g,new T(eo,0,no)),g.yaw=-Math.PI/2,g.rim.intensity=3.6):(this.place(g,this.map.spawnB.clone().add(new T(1-h%3*.5,0,-2+h%3*1.1))),g.yaw=Math.PI/2),this.fighters.push(g),this.scene.add(g.group)}}place(t,e){e.y=this.map.groundY(e.x,e.z),t.pos.copy(e),t.syncMesh(),t.settle()}lockMatchLoadout(){this.matchWeapon=this.save.weapon,this.matchArmor=this.save.armor,this.matchLoadout=fT(this.matchWeapon,this.matchArmor)}lookPalette(t){return t===0?0:(t-1)%Math.max(1,ma.length-1)+1}syncPlazaPreview(){const t=Ii(this.save.look),e=this.lookPalette(t.id),n=this.mode!=="play";this.plazaPreview?(this.plazaPreview.applyGear(this.save.weapon,this.save.armor),(this.plazaPreview.slug!==t.slug||this.plazaPreview.look!==e)&&this.plazaPreview.applyLookSlug(t.slug,e)):(this.plazaPreview=new is({team:ta.CYAN,isPlayer:!0,look:e,name:"Elara Case",slug:t.slug,role:null,blocks:{...this.save.blocks},weapon:this.save.weapon,armor:this.save.armor}),this.plazaPreview.pos.set(0,0,1.35),this.plazaPreview.yaw=Math.PI*.92,this.plazaPreview.syncMesh(),this.plazaPreview.settle(),this.scene.add(this.plazaPreview.group)),this.plazaPreview.group.visible=n}isFfa(){return this.arenaMode==="ffa-quick"||this.arenaMode==="ffa-timed"}joinCap(){return this.isFfa()?1:Tg}packsOn(){return!this.isFfa()}byId(t){return this.fighters.find(e=>e.id===t)}frame(){const t=performance.now(),e=Math.min(.35,Math.max(0,(t-this.wallPrev)/1e3));this.wallPrev=t;const n=Math.min(.05,this.clock.getDelta()||e);if(this.input.poll(n),this.syncPadChrome(),this.input.justConnected&&this.say(`${this.input.padLabel} ready — LS move, RS look`),this.mode==="hub"){const r=this.hub.handlePad(this.input);if(this.input.confirm&&!r&&this.hub.room==="plaza"){this.beginMatch(this.input.padActive),this.input.endFrame();return}this.syncPlazaHall(),this.syncPlazaPreview(),this.plazaPreview&&(this.plazaPreview.occupancy=this.hub.laughing?"ticklee":"free",this.plazaPreview.tickAnim(Math.min(.05,e)),this.plazaPreview.syncMesh()),this.scene.fog=new Qn(1709588,32,80),this.aimPlazaCamera(),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug();return}if(this.mode==="results"){if(this.input.back||this.input.confirm){this.showHub(),this.input.endFrame();return}this.syncPlazaPreview(),this.plazaPreview&&(this.plazaPreview.occupancy=this.hub.laughing?"ticklee":"free",this.plazaPreview.tickAnim(Math.min(.05,e)),this.plazaPreview.syncMesh());const r=this.clock.elapsedTime*.1;this.camera.position.set(Math.cos(r)*4,8,14),this.camera.lookAt(0,1.2,0),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug();return}const i=this.countdown<=0;if(this.countdown=Math.max(0,this.countdown-e),this.countdown<=0&&(this.liveT+=e),(this.arenaMode==="team-timed"||this.arenaMode==="ffa-timed")&&i&&(this.timedLeft=Math.max(0,this.timedLeft-e)),this.countdown>0&&this.input.back){this.bailCountdown(),this.input.endFrame();return}!this.combatAnnounced&&this.countdown===0&&(this.combatAnnounced=!0,this.liftCountdownIgnore(),this.say(this.isFfa()?"Combat live — every other rim is a rival. Mid lane, get behind — tickle starts.":"Combat live — amber ring at their back. Walk in — tickle starts."));for(const[r,o]of[...this.pairCd.entries()]){const l=o-e;l<=0?this.pairCd.delete(r):this.pairCd.set(r,l)}this.applyLook();let a=e;for(;a>1e-4;){const r=Math.min(.05,a);this.tickNudge(r),this.tickPlayer(r);for(const o of this.fighters)o.isPlayer||wT(o,this.fighters,this.map,r,this.countdown,this.liveT,(l,c)=>this.startTickle(l,c),(l,c)=>this.tryJoin(l,c),l=>{l.wantTickle=!0},l=>{l.wantEscape=!0},performance.now());this.resolveTaps(),this.tickCombatState(r),a-=r}this.updateVisibility();for(const r of this.fighters)r.tickAnim(Math.min(.05,e)),r.syncMesh();this.updateCamera(),this.updateHud(e),this.checkWin(),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug()}liftCountdownIgnore(){for(const t of this.fighters)t.spawnIgnore=0,t.contactEdge.clear();for(let t=0;t<this.fighters.length;t++){const e=this.fighters[t];for(let n=t+1;n<this.fighters.length;n++){const i=this.fighters[n];Ye(e,i)&&(en(e,i)||en(i,e)||(e.contactEdge.set(i.id,!0),i.contactEdge.set(e.id,!0)))}}}publishDebug(){const t=this.player,e=this.fighters.find(i=>i.bait),n=!!e&&t&&ss(t,e,en(t,e))&&en(t,e);Object.assign(window,{__tb:()=>{var i,a,r;return{mode:this.mode,room:this.hub.room,countdown:+this.countdown.toFixed(2),liveT:+this.liveT.toFixed(2),occ:t==null?void 0:t.occupancy,pos:t?[+t.pos.x.toFixed(2),+t.pos.z.toFixed(2)]:null,yaw:t?+t.yaw.toFixed(2):null,joinOn:t==null?void 0:t.joinOn,nudgeT:+this.nudgeT.toFixed(3),tickleHeld:this.input.tickleHeld,escapeHeld:this.input.escapeHeld,toast:this.toast,stam:t?+(100*(((i=this.byId(t.joinOn))==null?void 0:i.stamina)??t.stamina)/(((a=this.byId(t.joinOn))==null?void 0:a.maxStamina)??t.maxStamina)).toFixed(1):0,escape:(t==null?void 0:t.occupancy)==="ticklee"?+t.escape.toFixed(1):+(((r=this.byId((t==null?void 0:t.joinOn)??-1))==null?void 0:r.escape)??0).toFixed(1),vanishLeft:(t==null?void 0:t.vanishLeft)??0,reappearIgnore:t?+t.reappearIgnore.toFixed(2):0,spawnIgnore:t?+t.spawnIgnore.toFixed(2):0,rising:!!(e&&t&&this.risingBlocked(t,e)),pairCd:e&&t?+(this.pairCd.get(Ei(t.id,e.id))??0).toFixed(2):0,reappearFlash:t?+t.reappearFlash.toFixed(2):0,vanishHud:(t==null?void 0:t.occupancy)==="vanished",bait:e?{name:e.name,occ:e.occupancy,pos:[+e.pos.x.toFixed(2),+e.pos.z.toFixed(2)],yaw:+e.yaw.toFixed(2),stam:+(100*e.stamina/e.maxStamina).toFixed(1),escape:+e.escape.toFixed(1),vanish:+e.vanishLeft.toFixed(1),reappearIgnore:+e.reappearIgnore.toFixed(2),reappearFlash:+e.reappearFlash.toFixed(2)}:null,rear:n,distBait:e&&t?+t.pos.distanceTo(e.pos).toFixed(2):null,coins:this.save.coins,look:this.save.look,weapon:this.save.weapon,armor:this.save.armor,ownedWeapons:this.save.ownedWeapons,ownedArmors:this.save.ownedArmors,padActive:this.input.padActive,padMove:[this.input.stickX,this.input.moveVec().x,this.input.moveVec().z],coinsEarned:this.coinsEarned,payouts:this.payouts,loadout:this.matchLoadout,lockedWeapon:this.matchWeapon,lockedArmor:this.matchArmor,hub:this.hub.debugPad(),result:this.result}},__tbHold:i=>{for(const a of i)this.input.keys.add(a);(i.includes("KeyT")||i.includes("Space"))&&(this.input.tickle=!0,this.input.tickleHeld=!0),i.includes("KeyE")&&(this.input.escape=!0,this.input.escapeHeld=!0),i.includes("KeyQ")&&(this.input.releaseHeld=!0)},__tbRelease:()=>{this.input.keys.clear(),this.input.tickleHeld=!1,this.input.escapeHeld=!1},__tbFaceLane:()=>{this.player&&(this.player.yaw=-Math.PI/2,this.player.pitch=0)},__tbForceResults:()=>{if(this.mode==="play"){for(const i of this.fighters)!i.isPlayer&&i.team!==this.player.team&&(i.occupancy="tapped");this.checkWin()}},__tbParkBehindBait:()=>{if(this.mode!=="play")return;const i=this.fighters.find(o=>o.bait&&_e(o)&&o.occupancy!=="vanished"),a=this.player;if(!i||!a)return;(this.map.inSpawnPocket(i.pos,i.team)||this.map.inSpawnPocket(i.pos,1-i.team))&&(this.place(i,new T(eo,0,no)),i.yaw=-Math.PI/2);const r=i.pos.clone().add(i.forward().multiplyScalar(-1.25));this.place(a,r),a.yaw=i.yaw,a.pitch=0,i.scriptHold=!0},__tbStartOnPlayer:()=>{if(this.mode!=="play"||this.countdown>0)return;const i=this.player;this.nudgeIds.includes(i.id)&&(this.nudgeT=0,this.nudgeIds=[]),(i.occupancy==="tickler"||i.occupancy==="nudge")&&this.release(i),i.occupancy==="nudge"&&(i.occupancy="free",i.joinOn=-1,i.targetId=-1);const a=this.fighters.find(l=>!l.isPlayer&&l.team!==i.team&&l.occupancy==="free"&&_e(l));if(!a||i.occupancy!=="free"&&i.occupancy!=="ticklee"||i.occupancy==="ticklee")return;const r=new T(0,0,0);this.place(i,r),i.yaw=-Math.PI/2,i.pitch=0;const o=i.pos.clone().add(i.forward().multiplyScalar(-1.15));this.place(a,o),a.yaw=i.yaw,a.scriptHold=!0,i.contactEdge.delete(a.id),a.contactEdge.delete(i.id),this.pairCd.delete(Ei(a.id,i.id)),this.startTickle(a,i)},__tbEndVanish:()=>{for(const i of this.fighters)i.occupancy==="vanished"&&(i.vanishLeft=.04)},__tbParkAway:()=>{if(this.mode!=="play")return;const i=this.player;if(i){this.place(i,this.map.spawnA.clone()),i.yaw=-Math.PI/2,i.pitch=0,i.contactEdge.clear();for(const a of this.fighters)a.contactEdge.delete(i.id)}},__tbForceWallCancel:()=>{if(this.mode!=="play"||this.countdown>0)return;const i=this.player,a=this.fighters.find(o=>o.bait&&_e(o)&&o.occupancy!=="vanished");if(!i||!a)return;i.occupancy==="tickler"&&this.release(i),(this.nudgeIds.includes(i.id)||this.nudgeIds.includes(a.id))&&(this.nudgeT=0,this.nudgeIds=[]),i.occupancy="free",i.joinOn=-1,a.occupancy="free",a.joinOn=-1,a.scriptHold=!0,this.place(a,this.map.spawnA.clone()),a.yaw=-Math.PI/2;const r=a.pos.clone().add(a.forward().multiplyScalar(-1.25));this.place(i,r),i.yaw=a.yaw,i.pitch=0,i.contactEdge.delete(a.id),a.contactEdge.delete(i.id),this.pairCd.delete(Ei(i.id,a.id)),this.startTickle(i,a)},__tbBenchBots:()=>{if(this.mode==="play"){this.nudgeT=0,this.nudgeIds=[];for(const i of this.fighters)if(!(i.isPlayer||i.bait)){if(i.occupancy==="tickler"&&this.release(i),i.occupancy==="ticklee"){const a=this.joinList.get(i.id)??[];for(const r of a){const o=this.byId(r);o&&(o.occupancy="free",o.joinOn=-1,o.targetId=-1)}this.joinList.delete(i.id),i.occupancy="free",i.joinOn=-1,i.targetId=-1}if(i.occupancy==="nudge"||i.occupancy==="free"){i.occupancy="free",i.joinOn=-1,i.targetId=-1;const a=(i.team===0?this.map.spawnA:this.map.spawnB).clone();this.place(i,a)}}}},__tbConnectPad:()=>xh(),__tbPad:i=>MT(i),__tbDisconnectPad:()=>ST()})}applyLook(){const t=this.player,e=this.input.consumeLook();t.occupancy==="ticklee"?this.lookPitch=wi.clamp(this.lookPitch+e.y,-.9,.6):t.occupancy!=="tapped"&&t.occupancy!=="spectate"&&(t.yaw-=e.x,t.pitch=wi.clamp(t.pitch-e.y,-1.2,1.1))}tickPlayer(t){const e=this.player;if(!(e.occupancy==="tickler"||e.occupancy==="ticklee"||e.occupancy==="nudge"||e.occupancy==="tapped")&&e.occupancy!=="spectate"){const i=this.input.moveVec(),a=e.occupancy==="vanished"?bs*1.05:bs,r=-Math.sin(e.yaw),o=-Math.cos(e.yaw),l=Math.cos(e.yaw),c=-Math.sin(e.yaw),h=(r*i.z+l*i.x)*a*t,u=(o*i.z+c*i.x)*a*t,d=this.map.resolve(e.pos.x+h,e.pos.z+u,e.pos.y);let f=d.x,g=d.z;if(this.countdown>0){const _=this.map.clampSpawnPocket(f,g,e.team);f=_.x,g=_.z}e.pos.x=f,e.pos.z=g,e.pos.y=this.map.groundY(e.pos.x,e.pos.z)}this.inNudgePile(e.id)||e.occupancy==="nudge"||(e.occupancy==="free"&&this.autoStartTickle(e),e.occupancy==="tickler"&&(this.input.tickle||this.input.tickleHeld)&&(e.wantTickle=!0),e.occupancy==="ticklee"&&(this.input.escape||this.input.escapeHeld)&&(e.wantEscape=!0),e.occupancy==="tickler"&&this.input.releaseHeld&&this.release(e))}resolveTaps(){for(const t of this.fighters)t.wantEscape&&this.tapEscape(t),t.wantEscape=!1;for(const t of this.fighters)t.wantTickle&&this.tapTickle(t),t.wantTickle=!1}inNudgePile(t){return this.nudgeT>0&&this.nudgeIds.includes(t)}autoStartTickle(t){if(this.countdown>0||this.inNudgePile(t.id)||t.occupancy!=="free")return;let e=null,n=1e9;for(const r of this.fighters){if(!this.canAutoTickle(t,r))continue;const o=t.pos.distanceTo(r.pos);o<n&&(n=o,e=r)}const a=this.fighters.find(r=>r.bait&&this.canAutoTickle(t,r))??e;a&&(a.occupancy==="ticklee"?this.tryJoin(t,a,!0):this.startTickle(t,a,!0))}canAutoTickle(t,e){if(this.startLocked(t,e)||this.risingBlocked(t,e)||t.team===e.team||!_e(e)||e.occupancy==="vanished")return!1;const n=en(t,e),i=this.packsOn()&&as(this.fighters,t,e);return!n&&!i?!1:i&&(Ye(t,e)||ss(t,e,!1))?!0:ss(t,e,n)}startLocked(t,e){return!!(this.countdown>0||this.inNudgePile(t.id)||this.inNudgePile(e.id)||t.spawnIgnore>0||e.spawnIgnore>0||t.reappearIgnore>0||e.reappearIgnore>0||this.pairCd.has(Ei(t.id,e.id)))}tickNudge(t){if(this.nudgeIds.length===0){this.nudgeT=0;return}if(this.nudgeT>0){const e=Ql,n=1-this.nudgeT/e,i=this.nudgeFrom.clone().lerp(this.nudgeTo,Math.min(1,n)),a=this.byId(this.nudgeIds[0]);if(a){const r=i.clone().sub(a.pos);r.y=0;for(const o of this.nudgeIds){const l=this.byId(o);l&&(l.pos.x+=r.x,l.pos.z+=r.z,l.pos.y=this.map.groundY(l.pos.x,l.pos.z),l.occupancy="nudge")}}this.nudgeT=Math.max(0,this.nudgeT-t)}this.nudgeT<=0&&this.finishNudge()}finishNudge(){const t=this.byId(this.nudgeIds[0]);if(!t)return;t.occupancy="ticklee";const e=this.joinList.get(t.id)??[];for(const n of e){const i=this.byId(n);i&&(i.occupancy="tickler",i.joinOn=t.id,i.targetId=t.id)}this.attachSockets(t),this.nudgeIds=[],this.nudgeT=0}startTickle(t,e,n=!1){if(this.startLocked(t,e)||t.team===e.team||!_e(t)||t.occupancy==="vanished"||t.occupancy==="ticklee"||e.occupancy==="vanished"||e.occupancy==="tapped"||this.pairCd.has(Ei(t.id,e.id)))return!1;const i=en(t,e),a=this.packsOn()&&as(this.fighters,t,e);if(!ss(t,e,i)&&!(a&&Ye(t,e))||this.risingBlocked(t,e))return!1;if(e.occupancy==="ticklee")return this.tryJoin(t,e,n);if(e.occupancy==="tickler"){if(e.isPlayer){const o=this.byId(e.joinOn);return o&&o.occupancy==="ticklee"&&t.team!==o.team?this.tryJoin(t,o,n):!1}return this.peel(t,e),!0}if(!a&&!i)return!1;const r=this.map.findNudge(e.pos,.95);return r?(this.beginDuel(e,t,r),!0):(this.pairCd.set(Ei(t.id,e.id),Eg),t.isPlayer&&this.say("No clear space — tickle cancelled"),na(90,.1,"sawtooth",.04),!1)}risingBlocked(t,e){return e.occupancy!=="free"?!1:!!(t.contactEdge.get(e.id)&&Ye(t,e))}beginDuel(t,e,n){this.joinList.set(t.id,[e.id]),this.firstTickler.set(t.id,e.id),e.targetId=t.id,e.joinOn=t.id;const i=[t,e];this.nudgeFrom.copy(t.pos),this.nudgeTo.copy(n),this.nudgeIds=i.map(a=>a.id),this.nudgeT=n.distanceTo(t.pos)<.08?.01:Ql;for(const a of i)a.occupancy="nudge";t.escape=Math.min(t.escape,0),t.flashT=0,this.nudgeT<=.02&&this.finishNudge(),LT(),this.say(`${e.name} tickles ${t.name}`),e.isPlayer&&this.input.rumble(90,.45,.25)}tryJoin(t,e,n=!1){if(this.startLocked(t,e)||e.occupancy!=="ticklee"||t.team===e.team)return!1;const i=this.joinList.get(e.id)??[];if(i.includes(t.id))return!0;if(i.length>=this.joinCap())return t.isPlayer&&!n&&this.say(this.isFfa()?"FFA — no packs, hunt another rival":"Join cap 6 — pile is full"),!1;const a=t.isPlayer?ua:0;if(!Ye(t,e)&&t.pos.distanceTo(e.pos)>Li+a)return!1;const r=this.packsOn()&&i.length>=1;if(i.length===0){if(!en(t,e)&&!r)return!1}else if(!r&&!en(t,e))return!1;const o=this.socketWorld(e,i.length);if(this.map.blockedAt(o.x,o.z,o.y,.55)){const l=this.map.findNudge(o,.55);if(!l)return!1;t.pos.copy(l)}else t.pos.copy(o);return i.push(t.id),this.joinList.set(e.id,i),t.occupancy="tickler",t.joinOn=e.id,t.targetId=e.id,t.isPlayer||(t.pileTimer=t.role==="sticky"?nc:ec),this.attachSockets(e),na(280,.06),!0}peel(t,e){const n=e.joinOn,i=this.byId(n);i&&this.dropTickler(i,e),(e.occupancy==="tickler"||e.occupancy==="free"||e.occupancy==="nudge")&&(e.occupancy="free"),this.startTickle(t,e)}dropTickler(t,e){const n=(this.joinList.get(t.id)??[]).filter(i=>i!==e.id);this.joinList.set(t.id,n),e.occupancy="free",e.joinOn=-1,e.targetId=-1,e.isPlayer||(e.pileTimer=Math.max(e.pileTimer,e.role==="sticky"?nc:ec)),n.length===0?(t.occupancy="free",this.joinList.delete(t.id)):this.attachSockets(t)}release(t){if(t.occupancy!=="tickler")return;const e=this.byId(t.joinOn);e&&this.dropTickler(e,t)}socketWorld(t,e){const n=[[0,.2,.85],[.75,.15,.15],[.6,.35,.2],[.2,-.55,.7],[0,.55,-.55],[.5,-.35,.25]][Math.min(e,5)],i=t.forward(),a=new T(i.z,0,-i.x);return t.pos.clone().add(i.multiplyScalar(n[2])).add(a.multiplyScalar(n[0])).add(new T(0,n[1],0))}attachSockets(t){(this.joinList.get(t.id)??[]).forEach((n,i)=>{const a=this.byId(n);if(!a)return;const r=this.socketWorld(t,i);a.pos.x=r.x,a.pos.z=r.z,a.pos.y=this.map.groundY(r.x,r.z);const o=t.pos.clone().sub(a.pos);a.yaw=Math.atan2(-o.x,-o.z)})}tapTickle(t){if(this.inNudgePile(t.id)||t.occupancy==="nudge"||t.occupancy!=="tickler"||t.tapCd>0)return;const e=this.byId(t.joinOn);if(!e||e.occupancy!=="ticklee")return;t.tapCd=Zl;const a=(this.joinList.get(e.id)??[]).indexOf(t.id)===0?1:.5,r=t.ticklePower()*a;e.stamina=Math.max(0,e.stamina-r),e.regenWait=Cg,IT(),e.stamina<=0&&this.tapOut(e)}tapEscape(t){this.inNudgePile(t.id)||t.occupancy==="nudge"||t.occupancy==="ticklee"&&(t.tapCd>0||(t.tapCd=Zl,t.escape=Math.min(100,t.escape+t.escapePower()),UT(),t.escape>=100&&this.vanish(t)))}vanish(t){const e=this.joinList.get(t.id)??[];for(const n of e){const i=this.byId(n);i&&(i.occupancy="free",i.joinOn=-1,i.targetId=-1)}this.joinList.delete(t.id),this.nudgeT=0,this.nudgeIds=[],t.occupancy="vanished",t.escape=0,t.vanishLeft=Sg,t.group.visible=!1;for(const[n]of[...this.pairCd.entries()])(n.startsWith(`${t.id}:`)||n.endsWith(`:${t.id}`))&&this.pairCd.delete(n);NT(),this.firstTickler.delete(t.id),t.isPlayer&&this.say("Vanished — map only, 20s"),this.checkWin()}tapOut(t){const e=this.joinList.get(t.id)??[],n=this.firstTickler.get(t.id)??e[0],i=n!=null?this.byId(n):void 0;if(i&&i.occupancy!=="tapped"&&i.occupancy!=="spectate"&&(this.award(i,3,"opener",t.name),!this.isFfa()))for(const a of e){if(a===i.id)continue;const r=this.byId(a);r&&this.award(r,1,"assist",t.name)}this.firstTickler.delete(t.id);for(const a of e){const r=this.byId(a);r&&(r.occupancy="free",r.joinOn=-1)}if(this.joinList.delete(t.id),this.arenaMode==="team-timed"){i&&i.team!==t.team&&(this.tapScore[i.team]+=1),ar(),this.say(`${t.name} tapped out`),this.respawn(t);return}if(this.arenaMode==="ffa-timed"){i&&this.ffaScore.set(i.id,(this.ffaScore.get(i.id)??0)+1),ar(),this.say(`${t.name} tapped out`),this.respawn(t);return}t.occupancy=t.isPlayer?"spectate":"tapped",t.stamina=0,t.group.visible=!0,t.body.rotation.x=.2,ar(),this.say(`${t.name} tapped out`),this.checkWin()}respawn(t){if(t.occupancy="free",t.joinOn=-1,t.targetId=-1,t.escape=0,t.vanishLeft=0,t.reappearIgnore=0,t.reappearFlash=0,t.stamina=t.maxStamina,t.spawnIgnore=Ag,t.body.rotation.x=0,t.group.visible=!0,this.isFfa()){let e=this.map.soloPads[t.team]??this.map.soloPads[0],n=e,i=-1;for(const a of this.map.soloPads){let r=1e9;for(const o of this.fighters)o.id!==t.id&&(r=Math.min(r,o.pos.distanceTo(a)));r>i&&(i=r,n=a)}e=n,this.place(t,e.clone()),t.yaw=dr(e,new T)}else{const e=(t.team===0?this.map.spawnA:this.map.spawnB).clone();e.x+=(Math.random()-.5)*1.6,e.z+=(Math.random()-.5)*1.6,this.place(t,e),t.yaw=t.team===0?-Math.PI/2:Math.PI/2}t.isPlayer&&(t.body.visible=!1)}award(t,e,n="opener",i=""){t.isPlayer&&(this.coinsEarned+=e,this.payouts.push({role:n,coins:e,victim:i}))}commitMatchRewards(){this.save.coins+=this.coinsEarned;const t=Math.max(15,this.coinsEarned*8+(this.result==="Victory"?40:10));this.save.xp=(this.save.xp??0)+t;let e=!1;for(;this.save.level<10;){const n=100+20*(this.save.level-1);if(this.save.xp<n)break;this.save.xp-=n,this.save.level+=1,this.save.unspent+=1,e=!0}return this.save.level>=10&&(this.save.xp=0),this.persistSave(),e}tickCombatState(t){for(const e of this.fighters){if(e.tapCd=Math.max(0,e.tapCd-t),this.countdown<=0){e.spawnIgnore=Math.max(0,e.spawnIgnore-t);const n=e.reappearIgnore>0;if(e.reappearIgnore=Math.max(0,e.reappearIgnore-t),n)for(const i of this.fighters)i.id!==e.id&&Ye(e,i)&&(e.contactEdge.set(i.id,!0),i.contactEdge.set(e.id,!0))}if(e.occupancy==="ticklee"){e.flashT+=t;const n=e.flashT%Rg<.18;e.rim.color.set(n?12868728:e.team===0?6211800:13935194),e.rim.intensity=n?5:2.2}else e.occupancy!=="vanished"&&(e.rim.color.set(e.team===0?6211800:13935194),e.rim.intensity=2.2);if(e.reappearFlash>0&&(e.reappearFlash=Math.max(0,e.reappearFlash-t),e.rim.color.set(15920870),e.rim.intensity=6.8),e.occupancy==="vanished"){if(e.vanishLeft=Math.max(0,e.vanishLeft-t),e.vanishLeft<=0){e.occupancy="free",e.group.visible=!0,e.reappearIgnore=Lg,e.reappearFlash=Ig,(e.isPlayer||this.player.pos.distanceTo(e.pos)<Dg)&&(DT(),this.say(e.isPlayer?"You reappeared":`${e.name} reappeared`));for(const i of this.fighters)i.id!==e.id&&Ye(i,e)&&(i.contactEdge.set(e.id,!0),e.contactEdge.set(i.id,!0))}}else e.occupancy==="free"&&(e.regenWait=Math.max(0,e.regenWait-t),e.regenWait<=0&&(e.stamina=Math.min(e.maxStamina,e.stamina+Pg*t)));for(const[n,i]of[...e.contactEdge.entries()]){if(this.countdown>0){e.contactEdge.delete(n);continue}if(!i){e.contactEdge.delete(n);continue}const a=this.byId(n);(!a||!Ye(e,a))&&e.contactEdge.delete(n)}}}updateVisibility(){const t=this.player,e=t.occupancy==="vanished";for(const n of this.fighters){if(n.occupancy==="vanished"){n.group.visible=!1;continue}if(e&&n.id!==t.id){n.group.visible=!1;continue}n.group.visible=!0,n.isPlayer?n.body.visible=t.occupancy==="ticklee"||t.occupancy==="tapped":n.portraitSprite&&(n.body.visible=!1)}}updateCamera(){const t=this.player,e=innerWidth/innerHeight;if(this.camera.aspect=e,this.camera.updateProjectionMatrix(),t.occupancy==="spectate"||t.occupancy==="tapped"){const i=this.fighters.find(a=>a.team===t.team&&_e(a)&&!a.isPlayer)??this.fighters.find(a=>_e(a));if(i){const a=i.forward().multiplyScalar(-4);this.camera.position.copy(i.pos).add(a).add(new T(0,2.2,0)),this.camera.lookAt(i.pos.clone().add(new T(0,1.1,0)))}return}if(t.occupancy==="ticklee"){const n=t.forward(),i=n.clone().multiplyScalar(-2.4);this.camera.position.copy(t.pos).add(i).add(new T(0,1.7,0));const a=t.pos.clone().add(new T(0,1.05-this.lookPitch*.8,0)).add(n.multiplyScalar(.3));this.camera.lookAt(a);return}this.camera.position.copy(t.pos).add(new T(0,mh,0)),this.camera.rotation.order="YXZ",this.camera.rotation.y=t.yaw,this.camera.rotation.x=t.pitch}updateFpTickle(t){const e=this.player,n=this.mode==="play"&&(e.occupancy==="tickler"||e.occupancy==="nudge"),i=this.hudEls["tickle-flash"];if(i&&i.classList.toggle("on",n),!this.fpArms)return;const a=n&&e.occupancy!=="spectate"&&e.occupancy!=="tapped"&&e.occupancy!=="ticklee";if(this.fpArms.visible=!!a,!a)return;this.fpArmT+=t;const r=Math.sin(this.fpArmT*28),o=Math.sin(this.fpArmT*36),l=this.fpArms.getObjectByName("fp-left"),c=this.fpArms.getObjectByName("fp-right");l&&(l.rotation.x=-.35+r*.22,l.rotation.z=.25+o*.12,l.position.y=-.28+Math.abs(r)*.04),c&&(c.rotation.x=-.28-r*.2,c.rotation.z=-.22-o*.1,c.position.y=-.3+Math.abs(o)*.035);const h=this.fpArms.getObjectByName("fp-weapon");h&&(h.rotation.z=r*.35,h.position.y=-.02+o*.02)}updateHud(t=.016){const e=this.player;this.updateFpTickle(t);const n=this.hudEls["stamina-fill"],i=this.hudEls["escape-fill"],r=(e.occupancy==="tickler"?this.byId(e.joinOn):(e.occupancy==="ticklee",e))??e;n.style.width=`${100*r.stamina/r.maxStamina}%`,i.style.width=`${r.escape}%`;const o=e.locomotionClip();if(this.hudEls["meta-left"].textContent=e.occupancy==="vanished"?`VANISH ${r.vanishLeft.toFixed(1)}s — map only`:`${r.name}  ·  ${r.occupancy}  ·  ${o}  ·  ${this.matchLoadout}`,this.hudEls["player-portrait"]){const b=this.hudEls["player-portrait"];b.dataset.clip=o,b.classList.toggle("running",o==="run"),b.classList.toggle("walking",o==="walk")}this.hudEls["top-left"].textContent=this.countdown>0?"Spawn lock — bots parked · tickle at 0 · mid-lane amber waits":this.arenaMode==="team-timed"?`Team Timed  ·  ${Sc(this.timedLeft)}`:this.arenaMode==="ffa-timed"?`FFA Timed  ·  ${Sc(this.timedLeft)}`:this.arenaMode==="ffa-quick"?"FFA Quick  ·  one life":"Team Quick  ·  one life";const l=this.aliveCount(),c=this.fighters.filter(b=>_e(b)).length,h=this.ffaScore.get(e.id)??0;this.hudEls["meta-right"].textContent=this.arenaMode==="team-timed"?`TAPS CYAN ${this.tapScore[0]}  ·  AMBER ${this.tapScore[1]}  ·  coins +${this.coinsEarned}`:this.arenaMode==="ffa-timed"?`YOUR TAPS ${h}  ·  ${c} up  ·  coins +${this.coinsEarned}`:this.isFfa()?`${c} standing  ·  coins +${this.coinsEarned}`:`CYAN ${l[0]}  ·  AMBER ${l[1]}  ·  coins +${this.coinsEarned}`;let u="";if(e.occupancy==="free")for(const b of this.fighters){if(b.team===e.team||!_e(b)||b.occupancy==="vanished")continue;const M=en(e,b);if(!ss(e,b,M)&&e.pos.distanceTo(b.pos)>Li+ua)continue;const F=Math.max(e.reappearIgnore,b.reappearIgnore),A=Math.max(e.spawnIgnore,b.spawnIgnore);if(F>0){u=`REAPPEAR LOCK  ·  ${F.toFixed(1)}s`;break}if(A>0){u=`SPAWN IGNORE  ·  ${A.toFixed(1)}s`;break}if(this.startLocked(e,b)||this.risingBlocked(e,b)){u="BREAK CONTACT — then rear/pack starts";break}if(this.packsOn()&&as(this.fighters,e,b)){u=this.countdown>0?"PACK 2+ — tickle at 0":"PACK 2+ — tickle starts";break}if(M){u=this.countdown>0?"BEHIND — tickle at 0":"BEHIND — tickle starts";break}}this.hudEls["top-right"].textContent=this.countdown>0?u?`SPAWN LOCK  ·  ${u}`:this.input.padActive?"SPAWN LOCK  ·  B / View to leave":"SPAWN LOCK  ·  Leave countdown":e.occupancy==="vanished"?"VANISH — map only · clock is yours":e.occupancy==="ticklee"?this.input.padActive?"TAP B / LT  ESCAPE":"TAP ESCAPE":e.occupancy==="tickler"?this.input.padActive?"TAP A / RT  TICKLE":"TAP TICKLE":u||(this.input.padActive?"FP  ·  behind auto-tickle  A tickle  B escape  Y release":"FP  ·  behind auto-tickle  T tickle  E escape"),this.updateRadar(),this.updateRearCue();const d=e.occupancy==="vanished";this.hudEls.countdown.classList.toggle("vanish-clock",d),d?(this.hudEls.countdown.style.display="block",this.hudEls.countdown.textContent=String(Math.ceil(e.vanishLeft))):(this.hudEls.countdown.style.display=this.countdown>0?"block":"none",this.hudEls.countdown.textContent=this.countdown>0?String(Math.ceil(this.countdown)):""),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display=this.countdown>0?"block":"none");const f=this.hudEls.face,g=this.hudEls["face-still"],_=e.occupancy==="ticklee"||e.occupancy==="tickler"&&r.occupancy==="ticklee";if(f.style.display=_?"block":"none",g){const b=r.keyedPortrait||r.portraitUrl;if(_&&b){g.src=b,g.style.display="block";const M=f.querySelector(".head");M&&(M.style.display="none")}else{g.style.display="none";const M=f.querySelector(".head");M&&(M.style.display="block")}}const m=this.hudEls["btn-tickle"],p=this.hudEls["btn-escape"];m.disabled=e.occupancy!=="tickler",p.disabled=e.occupancy!=="ticklee";const E=this.input.padActive;if(m.textContent=E?"Tickle  A":"Tickle",p.textContent=E?"Escape  B":"Escape",this.hudEls["player-portrait"]){const b=e.keyedPortrait||e.portraitUrl,M=this.hudEls["player-portrait"];b?(M.src=b,M.style.display="block"):M.style.display="none"}this.hudEls.crosshair&&(this.hudEls.crosshair.style.display=e.occupancy==="ticklee"||e.occupancy==="spectate"||e.occupancy==="tapped"?"none":"block"),this.toastT-=t||.016,this.hudEls.toast.style.display=this.toastT>0?"block":"none",this.hudEls.toast.textContent=this.toast}updateRearCue(){const t=this.player;if(this.mode!=="play"||t.occupancy!=="free"||!this.map.group.visible){this.rearCue.visible=!1;return}const e=Li+ua;let n=null,i=!1,a=null,r=5.2;for(const h of this.fighters){if(h.team===t.team||!_e(h)||h.occupancy==="vanished")continue;const u=t.pos.distanceTo(h.pos);if(u<r&&(r=u,a=h),!(u>e)){if(this.packsOn()&&as(this.fighters,t,h)){n=h,i=!0;break}en(t,h)&&(n=h)}}const o=n??a;if(!o){this.rearCue.visible=!1;return}const l=i?o.pos:o.pos.clone().add(o.forward().multiplyScalar(-.82));this.rearCue.position.set(l.x,o.pos.y+.05,l.z);const c=this.rearCue.material;c.color.set(i?6211800:this.isFfa()?12868728:13935194),c.opacity=n?this.countdown>0?.7:.92:.45,this.rearCue.visible=!0}updateRadar(){const t=this.hudEls.radar;if(!t)return;const e=this.player;if(e.occupancy==="ticklee"||e.occupancy==="spectate"||e.occupancy==="tapped"||e.occupancy==="vanished"){t.style.display="none";return}t.style.display="flex";let n=null,i=1e9;const a=this.fighters.find(u=>u.bait&&_e(u)&&u.occupancy!=="vanished");for(const u of this.fighters){if(u.team===e.team||!_e(u)||u.occupancy==="vanished")continue;const d=e.pos.distanceToSquared(u.pos);d<i&&(i=d,n=u)}a&&e.pos.distanceTo(a.pos)<18&&(n=a,i=e.pos.distanceToSquared(a.pos));const r=this.overlay.querySelector("#radar-copy"),o=t.querySelector(".needle");if(!n){r&&(r.textContent=this.isFfa()?"No rival up":"No amber up");return}const l=Math.sqrt(i),c=n.pos.clone().sub(e.pos),h=Math.atan2(-c.x,-c.z)-e.yaw;if(o&&(o.style.transform=`rotate(${h*180/Math.PI}deg)`),r){const u=this.isFfa()?"rival":"amber";r.textContent=l<1.4?this.packsOn()&&as(this.fighters,e,n)?`${n.name}  ·  pack 2+ · tickle starts`:`${n.name}  ·  behind · tickle starts`:n.bait?`${n.name}  ·  mid-lane bait  ·  ${l.toFixed(0)}m amber`:`${n.name}  ·  ${l.toFixed(0)}m ${u}`}}aliveCount(){const t=this.fighters.filter(n=>n.team===0&&_e(n)).length,e=this.fighters.filter(n=>n.team===1&&_e(n)).length;return[t,e]}checkWin(){var r,o,l;if(this.mode!=="play")return;let t="",e=!1,n="";if(this.arenaMode==="team-timed"){if(this.timedLeft>0)return;const[c,h]=this.tapScore;c===h?(t="DRAW",e=!1,n=`Timer ended even at ${c}–${h} tap-outs.`):c>h?(t="CYAN",e=this.player.team===0,n=`CYAN ${c} tap-outs to AMBER ${h}.`):(t="AMBER",e=this.player.team===1,n=`AMBER ${h} tap-outs to CYAN ${c}.`)}else if(this.arenaMode==="ffa-timed"){if(this.timedLeft>0)return;let c=0;for(const d of this.fighters)c=Math.max(c,this.ffaScore.get(d.id)??0);const h=this.fighters.filter(d=>(this.ffaScore.get(d.id)??0)===c),u=this.ffaScore.get(this.player.id)??0;c===0||h.length!==1?(t="DRAW",e=!1,n=`FFA timer ended. Top taps ${c}. Yours ${u}.`):(e=h[0].isPlayer,t=e?"ELARA":h[0].name,n=`FFA Timed · ${t} leads with ${c} taps · you ${u}.`)}else if(this.isFfa()){const c=this.fighters.filter(h=>_e(h));if(c.length>1)return;e=!!((r=c[0])!=null&&r.isPlayer),t=e?"ELARA":((o=c[0])==null?void 0:o.name)??"RIVAL",n=`${t} last standing. FFA Quick.`}else{const[c,h]=this.aliveCount();if(c>0&&h>0)return;t=c>0?"CYAN":"AMBER",e=this.player.team===0&&c>0||this.player.team===1&&h>0,n=`${t} still has fighters up. Last team standing.`}for(const c of this.fighters)c.occupancy==="vanished"&&(c.occupancy="free",c.vanishLeft=0);this.mode="results",this.map.group.visible=!1,this.plaza.group.visible=!0,this.scene.fog=new Qn(1709588,32,80),this.result=t==="DRAW"?"Draw":e?"Victory":"Defeat",this.hudEls.top&&(this.hudEls.top.style.display="none"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="none"),this.hudEls.radar&&(this.hudEls.radar.style.display="none"),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display="none"),this.rearCue.visible=!1;const i=this.commitMatchRewards();this.result==="Draw"?na(220,.15):e?FT():kT(),this.hudEls.results.style.display="flex",this.hudEls.hud.style.display="none";const a=this.overlay.querySelector("#result-copy");if(a){const c=this.save.level<10?100+20*(this.save.level-1):0,h=i?`Level ${this.save.level}  ·  +1 skill point (${this.save.unspent} unspent)  ·  XP ${this.save.xp}/${c||"—"}`:this.save.level>=10?`Level 10 cap  ·  ${this.save.unspent} unspent`:`Level ${this.save.level}  ·  XP ${this.save.xp}/${c}  ·  ${this.save.unspent} unspent`;a.innerHTML=`<h1>${this.result}</h1>
        <p class="sub">${n}</p>
        <ul class="payouts">${this.payoutItems()}</ul>
        <p class="statline">${h}</p>
        <p class="hint">Match loadout locked as ${this.matchLoadout}. Spend new points in Home. Return writes you back to the plaza.</p>`}(l=document.exitPointerLock)==null||l.call(document)}payoutItems(){if(this.payouts.length===0)return`<li>0 coins this match. Bank ${this.save.coins}.</li><li>First tickler +3 from the tick-start opener. Team assists +1.</li>`;const t=this.payouts.map(e=>e.role==="opener"?`<li>+${e.coins} first tickler vs ${e.victim}</li>`:`<li>+${e.coins} assist vs ${e.victim}</li>`);return t.push(`<li>Bank ${this.save.coins} coins.</li>`),t.join("")}payoutLines(){return this.payouts.length===0?`0 coins this match. Bank ${this.save.coins}. First tickler +3, assists +1 (team).`:`${this.payouts.map(e=>e.role==="opener"?`+${e.coins} first tickler vs ${e.victim}`:`+${e.coins} assist vs ${e.victim}`).join(" · ")}. Bank ${this.save.coins}.`}syncPadChrome(){this.overlay.classList.toggle("pad-live",this.input.padActive);const t=this.hudEls["pad-status"];t&&(t.textContent=this.input.padActive?`${this.input.padLabel} connected — A or Menu to play`:"Xbox first: connect a controller and press any button.",t.classList.toggle("on",this.input.padActive));const e=this.hudEls["again-hint"];e&&(e.textContent=this.input.padActive?"B, A, or Menu — return to plaza":"Click Return, or press B / Menu on a pad."),this.mode!=="play"&&this.hudEls.toast&&(this.toastT>0&&(this.toastT-=.016),this.hudEls.toast.style.display=this.toastT>0?"block":"none",this.hudEls.toast.textContent=this.toast)}say(t){this.toast=t,this.toastT=2.2}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}}function ZT(){try{const s=localStorage.getItem(bh);return nr(s?JSON.parse(s):null)}catch{return nr(null)}}function QT(s){localStorage.setItem(bh,JSON.stringify(s))}function Sc(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}function dr(s,t){const e=t.x-s.x,n=t.z-s.z;return e*e+n*n<1e-6?0:Math.atan2(-e,-n)}function t2(){const s=new Jt;s.name="fp-arms";const t=new Ee({color:12886160,roughness:.55,metalness:0}),e=new Ee({color:3812920,roughness:.75,metalness:0}),n=(r,o)=>{const l=new Jt;l.name=r;const c=new St(new kn(.045,.22,3,6),t);c.rotation.x=Math.PI/2,c.position.set(0,0,-.14);const h=new St(new kn(.038,.2,3,6),t);h.rotation.x=Math.PI/2,h.position.set(0,-.02,-.36);const u=new St(new Ss(.055,8,6),t);u.position.set(0,-.02,-.5);const d=new St(new kn(.05,.08,2,6),e);return d.rotation.x=Math.PI/2,d.position.set(0,.02,-.06),l.add(c,h,u,d),l.position.set(o*.28,-.32,-.45),l.rotation.x=-.3,l.rotation.z=-o*.2,l};s.add(n("fp-left",-1)),s.add(n("fp-right",1));const i=new Jt;i.name="fp-weapon";const a=new St(new te(.1,.04,.12),new Ee({color:6965818,roughness:.85,metalness:0}));return a.position.set(.28,-.34,-.52),i.add(a),s.add(i),s}function e2(){return`
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
  `}const Eh=document.querySelector("#app");if(!Eh)throw new Error("#app missing");new JT(Eh);
