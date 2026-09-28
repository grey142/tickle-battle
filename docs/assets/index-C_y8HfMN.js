var qh=Object.defineProperty;var Kh=(s,t,e)=>t in s?qh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var C=(s,t,e)=>Kh(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="170",Yh=0,nl=1,Jh=2,Vc=1,Zh=2,yn=3,Wn=0,Ue=1,Ve=2,Vn=0,Ui=1,il=2,sl=3,al=4,Qh=5,si=100,tu=101,eu=102,nu=103,iu=104,su=200,au=201,ru=202,ou=203,Er=204,Tr=205,lu=206,cu=207,hu=208,uu=209,du=210,fu=211,pu=212,mu=213,gu=214,Ar=0,Rr=1,Cr=2,Hi=3,Lr=4,Pr=5,Ur=6,Dr=7,$c=0,_u=1,vu=2,$n=0,yu=1,bu=2,xu=3,Mu=4,Su=5,wu=6,Eu=7,jc=300,Vi=301,$i=302,kr=303,Ir=304,Aa=306,Fr=1e3,bn=1001,Nr=1002,Ze=1003,Tu=1004,Ds=1005,ln=1006,Ua=1007,oi=1008,Tn=1009,Gc=1010,Wc=1011,ws=1012,Eo=1013,li=1014,xn=1015,Rs=1016,To=1017,Ao=1018,ji=1020,Xc=35902,qc=1021,Kc=1022,Je=1023,Yc=1024,Jc=1025,Di=1026,Gi=1027,Zc=1028,Ro=1029,Qc=1030,Co=1031,Lo=1033,ua=33776,da=33777,fa=33778,pa=33779,Br=35840,Or=35841,zr=35842,Hr=35843,Vr=36196,$r=37492,jr=37496,Gr=37808,Wr=37809,Xr=37810,qr=37811,Kr=37812,Yr=37813,Jr=37814,Zr=37815,Qr=37816,to=37817,eo=37818,no=37819,io=37820,so=37821,ma=36492,ao=36494,ro=36495,th=36283,oo=36284,lo=36285,co=36286,Au=3200,Ru=3201,eh=0,Cu=1,zn="",we="srgb",Xi="srgb-linear",Ra="linear",Zt="srgb",di=7680,rl=519,Lu=512,Pu=513,Uu=514,nh=515,Du=516,ku=517,Iu=518,Fu=519,ho=35044,ol="300 es",Mn=2e3,Ma=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const fs=Math.PI/180,Es=180/Math.PI;function wn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[s&255]+Me[s>>8&255]+Me[s>>16&255]+Me[s>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function Po(s,t){return(s%t+t)%t}function Nu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Bu(s,t,e){return s!==t?(e-s)/(t-s):0}function ps(s,t,e){return(1-e)*s+e*t}function Ou(s,t,e,n){return ps(s,t,1-Math.exp(-e*n))}function zu(s,t=1){return t-Math.abs(Po(s,t*2)-t)}function Hu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Vu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function $u(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ju(s,t){return s+Math.random()*(t-s)}function Gu(s){return s*(.5-Math.random())}function Wu(s){s!==void 0&&(ll=s);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xu(s){return s*fs}function qu(s){return s*Es}function Ku(s){return(s&s-1)===0&&s!==0}function Yu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ju(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zu(s,t,e,n,i){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),u=a((t-n)/2),d=r((t-n)/2),p=a((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const cn={DEG2RAD:fs,RAD2DEG:Es,generateUUID:wn,clamp:ve,euclideanModulo:Po,mapLinear:Nu,inverseLerp:Bu,lerp:ps,damp:Ou,pingpong:zu,smoothstep:Hu,smootherstep:Vu,randInt:$u,randFloat:ju,randFloatSpread:Gu,seededRandom:Wu,degToRad:Xu,radToDeg:qu,isPowerOfTwo:Ku,ceilPowerOfTwo:Yu,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:Zu,normalize:Jt,denormalize:Ye};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,i,a,r,o,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],M=i[1],E=i[4],y=i[7],U=i[2],T=i[5],S=i[8];return a[0]=r*_+o*M+l*U,a[3]=r*m+o*E+l*T,a[6]=r*f+o*y+l*S,a[1]=c*_+h*M+u*U,a[4]=c*m+h*E+u*T,a[7]=c*f+h*y+u*S,a[2]=d*_+p*M+g*U,a[5]=d*m+p*E+g*T,a[8]=d*f+p*y+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*a,p=c*a-r*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*r)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*a-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Dt;function ih(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qu(){const s=Ts("canvas");return s.style.display="block",s}const cl={};function us(s){s in cl||(cl[s]=!0,console.warn(s))}function td(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function ed(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Gt={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Ra:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const hl=[.64,.33,.3,.6,.15,.06],ul=[.2126,.7152,.0722],dl=[.3127,.329],fl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt.define({[Xi]:{primaries:hl,whitePoint:dl,transfer:Ra,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:ul,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:hl,whitePoint:dl,transfer:Zt,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:ul,outputColorSpaceConfig:{drawingBufferColorSpace:we}}});let fi;class id{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=Ts("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=En(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sd=0;class sh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ka(i[r].image)):a.push(ka(i[r]))}else a=ka(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?id.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class Te extends qi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=bn,i=bn,a=ln,r=oi,o=Je,l=Tn,c=Te.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=wn(),this.name="",this.source=new sh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=jc;Te.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(p+1)/2,U=(f+1)/2,T=(h+d)/4,S=(u+_)/4,P=(g+m)/4;return E>y&&E>U?E<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(E),i=T/n,a=S/n):y>U?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=T/i,a=P/i):U<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(U),n=S/a,i=P/a),this.set(n,i,a,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rd extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ah extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class od extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,M=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const U=Math.sqrt(E),T=Math.atan2(U,f*M);m=Math.sin(m*T)/U,o=Math.sin(o*T)/U}const y=o*M;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=a[r],d=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(a/2),d=l(n/2),p=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(a-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(r-i)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-a*i),u=2*(a*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=i+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new R,ml=new Cs;class Ls{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,We):We.fromBufferAttribute(a,r),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Is.subVectors(this.max,ts),pi.subVectors(t.a,ts),mi.subVectors(t.b,ts),gi.subVectors(t.c,ts),Cn.subVectors(mi,pi),Ln.subVectors(gi,mi),Kn.subVectors(pi,gi);let e=[0,-Cn.z,Cn.y,0,-Ln.z,Ln.y,0,-Kn.z,Kn.y,Cn.z,0,-Cn.x,Ln.z,0,-Ln.x,Kn.z,0,-Kn.x,-Cn.y,Cn.x,0,-Ln.y,Ln.x,0,-Kn.y,Kn.x,0];return!Fa(e,pi,mi,gi,Is)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,pi,mi,gi,Is))?!1:(Fs.crossVectors(Cn,Ln),e=[Fs.x,Fs.y,Fs.z],Fa(e,pi,mi,gi,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new R,new R,new R,new R,new R,new R,new R,new R],We=new R,ks=new Ls,pi=new R,mi=new R,gi=new R,Cn=new R,Ln=new R,Kn=new R,ts=new R,Is=new R,Fs=new R,Yn=new R;function Fa(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Yn.fromArray(s,a);const o=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ld=new Ls,es=new R,Na=new R;class Uo{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);const e=es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(es,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(Na)),this.expandByPoint(es.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new R,Ba=new R,Ns=new R,Pn=new R,Oa=new R,Bs=new R,za=new R;class rh{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ba.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Ba);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Ns),o=Pn.dot(this.direction),l=-Pn.dot(Ns),c=Pn.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ba).addScaledVector(Ns,d),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,a){Oa.subVectors(e,t),Bs.subVectors(n,t),za.crossVectors(Oa,Bs);let r=this.direction.dot(za),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(Bs.crossVectors(Pn,Bs));if(l<0)return null;const c=o*this.direction.dot(Oa.cross(Pn));if(c<0||l+c>r)return null;const h=-o*Pn.dot(za);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,a,r,o,l,c,h,u,d,p,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,a,r,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_i.setFromMatrixColumn(t,0).length(),a=1/_i.setFromMatrixColumn(t,1).length(),r=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,p=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-r*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=_-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,hd)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Un.crossVectors(n,Ie),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Un.crossVectors(n,Ie)),Un.normalize(),Os.crossVectors(Ie,Un),i[0]=Un.x,i[4]=Os.x,i[8]=Ie.x,i[1]=Un.y,i[5]=Os.y,i[9]=Ie.y,i[2]=Un.z,i[6]=Os.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],E=n[7],y=n[11],U=n[15],T=i[0],S=i[4],P=i[8],w=i[12],b=i[1],L=i[5],z=i[9],N=i[13],$=i[2],q=i[6],O=i[10],Z=i[14],j=i[3],nt=i[7],ht=i[11],St=i[15];return a[0]=r*T+o*b+l*$+c*j,a[4]=r*S+o*L+l*q+c*nt,a[8]=r*P+o*z+l*O+c*ht,a[12]=r*w+o*N+l*Z+c*St,a[1]=h*T+u*b+d*$+p*j,a[5]=h*S+u*L+d*q+p*nt,a[9]=h*P+u*z+d*O+p*ht,a[13]=h*w+u*N+d*Z+p*St,a[2]=g*T+_*b+m*$+f*j,a[6]=g*S+_*L+m*q+f*nt,a[10]=g*P+_*z+m*O+f*ht,a[14]=g*w+_*N+m*Z+f*St,a[3]=M*T+E*b+y*$+U*j,a[7]=M*S+E*L+y*q+U*nt,a[11]=M*P+E*z+y*O+U*ht,a[15]=M*w+E*N+y*Z+U*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+a*l*u-i*c*u-a*o*d+n*c*d+i*o*p-n*l*p)+_*(+e*l*p-e*c*d+a*r*d-i*r*p+i*c*h-a*l*h)+m*(+e*c*u-e*o*p-a*r*u+n*r*p+a*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+r*m*p+h*l*f-r*d*f,y=h*_*c-g*u*c+g*o*p-r*_*p-h*o*f+r*u*f,U=g*u*l-h*_*l-g*o*d+r*_*d+h*o*m-r*u*m,T=e*M+n*E+i*y+a*U;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return t[0]=M*S,t[1]=(_*d*a-u*m*a-_*i*p+n*m*p+u*i*f-n*d*f)*S,t[2]=(o*m*a-_*l*a+_*i*c-n*m*c-o*i*f+n*l*f)*S,t[3]=(u*l*a-o*d*a-u*i*c+n*d*c+o*i*p-n*l*p)*S,t[4]=E*S,t[5]=(h*m*a-g*d*a+g*i*p-e*m*p-h*i*f+e*d*f)*S,t[6]=(g*l*a-r*m*a-g*i*c+e*m*c+r*i*f-e*l*f)*S,t[7]=(r*d*a-h*l*a+h*i*c-e*d*c-r*i*p+e*l*p)*S,t[8]=y*S,t[9]=(g*u*a-h*_*a-g*n*p+e*_*p+h*n*f-e*u*f)*S,t[10]=(r*_*a-g*o*a+g*n*c-e*_*c-r*n*f+e*o*f)*S,t[11]=(h*o*a-r*u*a-h*n*c+e*u*c+r*n*p-e*o*p)*S,t[12]=U*S,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*S,t[14]=(g*o*i-r*_*i-g*n*l+e*_*l+r*n*m-e*o*m)*S,t[15]=(r*u*i-h*o*i+h*n*l-e*u*l-r*n*d+e*o*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,d=a*c,p=a*h,g=a*u,_=r*h,m=r*u,f=o*u,M=l*c,E=l*h,y=l*u,U=n.x,T=n.y,S=n.z;return i[0]=(1-(_+f))*U,i[1]=(p+y)*U,i[2]=(g-E)*U,i[3]=0,i[4]=(p-y)*T,i[5]=(1-(d+f))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(g+E)*S,i[9]=(m-M)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=_i.set(i[0],i[1],i[2]).length();const r=_i.set(i[4],i[5],i[6]).length(),o=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const c=1/a,h=1/r,u=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=u,Xe.elements[9]*=u,Xe.elements[10]*=u,e.setFromRotationMatrix(Xe),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=Mn){const l=this.elements,c=2*a/(e-t),h=2*a/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===Mn)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Ma)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=Mn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-a),d=(e+t)*c,p=(n+i)*h;let g,_;if(o===Mn)g=(r+a)*u,_=-2*u;else if(o===Ma)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new R,Xe=new se,cd=new R(0,0,0),hd=new R(1,1,1),Un=new R,Os=new R,Ie=new R,gl=new se,_l=new Cs;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Do{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ud=0;const vl=new R,vi=new Cs,gn=new se,zs=new R,ns=new R,dd=new R,fd=new Cs,yl=new R(1,0,0),bl=new R(0,1,0),xl=new R(0,0,1),Ml={type:"added"},pd={type:"removed"},yi={type:"childadded",child:null},Ha={type:"childremoved",child:null};class ye extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new R,e=new hn,n=new Cs,i=new R(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Dt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(bl,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return vl.copy(t).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(bl,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ns,zs,this.up):gn.lookAt(zs,ns,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(gn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pd),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new R(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new R,_n=new R,Va=new R,vn=new R,bi=new R,xi=new R,Sl=new R,$a=new R,ja=new R,Ga=new R,Wa=new te,Xa=new te,qa=new te;class $e{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qe.subVectors(t,e),i.cross(qe);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){qe.subVectors(i,e),_n.subVectors(n,e),Va.subVectors(t,e);const r=qe.dot(qe),o=qe.dot(_n),l=qe.dot(Va),c=_n.dot(_n),h=_n.dot(Va),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vn.x),l.addScaledVector(r,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(t,e,n,i,a,r){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Wa,a.x),r.addScaledVector(Xa,a.y),r.addScaledVector(qa,a.z),r}static isFrontFacing(t,e,n,i){return qe.subVectors(n,e),_n.subVectors(t,e),qe.cross(_n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),qe.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;bi.subVectors(i,n),xi.subVectors(a,n),$a.subVectors(t,n);const l=bi.dot($a),c=xi.dot($a);if(l<=0&&c<=0)return e.copy(n);ja.subVectors(t,i);const h=bi.dot(ja),u=xi.dot(ja);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(bi,r);Ga.subVectors(t,a);const p=bi.dot(Ga),g=xi.dot(Ga);if(g>=0&&p<=g)return e.copy(a);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(xi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Sl.subVectors(a,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Sl,o);const f=1/(m+_+d);return r=_*f,o=d*f,e.copy(n).addScaledVector(bi,r).addScaledVector(xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Ka(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Gt.workingColorSpace){if(t=Po(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Ka(r,a,t+1/3),this.g=Ka(r,a,t),this.b=Ka(r,a,t-1/3)}return Gt.toWorkingColorSpace(this,i),this}setStyle(t,e=we){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Gt.fromWorkingColorSpace(Se.copy(this),t),Math.round(ve(Se.r*255,0,255))*65536+Math.round(ve(Se.g*255,0,255))*256+Math.round(ve(Se.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,i=Se.g,a=Se.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-a)/u+(i<a?6:0);break;case i:l=(a-n)/u+2;break;case a:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=we){Gt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,i=Se.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Hs);const n=ps(Dn.h,Hs.h,e),i=ps(Dn.s,Hs.s,e),a=ps(Dn.l,Hs.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Ot;Ot.NAMES=oh;let md=0;class Ki extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=wn(),this.name="",this.blending=Ui,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Tr,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hi extends Ki{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new R,Vs=new ct;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ho,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ye(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ye(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ye(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ye(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),a=Jt(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ho&&(t.usage=this.usage),t}}class lh extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ch extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gd=0;const ze=new se,Ya=new ye,Mi=new R,Fe=new Ls,is=new Ls,ge=new R;class De extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ih(t)?ch:lh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Dt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,i=e.count;n<i;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Fe.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];is.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Fe.min,is.min),Fe.expandByPoint(ge),ge.addVectors(Fe.max,is.max),Fe.expandByPoint(ge)):(Fe.expandByPoint(is.min),Fe.expandByPoint(is.max))}Fe.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)ge.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(t,c),ge.add(Mi)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new R,l[P]=new R;const c=new R,h=new R,u=new R,d=new ct,p=new ct,g=new ct,_=new R,m=new R;function f(P,w,b){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(a,P),p.fromBufferAttribute(a,w),g.fromBufferAttribute(a,b),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(_),o[w].add(_),o[b].add(_),l[P].add(m),l[w].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,w=M.length;P<w;++P){const b=M[P],L=b.start,z=b.count;for(let N=L,$=L+z;N<$;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const E=new R,y=new R,U=new R,T=new R;function S(P){U.fromBufferAttribute(i,P),T.copy(U);const w=o[P];E.copy(w),E.sub(U.multiplyScalar(U.dot(w))).normalize(),y.crossVectors(T,w);const L=y.dot(l[P])<0?-1:1;r.setXYZW(P,E.x,E.y,E.z,L)}for(let P=0,w=M.length;P<w;++P){const b=M[P],L=b.start,z=b.count;for(let N=L,$=L+z;N<$;N+=3)S(t.getX(N+0)),S(t.getX(N+1)),S(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,a=new R,r=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new se,Jn=new rh,$s=new Uo,El=new R,js=new R,Gs=new R,Ws=new R,Ja=new R,Xs=new R,Tl=new R,qs=new R;class bt extends ye{constructor(t=new De,e=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){Xs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Ja.fromBufferAttribute(u,t),r?Xs.addScaledVector(Ja,h):Xs.addScaledVector(Ja.sub(e),h))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(a),Jn.copy(t.ray).recast(t.near),!($s.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere($s,El)===null||Jn.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(wl.copy(a).invert(),Jn.copy(t.ray).applyMatrix4(wl),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=r[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,U=E;y<U;y+=3){const T=o.getX(y),S=o.getX(y+1),P=o.getX(y+2);i=Ks(this,f,t,n,c,h,u,T,S,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);i=Ks(this,r,t,n,c,h,u,M,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=r[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,U=E;y<U;y+=3){const T=y,S=y+1,P=y+2;i=Ks(this,f,t,n,c,h,u,T,S,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,E=m+1,y=m+2;i=Ks(this,r,t,n,c,h,u,M,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function _d(s,t,e,n,i,a,r,o){let l;if(t.side===Ue?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===Wn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:s}}function Ks(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,js),s.getVertexPosition(l,Gs),s.getVertexPosition(c,Ws);const h=_d(s,t,e,n,js,Gs,Ws,Tl);if(h){const u=new R;$e.getBarycoord(Tl,js,Gs,Ws,u),i&&(h.uv=$e.getInterpolatedAttribute(i,o,l,c,u,new ct)),a&&(h.uv1=$e.getInterpolatedAttribute(a,o,l,c,u,new ct)),r&&(h.normal=$e.getInterpolatedAttribute(r,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new R,materialIndex:0};$e.getNormal(js,Gs,Ws,d.normal),h.face=d,h.barycoord=u}return h}class Xt extends De{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,m,f,M,E,y,U,T,S,P,w){const b=y/S,L=U/P,z=y/2,N=U/2,$=T/2,q=S+1,O=P+1;let Z=0,j=0;const nt=new R;for(let ht=0;ht<O;ht++){const St=ht*L-N;for(let Ft=0;Ft<q;Ft++){const ee=Ft*b-z;nt[_]=ee*M,nt[m]=St*E,nt[f]=$,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[f]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Ft/S),u.push(1-ht/P),Z+=1}}for(let ht=0;ht<P;ht++)for(let St=0;St<S;St++){const Ft=d+St+q*ht,ee=d+St+q*(ht+1),X=d+(St+1)+q*(ht+1),et=d+(St+1)+q*ht;l.push(Ft,ee,et),l.push(ee,X,et),j+=6}o.addGroup(p,j,w),p+=j,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const n=Wi(s[e]);for(const i in n)t[i]=n[i]}return t}function vd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function hh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const yd={clone:Wi,merge:Re};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Ki{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new R,Al=new ct,Rl=new ct;class Ne extends uh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Rl),e.subVectors(Rl,Al)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Si=-90,wi=1;class Md extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ne(Si,wi,t,e);i.layers=this.layers,this.add(i);const a=new Ne(Si,wi,t,e);a.layers=this.layers,this.add(a);const r=new Ne(Si,wi,t,e);r.layers=this.layers,this.add(r);const o=new Ne(Si,wi,t,e);o.layers=this.layers,this.add(o);const l=new Ne(Si,wi,t,e);l.layers=this.layers,this.add(l);const c=new Ne(Si,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dh extends Te{constructor(t,e,n,i,a,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sd extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new dh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xt(5,5,5),a=new Xn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Vn});a.uniforms.tEquirect.value=e;const r=new bt(i,a),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=ln),new Md(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const Za=new R,wd=new R,Ed=new Dt;class ni{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Za.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ed.getNormalMatrix(t),i=this.coplanarPoint(Za).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Uo,Ys=new R;class ko{constructor(t=new ni,e=new ni,n=new ni,i=new ni,a=new ni,r=new ni){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],M=i[13],E=i[14],y=i[15];if(n[0].setComponents(l-a,d-c,m-p,y-f).normalize(),n[1].setComponents(l+a,d+c,m+p,y+f).normalize(),n[2].setComponents(l+r,d+h,m+g,y+M).normalize(),n[3].setComponents(l-r,d-h,m-g,y-M).normalize(),n[4].setComponents(l-o,d-u,m-_,y-E).normalize(),e===Mn)n[5].setComponents(l+o,d+u,m+_,y+E).normalize();else if(e===Ma)n[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ys.x=i.normal.x>0?t.max.x:t.min.x,Ys.y=i.normal.y>0?t.max.y:t.min.y,Ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Td(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}class Yi extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*d-r;for(let E=0;E<c;E++){const y=E*u-a;g.push(y,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const E=M+c*f,y=M+c*(f+1),U=M+1+c*(f+1),T=M+1+c*f;p.push(E,y,T),p.push(y,U,T)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
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
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Hd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
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
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
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
#endif`,Tf=`struct PhysicalMaterial {
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
}`,Af=`
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dp=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`#include <common>
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
}`,kp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Fp=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,Kp=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,Jp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,Qp=`#define TOON
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
}`,tm=`#define TOON
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
}`,em=`uniform float size;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:Ad,alphahash_pars_fragment:Rd,alphamap_fragment:Cd,alphamap_pars_fragment:Ld,alphatest_fragment:Pd,alphatest_pars_fragment:Ud,aomap_fragment:Dd,aomap_pars_fragment:kd,batching_pars_vertex:Id,batching_vertex:Fd,begin_vertex:Nd,beginnormal_vertex:Bd,bsdfs:Od,iridescence_fragment:zd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:qd,color_vertex:Kd,common:Yd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Qd,displacementmap_vertex:tf,emissivemap_fragment:ef,emissivemap_pars_fragment:nf,colorspace_fragment:sf,colorspace_pars_fragment:af,envmap_fragment:rf,envmap_common_pars_fragment:of,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:bf,envmap_vertex:hf,fog_vertex:uf,fog_pars_vertex:df,fog_fragment:ff,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:vf,lights_pars_begin:yf,lights_toon_fragment:xf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Sf,lights_phong_pars_fragment:wf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Tf,lights_fragment_begin:Af,lights_fragment_maps:Rf,lights_fragment_end:Cf,logdepthbuf_fragment:Lf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Df,map_fragment:kf,map_pars_fragment:If,map_particle_fragment:Ff,map_particle_pars_fragment:Nf,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:Of,morphinstance_vertex:zf,morphcolor_vertex:Hf,morphnormal_vertex:Vf,morphtarget_pars_vertex:$f,morphtarget_vertex:jf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Kf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:tp,opaque_fragment:ep,packing:np,premultiplied_alpha_fragment:ip,project_vertex:sp,dithering_fragment:ap,dithering_pars_fragment:rp,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:hp,shadowmap_vertex:up,shadowmask_pars_fragment:dp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:_p,specularmap_pars_fragment:vp,tonemapping_fragment:yp,tonemapping_pars_fragment:bp,transmission_fragment:xp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:wp,uv_vertex:Ep,worldpos_vertex:Tp,background_vert:Ap,background_frag:Rp,backgroundCube_vert:Cp,backgroundCube_frag:Lp,cube_vert:Pp,cube_frag:Up,depth_vert:Dp,depth_frag:kp,distanceRGBA_vert:Ip,distanceRGBA_frag:Fp,equirect_vert:Np,equirect_frag:Bp,linedashed_vert:Op,linedashed_frag:zp,meshbasic_vert:Hp,meshbasic_frag:Vp,meshlambert_vert:$p,meshlambert_frag:jp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Kp,meshphong_frag:Yp,meshphysical_vert:Jp,meshphysical_frag:Zp,meshtoon_vert:Qp,meshtoon_frag:tm,points_vert:em,points_frag:nm,shadow_vert:im,shadow_frag:sm,sprite_vert:am,sprite_frag:rm},it={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},rn={basic:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ot(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Re([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Re([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ot(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Re([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Re([it.points,it.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Re([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Re([it.common,it.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Re([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Re([it.sprite,it.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Re([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Re([it.lights,it.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};rn.physical={uniforms:Re([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Js={r:0,b:0,g:0},Qn=new hn,om=new se;function lm(s,t,e,n,i,a,r){const o=new Ot(0);let l=a===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?e:t).get(E)),E}function _(M){let E=!1;const y=g(M);y===null?f(o,l):y&&y.isColor&&(f(y,1),E=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===Aa)?(h===void 0&&(h=new bt(new Xt(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Wi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Qn.copy(E.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(Qn)),h.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Zt,(u!==y||d!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new bt(new Yi(2,2),new Xn({name:"BackgroundMaterial",uniforms:Wi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(y.colorSpace)!==Zt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,E){M.getRGB(Js,hh(s)),n.buffers.color.setClear(Js.r,Js.g,Js.b,E,r)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),l=E,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:_,addToRenderList:m}}function cm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let a=i,r=!1;function o(b,L,z,N,$){let q=!1;const O=u(N,z,L);a!==O&&(a=O,c(a.object)),q=p(b,N,z,$),q&&g(b,N,z,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,y(b,L,z,N),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,z){const N=z.wireframe===!0;let $=n[b.id];$===void 0&&($={},n[b.id]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let O=q[N];return O===void 0&&(O=d(l()),q[N]=O),O}function d(b){const L=[],z=[],N=[];for(let $=0;$<e;$++)L[$]=0,z[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:N,object:b,attributes:{},index:null}}function p(b,L,z,N){const $=a.attributes,q=L.attributes;let O=0;const Z=z.getAttributes();for(const j in Z)if(Z[j].location>=0){const ht=$[j];let St=q[j];if(St===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(St=b.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;O++}return a.attributesNum!==O||a.index!==N}function g(b,L,z,N){const $={},q=L.attributes;let O=0;const Z=z.getAttributes();for(const j in Z)if(Z[j].location>=0){let ht=q[j];ht===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));const St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),$[j]=St,O++}a.attributes=$,a.attributesNum=O,a.index=N}function _(){const b=a.newAttributes;for(let L=0,z=b.length;L<z;L++)b[L]=0}function m(b){f(b,0)}function f(b,L){const z=a.newAttributes,N=a.enabledAttributes,$=a.attributeDivisors;z[b]=1,N[b]===0&&(s.enableVertexAttribArray(b),N[b]=1),$[b]!==L&&(s.vertexAttribDivisor(b,L),$[b]=L)}function M(){const b=a.newAttributes,L=a.enabledAttributes;for(let z=0,N=L.length;z<N;z++)L[z]!==b[z]&&(s.disableVertexAttribArray(z),L[z]=0)}function E(b,L,z,N,$,q,O){O===!0?s.vertexAttribIPointer(b,L,z,$,q):s.vertexAttribPointer(b,L,z,N,$,q)}function y(b,L,z,N){_();const $=N.attributes,q=z.getAttributes(),O=L.defaultAttributeValues;for(const Z in q){const j=q[Z];if(j.location>=0){let nt=$[Z];if(nt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const ht=nt.normalized,St=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;const ee=Ft.buffer,X=Ft.type,et=Ft.bytesPerElement,yt=X===s.INT||X===s.UNSIGNED_INT||nt.gpuType===Eo;if(nt.isInterleavedBufferAttribute){const at=nt.data,At=at.stride,Lt=nt.offset;if(at.isInstancedInterleavedBuffer){for(let Nt=0;Nt<j.locationSize;Nt++)f(j.location+Nt,at.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Nt=0;Nt<j.locationSize;Nt++)m(j.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Nt=0;Nt<j.locationSize;Nt++)E(j.location+Nt,St/j.locationSize,X,ht,At*et,(Lt+St/j.locationSize*Nt)*et,yt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<j.locationSize;at++)f(j.location+at,nt.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<j.locationSize;at++)m(j.location+at);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let at=0;at<j.locationSize;at++)E(j.location+at,St/j.locationSize,X,ht,St*et,St/j.locationSize*at*et,yt)}}else if(O!==void 0){const ht=O[Z];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(j.location,ht);break;case 3:s.vertexAttrib3fv(j.location,ht);break;case 4:s.vertexAttrib4fv(j.location,ht);break;default:s.vertexAttrib1fv(j.location,ht)}}}}M()}function U(){P();for(const b in n){const L=n[b];for(const z in L){const N=L[z];for(const $ in N)h(N[$].object),delete N[$];delete L[z]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const z in L){const N=L[z];for(const $ in N)h(N[$].object),delete N[$];delete L[z]}delete n[b.id]}function S(b){for(const L in n){const z=n[L];if(z[b.id]===void 0)continue;const N=z[b.id];for(const $ in N)h(N[$].object),delete N[$];delete z[b.id]}}function P(){w(),r=!0,a!==i&&(a=i,c(a.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function hm(s,t,e){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function um(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){return!(S!==Je&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const P=S===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Tn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==xn&&!P)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:U,maxSamples:T}}function dm(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new ni,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||a&&!m)a?h(null):c();else{const M=a?0:n,E=M*4;let y=f.clippingState||null;l.value=y,y=h(g,d,E,p);for(let U=0;U!==E;++U)y[U]=e[U];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=p;E!==_;++E,y+=4)r.copy(u[E]).applyMatrix4(M,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function fm(s){let t=new WeakMap;function e(r,o){return o===kr?r.mapping=Vi:o===Ir&&(r.mapping=$i),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===kr||o===Ir)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Sd(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class ph extends uh{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Pi=4,Cl=[.125,.215,.35,.446,.526,.582],ai=20,Qa=new ph,Ll=new Ot;let tr=null,er=0,nr=0,ir=!1;const ii=(1+Math.sqrt(5))/2,Ei=1/ii,Pl=[new R(-ii,Ei,0),new R(ii,Ei,0),new R(-Ei,0,ii),new R(Ei,0,ii),new R(0,ii,-Ei),new R(0,ii,Ei),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){tr=this._renderer.getRenderTarget(),er=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tr,er,nr),this._renderer.xr.enabled=ir,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tr=this._renderer.getRenderTarget(),er=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Rs,format:Je,colorSpace:Xi,depthBuffer:!1},i=Dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(a)),this._blurMaterial=mm(a,t,e)}return i}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,i){const o=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ll),h.toneMapping=$n,h.autoClear=!1;const p=new hi({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new bt(new Xt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ll),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const E=this._cubeSize;Zs(i,M*E,f>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vi||t.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new bt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Pl[(i-a-1)%Pl.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new bt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*ai-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):ai;m>ai&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const f=[];let M=0;for(let S=0;S<ai;++S){const P=S/_,w=Math.exp(-P*P/2);f.push(w),S===0?M+=w:S<m&&(M+=2*w)}for(let S=0;S<f.length;S++)f[S]=f[S]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[i],U=3*y*(i>E-Pi?i-E+Pi:0),T=4*(this._cubeSize-y);Zs(e,U,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Qa)}}function pm(s){const t=[],e=[],n=[];let i=s;const a=s-Pi+1+Cl.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>s-Pi?l=Cl[r-s+Pi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),E=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let T=0;T<p;T++){const S=T%3*2/3-1,P=T>2?0:-1,w=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];M.set(w,_*g*T),E.set(d,m*g*T);const b=[T,T,T,T,T,T];y.set(b,f*g*T)}const U=new De;U.setAttribute("position",new Qe(M,_)),U.setAttribute("uv",new Qe(E,m)),U.setAttribute("faceIndex",new Qe(y,f)),t.push(U),i>Pi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dl(s,t,e){const n=new ci(s,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function mm(s,t,e){const n=new Float32Array(ai),i=new R(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function kl(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Il(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function gm(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===kr||l===Ir,h=l===Vi||l===$i;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ul(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ul(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function _m(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&us("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vm(s,t,e,n){const i={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",r),delete i[d.id];const p=a.get(d);p&&(t.remove(p),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let E=0,y=M.length;E<y;E+=3){const U=M[E+0],T=M[E+1],S=M[E+2];d.push(U,T,T,S,S,U)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,y=M.length/3-1;E<y;E+=3){const U=E+0,T=E+1,S=E+2;d.push(U,T,T,S,S,U)}}else return;const m=new(ih(d)?ch:lh)(d,1);m.version=_;const f=a.get(u);f&&t.remove(f),a.set(u,m)}function h(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ym(s,t,e){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,p){s.drawElements(n,p,a,d*r),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,a,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/r,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xm(s,t,e){const n=new WeakMap,i=new te;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let w=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,U=1;y>t.maxTextureSize&&(U=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*U*4*u),S=new ah(T,y,U,u);S.type=xn,S.needsUpdate=!0;const P=E*4;for(let b=0;b<u;b++){const L=m[b],z=f[b],N=M[b],$=y*U*4*b;for(let q=0;q<L.count;q++){const O=q*P;p===!0&&(i.fromBufferAttribute(L,q),T[$+O+0]=i.x,T[$+O+1]=i.y,T[$+O+2]=i.z,T[$+O+3]=0),g===!0&&(i.fromBufferAttribute(z,q),T[$+O+4]=i.x,T[$+O+5]=i.y,T[$+O+6]=i.z,T[$+O+7]=0),_===!0&&(i.fromBufferAttribute(N,q),T[$+O+8]=i.x,T[$+O+9]=i.y,T[$+O+10]=i.z,T[$+O+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new ct(y,U)},n.set(o,d),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function Mm(s,t,e,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class mh extends Te{constructor(t,e,n,i,a,r,o,l,c,h=Di){if(h!==Di&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=li),n===void 0&&h===Gi&&(n=ji),super(null,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gh=new Te,Fl=new mh(1,1),_h=new ah,vh=new od,yh=new dh,Nl=[],Bl=[],Ol=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function Ji(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=Nl[i];if(a===void 0&&(a=new Float32Array(i),Nl[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ca(s,t){let e=Bl[t];e===void 0&&(e=new Int32Array(t),Bl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Sm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2fv(this.addr,t),me(e,t)}}function Em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;s.uniform3fv(this.addr,t),me(e,t)}}function Tm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4fv(this.addr,t),me(e,t)}}function Am(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Hl.set(n),s.uniformMatrix2fv(this.addr,!1,Hl),me(e,n)}}function Rm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;zl.set(n),s.uniformMatrix3fv(this.addr,!1,zl),me(e,n)}}function Cm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ol.set(n),s.uniformMatrix4fv(this.addr,!1,Ol),me(e,n)}}function Lm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2iv(this.addr,t),me(e,t)}}function Um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3iv(this.addr,t),me(e,t)}}function Dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4iv(this.addr,t),me(e,t)}}function km(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;s.uniform2uiv(this.addr,t),me(e,t)}}function Fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;s.uniform3uiv(this.addr,t),me(e,t)}}function Nm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;s.uniform4uiv(this.addr,t),me(e,t)}}function Bm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Fl.compareFunction=nh,a=Fl):a=gh,e.setTexture2D(t||a,i)}function Om(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vh,i)}function zm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yh,i)}function Hm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_h,i)}function Vm(s){switch(s){case 5126:return Sm;case 35664:return wm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Lm;case 35667:case 35671:return Pm;case 35668:case 35672:return Um;case 35669:case 35673:return Dm;case 5125:return km;case 36294:return Im;case 36295:return Fm;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Hm}}function $m(s,t){s.uniform1fv(this.addr,t)}function jm(s,t){const e=Ji(t,this.size,2);s.uniform2fv(this.addr,e)}function Gm(s,t){const e=Ji(t,this.size,3);s.uniform3fv(this.addr,e)}function Wm(s,t){const e=Ji(t,this.size,4);s.uniform4fv(this.addr,e)}function Xm(s,t){const e=Ji(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function qm(s,t){const e=Ji(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Km(s,t){const e=Ji(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ym(s,t){s.uniform1iv(this.addr,t)}function Jm(s,t){s.uniform2iv(this.addr,t)}function Zm(s,t){s.uniform3iv(this.addr,t)}function Qm(s,t){s.uniform4iv(this.addr,t)}function t0(s,t){s.uniform1uiv(this.addr,t)}function e0(s,t){s.uniform2uiv(this.addr,t)}function n0(s,t){s.uniform3uiv(this.addr,t)}function i0(s,t){s.uniform4uiv(this.addr,t)}function s0(s,t,e){const n=this.cache,i=t.length,a=Ca(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||gh,a[r])}function a0(s,t,e){const n=this.cache,i=t.length,a=Ca(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||vh,a[r])}function r0(s,t,e){const n=this.cache,i=t.length,a=Ca(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||yh,a[r])}function o0(s,t,e){const n=this.cache,i=t.length,a=Ca(e,i);pe(n,a)||(s.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||_h,a[r])}function l0(s){switch(s){case 5126:return $m;case 35664:return jm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Km;case 5124:case 35670:return Ym;case 35667:case 35671:return Jm;case 35668:case 35672:return Zm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return o0}}class c0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vm(e.type)}}class h0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=l0(e.type)}}class u0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function Vl(s,t){s.seq.push(t),s.map[t.id]=t}function d0(s,t,e){const n=s.name,i=n.length;for(sr.lastIndex=0;;){const a=sr.exec(n),r=sr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Vl(e,c===void 0?new c0(o,s,t):new h0(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new u0(o),Vl(e,u)),e=u}}}class ga{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);d0(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function $l(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const f0=37297;let p0=0;function m0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const jl=new Dt;function g0(s){Gt._getMatrix(jl,Gt.workingColorSpace,s);const t=`mat3( ${jl.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(s)){case Ra:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Gl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+m0(s.getShaderSource(t),r)}else return i}function _0(s,t){const e=g0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function v0(s,t){let e;switch(t){case yu:e="Linear";break;case bu:e="Reinhard";break;case xu:e="Cineon";break;case Mu:e="ACESFilmic";break;case wu:e="AgX";break;case Eu:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qs=new R;function y0(){Gt.getLuminanceCoefficients(Qs);const s=Qs.x.toFixed(4),t=Qs.y.toFixed(4),e=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function x0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function ds(s){return s!==""}function Wl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(s){return s.replace(S0,E0)}const w0=new Map;function E0(s,t){let e=It[t];if(e===void 0){const n=w0.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uo(e)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(s){return s.replace(T0,A0)}function A0(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Kl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function R0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function C0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vi:case $i:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function P0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $c:t="ENVMAP_BLENDING_MULTIPLY";break;case _u:t="ENVMAP_BLENDING_MIX";break;case vu:t="ENVMAP_BLENDING_ADD";break}return t}function U0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function D0(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=R0(e),c=C0(e),h=L0(e),u=P0(e),d=U0(e),p=b0(e),g=x0(a),_=i.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),f.length>0&&(f+=`
`)):(m=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),f=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?It.tonemapping_pars_fragment:"",e.toneMapping!==$n?v0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,_0("linearToOutputTexel",e.outputColorSpace),y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),r=uo(r),r=Wl(r,e),r=Xl(r,e),o=uo(o),o=Wl(o,e),o=Xl(o,e),r=ql(r),o=ql(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=M+m+r,y=M+f+o,U=$l(i,i.VERTEX_SHADER,E),T=$l(i,i.FRAGMENT_SHADER,y);i.attachShader(_,U),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(L){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(U).trim(),$=i.getShaderInfoLog(T).trim();let q=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,U,T);else{const Z=Gl(i,U,"vertex"),j=Gl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Z+`
`+j)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||$==="")&&(O=!1);O&&(L.diagnostics={runnable:q,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:$,prefix:f}})}i.deleteShader(U),i.deleteShader(T),P=new ga(i,_),w=M0(i,_)}let P;this.getUniforms=function(){return P===void 0&&S(this),P};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,f0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=T,this}let k0=0;class I0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new F0(t),e.set(t,n)),n}}class F0{constructor(t){this.id=k0++,this.code=t,this.usedTimes=0}}function N0(s,t,e,n,i,a,r){const o=new Do,l=new I0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,L,z,N){const $=z.fog,q=N.geometry,O=w.isMeshStandardMaterial?z.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),j=Z&&Z.mapping===Aa?Z.image.height:null,nt=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=ht!==void 0?ht.length:0;let Ft=0;q.morphAttributes.position!==void 0&&(Ft=1),q.morphAttributes.normal!==void 0&&(Ft=2),q.morphAttributes.color!==void 0&&(Ft=3);let ee,X,et,yt;if(nt){const Yt=rn[nt];ee=Yt.vertexShader,X=Yt.fragmentShader}else ee=w.vertexShader,X=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);const at=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Lt=N.isInstancedMesh===!0,Nt=N.isBatchedMesh===!0,ce=!!w.map,$t=!!w.matcap,ue=!!Z,F=!!w.aoMap,Be=!!w.lightMap,zt=!!w.bumpMap,Ht=!!w.normalMap,Et=!!w.displacementMap,ae=!!w.emissiveMap,wt=!!w.metalnessMap,A=!!w.roughnessMap,v=w.anisotropy>0,B=w.clearcoat>0,K=w.dispersion>0,J=w.iridescence>0,W=w.sheen>0,xt=w.transmission>0,rt=v&&!!w.anisotropyMap,ft=B&&!!w.clearcoatMap,jt=B&&!!w.clearcoatNormalMap,Q=B&&!!w.clearcoatRoughnessMap,pt=J&&!!w.iridescenceMap,Tt=J&&!!w.iridescenceThicknessMap,Rt=W&&!!w.sheenColorMap,mt=W&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,kt=!!w.specularColorMap,ne=!!w.specularIntensityMap,D=xt&&!!w.transmissionMap,st=xt&&!!w.thicknessMap,G=!!w.gradientMap,Y=!!w.alphaMap,ut=w.alphaTest>0,ot=!!w.alphaHash,Pt=!!w.extensions;let he=$n;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(he=s.toneMapping);const xe={shaderID:nt,shaderType:w.type,shaderName:w.name,vertexShader:ee,fragmentShader:X,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&N._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&N.instanceColor!==null,instancingMorph:Lt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Xi,alphaToCoverage:!!w.alphaToCoverage,map:ce,matcap:$t,envMap:ue,envMapMode:ue&&Z.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:Be,bumpMap:zt,normalMap:Ht,displacementMap:d&&Et,emissiveMap:ae,normalMapObjectSpace:Ht&&w.normalMapType===Cu,normalMapTangentSpace:Ht&&w.normalMapType===eh,metalnessMap:wt,roughnessMap:A,anisotropy:v,anisotropyMap:rt,clearcoat:B,clearcoatMap:ft,clearcoatNormalMap:jt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:W,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Vt,specularColorMap:kt,specularIntensityMap:ne,transmission:xt,transmissionMap:D,thicknessMap:st,gradientMap:G,opaque:w.transparent===!1&&w.blending===Ui&&w.alphaToCoverage===!1,alphaMap:Y,alphaTest:ut,alphaHash:ot,combine:w.combine,mapUv:ce&&_(w.map.channel),aoMapUv:F&&_(w.aoMap.channel),lightMapUv:Be&&_(w.lightMap.channel),bumpMapUv:zt&&_(w.bumpMap.channel),normalMapUv:Ht&&_(w.normalMap.channel),displacementMapUv:Et&&_(w.displacementMap.channel),emissiveMapUv:ae&&_(w.emissiveMap.channel),metalnessMapUv:wt&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:rt&&_(w.anisotropyMap.channel),clearcoatMapUv:ft&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(w.sheenRoughnessMap.channel),specularMapUv:Vt&&_(w.specularMap.channel),specularColorMapUv:kt&&_(w.specularColorMap.channel),specularIntensityMapUv:ne&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:st&&_(w.thicknessMap.channel),alphaMapUv:Y&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ht||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ce||Y),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:ce&&w.map.isVideoTexture===!0&&Gt.getTransfer(w.map.colorSpace)===Zt,decodeVideoTextureEmissive:ae&&w.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(w.emissiveMap.colorSpace)===Zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ve,flipSided:w.side===Ue,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&w.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function f(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(M(b,w),E(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function M(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function E(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){const b=g[w.type];let L;if(b){const z=rn[b];L=yd.clone(z.uniforms)}else L=w.uniforms;return L}function U(w,b){let L;for(let z=0,N=h.length;z<N;z++){const $=h[z];if($.cacheKey===b){L=$,++L.usedTimes;break}}return L===void 0&&(L=new D0(s,b,w,a),h.push(L)),L}function T(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function S(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:U,releaseProgram:T,releaseShaderCache:S,programs:h,dispose:P}}function B0(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function O0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Yl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Jl(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=r(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=r(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||O0),n.length>1&&n.sort(d||Yl),i.length>1&&i.sort(d||Yl)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:h,sort:c}}function z0(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Jl,s.set(n,[r])):i>=a.length?(r=new Jl,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function H0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ot};break;case"SpotLight":e={position:new R,direction:new R,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function V0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let $0=0;function j0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function G0(s){const t=new H0,e=V0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,a=new se,r=new se;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,E=0,y=0,U=0,T=0,S=0;c.sort(j0);for(let w=0,b=c.length;w<b;w++){const L=c[w],z=L.color,N=L.intensity,$=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*N,u+=z.g*N,d+=z.b*N;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],N);S++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,j=e.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=O,p++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(z).multiplyScalar(N),O.distance=$,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[_]=O;const Z=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,Z.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=Z.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=q,y++}_++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(z).multiplyScalar(N),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=O,m++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const Z=L.shadow,j=e.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=O,g++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(N),O.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[f]=O,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==E||P.numSpotShadows!==y||P.numSpotMaps!==U||P.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+U-T,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=E,P.numSpotShadows=y,P.numSpotMaps=U,P.numLightProbes=S,n.version=$0++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const E=c[f];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(E.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Zl(s){const t=new G0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function W0(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Zl(s),t.set(i,[o])):a>=r.length?(o=new Zl(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class X0 extends Ki{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class q0 extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
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
}`;function J0(s,t,e){let n=new ko;const i=new ct,a=new ct,r=new te,o=new X0({depthPacking:Ru}),l=new q0,c={},h=e.maxTextureSize,u={[Wn]:Ue,[Ue]:Wn,[Ve]:Ve},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:K0,fragmentShader:Y0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let f=this.type;this.render=function(T,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Vn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=f!==yn&&this.type===yn,$=f===yn&&this.type!==yn;for(let q=0,O=T.length;q<O;q++){const Z=T[q],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const nt=j.getFrameExtents();if(i.multiply(nt),a.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/nt.x),i.x=a.x*nt.x,j.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/nt.y),i.y=a.y*nt.y,j.mapSize.y=a.y)),j.map===null||N===!0||$===!0){const St=this.type!==yn?{minFilter:Ze,magFilter:Ze}:{};j.map!==null&&j.map.dispose(),j.map=new ci(i.x,i.y,St),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const ht=j.getViewportCount();for(let St=0;St<ht;St++){const Ft=j.getViewport(St);r.set(a.x*Ft.x,a.y*Ft.y,a.x*Ft.z,a.y*Ft.w),z.viewport(r),j.updateMatrices(Z,St),n=j.getFrustum(),y(S,P,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===yn&&M(j,P),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,b,L)};function M(T,S){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,P,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,P,p,_,null)}function E(T,S,P,w){let b=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=b.uuid,N=S.uuid;let $=c[z];$===void 0&&($={},c[z]=$);let q=$[N];q===void 0&&(q=b.clone(),$[N]=q,S.addEventListener("dispose",U)),b=q}if(b.visible=S.visible,b.wireframe=S.wireframe,w===yn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=s.properties.get(b);z.light=P}return b}function y(T,S,P,w,b){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const N=t.update(T),$=T.material;if(Array.isArray($)){const q=N.groups;for(let O=0,Z=q.length;O<Z;O++){const j=q[O],nt=$[j.materialIndex];if(nt&&nt.visible){const ht=E(T,nt,w,b);T.onBeforeShadow(s,T,S,P,N,ht,j),s.renderBufferDirect(P,null,N,ht,T,j),T.onAfterShadow(s,T,S,P,N,ht,j)}}}else if($.visible){const q=E(T,$,w,b);T.onBeforeShadow(s,T,S,P,N,q,null),s.renderBufferDirect(P,null,N,q,T,null),T.onAfterShadow(s,T,S,P,N,q,null)}}const z=T.children;for(let N=0,$=z.length;N<$;N++)y(z[N],S,P,w,b)}function U(T){T.target.removeEventListener("dispose",U);for(const P in c){const w=c[P],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const Z0={[Ar]:Rr,[Cr]:Ur,[Lr]:Dr,[Hi]:Pr,[Rr]:Ar,[Ur]:Cr,[Dr]:Lr,[Pr]:Hi};function Q0(s,t){function e(){let D=!1;const st=new te;let G=null;const Y=new te(0,0,0,0);return{setMask:function(ut){G!==ut&&!D&&(s.colorMask(ut,ut,ut,ut),G=ut)},setLocked:function(ut){D=ut},setClear:function(ut,ot,Pt,he,xe){xe===!0&&(ut*=he,ot*=he,Pt*=he),st.set(ut,ot,Pt,he),Y.equals(st)===!1&&(s.clearColor(ut,ot,Pt,he),Y.copy(st))},reset:function(){D=!1,G=null,Y.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,G=null,Y=null,ut=null;return{setReversed:function(ot){if(st!==ot){const Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const he=ut;ut=null,this.setClear(he)}st=ot},getReversed:function(){return st},setTest:function(ot){ot?at(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ot){G!==ot&&!D&&(s.depthMask(ot),G=ot)},setFunc:function(ot){if(st&&(ot=Z0[ot]),Y!==ot){switch(ot){case Ar:s.depthFunc(s.NEVER);break;case Rr:s.depthFunc(s.ALWAYS);break;case Cr:s.depthFunc(s.LESS);break;case Hi:s.depthFunc(s.LEQUAL);break;case Lr:s.depthFunc(s.EQUAL);break;case Pr:s.depthFunc(s.GEQUAL);break;case Ur:s.depthFunc(s.GREATER);break;case Dr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=ot}},setLocked:function(ot){D=ot},setClear:function(ot){ut!==ot&&(st&&(ot=1-ot),s.clearDepth(ot),ut=ot)},reset:function(){D=!1,G=null,Y=null,ut=null,st=!1}}}function i(){let D=!1,st=null,G=null,Y=null,ut=null,ot=null,Pt=null,he=null,xe=null;return{setTest:function(Yt){D||(Yt?at(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Yt){st!==Yt&&!D&&(s.stencilMask(Yt),st=Yt)},setFunc:function(Yt,je,dn){(G!==Yt||Y!==je||ut!==dn)&&(s.stencilFunc(Yt,je,dn),G=Yt,Y=je,ut=dn)},setOp:function(Yt,je,dn){(ot!==Yt||Pt!==je||he!==dn)&&(s.stencilOp(Yt,je,dn),ot=Yt,Pt=je,he=dn)},setLocked:function(Yt){D=Yt},setClear:function(Yt){xe!==Yt&&(s.clearStencil(Yt),xe=Yt)},reset:function(){D=!1,st=null,G=null,Y=null,ut=null,ot=null,Pt=null,he=null,xe=null}}}const a=new e,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,E=null,y=null,U=null,T=null,S=new Ot(0,0,0),P=0,w=!1,b=null,L=null,z=null,N=null,$=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=Z>=2);let nt=null,ht={};const St=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),ee=new te().fromArray(St),X=new te().fromArray(Ft);function et(D,st,G,Y){const ut=new Uint8Array(4),ot=s.createTexture();s.bindTexture(D,ot),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<G;Pt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(st+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ot}const yt={};yt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(s.DEPTH_TEST),r.setFunc(Hi),zt(!1),Ht(nl),at(s.CULL_FACE),F(Vn);function at(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function At(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Lt(D,st){return u[D]!==st?(s.bindFramebuffer(D,st),u[D]=st,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Nt(D,st){let G=p,Y=!1;if(D){G=d.get(st),G===void 0&&(G=[],d.set(st,G));const ut=D.textures;if(G.length!==ut.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Pt=ut.length;ot<Pt;ot++)G[ot]=s.COLOR_ATTACHMENT0+ot;G.length=ut.length,Y=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Y=!0);Y&&s.drawBuffers(G)}function ce(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const $t={[si]:s.FUNC_ADD,[tu]:s.FUNC_SUBTRACT,[eu]:s.FUNC_REVERSE_SUBTRACT};$t[nu]=s.MIN,$t[iu]=s.MAX;const ue={[su]:s.ZERO,[au]:s.ONE,[ru]:s.SRC_COLOR,[Er]:s.SRC_ALPHA,[du]:s.SRC_ALPHA_SATURATE,[hu]:s.DST_COLOR,[lu]:s.DST_ALPHA,[ou]:s.ONE_MINUS_SRC_COLOR,[Tr]:s.ONE_MINUS_SRC_ALPHA,[uu]:s.ONE_MINUS_DST_COLOR,[cu]:s.ONE_MINUS_DST_ALPHA,[fu]:s.CONSTANT_COLOR,[pu]:s.ONE_MINUS_CONSTANT_COLOR,[mu]:s.CONSTANT_ALPHA,[gu]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,st,G,Y,ut,ot,Pt,he,xe,Yt){if(D===Vn){_===!0&&(At(s.BLEND),_=!1);return}if(_===!1&&(at(s.BLEND),_=!0),D!==Qh){if(D!==m||Yt!==w){if((f!==si||y!==si)&&(s.blendEquation(s.FUNC_ADD),f=si,y=si),Yt)switch(D){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case il:s.blendFunc(s.ONE,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case al:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case il:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case al:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,E=null,U=null,T=null,S.set(0,0,0),P=0,m=D,w=Yt}return}ut=ut||st,ot=ot||G,Pt=Pt||Y,(st!==f||ut!==y)&&(s.blendEquationSeparate($t[st],$t[ut]),f=st,y=ut),(G!==M||Y!==E||ot!==U||Pt!==T)&&(s.blendFuncSeparate(ue[G],ue[Y],ue[ot],ue[Pt]),M=G,E=Y,U=ot,T=Pt),(he.equals(S)===!1||xe!==P)&&(s.blendColor(he.r,he.g,he.b,xe),S.copy(he),P=xe),m=D,w=!1}function Be(D,st){D.side===Ve?At(s.CULL_FACE):at(s.CULL_FACE);let G=D.side===Ue;st&&(G=!G),zt(G),D.blending===Ui&&D.transparent===!1?F(Vn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const Y=D.stencilWrite;o.setTest(Y),Y&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ae(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function Ht(D){D!==Yh?(at(s.CULL_FACE),D!==L&&(D===nl?s.cullFace(s.BACK):D===Jh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),L=D}function Et(D){D!==z&&(O&&s.lineWidth(D),z=D)}function ae(D,st,G){D?(at(s.POLYGON_OFFSET_FILL),(N!==st||$!==G)&&(s.polygonOffset(st,G),N=st,$=G)):At(s.POLYGON_OFFSET_FILL)}function wt(D){D?at(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+q-1),nt!==D&&(s.activeTexture(D),nt=D)}function v(D,st,G){G===void 0&&(nt===null?G=s.TEXTURE0+q-1:G=nt);let Y=ht[G];Y===void 0&&(Y={type:void 0,texture:void 0},ht[G]=Y),(Y.type!==D||Y.texture!==st)&&(nt!==G&&(s.activeTexture(G),nt=G),s.bindTexture(D,st||yt[D]),Y.type=D,Y.texture=st)}function B(){const D=ht[nt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){ee.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function mt(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Vt(D,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let Y=G.get(D);Y===void 0&&(Y=s.getUniformBlockIndex(st,D.name),G.set(D,Y))}function kt(D,st){const Y=c.get(st).get(D);l.get(st)!==Y&&(s.uniformBlockBinding(st,Y,D.__bindingPointIndex),l.set(st,Y))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,ht={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,E=null,y=null,U=null,T=null,S=new Ot(0,0,0),P=0,w=!1,b=null,L=null,z=null,N=null,$=null,ee.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:At,bindFramebuffer:Lt,drawBuffers:Nt,useProgram:ce,setBlending:F,setMaterial:Be,setFlipSided:zt,setCullFace:Ht,setLineWidth:Et,setPolygonOffset:ae,setScissorTest:wt,activeTexture:A,bindTexture:v,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Vt,uniformBlockBinding:kt,texStorage2D:jt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:xt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ft,scissor:Rt,viewport:mt,reset:ne}}function Ql(s,t,e,n){const i=tg(n);switch(e){case qc:return s*t;case Yc:return s*t;case Jc:return s*t*2;case Zc:return s*t/i.components*i.byteLength;case Ro:return s*t/i.components*i.byteLength;case Qc:return s*t*2/i.components*i.byteLength;case Co:return s*t*2/i.components*i.byteLength;case Kc:return s*t*3/i.components*i.byteLength;case Je:return s*t*4/i.components*i.byteLength;case Lo:return s*t*4/i.components*i.byteLength;case ua:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Or:case Hr:return Math.max(s,16)*Math.max(t,8)/4;case Br:case zr:return Math.max(s,8)*Math.max(t,8)/2;case Vr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ma:case ao:case ro:return Math.ceil(s/4)*Math.ceil(t/4)*16;case th:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case lo:case co:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tg(s){switch(s){case Tn:case Gc:return{byteLength:1,components:1};case ws:case Wc:case Rs:return{byteLength:2,components:1};case To:case Ao:return{byteLength:2,components:4};case li:case Eo:case xn:return{byteLength:4,components:1};case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function eg(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):Ts("canvas")}function _(A,v,B){let K=1;const J=wt(A);if((J.width>B||J.height>B)&&(K=B/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(K*J.width),xt=Math.floor(K*J.height);u===void 0&&(u=g(W,xt));const rt=v?g(W,xt):u;return rt.width=W,rt.height=xt,rt.getContext("2d").drawImage(A,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+xt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,v,B,K,J=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=v;if(v===s.RED&&(B===s.FLOAT&&(W=s.R32F),B===s.HALF_FLOAT&&(W=s.R16F),B===s.UNSIGNED_BYTE&&(W=s.R8)),v===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.R8UI),B===s.UNSIGNED_SHORT&&(W=s.R16UI),B===s.UNSIGNED_INT&&(W=s.R32UI),B===s.BYTE&&(W=s.R8I),B===s.SHORT&&(W=s.R16I),B===s.INT&&(W=s.R32I)),v===s.RG&&(B===s.FLOAT&&(W=s.RG32F),B===s.HALF_FLOAT&&(W=s.RG16F),B===s.UNSIGNED_BYTE&&(W=s.RG8)),v===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RG8UI),B===s.UNSIGNED_SHORT&&(W=s.RG16UI),B===s.UNSIGNED_INT&&(W=s.RG32UI),B===s.BYTE&&(W=s.RG8I),B===s.SHORT&&(W=s.RG16I),B===s.INT&&(W=s.RG32I)),v===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGB8UI),B===s.UNSIGNED_SHORT&&(W=s.RGB16UI),B===s.UNSIGNED_INT&&(W=s.RGB32UI),B===s.BYTE&&(W=s.RGB8I),B===s.SHORT&&(W=s.RGB16I),B===s.INT&&(W=s.RGB32I)),v===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),B===s.UNSIGNED_INT&&(W=s.RGBA32UI),B===s.BYTE&&(W=s.RGBA8I),B===s.SHORT&&(W=s.RGBA16I),B===s.INT&&(W=s.RGBA32I)),v===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),v===s.RGBA){const xt=J?Ra:Gt.getTransfer(K);B===s.FLOAT&&(W=s.RGBA32F),B===s.HALF_FLOAT&&(W=s.RGBA16F),B===s.UNSIGNED_BYTE&&(W=xt===Zt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(A,v){let B;return A?v===null||v===li||v===ji?B=s.DEPTH24_STENCIL8:v===xn?B=s.DEPTH32F_STENCIL8:v===ws&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===li||v===ji?B=s.DEPTH_COMPONENT24:v===xn?B=s.DEPTH_COMPONENT32F:v===ws&&(B=s.DEPTH_COMPONENT16),B}function U(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ze&&A.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){const v=A.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&h.delete(v)}function S(A){const v=A.target;v.removeEventListener("dispose",S),b(v)}function P(A){const v=n.get(A);if(v.__webglInit===void 0)return;const B=A.source,K=d.get(B);if(K){const J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(A),Object.keys(K).length===0&&d.delete(B)}n.remove(A)}function w(A){const v=n.get(A);s.deleteTexture(v.__webglTexture);const B=A.source,K=d.get(B);delete K[v.__cacheKey],r.memory.textures--}function b(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let J=0;J<v.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[K][J]);else s.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)s.deleteFramebuffer(v.__webglFramebuffer[K]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,J=B.length;K<J;K++){const W=n.get(B[K]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),r.memory.textures--),n.remove(B[K])}n.remove(A)}let L=0;function z(){L=0}function N(){const A=L;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function $(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function q(A,v){const B=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,A,v);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+v)}function O(A,v){const B=n.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+v)}function Z(A,v){const B=n.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,v);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+v)}function j(A,v){const B=n.get(A);if(A.version>0&&B.__version!==A.version){et(B,A,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+v)}const nt={[Fr]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},ht={[Ze]:s.NEAREST,[Tu]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[Ua]:s.LINEAR_MIPMAP_NEAREST,[oi]:s.LINEAR_MIPMAP_LINEAR},St={[Lu]:s.NEVER,[Fu]:s.ALWAYS,[Pu]:s.LESS,[nh]:s.LEQUAL,[Uu]:s.EQUAL,[Iu]:s.GEQUAL,[Du]:s.GREATER,[ku]:s.NOTEQUAL};function Ft(A,v){if(v.type===xn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===Ua||v.magFilter===Ds||v.magFilter===oi||v.minFilter===ln||v.minFilter===Ua||v.minFilter===Ds||v.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,nt[v.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,nt[v.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,nt[v.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ht[v.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ze||v.minFilter!==Ds&&v.minFilter!==oi||v.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",T));const K=v.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const W=$(v);if(W!==A.__cacheKey){J[W]===void 0&&(J[W]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,B=!0),J[W].usedTimes++;const xt=J[A.__cacheKey];xt!==void 0&&(J[A.__cacheKey].usedTimes--,xt.usedTimes===0&&w(v)),A.__cacheKey=W,A.__webglTexture=J[W].texture}return B}function X(A,v,B){let K=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=s.TEXTURE_3D);const J=ee(A,v),W=v.source;e.bindTexture(K,A.__webglTexture,s.TEXTURE0+B);const xt=n.get(W);if(W.version!==xt.__version||J===!0){e.activeTexture(s.TEXTURE0+B);const rt=Gt.getPrimaries(Gt.workingColorSpace),ft=v.colorSpace===zn?null:Gt.getPrimaries(v.colorSpace),jt=v.colorSpace===zn||rt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Q=_(v.image,!1,i.maxTextureSize);Q=ae(v,Q);const pt=a.convert(v.format,v.colorSpace),Tt=a.convert(v.type);let Rt=E(v.internalFormat,pt,Tt,v.colorSpace,v.isVideoTexture);Ft(K,v);let mt;const Vt=v.mipmaps,kt=v.isVideoTexture!==!0,ne=xt.__version===void 0||J===!0,D=W.dataReady,st=U(v,Q);if(v.isDepthTexture)Rt=y(v.format===Gi,v.type),ne&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,Tt,null));else if(v.isDataTexture)if(Vt.length>0){kt&&ne&&e.texStorage2D(s.TEXTURE_2D,st,Rt,Vt[0].width,Vt[0].height);for(let G=0,Y=Vt.length;G<Y;G++)mt=Vt[G],kt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(s.TEXTURE_2D,G,Rt,mt.width,mt.height,0,pt,Tt,mt.data);v.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(s.TEXTURE_2D,st,Rt,Q.width,Q.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Tt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,Tt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Rt,Vt[0].width,Vt[0].height,Q.depth);for(let G=0,Y=Vt.length;G<Y;G++)if(mt=Vt[G],v.format!==Je)if(pt!==null)if(kt){if(D)if(v.layerUpdates.size>0){const ut=Ql(mt.width,mt.height,v.format,v.type);for(const ot of v.layerUpdates){const Pt=mt.data.subarray(ot*ut/mt.data.BYTES_PER_ELEMENT,(ot+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ot,mt.width,mt.height,1,pt,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Rt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,Tt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Rt,mt.width,mt.height,Q.depth,0,pt,Tt,mt.data)}else{kt&&ne&&e.texStorage2D(s.TEXTURE_2D,st,Rt,Vt[0].width,Vt[0].height);for(let G=0,Y=Vt.length;G<Y;G++)mt=Vt[G],v.format!==Je?pt!==null?kt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(s.TEXTURE_2D,G,Rt,mt.width,mt.height,0,pt,Tt,mt.data)}else if(v.isDataArrayTexture)if(kt){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Rt,Q.width,Q.height,Q.depth),D)if(v.layerUpdates.size>0){const G=Ql(Q.width,Q.height,v.format,v.type);for(const Y of v.layerUpdates){const ut=Q.data.subarray(Y*G/Q.data.BYTES_PER_ELEMENT,(Y+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,pt,Tt,ut)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Tt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,pt,Tt,Q.data);else if(v.isData3DTexture)kt?(ne&&e.texStorage3D(s.TEXTURE_3D,st,Rt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Tt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,pt,Tt,Q.data);else if(v.isFramebufferTexture){if(ne)if(kt)e.texStorage2D(s.TEXTURE_2D,st,Rt,Q.width,Q.height);else{let G=Q.width,Y=Q.height;for(let ut=0;ut<st;ut++)e.texImage2D(s.TEXTURE_2D,ut,Rt,G,Y,0,pt,Tt,null),G>>=1,Y>>=1}}else if(Vt.length>0){if(kt&&ne){const G=wt(Vt[0]);e.texStorage2D(s.TEXTURE_2D,st,Rt,G.width,G.height)}for(let G=0,Y=Vt.length;G<Y;G++)mt=Vt[G],kt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt,Tt,mt):e.texImage2D(s.TEXTURE_2D,G,Rt,pt,Tt,mt);v.generateMipmaps=!1}else if(kt){if(ne){const G=wt(Q);e.texStorage2D(s.TEXTURE_2D,st,Rt,G.width,G.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Tt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Rt,pt,Tt,Q);m(v)&&f(K),xt.__version=W.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function et(A,v,B){if(v.image.length!==6)return;const K=ee(A,v),J=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const W=n.get(J);if(J.version!==W.__version||K===!0){e.activeTexture(s.TEXTURE0+B);const xt=Gt.getPrimaries(Gt.workingColorSpace),rt=v.colorSpace===zn?null:Gt.getPrimaries(v.colorSpace),ft=v.colorSpace===zn||xt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const jt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let Y=0;Y<6;Y++)!jt&&!Q?pt[Y]=_(v.image[Y],!0,i.maxCubemapSize):pt[Y]=Q?v.image[Y].image:v.image[Y],pt[Y]=ae(v,pt[Y]);const Tt=pt[0],Rt=a.convert(v.format,v.colorSpace),mt=a.convert(v.type),Vt=E(v.internalFormat,Rt,mt,v.colorSpace),kt=v.isVideoTexture!==!0,ne=W.__version===void 0||K===!0,D=J.dataReady;let st=U(v,Tt);Ft(s.TEXTURE_CUBE_MAP,v);let G;if(jt){kt&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Vt,Tt.width,Tt.height);for(let Y=0;Y<6;Y++){G=pt[Y].mipmaps;for(let ut=0;ut<G.length;ut++){const ot=G[ut];v.format!==Je?Rt!==null?kt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut,0,0,ot.width,ot.height,Rt,ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut,Vt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut,0,0,ot.width,ot.height,Rt,mt,ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut,Vt,ot.width,ot.height,0,Rt,mt,ot.data)}}}else{if(G=v.mipmaps,kt&&ne){G.length>0&&st++;const Y=wt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Vt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pt[Y].width,pt[Y].height,Rt,mt,pt[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Vt,pt[Y].width,pt[Y].height,0,Rt,mt,pt[Y].data);for(let ut=0;ut<G.length;ut++){const Pt=G[ut].image[Y].image;kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut+1,0,0,Pt.width,Pt.height,Rt,mt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut+1,Vt,Pt.width,Pt.height,0,Rt,mt,Pt.data)}}else{kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Rt,mt,pt[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Vt,Rt,mt,pt[Y]);for(let ut=0;ut<G.length;ut++){const ot=G[ut];kt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut+1,0,0,Rt,mt,ot.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut+1,Vt,Rt,mt,ot.image[Y])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),W.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function yt(A,v,B,K,J,W){const xt=a.convert(B.format,B.colorSpace),rt=a.convert(B.type),ft=E(B.internalFormat,xt,rt,B.colorSpace),jt=n.get(v),Q=n.get(B);if(Q.__renderTarget=v,!jt.__hasExternalTextures){const pt=Math.max(1,v.width>>W),Tt=Math.max(1,v.height>>W);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,W,ft,pt,Tt,v.depth,0,xt,rt,null):e.texImage2D(J,W,ft,pt,Tt,0,xt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Ht(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,Q.__webglTexture,0,zt(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,Q.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(A,v,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),v.depthBuffer){const K=v.depthTexture,J=K&&K.isDepthTexture?K.type:null,W=y(v.stencilBuffer,J),xt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=zt(v);Ht(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,W,v.width,v.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,W,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,W,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,A)}else{const K=v.textures;for(let J=0;J<K.length;J++){const W=K[J],xt=a.convert(W.format,W.colorSpace),rt=a.convert(W.type),ft=E(W.internalFormat,xt,rt,W.colorSpace),jt=zt(v);B&&Ht(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,ft,v.width,v.height):Ht(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,ft,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ft,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const J=K.__webglTexture,W=zt(v);if(v.depthTexture.format===Di)Ht(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===Gi)Ht(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Lt(A){const v=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=K}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(v.__webglFramebuffer,A)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=s.createRenderbuffer(),at(v.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,W)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),at(v.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(A,v,B){const K=n.get(A);v!==void 0&&yt(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Lt(A)}function ce(A){const v=A.texture,B=n.get(A),K=n.get(v);A.addEventListener("dispose",S);const J=A.textures,W=A.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=v.version,r.memory.textures++),W){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let ft=0;ft<v.mipmaps.length;ft++)B.__webglFramebuffer[rt][ft]=s.createFramebuffer()}else B.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)B.__webglFramebuffer[rt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xt)for(let rt=0,ft=J.length;rt<ft;rt++){const jt=n.get(J[rt]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Ht(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const ft=J[rt];B.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const jt=a.convert(ft.format,ft.colorSpace),Q=a.convert(ft.type),pt=E(ft.internalFormat,jt,Q,ft.colorSpace,A.isXRRenderTarget===!0),Tt=zt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,pt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),at(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)yt(B.__webglFramebuffer[rt][ft],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft);else yt(B.__webglFramebuffer[rt],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,ft=J.length;rt<ft;rt++){const jt=J[rt],Q=n.get(jt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ft(s.TEXTURE_2D,jt),yt(B.__webglFramebuffer,A,jt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),Ft(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)yt(B.__webglFramebuffer[ft],A,v,s.COLOR_ATTACHMENT0,rt,ft);else yt(B.__webglFramebuffer,A,v,s.COLOR_ATTACHMENT0,rt,0);m(v)&&f(rt),e.unbindTexture()}A.depthBuffer&&Lt(A)}function $t(A){const v=A.textures;for(let B=0,K=v.length;B<K;B++){const J=v[B];if(m(J)){const W=M(A),xt=n.get(J).__webglTexture;e.bindTexture(W,xt),f(W),e.unbindTexture()}}}const ue=[],F=[];function Be(A){if(A.samples>0){if(Ht(A)===!1){const v=A.textures,B=A.width,K=A.height;let J=s.COLOR_BUFFER_BIT;const W=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(A),rt=v.length>1;if(rt)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const jt=n.get(v[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,J,s.NEAREST),l===!0&&(ue.length=0,F.length=0,ue.push(s.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(W),F.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const jt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function zt(A){return Math.min(i.maxSamples,A.samples)}function Ht(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Et(A){const v=r.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ae(A,v){const B=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Xi&&B!==zn&&(Gt.getTransfer(B)===Zt?(K!==Je||J!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=Nt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ht}function ng(s,t){function e(n,i=zn){let a;const r=Gt.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===To)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return s.BYTE;if(n===Wc)return s.SHORT;if(n===ws)return s.UNSIGNED_SHORT;if(n===Eo)return s.INT;if(n===li)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===Rs)return s.HALF_FLOAT;if(n===qc)return s.ALPHA;if(n===Kc)return s.RGB;if(n===Je)return s.RGBA;if(n===Yc)return s.LUMINANCE;if(n===Jc)return s.LUMINANCE_ALPHA;if(n===Di)return s.DEPTH_COMPONENT;if(n===Gi)return s.DEPTH_STENCIL;if(n===Zc)return s.RED;if(n===Ro)return s.RED_INTEGER;if(n===Qc)return s.RG;if(n===Co)return s.RG_INTEGER;if(n===Lo)return s.RGBA_INTEGER;if(n===ua||n===da||n===fa||n===pa)if(r===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Br||n===Or||n===zr||n===Hr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Br)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Or)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vr||n===$r||n===jr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Vr||n===$r)return r===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===jr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gr||n===Wr||n===Xr||n===qr||n===Kr||n===Yr||n===Jr||n===Zr||n===Qr||n===to||n===eo||n===no||n===io||n===so)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Gr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===ao||n===ro)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===ma)return r===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===th||n===oo||n===lo||n===co)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===ma)return a.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class ig extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:ag,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lg extends qi{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new og,m=e.getContextAttributes();let f=null,M=null;const E=[],y=[],U=new ct;let T=null;const S=new Ne;S.viewport=new te;const P=new Ne;P.viewport=new te;const w=[S,P],b=new ig;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=E[X];return et===void 0&&(et=new ar,E[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=E[X];return et===void 0&&(et=new ar,E[X]=et),et.getGripSpace()},this.getHand=function(X){let et=E[X];return et===void 0&&(et=new ar,E[X]=et),et.getHandSpace()};function N(X){const et=y.indexOf(X.inputSource);if(et===-1)return;const yt=E[et];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||r),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",q);for(let X=0;X<E.length;X++){const et=y[X];et!==null&&(y[X]=null,E[X].disconnect(et))}L=null,z=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,M=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",$),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(U),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ci(p.framebufferWidth,p.framebufferHeight,{format:Je,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,yt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Gi:Di,yt=m.stencil?ji:li);const At={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:a};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ci(d.textureWidth,d.textureHeight,{format:Je,type:Tn,depthTexture:new mh(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let et=0;et<X.removed.length;et++){const yt=X.removed[et],at=y.indexOf(yt);at>=0&&(y[at]=null,E[at].disconnect(yt))}for(let et=0;et<X.added.length;et++){const yt=X.added[et];let at=y.indexOf(yt);if(at===-1){for(let Lt=0;Lt<E.length;Lt++)if(Lt>=y.length){y.push(yt),at=Lt;break}else if(y[Lt]===null){y[Lt]=yt,at=Lt;break}if(at===-1)break}const At=E[at];At&&At.connect(yt)}}const O=new R,Z=new R;function j(X,et,yt){O.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const at=O.distanceTo(Z),At=et.projectionMatrix.elements,Lt=yt.projectionMatrix.elements,Nt=At[14]/(At[10]-1),ce=At[14]/(At[10]+1),$t=(At[9]+1)/At[5],ue=(At[9]-1)/At[5],F=(At[8]-1)/At[0],Be=(Lt[8]+1)/Lt[0],zt=Nt*F,Ht=Nt*Be,Et=at/(-F+Be),ae=Et*-F;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ae),X.translateZ(Et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),At[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const wt=Nt+Et,A=ce+Et,v=zt-ae,B=Ht+(at-ae),K=$t*ce/A*wt,J=ue*ce/A*wt;X.projectionMatrix.makePerspective(v,B,K,J,wt,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function nt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,yt=X.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),b.near=P.near=S.near=et,b.far=P.far=S.far=yt,(L!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,z=b.far),S.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,b.layers.mask=S.layers.mask|P.layers.mask;const at=X.parent,At=b.cameras;nt(b,at);for(let Lt=0;Lt<At.length;Lt++)nt(At[Lt],at);At.length===2?j(b,S,P):b.projectionMatrix.copy(S.projectionMatrix),ht(X,b,at)};function ht(X,et,yt){yt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Es*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let St=null;function Ft(X,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let at=!1;yt.length!==b.cameras.length&&(b.cameras.length=0,at=!0);for(let Lt=0;Lt<yt.length;Lt++){const Nt=yt[Lt];let ce=null;if(p!==null)ce=p.getViewport(Nt);else{const ue=u.getViewSubImage(d,Nt);ce=ue.viewport,Lt===0&&(t.setRenderTargetTextures(M,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(M))}let $t=w[Lt];$t===void 0&&($t=new Ne,$t.layers.enable(Lt),$t.viewport=new te,w[Lt]=$t),$t.matrix.fromArray(Nt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Nt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ce.x,ce.y,ce.width,ce.height),Lt===0&&(b.matrix.copy($t.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),at===!0&&b.cameras.push($t)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Lt=u.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,i.renderState)}}for(let yt=0;yt<E.length;yt++){const at=y[yt],At=E[yt];at!==null&&At!==void 0&&At.update(at,et,c||r)}St&&St(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ee=new fh;ee.setAnimationLoop(Ft),this.setAnimationLoop=function(X){St=X},this.dispose=function(){}}}const ti=new hn,cg=new se;function hg(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),E=M.envMap,y=M.envMapRotation;E&&(m.envMap.value=E,ti.copy(y),ti.x*=-1,ti.y*=-1,ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(ti)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ug(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const y=E.program;n.uniformBlockBinding(M,y)}function c(M,E){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const U=E.program;n.updateUBOMapping(M,U);const T=t.render.frame;a[M.id]!==T&&(d(M),a[M.id]=T)}function h(M){const E=u();M.__bindingPointIndex=E;const y=s.createBuffer(),U=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,U,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}function u(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=i[M.id],y=M.uniforms,U=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let T=0,S=y.length;T<S;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,b=P.length;w<b;w++){const L=P[w];if(p(L,T,w,U)===!0){const z=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let q=0;q<N.length;q++){const O=N[q],Z=_(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,z+$,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,$),$+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,E,y,U){const T=M.value,S=E+"_"+y;if(U[S]===void 0)return typeof T=="number"||typeof T=="boolean"?U[S]=T:U[S]=T.clone(),!0;{const P=U[S];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return U[S]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){const E=M.uniforms;let y=0;const U=16;for(let S=0,P=E.length;S<P;S++){const w=Array.isArray(E[S])?E[S]:[E[S]];for(let b=0,L=w.length;b<L;b++){const z=w[b],N=Array.isArray(z.value)?z.value:[z.value];for(let $=0,q=N.length;$<q;$++){const O=N[$],Z=_(O),j=y%U,nt=j%Z.boundary,ht=j+nt;y+=nt,ht!==0&&U-ht<Z.storage&&(y+=U-ht),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Z.storage}}}const T=y%U;return T>0&&(y+=U-T),M.__size=y,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const y=r.indexOf(E.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete a[E.id]}function f(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},a={}}return{bind:l,update:c,dispose:f}}class dg{constructor(t={}){const{canvas:e=Qu(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this.toneMapping=$n,this.toneMappingExposure=1;const y=this;let U=!1,T=0,S=0,P=null,w=-1,b=null;const L=new te,z=new te;let N=null;const $=new Ot(0);let q=0,O=e.width,Z=e.height,j=1,nt=null,ht=null;const St=new te(0,0,O,Z),Ft=new te(0,0,O,Z);let ee=!1;const X=new ko;let et=!1,yt=!1;const at=new se,At=new se,Lt=new R,Nt=new te,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function ue(){return P===null?j:1}let F=n;function Be(x,k){return e.getContext(x,k)}try{const x={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ot,!1),F===null){const k="webgl2";if(F=Be(k,x),F===null)throw Be(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let zt,Ht,Et,ae,wt,A,v,B,K,J,W,xt,rt,ft,jt,Q,pt,Tt,Rt,mt,Vt,kt,ne,D;function st(){zt=new _m(F),zt.init(),kt=new ng(F,zt),Ht=new um(F,zt,t,kt),Et=new Q0(F,zt),Ht.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),ae=new bm(F),wt=new B0,A=new eg(F,zt,Et,wt,Ht,kt,ae),v=new fm(y),B=new gm(y),K=new Td(F),ne=new cm(F,K),J=new vm(F,K,ae,ne),W=new Mm(F,J,K,ae),Rt=new xm(F,Ht,A),Q=new dm(wt),xt=new N0(y,v,B,zt,Ht,ne,Q),rt=new hg(y,wt),ft=new z0,jt=new W0(zt),Tt=new lm(y,v,B,Et,W,p,l),pt=new J0(y,W,Ht),D=new ug(F,ae,Ht,Et),mt=new hm(F,zt,ae),Vt=new ym(F,zt,ae),ae.programs=xt.programs,y.capabilities=Ht,y.extensions=zt,y.properties=wt,y.renderLists=ft,y.shadowMap=pt,y.state=Et,y.info=ae}st();const G=new lg(y,F);this.xr=G,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=zt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=zt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(O,Z,!1))},this.getSize=function(x){return x.set(O,Z)},this.setSize=function(x,k,H=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=x,Z=k,e.width=Math.floor(x*j),e.height=Math.floor(k*j),H===!0&&(e.style.width=x+"px",e.style.height=k+"px"),this.setViewport(0,0,x,k)},this.getDrawingBufferSize=function(x){return x.set(O*j,Z*j).floor()},this.setDrawingBufferSize=function(x,k,H){O=x,Z=k,j=H,e.width=Math.floor(x*H),e.height=Math.floor(k*H),this.setViewport(0,0,x,k)},this.getCurrentViewport=function(x){return x.copy(L)},this.getViewport=function(x){return x.copy(St)},this.setViewport=function(x,k,H,V){x.isVector4?St.set(x.x,x.y,x.z,x.w):St.set(x,k,H,V),Et.viewport(L.copy(St).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Ft)},this.setScissor=function(x,k,H,V){x.isVector4?Ft.set(x.x,x.y,x.z,x.w):Ft.set(x,k,H,V),Et.scissor(z.copy(Ft).multiplyScalar(j).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(x){Et.setScissorTest(ee=x)},this.setOpaqueSort=function(x){nt=x},this.setTransparentSort=function(x){ht=x},this.getClearColor=function(x){return x.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(x=!0,k=!0,H=!0){let V=0;if(x){let I=!1;if(P!==null){const tt=P.texture.format;I=tt===Lo||tt===Co||tt===Ro}if(I){const tt=P.texture.type,lt=tt===Tn||tt===li||tt===ws||tt===ji||tt===To||tt===Ao,gt=Tt.getClearColor(),_t=Tt.getClearAlpha(),Ct=gt.r,Ut=gt.g,vt=gt.b;lt?(g[0]=Ct,g[1]=Ut,g[2]=vt,g[3]=_t,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Ct,_[1]=Ut,_[2]=vt,_[3]=_t,F.clearBufferiv(F.COLOR,0,_))}else V|=F.COLOR_BUFFER_BIT}k&&(V|=F.DEPTH_BUFFER_BIT),H&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ft.dispose(),jt.dispose(),wt.dispose(),v.dispose(),B.dispose(),W.dispose(),ne.dispose(),D.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",qo),G.removeEventListener("sessionend",Ko),qn.stop()};function Y(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const x=ae.autoReset,k=pt.enabled,H=pt.autoUpdate,V=pt.needsUpdate,I=pt.type;st(),ae.autoReset=x,pt.enabled=k,pt.autoUpdate=H,pt.needsUpdate=V,pt.type=I}function ot(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Pt(x){const k=x.target;k.removeEventListener("dispose",Pt),he(k)}function he(x){xe(x),wt.remove(x)}function xe(x){const k=wt.get(x).programs;k!==void 0&&(k.forEach(function(H){xt.releaseProgram(H)}),x.isShaderMaterial&&xt.releaseShaderCache(x))}this.renderBufferDirect=function(x,k,H,V,I,tt){k===null&&(k=ce);const lt=I.isMesh&&I.matrixWorld.determinant()<0,gt=Gh(x,k,H,V,I);Et.setMaterial(V,lt);let _t=H.index,Ct=1;if(V.wireframe===!0){if(_t=J.getWireframeAttribute(H),_t===void 0)return;Ct=2}const Ut=H.drawRange,vt=H.attributes.position;let Wt=Ut.start*Ct,ie=(Ut.start+Ut.count)*Ct;tt!==null&&(Wt=Math.max(Wt,tt.start*Ct),ie=Math.min(ie,(tt.start+tt.count)*Ct)),_t!==null?(Wt=Math.max(Wt,0),ie=Math.min(ie,_t.count)):vt!=null&&(Wt=Math.max(Wt,0),ie=Math.min(ie,vt.count));const re=ie-Wt;if(re<0||re===1/0)return;ne.setup(I,V,gt,H,_t);let Ce,qt=mt;if(_t!==null&&(Ce=K.get(_t),qt=Vt,qt.setIndex(Ce)),I.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*ue()),qt.setMode(F.LINES)):qt.setMode(F.TRIANGLES);else if(I.isLine){let Mt=V.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*ue()),I.isLineSegments?qt.setMode(F.LINES):I.isLineLoop?qt.setMode(F.LINE_LOOP):qt.setMode(F.LINE_STRIP)}else I.isPoints?qt.setMode(F.POINTS):I.isSprite&&qt.setMode(F.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)qt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))qt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Mt=I._multiDrawStarts,fn=I._multiDrawCounts,Kt=I._multiDrawCount,Ge=_t?K.get(_t).bytesPerElement:1,ui=wt.get(V).currentProgram.getUniforms();for(let ke=0;ke<Kt;ke++)ui.setValue(F,"_gl_DrawID",ke),qt.render(Mt[ke]/Ge,fn[ke])}else if(I.isInstancedMesh)qt.renderInstances(Wt,re,I.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,fn=Math.min(H.instanceCount,Mt);qt.renderInstances(Wt,re,fn)}else qt.render(Wt,re)};function Yt(x,k,H){x.transparent===!0&&x.side===Ve&&x.forceSinglePass===!1?(x.side=Ue,x.needsUpdate=!0,Us(x,k,H),x.side=Wn,x.needsUpdate=!0,Us(x,k,H),x.side=Ve):Us(x,k,H)}this.compile=function(x,k,H=null){H===null&&(H=x),f=jt.get(H),f.init(k),E.push(f),H.traverseVisible(function(I){I.isLight&&I.layers.test(k.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),x!==H&&x.traverseVisible(function(I){I.isLight&&I.layers.test(k.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const V=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const tt=I.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const gt=tt[lt];Yt(gt,H,I),V.add(gt)}else Yt(tt,H,I),V.add(tt)}),E.pop(),f=null,V},this.compileAsync=function(x,k,H=null){const V=this.compile(x,k,H);return new Promise(I=>{function tt(){if(V.forEach(function(lt){wt.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){I(x);return}setTimeout(tt,10)}zt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let je=null;function dn(x){je&&je(x)}function qo(){qn.stop()}function Ko(){qn.start()}const qn=new fh;qn.setAnimationLoop(dn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(x){je=x,G.setAnimationLoop(x),x===null?qn.stop():qn.start()},G.addEventListener("sessionstart",qo),G.addEventListener("sessionend",Ko),this.render=function(x,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(k),k=G.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,k,P),f=jt.get(x,E.length),f.init(k),E.push(f),At.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X.setFromProjectionMatrix(At),yt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,yt),m=ft.get(x,M.length),m.init(),M.push(m),G.enabled===!0&&G.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&Pa(tt,k,-1/0,y.sortObjects)}Pa(x,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(nt,ht),$t=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,$t&&Tt.addToRenderList(m,x),this.info.render.frame++,et===!0&&Q.beginShadows();const H=f.state.shadowsArray;pt.render(H,x,k),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,I=m.transmissive;if(f.setupLights(),k.isArrayCamera){const tt=k.cameras;if(I.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];Jo(V,I,x,_t)}$t&&Tt.render(x);for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];Yo(m,x,_t,_t.viewport)}}else I.length>0&&Jo(V,I,x,k),$t&&Tt.render(x),Yo(m,x,k);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(y,x,k),ne.resetDefaultState(),w=-1,b=null,E.pop(),E.length>0?(f=E[E.length-1],et===!0&&Q.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Pa(x,k,H,V){if(x.visible===!1)return;if(x.layers.test(k.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(k);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){V&&Nt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(At);const lt=W.update(x),gt=x.material;gt.visible&&m.push(x,lt,gt,H,Nt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||X.intersectsObject(x))){const lt=W.update(x),gt=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Nt.copy(x.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Nt.copy(lt.boundingSphere.center)),Nt.applyMatrix4(x.matrixWorld).applyMatrix4(At)),Array.isArray(gt)){const _t=lt.groups;for(let Ct=0,Ut=_t.length;Ct<Ut;Ct++){const vt=_t[Ct],Wt=gt[vt.materialIndex];Wt&&Wt.visible&&m.push(x,lt,Wt,H,Nt.z,vt)}}else gt.visible&&m.push(x,lt,gt,H,Nt.z,null)}}const tt=x.children;for(let lt=0,gt=tt.length;lt<gt;lt++)Pa(tt[lt],k,H,V)}function Yo(x,k,H,V){const I=x.opaque,tt=x.transmissive,lt=x.transparent;f.setupLightsView(H),et===!0&&Q.setGlobalState(y.clippingPlanes,H),V&&Et.viewport(L.copy(V)),I.length>0&&Ps(I,k,H),tt.length>0&&Ps(tt,k,H),lt.length>0&&Ps(lt,k,H),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Jo(x,k,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new ci(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Rs:Tn,minFilter:oi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[V.id],lt=V.viewport||L;tt.setSize(lt.z,lt.w);const gt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor($),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),$t&&Tt.render(H);const _t=y.toneMapping;y.toneMapping=$n;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),et===!0&&Q.setGlobalState(y.clippingPlanes,V),Ps(x,H,V),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let vt=0,Wt=k.length;vt<Wt;vt++){const ie=k[vt],re=ie.object,Ce=ie.geometry,qt=ie.material,Mt=ie.group;if(qt.side===Ve&&re.layers.test(V.layers)){const fn=qt.side;qt.side=Ue,qt.needsUpdate=!0,Zo(re,H,V,Ce,qt,Mt),qt.side=fn,qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}y.setRenderTarget(gt),y.setClearColor($,q),Ct!==void 0&&(V.viewport=Ct),y.toneMapping=_t}function Ps(x,k,H){const V=k.isScene===!0?k.overrideMaterial:null;for(let I=0,tt=x.length;I<tt;I++){const lt=x[I],gt=lt.object,_t=lt.geometry,Ct=V===null?lt.material:V,Ut=lt.group;gt.layers.test(H.layers)&&Zo(gt,k,H,_t,Ct,Ut)}}function Zo(x,k,H,V,I,tt){x.onBeforeRender(y,k,H,V,I,tt),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(y,k,H,V,x,tt),I.transparent===!0&&I.side===Ve&&I.forceSinglePass===!1?(I.side=Ue,I.needsUpdate=!0,y.renderBufferDirect(H,k,V,I,x,tt),I.side=Wn,I.needsUpdate=!0,y.renderBufferDirect(H,k,V,I,x,tt),I.side=Ve):y.renderBufferDirect(H,k,V,I,x,tt),x.onAfterRender(y,k,H,V,I,tt)}function Us(x,k,H){k.isScene!==!0&&(k=ce);const V=wt.get(x),I=f.state.lights,tt=f.state.shadowsArray,lt=I.state.version,gt=xt.getParameters(x,I.state,tt,k,H),_t=xt.getProgramCacheKey(gt);let Ct=V.programs;V.environment=x.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(x.isMeshStandardMaterial?B:v).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?k.environmentRotation:x.envMapRotation,Ct===void 0&&(x.addEventListener("dispose",Pt),Ct=new Map,V.programs=Ct);let Ut=Ct.get(_t);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===lt)return tl(x,gt),Ut}else gt.uniforms=xt.getUniforms(x),x.onBeforeCompile(gt,y),Ut=xt.acquireProgram(gt,_t),Ct.set(_t,Ut),V.uniforms=gt.uniforms;const vt=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(vt.clippingPlanes=Q.uniform),tl(x,gt),V.needsLights=Xh(x),V.lightsStateVersion=lt,V.needsLights&&(vt.ambientLightColor.value=I.state.ambient,vt.lightProbe.value=I.state.probe,vt.directionalLights.value=I.state.directional,vt.directionalLightShadows.value=I.state.directionalShadow,vt.spotLights.value=I.state.spot,vt.spotLightShadows.value=I.state.spotShadow,vt.rectAreaLights.value=I.state.rectArea,vt.ltc_1.value=I.state.rectAreaLTC1,vt.ltc_2.value=I.state.rectAreaLTC2,vt.pointLights.value=I.state.point,vt.pointLightShadows.value=I.state.pointShadow,vt.hemisphereLights.value=I.state.hemi,vt.directionalShadowMap.value=I.state.directionalShadowMap,vt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,vt.spotShadowMap.value=I.state.spotShadowMap,vt.spotLightMatrix.value=I.state.spotLightMatrix,vt.spotLightMap.value=I.state.spotLightMap,vt.pointShadowMap.value=I.state.pointShadowMap,vt.pointShadowMatrix.value=I.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function Qo(x){if(x.uniformsList===null){const k=x.currentProgram.getUniforms();x.uniformsList=ga.seqWithValue(k.seq,x.uniforms)}return x.uniformsList}function tl(x,k){const H=wt.get(x);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Gh(x,k,H,V,I){k.isScene!==!0&&(k=ce),A.resetTextureUnits();const tt=k.fog,lt=V.isMeshStandardMaterial?k.environment:null,gt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xi,_t=(V.isMeshStandardMaterial?B:v).get(V.envMap||lt),Ct=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),vt=!!H.morphAttributes.position,Wt=!!H.morphAttributes.normal,ie=!!H.morphAttributes.color;let re=$n;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(re=y.toneMapping);const Ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qt=Ce!==void 0?Ce.length:0,Mt=wt.get(V),fn=f.state.lights;if(et===!0&&(yt===!0||x!==b)){const Oe=x===b&&V.id===w;Q.setState(V,x,Oe)}let Kt=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==fn.state.version||Mt.outputColorSpace!==gt||I.isBatchedMesh&&Mt.batching===!1||!I.isBatchedMesh&&Mt.batching===!0||I.isBatchedMesh&&Mt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Mt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Mt.instancing===!1||!I.isInstancedMesh&&Mt.instancing===!0||I.isSkinnedMesh&&Mt.skinning===!1||!I.isSkinnedMesh&&Mt.skinning===!0||I.isInstancedMesh&&Mt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Mt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Mt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Mt.instancingMorph===!1&&I.morphTexture!==null||Mt.envMap!==_t||V.fog===!0&&Mt.fog!==tt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Ct||Mt.vertexTangents!==Ut||Mt.morphTargets!==vt||Mt.morphNormals!==Wt||Mt.morphColors!==ie||Mt.toneMapping!==re||Mt.morphTargetsCount!==qt)&&(Kt=!0):(Kt=!0,Mt.__version=V.version);let Ge=Mt.currentProgram;Kt===!0&&(Ge=Us(V,k,I));let ui=!1,ke=!1,Zi=!1;const oe=Ge.getUniforms(),en=Mt.uniforms;if(Et.useProgram(Ge.program)&&(ui=!0,ke=!0,Zi=!0),V.id!==w&&(w=V.id,ke=!0),ui||b!==x){Et.buffers.depth.getReversed()?(at.copy(x.projectionMatrix),ed(at),nd(at),oe.setValue(F,"projectionMatrix",at)):oe.setValue(F,"projectionMatrix",x.projectionMatrix),oe.setValue(F,"viewMatrix",x.matrixWorldInverse);const An=oe.map.cameraPosition;An!==void 0&&An.setValue(F,Lt.setFromMatrixPosition(x.matrixWorld)),Ht.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,ke=!0,Zi=!0)}if(I.isSkinnedMesh){oe.setOptional(F,I,"bindMatrix"),oe.setOptional(F,I,"bindMatrixInverse");const Oe=I.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),oe.setValue(F,"boneTexture",Oe.boneTexture,A))}I.isBatchedMesh&&(oe.setOptional(F,I,"batchingTexture"),oe.setValue(F,"batchingTexture",I._matricesTexture,A),oe.setOptional(F,I,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",I._indirectTexture,A),oe.setOptional(F,I,"batchingColorTexture"),I._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",I._colorsTexture,A));const Qi=H.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Rt.update(I,H,Ge),(ke||Mt.receiveShadow!==I.receiveShadow)&&(Mt.receiveShadow=I.receiveShadow,oe.setValue(F,"receiveShadow",I.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(en.envMap.value=_t,en.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),ke&&(oe.setValue(F,"toneMappingExposure",y.toneMappingExposure),Mt.needsLights&&Wh(en,Zi),tt&&V.fog===!0&&rt.refreshFogUniforms(en,tt),rt.refreshMaterialUniforms(en,V,j,Z,f.state.transmissionRenderTarget[x.id]),ga.upload(F,Qo(Mt),en,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ga.upload(F,Qo(Mt),en,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(F,"center",I.center),oe.setValue(F,"modelViewMatrix",I.modelViewMatrix),oe.setValue(F,"normalMatrix",I.normalMatrix),oe.setValue(F,"modelMatrix",I.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Oe=V.uniformsGroups;for(let An=0,Rn=Oe.length;An<Rn;An++){const el=Oe[An];D.update(el,Ge),D.bind(el,Ge)}}return Ge}function Wh(x,k){x.ambientLightColor.needsUpdate=k,x.lightProbe.needsUpdate=k,x.directionalLights.needsUpdate=k,x.directionalLightShadows.needsUpdate=k,x.pointLights.needsUpdate=k,x.pointLightShadows.needsUpdate=k,x.spotLights.needsUpdate=k,x.spotLightShadows.needsUpdate=k,x.rectAreaLights.needsUpdate=k,x.hemisphereLights.needsUpdate=k}function Xh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,k,H){wt.get(x.texture).__webglTexture=k,wt.get(x.depthTexture).__webglTexture=H;const V=wt.get(x);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,k){const H=wt.get(x);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(x,k=0,H=0){P=x,T=k,S=H;let V=!0,I=null,tt=!1,lt=!1;if(x){const _t=wt.get(x);if(_t.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(x);else if(_t.__hasExternalTextures)A.rebindTextures(x,wt.get(x.texture).__webglTexture,wt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const vt=x.depthTexture;if(_t.__boundDepthTexture!==vt){if(vt!==null&&wt.has(vt)&&(x.width!==vt.image.width||x.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(x)}}const Ct=x.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);const Ut=wt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ut[k])?I=Ut[k][H]:I=Ut[k],tt=!0):x.samples>0&&A.useMultisampledRTT(x)===!1?I=wt.get(x).__webglMultisampledFramebuffer:Array.isArray(Ut)?I=Ut[H]:I=Ut,L.copy(x.viewport),z.copy(x.scissor),N=x.scissorTest}else L.copy(St).multiplyScalar(j).floor(),z.copy(Ft).multiplyScalar(j).floor(),N=ee;if(Et.bindFramebuffer(F.FRAMEBUFFER,I)&&V&&Et.drawBuffers(x,I),Et.viewport(L),Et.scissor(z),Et.setScissorTest(N),tt){const _t=wt.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,_t.__webglTexture,H)}else if(lt){const _t=wt.get(x.texture),Ct=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,H||0,Ct)}w=-1},this.readRenderTargetPixels=function(x,k,H,V,I,tt,lt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=wt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){Et.bindFramebuffer(F.FRAMEBUFFER,gt);try{const _t=x.texture,Ct=_t.format,Ut=_t.type;if(!Ht.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=x.width-V&&H>=0&&H<=x.height-I&&F.readPixels(k,H,V,I,kt.convert(Ct),kt.convert(Ut),tt)}finally{const _t=P!==null?wt.get(P).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(x,k,H,V,I,tt,lt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=wt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const _t=x.texture,Ct=_t.format,Ut=_t.type;if(!Ht.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=x.width-V&&H>=0&&H<=x.height-I){Et.bindFramebuffer(F.FRAMEBUFFER,gt);const vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels(k,H,V,I,kt.convert(Ct),kt.convert(Ut),0);const Wt=P!==null?wt.get(P).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,Wt);const ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await td(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.deleteBuffer(vt),F.deleteSync(ie),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,k=null,H=0){x.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1]);const V=Math.pow(2,-H),I=Math.floor(x.image.width*V),tt=Math.floor(x.image.height*V),lt=k!==null?k.x:0,gt=k!==null?k.y:0;A.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,lt,gt,I,tt),Et.unbindTexture()},this.copyTextureToTexture=function(x,k,H=null,V=null,I=0){x.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,x=arguments[1],k=arguments[2],I=arguments[3]||0,H=null);let tt,lt,gt,_t,Ct,Ut,vt,Wt,ie;const re=x.isCompressedTexture?x.mipmaps[I]:x.image;H!==null?(tt=H.max.x-H.min.x,lt=H.max.y-H.min.y,gt=H.isBox3?H.max.z-H.min.z:1,_t=H.min.x,Ct=H.min.y,Ut=H.isBox3?H.min.z:0):(tt=re.width,lt=re.height,gt=re.depth||1,_t=0,Ct=0,Ut=0),V!==null?(vt=V.x,Wt=V.y,ie=V.z):(vt=0,Wt=0,ie=0);const Ce=kt.convert(k.format),qt=kt.convert(k.type);let Mt;k.isData3DTexture?(A.setTexture3D(k,0),Mt=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),Mt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),Mt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const fn=F.getParameter(F.UNPACK_ROW_LENGTH),Kt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ge=F.getParameter(F.UNPACK_SKIP_PIXELS),ui=F.getParameter(F.UNPACK_SKIP_ROWS),ke=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,re.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ut);const Zi=x.isDataArrayTexture||x.isData3DTexture,oe=k.isDataArrayTexture||k.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const en=wt.get(x),Qi=wt.get(k),Oe=wt.get(en.__renderTarget),An=wt.get(Qi.__renderTarget);Et.bindFramebuffer(F.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Rn=0;Rn<gt;Rn++)Zi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(x).__webglTexture,I,Ut+Rn),x.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(k).__webglTexture,I,ie+Rn),F.blitFramebuffer(_t,Ct,tt,lt,vt,Wt,tt,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(Mt,I,vt,Wt,ie+Rn,_t,Ct,tt,lt):F.copyTexSubImage2D(Mt,I,vt,Wt,ie+Rn,_t,Ct,tt,lt);Et.bindFramebuffer(F.READ_FRAMEBUFFER,null),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(Mt,I,vt,Wt,ie,tt,lt,gt,Ce,qt,re.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,I,vt,Wt,ie,tt,lt,gt,Ce,re.data):F.texSubImage3D(Mt,I,vt,Wt,ie,tt,lt,gt,Ce,qt,re):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,I,vt,Wt,tt,lt,Ce,qt,re.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,I,vt,Wt,re.width,re.height,Ce,re.data):F.texSubImage2D(F.TEXTURE_2D,I,vt,Wt,tt,lt,Ce,qt,re);F.pixelStorei(F.UNPACK_ROW_LENGTH,fn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Kt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ge),F.pixelStorei(F.UNPACK_SKIP_ROWS,ui),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ke),I===0&&k.generateMipmaps&&F.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(x,k,H=null,V=null,I=0){return x.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,x=arguments[2],k=arguments[3],I=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,k,H,V,I)},this.initRenderTarget=function(x){wt.get(x).__webglFramebuffer===void 0&&A.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?A.setTextureCube(x,0):x.isData3DTexture?A.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?A.setTexture2DArray(x,0):A.setTexture2D(x,0),Et.unbindTexture()},this.resetState=function(){T=0,S=0,P=null,Et.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}class ri{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new ri(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fg extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ho,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,a=this.stride;i<a;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new R;class Sa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ye(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ye(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ye(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ye(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),a=Jt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return new Qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wa extends Ki{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ti;const ss=new R,Ai=new R,Ri=new R,Ci=new ct,as=new ct,bh=new se,ta=new R,rs=new R,ea=new R,tc=new ct,rr=new ct,ec=new ct;class Ea extends ye{constructor(t=new wa){if(super(),this.isSprite=!0,this.type="Sprite",Ti===void 0){Ti=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pg(e,5);Ti.setIndex([0,1,2,0,2,3]),Ti.setAttribute("position",new Sa(n,3,0,!1)),Ti.setAttribute("uv",new Sa(n,2,3,!1))}this.geometry=Ti,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ri.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-Ri.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;na(ta.set(-.5,-.5,0),Ri,r,Ai,i,a),na(rs.set(.5,-.5,0),Ri,r,Ai,i,a),na(ea.set(.5,.5,0),Ri,r,Ai,i,a),tc.set(0,0),rr.set(1,0),ec.set(1,1);let o=t.ray.intersectTriangle(ta,rs,ea,!1,ss);if(o===null&&(na(rs.set(-.5,.5,0),Ri,r,Ai,i,a),rr.set(0,1),o=t.ray.intersectTriangle(ta,ea,rs,!1,ss),o===null))return;const l=t.ray.origin.distanceTo(ss);l<t.near||l>t.far||e.push({distance:l,point:ss.clone(),uv:$e.getInterpolation(ss,ta,rs,ea,tc,rr,ec,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function na(s,t,e,n,i,a){Ci.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(as.x=a*Ci.x-i*Ci.y,as.y=i*Ci.x+a*Ci.y):as.copy(Ci),s.copy(t),s.x+=as.x,s.y+=as.y,s.applyMatrix4(bh)}class xh extends Te{constructor(t,e,n,i,a,r,o,l,c){super(t,e,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(a-1);const h=n[i],d=n[i+1]-h,p=(r-h)/d;return(i+p)/(a-1)}getTangent(t,e){let i=t-1e-4,a=t+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),l=e||(r.isVector2?new ct:new R);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],a=[],r=[],o=new R,l=new se;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new R)}a[0]=new R,r[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ve(i[p-1].dot(i[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(i[p],a[p])}if(e===!0){let p=Math.acos(ve(a[0].dot(a[t]),-1,1));p/=t,i[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],a[g])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fo extends un{constructor(t=0,e=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mg extends Fo{constructor(t,e,n,i,a,r){super(t,e,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function No(){let s=0,t=0,e=0,n=0;function i(a,r,o,l){s=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){i(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,u){let d=(r-a)/c-(o-a)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+u)+(l-o)/u;d*=h,p*=h,i(r,o,d,p)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+n*o}}}const ia=new R,or=new No,lr=new No,cr=new No;class gg extends un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,a=i.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%a]:(ia.subVectors(i[0],i[1]).add(i[0]),c=ia);const u=i[o%a],d=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(ia.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=ia),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),or.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),lr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),cr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(or.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(or.calc(l),lr.calc(l),cr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nc(s,t,e,n,i){const a=(n-t)*.5,r=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*s+e}function _g(s,t){const e=1-s;return e*e*t}function vg(s,t){return 2*(1-s)*s*t}function yg(s,t){return s*s*t}function ms(s,t,e,n){return _g(s,t)+vg(s,e)+yg(s,n)}function bg(s,t){const e=1-s;return e*e*e*t}function xg(s,t){const e=1-s;return 3*e*e*s*t}function Mg(s,t){return 3*(1-s)*s*s*t}function Sg(s,t){return s*s*s*t}function gs(s,t,e,n,i){return bg(s,t)+xg(s,e)+Mg(s,n)+Sg(s,i)}class Mh extends un{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(gs(t,i.x,a.x,r.x,o.x),gs(t,i.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wg extends un{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(gs(t,i.x,a.x,r.x,o.x),gs(t,i.y,a.y,r.y,o.y),gs(t,i.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sh extends un{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eg extends un{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wh extends un{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(ms(t,i.x,a.x,r.x),ms(t,i.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tg extends un{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(ms(t,i.x,a.x,r.x),ms(t,i.y,a.y,r.y),ms(t,i.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,a=(i.length-1)*t,r=Math.floor(a),o=a-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(nc(o,l.x,c.x,h.x,u.x),nc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var ic=Object.freeze({__proto__:null,ArcCurve:mg,CatmullRomCurve3:gg,CubicBezierCurve:Mh,CubicBezierCurve3:wg,EllipseCurve:Fo,LineCurve:Sh,LineCurve3:Eg,QuadraticBezierCurve:wh,QuadraticBezierCurve3:Tg,SplineCurve:Eh});class Ag extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ic[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const r=i[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const r=a[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ic[i.type]().fromJSON(i))}return this}}class Rg extends Ag{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sh(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const a=new wh(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,a,r){const o=new Mh(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Eh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,a,r),this}absarc(t,e,n,i,a,r){return this.absellipse(t,e,n,n,i,a,r),this}ellipse(t,e,n,i,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,a,r,o,l),this}absellipse(t,e,n,i,a,r,o,l){const c=new Fo(t,e,n,i,a,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bo extends De{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ve(i,0,Math.PI*2);const a=[],r=[],o=[],l=[],c=[],h=1/e,u=new R,d=new ct,p=new R,g=new R,_=new R;let m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let M=0;M<=e;M++){const E=n+M*h*i,y=Math.sin(E),U=Math.cos(E);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*U,r.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);const S=l[3*T+0]*y,P=l[3*T+1],w=l[3*T+0]*U;c.push(S,P,w)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){const y=E+M*t.length,U=y,T=y+t.length,S=y+t.length+1,P=y+1;a.push(U,T,P),a.push(S,P,T)}this.setIndex(a),this.setAttribute("position",new le(r,3)),this.setAttribute("uv",new le(o,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.points,t.segments,t.phiStart,t.phiLength)}}class jn extends Bo{constructor(t=1,e=1,n=4,i=8){const a=new Rg;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new jn(t.radius,t.length,t.capSegments,t.radialSegments)}}class Oo extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new R,h=new ct;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zo extends De{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),r===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function M(){const y=new R,U=new R;let T=0;const S=(e-t)/n;for(let P=0;P<=a;P++){const w=[],b=P/a,L=b*(e-t)+t;for(let z=0;z<=i;z++){const N=z/i,$=N*l+o,q=Math.sin($),O=Math.cos($);U.x=L*q,U.y=-b*n+m,U.z=L*O,u.push(U.x,U.y,U.z),y.set(q,S,O).normalize(),d.push(y.x,y.y,y.z),p.push(N,1-b),w.push(g++)}_.push(w)}for(let P=0;P<i;P++)for(let w=0;w<a;w++){const b=_[w][P],L=_[w+1][P],z=_[w+1][P+1],N=_[w][P+1];(t>0||w!==0)&&(h.push(b,L,N),T+=3),(e>0||w!==a-1)&&(h.push(L,z,N),T+=3)}c.addGroup(f,T,0),f+=T}function E(y){const U=g,T=new ct,S=new R;let P=0;const w=y===!0?t:e,b=y===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const L=g;for(let z=0;z<=i;z++){const $=z/i*l+o,q=Math.cos($),O=Math.sin($);S.x=w*O,S.y=m*b,S.z=w*q,u.push(S.x,S.y,S.z),d.push(0,b,0),T.x=q*.5+.5,T.y=O*.5*b+.5,p.push(T.x,T.y),g++}for(let z=0;z<i;z++){const N=U+z,$=L+z;y===!0?h.push($,$+1,N):h.push($+1,$,N),P+=3}c.addGroup(f,P,y===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ii extends zo{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Ii(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ho extends De{constructor(t=.5,e=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new R,g=new ct;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=a+m/n*r;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,E=M,y=M+n+1,U=M+n+2,T=M+1;o.push(E,y,T),o.push(y,U,T)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class As extends De{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],E=f/n;let y=0;f===0&&r===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let U=0;U<=e;U++){const T=U/e;u.x=-t*Math.cos(i+T*a)*Math.sin(r+E*o),u.y=t*Math.cos(r+E*o),u.z=t*Math.sin(i+T*a)*Math.sin(r+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-E),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const E=h[f][M+1],y=h[f][M],U=h[f+1][M],T=h[f+1][M+1];(f!==0||r>0)&&p.push(E,y,T),(f!==n-1||l<Math.PI)&&p.push(y,U,T)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vo extends De{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*a,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,M=(i+1)*p+g;r.push(_,m,M),r.push(m,f,M)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ee extends Ki{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const sc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cg{constructor(t,e,n){const i=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,a===!1&&i.onStart!==void 0&&i.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Lg=new Cg;class $o{constructor(t){this.manager=t!==void 0?t:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,a){n.load(t,i,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}$o.DEFAULT_MATERIAL_NAME="__DEFAULT";class Pg extends $o{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=sc.get(t);if(r!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0),r;const o=Ts("img");function l(){h(),sc.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(u){h(),i&&i(u),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class _a extends $o{constructor(t){super(t)}load(t,e,n,i){const a=new Te,r=new Pg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},n,i),a}}class jo extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ug extends jo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const hr=new se,ac=new R,rc=new R;class Th{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(ac),rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rc),e.updateMatrixWorld(),hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oc=new se,os=new R,ur=new R;class Dg extends Th{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),n.position.copy(os),ur.copy(n.position),ur.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ur),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}}class Go extends jo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kg extends Th{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ig extends jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new kg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Fg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lc(){return performance.now()}const cc=new se;class Ng{constructor(t,e,n=0,i=1/0){this.ray=new rh(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cc),this}intersectObject(t,e=!0,n=[]){return fo(t,this,n,e),n.sort(hc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,a=t.length;i<a;i++)fo(t[i],this,n,e);return n.sort(hc),n}}function hc(s,t){return s.distance-t.distance}function fo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const a=s.children;for(let r=0,o=a.length;r<o;r++)fo(a[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);const sa={CYAN:0,AMBER:1},Fi=1.38,va=.55,Bg=1.9,po=-8.2,mo=0,dr=12,Og=.4,Ah=1.52,Ni=6.4,zg=Math.cos(70*Math.PI/180),Hg=Math.cos(80*Math.PI/180),uc=.35,Vg=20,$g=1.5,dc=.42,jg=.6,fc=10,Gg=240,Wg=5,Xg=6,pc=2.75,mc=1.35,qg=1,Kg=3,Yg=6,Jg=2.62,Zg=47,Qg=2.48,Hn={stamina:3,struggle:3,tickle:3},t_=28,e_=.95,n_=11.2,Ta=[{hair:1708560,skin:12886160,cloth:3812920,name:"Elara Case"},{hair:3875352,skin:9263676,cloth:2896704,name:"Kora Vale"},{hair:13153418,skin:14730152,cloth:4864048,name:"Sable Quinn"},{hair:920588,skin:6044202,cloth:2761768,name:"Ryn Ashford"},{hair:6960168,skin:13934714,cloth:2372142,name:"Vesh Marlowe"},{hair:2759202,skin:11565666,cloth:3813428,name:"Nim Cortez"},{hair:4861984,skin:15782580,cloth:3024944,name:"Lyra Finch"},{hair:1118228,skin:8015416,cloth:4207160,name:"Toren Blake"},{hair:10123856,skin:13607040,cloth:2240570,name:"Mira Solis"},{hair:2103320,skin:9660492,cloth:3682348,name:"Cass Wynn"},{hair:5914680,skin:14530714,cloth:2762804,name:"Juno Hale"},{hair:1313808,skin:7226932,cloth:3812392,name:"Briar Knox"}],_s=[{slug:"KoraVale",display:"Kora Vale"},{slug:"SableQuinn",display:"Sable Quinn"},{slug:"RynAshford",display:"Ryn Ashford"},{slug:"VeshMarlowe",display:"Vesh Marlowe"},{slug:"NimCortez",display:"Nim Cortez"},{slug:"LyraFinch",display:"Lyra Finch"},{slug:"TorenBlake",display:"Toren Blake"},{slug:"MiraSolis",display:"Mira Solis"},{slug:"CassWynn",display:"Cass Wynn"},{slug:"JunoHale",display:"Juno Hale"},{slug:"BriarKnox",display:"Briar Knox"},{slug:"EmberLang",display:"Ember Lang"}];_s.map(s=>s.display);function i_(){return{coins:12,level:1,xp:0,unspent:7,blocks:{stamina:0,struggle:0,tickle:0},look:0,weapon:0,armor:0,ownedWeapons:[0],ownedArmors:[0]}}function gc(s){const t=i_();if(!s||typeof s!="object")return t;const e=s.blocks??t.blocks,n=Array.isArray(s.ownedWeapons)?s.ownedWeapons:t.ownedWeapons,i=Array.isArray(s.ownedArmors)?s.ownedArmors:t.ownedArmors;return{coins:Math.max(0,Number(s.coins)||0),level:In(s.level??1,1,10),xp:Math.max(0,Number(s.xp)||0),unspent:(()=>{const a=Math.max(0,Number(s.unspent)||0),r=In(e.stamina??0,0,10),o=In(e.struggle??0,0,10),l=In(e.tickle??0,0,10),c=10-r+(10-o)+(10-l);return Math.min(a,Math.max(0,c))})(),blocks:{stamina:In(e.stamina??0,0,10),struggle:In(e.struggle??0,0,10),tickle:In(e.tickle??0,0,10)},look:In(s.look??0,0,12),ownedWeapons:(()=>{const a=Number(s.weapon)||0;return aa([0,...n,a])})(),ownedArmors:(()=>{const a=Number(s.armor)||0;return aa([0,...i,a])})(),weapon:(()=>{const a=Number(s.weapon)||0;return aa([0,...n,a]).includes(a)?a:0})(),armor:(()=>{const a=Number(s.armor)||0;return aa([0,...i,a]).includes(a)?a:0})()}}function In(s,t,e){return Math.max(t,Math.min(e,Math.round(Number(s)||0)))}function aa(s){return[...new Set(s.map(t=>Math.max(0,Math.round(Number(t)||0))))].sort((t,e)=>t-e)}class s_{constructor(){C(this,"group",new Qt);C(this,"walls",[]);C(this,"decks",[]);C(this,"ramp",{minx:-6,maxx:2,minz:12.2,maxz:16.6,y0:0,y1:3.4});C(this,"spawnA",new R(-18,0,0));C(this,"spawnB",new R(18,0,0));C(this,"soloPads",[new R(-18,0,0),new R(18,0,0),new R(0,0,0),new R(-10,0,12),new R(10,0,-12),new R(-12,0,-8),new R(12,0,6),new R(-4,0,-14),new R(6,0,12),new R(0,0,16),new R(-8,0,4),new R(8,0,-4)]);C(this,"matMetal");C(this,"matDark");C(this,"matFloor");this.matMetal=new Ee({color:5919564,metalness:.72,roughness:.38}),this.matDark=new Ee({color:2762276,metalness:.55,roughness:.5}),this.matFloor=new Ee({color:3814704,metalness:.4,roughness:.62}),this.build()}addWall(t,e,n,i,a=3.6,r=0){const o=new bt(new Xt(n,a,i),this.matMetal);o.position.set(t,r+a/2,e),o.castShadow=!0,o.receiveShadow=!0,this.group.add(o),this.walls.push({minx:t-n/2,maxx:t+n/2,minz:e-i/2,maxz:e+i/2,miny:r,maxy:r+a})}addDeck(t,e,n,i,a,r=.35){const o=new bt(new Xt(n,r,i),this.matDark);o.position.set(t,a+r/2,e),o.receiveShadow=!0,this.group.add(o),this.decks.push({minx:t-n/2,maxx:t+n/2,minz:e-i/2,maxz:e+i/2,miny:a,maxy:a+r+.05})}build(){const t=new bt(new Xt(52,.4,40),this.matFloor);t.position.y=-.2,t.receiveShadow=!0,this.group.add(t),this.addWall(0,-19.5,52,1.2,4.2),this.addWall(0,19.5,52,1.2,4.2),this.addWall(-25.5,0,1.2,40,4.2),this.addWall(25.5,0,1.2,40,4.2),this.addWall(-18,-8,12,1,3.2),this.addWall(-18,8,12,1,3.2),this.addWall(18,-8,12,1,3.2),this.addWall(18,8,12,1,3.2),this.addWall(-8,-6.6,1.4,6.2,3.4),this.addWall(-8,6.6,1.4,6.2,3.4),this.addWall(8,-6.6,1.4,6.2,3.4),this.addWall(8,8.4,1.4,6.2,3.4),this.addWall(-6,10,8,1.3,3.4),this.addWall(8,10,8,1.3,3.4),this.addWall(-4,-10,10,1.3,3.4),this.addWall(6,-10,1.3,6,3.4),this.addWall(-12,8,6,1.2,3.2),this.addWall(12,-6,6,1.2,3.2);const e=new bt(new Xt(32,.05,1.7),new Ee({color:3813932,emissive:5914672,emissiveIntensity:.35,metalness:.2,roughness:.7}));e.position.set(0,.03,0),e.receiveShadow=!0,this.group.add(e),this.addLaneMarks(),this.addWall(-3,5.5,1.6,1.6,4),this.addWall(3,-5.5,1.6,1.6,4),this.addDeck(4,14.4,12,4.8,3.35);const n=new bt(new Xt(8.4,.28,3.4),this.matDark);n.position.set(-2,1.7,14.4),n.rotation.z=-.38,n.receiveShadow=!0,this.group.add(n);const i=new Go(8939093,12,28,2);i.position.set(0,6,0),this.group.add(i)}addLaneMarks(){const t=a=>new Ee({color:2762276,emissive:a,emissiveIntensity:.42,metalness:.2,roughness:.7}),e=t(6211800),n=t(13935194),i=(a,r,o)=>{const l=new bt(new Ii(.2,.62,3),o);l.rotation.z=r?-Math.PI/2:Math.PI/2,l.position.set(a,.12,0),this.group.add(l)};i(-14.2,!0,e),i(-10.4,!0,e),i(14.2,!1,n),i(10.4,!1,n)}groundY(t,e){const n=this.ramp;if(t>=n.minx&&t<=n.maxx&&e>=n.minz&&e<=n.maxz){const i=(t-n.minx)/(n.maxx-n.minx);return cn.lerp(n.y0,n.y1,i)}for(const i of this.decks)if(t>=i.minx&&t<=i.maxx&&e>=i.minz&&e<=i.maxz)return 3.45;return 0}inSpawnPocket(t,e){return e===0?t.x<-14&&Math.abs(t.z)<7.2:t.x>14&&Math.abs(t.z)<7.2}clampSpawnPocket(t,e,n){const i=cn.clamp(e,-7.19,7.19);return n===0?{x:Math.min(t,-14.01),z:i}:{x:Math.max(t,14.01),z:i}}resolve(t,e,n,i=Og){let a=t,r=e;for(let o=0;o<4;o++)for(const l of this.walls){if(n+1.4<l.miny||n>l.maxy)continue;Math.max(l.minx-i,Math.min(a,l.maxx+i)),Math.max(l.minz-i,Math.min(r,l.maxz+i));const c=a>l.minx-i&&a<l.maxx+i,h=r>l.minz-i&&r<l.maxz+i;if(c&&h){const u=a-(l.minx-i),d=l.maxx+i-a,p=r-(l.minz-i),g=l.maxz+i-r,_=Math.min(u,d,p,g);_===u?a=l.minx-i-.001:_===d?a=l.maxx+i+.001:_===p?r=l.minz-i-.001:r=l.maxz+i+.001}}return a=cn.clamp(a,-24.6,24.6),r=cn.clamp(r,-18.6,18.6),{x:a,z:r}}navWaypoint(t,e){const n=e.y;if(!(t.x*e.x<0&&Math.abs(t.x)>4&&Math.abs(e.x)>2))return Math.abs(t.z)>3.2&&Math.abs(t.x)>2&&Math.abs(e.z)<2?new R(t.x,n,0):e.clone();if(Math.abs(t.z)>1.1)return new R(t.x,n,0);const a=t.x<e.x?[-10,-4,0,4,10,e.x]:[10,4,0,-4,-10,e.x];for(const r of a){if(t.x<e.x&&t.x<r-.85)return new R(r,n,0);if(t.x>e.x&&t.x>r+.85)return new R(r,n,0)}return e.clone()}laneRoute(t,e){return this.navWaypoint(t,e)}blockedAt(t,e,n,i=.9){const a=this.resolve(t,e,n,i);return Math.hypot(a.x-t,a.z-e)>.04}findNudge(t,e){const n=(o,l)=>{const c=this.groundY(o,l);if(Math.abs(c-t.y)>.85||this.inSpawnPocket(new R(o,c,l),0)||this.inSpawnPocket(new R(o,c,l),1)||this.blockedAt(o,l,c,e))return-1;let h=0;const u=[[1,0],[-1,0],[0,1],[0,-1]];for(const[p,g]of u){const _=this.resolve(o+p*1.1,l+g*1.1,c,e);h+=Math.hypot(_.x-o,_.z-l)}const d=Math.hypot(o-t.x,l-t.z);return h-d*.2};if(n(t.x,t.z)>=0)return t.clone();const i=[];for(let o=0;o<16;o++){const l=o/16*Math.PI*2;i.push([Math.cos(l),Math.sin(l)])}let a=null,r=-1;for(let o=.3;o<=$g+.01;o+=.3)for(const[l,c]of i){const h=t.x+l*o,u=t.z+c*o,d=n(h,u);d>r&&(r=d,a=new R(h,this.groundY(h,u),u))}return a}}const a_=""+new URL("BriarKnox-Dpa0Hutf.jpg",import.meta.url).href,r_=""+new URL("CassWynn-DlWuid-D.jpg",import.meta.url).href,o_=""+new URL("EmberLang-DX9vz0jP.jpg",import.meta.url).href,l_=""+new URL("JunoHale-CrdaXpZ2.jpg",import.meta.url).href,c_=""+new URL("KoraVale-Bxh0eoY1.jpg",import.meta.url).href,h_=""+new URL("LyraFinch-CSDNR9Pf.jpg",import.meta.url).href,u_=""+new URL("MiraSolis-CmAre_4Z.jpg",import.meta.url).href,d_=""+new URL("NimCortez-_04Y7Q6K.jpg",import.meta.url).href,f_=""+new URL("RynAshford-Dug0-cz-.jpg",import.meta.url).href,p_=""+new URL("SableQuinn-mzonjDUr.jpg",import.meta.url).href,m_=""+new URL("TorenBlake-CbL0FLGN.jpg",import.meta.url).href,g_=""+new URL("VeshMarlowe-BWw8zQpl.jpg",import.meta.url).href,__=""+new URL("ElaraCase-D5jHayJQ.jpg",import.meta.url).href,v_=Object.assign({"../../assets/characters/amateur/BriarKnox.jpg":a_,"../../assets/characters/amateur/CassWynn.jpg":r_,"../../assets/characters/amateur/EmberLang.jpg":o_,"../../assets/characters/amateur/JunoHale.jpg":l_,"../../assets/characters/amateur/KoraVale.jpg":c_,"../../assets/characters/amateur/LyraFinch.jpg":h_,"../../assets/characters/amateur/MiraSolis.jpg":u_,"../../assets/characters/amateur/NimCortez.jpg":d_,"../../assets/characters/amateur/RynAshford.jpg":f_,"../../assets/characters/amateur/SableQuinn.jpg":p_,"../../assets/characters/amateur/TorenBlake.jpg":m_,"../../assets/characters/amateur/VeshMarlowe.jpg":g_}),y_=Object.assign({"../../assets/characters/player/ElaraCase.jpg":__}),Rh={};for(const[s,t]of Object.entries(v_)){const e=s.split("/").pop();e&&(Rh[e.replace(/\.jpg$/i,"")]=t)}const Ch={};for(const[s,t]of Object.entries(y_)){const e=s.split("/").pop();e&&(Ch[e.replace(/\.jpg$/i,"")]=t)}function Gn(s){if(s)return Rh[s]??Ch[s]}const b_="ElaraCase",Bi=[{id:0,slug:b_,display:"Elara Case",metalException:!0},..._s.map((s,t)=>({id:t+1,slug:s.slug,display:s.display,metalException:!1}))];Bi.length-1;function Oi(s){return Bi.find(t=>t.id===s)??Bi[0]}const _c=new Map;function x_(s,t,e){const n=Math.max(s,t,e),i=Math.min(s,t,e);return n>228&&i>214&&n-i<22}function M_(s,t,e){return s<<16|t<<8|e}function S_(s){return new Promise((t,e)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>t(n),n.onerror=()=>e(new Error("still load failed")),n.src=s})}function w_(s){const t=s.naturalWidth,e=s.naturalHeight,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.drawImage(s,0,0);const a=i.getImageData(0,0,t,e),r=a.data,o=new Uint8Array(t*e),l=[],c=(T,S)=>{if(T<0||S<0||T>=t||S>=e)return;const P=S*t+T;if(o[P])return;const w=P*4;x_(r[w],r[w+1],r[w+2])&&(o[P]=1,l.push(P))};for(let T=0;T<t;T++)c(T,0),c(T,e-1);for(let T=0;T<e;T++)c(0,T),c(t-1,T);for(;l.length;){const T=l.pop(),S=T%t,P=T/t|0,w=T*4;r[w+3]=0,c(S+1,P),c(S-1,P),c(S,P+1),c(S,P-1)}for(let T=1;T<e-1;T++)for(let S=1;S<t-1;S++){const P=(T*t+S)*4;if(r[P+3]===0)continue;let w=0;r[((T-1)*t+S)*4+3]===0&&w++,r[((T+1)*t+S)*4+3]===0&&w++,r[(T*t+S-1)*4+3]===0&&w++,r[(T*t+S+1)*4+3]===0&&w++,w&&(r[P+3]=Math.max(0,r[P+3]-w*70))}let h=t,u=e,d=0,p=0;for(let T=0;T<e;T++)for(let S=0;S<t;S++)r[(T*t+S)*4+3]<40||(S<h&&(h=S),T<u&&(u=T),S>d&&(d=S),T>p&&(p=T));d<=h&&(h=0,u=0,d=t-1,p=e-1);const g=4;h=Math.max(0,h-g),u=Math.max(0,u-g),d=Math.min(t-1,d+g),p=Math.min(e-1,p+g),i.putImageData(a,0,0);const _=d-h+1,m=p-u+1,f=document.createElement("canvas");f.width=_,f.height=m,f.getContext("2d").drawImage(n,h,u,_,m,0,0,_,m);const M=Math.max(8,Math.floor(m*.28)),E=document.createElement("canvas");E.width=_,E.height=M,E.getContext("2d").drawImage(f,0,0,_,M,0,0,_,M);const y=f.getContext("2d").getImageData(0,0,_,m).data,U=(T,S,P,w)=>{let b=0,L=0,z=0,N=0;const $=Math.max(0,Math.floor(T)),q=Math.max(0,Math.floor(S)),O=Math.min(_-1,Math.floor(P)),Z=Math.min(m-1,Math.floor(w));for(let j=q;j<=Z;j+=2)for(let nt=$;nt<=O;nt+=2){const ht=(j*_+nt)*4;y[ht+3]<80||(b+=y[ht],L+=y[ht+1],z+=y[ht+2],N++)}return N?M_(b/N|0,L/N|0,z/N|0):12886160};return{keyedUrl:f.toDataURL("image/png"),faceUrl:E.toDataURL("image/png"),hair:U(_*.3,m*.02,_*.7,m*.16),skin:U(_*.42,m*.22,_*.58,m*.32),cloth:U(_*.35,m*.48,_*.65,m*.62)}}function on(s){let t=_c.get(s);return t||(t=S_(s).then(w_),_c.set(s,t)),t}const E_="run",T_="BriarKnox",A_="Briar Knox",R_=!1,C_=!1,L_={rate:16.11,amp:1.084,lean:.135,billBob:.091,billRate:19.453},P_={rate:35.161,amp:2.346,lean:.582,billBob:.311,billRate:42.546},U_=4.4,D_=.4,k_=["frames/BriarKnox_f0.jpg","frames/BriarKnox_f1.jpg","frames/BriarKnox_f2.jpg","frames/BriarKnox_f3.jpg"],I_={clip:E_,slug:T_,display:A_,playerOnly:R_,metalException:C_,walk:L_,run:P_,runSpeed:U_,walkSpeed:D_,frames:k_},F_="run",N_="CassWynn",B_="Cass Wynn",O_=!1,z_=!1,H_={rate:17.637,amp:1.184,lean:.15,billBob:.098,billRate:21.294},V_={rate:38.498,amp:2.575,lean:.636,billBob:.333,billRate:46.571},$_=4.4,j_=.4,G_=["frames/CassWynn_f0.jpg","frames/CassWynn_f1.jpg","frames/CassWynn_f2.jpg","frames/CassWynn_f3.jpg"],W_={clip:F_,slug:N_,display:B_,playerOnly:O_,metalException:z_,walk:H_,run:V_,runSpeed:$_,walkSpeed:j_,frames:G_},X_="run",q_="ElaraCase",K_="Elara Case",Y_=!0,J_=!0,Z_={rate:15.603,amp:1.051,lean:.139,billBob:.089,billRate:18.833},Q_={rate:34.049,amp:2.272,lean:.587,billBob:.305,billRate:41.197},tv=4.4,ev=.4,nv=["frames/ElaraCase_f0.jpg","frames/ElaraCase_f1.jpg","frames/ElaraCase_f2.jpg","frames/ElaraCase_f3.jpg"],iv={clip:X_,slug:q_,display:K_,playerOnly:Y_,metalException:J_,walk:Z_,run:Q_,runSpeed:tv,walkSpeed:ev,frames:nv},sv="run",av="EmberLang",rv="Ember Lang",ov=!1,lv=!1,cv={rate:16.619,amp:1.117,lean:.147,billBob:.096,billRate:20.067},hv={rate:36.275,amp:2.422,lean:.598,billBob:.325,billRate:43.888},uv=4.4,dv=.4,fv=["frames/EmberLang_f0.jpg","frames/EmberLang_f1.jpg","frames/EmberLang_f2.jpg","frames/EmberLang_f3.jpg"],pv={clip:sv,slug:av,display:rv,playerOnly:ov,metalException:lv,walk:cv,run:hv,runSpeed:uv,walkSpeed:dv,frames:fv},mv="run",gv="JunoHale",_v="Juno Hale",vv=!1,yv=!1,bv={rate:15.603,amp:1.051,lean:.133,billBob:.089,billRate:18.833},xv={rate:34.049,amp:2.272,lean:.567,billBob:.305,billRate:41.197},Mv=4.4,Sv=.4,wv=["frames/JunoHale_f0.jpg","frames/JunoHale_f1.jpg","frames/JunoHale_f2.jpg","frames/JunoHale_f3.jpg"],Ev={clip:mv,slug:gv,display:_v,playerOnly:vv,metalException:yv,walk:bv,run:xv,runSpeed:Mv,walkSpeed:Sv,frames:wv},Tv="run",Av="KoraVale",Rv="Kora Vale",Cv=!1,Lv=!1,Pv={rate:16.11,amp:1.084,lean:.135,billBob:.091,billRate:19.453},Uv={rate:35.161,amp:2.346,lean:.582,billBob:.311,billRate:42.546},Dv=4.4,kv=.4,Iv=["frames/KoraVale_f0.jpg","frames/KoraVale_f1.jpg","frames/KoraVale_f2.jpg","frames/KoraVale_f3.jpg"],Fv={clip:Tv,slug:Av,display:Rv,playerOnly:Cv,metalException:Lv,walk:Pv,run:Uv,runSpeed:Dv,walkSpeed:kv,frames:Iv},Nv="run",Bv="LyraFinch",Ov="Lyra Finch",zv=!1,Hv=!1,Vv={rate:16.11,amp:1.084,lean:.135,billBob:.091,billRate:19.453},$v={rate:35.161,amp:2.346,lean:.582,billBob:.311,billRate:42.546},jv=4.4,Gv=.4,Wv=["frames/LyraFinch_f0.jpg","frames/LyraFinch_f1.jpg","frames/LyraFinch_f2.jpg","frames/LyraFinch_f3.jpg"],Xv={clip:Nv,slug:Bv,display:Ov,playerOnly:zv,metalException:Hv,walk:Vv,run:$v,runSpeed:jv,walkSpeed:Gv,frames:Wv},qv="run",Kv="MiraSolis",Yv="Mira Solis",Jv=!1,Zv=!1,Qv={rate:17.13,amp:1.151,lean:.149,billBob:.096,billRate:20.68},ty={rate:37.388,amp:2.492,lean:.612,billBob:.329,billRate:45.229},ey=4.4,ny=.4,iy=["frames/MiraSolis_f0.jpg","frames/MiraSolis_f1.jpg","frames/MiraSolis_f2.jpg","frames/MiraSolis_f3.jpg"],sy={clip:qv,slug:Kv,display:Yv,playerOnly:Jv,metalException:Zv,walk:Qv,run:ty,runSpeed:ey,walkSpeed:ny,frames:iy},ay="run",ry="NimCortez",oy="Nim Cortez",ly=!1,cy=!1,hy={rate:15.603,amp:1.051,lean:.133,billBob:.089,billRate:18.833},uy={rate:34.049,amp:2.272,lean:.567,billBob:.305,billRate:41.197},dy=4.4,fy=.4,py=["frames/NimCortez_f0.jpg","frames/NimCortez_f1.jpg","frames/NimCortez_f2.jpg","frames/NimCortez_f3.jpg"],my={clip:ay,slug:ry,display:oy,playerOnly:ly,metalException:cy,walk:hy,run:uy,runSpeed:dy,walkSpeed:fy,frames:py},gy="run",_y="RynAshford",vy="Ryn Ashford",yy=!1,by=!1,xy={rate:17.13,amp:1.151,lean:.149,billBob:.096,billRate:20.68},My={rate:37.388,amp:2.492,lean:.612,billBob:.329,billRate:45.229},Sy=4.4,wy=.4,Ey=["frames/RynAshford_f0.jpg","frames/RynAshford_f1.jpg","frames/RynAshford_f2.jpg","frames/RynAshford_f3.jpg"],Ty={clip:gy,slug:_y,display:vy,playerOnly:yy,metalException:by,walk:xy,run:My,runSpeed:Sy,walkSpeed:wy,frames:Ey},Ay="run",Ry="SableQuinn",Cy="Sable Quinn",Ly=!1,Py=!1,Uy={rate:16.619,amp:1.117,lean:.147,billBob:.096,billRate:20.067},Dy={rate:36.275,amp:2.422,lean:.598,billBob:.325,billRate:43.888},ky=4.4,Iy=.4,Fy=["frames/SableQuinn_f0.jpg","frames/SableQuinn_f1.jpg","frames/SableQuinn_f2.jpg","frames/SableQuinn_f3.jpg"],Ny={clip:Ay,slug:Ry,display:Cy,playerOnly:Ly,metalException:Py,walk:Uy,run:Dy,runSpeed:ky,walkSpeed:Iy,frames:Fy},By="run",Oy="TorenBlake",zy="Toren Blake",Hy=!1,Vy=!1,$y={rate:16.619,amp:1.117,lean:.147,billBob:.096,billRate:20.067},jy={rate:36.275,amp:2.422,lean:.598,billBob:.325,billRate:43.888},Gy=4.4,Wy=.4,Xy=["frames/TorenBlake_f0.jpg","frames/TorenBlake_f1.jpg","frames/TorenBlake_f2.jpg","frames/TorenBlake_f3.jpg"],qy={clip:By,slug:Oy,display:zy,playerOnly:Hy,metalException:Vy,walk:$y,run:jy,runSpeed:Gy,walkSpeed:Wy,frames:Xy},Ky="run",Yy="VeshMarlowe",Jy="Vesh Marlowe",Zy=!1,Qy=!1,tb={rate:17.637,amp:1.184,lean:.15,billBob:.098,billRate:21.294},eb={rate:38.498,amp:2.575,lean:.636,billBob:.333,billRate:46.571},nb=4.4,ib=.4,sb=["frames/VeshMarlowe_f0.jpg","frames/VeshMarlowe_f1.jpg","frames/VeshMarlowe_f2.jpg","frames/VeshMarlowe_f3.jpg"],ab={clip:Ky,slug:Yy,display:Jy,playerOnly:Zy,metalException:Qy,walk:tb,run:eb,runSpeed:nb,walkSpeed:ib,frames:sb},rb=""+new URL("BriarKnox_f0-DmbQVhLr.jpg",import.meta.url).href,ob=""+new URL("BriarKnox_f1-B8zZ6yAr.jpg",import.meta.url).href,lb=""+new URL("BriarKnox_f2-DufHx0vt.jpg",import.meta.url).href,cb=""+new URL("BriarKnox_f3-CLkdPRuR.jpg",import.meta.url).href,hb=""+new URL("CassWynn_f0-xD7OaVBe.jpg",import.meta.url).href,ub=""+new URL("CassWynn_f1-BnqtMu49.jpg",import.meta.url).href,db=""+new URL("CassWynn_f2-EV1Zv_44.jpg",import.meta.url).href,fb=""+new URL("CassWynn_f3-CW1Ed1DG.jpg",import.meta.url).href,pb=""+new URL("ElaraCase_f0-BhSrVg_d.jpg",import.meta.url).href,mb=""+new URL("ElaraCase_f1--kGnaN6n.jpg",import.meta.url).href,gb=""+new URL("ElaraCase_f2-B8HenH_Y.jpg",import.meta.url).href,_b=""+new URL("ElaraCase_f3-DmoHjvwi.jpg",import.meta.url).href,vb=""+new URL("EmberLang_f0-J_t_f9vF.jpg",import.meta.url).href,yb=""+new URL("EmberLang_f1-CIdPsxNS.jpg",import.meta.url).href,bb=""+new URL("EmberLang_f2-BXjnn4-X.jpg",import.meta.url).href,xb=""+new URL("EmberLang_f3-M_5hyUf-.jpg",import.meta.url).href,Mb=""+new URL("JunoHale_f0-BgVBrGtJ.jpg",import.meta.url).href,Sb=""+new URL("JunoHale_f1-Bp_yWixW.jpg",import.meta.url).href,wb=""+new URL("JunoHale_f2-a2OHy_MQ.jpg",import.meta.url).href,Eb=""+new URL("JunoHale_f3-DPb9ehk5.jpg",import.meta.url).href,Tb=""+new URL("KoraVale_f0-B8-zZYL2.jpg",import.meta.url).href,Ab=""+new URL("KoraVale_f1-DMAnkU1e.jpg",import.meta.url).href,Rb=""+new URL("KoraVale_f2-D20ncrFX.jpg",import.meta.url).href,Cb=""+new URL("KoraVale_f3-Byp-Uzzz.jpg",import.meta.url).href,Lb=""+new URL("LyraFinch_f0-NiUUADzV.jpg",import.meta.url).href,Pb=""+new URL("LyraFinch_f1-CLtc6Juw.jpg",import.meta.url).href,Ub=""+new URL("LyraFinch_f2-2SXUifek.jpg",import.meta.url).href,Db=""+new URL("LyraFinch_f3-ksFw3IXy.jpg",import.meta.url).href,kb=""+new URL("MiraSolis_f0-oPd0r5wo.jpg",import.meta.url).href,Ib=""+new URL("MiraSolis_f1-BQ1sI8BN.jpg",import.meta.url).href,Fb=""+new URL("MiraSolis_f2-BZdE4MiH.jpg",import.meta.url).href,Nb=""+new URL("MiraSolis_f3-CMWOeYUB.jpg",import.meta.url).href,Bb=""+new URL("NimCortez_f0-C3gOjaF0.jpg",import.meta.url).href,Ob=""+new URL("NimCortez_f1-CG2reXm3.jpg",import.meta.url).href,zb=""+new URL("NimCortez_f2-CJLwUbEQ.jpg",import.meta.url).href,Hb=""+new URL("NimCortez_f3-BBuIhP1C.jpg",import.meta.url).href,Vb=""+new URL("RynAshford_f0-uh5H6KYq.jpg",import.meta.url).href,$b=""+new URL("RynAshford_f1-CHZvgYDk.jpg",import.meta.url).href,jb=""+new URL("RynAshford_f2-CnDuhKgk.jpg",import.meta.url).href,Gb=""+new URL("RynAshford_f3-C5PxsYYa.jpg",import.meta.url).href,Wb=""+new URL("SableQuinn_f0-DXGdYUkM.jpg",import.meta.url).href,Xb=""+new URL("SableQuinn_f1-CN35EH9h.jpg",import.meta.url).href,qb=""+new URL("SableQuinn_f2-B2p45YJS.jpg",import.meta.url).href,Kb=""+new URL("SableQuinn_f3-DE3vra8q.jpg",import.meta.url).href,Yb=""+new URL("TorenBlake_f0-CeQ0kiFI.jpg",import.meta.url).href,Jb=""+new URL("TorenBlake_f1-P1WYVGrt.jpg",import.meta.url).href,Zb=""+new URL("TorenBlake_f2-cgXcRV_t.jpg",import.meta.url).href,Qb=""+new URL("TorenBlake_f3-DKwSQBT7.jpg",import.meta.url).href,tx=""+new URL("VeshMarlowe_f0-B53sgRGG.jpg",import.meta.url).href,ex=""+new URL("VeshMarlowe_f1-DuMz6-pC.jpg",import.meta.url).href,nx=""+new URL("VeshMarlowe_f2-DvwnhlcU.jpg",import.meta.url).href,ix=""+new URL("VeshMarlowe_f3-BaV_RBaf.jpg",import.meta.url).href,sx=Object.assign({"../../assets/binds/run/BriarKnox.run.json":I_,"../../assets/binds/run/CassWynn.run.json":W_,"../../assets/binds/run/ElaraCase.run.json":iv,"../../assets/binds/run/EmberLang.run.json":pv,"../../assets/binds/run/JunoHale.run.json":Ev,"../../assets/binds/run/KoraVale.run.json":Fv,"../../assets/binds/run/LyraFinch.run.json":Xv,"../../assets/binds/run/MiraSolis.run.json":sy,"../../assets/binds/run/NimCortez.run.json":my,"../../assets/binds/run/RynAshford.run.json":Ty,"../../assets/binds/run/SableQuinn.run.json":Ny,"../../assets/binds/run/TorenBlake.run.json":qy,"../../assets/binds/run/VeshMarlowe.run.json":ab}),go={};var Nc;for(const[s,t]of Object.entries(sx)){const e=(Nc=s.split("/").pop())==null?void 0:Nc.replace(/\.run\.json$/i,"");!e||!t||(go[e]=t,t.slug&&(go[t.slug]=t))}const vc={clip:"run",slug:"default",display:"Default",walk:{rate:17.031,amp:1.146,lean:.148,billBob:.083,billRate:20.55},run:{rate:36.572,amp:2.424,lean:.599,billBob:.263,billRate:44.078},runSpeed:4.4,walkSpeed:.4};function ax(s){return s?go[s]??vc:vc}function rx(s,t){return t==="run"?s.run:s.walk}const ox=Object.assign({"../../assets/binds/run/frames/BriarKnox_f0.jpg":rb,"../../assets/binds/run/frames/BriarKnox_f1.jpg":ob,"../../assets/binds/run/frames/BriarKnox_f2.jpg":lb,"../../assets/binds/run/frames/BriarKnox_f3.jpg":cb,"../../assets/binds/run/frames/CassWynn_f0.jpg":hb,"../../assets/binds/run/frames/CassWynn_f1.jpg":ub,"../../assets/binds/run/frames/CassWynn_f2.jpg":db,"../../assets/binds/run/frames/CassWynn_f3.jpg":fb,"../../assets/binds/run/frames/ElaraCase_f0.jpg":pb,"../../assets/binds/run/frames/ElaraCase_f1.jpg":mb,"../../assets/binds/run/frames/ElaraCase_f2.jpg":gb,"../../assets/binds/run/frames/ElaraCase_f3.jpg":_b,"../../assets/binds/run/frames/EmberLang_f0.jpg":vb,"../../assets/binds/run/frames/EmberLang_f1.jpg":yb,"../../assets/binds/run/frames/EmberLang_f2.jpg":bb,"../../assets/binds/run/frames/EmberLang_f3.jpg":xb,"../../assets/binds/run/frames/JunoHale_f0.jpg":Mb,"../../assets/binds/run/frames/JunoHale_f1.jpg":Sb,"../../assets/binds/run/frames/JunoHale_f2.jpg":wb,"../../assets/binds/run/frames/JunoHale_f3.jpg":Eb,"../../assets/binds/run/frames/KoraVale_f0.jpg":Tb,"../../assets/binds/run/frames/KoraVale_f1.jpg":Ab,"../../assets/binds/run/frames/KoraVale_f2.jpg":Rb,"../../assets/binds/run/frames/KoraVale_f3.jpg":Cb,"../../assets/binds/run/frames/LyraFinch_f0.jpg":Lb,"../../assets/binds/run/frames/LyraFinch_f1.jpg":Pb,"../../assets/binds/run/frames/LyraFinch_f2.jpg":Ub,"../../assets/binds/run/frames/LyraFinch_f3.jpg":Db,"../../assets/binds/run/frames/MiraSolis_f0.jpg":kb,"../../assets/binds/run/frames/MiraSolis_f1.jpg":Ib,"../../assets/binds/run/frames/MiraSolis_f2.jpg":Fb,"../../assets/binds/run/frames/MiraSolis_f3.jpg":Nb,"../../assets/binds/run/frames/NimCortez_f0.jpg":Bb,"../../assets/binds/run/frames/NimCortez_f1.jpg":Ob,"../../assets/binds/run/frames/NimCortez_f2.jpg":zb,"../../assets/binds/run/frames/NimCortez_f3.jpg":Hb,"../../assets/binds/run/frames/RynAshford_f0.jpg":Vb,"../../assets/binds/run/frames/RynAshford_f1.jpg":$b,"../../assets/binds/run/frames/RynAshford_f2.jpg":jb,"../../assets/binds/run/frames/RynAshford_f3.jpg":Gb,"../../assets/binds/run/frames/SableQuinn_f0.jpg":Wb,"../../assets/binds/run/frames/SableQuinn_f1.jpg":Xb,"../../assets/binds/run/frames/SableQuinn_f2.jpg":qb,"../../assets/binds/run/frames/SableQuinn_f3.jpg":Kb,"../../assets/binds/run/frames/TorenBlake_f0.jpg":Yb,"../../assets/binds/run/frames/TorenBlake_f1.jpg":Jb,"../../assets/binds/run/frames/TorenBlake_f2.jpg":Zb,"../../assets/binds/run/frames/TorenBlake_f3.jpg":Qb,"../../assets/binds/run/frames/VeshMarlowe_f0.jpg":tx,"../../assets/binds/run/frames/VeshMarlowe_f1.jpg":ex,"../../assets/binds/run/frames/VeshMarlowe_f2.jpg":nx,"../../assets/binds/run/frames/VeshMarlowe_f3.jpg":ix}),Lh={};for(const[s,t]of Object.entries(ox)){const e=s.split("/").pop();e&&(Lh[e]=t)}function lx(s){const t=s.frames;if(!(t!=null&&t.length))return[];const e=[];for(const n of t){const i=n.split("/").pop();if(!i)continue;const a=Lh[i];a&&e.push(a)}return e}function fr(s,t=.62){return new Ee({color:s,roughness:t,metalness:0})}function ya(s,t,e,n=6){const i=new bt(new jn(s,t,3,n),e);return i.castShadow=!0,i}function Fn(s,t,e,n=6){const i=ya(s,t,e,n);return i.position.y=-(t/2),i}class cx{constructor(t,e,n,i){C(this,"root",new Qt);C(this,"hips");C(this,"spine");C(this,"chest");C(this,"neck");C(this,"head");C(this,"lShoulder");C(this,"lElbow");C(this,"rShoulder");C(this,"rElbow");C(this,"lHip");C(this,"lKnee");C(this,"rHip");C(this,"rKnee");C(this,"face");C(this,"skinMat");C(this,"clothMat");C(this,"hairMat");C(this,"weaponMesh",null);C(this,"armorMesh",null);C(this,"armorChest",null);C(this,"shortsMesh");C(this,"faceTex");this.skinMat=fr(t,.52),this.clothMat=fr(e,.72),this.hairMat=fr(n,.78),this.hips=new Qt,this.hips.position.y=.92,this.root.add(this.hips),this.shortsMesh=new bt(new Xt(.34,.16,.2),this.clothMat),this.shortsMesh.position.y=-.02,this.hips.add(this.shortsMesh),this.lHip=new Qt,this.lHip.position.set(-.09,-.06,0),this.hips.add(this.lHip),this.lHip.add(Fn(.065,.34,this.skinMat)),this.lKnee=new Qt,this.lKnee.position.y=-.36,this.lHip.add(this.lKnee),this.lKnee.add(Fn(.055,.34,this.skinMat));const a=new bt(new Xt(.08,.05,.16),this.skinMat);a.position.set(0,-.38,.03),this.lKnee.add(a),this.rHip=new Qt,this.rHip.position.set(.09,-.06,0),this.hips.add(this.rHip),this.rHip.add(Fn(.065,.34,this.skinMat)),this.rKnee=new Qt,this.rKnee.position.y=-.36,this.rHip.add(this.rKnee),this.rKnee.add(Fn(.055,.34,this.skinMat));const r=a.clone();this.rKnee.add(r),this.spine=new Qt,this.spine.position.y=.08,this.hips.add(this.spine),this.spine.add(ya(.12,.22,this.skinMat)),this.chest=new Qt,this.chest.position.y=.22,this.spine.add(this.chest),this.chest.add(ya(.13,.2,this.skinMat));const o=new bt(new Xt(.28,.08,.16),this.clothMat);o.position.y=.12,this.chest.add(o),this.lShoulder=new Qt,this.lShoulder.position.set(-.2,.12,0),this.chest.add(this.lShoulder),this.lShoulder.add(Fn(.05,.24,this.skinMat)),this.lElbow=new Qt,this.lElbow.position.y=-.26,this.lShoulder.add(this.lElbow),this.lElbow.add(Fn(.045,.22,this.skinMat)),this.rShoulder=new Qt,this.rShoulder.position.set(.2,.12,0),this.chest.add(this.rShoulder),this.rShoulder.add(Fn(.05,.24,this.skinMat)),this.rElbow=new Qt,this.rElbow.position.y=-.26,this.rShoulder.add(this.rElbow),this.rElbow.add(Fn(.045,.22,this.skinMat)),this.neck=new Qt,this.neck.position.y=.22,this.chest.add(this.neck),this.neck.add(ya(.045,.08,this.skinMat,5)),this.head=new Qt,this.head.position.y=.16,this.neck.add(this.head);const l=new bt(new As(.13,10,8),this.skinMat);this.head.add(l);const c=new bt(new As(.14,8,6),this.hairMat);c.position.y=.05,c.scale.set(1.08,.72,1.12),this.head.add(c),this.face=new bt(new Yi(.2,.24),new hi({transparent:!0,opacity:0,depthWrite:!1})),this.face.position.set(0,.02,-.128),this.face.rotation.y=Math.PI,this.head.add(this.face);const h=new bt(new Vo(.16,.018,6,14),new Ee({color:i,emissive:i,emissiveIntensity:.55,metalness:.15,roughness:.45}));h.position.y=.02,h.rotation.x=Math.PI/2,this.chest.add(h);const u=new bt(new Oo(.28,12),new hi({color:0,transparent:!0,opacity:.28,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.02,this.root.add(u)}setWeapon(t){if(this.weaponMesh&&(this.rElbow.remove(this.weaponMesh),this.weaponMesh.traverse(n=>{if(!(n instanceof bt))return;n.geometry.dispose();const i=n.material;Array.isArray(i)?i.forEach(a=>a.dispose()):i.dispose()}),this.weaponMesh=null),t<=0)return;const e=Math.max(1,Math.min(6,Math.round(t)));this.weaponMesh=dx(e),this.rElbow.add(this.weaponMesh)}setArmor(t){var i,a;if(this.armorMesh&&((i=this.armorMesh.parent)==null||i.remove(this.armorMesh),yc(this.armorMesh),this.armorMesh=null),this.armorChest&&((a=this.armorChest.parent)==null||a.remove(this.armorChest),yc(this.armorChest),this.armorChest=null),this.shortsMesh.visible=!0,t<=0)return;const e=Math.max(1,Math.min(8,Math.round(t))),n=mx(e);this.armorMesh=n.hips,this.armorChest=n.chest,this.hips.add(this.armorMesh),this.chest.add(this.armorChest),this.shortsMesh.visible=e<3}applyLook(t){this.skinMat.color.setHex(t.skin),this.clothMat.color.setHex(t.cloth),this.hairMat.color.setHex(t.hair),new _a().load(t.faceUrl,n=>{n.colorSpace=we,this.faceTex=n;const i=this.face.material;i.map=n,i.opacity=1,i.needsUpdate=!0})}pose(t,e,n){if(this.hips.rotation.set(0,0,0),this.spine.rotation.set(0,0,0),this.chest.rotation.set(0,0,0),this.neck.rotation.set(0,0,0),this.head.rotation.set(0,0,0),this.lShoulder.rotation.set(0,0,.12),this.rShoulder.rotation.set(0,0,-.12),this.lElbow.rotation.set(.15,0,0),this.rElbow.rotation.set(.15,0,0),this.lHip.rotation.set(0,0,.03),this.rHip.rotation.set(0,0,-.03),this.lKnee.rotation.set(.08,0,0),this.rKnee.rotation.set(.08,0,0),this.chest.position.y=.22,this.root.position.y=0,this.chest.scale.set(1,1,1),this.head.scale.set(1,1,1),this.face.scale.set(1,1,1),this.face.position.set(0,.02,-.128),this.face.rotation.z=0,t==="idle"){const a=Math.sin(e*1.7)*.065,r=Math.sin(e*1.7*.53+.7)*.032,o=Math.sin(e*1.7*.35)*.054+Math.sin(e*1.7*.18)*.024;this.spine.rotation.x=a+r,this.spine.rotation.z=o*.42,this.chest.position.y=.22+(a+r)*.65,this.chest.rotation.y=o*.5,this.hips.rotation.z=o*.6,this.lHip.rotation.z=.03+o*.2,this.rHip.rotation.z=-.03-o*.2,this.lShoulder.rotation.z=.12+Math.sin(e*1.7)*.042,this.rShoulder.rotation.z=-.12-Math.sin(e*1.7)*.042,this.lShoulder.rotation.x=o*.32,this.rShoulder.rotation.x=-o*.32,this.neck.rotation.x=a*.42,this.head.rotation.x=Math.sin(e*1.7*.9)*.022,this.head.rotation.y=o*.55,this.root.position.y=Math.abs(a)*.2;return}if(t==="walk"||t==="run"){const i=t==="run",a=n,r=(a==null?void 0:a.rate)??(i?16.8:10.45),o=(a==null?void 0:a.amp)??(i?1.14:.75),l=(a==null?void 0:a.lean)??(i?.311:.11),c=e*r,h=Math.sin(c),u=Math.sin(c*2),d=Math.sin(c+Math.PI);this.lHip.rotation.x=h*o,this.rHip.rotation.x=d*o,this.lHip.rotation.z=.07+h*(i?.142:.07),this.rHip.rotation.z=-.07-d*(i?.142:.07),this.lKnee.rotation.x=.215+Math.max(0,-h)*(i?1.98:1.12),this.rKnee.rotation.x=.215+Math.max(0,-d)*(i?1.98:1.12),this.lShoulder.rotation.x=d*(i?1.54:.82),this.rShoulder.rotation.x=h*(i?1.54:.82),this.lShoulder.rotation.z=.215+h*(i?.22:.114),this.rShoulder.rotation.z=-.215-h*(i?.22:.114),this.lElbow.rotation.x=.7+(i?1.08:.48),this.rElbow.rotation.x=.7+(i?1.08:.48),this.spine.rotation.x=l+Math.abs(u)*(i?.106:.054),this.spine.rotation.z=h*(i?.11:.056),this.chest.rotation.y=h*(i?.335:.165),this.chest.rotation.x=Math.abs(u)*(i?.094:.048),this.hips.rotation.y=h*(i?.168:.084),this.root.position.y=Math.abs(u)*(i?.236:.106);const p=1-Math.abs(u)*(i?.102:.049);this.chest.scale.set(1+(1-p)*.86,p,1+(1-p)*.52);return}if(t==="tickle"){const i=n,a=(i==null?void 0:i.rate)??28,r=(i==null?void 0:i.twistRate)??37,o=(i==null?void 0:i.spineBase)??.28,l=(i==null?void 0:i.spineAmp)??.046,c=(i==null?void 0:i.chestAmp)??.088,h=(i==null?void 0:i.shoulderAmp)??.246,u=(i==null?void 0:i.elbowAmp)??.44,d=Math.sin(e*a),p=Math.sin(e*r),g=Math.sin(e*a*1.37);this.spine.rotation.x=o+d*l,this.spine.rotation.z=g*l*.55,this.chest.rotation.y=p*c,this.chest.rotation.x=Math.abs(d)*c*.35,this.lShoulder.rotation.set(-1.28,.22+p*.08,.58+d*h),this.rShoulder.rotation.set(-1.18,-.28-p*.08,-.48-d*h),this.lElbow.rotation.x=-.48+d*u,this.rElbow.rotation.x=-.32-d*u*.95,this.head.rotation.x=.22+Math.abs(p)*.04,this.head.rotation.y=g*.05,this.lHip.rotation.x=.14+d*.03,this.rHip.rotation.x=-.1-d*.025,this.weaponMesh&&(this.weaponMesh.rotation.z=d*((i==null?void 0:i.weaponWag)??.49));return}if(t==="squirm"){const i=n,a=(i==null?void 0:i.rate)??14,r=((i==null?void 0:i.amp)??.1)*1.3,o=(i==null?void 0:i.lean)??.06,l=i==null?void 0:i.blend,c=(l==null?void 0:l.jaw)??.45,h=(l==null?void 0:l.cheek)??.3,u=(l==null?void 0:l.eye)??.4,d=(l==null?void 0:l.brow)??.2,p=Math.sin(e*a),g=Math.sin(e*a*.68),_=Math.sin(e*a*1.41),m=Math.sin(e*a*2.15),f=.5+.5*Math.abs(m);this.hips.rotation.z=p*r*1.2,this.hips.rotation.y=_*r*.5,this.spine.rotation.set(.24+g*o*.95,_*o*.4,p*o*1.45),this.chest.rotation.z=-p*r*1.15,this.chest.rotation.x=Math.abs(g)*o*.48,this.chest.rotation.y=m*r*.62,this.neck.rotation.set(g*o*.48,p*o*.62,_*r*.8),this.head.rotation.set(.12+g*o*.6+Math.abs(m)*.03,p*o*.7,_*o*.5),this.head.scale.set(1+h*.08*f,1+c*.05*f,1+h*.03);const M=c*f,E=u*(.55+.45*Math.abs(g));this.face.scale.set(1+h*.14*f,1+M*.3-E*.12,1),this.face.position.set(p*h*.006,.02+d*.03*f-M*.02,-.128),this.face.rotation.z=g*h*.05+p*.02,this.lShoulder.rotation.set(-.48+g*r*.8,.08,.62+p*r*2.4),this.rShoulder.rotation.set(-.42-g*r*.8,-.08,-.62-p*r*2.4),this.lElbow.rotation.x=.72+p*r*.9,this.rElbow.rotation.x=.68-p*r*.9,this.lHip.rotation.x=.28+p*r*1.1,this.rHip.rotation.x=.22-p*r*1.1,this.lKnee.rotation.x=.55+Math.abs(p)*r*.8,this.rKnee.rotation.x=.5+Math.abs(g)*r*.8,this.root.position.y=Math.abs(g)*r*.35;return}this.hips.rotation.x=.55,this.spine.rotation.x=.4,this.head.rotation.x=.35,this.lShoulder.rotation.set(.4,0,.5),this.rShoulder.rotation.set(.35,0,-.45),this.lHip.rotation.x=.8,this.rHip.rotation.x=.75,this.lKnee.rotation.x=.9,this.rKnee.rotation.x=.85}clipFor(t,e,n){return t==="tapped"||t==="spectate"?"tapped":t==="ticklee"||t==="nudge"&&n<0?"squirm":t==="tickler"||t==="nudge"?"tickle":e>4.4?"run":e>.4?"walk":"idle"}}const hx=[6965818,4872776,5913160,3820122,5916720,4864080];function ux(s){return new Ee({color:hx[s-1]??5914680,roughness:.82,metalness:0})}function dx(s){const t=new Qt,e=ux(s);let n;if(s===1)n=new bt(new Xt(.09,.05,.1),e);else if(s===2)n=new bt(new jn(.032,.12,3,6),e);else if(s===3)n=new bt(new Ii(.02,.18,6),e),n.rotation.x=Math.PI;else if(s===4)n=new bt(new Xt(.16,.018,.09),e);else if(s===5)n=new bt(new jn(.02,.22,3,6),e),n.scale.set(1,1.15,1);else{const i=new bt(new Ii(.022,.16,5),e),a=new bt(new Ii(.022,.16,5),e.clone());return i.rotation.set(Math.PI,0,-.18),a.rotation.set(Math.PI,0,.18),i.position.x=-.03,a.position.x=.03,i.castShadow=!0,a.castShadow=!0,t.add(i,a),t.position.set(.015,-.26,.04),t}return n.castShadow=!0,t.add(n),t.position.set(.015,-.26,.04),t}const fx=[3813932,3288626,2895924,2762788,2367528,3027496,2499618,2104354];function px(s){return new Ee({color:fx[s-1]??2762276,roughness:.86+Math.min(.08,s*.008),metalness:0})}function nn(s,t,e,n,i=0,a=0,r=0){const o=new bt(new Xt(s,t,e),n);return o.position.set(i,a,r),o.castShadow=!0,o}function mx(s){const t=new Qt,e=new Qt,n=px(s),i=1+(s-1)*.028;if(s===1)return t.add(nn(.36*i,.1,.22*i,n,0,-.04,0)),{hips:t,chest:e};if(s===2)return t.add(nn(.37*i,.11,.225*i,n,0,-.035,0)),e.add(nn(.29*i,.055,.17*i,n.clone(),0,.125,0)),{hips:t,chest:e};const a=.17+Math.min(.03,(s-3)*.006);if(t.add(nn(.38*i,a,.23*i,n,0,-.03,0)),s===3){const o=n.clone();return e.add(nn(.08,.1,.15,o,-.12,.1,0)),e.add(nn(.08,.1,.15,o.clone(),.12,.1,0)),{hips:t,chest:e}}const r=.085+(s-4)*.008;if(e.add(nn(.3*i,r,.175*i,n.clone(),0,.115,0)),s>=6){const o=n.clone();e.add(nn(.045,.12,.04,o,-.08,.12,.07)),e.add(nn(.045,.12,.04,o.clone(),.08,.12,.07))}return s>=8&&e.add(nn(.22*i,.045,.14,n.clone(),0,.16,0)),{hips:t,chest:e}}function yc(s){s.traverse(t=>{if(!(t instanceof bt))return;t.geometry.dispose();const e=t.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()})}const gx="laugh_squirm",_x="BriarKnox",vx="Briar Knox",yx=!1,bx=!1,xx={s0:{staminaMin:70,rate:8.09,amp:.0477,lean:.0264,billShake:.028,billRate:11.9,still:"stages/BriarKnox_s0.jpg",blend:{jaw:.261,cheek:.142,eye:.214,brow:.094}},s1:{staminaMin:40,rate:11.76,amp:.0795,lean:.0462,billShake:.056,billRate:15.3,still:"stages/BriarKnox_s1.jpg",blend:{jaw:.528,cheek:.353,eye:.478,brow:.201}},s2:{staminaMin:15,rate:14.7,amp:.106,lean:.066,billShake:.08,billRate:17,still:"stages/BriarKnox_s2.jpg",blend:{jaw:.874,cheek:.616,eye:.796,brow:.36}},s3:{staminaMin:0,rate:16.9,amp:.1325,lean:.0792,billShake:.108,billRate:20.4,still:"stages/BriarKnox_s3.jpg",blend:{jaw:1,cheek:.918,eye:1,brow:.535}}},Mx=2e3,Sx=["frames/BriarKnox_f0.jpg","frames/BriarKnox_f1.jpg","frames/BriarKnox_f2.jpg","frames/BriarKnox_f3.jpg","frames/BriarKnox_f4.jpg"],wx={clip:gx,slug:_x,display:vx,playerOnly:yx,metalException:bx,stages:xx,hubPreviewMs:Mx,frames:Sx},Ex="laugh_squirm",Tx="CassWynn",Ax="Cass Wynn",Rx=!1,Cx=!1,Lx={s0:{staminaMin:70,rate:8.28,amp:.0477,lean:.033,billShake:.028,billRate:11.9,still:"stages/CassWynn_s0.jpg",blend:{jaw:.262,cheek:.143,eye:.215,brow:.096}},s1:{staminaMin:40,rate:12.04,amp:.0795,lean:.0578,billShake:.056,billRate:15.3,still:"stages/CassWynn_s1.jpg",blend:{jaw:.472,cheek:.315,eye:.427,brow:.179}},s2:{staminaMin:15,rate:15.05,amp:.106,lean:.0825,billShake:.08,billRate:17,still:"stages/CassWynn_s2.jpg",blend:{jaw:.784,cheek:.554,eye:.715,brow:.323}},s3:{staminaMin:0,rate:17.31,amp:.1325,lean:.099,billShake:.108,billRate:20.4,still:"stages/CassWynn_s3.jpg",blend:{jaw:1,cheek:.933,eye:1,brow:.544}}},Px=2e3,Ux=["frames/CassWynn_f0.jpg","frames/CassWynn_f1.jpg","frames/CassWynn_f2.jpg","frames/CassWynn_f3.jpg","frames/CassWynn_f4.jpg"],Dx={clip:Ex,slug:Tx,display:Ax,playerOnly:Rx,metalException:Cx,stages:Lx,hubPreviewMs:Px,frames:Ux},kx="laugh_squirm",Ix="ElaraCase",Fx="Elara Case",Nx=!0,Bx=!0,Ox={s0:{staminaMin:70,rate:8.47,amp:.0405,lean:.0297,billShake:.0315,billRate:10.5,still:"stages/ElaraCase_s0.jpg",blend:{jaw:.264,cheek:.144,eye:.216,brow:.097}},s1:{staminaMin:40,rate:12.32,amp:.0675,lean:.052,billShake:.063,billRate:13.5,still:"stages/ElaraCase_s1.jpg",blend:{jaw:.478,cheek:.318,eye:.432,brow:.182}},s2:{staminaMin:15,rate:15.4,amp:.09,lean:.0743,billShake:.09,billRate:15,still:"stages/ElaraCase_s2.jpg",blend:{jaw:.795,cheek:.561,eye:.725,brow:.328}},s3:{staminaMin:0,rate:17.71,amp:.1125,lean:.0891,billShake:.1215,billRate:18,still:"stages/ElaraCase_s3.jpg",blend:{jaw:1,cheek:.947,eye:1,brow:.553}}},zx=2e3,Hx=["frames/ElaraCase_f0.jpg","frames/ElaraCase_f1.jpg","frames/ElaraCase_f2.jpg","frames/ElaraCase_f3.jpg","frames/ElaraCase_f4.jpg"],Vx={clip:kx,slug:Ix,display:Fx,playerOnly:Nx,metalException:Bx,stages:Ox,hubPreviewMs:zx,frames:Hx},$x="laugh_squirm",jx="EmberLang",Gx="Ember Lang",Wx=!1,Xx=!1,qx={s0:{staminaMin:70,rate:8.09,amp:.0477,lean:.0297,billShake:.0315,billRate:11.9,still:"stages/EmberLang_s0.jpg",blend:{jaw:.261,cheek:.142,eye:.214,brow:.094}},s1:{staminaMin:40,rate:11.76,amp:.0795,lean:.052,billShake:.063,billRate:15.3,still:"stages/EmberLang_s1.jpg",blend:{jaw:.528,cheek:.353,eye:.478,brow:.201}},s2:{staminaMin:15,rate:14.7,amp:.106,lean:.0743,billShake:.09,billRate:17,still:"stages/EmberLang_s2.jpg",blend:{jaw:.874,cheek:.616,eye:.796,brow:.36}},s3:{staminaMin:0,rate:16.9,amp:.1325,lean:.0891,billShake:.1215,billRate:20.4,still:"stages/EmberLang_s3.jpg",blend:{jaw:1,cheek:.918,eye:1,brow:.535}}},Kx=2e3,Yx=["frames/EmberLang_f0.jpg","frames/EmberLang_f1.jpg","frames/EmberLang_f2.jpg","frames/EmberLang_f3.jpg","frames/EmberLang_f4.jpg"],Jx={clip:$x,slug:jx,display:Gx,playerOnly:Wx,metalException:Xx,stages:qx,hubPreviewMs:Kx,frames:Yx},Zx="laugh_squirm",Qx="JunoHale",tM="Juno Hale",eM=!1,nM=!1,iM={s0:{staminaMin:70,rate:8.86,amp:.0405,lean:.033,billShake:.042,billRate:10.5,still:"stages/JunoHale_s0.jpg",blend:{jaw:.269,cheek:.146,eye:.219,brow:.098}},s1:{staminaMin:40,rate:12.88,amp:.0675,lean:.0578,billShake:.084,billRate:13.5,still:"stages/JunoHale_s1.jpg",blend:{jaw:.489,cheek:.326,eye:.443,brow:.187}},s2:{staminaMin:15,rate:16.1,amp:.09,lean:.0825,billShake:.12,billRate:15,still:"stages/JunoHale_s2.jpg",blend:{jaw:.82,cheek:.579,eye:.747,brow:.338}},s3:{staminaMin:0,rate:18.52,amp:.1125,lean:.099,billShake:.162,billRate:18,still:"stages/JunoHale_s3.jpg",blend:{jaw:1,cheek:.867,eye:1,brow:.506}}},sM=2e3,aM=["frames/JunoHale_f0.jpg","frames/JunoHale_f1.jpg","frames/JunoHale_f2.jpg","frames/JunoHale_f3.jpg","frames/JunoHale_f4.jpg"],rM={clip:Zx,slug:Qx,display:tM,playerOnly:eM,metalException:nM,stages:iM,hubPreviewMs:sM,frames:aM},oM="laugh_squirm",lM="KoraVale",cM="Kora Vale",hM=!1,uM=!1,dM={s0:{staminaMin:70,rate:8.66,amp:.0549,lean:.0297,billShake:.0385,billRate:13.3,still:"stages/KoraVale_s0.jpg",blend:{jaw:.267,cheek:.145,eye:.218,brow:.097}},s1:{staminaMin:40,rate:12.6,amp:.0915,lean:.052,billShake:.077,billRate:17.1,still:"stages/KoraVale_s1.jpg",blend:{jaw:.483,cheek:.322,eye:.438,brow:.184}},s2:{staminaMin:15,rate:15.75,amp:.122,lean:.0743,billShake:.11,billRate:19,still:"stages/KoraVale_s2.jpg",blend:{jaw:.807,cheek:.57,eye:.736,brow:.333}},s3:{staminaMin:0,rate:18.11,amp:.1525,lean:.0891,billShake:.1485,billRate:22.8,still:"stages/KoraVale_s3.jpg",blend:{jaw:1,cheek:.852,eye:1,brow:.497}}},fM=2e3,pM=["frames/KoraVale_f0.jpg","frames/KoraVale_f1.jpg","frames/KoraVale_f2.jpg","frames/KoraVale_f3.jpg","frames/KoraVale_f4.jpg"],mM={clip:oM,slug:lM,display:cM,playerOnly:hM,metalException:uM,stages:dM,hubPreviewMs:fM,frames:pM},gM="laugh_squirm",_M="LyraFinch",vM="Lyra Finch",yM=!1,bM=!1,xM={s0:{staminaMin:70,rate:8,amp:.0441,lean:.0264,billShake:.035,billRate:11.2,still:"stages/LyraFinch_s0.jpg",blend:{jaw:.256,cheek:.14,eye:.21,brow:.093}},s1:{staminaMin:40,rate:11.2,amp:.0735,lean:.0462,billShake:.07,billRate:14.4,still:"stages/LyraFinch_s1.jpg",blend:{jaw:.516,cheek:.344,eye:.467,brow:.196}},s2:{staminaMin:15,rate:14,amp:.098,lean:.066,billShake:.1,billRate:16,still:"stages/LyraFinch_s2.jpg",blend:{jaw:.85,cheek:.6,eye:.775,brow:.35}},s3:{staminaMin:0,rate:16.1,amp:.1225,lean:.0792,billShake:.135,billRate:19.2,still:"stages/LyraFinch_s3.jpg",blend:{jaw:1,cheek:.888,eye:1,brow:.518}}},MM=2e3,SM=["frames/LyraFinch_f0.jpg","frames/LyraFinch_f1.jpg","frames/LyraFinch_f2.jpg","frames/LyraFinch_f3.jpg","frames/LyraFinch_f4.jpg"],wM={clip:gM,slug:_M,display:vM,playerOnly:yM,metalException:bM,stages:xM,hubPreviewMs:MM,frames:SM},EM="laugh_squirm",TM="MiraSolis",AM="Mira Solis",RM=!1,CM=!1,LM={s0:{staminaMin:70,rate:8.66,amp:.0405,lean:.0363,billShake:.0385,billRate:10.5,still:"stages/MiraSolis_s0.jpg",blend:{jaw:.267,cheek:.145,eye:.218,brow:.097}},s1:{staminaMin:40,rate:12.6,amp:.0675,lean:.0635,billShake:.077,billRate:13.5,still:"stages/MiraSolis_s1.jpg",blend:{jaw:.483,cheek:.322,eye:.438,brow:.184}},s2:{staminaMin:15,rate:15.75,amp:.09,lean:.0907,billShake:.11,billRate:15,still:"stages/MiraSolis_s2.jpg",blend:{jaw:.807,cheek:.57,eye:.736,brow:.333}},s3:{staminaMin:0,rate:18.11,amp:.1125,lean:.1089,billShake:.1485,billRate:18,still:"stages/MiraSolis_s3.jpg",blend:{jaw:1,cheek:.852,eye:1,brow:.497}}},PM=2e3,UM=["frames/MiraSolis_f0.jpg","frames/MiraSolis_f1.jpg","frames/MiraSolis_f2.jpg","frames/MiraSolis_f3.jpg","frames/MiraSolis_f4.jpg"],DM={clip:EM,slug:TM,display:AM,playerOnly:RM,metalException:CM,stages:LM,hubPreviewMs:PM,frames:UM},kM="laugh_squirm",IM="NimCortez",FM="Nim Cortez",NM=!1,BM=!1,OM={s0:{staminaMin:70,rate:8.86,amp:.0513,lean:.0363,billShake:.0455,billRate:12.6,still:"stages/NimCortez_s0.jpg",blend:{jaw:.269,cheek:.146,eye:.219,brow:.098}},s1:{staminaMin:40,rate:12.88,amp:.0855,lean:.0635,billShake:.091,billRate:16.2,still:"stages/NimCortez_s1.jpg",blend:{jaw:.489,cheek:.326,eye:.443,brow:.187}},s2:{staminaMin:15,rate:16.1,amp:.114,lean:.0907,billShake:.13,billRate:18,still:"stages/NimCortez_s2.jpg",blend:{jaw:.82,cheek:.579,eye:.747,brow:.338}},s3:{staminaMin:0,rate:18.52,amp:.1425,lean:.1089,billShake:.1755,billRate:21.6,still:"stages/NimCortez_s3.jpg",blend:{jaw:1,cheek:.867,eye:1,brow:.506}}},zM=2e3,HM=["frames/NimCortez_f0.jpg","frames/NimCortez_f1.jpg","frames/NimCortez_f2.jpg","frames/NimCortez_f3.jpg","frames/NimCortez_f4.jpg"],VM={clip:kM,slug:IM,display:FM,playerOnly:NM,metalException:BM,stages:OM,hubPreviewMs:zM,frames:HM},$M="laugh_squirm",jM="RynAshford",GM="Ryn Ashford",WM=!1,XM=!1,qM={s0:{staminaMin:70,rate:8.09,amp:.0549,lean:.0264,billShake:.042,billRate:13.3,still:"stages/RynAshford_s0.jpg",blend:{jaw:.261,cheek:.142,eye:.214,brow:.094}},s1:{staminaMin:40,rate:11.76,amp:.0915,lean:.0462,billShake:.084,billRate:17.1,still:"stages/RynAshford_s1.jpg",blend:{jaw:.528,cheek:.353,eye:.478,brow:.201}},s2:{staminaMin:15,rate:14.7,amp:.122,lean:.066,billShake:.12,billRate:19,still:"stages/RynAshford_s2.jpg",blend:{jaw:.874,cheek:.616,eye:.796,brow:.36}},s3:{staminaMin:0,rate:16.9,amp:.1525,lean:.0792,billShake:.162,billRate:22.8,still:"stages/RynAshford_s3.jpg",blend:{jaw:1,cheek:.918,eye:1,brow:.535}}},KM=2e3,YM=["frames/RynAshford_f0.jpg","frames/RynAshford_f1.jpg","frames/RynAshford_f2.jpg","frames/RynAshford_f3.jpg","frames/RynAshford_f4.jpg"],JM={clip:$M,slug:jM,display:GM,playerOnly:WM,metalException:XM,stages:qM,hubPreviewMs:KM,frames:YM},ZM="laugh_squirm",QM="SableQuinn",t1="Sable Quinn",e1=!1,n1=!1,i1={s0:{staminaMin:70,rate:8.09,amp:.0405,lean:.033,billShake:.035,billRate:10.5,still:"stages/SableQuinn_s0.jpg",blend:{jaw:.261,cheek:.142,eye:.214,brow:.094}},s1:{staminaMin:40,rate:11.76,amp:.0675,lean:.0578,billShake:.07,billRate:13.5,still:"stages/SableQuinn_s1.jpg",blend:{jaw:.528,cheek:.353,eye:.478,brow:.201}},s2:{staminaMin:15,rate:14.7,amp:.09,lean:.0825,billShake:.1,billRate:15,still:"stages/SableQuinn_s2.jpg",blend:{jaw:.874,cheek:.616,eye:.796,brow:.36}},s3:{staminaMin:0,rate:16.9,amp:.1125,lean:.099,billShake:.135,billRate:18,still:"stages/SableQuinn_s3.jpg",blend:{jaw:1,cheek:.918,eye:1,brow:.535}}},s1=2e3,a1=["frames/SableQuinn_f0.jpg","frames/SableQuinn_f1.jpg","frames/SableQuinn_f2.jpg","frames/SableQuinn_f3.jpg","frames/SableQuinn_f4.jpg"],r1={clip:ZM,slug:QM,display:t1,playerOnly:e1,metalException:n1,stages:i1,hubPreviewMs:s1,frames:a1},o1="laugh_squirm",l1="TorenBlake",c1="Toren Blake",h1=!1,u1=!1,d1={s0:{staminaMin:70,rate:8.66,amp:.0549,lean:.0363,billShake:.0385,billRate:13.3,still:"stages/TorenBlake_s0.jpg",blend:{jaw:.267,cheek:.145,eye:.218,brow:.097}},s1:{staminaMin:40,rate:12.6,amp:.0915,lean:.0635,billShake:.077,billRate:17.1,still:"stages/TorenBlake_s1.jpg",blend:{jaw:.483,cheek:.322,eye:.438,brow:.184}},s2:{staminaMin:15,rate:15.75,amp:.122,lean:.0907,billShake:.11,billRate:19,still:"stages/TorenBlake_s2.jpg",blend:{jaw:.807,cheek:.57,eye:.736,brow:.333}},s3:{staminaMin:0,rate:18.11,amp:.1525,lean:.1089,billShake:.1485,billRate:22.8,still:"stages/TorenBlake_s3.jpg",blend:{jaw:1,cheek:.852,eye:1,brow:.497}}},f1=2e3,p1=["frames/TorenBlake_f0.jpg","frames/TorenBlake_f1.jpg","frames/TorenBlake_f2.jpg","frames/TorenBlake_f3.jpg","frames/TorenBlake_f4.jpg"],m1={clip:o1,slug:l1,display:c1,playerOnly:h1,metalException:u1,stages:d1,hubPreviewMs:f1,frames:p1},g1="laugh_squirm",_1="VeshMarlowe",v1="Vesh Marlowe",y1=!1,b1=!1,x1={s0:{staminaMin:70,rate:8.86,amp:.0513,lean:.0297,billShake:.0455,billRate:12.6,still:"stages/VeshMarlowe_s0.jpg",blend:{jaw:.269,cheek:.146,eye:.219,brow:.098}},s1:{staminaMin:40,rate:12.88,amp:.0855,lean:.052,billShake:.091,billRate:16.2,still:"stages/VeshMarlowe_s1.jpg",blend:{jaw:.489,cheek:.326,eye:.443,brow:.187}},s2:{staminaMin:15,rate:16.1,amp:.114,lean:.0743,billShake:.13,billRate:18,still:"stages/VeshMarlowe_s2.jpg",blend:{jaw:.82,cheek:.579,eye:.747,brow:.338}},s3:{staminaMin:0,rate:18.52,amp:.1425,lean:.0891,billShake:.1755,billRate:21.6,still:"stages/VeshMarlowe_s3.jpg",blend:{jaw:1,cheek:.867,eye:1,brow:.506}}},M1=2e3,S1=["frames/VeshMarlowe_f0.jpg","frames/VeshMarlowe_f1.jpg","frames/VeshMarlowe_f2.jpg","frames/VeshMarlowe_f3.jpg","frames/VeshMarlowe_f4.jpg"],w1={clip:g1,slug:_1,display:v1,playerOnly:y1,metalException:b1,stages:x1,hubPreviewMs:M1,frames:S1},E1=""+new URL("BriarKnox-Dpa0Hutf.jpg",import.meta.url).href,T1=""+new URL("BriarKnox_f1-DIMGVEmx.jpg",import.meta.url).href,A1=""+new URL("BriarKnox_f2-Di8hF-Yk.jpg",import.meta.url).href,R1=""+new URL("BriarKnox_f3-YiiMhUlk.jpg",import.meta.url).href,C1=""+new URL("CassWynn-DlWuid-D.jpg",import.meta.url).href,L1=""+new URL("CassWynn_f1-CKr-Jcv6.jpg",import.meta.url).href,P1=""+new URL("CassWynn_f2-M_Ls8jj7.jpg",import.meta.url).href,U1=""+new URL("CassWynn_f3-CIx9adPu.jpg",import.meta.url).href,D1=""+new URL("ElaraCase-D5jHayJQ.jpg",import.meta.url).href,k1=""+new URL("ElaraCase_f1-CsM2UzSS.jpg",import.meta.url).href,I1=""+new URL("ElaraCase_f2-Cny9ENB7.jpg",import.meta.url).href,F1=""+new URL("ElaraCase_f3-BbFUFlc5.jpg",import.meta.url).href,N1=""+new URL("EmberLang-DX9vz0jP.jpg",import.meta.url).href,B1=""+new URL("EmberLang_f1-pyLMsxkt.jpg",import.meta.url).href,O1=""+new URL("EmberLang_f2-CyS1vDsI.jpg",import.meta.url).href,z1=""+new URL("EmberLang_f3-BLxeIw9m.jpg",import.meta.url).href,H1=""+new URL("JunoHale-CrdaXpZ2.jpg",import.meta.url).href,V1=""+new URL("JunoHale_f1-DB0nbufa.jpg",import.meta.url).href,$1=""+new URL("JunoHale_f2-DB6nTvrK.jpg",import.meta.url).href,j1=""+new URL("JunoHale_f3-Bw0-1uEi.jpg",import.meta.url).href,G1=""+new URL("KoraVale-Bxh0eoY1.jpg",import.meta.url).href,W1=""+new URL("KoraVale_f1-BYtFFfJG.jpg",import.meta.url).href,X1=""+new URL("KoraVale_f2-CDGA2Z4I.jpg",import.meta.url).href,q1=""+new URL("KoraVale_f3-CL3ypQCy.jpg",import.meta.url).href,K1=""+new URL("LyraFinch-CSDNR9Pf.jpg",import.meta.url).href,Y1=""+new URL("LyraFinch_f1-DziovBVK.jpg",import.meta.url).href,J1=""+new URL("LyraFinch_f2-DZqsSqYh.jpg",import.meta.url).href,Z1=""+new URL("LyraFinch_f3-B2UerdWv.jpg",import.meta.url).href,Q1=""+new URL("MiraSolis-CmAre_4Z.jpg",import.meta.url).href,tS=""+new URL("MiraSolis_f1-B-OTsIL-.jpg",import.meta.url).href,eS=""+new URL("MiraSolis_f2-BOaMOtBB.jpg",import.meta.url).href,nS=""+new URL("MiraSolis_f3-CTXvZWL3.jpg",import.meta.url).href,iS=""+new URL("NimCortez-_04Y7Q6K.jpg",import.meta.url).href,sS=""+new URL("NimCortez_f1-dC97P4M3.jpg",import.meta.url).href,aS=""+new URL("NimCortez_f2-CGr2HMy8.jpg",import.meta.url).href,rS=""+new URL("NimCortez_f3-4IwMBh0p.jpg",import.meta.url).href,oS=""+new URL("RynAshford-Dug0-cz-.jpg",import.meta.url).href,lS=""+new URL("RynAshford_f1-pUdHYG6r.jpg",import.meta.url).href,cS=""+new URL("RynAshford_f2-C0MIj3Xz.jpg",import.meta.url).href,hS=""+new URL("RynAshford_f3-I9cqQB3j.jpg",import.meta.url).href,uS=""+new URL("SableQuinn-mzonjDUr.jpg",import.meta.url).href,dS=""+new URL("SableQuinn_f1-d7oM_zVx.jpg",import.meta.url).href,fS=""+new URL("SableQuinn_f2-D9sDv-wf.jpg",import.meta.url).href,pS=""+new URL("SableQuinn_f3-CT0FNdr2.jpg",import.meta.url).href,mS=""+new URL("TorenBlake-CbL0FLGN.jpg",import.meta.url).href,gS=""+new URL("TorenBlake_f1-Cwaleigs.jpg",import.meta.url).href,_S=""+new URL("TorenBlake_f2-DUisWtKY.jpg",import.meta.url).href,vS=""+new URL("TorenBlake_f3-CZRKFiql.jpg",import.meta.url).href,yS=""+new URL("VeshMarlowe-BWw8zQpl.jpg",import.meta.url).href,bS=""+new URL("VeshMarlowe_f1-FSFnD6eg.jpg",import.meta.url).href,xS=""+new URL("VeshMarlowe_f2-B9J_Gfml.jpg",import.meta.url).href,MS=""+new URL("VeshMarlowe_f3-BzsplEhK.jpg",import.meta.url).href,SS=""+new URL("BriarKnox-Dpa0Hutf.jpg",import.meta.url).href,wS=""+new URL("BriarKnox_f1-DIMGVEmx.jpg",import.meta.url).href,ES=""+new URL("BriarKnox_f2-Di8hF-Yk.jpg",import.meta.url).href,TS=""+new URL("BriarKnox_f3-YiiMhUlk.jpg",import.meta.url).href,AS=""+new URL("BriarKnox_f4-Bqpo5RR5.jpg",import.meta.url).href,RS=""+new URL("CassWynn-DlWuid-D.jpg",import.meta.url).href,CS=""+new URL("CassWynn_f1-CKr-Jcv6.jpg",import.meta.url).href,LS=""+new URL("CassWynn_f2-M_Ls8jj7.jpg",import.meta.url).href,PS=""+new URL("CassWynn_f3-CIx9adPu.jpg",import.meta.url).href,US=""+new URL("CassWynn_f4-BQUXR5jI.jpg",import.meta.url).href,DS=""+new URL("ElaraCase-D5jHayJQ.jpg",import.meta.url).href,kS=""+new URL("ElaraCase_f1-CsM2UzSS.jpg",import.meta.url).href,IS=""+new URL("ElaraCase_f2-Cny9ENB7.jpg",import.meta.url).href,FS=""+new URL("ElaraCase_f3-BbFUFlc5.jpg",import.meta.url).href,NS=""+new URL("ElaraCase_f4-DSgU1WAV.jpg",import.meta.url).href,BS=""+new URL("EmberLang-DX9vz0jP.jpg",import.meta.url).href,OS=""+new URL("EmberLang_f1-pyLMsxkt.jpg",import.meta.url).href,zS=""+new URL("EmberLang_f2-CyS1vDsI.jpg",import.meta.url).href,HS=""+new URL("EmberLang_f3-BLxeIw9m.jpg",import.meta.url).href,VS=""+new URL("EmberLang_f4-BFGRPb-8.jpg",import.meta.url).href,$S=""+new URL("JunoHale-CrdaXpZ2.jpg",import.meta.url).href,jS=""+new URL("JunoHale_f1-DB0nbufa.jpg",import.meta.url).href,GS=""+new URL("JunoHale_f2-DB6nTvrK.jpg",import.meta.url).href,WS=""+new URL("JunoHale_f3-Bw0-1uEi.jpg",import.meta.url).href,XS=""+new URL("JunoHale_f4-CpYgdOZp.jpg",import.meta.url).href,qS=""+new URL("KoraVale-Bxh0eoY1.jpg",import.meta.url).href,KS=""+new URL("KoraVale_f1-BYtFFfJG.jpg",import.meta.url).href,YS=""+new URL("KoraVale_f2-CDGA2Z4I.jpg",import.meta.url).href,JS=""+new URL("KoraVale_f3-CL3ypQCy.jpg",import.meta.url).href,ZS=""+new URL("KoraVale_f4-Ba_e9JYy.jpg",import.meta.url).href,QS=""+new URL("LyraFinch-CSDNR9Pf.jpg",import.meta.url).href,tw=""+new URL("LyraFinch_f1-DziovBVK.jpg",import.meta.url).href,ew=""+new URL("LyraFinch_f2-DZqsSqYh.jpg",import.meta.url).href,nw=""+new URL("LyraFinch_f3-B2UerdWv.jpg",import.meta.url).href,iw=""+new URL("LyraFinch_f4-BgOfOzJq.jpg",import.meta.url).href,sw=""+new URL("MiraSolis-CmAre_4Z.jpg",import.meta.url).href,aw=""+new URL("MiraSolis_f1-B-OTsIL-.jpg",import.meta.url).href,rw=""+new URL("MiraSolis_f2-BOaMOtBB.jpg",import.meta.url).href,ow=""+new URL("MiraSolis_f3-CTXvZWL3.jpg",import.meta.url).href,lw=""+new URL("MiraSolis_f4-DF8fJesE.jpg",import.meta.url).href,cw=""+new URL("NimCortez-_04Y7Q6K.jpg",import.meta.url).href,hw=""+new URL("NimCortez_f1-dC97P4M3.jpg",import.meta.url).href,uw=""+new URL("NimCortez_f2-CGr2HMy8.jpg",import.meta.url).href,dw=""+new URL("NimCortez_f3-4IwMBh0p.jpg",import.meta.url).href,fw=""+new URL("NimCortez_f4-QVQbvpkz.jpg",import.meta.url).href,pw=""+new URL("RynAshford-Dug0-cz-.jpg",import.meta.url).href,mw=""+new URL("RynAshford_f1-pUdHYG6r.jpg",import.meta.url).href,gw=""+new URL("RynAshford_f2-C0MIj3Xz.jpg",import.meta.url).href,_w=""+new URL("RynAshford_f3-I9cqQB3j.jpg",import.meta.url).href,vw=""+new URL("RynAshford_f4-BUrZMzvq.jpg",import.meta.url).href,yw=""+new URL("SableQuinn-mzonjDUr.jpg",import.meta.url).href,bw=""+new URL("SableQuinn_f1-d7oM_zVx.jpg",import.meta.url).href,xw=""+new URL("SableQuinn_f2-D9sDv-wf.jpg",import.meta.url).href,Mw=""+new URL("SableQuinn_f3-CT0FNdr2.jpg",import.meta.url).href,Sw=""+new URL("SableQuinn_f4-cIlfyQOQ.jpg",import.meta.url).href,ww=""+new URL("TorenBlake-CbL0FLGN.jpg",import.meta.url).href,Ew=""+new URL("TorenBlake_f1-Cwaleigs.jpg",import.meta.url).href,Tw=""+new URL("TorenBlake_f2-DUisWtKY.jpg",import.meta.url).href,Aw=""+new URL("TorenBlake_f3-CZRKFiql.jpg",import.meta.url).href,Rw=""+new URL("TorenBlake_f4-DgQS8ksQ.jpg",import.meta.url).href,Cw=""+new URL("VeshMarlowe-BWw8zQpl.jpg",import.meta.url).href,Lw=""+new URL("VeshMarlowe_f1-FSFnD6eg.jpg",import.meta.url).href,Pw=""+new URL("VeshMarlowe_f2-B9J_Gfml.jpg",import.meta.url).href,Uw=""+new URL("VeshMarlowe_f3-BzsplEhK.jpg",import.meta.url).href,Dw=""+new URL("VeshMarlowe_f4-DFEWc3Kq.jpg",import.meta.url).href,kw=Object.assign({"../../assets/binds/laugh/BriarKnox.laugh.json":wx,"../../assets/binds/laugh/CassWynn.laugh.json":Dx,"../../assets/binds/laugh/ElaraCase.laugh.json":Vx,"../../assets/binds/laugh/EmberLang.laugh.json":Jx,"../../assets/binds/laugh/JunoHale.laugh.json":rM,"../../assets/binds/laugh/KoraVale.laugh.json":mM,"../../assets/binds/laugh/LyraFinch.laugh.json":wM,"../../assets/binds/laugh/MiraSolis.laugh.json":DM,"../../assets/binds/laugh/NimCortez.laugh.json":VM,"../../assets/binds/laugh/RynAshford.laugh.json":JM,"../../assets/binds/laugh/SableQuinn.laugh.json":r1,"../../assets/binds/laugh/TorenBlake.laugh.json":m1,"../../assets/binds/laugh/VeshMarlowe.laugh.json":w1}),zi={};var Bc;for(const[s,t]of Object.entries(kw)){const e=(Bc=s.split("/").pop())==null?void 0:Bc.replace(/\.laugh\.json$/i,"");!e||!t||(zi[e]=t,t.slug&&(zi[t.slug]=t))}const _o=8,vo=24,Iw=8,Fw=24,Nw=.2,Bw=.12,Ow=.2,Le=(s,t,e)=>Number.isFinite(s)?Math.max(t,Math.min(e,s)):t;function zw(s,t="?"){return{...s,staminaMin:Le(s.staminaMin,0,100),rate:Le(s.rate,Iw,Fw),amp:Le(s.amp,0,Nw),lean:Le(s.lean,0,Bw),billShake:Le(s.billShake,0,Ow),billRate:Le(s.billRate,_o,vo),blend:s.blend?{jaw:Le(s.blend.jaw,0,1),cheek:Le(s.blend.cheek,0,1),eye:Le(s.blend.eye,0,1),brow:Le(s.blend.brow,0,1)}:void 0}}function Ph(s){const t={};for(const e of["s0","s1","s2","s3"])t[e]=zw(s.stages[e],`${s.slug}.${e}`);return{...s,stages:t}}for(const s of Object.keys(zi))zi[s]=Ph(zi[s]);const bc=Ph({clip:"laugh_squirm",slug:"default",display:"Default",stages:{s0:{staminaMin:70,rate:8,amp:.04,lean:.03,billShake:.03,billRate:10,blend:{jaw:.26,cheek:.14,eye:.21,brow:.09}},s1:{staminaMin:40,rate:11,amp:.07,lean:.05,billShake:.06,billRate:13,blend:{jaw:.51,cheek:.34,eye:.46,brow:.2}},s2:{staminaMin:15,rate:14,amp:.1,lean:.07,billShake:.09,billRate:16,blend:{jaw:.85,cheek:.6,eye:.78,brow:.35}},s3:{staminaMin:0,rate:16,amp:.13,lean:.09,billShake:.12,billRate:19,blend:{jaw:1,cheek:.92,eye:1,brow:.54}}},hubPreviewMs:2e3});function ba(s){return s?zi[s]??bc:bc}function xa(s){const t=Oi(s);return ba(t.slug)}const Hw=Object.assign({"../../assets/binds/laugh/stages/BriarKnox_s0.jpg":E1,"../../assets/binds/laugh/stages/BriarKnox_s1.jpg":T1,"../../assets/binds/laugh/stages/BriarKnox_s2.jpg":A1,"../../assets/binds/laugh/stages/BriarKnox_s3.jpg":R1,"../../assets/binds/laugh/stages/CassWynn_s0.jpg":C1,"../../assets/binds/laugh/stages/CassWynn_s1.jpg":L1,"../../assets/binds/laugh/stages/CassWynn_s2.jpg":P1,"../../assets/binds/laugh/stages/CassWynn_s3.jpg":U1,"../../assets/binds/laugh/stages/ElaraCase_s0.jpg":D1,"../../assets/binds/laugh/stages/ElaraCase_s1.jpg":k1,"../../assets/binds/laugh/stages/ElaraCase_s2.jpg":I1,"../../assets/binds/laugh/stages/ElaraCase_s3.jpg":F1,"../../assets/binds/laugh/stages/EmberLang_s0.jpg":N1,"../../assets/binds/laugh/stages/EmberLang_s1.jpg":B1,"../../assets/binds/laugh/stages/EmberLang_s2.jpg":O1,"../../assets/binds/laugh/stages/EmberLang_s3.jpg":z1,"../../assets/binds/laugh/stages/JunoHale_s0.jpg":H1,"../../assets/binds/laugh/stages/JunoHale_s1.jpg":V1,"../../assets/binds/laugh/stages/JunoHale_s2.jpg":$1,"../../assets/binds/laugh/stages/JunoHale_s3.jpg":j1,"../../assets/binds/laugh/stages/KoraVale_s0.jpg":G1,"../../assets/binds/laugh/stages/KoraVale_s1.jpg":W1,"../../assets/binds/laugh/stages/KoraVale_s2.jpg":X1,"../../assets/binds/laugh/stages/KoraVale_s3.jpg":q1,"../../assets/binds/laugh/stages/LyraFinch_s0.jpg":K1,"../../assets/binds/laugh/stages/LyraFinch_s1.jpg":Y1,"../../assets/binds/laugh/stages/LyraFinch_s2.jpg":J1,"../../assets/binds/laugh/stages/LyraFinch_s3.jpg":Z1,"../../assets/binds/laugh/stages/MiraSolis_s0.jpg":Q1,"../../assets/binds/laugh/stages/MiraSolis_s1.jpg":tS,"../../assets/binds/laugh/stages/MiraSolis_s2.jpg":eS,"../../assets/binds/laugh/stages/MiraSolis_s3.jpg":nS,"../../assets/binds/laugh/stages/NimCortez_s0.jpg":iS,"../../assets/binds/laugh/stages/NimCortez_s1.jpg":sS,"../../assets/binds/laugh/stages/NimCortez_s2.jpg":aS,"../../assets/binds/laugh/stages/NimCortez_s3.jpg":rS,"../../assets/binds/laugh/stages/RynAshford_s0.jpg":oS,"../../assets/binds/laugh/stages/RynAshford_s1.jpg":lS,"../../assets/binds/laugh/stages/RynAshford_s2.jpg":cS,"../../assets/binds/laugh/stages/RynAshford_s3.jpg":hS,"../../assets/binds/laugh/stages/SableQuinn_s0.jpg":uS,"../../assets/binds/laugh/stages/SableQuinn_s1.jpg":dS,"../../assets/binds/laugh/stages/SableQuinn_s2.jpg":fS,"../../assets/binds/laugh/stages/SableQuinn_s3.jpg":pS,"../../assets/binds/laugh/stages/TorenBlake_s0.jpg":mS,"../../assets/binds/laugh/stages/TorenBlake_s1.jpg":gS,"../../assets/binds/laugh/stages/TorenBlake_s2.jpg":_S,"../../assets/binds/laugh/stages/TorenBlake_s3.jpg":vS,"../../assets/binds/laugh/stages/VeshMarlowe_s0.jpg":yS,"../../assets/binds/laugh/stages/VeshMarlowe_s1.jpg":bS,"../../assets/binds/laugh/stages/VeshMarlowe_s2.jpg":xS,"../../assets/binds/laugh/stages/VeshMarlowe_s3.jpg":MS}),Uh={};for(const[s,t]of Object.entries(Hw)){const e=s.split("/").pop();e&&(Uh[e]=t)}function Vw(s){const t=s.still;if(!t)return;const e=t.split("/").pop();if(e)return Uh[e]}const $w=Object.assign({"../../assets/binds/laugh/frames/BriarKnox_f0.jpg":SS,"../../assets/binds/laugh/frames/BriarKnox_f1.jpg":wS,"../../assets/binds/laugh/frames/BriarKnox_f2.jpg":ES,"../../assets/binds/laugh/frames/BriarKnox_f3.jpg":TS,"../../assets/binds/laugh/frames/BriarKnox_f4.jpg":AS,"../../assets/binds/laugh/frames/CassWynn_f0.jpg":RS,"../../assets/binds/laugh/frames/CassWynn_f1.jpg":CS,"../../assets/binds/laugh/frames/CassWynn_f2.jpg":LS,"../../assets/binds/laugh/frames/CassWynn_f3.jpg":PS,"../../assets/binds/laugh/frames/CassWynn_f4.jpg":US,"../../assets/binds/laugh/frames/ElaraCase_f0.jpg":DS,"../../assets/binds/laugh/frames/ElaraCase_f1.jpg":kS,"../../assets/binds/laugh/frames/ElaraCase_f2.jpg":IS,"../../assets/binds/laugh/frames/ElaraCase_f3.jpg":FS,"../../assets/binds/laugh/frames/ElaraCase_f4.jpg":NS,"../../assets/binds/laugh/frames/EmberLang_f0.jpg":BS,"../../assets/binds/laugh/frames/EmberLang_f1.jpg":OS,"../../assets/binds/laugh/frames/EmberLang_f2.jpg":zS,"../../assets/binds/laugh/frames/EmberLang_f3.jpg":HS,"../../assets/binds/laugh/frames/EmberLang_f4.jpg":VS,"../../assets/binds/laugh/frames/JunoHale_f0.jpg":$S,"../../assets/binds/laugh/frames/JunoHale_f1.jpg":jS,"../../assets/binds/laugh/frames/JunoHale_f2.jpg":GS,"../../assets/binds/laugh/frames/JunoHale_f3.jpg":WS,"../../assets/binds/laugh/frames/JunoHale_f4.jpg":XS,"../../assets/binds/laugh/frames/KoraVale_f0.jpg":qS,"../../assets/binds/laugh/frames/KoraVale_f1.jpg":KS,"../../assets/binds/laugh/frames/KoraVale_f2.jpg":YS,"../../assets/binds/laugh/frames/KoraVale_f3.jpg":JS,"../../assets/binds/laugh/frames/KoraVale_f4.jpg":ZS,"../../assets/binds/laugh/frames/LyraFinch_f0.jpg":QS,"../../assets/binds/laugh/frames/LyraFinch_f1.jpg":tw,"../../assets/binds/laugh/frames/LyraFinch_f2.jpg":ew,"../../assets/binds/laugh/frames/LyraFinch_f3.jpg":nw,"../../assets/binds/laugh/frames/LyraFinch_f4.jpg":iw,"../../assets/binds/laugh/frames/MiraSolis_f0.jpg":sw,"../../assets/binds/laugh/frames/MiraSolis_f1.jpg":aw,"../../assets/binds/laugh/frames/MiraSolis_f2.jpg":rw,"../../assets/binds/laugh/frames/MiraSolis_f3.jpg":ow,"../../assets/binds/laugh/frames/MiraSolis_f4.jpg":lw,"../../assets/binds/laugh/frames/NimCortez_f0.jpg":cw,"../../assets/binds/laugh/frames/NimCortez_f1.jpg":hw,"../../assets/binds/laugh/frames/NimCortez_f2.jpg":uw,"../../assets/binds/laugh/frames/NimCortez_f3.jpg":dw,"../../assets/binds/laugh/frames/NimCortez_f4.jpg":fw,"../../assets/binds/laugh/frames/RynAshford_f0.jpg":pw,"../../assets/binds/laugh/frames/RynAshford_f1.jpg":mw,"../../assets/binds/laugh/frames/RynAshford_f2.jpg":gw,"../../assets/binds/laugh/frames/RynAshford_f3.jpg":_w,"../../assets/binds/laugh/frames/RynAshford_f4.jpg":vw,"../../assets/binds/laugh/frames/SableQuinn_f0.jpg":yw,"../../assets/binds/laugh/frames/SableQuinn_f1.jpg":bw,"../../assets/binds/laugh/frames/SableQuinn_f2.jpg":xw,"../../assets/binds/laugh/frames/SableQuinn_f3.jpg":Mw,"../../assets/binds/laugh/frames/SableQuinn_f4.jpg":Sw,"../../assets/binds/laugh/frames/TorenBlake_f0.jpg":ww,"../../assets/binds/laugh/frames/TorenBlake_f1.jpg":Ew,"../../assets/binds/laugh/frames/TorenBlake_f2.jpg":Tw,"../../assets/binds/laugh/frames/TorenBlake_f3.jpg":Aw,"../../assets/binds/laugh/frames/TorenBlake_f4.jpg":Rw,"../../assets/binds/laugh/frames/VeshMarlowe_f0.jpg":Cw,"../../assets/binds/laugh/frames/VeshMarlowe_f1.jpg":Lw,"../../assets/binds/laugh/frames/VeshMarlowe_f2.jpg":Pw,"../../assets/binds/laugh/frames/VeshMarlowe_f3.jpg":Uw,"../../assets/binds/laugh/frames/VeshMarlowe_f4.jpg":Dw}),Dh={};for(const[s,t]of Object.entries($w)){const e=s.split("/").pop();e&&(Dh[e]=t)}function jw(s){const t=s.frames;if(!(t!=null&&t.length))return[];const e=[];for(const n of t){const i=n.split("/").pop();if(!i)continue;const a=Dh[i];a&&e.push(a)}return e}function kh(s,t){const e=Math.max(0,Math.min(100,t));return e>=s.stages.s0.staminaMin?"s0":e>=s.stages.s1.staminaMin?"s1":e>=s.stages.s2.staminaMin?"s2":"s3"}function Gw(s,t){return s.stages[kh(s,t)]}function Ww(s,t){const e=Math.max(1,Math.floor(s));if(e===1)return[0,0];const n=Le(t,0,1),i=Math.pow(1-n,1.15),a=Math.min(e-1,Math.floor(i*e)),r=Math.min(e-1,a+1);return[a,r]}function Xw(s,t){const e=Le(t,0,1),n=Le(s??14,_o,vo);return Le(n*(.85+.3*(1-e)),_o,vo)}const qw="tickle",Kw="BriarKnox",Yw="Briar Knox",Jw=!1,Zw=!1,Qw=27.4,tE=36.2,eE=.275,nE=.0494,iE=.0825,sE=.2504,aE=.4462,rE=.4752,oE=.0698,lE=29.64,cE=["frames/BriarKnox_f0.jpg","frames/BriarKnox_f1.jpg","frames/BriarKnox_f2.jpg","frames/BriarKnox_f3.jpg","frames/BriarKnox_f4.jpg"],hE={clip:qw,slug:Kw,display:Yw,playerOnly:Jw,metalException:Zw,rate:Qw,twistRate:tE,spineBase:eE,spineAmp:nE,chestAmp:iE,shoulderAmp:sE,elbowAmp:aE,weaponWag:rE,billWag:oE,billRate:lE,frames:cE},uE="tickle",dE="CassWynn",fE="Cass Wynn",pE=!1,mE=!1,gE=28.6,_E=37.8,vE=.285,yE=.0448,bE=.0902,xE=.2621,ME=.469,SE=.5076,wE=.0778,EE=30.56,TE=["frames/CassWynn_f0.jpg","frames/CassWynn_f1.jpg","frames/CassWynn_f2.jpg","frames/CassWynn_f3.jpg","frames/CassWynn_f4.jpg"],AE={clip:uE,slug:dE,display:fE,playerOnly:pE,metalException:mE,rate:gE,twistRate:_E,spineBase:vE,spineAmp:yE,chestAmp:bE,shoulderAmp:xE,elbowAmp:ME,weaponWag:SE,billWag:wE,billRate:EE,frames:TE},RE="tickle",CE="ElaraCase",LE="Elara Case",PE=!0,UE=!0,DE=29.2,kE=38.5,IE=.29,FE=.0529,NE=.0957,BE=.2679,OE=.4919,zE=.54,HE=.0859,VE=31.48,$E=["frames/ElaraCase_f0.jpg","frames/ElaraCase_f1.jpg","frames/ElaraCase_f2.jpg","frames/ElaraCase_f3.jpg","frames/ElaraCase_f4.jpg"],jE={clip:RE,slug:CE,display:LE,playerOnly:PE,metalException:UE,rate:DE,twistRate:kE,spineBase:IE,spineAmp:FE,chestAmp:NE,shoulderAmp:BE,elbowAmp:OE,weaponWag:zE,billWag:HE,billRate:VE,frames:$E},GE="tickle",WE="EmberLang",XE="Ember Lang",qE=!1,KE=!1,YE=26.8,JE=35.4,ZE=.268,QE=.0471,t2=.0781,e2=.2388,n2=.4347,i2=.4536,s2=.0657,a2=28.94,r2=["frames/EmberLang_f0.jpg","frames/EmberLang_f1.jpg","frames/EmberLang_f2.jpg","frames/EmberLang_f3.jpg","frames/EmberLang_f4.jpg"],o2={clip:GE,slug:WE,display:XE,playerOnly:qE,metalException:KE,rate:YE,twistRate:JE,spineBase:ZE,spineAmp:QE,chestAmp:t2,shoulderAmp:e2,elbowAmp:n2,weaponWag:i2,billWag:s2,billRate:a2,frames:r2},l2="tickle",c2="JunoHale",h2="Juno Hale",u2=!1,d2=!1,f2=28.1,p2=37.1,m2=.28,g2=.0506,_2=.0858,v2=.254,y2=.4576,b2=.486,x2=.0739,M2=29.98,S2=["frames/JunoHale_f0.jpg","frames/JunoHale_f1.jpg","frames/JunoHale_f2.jpg","frames/JunoHale_f3.jpg","frames/JunoHale_f4.jpg"],w2={clip:l2,slug:c2,display:h2,playerOnly:u2,metalException:d2,rate:f2,twistRate:p2,spineBase:m2,spineAmp:g2,chestAmp:_2,shoulderAmp:v2,elbowAmp:y2,weaponWag:b2,billWag:x2,billRate:M2,frames:S2},E2="tickle",T2="KoraVale",A2="Kora Vale",R2=!1,C2=!1,L2=29,P2=38.2,U2=.288,D2=.054,k2=.0924,I2=.2656,F2=.4805,N2=.5184,B2=.0818,O2=31.03,z2=["frames/KoraVale_f0.jpg","frames/KoraVale_f1.jpg","frames/KoraVale_f2.jpg","frames/KoraVale_f3.jpg","frames/KoraVale_f4.jpg"],H2={clip:E2,slug:T2,display:A2,playerOnly:R2,metalException:C2,rate:L2,twistRate:P2,spineBase:U2,spineAmp:D2,chestAmp:k2,shoulderAmp:I2,elbowAmp:F2,weaponWag:N2,billWag:B2,billRate:O2,frames:z2},V2="tickle",$2="LyraFinch",j2="Lyra Finch",G2=!1,W2=!1,X2=27.7,q2=36.6,K2=.278,Y2=.046,J2=.0836,Z2=.2469,Q2=.4576,tT=.4752,eT=.0711,nT=29.75,iT=["frames/LyraFinch_f0.jpg","frames/LyraFinch_f1.jpg","frames/LyraFinch_f2.jpg","frames/LyraFinch_f3.jpg","frames/LyraFinch_f4.jpg"],sT={clip:V2,slug:$2,display:j2,playerOnly:G2,metalException:W2,rate:X2,twistRate:q2,spineBase:K2,spineAmp:Y2,chestAmp:J2,shoulderAmp:Z2,elbowAmp:Q2,weaponWag:tT,billWag:eT,billRate:nT,frames:iT},aT="tickle",rT="MiraSolis",oT="Mira Solis",lT=!1,cT=!1,hT=28.8,uT=37.9,dT=.286,fT=.0517,pT=.0891,mT=.2609,gT=.4748,_T=.5076,vT=.0791,yT=30.8,bT=["frames/MiraSolis_f0.jpg","frames/MiraSolis_f1.jpg","frames/MiraSolis_f2.jpg","frames/MiraSolis_f3.jpg","frames/MiraSolis_f4.jpg"],xT={clip:aT,slug:rT,display:oT,playerOnly:lT,metalException:cT,rate:hT,twistRate:uT,spineBase:dT,spineAmp:fT,chestAmp:pT,shoulderAmp:mT,elbowAmp:gT,weaponWag:_T,billWag:vT,billRate:yT,frames:bT},MT="tickle",ST="NimCortez",wT="Nim Cortez",ET=!1,TT=!1,AT=27.2,RT=35.9,CT=.272,LT=.0483,PT=.0803,UT=.2435,DT=.4404,kT=.4644,IT=.0671,FT=29.28,NT=["frames/NimCortez_f0.jpg","frames/NimCortez_f1.jpg","frames/NimCortez_f2.jpg","frames/NimCortez_f3.jpg","frames/NimCortez_f4.jpg"],BT={clip:MT,slug:ST,display:wT,playerOnly:ET,metalException:TT,rate:AT,twistRate:RT,spineBase:CT,spineAmp:LT,chestAmp:PT,shoulderAmp:UT,elbowAmp:DT,weaponWag:kT,billWag:IT,billRate:FT,frames:NT},OT="tickle",zT="RynAshford",HT="Ryn Ashford",VT=!1,$T=!1,jT=29.4,GT=38.9,WT=.292,XT=.0552,qT=.0979,KT=.2726,YT=.5034,JT=.5508,ZT=.0886,QT=31.84,tA=["frames/RynAshford_f0.jpg","frames/RynAshford_f1.jpg","frames/RynAshford_f2.jpg","frames/RynAshford_f3.jpg","frames/RynAshford_f4.jpg"],eA={clip:OT,slug:zT,display:HT,playerOnly:VT,metalException:$T,rate:jT,twistRate:GT,spineBase:WT,spineAmp:XT,chestAmp:qT,shoulderAmp:KT,elbowAmp:YT,weaponWag:JT,billWag:ZT,billRate:QT,frames:tA},nA="tickle",iA="SableQuinn",sA="Sable Quinn",aA=!1,rA=!1,oA=28.3,lA=37.4,cA=.282,hA=.0494,uA=.0869,dA=.2563,fA=.4633,pA=.4968,mA=.0764,gA=30.22,_A=["frames/SableQuinn_f0.jpg","frames/SableQuinn_f1.jpg","frames/SableQuinn_f2.jpg","frames/SableQuinn_f3.jpg","frames/SableQuinn_f4.jpg"],vA={clip:nA,slug:iA,display:sA,playerOnly:aA,metalException:rA,rate:oA,twistRate:lA,spineBase:cA,spineAmp:hA,chestAmp:uA,shoulderAmp:dA,elbowAmp:fA,weaponWag:pA,billWag:mA,billRate:gA,frames:_A},yA="tickle",bA="TorenBlake",xA="Toren Blake",MA=!1,SA=!1,wA=26.5,EA=35.1,TA=.265,AA=.0437,RA=.0759,CA=.2341,LA=.4233,PA=.4428,UA=.063,DA=28.71,kA=["frames/TorenBlake_f0.jpg","frames/TorenBlake_f1.jpg","frames/TorenBlake_f2.jpg","frames/TorenBlake_f3.jpg","frames/TorenBlake_f4.jpg"],IA={clip:yA,slug:bA,display:xA,playerOnly:MA,metalException:SA,rate:wA,twistRate:EA,spineBase:TA,spineAmp:AA,chestAmp:RA,shoulderAmp:CA,elbowAmp:LA,weaponWag:PA,billWag:UA,billRate:DA,frames:kA},FA="tickle",NA="VeshMarlowe",BA="Vesh Marlowe",OA=!1,zA=!1,HA=29.7,VA=39.3,$A=.295,jA=.0563,GA=.1012,WA=.2773,XA=.5148,qA=.5724,KA=.0913,YA=32.18,JA=["frames/VeshMarlowe_f0.jpg","frames/VeshMarlowe_f1.jpg","frames/VeshMarlowe_f2.jpg","frames/VeshMarlowe_f3.jpg","frames/VeshMarlowe_f4.jpg"],ZA={clip:FA,slug:NA,display:BA,playerOnly:OA,metalException:zA,rate:HA,twistRate:VA,spineBase:$A,spineAmp:jA,chestAmp:GA,shoulderAmp:WA,elbowAmp:XA,weaponWag:qA,billWag:KA,billRate:YA,frames:JA},QA=""+new URL("BriarKnox_f0-Br3Wk2DJ.jpg",import.meta.url).href,tR=""+new URL("BriarKnox_f1-B0MxMCIU.jpg",import.meta.url).href,eR=""+new URL("BriarKnox_f2-BoqKQStT.jpg",import.meta.url).href,nR=""+new URL("BriarKnox_f3-ZMNQc_An.jpg",import.meta.url).href,iR=""+new URL("BriarKnox_f4-CAcLYFmC.jpg",import.meta.url).href,sR=""+new URL("CassWynn_f0-CauPPMuv.jpg",import.meta.url).href,aR=""+new URL("CassWynn_f1-AZ4-iYRj.jpg",import.meta.url).href,rR=""+new URL("CassWynn_f2-BKTtvjBc.jpg",import.meta.url).href,oR=""+new URL("CassWynn_f3-CeagAWou.jpg",import.meta.url).href,lR=""+new URL("CassWynn_f4-CfdMYKKc.jpg",import.meta.url).href,cR=""+new URL("ElaraCase_f0-D5UtozBg.jpg",import.meta.url).href,hR=""+new URL("ElaraCase_f1-BbzDHkIO.jpg",import.meta.url).href,uR=""+new URL("ElaraCase_f2-D35Eeh15.jpg",import.meta.url).href,dR=""+new URL("ElaraCase_f3-DcnFjtXJ.jpg",import.meta.url).href,fR=""+new URL("ElaraCase_f4-BXDWJNYz.jpg",import.meta.url).href,pR=""+new URL("EmberLang_f0-BVGwyBel.jpg",import.meta.url).href,mR=""+new URL("EmberLang_f1-CSsQZIj7.jpg",import.meta.url).href,gR=""+new URL("EmberLang_f2-Bx7x7SEi.jpg",import.meta.url).href,_R=""+new URL("EmberLang_f3-nFiPo-pJ.jpg",import.meta.url).href,vR=""+new URL("EmberLang_f4-CtIDt5kV.jpg",import.meta.url).href,yR=""+new URL("JunoHale_f0-CVWr1cLm.jpg",import.meta.url).href,bR=""+new URL("JunoHale_f1-pcv0xkWB.jpg",import.meta.url).href,xR=""+new URL("JunoHale_f2-D7mMZYXh.jpg",import.meta.url).href,MR=""+new URL("JunoHale_f3-CfszWg5E.jpg",import.meta.url).href,SR=""+new URL("JunoHale_f4-CIgtEqD-.jpg",import.meta.url).href,wR=""+new URL("KoraVale_f0-BTxAR6r9.jpg",import.meta.url).href,ER=""+new URL("KoraVale_f1-w2MD9gEf.jpg",import.meta.url).href,TR=""+new URL("KoraVale_f2-Dg0wtm_u.jpg",import.meta.url).href,AR=""+new URL("KoraVale_f3-D16d-MIR.jpg",import.meta.url).href,RR=""+new URL("KoraVale_f4-_BRWAtFh.jpg",import.meta.url).href,CR=""+new URL("LyraFinch_f0-CM9MDzZ-.jpg",import.meta.url).href,LR=""+new URL("LyraFinch_f1-DlASdSQA.jpg",import.meta.url).href,PR=""+new URL("LyraFinch_f2-C2LaxoDi.jpg",import.meta.url).href,UR=""+new URL("LyraFinch_f3-xSlRxuBw.jpg",import.meta.url).href,DR=""+new URL("LyraFinch_f4-zhjeLbt9.jpg",import.meta.url).href,kR=""+new URL("MiraSolis_f0-Cl22OZcZ.jpg",import.meta.url).href,IR=""+new URL("MiraSolis_f1-Bvreu48f.jpg",import.meta.url).href,FR=""+new URL("MiraSolis_f2-B7-2OQP_.jpg",import.meta.url).href,NR=""+new URL("MiraSolis_f3-Djt7Tn2V.jpg",import.meta.url).href,BR=""+new URL("MiraSolis_f4-cGFZ-eGE.jpg",import.meta.url).href,OR=""+new URL("NimCortez_f0-Civ_vfyT.jpg",import.meta.url).href,zR=""+new URL("NimCortez_f1-DPQgDoGQ.jpg",import.meta.url).href,HR=""+new URL("NimCortez_f2-Bz719dDe.jpg",import.meta.url).href,VR=""+new URL("NimCortez_f3-Bs3MZshY.jpg",import.meta.url).href,$R=""+new URL("NimCortez_f4-yufrdKyk.jpg",import.meta.url).href,jR=""+new URL("RynAshford_f0-Bq-lZZAq.jpg",import.meta.url).href,GR=""+new URL("RynAshford_f1-CrDa0b8M.jpg",import.meta.url).href,WR=""+new URL("RynAshford_f2-Db7tWqcL.jpg",import.meta.url).href,XR=""+new URL("RynAshford_f3-CrBkDgpF.jpg",import.meta.url).href,qR=""+new URL("RynAshford_f4-DRb6Z3Q_.jpg",import.meta.url).href,KR=""+new URL("SableQuinn_f0-C-REQwGE.jpg",import.meta.url).href,YR=""+new URL("SableQuinn_f1-77Qvq60F.jpg",import.meta.url).href,JR=""+new URL("SableQuinn_f2-BcD0Apmj.jpg",import.meta.url).href,ZR=""+new URL("SableQuinn_f3-B3IpWV-H.jpg",import.meta.url).href,QR=""+new URL("SableQuinn_f4-ANSBmor5.jpg",import.meta.url).href,tC=""+new URL("TorenBlake_f0-Diq3pyTk.jpg",import.meta.url).href,eC=""+new URL("TorenBlake_f1-Cir14sc1.jpg",import.meta.url).href,nC=""+new URL("TorenBlake_f2-D5Eg7W2p.jpg",import.meta.url).href,iC=""+new URL("TorenBlake_f3-DDkLnb3L.jpg",import.meta.url).href,sC=""+new URL("TorenBlake_f4-3RwlgLan.jpg",import.meta.url).href,aC=""+new URL("VeshMarlowe_f0-B79k5ERk.jpg",import.meta.url).href,rC=""+new URL("VeshMarlowe_f1-CqL579Am.jpg",import.meta.url).href,oC=""+new URL("VeshMarlowe_f2-bMtK-3Mh.jpg",import.meta.url).href,lC=""+new URL("VeshMarlowe_f3-_DOilxKi.jpg",import.meta.url).href,cC=""+new URL("VeshMarlowe_f4-2STgIwJ3.jpg",import.meta.url).href,hC=Object.assign({"../../assets/binds/tickle/BriarKnox.tickle.json":hE,"../../assets/binds/tickle/CassWynn.tickle.json":AE,"../../assets/binds/tickle/ElaraCase.tickle.json":jE,"../../assets/binds/tickle/EmberLang.tickle.json":o2,"../../assets/binds/tickle/JunoHale.tickle.json":w2,"../../assets/binds/tickle/KoraVale.tickle.json":H2,"../../assets/binds/tickle/LyraFinch.tickle.json":sT,"../../assets/binds/tickle/MiraSolis.tickle.json":xT,"../../assets/binds/tickle/NimCortez.tickle.json":BT,"../../assets/binds/tickle/RynAshford.tickle.json":eA,"../../assets/binds/tickle/SableQuinn.tickle.json":vA,"../../assets/binds/tickle/TorenBlake.tickle.json":IA,"../../assets/binds/tickle/VeshMarlowe.tickle.json":ZA}),yo={};var Oc;for(const[s,t]of Object.entries(hC)){const e=(Oc=s.split("/").pop())==null?void 0:Oc.replace(/\.tickle\.json$/i,"");!e||!t||(yo[e]=t,t.slug&&(yo[t.slug]=t))}const xc={clip:"tickle",slug:"default",display:"Default",rate:28,twistRate:37,spineBase:.28,spineAmp:.046,chestAmp:.088,shoulderAmp:.246,elbowAmp:.44,weaponWag:.49,billWag:.058,billRate:26};function Ih(s){return s?yo[s]??xc:xc}const uC=Object.assign({"../../assets/binds/tickle/frames/BriarKnox_f0.jpg":QA,"../../assets/binds/tickle/frames/BriarKnox_f1.jpg":tR,"../../assets/binds/tickle/frames/BriarKnox_f2.jpg":eR,"../../assets/binds/tickle/frames/BriarKnox_f3.jpg":nR,"../../assets/binds/tickle/frames/BriarKnox_f4.jpg":iR,"../../assets/binds/tickle/frames/CassWynn_f0.jpg":sR,"../../assets/binds/tickle/frames/CassWynn_f1.jpg":aR,"../../assets/binds/tickle/frames/CassWynn_f2.jpg":rR,"../../assets/binds/tickle/frames/CassWynn_f3.jpg":oR,"../../assets/binds/tickle/frames/CassWynn_f4.jpg":lR,"../../assets/binds/tickle/frames/ElaraCase_f0.jpg":cR,"../../assets/binds/tickle/frames/ElaraCase_f1.jpg":hR,"../../assets/binds/tickle/frames/ElaraCase_f2.jpg":uR,"../../assets/binds/tickle/frames/ElaraCase_f3.jpg":dR,"../../assets/binds/tickle/frames/ElaraCase_f4.jpg":fR,"../../assets/binds/tickle/frames/EmberLang_f0.jpg":pR,"../../assets/binds/tickle/frames/EmberLang_f1.jpg":mR,"../../assets/binds/tickle/frames/EmberLang_f2.jpg":gR,"../../assets/binds/tickle/frames/EmberLang_f3.jpg":_R,"../../assets/binds/tickle/frames/EmberLang_f4.jpg":vR,"../../assets/binds/tickle/frames/JunoHale_f0.jpg":yR,"../../assets/binds/tickle/frames/JunoHale_f1.jpg":bR,"../../assets/binds/tickle/frames/JunoHale_f2.jpg":xR,"../../assets/binds/tickle/frames/JunoHale_f3.jpg":MR,"../../assets/binds/tickle/frames/JunoHale_f4.jpg":SR,"../../assets/binds/tickle/frames/KoraVale_f0.jpg":wR,"../../assets/binds/tickle/frames/KoraVale_f1.jpg":ER,"../../assets/binds/tickle/frames/KoraVale_f2.jpg":TR,"../../assets/binds/tickle/frames/KoraVale_f3.jpg":AR,"../../assets/binds/tickle/frames/KoraVale_f4.jpg":RR,"../../assets/binds/tickle/frames/LyraFinch_f0.jpg":CR,"../../assets/binds/tickle/frames/LyraFinch_f1.jpg":LR,"../../assets/binds/tickle/frames/LyraFinch_f2.jpg":PR,"../../assets/binds/tickle/frames/LyraFinch_f3.jpg":UR,"../../assets/binds/tickle/frames/LyraFinch_f4.jpg":DR,"../../assets/binds/tickle/frames/MiraSolis_f0.jpg":kR,"../../assets/binds/tickle/frames/MiraSolis_f1.jpg":IR,"../../assets/binds/tickle/frames/MiraSolis_f2.jpg":FR,"../../assets/binds/tickle/frames/MiraSolis_f3.jpg":NR,"../../assets/binds/tickle/frames/MiraSolis_f4.jpg":BR,"../../assets/binds/tickle/frames/NimCortez_f0.jpg":OR,"../../assets/binds/tickle/frames/NimCortez_f1.jpg":zR,"../../assets/binds/tickle/frames/NimCortez_f2.jpg":HR,"../../assets/binds/tickle/frames/NimCortez_f3.jpg":VR,"../../assets/binds/tickle/frames/NimCortez_f4.jpg":$R,"../../assets/binds/tickle/frames/RynAshford_f0.jpg":jR,"../../assets/binds/tickle/frames/RynAshford_f1.jpg":GR,"../../assets/binds/tickle/frames/RynAshford_f2.jpg":WR,"../../assets/binds/tickle/frames/RynAshford_f3.jpg":XR,"../../assets/binds/tickle/frames/RynAshford_f4.jpg":qR,"../../assets/binds/tickle/frames/SableQuinn_f0.jpg":KR,"../../assets/binds/tickle/frames/SableQuinn_f1.jpg":YR,"../../assets/binds/tickle/frames/SableQuinn_f2.jpg":JR,"../../assets/binds/tickle/frames/SableQuinn_f3.jpg":ZR,"../../assets/binds/tickle/frames/SableQuinn_f4.jpg":QR,"../../assets/binds/tickle/frames/TorenBlake_f0.jpg":tC,"../../assets/binds/tickle/frames/TorenBlake_f1.jpg":eC,"../../assets/binds/tickle/frames/TorenBlake_f2.jpg":nC,"../../assets/binds/tickle/frames/TorenBlake_f3.jpg":iC,"../../assets/binds/tickle/frames/TorenBlake_f4.jpg":sC,"../../assets/binds/tickle/frames/VeshMarlowe_f0.jpg":aC,"../../assets/binds/tickle/frames/VeshMarlowe_f1.jpg":rC,"../../assets/binds/tickle/frames/VeshMarlowe_f2.jpg":oC,"../../assets/binds/tickle/frames/VeshMarlowe_f3.jpg":lC,"../../assets/binds/tickle/frames/VeshMarlowe_f4.jpg":cC}),Fh={};for(const[s,t]of Object.entries(uC)){const e=s.split("/").pop();e&&(Fh[e]=t)}function dC(s){const t=s.frames;if(!(t!=null&&t.length))return[];const e=[];for(const n of t){const i=n.split("/").pop();if(!i)continue;const a=Fh[i];a&&e.push(a)}return e}const fC="idle",pC="BriarKnox",mC="Briar Knox",gC=!1,_C=!1,vC="a_pose",yC=2.13,bC=.031,xC=.014,MC=.021,SC=8,wC="horizontal",EC=7,TC=.0239,AC=.0232,RC={clip:fC,slug:pC,display:mC,playerOnly:gC,metalException:_C,pose:vC,breatheRate:yC,breatheAmp:bC,sway:xC,scalePulse:MC,frames:SC,sheetLayout:wC,fps:EC,weightShift:TC,headNod:AC},CC="idle",LC="CassWynn",PC="Cass Wynn",UC=!1,DC=!1,kC="a_pose",IC=2,FC=.023,NC=.024,BC=.021,OC=8,zC="horizontal",HC=7,VC=.0409,$C=.0203,jC={clip:CC,slug:LC,display:PC,playerOnly:UC,metalException:DC,pose:kC,breatheRate:IC,breatheAmp:FC,sway:NC,scalePulse:BC,frames:OC,sheetLayout:zC,fps:HC,weightShift:VC,headNod:$C},GC="idle",WC="ElaraCase",XC="Elara Case",qC=!0,KC=!0,YC="a_pose",JC=2.07,ZC=.021,QC=.015,tL=.016,eL=8,nL="horizontal",iL=7,sL=.0255,aL=.0196,rL={clip:GC,slug:WC,display:XC,playerOnly:qC,metalException:KC,pose:YC,breatheRate:JC,breatheAmp:ZC,sway:QC,scalePulse:tL,frames:eL,sheetLayout:nL,fps:iL,weightShift:sL,headNod:aL},oL="idle",lL="EmberLang",cL="Ember Lang",hL=!1,uL=!1,dL="a_pose",fL=2.35,pL=.029,mL=.023,gL=.015,_L=8,vL="horizontal",yL=8,bL=.0393,xL=.0225,ML={clip:oL,slug:lL,display:cL,playerOnly:hL,metalException:uL,pose:dL,breatheRate:fL,breatheAmp:pL,sway:mL,scalePulse:gL,frames:_L,sheetLayout:vL,fps:yL,weightShift:bL,headNod:xL},SL="idle",wL="JunoHale",EL="Juno Hale",TL=!1,AL=!1,RL="a_pose",CL=2.1,LL=.025,PL=.013,UL=.021,DL=8,kL="horizontal",IL=7,FL=.0222,NL=.021,BL={clip:SL,slug:wL,display:EL,playerOnly:TL,metalException:AL,pose:RL,breatheRate:CL,breatheAmp:LL,sway:PL,scalePulse:UL,frames:DL,sheetLayout:kL,fps:IL,weightShift:FL,headNod:NL},OL="idle",zL="KoraVale",HL="Kora Vale",VL=!1,$L=!1,jL="a_pose",GL=2.25,WL=.033,XL=.013,qL=.022,KL=8,YL="horizontal",JL=8,ZL=.0222,QL=.024,t3={clip:OL,slug:zL,display:HL,playerOnly:VL,metalException:$L,pose:jL,breatheRate:GL,breatheAmp:WL,sway:XL,scalePulse:qL,frames:KL,sheetLayout:YL,fps:JL,weightShift:ZL,headNod:QL},e3="idle",n3="LyraFinch",i3="Lyra Finch",s3=!1,a3=!1,r3="a_pose",o3=2.12,l3=.028,c3=.022,h3=.013,u3=8,d3="horizontal",f3=7,p3=.0375,m3=.0221,g3={clip:e3,slug:n3,display:i3,playerOnly:s3,metalException:a3,pose:r3,breatheRate:o3,breatheAmp:l3,sway:c3,scalePulse:h3,frames:u3,sheetLayout:d3,fps:f3,weightShift:p3,headNod:m3},_3="idle",v3="MiraSolis",y3="Mira Solis",b3=!1,x3=!1,M3="a_pose",S3=2.24,w3=.033,E3=.023,T3=.019,A3=8,R3="horizontal",C3=8,L3=.0393,P3=.024,U3={clip:_3,slug:v3,display:y3,playerOnly:b3,metalException:x3,pose:M3,breatheRate:S3,breatheAmp:w3,sway:E3,scalePulse:T3,frames:A3,sheetLayout:R3,fps:C3,weightShift:L3,headNod:P3},D3="idle",k3="NimCortez",I3="Nim Cortez",F3=!1,N3=!1,B3="a_pose",O3=2.1,z3=.027,H3=.018,V3=.019,$3=8,j3="horizontal",G3=7,W3=.0307,X3=.0218,q3={clip:D3,slug:k3,display:I3,playerOnly:F3,metalException:N3,pose:B3,breatheRate:O3,breatheAmp:z3,sway:H3,scalePulse:V3,frames:$3,sheetLayout:j3,fps:G3,weightShift:W3,headNod:X3},K3="idle",Y3="RynAshford",J3="Ryn Ashford",Z3=!1,Q3=!1,tP="a_pose",eP=2.39,nP=.025,iP=.016,sP=.016,aP=8,rP="horizontal",oP=8,lP=.0273,cP=.021,hP={clip:K3,slug:Y3,display:J3,playerOnly:Z3,metalException:Q3,pose:tP,breatheRate:eP,breatheAmp:nP,sway:iP,scalePulse:sP,frames:aP,sheetLayout:rP,fps:oP,weightShift:lP,headNod:cP},uP="idle",dP="SableQuinn",fP="Sable Quinn",pP=!1,mP=!1,gP="a_pose",_P=2.33,vP=.026,yP=.013,bP=.013,xP=8,MP="horizontal",SP=8,wP=.0222,EP=.0214,TP={clip:uP,slug:dP,display:fP,playerOnly:pP,metalException:mP,pose:gP,breatheRate:_P,breatheAmp:vP,sway:yP,scalePulse:bP,frames:xP,sheetLayout:MP,fps:SP,weightShift:wP,headNod:EP},AP="idle",RP="TorenBlake",CP="Toren Blake",LP=!1,PP=!1,UP="a_pose",DP=2.15,kP=.022,IP=.019,FP=.02,NP=8,BP="horizontal",OP=8,zP=.0324,HP=.02,VP={clip:AP,slug:RP,display:CP,playerOnly:LP,metalException:PP,pose:UP,breatheRate:DP,breatheAmp:kP,sway:IP,scalePulse:FP,frames:NP,sheetLayout:BP,fps:OP,weightShift:zP,headNod:HP},$P="idle",jP="VeshMarlowe",GP="Vesh Marlowe",WP=!1,XP=!1,qP="a_pose",KP=2.22,YP=.026,JP=.021,ZP=.012,QP=8,tU="horizontal",eU=8,nU=.0359,iU=.0214,sU={clip:$P,slug:jP,display:GP,playerOnly:WP,metalException:XP,pose:qP,breatheRate:KP,breatheAmp:YP,sway:JP,scalePulse:ZP,frames:QP,sheetLayout:tU,fps:eU,weightShift:nU,headNod:iU},aU=""+new URL("BriarKnox-CExVySsU.png",import.meta.url).href,rU=""+new URL("CassWynn-BTR_sZqY.png",import.meta.url).href,oU=""+new URL("ElaraCase-Do6BKnFR.png",import.meta.url).href,lU=""+new URL("EmberLang-B6qX6zJw.png",import.meta.url).href,cU=""+new URL("JunoHale-BZ1YVOyV.png",import.meta.url).href,hU=""+new URL("KoraVale-BUXNTCUS.png",import.meta.url).href,uU=""+new URL("LyraFinch-BxKI4YmB.png",import.meta.url).href,dU=""+new URL("MiraSolis-kPatOKP7.png",import.meta.url).href,fU=""+new URL("NimCortez-pKQsTy09.png",import.meta.url).href,pU=""+new URL("RynAshford-Dko70XJT.png",import.meta.url).href,mU=""+new URL("SableQuinn-DEqqhtXH.png",import.meta.url).href,gU=""+new URL("TorenBlake-UBc32KXp.png",import.meta.url).href,_U=""+new URL("VeshMarlowe-BddfWa_1.png",import.meta.url).href,vU=Object.assign({"../../assets/binds/idle/BriarKnox.idle.json":RC,"../../assets/binds/idle/CassWynn.idle.json":jC,"../../assets/binds/idle/ElaraCase.idle.json":rL,"../../assets/binds/idle/EmberLang.idle.json":ML,"../../assets/binds/idle/JunoHale.idle.json":BL,"../../assets/binds/idle/KoraVale.idle.json":t3,"../../assets/binds/idle/LyraFinch.idle.json":g3,"../../assets/binds/idle/MiraSolis.idle.json":U3,"../../assets/binds/idle/NimCortez.idle.json":q3,"../../assets/binds/idle/RynAshford.idle.json":hP,"../../assets/binds/idle/SableQuinn.idle.json":TP,"../../assets/binds/idle/TorenBlake.idle.json":VP,"../../assets/binds/idle/VeshMarlowe.idle.json":sU}),yU=Object.assign({"../../assets/binds/idle/sheets/BriarKnox.png":aU,"../../assets/binds/idle/sheets/CassWynn.png":rU,"../../assets/binds/idle/sheets/ElaraCase.png":oU,"../../assets/binds/idle/sheets/EmberLang.png":lU,"../../assets/binds/idle/sheets/JunoHale.png":cU,"../../assets/binds/idle/sheets/KoraVale.png":hU,"../../assets/binds/idle/sheets/LyraFinch.png":uU,"../../assets/binds/idle/sheets/MiraSolis.png":dU,"../../assets/binds/idle/sheets/NimCortez.png":fU,"../../assets/binds/idle/sheets/RynAshford.png":pU,"../../assets/binds/idle/sheets/SableQuinn.png":mU,"../../assets/binds/idle/sheets/TorenBlake.png":gU,"../../assets/binds/idle/sheets/VeshMarlowe.png":_U}),bU={breatheRate:[.5,4],breatheAmp:[0,.06],sway:[0,.04],scalePulse:[0,.04],weightShift:[0,.05],headNod:[0,.04],fps:[4,12]},xU=(s,t,e)=>Math.min(e,Math.max(t,s));function MU(s){const t={...s};for(const[e,[n,i]]of Object.entries(bU)){const a=e,r=t[a];if(typeof r!="number"||!Number.isFinite(r))continue;const o=xU(r,n,i);t[a]=o}return t}const bo={};var zc;for(const[s,t]of Object.entries(vU)){const e=(zc=s.split("/").pop())==null?void 0:zc.replace(/\.idle\.json$/i,"");if(!e||!t)continue;const n=MU(t);bo[e]=n,n.slug&&(bo[n.slug]=n)}const Nh={};var Hc;for(const[s,t]of Object.entries(yU)){const e=(Hc=s.split("/").pop())==null?void 0:Hc.replace(/\.png$/i,"");e&&(Nh[e]=t)}const Mc={clip:"idle",slug:"default",display:"Default",pose:"a_pose",breatheRate:2.05,breatheAmp:.029,sway:.024,scalePulse:.023,weightShift:.026,headNod:.018,frames:8,sheetLayout:"horizontal",fps:7};function pr(s){return s?bo[s]??Mc:Mc}function SU(s){if(s)return Nh[s]}const vs={id:0,name:"Bare hand",price:0,ticklePct:0,blurb:"Tier 0. No technique bonus."},ys={id:0,name:"Base attire",price:0,stamPct:0,escPct:0,blurb:"Bikini / shorts. Tier 0."},bs=[{id:1,name:"Palm Mitts",price:8,ticklePct:.05,blurb:"Padded palms. +5% tickle."},{id:2,name:"Rib Brush",price:14,ticklePct:.1,blurb:"Soft rake along the ribs. +10% tickle."},{id:3,name:"Nerve Wand",price:22,ticklePct:.15,blurb:"Narrow contact point. +15% tickle."},{id:4,name:"Flank Fans",price:32,ticklePct:.2,blurb:"Twin paddles. +20% tickle."},{id:5,name:"Spine Rake",price:44,ticklePct:.25,blurb:"Long reach on the back line. +25% tickle."},{id:6,name:"Chorus Forks",price:58,ticklePct:.3,blurb:"Amateur cap piece. +30% tickle."}],xs=[{id:1,name:"Weave Shorts",price:7,stamPct:.04,escPct:0,blurb:"+4% stamina."},{id:2,name:"Mesh Wrap",price:12,stamPct:.06,escPct:.02,blurb:"+6% stam / +2% escape."},{id:3,name:"Rib Guard",price:18,stamPct:.08,escPct:.04,blurb:"+8% stam / +4% escape."},{id:4,name:"Plasm Vest",price:26,stamPct:.1,escPct:.06,blurb:"+10% stam / +6% escape."},{id:5,name:"Night Shell",price:36,stamPct:.12,escPct:.08,blurb:"+12% stam / +8% escape."},{id:6,name:"Lattice Harness",price:48,stamPct:.14,escPct:.1,blurb:"+14% stam / +10% escape."},{id:7,name:"Vault Plate",price:62,stamPct:.16,escPct:.12,blurb:"+16% stam / +12% escape."},{id:8,name:"Apex Weave",price:78,stamPct:.18,escPct:.12,blurb:"+18% stam / +12% escape. Amateur cap."}],Sn=10,xo=25;function Ms(s){return s===0?vs:bs.find(t=>t.id===s)??vs}function Ss(s){return s===0?ys:xs.find(t=>t.id===s)??ys}function wU(s,t){return`${Ms(s).name} / ${Ss(t).name}`}let EU=0;const ei=1.35,Nn=2.1,Bn=1.12;class ls{constructor(t){C(this,"id",EU++);C(this,"team");C(this,"isPlayer");C(this,"name");C(this,"look");C(this,"role");C(this,"group",new Qt);C(this,"body");C(this,"humanoid");C(this,"yaw",0);C(this,"pitch",0);C(this,"pos",new R);C(this,"vel",new R);C(this,"occupancy","free");C(this,"targetId",-1);C(this,"joinOn",-1);C(this,"vanishLeft",0);C(this,"stamina",100);C(this,"maxStamina",100);C(this,"escape",0);C(this,"tapCd",0);C(this,"regenWait",0);C(this,"flashT",0);C(this,"blocks");C(this,"weaponId",0);C(this,"armorId",0);C(this,"weaponPct",0);C(this,"armorStamPct",0);C(this,"armorEscPct",0);C(this,"active",!0);C(this,"lastKnown",new R);C(this,"lastSeen",0);C(this,"pileTimer",0);C(this,"wantTickle",!1);C(this,"wantEscape",!1);C(this,"spawnIgnore",0);C(this,"reappearIgnore",0);C(this,"reappearFlash",0);C(this,"contactEdge",new Map);C(this,"hidden",!1);C(this,"slug");C(this,"bait",!1);C(this,"scriptHold",!1);C(this,"portraitUrl");C(this,"keyedPortrait");C(this,"portraitSprite");C(this,"idleSheetTex");C(this,"idleStillTex");C(this,"idleFrame",0);C(this,"idleFrameAcc",0);C(this,"idleFadeSprite");C(this,"idleFadeTex");C(this,"idlePhase",0);C(this,"idleSheetEnter",1);C(this,"idleEnterRate",4);C(this,"headMat");C(this,"skinMat");C(this,"rim");C(this,"prevPos",new R);C(this,"animT",Math.random()*8);C(this,"speed",0);C(this,"laughStageApplied",null);C(this,"laughStageLoadToken",0);C(this,"laughFrameApplied",-1);C(this,"laughFrameLoadToken",0);C(this,"laughFrameKeyed",[]);C(this,"laughFrameTex",new Map);C(this,"laughFrameWant","");C(this,"laughFramePortrait");C(this,"laughFps",0);C(this,"tickleFrameApplied",-1);C(this,"tickleFrameLoadToken",0);C(this,"tickleFrameKeyed",[]);C(this,"tickleFramePortrait");C(this,"tickleIntensity",0);C(this,"tickleIntensitySmooth",0);C(this,"tickleWinLo",0);C(this,"tickleWinHi",1);C(this,"runFrameApplied",-1);C(this,"runFrameLoadToken",0);C(this,"runFrameKeyed",[]);C(this,"runFramePortrait");this.team=t.team,this.isPlayer=t.isPlayer,this.look=t.look,this.name=t.name,this.role=t.role,this.slug=t.slug,this.portraitUrl=Gn(t.slug),this.blocks=t.blocks;const e=Ta[t.look]??Ta[0],n=t.team===0?6211800:13935194;if(this.humanoid=new cx(e.skin,e.cloth,e.hair,n),this.body=this.humanoid.root,this.skinMat=this.humanoid.skinMat,this.headMat=this.humanoid.skinMat,this.group.add(this.body),this.rim=new Go(n,2.2,3.2,2),this.rim.position.set(0,1.3,0),this.group.add(this.rim),!this.isPlayer){const i=TU(this.name,n);i.position.y=2.4,this.group.add(i),this.portraitUrl&&(this.body.visible=!1)}this.portraitUrl&&on(this.portraitUrl).then(i=>{this.keyedPortrait=i.keyedUrl,this.humanoid.applyLook(i),this.ensureStillBillboard(i.keyedUrl)}),this.applyGear(t.weapon??0,t.armor??0),this.stamina=this.maxStamina}get laughFrameIndex(){return this.laughFrameApplied}applyGear(t,e){const n=Ms(t),i=Ss(e);this.weaponId=n.id,this.armorId=i.id,this.weaponPct=n.ticklePct,this.armorStamPct=i.stamPct,this.armorEscPct=i.escPct,this.recalc(),this.humanoid.setWeapon(this.weaponId),this.humanoid.setArmor(this.armorId)}applyLookSlug(t,e){this.slug=t,this.look=e;const n=Gn(t);this.portraitUrl=n,this.idleSheetTex=void 0,this.idleFadeTex=void 0,this.idleFrame=0,this.idleFrameAcc=0,this.idleSheetEnter=0,this.idleEnterRate=3,this.idleFadeSprite&&(this.idleFadeSprite.visible=!1),n&&(this.isPlayer||(this.body.visible=!1),on(n).then(i=>{this.slug===t&&(this.keyedPortrait=i.keyedUrl,this.humanoid.applyLook(i),this.ensureStillBillboard(i.keyedUrl))}))}ensureStillBillboard(t){if(this.isPlayer)return;const e=new _a().load(t);if(e.colorSpace=we,this.idleStillTex=e,this.portraitSprite){const n=this.portraitSprite.material;n.map=e,n.needsUpdate=!0,this.portraitSprite.scale.set(ei,Nn,1),this.portraitSprite.position.set(0,Bn,0)}else{const n=new wa({map:e,transparent:!0,depthTest:!0,alphaTest:.15}),i=new Ea(n);i.scale.set(ei,Nn,1),i.position.set(0,Bn,0),i.renderOrder=1,this.group.add(i),this.portraitSprite=i}this.body.visible=!1,this.loadIdleSheet(this.slug)}loadIdleSheet(t){if(this.isPlayer)return;const e=SU(t);if(!e)return;const n=pr(t),i=Math.max(1,n.frames??8);new _a().load(e,a=>{this.slug&&t&&this.slug!==t||(a.colorSpace=we,a.wrapS=bn,a.wrapT=bn,a.repeat.set(1/i,1),a.offset.set(0,0),a.needsUpdate=!0,this.idleSheetTex=a,this.idleFrame=0,this.idleFrameAcc=0,this.idleSheetEnter=0,this.idleEnterRate=3,this.idleFadeTex=void 0,this.idleFadeSprite&&(this.group.remove(this.idleFadeSprite),this.idleFadeSprite=void 0))})}softenIdleSheetEnter(t=.25){this.idleSheetEnter=Math.min(this.idleSheetEnter,t),this.idleEnterRate=1.5}applyIdleSheetFrame(t,e){const n=this.portraitSprite,i=this.idleSheetTex;if(!n)return;const a=n.material;if(!e||!i){this.idleFadeSprite&&(this.idleFadeSprite.visible=!1),this.idleStillTex&&a.map!==this.idleStillTex&&(a.map=this.idleStillTex,a.needsUpdate=!0),a.opacity=1;return}const r=pr(this.slug),o=Math.max(1,r.frames??8),l=Math.min(12,Math.max(4,r.fps??8));this.idlePhase+=t*l;const c=this.idlePhase,h=Math.floor(c)%o,u=(h+1)%o,d=c-Math.floor(c),p=d*d*d*(d*(d*6-15)+10);this.idleFrame=h,this.idleFrameAcc=d,i.repeat.set(1/o,1),i.offset.set(h/o,0),this.idleSheetEnter=Math.min(1,this.idleSheetEnter+t*this.idleEnterRate);const g=this.idleSheetEnter*this.idleSheetEnter*(3-2*this.idleSheetEnter);a.transparent=!0,a.depthWrite=!1,g<.999&&this.idleStillTex?(a.map=this.idleStillTex,a.opacity=1,a.needsUpdate=!0):(a.map=i,a.opacity=1-p,a.needsUpdate=!0);let _=this.idleFadeSprite;if(!_){const M=i.clone();M.needsUpdate=!0,M.colorSpace=i.colorSpace,M.wrapS=i.wrapS,M.wrapT=i.wrapT,this.idleFadeTex=M;const E=new wa({map:M,transparent:!0,depthTest:!0,depthWrite:!1,alphaTest:.15,opacity:0});_=new Ea(E),_.scale.copy(n.scale),_.position.copy(n.position),_.renderOrder=(n.renderOrder||1)+1,this.group.add(_),this.idleFadeSprite=_}const m=_.material,f=this.idleFadeTex??m.map;g<.999?(f.repeat.set(1/o,1),f.offset.set(h/o,0),m.map=f,m.opacity=g,_.visible=!0):(f.repeat.set(1/o,1),f.offset.set(u/o,0),m.opacity=p,_.visible=p>.02,a.map!==i&&(a.map=i,a.needsUpdate=!0),a.opacity=1-p),_.scale.copy(n.scale),_.position.copy(n.position),m.rotation=a.rotation}recalc(){const t=Hn.stamina+2*this.blocks.stamina;Hn.tickle+1.5*this.blocks.tickle,Hn.struggle+3.5*this.blocks.struggle,this.maxStamina=t*t_*(1+this.armorStamPct),this.stamina=Math.min(this.stamina,this.maxStamina)}ticklePower(){return(Hn.tickle+1.5*this.blocks.tickle)*e_*(1+this.weaponPct)}escapePower(){return(Hn.struggle+3.5*this.blocks.struggle)*n_*(1+this.armorEscPct)}forward(){return new R(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}showLaughFrameTex(t){const e=this.portraitSprite;if(this.isPlayer)return;if(!e){this.ensureStillBillboard(t);return}let n=this.laughFrameTex.get(t);if(!n){const a={tex:null,ready:!1};a.tex=new _a().load(t,()=>{a.ready=!0,this.laughFrameWant===t&&this.showLaughFrameTex(t)}),a.tex.colorSpace=we,this.laughFrameTex.set(t,a),n=a}if(this.laughFrameWant=t,!n.ready||!n.tex)return;const i=e.material;this.idleStillTex=n.tex,i.map!==n.tex&&(i.map=n.tex,i.needsUpdate=!0),this.body.visible=!1}syncLaughFrameBillboard(t,e,n,i){if(!(t==="squirm"||this.occupancy==="ticklee"||this.occupancy==="nudge"&&this.joinOn<0)||!e)return this.laughFrameWant="",this.laughFrameApplied!==-1&&(!this.isPlayer&&this.keyedPortrait&&this.ensureStillBillboard(this.keyedPortrait),this.laughFrameApplied=-1,this.laughFramePortrait=void 0),!1;const r=jw(e);if(r.length<2)return!1;const o=Math.max(0,Math.min(100,i??100)),[l,c]=Ww(r.length,o/100),h=Math.max(1,c-l+1),u=Xw(n==null?void 0:n.billRate,o/100);this.laughFps=u;const d=l+Math.floor(this.animT*u)%h;if(d===this.laughFrameApplied&&this.laughFramePortrait)return!0;const p=d,g=++this.laughFrameLoadToken,_=r[p],m=this.laughFrameKeyed[p];return m?(this.isPlayer||this.showLaughFrameTex(m),this.laughFrameApplied=p,this.laughFramePortrait=m,!0):(on(_).then(f=>{g===this.laughFrameLoadToken&&(this.laughFrameKeyed[p]=f.keyedUrl,this.isPlayer||this.showLaughFrameTex(f.keyedUrl),this.laughFrameApplied=p,this.laughFramePortrait=f.keyedUrl)}).catch(()=>{g===this.laughFrameLoadToken&&(this.laughFrameApplied=p,this.laughFramePortrait=_)}),!0)}syncLaughStageBillboard(t){if(this.isPlayer||!this.portraitSprite)return;const e=this.slug?ba(this.slug):xa(this.look);if(!(t==="squirm"||this.occupancy==="ticklee")){this.laughStageApplied!==null&&this.keyedPortrait&&(this.ensureStillBillboard(this.keyedPortrait),this.laughStageApplied=null);return}const i=this.stamina/Math.max(1,this.maxStamina)*100,a=kh(e,i);if(a===this.laughStageApplied)return;const r=Vw(e.stages[a]);if(!r)return;const o=++this.laughStageLoadToken,l=a;on(r).then(c=>{o===this.laughStageLoadToken&&(this.ensureStillBillboard(c.keyedUrl),this.laughStageApplied=l)}).catch(()=>{})}syncTickleFrameBillboard(t,e,n=.016){if(!(t==="tickle"||this.occupancy==="tickler"||this.occupancy==="nudge"&&this.joinOn>=0)||!e){this.tickleFrameApplied!==-1&&(!this.isPlayer&&this.keyedPortrait&&this.ensureStillBillboard(this.keyedPortrait),this.tickleFrameApplied=-1,this.tickleFramePortrait=void 0),this.tickleIntensitySmooth=0,this.tickleWinLo=0,this.tickleWinHi=1;return}const a=dC(e);if(a.length<2)return;let r=this.tickleIntensity;r<=0&&(r=Math.min(100,this.weaponPct*200+this.blocks.tickle*8+Math.min(25,this.pileTimer*5)));const o=Math.max(0,Math.min(100,r)),c=o>this.tickleIntensitySmooth?78.5:.13,h=1-Math.exp(-c*Math.max(.001,n));this.tickleIntensitySmooth+=(o-this.tickleIntensitySmooth)*h;const u=this.tickleIntensitySmooth,d=a.length,p=O=>O<=0?[0,Math.min(1,d-1)]:O===1?[Math.min(1,d-1),Math.min(2,d-1)]:O===2?[Math.min(2,d-1),Math.min(3,d-1)]:[Math.min(3,d-1),d-1],g=O=>O<.01?0:O<.18?1:O<.7?2:3,_=(O,Z)=>O<=0&&Z<=1?0:O===1?1:O===2?2:3,m=g(u),f=_(this.tickleWinLo,this.tickleWinHi),M=34.8,E=[.01+M,.18+M,.7+M],y=[.01-M,.18-M,.7-M];let U=f;m>f?U=u>=E[Math.min(f,2)]?m:f:m<f?U=u<=y[Math.min(m,2)]?m:f:U=m;const[T,S]=p(U);this.tickleWinLo=T,this.tickleWinHi=S;const P=Math.max(1,S-T+1),w=Math.max(10,Math.round((e.billRate||26)*(.09+u*.016))),b=Math.floor(this.animT*w);let L;if(u>=2.5&&P>=2){const O=u>=4.6?[S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,T]:[S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,S,T];L=O[b%O.length]}else u>=.8&&P>=2?L=b%46===23?T:S:L=T+b%P;if(L===this.tickleFrameApplied&&this.tickleFramePortrait)return;const z=L,N=++this.tickleFrameLoadToken,$=a[z],q=this.tickleFrameKeyed[z];if(q){this.isPlayer||this.ensureStillBillboard(q),this.tickleFrameApplied=z,this.tickleFramePortrait=q;return}on($).then(O=>{N===this.tickleFrameLoadToken&&(this.tickleFrameKeyed[z]=O.keyedUrl,this.isPlayer||this.ensureStillBillboard(O.keyedUrl),this.tickleFrameApplied=z,this.tickleFramePortrait=O.keyedUrl)}).catch(()=>{N===this.tickleFrameLoadToken&&(this.tickleFrameApplied=z,this.tickleFramePortrait=$)})}syncRunFrameBillboard(t,e){if(!(t==="walk"||t==="run")){this.runFrameApplied!==-1&&(!this.isPlayer&&this.keyedPortrait&&this.ensureStillBillboard(this.keyedPortrait),this.runFrameApplied=-1,this.runFramePortrait=void 0);return}const i=lx(e);if(i.length<2)return;const a=t==="run"?e.run:e.walk,r=Math.max(1,a.billRate||(t==="run"?12:9)),o=Math.floor(this.animT*r)%i.length;if(o===this.runFrameApplied&&this.runFramePortrait)return;const l=o,c=++this.runFrameLoadToken,h=i[l],u=this.runFrameKeyed[l];if(u){this.isPlayer||this.ensureStillBillboard(u),this.runFrameApplied=l,this.runFramePortrait=u;return}on(h).then(d=>{c===this.runFrameLoadToken&&(this.runFrameKeyed[l]=d.keyedUrl,this.isPlayer||this.ensureStillBillboard(d.keyedUrl),this.runFrameApplied=l,this.runFramePortrait=d.keyedUrl)}).catch(()=>{c===this.runFrameLoadToken&&(this.runFrameApplied=l,this.runFramePortrait=h)})}tickAnim(t){const e=this.pos.distanceTo(this.prevPos);this.speed=t>1e-4?e/t:0,this.prevPos.copy(this.pos),this.animT+=t;const n=this.humanoid.clipFor(this.occupancy,this.speed,this.joinOn),i=n==="squirm"?Gw(this.slug?ba(this.slug):xa(this.look),this.stamina/Math.max(1,this.maxStamina)*100):void 0,a=ax(this.slug),r=n==="walk"||n==="run"?rx(a,n):void 0,o=n==="tickle"?Ih(this.slug):void 0;this.humanoid.pose(n,this.animT,o??i??r),this.tickBillboardAnim(t,n,a,i,o);const l=n==="squirm"||this.occupancy==="ticklee"?this.slug?ba(this.slug):xa(this.look):void 0,c=this.stamina/Math.max(1,this.maxStamina)*100;this.syncLaughFrameBillboard(n,l,i,c)||this.syncLaughStageBillboard(n),this.syncTickleFrameBillboard(n,o,t),this.syncRunFrameBillboard(n,a)}locomotionClip(){if(this.occupancy!=="free")return"busy";const t=this.humanoid.clipFor(this.occupancy,this.speed,this.joinOn);return t==="run"||t==="walk"||t==="idle"?t:"busy"}tickBillboardAnim(t,e,n,i,a){var g;const r=this.portraitSprite;if(!r)return;const o=r.material,l=this.animT;let c=ei,h=Nn,u=0,d=Bn,p=0;if(this.occupancy==="tickler"||this.occupancy==="nudge"&&this.joinOn>=0){const _=(a==null?void 0:a.billWag)??.05,m=(a==null?void 0:a.billRate)??26,f=Math.sin(l*m),M=Math.sin(l*m*1.58);c=ei*(1+f*_),h=Nn*(1+M*_*.8),u=M*_,d=Bn+Math.abs(f)*_*1.4,p=f*_*1.15}else if(this.occupancy==="ticklee"||this.occupancy==="nudge"&&this.joinOn<0){const _=(i==null?void 0:i.billShake)??.09,m=(i==null?void 0:i.billRate)??16,f=i==null?void 0:i.blend,M=(f==null?void 0:f.jaw)??.45,E=(f==null?void 0:f.cheek)??.3,y=(f==null?void 0:f.eye)??.4,U=Math.sin(l*m),T=Math.sin(l*m*.7),S=Math.sin(l*m*1.35),P=.55+.45*Math.abs(S),w=1+E*.06*P+U*_*.5,b=1+M*.08*P-y*.04*P-U*_*.25;c=ei*w,h=Nn*b,u=U*_*.6+T*E*.02,d=Bn+Math.abs(T)*_*.4+M*.02*P,p=T*_*.5+U*E*.03}else if(this.occupancy==="tapped")h=Nn*.72,d=Bn*.55,p=.35;else if(e==="run"||e==="walk"){const _=n?e==="run"?n.run:n.walk:void 0,m=(_==null?void 0:_.billRate)??(e==="run"?20.15:12.75),f=(_==null?void 0:_.billBob)??(e==="run"?.122:.058),M=Math.sin(l*m),E=Math.sin(l*m*2);c=ei*(1+M*f*1.14+Math.abs(E)*f*.44),h=Nn*(1+Math.abs(M)*f*.9-Math.abs(E)*f*.5),u=M*f*1.48,d=Bn+Math.abs(M)*f*2.8,p=M*f*1.58}else{this.applyIdleSheetFrame(t,!0);const _=pr(this.slug),m=_.breatheRate,f=Math.sin(l*m)*_.breatheAmp,M=Math.sin(l*m*.53+.7)*_.breatheAmp*.4,E=_.weightShift??_.sway,y=Math.sin(l*m*.62)*_.sway+Math.sin(l*m*.31+.4)*E*.6,U=(T,S)=>Math.min(S,Math.max(-S,T));c=ei*(1+U(Math.sin(l*m)*_.scalePulse*.5,.03)),h=Nn*(1+U(f+M,.05)),u=U(y,.08),d=Bn+U((f+M)*.5,.04),p=U(y*.5,.05),r.scale.set(c,h,1),r.position.set(u,d,0),o.rotation=p,(g=this.idleFadeSprite)!=null&&g.visible&&(this.idleFadeSprite.scale.copy(r.scale),this.idleFadeSprite.position.copy(r.position),this.idleFadeSprite.material.rotation=p);return}this.applyIdleSheetFrame(t,!1),r.scale.set(c,h,1),r.position.set(u,d,0),o.rotation=p}settle(){this.prevPos.copy(this.pos)}syncMesh(){this.group.position.copy(this.pos),this.body.rotation.y=this.yaw,this.body.rotation.x=0,this.body.rotation.z=0,!this.isPlayer&&this.portraitSprite&&(this.body.visible=!1)}eyeWorld(){return this.pos.clone().add(new R(0,Ah,0))}setHidden(t){this.hidden=t,this.group.visible=!t&&this.occupancy!=="vanished"&&this.occupancy!=="tapped",this.occupancy==="tapped"&&(this.group.visible=!0),this.occupancy==="vanished"&&(this.group.visible=!1),!this.isPlayer&&this.portraitSprite&&(this.body.visible=!1)}}function TU(s,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(10,8,8,0.55)",n.fillRect(0,0,256,64),n.fillStyle=`#${t.toString(16).padStart(6,"0")}`,n.font="700 28px Trebuchet MS, sans-serif",n.textAlign="center",n.fillText(s,128,42);const i=new xh(e),a=new wa({map:i,transparent:!0,depthTest:!1}),r=new Ea(a);return r.scale.set(1.4,.35,1),r}const AU=.18,RU=3.15,CU=2.55,Bt={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,VIEW:8,MENU:9,DUP:12,DDOWN:13,DLEFT:14,DRIGHT:15};function On(s,t){const e=s.axes[t]??0;return Math.abs(e)<AU?0:e}function LU(s,t){return s.buttons[t]}function fe(s,t,e=.22){const n=LU(s,t);return n?n.pressed||n.value>=e:!1}class PU{constructor(){C(this,"keys",new Set);C(this,"tickle",!1);C(this,"escape",!1);C(this,"confirm",!1);C(this,"back",!1);C(this,"tickleHeld",!1);C(this,"escapeHeld",!1);C(this,"releaseHeld",!1);C(this,"lookX",0);C(this,"lookY",0);C(this,"stickX",0);C(this,"stickY",0);C(this,"pointerLocked",!1);C(this,"mobile",!1);C(this,"padActive",!1);C(this,"padLabel","");C(this,"justConnected",!1);C(this,"padHome",!1);C(this,"padShop",!1);C(this,"padArena",!1);C(this,"padUp",!1);C(this,"padDown",!1);C(this,"padLeft",!1);C(this,"padRight",!1);C(this,"padTabPrev",!1);C(this,"padTabNext",!1);C(this,"lookId",null);C(this,"lastLook",null);C(this,"touchTickle",!1);C(this,"touchEscape",!1);C(this,"padMoveX",0);C(this,"padMoveY",0);C(this,"prevPad",new Set);C(this,"rumblePad",null);C(this,"prevKeys",new Set);C(this,"navDir",null);C(this,"navAge",0);this.mobile=matchMedia("(pointer: coarse)").matches||innerWidth<820,window.addEventListener("keydown",t=>{this.keys.add(t.code),(t.code==="KeyT"||t.code==="Space")&&(this.tickle=!0),t.code==="KeyE"&&(this.escape=!0),t.code==="KeyQ"&&(this.releaseHeld=!0),(t.code==="Enter"||t.code==="NumpadEnter")&&(this.confirm=!0),t.code==="Escape"&&(this.back=!0),(t.code==="Digit1"||t.code==="KeyH")&&(this.padHome=!0),t.code==="Digit2"&&(this.padShop=!0),t.code==="Digit3"&&(this.padArena=!0),["Space","KeyT","KeyE"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.keys.delete(t.code),t.code==="KeyQ"&&(this.releaseHeld=!1)}),window.addEventListener("mousemove",t=>{this.pointerLocked&&(this.lookX+=t.movementX*.0024,this.lookY+=t.movementY*.0022)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement!==null}),window.addEventListener("gamepadconnected",t=>{this.justConnected=!0,this.padActive=!0;const e=t.gamepad;this.padLabel=e?wc(e):"Xbox controller"}),window.addEventListener("gamepaddisconnected",()=>{this.padActive=!1,this.padLabel="",this.padMoveX=0,this.padMoveY=0,this.prevPad.clear(),this.rumblePad=null})}bindHud(t){const e=(r,o)=>{const l=t.querySelector(`#${r}`);if(!l)return;const c=u=>{u.preventDefault(),this[o]=!0,o==="tickle"&&(this.touchTickle=!0),o==="escape"&&(this.touchEscape=!0)},h=()=>{o==="tickle"&&(this.touchTickle=!1),o==="escape"&&(this.touchEscape=!1)};l.addEventListener("pointerdown",c),l.addEventListener("pointerup",h),l.addEventListener("pointerleave",h)};e("btn-tickle","tickle"),e("btn-escape","escape");const n=t.querySelector("#stick"),i=t.querySelector("#stick .knob");if(n&&i){const r=(l,c,h,u)=>{const d=h-l,p=u-c,g=Math.min(40,Math.hypot(d,p)),_=Math.atan2(p,d);this.stickX=g/40*Math.cos(_),this.stickY=g/40*Math.sin(_),i.style.left=`${33+this.stickX*28}px`,i.style.top=`${33+this.stickY*28}px`},o=()=>{this.stickX=0,this.stickY=0,i.style.left="33px",i.style.top="33px"};n.addEventListener("pointerdown",l=>{n.setPointerCapture(l.pointerId);const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,l.clientX,l.clientY)}),n.addEventListener("pointermove",l=>{if(!n.hasPointerCapture(l.pointerId))return;const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,l.clientX,l.clientY)}),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o)}const a=t.querySelector("#lookzone");a==null||a.addEventListener("pointerdown",r=>{this.lookId=r.pointerId,this.lastLook={x:r.clientX,y:r.clientY},a.setPointerCapture(r.pointerId)}),a==null||a.addEventListener("pointermove",r=>{this.lookId!==r.pointerId||!this.lastLook||(this.lookX+=(r.clientX-this.lastLook.x)*.004,this.lookY+=(r.clientY-this.lastLook.y)*.0035,this.lastLook={x:r.clientX,y:r.clientY})}),a==null||a.addEventListener("pointerup",()=>{this.lookId=null,this.lastLook=null})}poll(t){this.pollGamepad(t),this.pollNav(t),this.keys.has("BracketLeft")&&!this.prevKeys.has("BracketLeft")&&(this.padTabPrev=!0),this.keys.has("BracketRight")&&!this.prevKeys.has("BracketRight")&&(this.padTabNext=!0),this.prevKeys=new Set(this.keys);const e=this.keys.has("KeyT")||this.keys.has("Space"),n=this.keys.has("KeyE");this.padActive?(this.tickleHeld=this.tickleHeld||e,this.escapeHeld=this.escapeHeld||n):(this.tickleHeld=this.touchTickle||e,this.escapeHeld=this.touchEscape||n,this.releaseHeld=this.keys.has("KeyQ"))}moveVec(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),t+=this.padMoveX,e+=-this.padMoveY,(this.mobile||Math.hypot(this.stickX,this.stickY)>.08)&&(t+=this.stickX,e+=-this.stickY);const n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{x:t,z:e}}consumeLook(){const t={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,t}rumble(t=70,e=.35,n=.2){const i=this.rumblePad,a=i==null?void 0:i.vibrationActuator;a&&a.playEffect("dual-rumble",{startDelay:0,duration:t,strongMagnitude:e,weakMagnitude:n}).catch(()=>{})}endFrame(){this.tickle=!1,this.escape=!1,this.confirm=!1,this.back=!1,this.justConnected=!1,this.padHome=!1,this.padShop=!1,this.padArena=!1,this.padUp=!1,this.padDown=!1,this.padLeft=!1,this.padRight=!1,this.padTabPrev=!1,this.padTabNext=!1,!this.keys.has("KeyQ")&&!this.padActive&&(this.releaseHeld=!1)}pollGamepad(t){const e=Sc();if(!e){this.padActive=!1,this.padMoveX=0,this.padMoveY=0,this.prevPad.clear(),this.rumblePad=null;return}this.padActive=!0,this.padLabel=wc(e),this.rumblePad=e;let n=On(e,0),i=On(e,1);fe(e,Bt.DLEFT)&&(n-=1),fe(e,Bt.DRIGHT)&&(n+=1),fe(e,Bt.DUP)&&(i-=1),fe(e,Bt.DDOWN)&&(i+=1);const a=Math.hypot(n,i);a>1&&(n/=a,i/=a),this.padMoveX=n,this.padMoveY=i;const r=On(e,2),o=On(e,3);this.lookX+=r*RU*t,this.lookY+=o*CU*t;const l=new Set,c=_=>fe(e,_)&&!this.prevPad.has(_);for(let _=0;_<e.buttons.length;_++)fe(e,_)&&l.add(_);const h=fe(e,Bt.RT)||On(e,5)>.22,u=fe(e,Bt.LT)||On(e,4)>.22,d=fe(e,Bt.A)||h,p=fe(e,Bt.B)||u,g=fe(e,Bt.Y);(c(Bt.A)||c(Bt.RT))&&(this.tickle=!0),(c(Bt.B)||c(Bt.LT))&&(this.escape=!0),(c(Bt.A)||c(Bt.MENU))&&(this.confirm=!0),(c(Bt.B)||c(Bt.VIEW)||c(Bt.MENU))&&(this.back=!0),c(Bt.X)&&(this.padHome=!0),c(Bt.Y)&&(this.padShop=!0),c(Bt.RB)&&(this.padArena=!0),c(Bt.LB)&&(this.padTabPrev=!0),c(Bt.RB)&&(this.padTabNext=!0),c(Bt.DUP)&&this.fireNav("up"),c(Bt.DDOWN)&&this.fireNav("down"),c(Bt.DLEFT)&&this.fireNav("left"),c(Bt.DRIGHT)&&this.fireNav("right"),this.tickleHeld=this.touchTickle||d,this.escapeHeld=this.touchEscape||p,this.releaseHeld=this.keys.has("KeyQ")||g,this.prevPad=l}pollNav(t){const e=Sc();let n=null;if(e)if(fe(e,Bt.DUP))n="up";else if(fe(e,Bt.DDOWN))n="down";else if(fe(e,Bt.DLEFT))n="left";else if(fe(e,Bt.DRIGHT))n="right";else{const i=On(e,0),a=On(e,1);a<-.55?n="up":a>.55?n="down":i<-.55?n="left":i>.55&&(n="right")}if(n||(this.keys.has("ArrowUp")?n="up":this.keys.has("ArrowDown")?n="down":this.keys.has("ArrowLeft")?n="left":this.keys.has("ArrowRight")&&(n="right")),n!==this.navDir){this.navDir=n,this.navAge=0;const i=!!e&&(fe(e,Bt.DUP)||fe(e,Bt.DDOWN)||fe(e,Bt.DLEFT)||fe(e,Bt.DRIGHT));n&&!i&&this.fireNav(n)}else n&&(this.navAge+=t,this.navAge>=.42&&(this.fireNav(n),this.navAge=.22))}fireNav(t){t==="up"&&(this.padUp=!0),t==="down"&&(this.padDown=!0),t==="left"&&(this.padLeft=!0),t==="right"&&(this.padRight=!0)}}function Sc(){var e;if(Pe!=null&&Pe.connected)return Pe;const s=((e=navigator.getGamepads)==null?void 0:e.call(navigator))??[];let t=null;for(const n of s)if(!(!n||!n.connected)){if(n.mapping==="standard")return n;t||(t=n)}return t}let Pe=null;function Bh(){Pe={id:"Xbox controller (standard)",index:0,connected:!0,mapping:"standard",timestamp:performance.now(),axes:[0,0,0,0,0,0],buttons:Array.from({length:17},()=>({pressed:!1,touched:!1,value:0}))},window.dispatchEvent(new Event("gamepadconnected"))}function UU(s){if(Pe||Bh(),!!Pe){if(Pe.timestamp=performance.now(),s.reset){Pe.axes.fill(0);for(const t of Pe.buttons)t.value=0,t.pressed=!1,t.touched=!1}if(s.axes)for(let t=0;t<s.axes.length&&t<Pe.axes.length;t++)Pe.axes[t]=s.axes[t];if(s.buttons)for(const[t,e]of Object.entries(s.buttons)){const n=Number(t),i=Pe.buttons[n];i&&(i.value=e,i.pressed=e>=.22,i.touched=i.pressed)}}}function DU(){Pe=null,window.dispatchEvent(new Event("gamepaddisconnected"))}function wc(s){const t=s.id||"Xbox controller";return/xbox|xinput|045e/i.test(t)?"Xbox controller":/standard/i.test(s.mapping)?"Xbox layout":t.replace(/\s*\(.*$/,"").slice(0,42)||"Controller"}function Li(s,t){return`${s}:${t}`}function Ke(s,t){return s.pos.distanceTo(t.pos)<=Fi}function cs(s,t,e){const n=s.pos.distanceTo(t.pos);return n<=Fi?!0:s.isPlayer?e?n<=Bg:n<=Fi+va:!1}function sn(s,t){const e=s.pos.clone().sub(t.pos);e.y=0;const n=e.length();if(n<1e-6)return!0;e.normalize();const i=t.forward().multiplyScalar(-1),a=s.isPlayer?Hg:zg;return i.dot(e)>=a||n<.5&&s.forward().dot(t.forward())>.55}function kU(s){return s.occupancy!=="vanished"&&s.occupancy!=="tapped"&&s.occupancy!=="spectate"}function _e(s){return s.occupancy!=="tapped"&&s.occupancy!=="spectate"}function IU(s,t,e){return s.filter(n=>n.team===e&&n.id!==t.id&&kU(n)&&n.occupancy!=="ticklee"&&Ke(n,t))}function hs(s,t,e){return IU(s,e,t.team).length>=2}function FU(s,t,e,n,i,a,r,o,l,c,h){if(!_e(s)||s.isPlayer)return;if(s.pileTimer=Math.max(0,s.pileTimer-n),s.occupancy==="ticklee"){!s.scriptHold&&Math.random()<.028&&c(s);return}if(s.occupancy==="tickler"||s.occupancy==="nudge"){if(s.scriptHold)return;const m=t.find(M=>M.id===s.joinOn),f=m!=null&&m.isPlayer?.32:.2;Math.random()<f&&l(s);return}if(s.occupancy==="vanished"){Tc(s,e,n);return}if(i>0){s.bait?Ec(s,e,n):NU(s,e,n);return}if(s.bait){Ec(s,e,n);return}const u=t.filter(m=>m.team!==s.team&&_e(m)&&m.occupancy!=="vanished"),d=t.find(m=>m.isPlayer&&_e(m)&&m.occupancy!=="vanished"),p=t.find(m=>m.team===s.team&&m.occupancy==="tickler"&&m.id!==s.id);let g=null;if(d&&s.team!==d.team&&s.role==="hunter"&&d.occupancy==="free"&&(g=d),!g&&p&&s.pileTimer<=0){const m=t.find(f=>f.id===p.joinOn);if(m&&m.occupancy==="ticklee"){if(Ke(s,m)){o(s,m)||r(s,m);return}s.pos.distanceTo(p.pos)<9&&(g=m)}}if(!g)if(d&&s.team!==d.team&&s.role==="hunter")if(d.occupancy==="tickler"||d.occupancy==="nudge"){const m=u.filter(f=>!f.isPlayer&&!f.bait);g=mr(s,m.length?m:u.filter(f=>!f.bait))}else d.occupancy,g=d;else{const m=u.filter(f=>!f.isPlayer&&!(f.bait&&s.team===0&&a<dr));g=mr(s,m.length?m:u.filter(f=>!(f.bait&&a<dr)))}if(g!=null&&g.bait&&s.team===0&&a<dr){const m=u.filter(f=>!f.bait&&!f.isPlayer);g=mr(s,m)}if(!g){Tc(s,e,n);return}const _=g.pos.clone().add(g.forward().multiplyScalar(-1.15));(s.role==="ambusher"||s.role==="flanker")&&_.add(new R(-g.forward().z,0,g.forward().x).multiplyScalar(1.4)),Wo(s,e,e.laneRoute(s.pos,_),n),Ke(s,g)&&(g.occupancy==="ticklee"?s.pileTimer<=0&&o(s,g):r(s,g))}function Ec(s,t,e){const n=new R(po,s.pos.y,mo);s.pos.distanceToSquared(n)>.35&&Wo(s,t,n,e),s.yaw=-Math.PI/2,s.pos.y=t.groundY(s.pos.x,s.pos.z)}function mr(s,t){let e=null,n=1e9;for(const i of t){const a=s.pos.distanceToSquared(i.pos);a<n&&(n=a,e=i)}return e}function Wo(s,t,e,n){const a=t.navWaypoint(s.pos,e).clone().sub(s.pos);if(a.y=0,a.lengthSq()<.04)return;a.normalize();const o=Ni*(s.role==="hunter"?1.05:.95)*n,l=(d,p)=>{const g=t.resolve(s.pos.x+d,s.pos.z+p,s.pos.y),_=Math.hypot(g.x-s.pos.x,g.z-s.pos.z),m=(g.x-s.pos.x)*a.x+(g.z-s.pos.z)*a.z;return{r:g,moved:_,progress:m}},c=l(a.x*o,a.z*o);let h=c,u=a.clone();if(c.moved<o*.4){const d=[.55,-.55,.95,-.95,1.35,-1.35,Math.PI/2,-Math.PI/2];for(const p of d){const g=Math.cos(p),_=Math.sin(p),m=a.x*g-a.z*_,f=a.x*_+a.z*g,M=l(m*o,f*o);if(M.moved<o*.2)continue;(M.progress>h.progress+.002||Math.abs(M.progress-h.progress)<.002&&M.moved>h.moved)&&(h=M,u.set(m,0,f).normalize())}}h.moved<1e-4||(s.yaw=Math.atan2(-u.x,-u.z),s.pos.x=h.r.x,s.pos.z=h.r.z,s.pos.y=t.groundY(s.pos.x,s.pos.z))}function Tc(s,t,e){s.yaw+=(Math.random()-.5)*1.8*e;const n=s.forward(),i=s.pos.x+n.x*Ni*.55*e,a=s.pos.z+n.z*Ni*.55*e,r=t.resolve(i,a,s.pos.y);s.pos.x=r.x,s.pos.z=r.z,s.pos.y=t.groundY(s.pos.x,s.pos.z)}function NU(s,t,e){if(!t.inSpawnPocket(s.pos,s.team)){const n=s.team===0?t.spawnA:t.spawnB;s.pos.distanceToSquared(n)>.09&&Wo(s,t,t.laneRoute(s.pos,n),e);return}s.pos.y=t.groundY(s.pos.x,s.pos.z)}const BU=["tickle-lock","tickle","vanish","tap-out","reappear","escape","win","lose","buy","spend","countdown-tick"];function Xo(){try{return new AudioContext}catch{return null}}let be=null;const Oh=new Map;let ra=null;function La(){return be||(be=Xo()),be}function Ac(s,t){return`${"./".endsWith("/")?"./":".//"}sfx/${s}.${t}`}async function Rc(s,t){try{const e=await fetch(t);if(!e.ok)return null;const n=await e.arrayBuffer();return await s.decodeAudioData(n.slice(0))}catch{return null}}async function OU(s,t){const e=await Rc(s,Ac(t,"ogg"))??await Rc(s,Ac(t,"mp3"));e&&Oh.set(t,e)}function zh(){const s=La();return s?ra||(ra=(async()=>{await Promise.all(BU.map(t=>OU(s,t)))})(),ra):Promise.resolve()}function zU(s,t=.7,e=1){const n=La(),i=Oh.get(s);if(!n||!i)return!1;try{n.state==="suspended"&&n.resume();const a=n.createBufferSource(),r=n.createGain(),o=n.currentTime;return a.buffer=i,a.playbackRate.setValueAtTime(Math.max(.5,Math.min(2,e)),o),r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(Math.max(1e-4,t),o+.006),a.connect(r),r.connect(n.destination),a.start(o),!0}catch{return!1}}function tn(s,t,e,n=1){zh(),!zU(s,t,n)&&e()}function oa(s,t=.08,e="triangle",n=.05){if(be||(be=Xo()),!be)return;const i=be.createOscillator(),a=be.createGain();i.type=e,i.frequency.value=s,a.gain.value=n,a.gain.exponentialRampToValueAtTime(.001,be.currentTime+t),i.connect(a),a.connect(be.destination),i.start(),i.stop(be.currentTime+t)}function dt(s,t,e,n=.055,i=0,a){const r=La();if(!r)return;const o=r.currentTime+i,l=r.createOscillator(),c=r.createGain();l.type=e,l.frequency.setValueAtTime(Math.max(1,s),o),a!=null&&l.frequency.exponentialRampToValueAtTime(Math.max(1,a),o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.008),c.gain.exponentialRampToValueAtTime(.001,o+t),l.connect(c),c.connect(r.destination),l.start(o),l.stop(o+t)}function Hh(){be||(be=Xo()),(be==null?void 0:be.state)==="suspended"&&be.resume(),zh()}let Cc=!1,Lc=!1;function HU(){if(Lc)return;Lc=!0;const s=La();if(s)try{s.state==="suspended"&&s.resume(),dt(420,.07,"sine",.028,0,680),dt(880,.05,"triangle",.016,.04)}catch{}}function VU(s=document){if(Cc)return;Cc=!0;const t=()=>{Hh(),HU()};s.addEventListener("pointerdown",t,{passive:!0}),s.addEventListener("keydown",t),s.addEventListener("touchstart",t,{passive:!0})}function $U(){tn("tickle-lock",.75,()=>dt(155,.09,"square",.06))}function jU(){tn("reappear",3.5,()=>{dt(1560,.058,"sine",.068,0,3800),dt(2700,.052,"sine",.116,.003),dt(4050,.066,"triangle",.096,.01),dt(5400,.048,"sine",.072,.022),dt(6750,.04,"sine",.06,.034),dt(8100,.03,"sine",.046,.048),dt(9450,.024,"sine",.03,.062),dt(10800,.02,"sine",.024,.078),dt(12150,.016,"sine",.018,.092),dt(13500,.012,"sine",.014,.106),dt(14850,.008,"sine",.01,.118),dt(16200,.006,"sine",.006,.128),dt(17550,.004,"sine",.0035,.138),dt(18900,.003,"sine",.0025,.148)})}function GU(){tn("tickle",.62,()=>{dt(720,.045,"triangle",.045),dt(960,.05,"triangle",.04,.04)})}function WU(){tn("escape",.55,()=>dt(180,.2,"sawtooth",.05,0,430))}function XU(){tn("vanish",3.6,()=>{dt(10,.4,"sine",.14),dt(1240,.92,"sine",.132,.004,7.5),dt(860,.78,"triangle",.1,.018,6.5),dt(510,.72,"sawtooth",.068,.038,5.5),dt(340,.66,"sine",.056,.07,4),dt(210,.6,"sine",.05,.105,3),dt(150,.54,"sine",.044,.145,2.5),dt(110,.5,"sine",.038,.19,2),dt(76,.46,"sine",.032,.24,1.4),dt(56,.42,"sine",.02,.29,1),dt(44,.36,"sine",.016,.34,.74),dt(36,.3,"sine",.012,.4,.58),dt(28,.24,"sine",.008,.46,.44),dt(22,.16,"sine",.005,.52,.32),dt(18,.12,"sine",.0035,.58,.24),dt(14,.08,"sine",.0025,.64,.18)})}function gr(s=.48,t=2,e=!1){let n=t<=1?7.15:t===2?.36:.007,i=t<=1?4e3:t===2?360:32;e&&(n*=.1,i*=.07),tn("countdown-tick",s,()=>{dt(i,.038,"sine",Math.min(.08,s*.15)),dt(i*1.5,.018,"triangle",Math.min(.046,s*.08),.006),t<=1?(dt(i*2,.014,"sine",e?.004:.044,.016),dt(i*2.5,.011,"triangle",e?.002:.032,.028),e||(dt(i*3,.01,"sine",.022,.04),dt(i*3.5,.008,"triangle",.018,.05),dt(i*4,.007,"sine",.014,.06),dt(i*4.5,.006,"sine",.01,.072),dt(i*5,.005,"triangle",.007,.084),dt(i*5.5,.004,"sine",.005,.094),dt(i*6,.003,"triangle",.003,.104))):t===2?(dt(i*2,.011,"sine",e?.002:.026,.018),e||(dt(i*2.5,.01,"triangle",.02,.032),dt(i*3,.008,"sine",.015,.044),dt(i*3.5,.006,"triangle",.011,.056),dt(i*4,.005,"sine",.007,.068),dt(i*4.5,.004,"triangle",.005,.08),dt(i*5,.003,"sine",.003,.09))):e||dt(i*.5,.052,"triangle",Math.min(.032,s*.056),.003)},n)}function _r(){tn("tap-out",.72,()=>{dt(148,.18,"sawtooth",.07),dt(92,.16,"square",.055,.14)})}function qU(){tn("win",.7,()=>{dt(392,.14,"sine",.05),dt(523,.16,"sine",.05,.1),dt(659,.22,"triangle",.055,.2)})}function KU(){tn("lose",.68,()=>{dt(277,.16,"triangle",.055),dt(208,.18,"triangle",.05,.12),dt(131,.28,"sawtooth",.045,.24,90)})}function YU(){tn("buy",.7,()=>{dt(988,.12,"sine",.06),dt(1480,.08,"triangle",.03,.02)})}function JU(){tn("spend",.62,()=>dt(392,.14,"triangle",.05,0,196))}const la=["look","skills","loadout"],ca=["weapons","armors"],Mo=["stamina","struggle","tickle"],vr=["team-quick","team-timed","ffa-timed","ffa-quick"],ZU=7,Pc={stamina:2,struggle:3.5,tickle:1.5},QU={stamina:Hn.stamina,struggle:Hn.struggle,tickle:Hn.tickle},tD={stamina:"Stamina",struggle:"Escape",tickle:"Tickle"};class eD{constructor(t,e,n,i){C(this,"room","plaza");C(this,"overlay");C(this,"getSave");C(this,"persist");C(this,"onPlay");C(this,"root",null);C(this,"bound",!1);C(this,"homeTab","look");C(this,"shopTab","weapons");C(this,"laughTimer",0);C(this,"laughUntil",0);C(this,"laughMs",0);C(this,"focus",0);C(this,"arenaFocus",0);C(this,"loadoutItems",[]);this.overlay=t,this.getSave=e,this.persist=n,this.onPlay=i}bind(){const t=this.overlay.querySelector("#hub-root");if(!(t instanceof HTMLElement))return;this.root=t;const e=this.overlay.querySelector("#elara-still"),n=!!(e&&!t.contains(e));t.innerHTML=iD(!n),this.bound||(t.addEventListener("click",i=>this.onClick(i)),this.bound=!0),this.show(this.room),this.render()}render(){const t=this.root;if(!t)return;const e=this.getSave(),n=Ms(e.weapon),i=Ss(e.armor),a=t.querySelector("#statline");if(a){const r=e.level<10?100+20*(e.level-1):0,o=e.level>=10?"XP capped":`XP ${e.xp??0}/${r}`;a.textContent=`Elara Case  ·  Lv ${e.level}  ·  ${o}  ·  ${e.coins} coins  ·  ${e.unspent} skill pts  ·  ${n.name} / ${i.name}`}this.syncTabs(t),this.renderLook(t,e),this.renderSkills(t,e),this.renderLoadout(t,e),this.renderShop(t,e),this.renderArena(t,e,n,i),this.paintFocus(),this.syncPadHint()}handlePad(t){return this.room==="plaza"?(t.padHome?this.show("home"):t.padShop?this.show("shop"):t.padArena&&this.show("arena"),!1):t.back?(this.show("plaza"),!0):(t.padTabPrev&&this.cycleTab(-1),t.padTabNext&&this.cycleTab(1),t.padLeft&&this.moveFocus(-1,0),t.padRight&&this.moveFocus(1,0),t.padUp&&this.moveFocus(0,-1),t.padDown&&this.moveFocus(0,1),t.confirm?(this.activateFocus(),!0):!1)}get laughing(){return performance.now()<this.laughUntil}get laughProgress(){if(!this.laughMs)return 0;const t=this.laughUntil-performance.now();return Math.max(0,Math.min(1,1-t/this.laughMs))}debugPad(){return{room:this.room,homeTab:this.homeTab,shopTab:this.shopTab,focus:this.focus,arenaMode:vr[this.arenaFocus]??"team-quick"}}show(t){var r;const e=this.room!==t;this.room=t;const n=this.root;if(!n)return;for(const o of["plaza","home","shop","arena"])(r=n.querySelector(`#hub-${o}`))==null||r.classList.toggle("on",o===t);const i=n.querySelector("#hub-back"),a=n.querySelector(`#hub-${t}`);i&&(i.hidden=t==="plaza",a&&t!=="plaza"&&a.prepend(i)),(t==="home"||t==="shop")&&this.syncTabs(n),e&&this.resetFocus(),this.paintFocus(),this.syncPadHint()}onClick(t){const e=t.target;if(!(e instanceof Element))return;const n=e.closest("[data-hub], #hub-back, #play, #arena-start, #arena-timed, #arena-ffa-timed, #arena-ffa-quick, #btn-laugh");if(!n)return;switch(n.getAttribute("data-hub")??n.id){case"hub-back":this.show("plaza");return;case"door-home":this.show("home");return;case"door-shop":this.show("shop");return;case"door-arena":this.show("arena");return;case"play":case"arena-start":this.onPlay("team-quick");return;case"arena-timed":this.onPlay("team-timed");return;case"arena-ffa-quick":this.onPlay("ffa-quick");return;case"arena-ffa-timed":this.onPlay("ffa-timed");return;case"tab-look":this.homeTab="look",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-skills":this.homeTab="skills",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-loadout":this.homeTab="loadout",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-weapons":this.shopTab="weapons",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"tab-armors":this.shopTab="armors",this.resetFocus(),this.syncTabs(this.root),this.paintFocus();return;case"btn-laugh":this.previewLaugh();return;case"spend-stamina":this.spend("stamina");return;case"spend-struggle":this.spend("struggle");return;case"spend-tickle":this.spend("tickle");return;case"equip":{const a=n.getAttribute("data-kind"),r=Number(n.getAttribute("data-id"));(a==="weapon"||a==="armor")&&this.equip(a,r);return}case"buy":{const a=n.getAttribute("data-kind"),r=Number(n.getAttribute("data-id"));(a==="weapon"||a==="armor")&&this.buy(a,r);return}case"pick-look":{const a=Number(n.getAttribute("data-id"));this.pickLook(a);return}default:return}}cycleTab(t){if(this.room==="home"){const e=la.indexOf(this.homeTab);this.homeTab=la[(e+t+la.length)%la.length],this.resetFocus(),this.syncTabs(this.root),this.paintFocus(),this.syncPadHint();return}if(this.room==="shop"){const e=ca.indexOf(this.shopTab);this.shopTab=ca[(e+t+ca.length)%ca.length],this.resetFocus(),this.syncTabs(this.root),this.paintFocus(),this.syncPadHint()}}resetFocus(){const t=this.getSave();if(this.room==="home"&&this.homeTab==="look")this.focus=t.look;else if(this.room==="home"&&this.homeTab==="skills")this.focus=0;else if(this.room==="home"&&this.homeTab==="loadout"){const e=this.loadoutItems.findIndex(n=>n.kind==="weapon"&&n.id===t.weapon);this.focus=e>=0?e:0}else this.room==="shop"&&this.shopTab==="weapons"?this.focus=t.weapon:this.room==="shop"&&this.shopTab==="armors"?this.focus=t.armor:this.room==="arena"?this.focus=this.arenaFocus:this.focus=0}focusCount(){return this.room==="home"&&this.homeTab==="look"?Bi.length:this.room==="home"&&this.homeTab==="skills"?Mo.length:this.room==="home"&&this.homeTab==="loadout"?Math.max(1,this.loadoutItems.length):this.room==="shop"&&this.shopTab==="weapons"?bs.length+1:this.room==="shop"&&this.shopTab==="armors"?xs.length+1:this.room==="arena"?vr.length:1}moveFocus(t,e){const n=this.focusCount();if(this.room==="home"&&this.homeTab==="look")t&&(this.focus=(this.focus+t+n)%n),e&&(this.focus=Math.max(0,Math.min(n-1,this.focus+e*ZU)));else{const i=t||e;i&&(this.focus=(this.focus+i+n)%n),this.room==="arena"&&(this.arenaFocus=this.focus)}this.paintFocus(),this.syncPadHint()}activateFocus(){if(this.room==="home"&&this.homeTab==="look"){this.pickLook(this.focus);return}if(this.room==="home"&&this.homeTab==="skills"){const t=Mo[this.focus];t&&this.spend(t);return}if(this.room==="home"&&this.homeTab==="loadout"){const t=this.loadoutItems[this.focus];t&&this.equip(t.kind,t.id);return}if(this.room==="shop"){const t=this.shopTab==="weapons"?"weapon":"armor";this.buy(t,this.focus);return}this.room==="arena"&&(this.arenaFocus=this.focus,this.onPlay(vr[this.arenaFocus]??"team-quick"))}paintFocus(){const t=this.root;if(!t||this.room==="plaza")return;t.querySelectorAll(".focus").forEach(a=>a.classList.remove("focus"));const e=`[data-focus="${this.room==="arena"?this.arenaFocus:this.focus}"]`,i=((this.room==="home"?this.homeTab==="look"?t.querySelector("#look-grid"):this.homeTab==="skills"?t.querySelector("#home-skills"):t.querySelector("#loadout-list"):this.room==="shop"?this.shopTab==="weapons"?t.querySelector("#shop-weapons"):t.querySelector("#shop-armors"):t.querySelector("#hub-arena"))??t).querySelector(e);i==null||i.classList.add("focus")}syncPadHint(){var n;const t=(n=this.root)==null?void 0:n.querySelector("#hub-pad-hint");if(!t)return;if(this.room==="plaza"){t.textContent="Xbox: LS walk plaza · A at Arena = Team Quick · X Home · Y Shop · RB modes · B back";return}const e=this.room==="home"?this.homeTab:this.room==="shop"?this.shopTab:"mode";t.textContent=`D-pad / LS move · A ${this.room==="arena"?"Start":"confirm"} · LB/RB ${e} tabs · B plaza`}spend(t){const e=this.getSave();e.unspent<1||e.blocks[t]>=Sn||(e.unspent-=1,e.blocks[t]+=1,this.persist(),JU(),this.render())}pickLook(t){const e=Oi(t),n=this.getSave();if(n.look===e.id){this.previewLaugh();return}n.look=e.id,this.focus=e.id,this.persist(),this.render(),this.previewLaugh()}buy(t,e){var o,l;if(e===0)return;const n=this.getSave(),i=t==="weapon"?Ms(e):Ss(e);if(i.id!==e)return;const a=t==="weapon"?n.ownedWeapons:n.ownedArmors;if(a.includes(e)){this.equip(t,e);return}if(n.coins<i.price){const c=(o=this.root)==null?void 0:o.querySelector("#shop-note");c&&(c.textContent=`Need ${i.price} coins for ${i.name} — you have ${n.coins}.`);return}n.coins-=i.price,a.push(e),t==="weapon"?n.weapon=e:n.armor=e,this.persist(),YU(),this.render();const r=(l=this.root)==null?void 0:l.querySelector("#shop-note");r&&(r.textContent=`Bought and equipped ${i.name}. Owned ids saved.`)}equip(t,e){const n=this.getSave();!(t==="weapon"?n.ownedWeapons:n.ownedArmors).includes(e)&&e!==0||(t==="weapon"?n.weapon=e:n.armor=e,this.persist(),this.render())}previewLaugh(){var a;const t=(a=this.root)==null?void 0:a.querySelector("#look-preview");if(!t)return;const e=this.getSave(),i=xa(e.look??0).hubPreviewMs??2e3;t.classList.add("laughing"),this.laughUntil=performance.now()+i,this.laughMs=i,window.clearTimeout(this.laughTimer),this.laughTimer=window.setTimeout(()=>t.classList.remove("laughing"),i)}syncTabs(t){var e,n,i,a,r,o,l,c,h,u;t&&((e=t.querySelector("#tab-look"))==null||e.classList.toggle("on",this.homeTab==="look"),(n=t.querySelector("#tab-skills"))==null||n.classList.toggle("on",this.homeTab==="skills"),(i=t.querySelector("#tab-loadout"))==null||i.classList.toggle("on",this.homeTab==="loadout"),(a=t.querySelector("#home-look"))==null||a.classList.toggle("on",this.homeTab==="look"),(r=t.querySelector("#home-skills"))==null||r.classList.toggle("on",this.homeTab==="skills"),(o=t.querySelector("#home-loadout"))==null||o.classList.toggle("on",this.homeTab==="loadout"),(l=t.querySelector("#tab-weapons"))==null||l.classList.toggle("on",this.shopTab==="weapons"),(c=t.querySelector("#tab-armors"))==null||c.classList.toggle("on",this.shopTab==="armors"),(h=t.querySelector("#shop-weapons"))==null||h.classList.toggle("on",this.shopTab==="weapons"),(u=t.querySelector("#shop-armors"))==null||u.classList.toggle("on",this.shopTab==="armors"))}renderLook(t,e){const n=Oi(e.look),i=t.querySelector("#look-name");i&&(i.textContent=n.metalException?`${n.display} · default · metal exception (earrings + pendant)`:`${n.display} · Amateur 12 · metal-free`);const a=t.querySelector("#look-preview img"),r=this.overlay.querySelector("#elara-still"),o=Gn(n.slug);o&&on(o).then(c=>{a&&(a.src=c.keyedUrl,a.alt=n.display),r&&(r.src=c.keyedUrl,r.alt=n.display,r.hidden=!1)});const l=t.querySelector("#look-grid");if(l){l.innerHTML=Bi.map(c=>{const h=Gn(c.slug)??"";return`<button type="button" class="look-chip${c.id===e.look?" on":""}" data-hub="pick-look" data-id="${c.id}" data-focus="${c.id}" title="${He(c.display)}">
          <img data-look="${c.id}" alt="${He(c.display)}" ${h?"":"hidden"} />
          <span>${He(c.display.split(" ")[0]??c.display)}</span>
        </button>`}).join("");for(const c of Bi){const h=Gn(c.slug);h&&on(h).then(u=>{const d=l.querySelector(`img[data-look="${c.id}"]`);d&&(d.src=u.keyedUrl,d.hidden=!1)})}}}renderSkills(t,e){const n=t.querySelector("#skill-unspent");n&&(n.textContent=`${e.unspent} unspent`);for(const i of["stamina","struggle","tickle"]){const a=e.blocks[i],r=QU[i]+Pc[i]*a,o=t.querySelector(`[data-track="${i}"]`);if(!o)continue;const l=o.querySelector(".skill-meta");l&&(l.textContent=`${a} / ${Sn}  ·  flat ${nD(r)}  ·  +${Pc[i]} / block`),o.querySelectorAll(".skill-cells i").forEach((u,d)=>{u.classList.toggle("on",d<a),u.classList.toggle("lock",d>=Sn)});const h=o.querySelector("button");h&&(h.disabled=e.unspent<1||a>=Sn)}}renderLoadout(t,e){const n=t.querySelector("#loadout-list");if(!n)return;const i=Uc(e.ownedWeapons,Ms,vs),a=Uc(e.ownedArmors,Ss,ys);n.innerHTML='<h3 class="hub-subhead">Weapons</h3>'+i.map((r,o)=>Dc("weapon",r,e.weapon,yr(r),o)).join("")+'<h3 class="hub-subhead">Armors</h3>'+a.map((r,o)=>Dc("armor",r,e.armor,br(r),i.length+o)).join(""),this.loadoutItems=[...i.map(r=>({kind:"weapon",id:r.id})),...a.map(r=>({kind:"armor",id:r.id}))]}renderShop(t,e){const n=t.querySelector("#shop-coins");n&&(n.textContent=`${e.coins} coins`);const i=t.querySelector("#shop-note");i&&!i.textContent&&(i.textContent="Buy spends coins. Equip is immediate. Ids persist.");const a=t.querySelector("#shop-weapons");a&&(a.innerHTML=[vs,...bs].map(o=>kc("weapon",o,e.ownedWeapons,e.weapon,e.coins,yr(o))).join(""));const r=t.querySelector("#shop-armors");r&&(r.innerHTML=[ys,...xs].map(o=>kc("armor",o,e.ownedArmors,e.armor,e.coins,br(o))).join(""))}renderArena(t,e,n,i){const a=t.querySelector("#arena-loadout");a&&(a.textContent=`Loadout locks at Start · ${n.name} / ${i.name} · Lv ${e.level}`);const r=t.querySelector("#arena-catalog");if(r){const o=[vs,...bs].map(c=>`<li>${He(c.name)} · ${c.price?`${c.price}c`:"free"} · ${He(yr(c))}</li>`).join(""),l=[ys,...xs].map(c=>`<li>${He(c.name)} · ${c.price?`${c.price}c`:"free"} · ${He(br(c))}</li>`).join("");r.innerHTML=`<div class="arena-cat-col"><h3 class="hub-subhead">Weapons</h3><ul class="arena-cat">${o}</ul></div>
        <div class="arena-cat-col"><h3 class="hub-subhead">Armors</h3><ul class="arena-cat">${l}</ul></div>`}}}function nD(s){return Number.isInteger(s)?String(s):s.toFixed(1)}function yr(s){return s.ticklePct?`+${Math.round(s.ticklePct*100)}% tickle`:"no bonus"}function br(s){const t=[];return s.stamPct&&t.push(`+${Math.round(s.stamPct*100)}% stam`),s.escPct&&t.push(`+${Math.round(s.escPct*100)}% escape`),t.length?t.join(" / "):"no bonus"}function Uc(s,t,e){return[...new Set([0,...s])].sort((i,a)=>i-a).map(i=>{const a=t(i);return a.id===i?a:e})}function Dc(s,t,e,n,i){return`<button type="button" class="hub-item${t.id===e?" on":""}" data-hub="equip" data-kind="${s}" data-id="${t.id}" data-focus="${i}">
    <span class="hub-item-name">${He(t.name)}</span>
    <span class="hub-item-meta">${He(n)} · ${t.id===e?"equipped":"equip"}</span>
  </button>`}function kc(s,t,e,n,i,a){const r=t.id===0||e.includes(t.id),o=t.id===n;let l,c="";if(t.id===0)l=o?"owned · equipped · not for sale":"owned · not for sale",c=`<button type="button" class="cta ghost" data-hub="equip" data-kind="${s}" data-id="${t.id}">${o?"Equipped":"Equip"}</button>`;else if(o)l="owned · equipped",c='<button type="button" class="cta ghost" disabled>Equipped</button>';else if(r)l="owned",c=`<button type="button" class="cta ghost" data-hub="equip" data-kind="${s}" data-id="${t.id}">Equip</button>`;else{const h=i>=t.price;l=`${t.price} coins`,c=`<button type="button" class="cta${h?"":" ghost"}" data-hub="buy" data-kind="${s}" data-id="${t.id}">${h?"Buy":`Need ${t.price}c`}</button>`}return`<div class="hub-item${o?" on":""}" data-focus="${t.id}">
    <div class="hub-item-copy">
      <span class="hub-item-name">${He(t.name)}</span>
      <span class="hub-item-meta">${He(a)} · ${He(l)}</span>
    </div>
    ${c}
  </div>`}function He(s){return s.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t)}function xr(s){const t=Array.from({length:Sn},()=>"<i></i>").join(""),e=Array.from({length:xo-Sn},()=>'<i class="lock"></i>').join("");return`<div class="skill-track" data-track="${s}" data-focus="${Mo.indexOf(s)}">
    <div class="skill-head">
      <span>${tD[s]}</span>
      <span class="skill-meta"></span>
    </div>
    <div class="skill-cells amateur">${t}</div>
    <div class="skill-lock-label">Pro lock · ${xo-Sn} blocks</div>
    <div class="skill-cells pro">${e}</div>
    <button type="button" class="cta" id="spend-${s}" data-hub="spend-${s}">Spend 1</button>
  </div>`}function iD(s){return`
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
      <p class="hint">Permanent spend. No respec. Amateur can fill the first ${Sn} of ${xo} blocks. Rest lock until Pro.</p>
      ${xr("stamina")}
      ${xr("struggle")}
      ${xr("tickle")}
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
  </div>`}const sD=5919564,aD=2762276,rD=3814704,Mr=6211800,ha=13935194,oD=.42,Vh=5.58;class lD{constructor(){C(this,"group",new Qt);C(this,"doors");C(this,"matMetal");C(this,"matDark");C(this,"matFloor");C(this,"matCyan");C(this,"matAmber");C(this,"pickables",[]);C(this,"ray",new Ng);C(this,"ndc",new ct);C(this,"hover",null);C(this,"near",null);C(this,"doorGroups",new Map);C(this,"doorLights",new Map);C(this,"doorFloorMats",new Map);C(this,"doorSillMats",new Map);C(this,"doorSigns",new Map);C(this,"doorSignMats",new Map);C(this,"doorOuterSillMats",new Map);C(this,"nearStrength",0);C(this,"walls",[]);this.matMetal=new Ee({color:sD,metalness:.72,roughness:.38}),this.matDark=new Ee({color:aD,metalness:.55,roughness:.5}),this.matFloor=new Ee({color:rD,metalness:.4,roughness:.62}),this.matCyan=an(Mr,.22),this.matAmber=an(ha,.2),this.doors={home:new R(-13.2,1.55,0),shop:new R(13.2,1.55,0),arena:new R(0,1.55,10.2)},this.build()}addBox(t,e,n,i,a,r,o,l=!0){const c=new bt(new Xt(i,a,r),o);return c.position.set(t,e,n),l&&(c.castShadow=!0,c.receiveShadow=!0),this.group.add(c),c}build(){const t=new bt(new Xt(28,.4,22),this.matFloor);t.position.y=-.2,t.receiveShadow=!0,this.group.add(t);const e=4.2,n=e/2,i=.8,a=2.4,r=3.1,o=a/2,l=14,c=11,h=c-i/2,u=-10.6,d=-13.6,p=l-i/2,g=l-o,_=c-o;this.addBox(0,n,u,28,e,i,this.matMetal),this.addBox(-7.6000000000000005,n,h,g,e,i,this.matMetal),this.addBox(o+g/2,n,h,g,e,i,this.matMetal),this.addBox(0,r+(e-r)/2,h,a,e-r,i,this.matMetal),this.addBox(d,n,-6.1000000000000005,i,e,_,this.matMetal),this.addBox(d,n,o+_/2,i,e,_,this.matMetal),this.addBox(d,r+(e-r)/2,0,i,e-r,a,this.matMetal),this.addBox(p,n,-6.1000000000000005,i,e,_,this.matMetal),this.addBox(p,n,o+_/2,i,e,_,this.matMetal),this.addBox(p,r+(e-r)/2,0,i,e-r,a,this.matMetal),this.addDoor("home",this.doors.home,Math.PI/2,"HOME",Mr),this.addDoor("shop",this.doors.shop,-Math.PI/2,"SHOP",ha),this.addDoor("arena",this.doors.arena,Math.PI,"ARENA",12103844);for(const[m,f]of[[-6.2,-5.2],[6.2,-5.2],[-6.2,5.2],[6.2,5.2]])this.addBox(m,2.05,f,.7,4.1,.7,this.matMetal);this.addBox(0,.45,-6.4,8.4,.9,.45,this.matDark),this.addBox(-4.8,.38,3.2,3.6,.76,.4,this.matDark),this.addBox(4.8,.38,3.2,3.6,.76,.4,this.matDark),this.addBox(0,4.15,-3.5,26,.22,.45,this.matDark,!1),this.addBox(0,4.15,3.5,26,.22,.45,this.matDark,!1),this.addBiolume(),this.buildColliders()}nearDoor(t,e,n=Vh){let i=null,a=n;for(const r of["home","shop","arena"]){const o=this.doors[r],l=Math.hypot(t-o.x,e-o.z);l<a&&(a=l,i=r)}return i}resolve(t,e,n=oD){let i=t,a=e;for(let o=0;o<18;o++){for(const l of this.walls)if(!(a<=l.minz-n||a>=l.maxz+n)&&i>l.minx-n&&i<l.maxx+n){const c=i-(l.minx-n),h=l.maxx+n-i;i=c<h?l.minx-n-.005:l.maxx+n+.005}for(const l of this.walls)if(!(i<=l.minx-n||i>=l.maxx+n)&&a>l.minz-n&&a<l.maxz+n){const c=a-(l.minz-n),h=l.maxz+n-a;a=c<h?l.minz-n-.005:l.maxz+n+.005}}const r=this.unjamDoorJambs(i,a,n);return i=r.x,a=r.z,i=cn.clamp(i,-13.28,13.28),a=cn.clamp(a,-10.28,10.28),{x:i,z:a}}unjamDoorJambs(t,e,n){const u=n+1.12,d=11-.8/2,p=-13.6,g=14-.8/2;return Math.abs(e-d)<u+.8*.55&&(t>-2.84-u&&t<-2.84+u*.999?t=-2.84+u*.77:t<2.84+u&&t>2.84-u*.999&&(t=2.84-u*.77)),Math.abs(t-p)<u+.8*.55&&(e>-2.84-u&&e<-2.84+u*.999?e=-2.84+u*.77:e<2.84+u&&e>2.84-u*.999&&(e=2.84-u*.77)),Math.abs(t-g)<u+.8*.55&&(e>-2.84-u&&e<-2.84+u*.999?e=-2.84+u*.77:e<2.84+u&&e>2.84-u*.999&&(e=2.84-u*.77)),{x:t,z:e}}addWall(t,e,n,i){this.walls.push({minx:t,maxx:e,minz:n,maxz:i})}buildColliders(){this.walls=[];const t=.8,e=14,n=11,a=2.4/2,r=n-t/2,o=-10.6,l=-13.6,c=e-t/2,h=e-a,u=n-a,d=1.64;this.addWall(-e,e,o-t/2,o+t/2),this.addWall(-14,-a-d,r-t/2,r+t/2),this.addWall(a+d,a+h,r-t/2,r+t/2),this.addWall(l-t/2,l+t/2,-11,-a-d),this.addWall(l-t/2,l+t/2,a+d,a+u),this.addWall(c-t/2,c+t/2,-11,-a-d),this.addWall(c-t/2,c+t/2,a+d,a+u);for(const[p,g]of[[-6.2,-5.2],[6.2,-5.2],[-6.2,5.2],[6.2,5.2]])this.addWall(p-.34,p+.34,g-.34,g+.34);this.addWall(-4.2,4.2,-6.7,-6.1),this.addWall(-6.6,-3,2.9,3.5),this.addWall(3,6.6,2.9,3.5)}pickDoor(t,e,n,i,a){const r=i.getBoundingClientRect();if(r.width<=0||r.height<=0)return null;this.ndc.set((e-r.left)/r.width*2-1,-((n-r.top)/r.height)*2+1),this.ray.setFromCamera(this.ndc,t);const o=this.ray.intersectObjects(this.pickables,!0);for(const u of o){let d=u.object;for(;d;){const p=d.userData.hubRoom;if(p)return p;d=d.parent}}if(!!a&&e>=a.left&&e<=a.right&&n>=a.top&&n<=a.bottom)return null;t.updateMatrixWorld();let c=null,h=96;for(const[u,d]of this.doorGroups){const p=new R;if(d.getWorldPosition(p),p.y=1.7,p.project(t),p.z>1)continue;const g=r.left+(p.x*.5+.5)*r.width,_=r.top+(-p.y*.5+.5)*r.height,m=Math.hypot(e-g,n-_);m<h&&(h=m,c=u)}return c}setHover(t){this.hover!==t&&(this.hover=t,this.applyDoorGlow(0))}setNear(t){this.near!==t&&(this.near=t,t||(this.nearStrength=0),this.applyDoorGlow(0))}setNearStrength(t){const e=cn.clamp(t,0,1);Math.abs(e-this.nearStrength)<.01||(this.nearStrength=e)}updateDoorFx(t){this.applyDoorGlow(t)}applyDoorGlow(t){const e=.5+.5*Math.sin(t*7.25),n=.5+.5*Math.sin(t*2.35);for(const[i,a]of this.doorGroups){const r=this.hover===i||this.near===i,o=this.hover===i?1:this.near===i?Math.max(.12,this.nearStrength):0,l=i==="arena"&&r?.36*o:0,c=(i==="arena"?.18:.138)+n*(i==="arena"?.112:.078),h=this.hover===i?.98+e*.68:this.near===i?(.6+e*.74)*o+c*(1-o):c;a.traverse(M=>{const y=M.material;y!=null&&y.userData.doorGlow&&(y.userData.baseEmissive==null&&(y.userData.baseEmissive=y.emissiveIntensity),y.emissiveIntensity=y.userData.baseEmissive+h+l)});const u=r?1+.06*o+e*.03*o:1+n*.013;a.scale.set(u,1+(u-1)*.94,u);const d=this.doorLights.get(i);if(d){const M=i==="arena"?2.08:1.74;d.intensity=r?M*(.26+.74*o)+e*(i==="arena"?3.45:3.02)*o:M*(.38+n*.26)}const p=this.doorFloorMats.get(i);if(p){const M=i==="arena"?.64:.51;p.emissiveIntensity=r?M*(.26+.74*o)+e*1.48*o:M*(.16+n*.28)}const g=this.doorSillMats.get(i);if(g){const M=i==="arena"?.9:.8;g.emissiveIntensity=r?M*(.28+.72*o)+e*2.02*o:M*(.12+n*.3)}const _=this.doorOuterSillMats.get(i);if(_){const M=i==="arena"?.84:.7;_.emissiveIntensity=r?M*(.26+.74*o)+e*1.96*o:M*(.08+n*.28)}const m=this.doorSigns.get(i);if(m){const M=r?1+e*.195*o:1+n*.046;m.scale.set(M,M,1),m.position.y=m.userData.baseY+(r?e*.076*o:n*.026)}const f=this.doorSignMats.get(i);f&&(f.opacity=r?.96+e*.04*o:.56+n*.24)}}addDoor(t,e,n,i,a){const r=new Qt;r.userData.hubRoom=t;const o=2.4,l=3.1,c=.28,h=.42,u=new Xt(c,l,h),d=new Xt(o+c,.28,h),p=new bt(u,this.matMetal);p.position.set(-o/2,l/2,0),p.castShadow=!0;const g=new bt(u.clone(),this.matMetal);g.position.set(o/2,l/2,0),g.castShadow=!0;const _=new bt(d,this.matMetal);_.position.set(0,l+.08,0),_.castShadow=!0;const m=an(a,.38);m.userData.doorGlow=!0;const f=new bt(new Xt(o-.08,.045,.05),m);f.position.set(0,l-.04,.18);const M=new bt(new Xt(.045,l-.08,.05),m);M.position.set(-o/2+.12,l/2,.18);const E=m.clone();E.userData.doorGlow=!0;const y=new bt(new Xt(.045,l-.08,.05),E);y.position.set(o/2-.12,l/2,.18);const U=new bt(new Xt(o+.2,l+.2,.14),this.matDark);U.position.set(0,l/2,-.32);const T=cD(i,a);T.position.set(0,l+.42,.28);const S=new bt(new Xt(o+.8,l+1.1,1.4),new hi({transparent:!0,opacity:0,depthWrite:!1,side:Ve}));S.position.set(0,l/2+.15,.15),S.userData.hubRoom=t,r.add(p,g,_,f,M,y,U,T,S),T.userData.baseY=T.position.y,this.doorSigns.set(t,T);const P=T.material;P.transparent=!0,P.opacity=.78,this.doorSignMats.set(t,P);const w=new Go(a,t==="arena"?.55:.48,8.2,2);w.position.set(0,l*.72,.55),r.add(w),this.doorLights.set(t,w);const b=an(a,t==="arena"?.62:.58);b.userData.doorGlow=!0;const L=new bt(new Xt(o+.84,.16,1.92),b);L.position.set(0,.08,1.4),r.add(L),this.doorSillMats.set(t,b);const z=an(a,t==="arena"?.62:.58);z.userData.doorGlow=!0;const N=new bt(new Xt(o+1.96,.108,1.68),z);N.position.set(0,.054,2.52),r.add(N),this.doorOuterSillMats.set(t,z);const $=an(a,t==="arena"?.54:.5);$.userData.doorGlow=!0;const q=new bt(new Xt(.13,l-.02,.17),$);q.position.set(-o/2+.3,l/2,.46);const O=$.clone();O.userData.doorGlow=!0;const Z=new bt(new Xt(.13,l-.02,.17),O);Z.position.set(o/2-.3,l/2,.46),r.add(q,Z);const j=an(a,t==="arena"?.4:.36);j.userData.doorGlow=!0;const nt=new bt(new Xt(o-.2,.04,.06),j);nt.position.set(0,l-.02,.22),r.add(nt),r.position.copy(e),r.position.y=0,r.rotation.y=n,this.group.add(r),this.pickables.push(r),this.doorGroups.set(t,r)}addBiolume(){const t=(a,r,o,l,c)=>{const h=new bt(new Xt(a,.035,r),c);return h.position.set(o,.02,l),this.group.add(h),h};t(18,.16,0,0,this.matCyan),t(.16,14,0,0,this.matAmber);const e=an(Mr,.4);e.userData.doorGlow=!0,t(6.5,.58,this.doors.home.x+2.16,0,e),this.doorFloorMats.set("home",e);const n=an(ha,.4);n.userData.doorGlow=!0,t(6.5,.58,this.doors.shop.x-2.16,0,n),this.doorFloorMats.set("shop",n);const i=an(ha,.48);i.userData.doorGlow=!0,t(.58,6.5,0,this.doors.arena.z-2.44,i),this.doorFloorMats.set("arena",i),t(10,.1,0,-9.4,this.matCyan),t(10,.1,0,9.4,this.matAmber)}}function an(s,t){return new Ee({color:2762276,emissive:s,emissiveIntensity:t,metalness:.2,roughness:.7})}function cD(s,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="rgba(12,10,9,0.88)",n.fillRect(0,0,256,64);const i=`#${t.toString(16).padStart(6,"0")}`;n.strokeStyle=i,n.lineWidth=3,n.strokeRect(8,8,240,48),n.fillStyle=i,n.font="700 30px Trebuchet MS, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(s,128,34);const a=new xh(e),r=new hi({map:a,transparent:!0,side:Ve});return new bt(new Yi(1.65,.4),r)}function Sr(s,t=Math.random){const e=Math.max(1,Math.min(10,s)),n=7+(e-1),i={stamina:0,struggle:0,tickle:0},a=["stamina","struggle","tickle"];for(let c=0;c<n;c++){const h=a.filter(d=>i[d]<Sn);if(!h.length)break;const u=h[Math.floor(t()*h.length)];i[u]+=1}const r=e<=2?.4:e<=5?.22:.12;let o=0,l=0;if(t()>r){const c=Math.min(bs.length,Math.max(1,Math.ceil(e*.7)));o=1+Math.floor(t()*c)}if(t()>r){const c=Math.min(xs.length,Math.max(1,Math.ceil(e*.8)));l=1+Math.floor(t()*c)}return{blocks:i,weapon:o,armor:l}}const $h="tb-amateur-save",hD=2.35;class uD{constructor(t){C(this,"renderer");C(this,"scene",new fg);C(this,"camera",new Ne(72,1,.08,120));C(this,"map",new s_);C(this,"plaza",new lD);C(this,"fighters",[]);C(this,"player");C(this,"input",new PU);C(this,"mode","hub");C(this,"arenaMode","team-quick");C(this,"countdown",fc);C(this,"timedLeft",0);C(this,"tapScore",[0,0]);C(this,"clock",new Fg);C(this,"pairCd",new Map);C(this,"joinList",new Map);C(this,"firstTickler",new Map);C(this,"ffaScore",new Map);C(this,"contactHold",new Map);C(this,"nudgeT",0);C(this,"nudgeFrom",new R);C(this,"nudgeTo",new R);C(this,"nudgeIds",[]);C(this,"overlay");C(this,"hub");C(this,"save");C(this,"coinsEarned",0);C(this,"payouts",[]);C(this,"matchLoadout","");C(this,"matchWeapon",0);C(this,"matchArmor",0);C(this,"plazaPreview",null);C(this,"plazaPoseTarget",new R(0,0,1.35));C(this,"plazaYawTarget",Math.PI*.92);C(this,"hubLaughWas",!1);C(this,"hubPos",new R(0,0,-2.4));C(this,"hubYaw",Math.PI);C(this,"hubPitch",0);C(this,"hubNear",null);C(this,"hubPrompted",null);C(this,"hubConfirmGrace",0);C(this,"matchRewardsCommitted",!1);C(this,"result","");C(this,"toastT",0);C(this,"toast","");C(this,"lookPitch",0);C(this,"combatAnnounced",!1);C(this,"countdownTickCeil",-1);C(this,"vanishTickCeil",-1);C(this,"liveT",0);C(this,"hudEls",{});C(this,"rearCue");C(this,"fpArms");C(this,"fpArmT",0);C(this,"wallPrev",performance.now());this.save=Ic(),this.renderer=new dg({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=!0,t.appendChild(this.renderer.domElement),this.overlay=document.createElement("div"),this.overlay.id="overlay",this.overlay.innerHTML=fD(),t.appendChild(this.overlay),this.hub=new eD(this.overlay,()=>this.save,()=>this.persistSave(),n=>{this.arenaMode=n,this.beginMatch(this.input.padActive)}),this.hub.bind(),this.cacheHud(),this.input.bindHud(this.overlay),this.scene.fog=new ri(1709588,18,48),this.scene.background=new Ot(1446672),this.scene.add(new Ug(9076856,1708560,.7));const e=new Ig(13154464,1.05);e.position.set(8,18,6),e.castShadow=!0,this.scene.add(e),this.scene.add(this.map.group),this.scene.add(this.plaza.group),this.plaza.group.visible=!1,this.rearCue=new bt(new Ho(.38,.72,28),new hi({color:13935194,transparent:!0,opacity:.92,side:Ve,depthWrite:!1})),this.rearCue.rotation.x=-Math.PI/2,this.rearCue.visible=!1,this.scene.add(this.rearCue),this.fpArms=dD(),this.scene.add(this.camera),this.camera.add(this.fpArms),this.fpArms.visible=!1,this.bindUi(),window.addEventListener("resize",()=>this.resize()),this.resize(),this.showHub(),this.renderer.setAnimationLoop(()=>this.frame())}cacheHud(){for(const t of["boot","results","hud","stamina-fill","escape-fill","meta-left","meta-right","top-left","top-right","countdown","toast","face","btn-tickle","btn-escape","statline","top","crosshair","radar","roster","face-still","elara-still","player-portrait","pad-status","again-hint","btn-leave","tickle-flash"]){const e=this.overlay.querySelector("#"+t);e&&(this.hudEls[t]=e)}}bindUi(){var t,e;VU(document),(t=this.overlay.querySelector("#again"))==null||t.addEventListener("click",()=>this.returnToPlaza("click")),(e=this.overlay.querySelector("#btn-leave"))==null||e.addEventListener("click",()=>this.bailCountdown()),this.renderer.domElement.addEventListener("click",n=>{var i,a,r,o;if(!this.tryPlazaDoor(n.clientX,n.clientY)){if(this.mode==="hub"&&this.hub.room==="plaza"&&!this.input.padActive){(a=(i=this.renderer.domElement).requestPointerLock)==null||a.call(i);return}this.mode==="play"&&!this.input.padActive&&((o=(r=this.renderer.domElement).requestPointerLock)==null||o.call(r))}}),this.overlay.addEventListener("click",n=>{const i=n.target;i instanceof Element&&(i.closest("button, a, input, [data-hub], .hub-item, .roster, #play")||this.tryPlazaDoor(n.clientX,n.clientY))}),window.addEventListener("pointermove",n=>{if(this.mode!=="hub"||this.hub.room!=="plaza"){document.body.style.cursor==="pointer"&&(document.body.style.cursor="");return}const i=this.overlay.querySelector("#boot .card"),a=this.plaza.pickDoor(this.camera,n.clientX,n.clientY,this.renderer.domElement,i==null?void 0:i.getBoundingClientRect());this.plaza.setHover(a);const r=a?"pointer":"";this.renderer.domElement.style.cursor=r,document.body.style.cursor=r})}tryPlazaDoor(t,e){if(this.mode!=="hub"||this.hub.room!=="plaza")return!1;const n=this.overlay.querySelector("#boot .card"),i=this.plaza.pickDoor(this.camera,t,e,this.renderer.domElement,n==null?void 0:n.getBoundingClientRect());return i?(this.plaza.setHover(null),this.renderer.domElement.style.cursor="",document.body.style.cursor="",i==="arena"?(this.hubConfirmGrace>0||(this.arenaMode="team-quick",this.beginMatch(this.input.padActive)),!0):(this.hub.show(i),this.hub.render(),this.syncPlazaHall(),!0)):!1}syncPlazaHall(){this.hudEls.boot.classList.toggle("plaza-hall",this.mode==="hub"&&this.hub.room==="plaza")}persistSave(){So(this.save),this.syncPlazaPreview()}tickCountdownAudio(){if(this.countdown>0){const e=Math.ceil(this.countdown);e<=3&&e>=1&&e!==this.countdownTickCeil&&(this.countdownTickCeil=e,gr(e===1?1.52:e===2?1:.035,e))}const t=this.player;if(t&&t.occupancy==="vanished"&&t.vanishLeft>0){const e=Math.ceil(t.vanishLeft);e<=3&&e>=1&&e!==this.vanishTickCeil&&(this.vanishTickCeil=e,gr(e===1?.14:e===2?.06:.025,e,!0))}else this.vanishTickCeil=-1}bailCountdown(){this.mode!=="play"||this.countdown<=0||(gr(.78,2),this.countdown=0,this.coinsEarned=0,this.payouts=[],this.resetMatchEphemeral(),this.clearFighters(),this.say("Left during countdown — no coins, no XP"),this.returnToPlaza("leave"))}resetMatchEphemeral(){this.countdownTickCeil=-1,this.vanishTickCeil=-1,this.combatAnnounced=!1,this.coinsEarned=0,this.payouts=[],this.matchRewardsCommitted=!1,this.joinList.clear(),this.firstTickler.clear(),this.ffaScore.clear(),this.pairCd.clear(),this.contactHold.clear(),this.tapScore=[0,0],this.timedLeft=0,this.nudgeT=0,this.nudgeIds=[],this.liveT=0,this.result="",this.matchLoadout="",this.lookPitch=0,this.fpArmT=0,this.wallPrev=performance.now()}returnToPlaza(t){var e;this.showHub(),(e=document.exitPointerLock)==null||e.call(document),this.input.endFrame(),this.hubConfirmGrace=hD,this.matchRewardsCommitted=!1}beginMatch(t){var e,n;this.mode!=="play"&&(this.hubConfirmGrace>0||(Hh(),!t&&!this.input.padActive&&((n=(e=this.renderer.domElement).requestPointerLock)==null||n.call(e)),this.startMatch()))}showHub(){this.mode="hub",this.countdown=0,this.clearFighters(),this.map.group.visible=!1,this.plaza.group.visible=!0,this.scene.fog=new ri(1709588,32,80),this.hudEls.boot.style.display="flex",this.hudEls.results.style.display="none",this.hudEls.hud.style.display="none",this.hudEls.countdown.style.display="none",this.hudEls.top&&(this.hudEls.top.style.display="none"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="none"),this.hudEls.radar&&(this.hudEls.radar.style.display="none"),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display="none"),this.rearCue.visible=!1,this.save=Ic(),this.hubPos.set(0,0,-2.4),this.hubYaw=Math.PI,this.hubPitch=0,this.hubNear=null,this.hubPrompted=null,this.hub.show("plaza"),this.hub.render(),this.fillElaraPortrait(),this.fillRosterStrip(),this.syncPlazaHall(),this.syncPlazaPreview(),this.plaza.setHover(null),this.plaza.setNear(null),this.plaza.setNearStrength(0),this.resetMatchEphemeral(),this.persistSave()}aimPlazaCamera(){const t=this.clock.elapsedTime*.12,e=this.hub.room;if(e==="home"){this.camera.position.set(-6.4,3.5,.35),this.camera.lookAt(this.plaza.doors.home.x,1.55,this.plaza.doors.home.z);return}if(e==="shop"){this.camera.position.set(6.4,3.5,.35),this.camera.lookAt(this.plaza.doors.shop.x,1.55,this.plaza.doors.shop.z);return}if(e==="arena"){this.camera.position.set(0,3.7,4.4),this.camera.lookAt(this.plaza.doors.arena.x,1.55,this.plaza.doors.arena.z);return}this.camera.position.set(Math.sin(t)*1.4+2.35,1.78,4.85),this.camera.lookAt(0,1.12,1.35)}tickHubWalk(t){const e=this.input.consumeLook();this.hubYaw-=e.x,this.hubPitch=cn.clamp(this.hubPitch-e.y,-1.05,.95);const n=this.input.moveVec(),i=Ni*.88,a=-Math.sin(this.hubYaw),r=-Math.cos(this.hubYaw),o=Math.cos(this.hubYaw),l=-Math.sin(this.hubYaw),c=(a*n.z+o*n.x)*i*t,h=(r*n.z+l*n.x)*i*t,u=this.plaza.resolve(this.hubPos.x+c,this.hubPos.z+h);if(this.hubPos.x=u.x,this.hubPos.z=u.z,this.hubPos.y=0,this.hubNear=this.plaza.nearDoor(this.hubPos.x,this.hubPos.z),this.plaza.setNear(this.hubNear),this.hubNear){const d=this.plaza.doors[this.hubNear],p=Math.hypot(this.hubPos.x-d.x,this.hubPos.z-d.z),_=1-Math.min(1,p/Vh),m=_*_*(3-2*_),f=m*m*(3-2*m),M=f*f*(3-2*f),E=M*M*(3-2*M),y=E*E*(3-2*E),U=y*y*(3-2*y),T=U*U*(3-2*U);this.plaza.setNearStrength(T*T*(3-2*T))}else this.plaza.setNearStrength(0);this.hubNear!==this.hubPrompted&&(this.hubPrompted=this.hubNear,this.hubNear==="arena"?this.say("Arena — A / Enter / E / click starts Amateur Team Quick"):this.hubNear==="home"?this.say("Home — A / Enter / E / click (Look · Skills · Loadout)"):this.hubNear==="shop"&&this.say("Shop — A / Enter / E / click (Amateur gear)"))}interactHubDoor(t){const e=this.hubNear;if(e==="arena"){this.arenaMode="team-quick",this.beginMatch(this.input.padActive);return}if(e==="home"||e==="shop"){this.hub.show(e),this.hub.render(),this.syncPlazaHall();return}t&&(this.arenaMode="team-quick",this.beginMatch(this.input.padActive))}aimHubWalkCamera(){this.camera.position.set(this.hubPos.x+Math.sin(this.hubYaw)*2.55,this.hubPos.y+1.62,this.hubPos.z+Math.cos(this.hubYaw)*2.55),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.hubYaw,this.camera.rotation.x=this.hubPitch,this.camera.rotation.z=0}fillElaraPortrait(){const t=this.hudEls["elara-still"],e=Oi(this.save.look),n=Gn(e.slug);!t||!n||(t.hidden=!0,t.alt=e.display,on(n).then(i=>{t.src=i.keyedUrl,t.hidden=!1;const a=this.overlay.querySelector("#look-preview img");a&&(a.src=i.keyedUrl)}))}fillRosterStrip(){const t=this.hudEls.roster;if(t){t.innerHTML=_s.map(e=>Gn(e.slug)?`<figure class="slot"><img data-slug="${e.slug}" alt="${e.display}" hidden /><figcaption>${e.display}</figcaption></figure>`:`<div class="slot empty"><span>${e.display}</span></div>`).join("");for(const e of _s){const n=Gn(e.slug);n&&on(n).then(i=>{const a=t.querySelector(`img[data-slug="${e.slug}"]`);a&&(a.src=i.keyedUrl,a.hidden=!1)})}}}startMatch(){this.mode="play",this.map.group.visible=!0,this.plaza.group.visible=!1,this.scene.fog=new ri(1709588,18,48),this.countdown=fc,this.timedLeft=this.arenaMode==="team-timed"||this.arenaMode==="ffa-timed"?Gg:0,this.tapScore=[0,0],this.coinsEarned=0,this.payouts=[],this.matchRewardsCommitted=!1,this.joinList.clear(),this.firstTickler.clear(),this.ffaScore.clear(),this.pairCd.clear(),this.contactHold.clear(),this.nudgeT=0,this.combatAnnounced=!1,this.countdownTickCeil=-1,this.vanishTickCeil=-1,this.liveT=0,this.wallPrev=performance.now(),this.clearFighters(),this.lockMatchLoadout(),this.spawnRoster(),this.hudEls.boot.style.display="none",this.hudEls.results.style.display="none",this.hudEls.hud.style.display="flex",this.syncPlazaHall(),this.plazaPreview&&(this.plazaPreview.group.visible=!1),this.hudEls.top&&(this.hudEls.top.style.display="flex"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="block"),this.hudEls.radar&&(this.hudEls.radar.style.display="flex"),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display="block"),oa(220,.12)}clearFighters(){for(const t of this.fighters)this.scene.remove(t.group);this.fighters=[]}spawnRoster(){const t=["hunter","flanker","ambusher","escape","sticky"],e=Oi(this.save.look),n=this.lookPalette(e.id),i=new Set([n]),a=()=>{for(let h=1;h<Ta.length;h++)if(!i.has(h))return i.add(h),h;return 1},r={...this.save.blocks},o=this.isFfa(),l=_s.filter(h=>h.slug!==e.slug);this.player=new ls({team:o?0:sa.CYAN,isPlayer:!0,look:n,name:"Elara Case",slug:e.slug,role:null,blocks:r,weapon:this.matchWeapon,armor:this.matchArmor});const c=o?this.map.soloPads[0].clone():this.map.spawnA.clone();if(this.place(this.player,c),this.player.yaw=o?wr(c,new R):-Math.PI/2,this.fighters.push(this.player),this.scene.add(this.player.group),this.player.body.visible=!1,o){for(let h=0;h<11;h++){const u=Sr(this.save.level),d=this.map.soloPads[h+1]??this.map.spawnB.clone(),p=new ls({team:h+1,isPlayer:!1,look:a(),name:l[h].display,slug:l[h].slug,role:t[h%t.length],blocks:u.blocks,weapon:u.weapon,armor:u.armor});this.place(p,d.clone()),p.yaw=wr(d,new R),this.fighters.push(p),this.scene.add(p.group)}return}for(let h=0;h<5;h++){const u=Sr(this.save.level),d=new ls({team:sa.CYAN,isPlayer:!1,look:a(),name:l[h].display,slug:l[h].slug,role:t[h%t.length],blocks:u.blocks,weapon:u.weapon,armor:u.armor});this.place(d,this.map.spawnA.clone().add(new R(-1+h*.4,0,-2+h*.8))),d.yaw=-Math.PI/2,this.fighters.push(d),this.scene.add(d.group)}for(let h=0;h<6;h++){const u=Sr(this.save.level),d=t[h%t.length],p=d==="escape",g=new ls({team:sa.AMBER,isPlayer:!1,look:a(),name:l[5+h].display,slug:l[5+h].slug,role:d,blocks:u.blocks,weapon:u.weapon,armor:u.armor});g.bait=p,p?(this.place(g,new R(po,0,mo)),g.yaw=-Math.PI/2,g.rim.intensity=3.6):(this.place(g,this.map.spawnB.clone().add(new R(1-h%3*.5,0,-2+h%3*1.1))),g.yaw=Math.PI/2),this.fighters.push(g),this.scene.add(g.group)}}place(t,e){e.y=this.map.groundY(e.x,e.z),t.pos.copy(e),t.syncMesh(),t.settle()}lockMatchLoadout(){this.matchWeapon=this.save.weapon,this.matchArmor=this.save.armor,this.matchLoadout=wU(this.matchWeapon,this.matchArmor)}lookPalette(t){return t===0?0:(t-1)%Math.max(1,Ta.length-1)+1}syncPlazaPreview(){const t=Oi(this.save.look),e=this.lookPalette(t.id),n=this.mode==="hub"&&this.hub.room==="plaza",i=this.mode!=="play";if(this.plazaPreview)this.plazaPreview.applyGear(this.save.weapon,this.save.armor),this.plazaPreview.blocks={...this.save.blocks},this.plazaPreview.recalc(),(this.plazaPreview.slug!==t.slug||this.plazaPreview.look!==e)&&(this.plazaPreview.name=t.display,this.plazaPreview.applyLookSlug(t.slug,e));else{this.plazaPreview=new ls({team:sa.CYAN,isPlayer:!1,look:e,name:t.display,slug:t.slug,role:null,blocks:{...this.save.blocks},weapon:this.save.weapon,armor:this.save.armor}),this.plazaPreview.pos.set(0,0,1.35),this.plazaPreview.yaw=Math.PI*.92,this.plazaPreview.syncMesh(),this.plazaPreview.settle();for(const a of[...this.plazaPreview.group.children])a instanceof Ea&&a!==this.plazaPreview.portraitSprite&&(a.visible=!1);this.scene.add(this.plazaPreview.group)}n?(this.plazaPoseTarget.copy(this.hubPos),this.plazaYawTarget=this.hubYaw):(this.mode==="hub"||this.mode==="results")&&(this.plazaPoseTarget.set(0,0,1.35),this.plazaYawTarget=Math.PI*.92),this.plazaPreview.pos.distanceToSquared(this.plazaPoseTarget)>36&&(this.plazaPreview.pos.copy(this.plazaPoseTarget),this.plazaPreview.yaw=this.plazaYawTarget,this.plazaPreview.settle()),this.plazaPreview.group.visible=i}tickPlazaMannequinContinuity(t){const e=this.plazaPreview;if(!e||this.mode==="play")return;const i=this.mode==="hub"&&this.hub.room==="plaza"?18:3.8,a=1-Math.exp(-t*i),r=e.pos.clone();e.pos.lerp(this.plazaPoseTarget,a);let o=this.plazaYawTarget-e.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;e.yaw+=o*a,r.distanceToSquared(e.pos)>2.25&&e.settle()}isFfa(){return this.arenaMode==="ffa-quick"||this.arenaMode==="ffa-timed"}joinCap(){return this.isFfa()?1:Xg}packsOn(){return!this.isFfa()}byId(t){return this.fighters.find(e=>e.id===t)}frame(){const t=performance.now(),e=Math.min(.35,Math.max(0,(t-this.wallPrev)/1e3));this.wallPrev=t;const n=Math.min(.05,this.clock.getDelta()||e);if(this.input.poll(n),this.syncPadChrome(),this.input.justConnected&&this.say(`${this.input.padLabel} ready — LS move, RS look`),this.mode==="hub"){this.hubConfirmGrace>0&&(this.hubConfirmGrace=Math.max(0,this.hubConfirmGrace-e));const r=this.hub.handlePad(this.input);if(this.hub.room==="plaza"){r||this.tickHubWalk(n);const o=this.hubConfirmGrace>0;if(this.input.confirm&&!r&&!o){this.interactHubDoor(!0),this.input.endFrame();return}if(!r&&!o&&this.hubNear&&this.input.keys.has("KeyE")){this.interactHubDoor(!1),this.input.keys.delete("KeyE"),this.input.endFrame();return}if(o&&(this.input.confirm||this.input.keys.has("KeyE"))){this.input.keys.delete("KeyE"),this.input.endFrame();return}}if(this.syncPlazaHall(),this.syncPlazaPreview(),this.tickPlazaMannequinContinuity(Math.min(.05,e)),this.plazaPreview){const o=this.hub.laughing;this.plazaPreview.occupancy=o?"ticklee":"free",o?this.plazaPreview.stamina=this.plazaPreview.maxStamina*(1-this.hub.laughProgress):(this.plazaPreview.stamina=this.plazaPreview.maxStamina,this.hubLaughWas&&this.plazaPreview.softenIdleSheetEnter(.25)),this.hubLaughWas=o,this.plazaPreview.tickAnim(Math.min(.05,e)),this.plazaPreview.syncMesh()}this.scene.fog=new ri(1709588,32,80),this.hub.room==="plaza"?(this.aimHubWalkCamera(),this.plaza.updateDoorFx(this.clock.elapsedTime)):(this.plaza.setNear(null),this.aimPlazaCamera()),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug();return}if(this.mode==="results"){if(this.input.back||this.input.confirm){this.returnToPlaza("return");return}if(this.syncPlazaPreview(),this.tickPlazaMannequinContinuity(Math.min(.05,e)),this.plazaPreview){const o=this.hub.laughing;this.plazaPreview.occupancy=o?"ticklee":"free",o?this.plazaPreview.stamina=this.plazaPreview.maxStamina*(1-this.hub.laughProgress):(this.plazaPreview.stamina=this.plazaPreview.maxStamina,this.hubLaughWas&&this.plazaPreview.softenIdleSheetEnter(.25)),this.hubLaughWas=o,this.plazaPreview.tickAnim(Math.min(.05,e)),this.plazaPreview.syncMesh()}const r=this.clock.elapsedTime*.1;this.camera.position.set(Math.cos(r)*4,8,14),this.camera.lookAt(0,1.2,0),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug();return}const i=this.countdown<=0;if(this.countdown=Math.max(0,this.countdown-e),this.tickCountdownAudio(),this.countdown<=0&&(this.liveT+=e),(this.arenaMode==="team-timed"||this.arenaMode==="ffa-timed")&&i&&(this.timedLeft=Math.max(0,this.timedLeft-e)),this.countdown>0&&this.input.back){this.bailCountdown(),this.input.endFrame();return}!this.combatAnnounced&&this.countdown===0&&(this.combatAnnounced=!0,this.liftCountdownIgnore(),this.say(this.isFfa()?"Combat live — every other rim is a rival. Mid lane, get behind — tickle starts.":"Combat live — amber ring at their back. Walk in — tickle starts."));for(const[r,o]of[...this.pairCd.entries()]){const l=o-e;l<=0?this.pairCd.delete(r):this.pairCd.set(r,l)}this.applyLook();let a=e;for(;a>1e-4;){const r=Math.min(.05,a);this.tickNudge(r),this.tickPlayer(r);for(const o of this.fighters)o.isPlayer||FU(o,this.fighters,this.map,r,this.countdown,this.liveT,(l,c)=>this.startTickle(l,c),(l,c)=>this.tryJoin(l,c),l=>{l.wantTickle=!0},l=>{l.wantEscape=!0},performance.now());this.resolveTaps(),this.tickCombatState(r),a-=r}this.updateVisibility();for(const r of this.fighters){if((r.occupancy==="tickler"||r.occupancy==="nudge"&&r.joinOn>=0)&&r.joinOn>=0){const o=this.byId(r.joinOn);if(o&&o.maxStamina>0){const l=Math.max(0,Math.min(100,100-100*o.stamina/o.maxStamina))/100,c=l<.5?.5*Math.pow(l*2,7.15):1-.5*Math.pow((1-l)*2,7.15),h=(this.joinList.get(o.id)??[]).length,u=Math.min(1,Math.max(0,h-1)*.29);r.tickleIntensity=Math.min(100,(c+u)*100)}else r.tickleIntensity=0}else r.tickleIntensity=0;r.tickAnim(Math.min(.05,e)),r.syncMesh()}this.updateCamera(),this.updateHud(e),this.checkWin(),this.renderer.render(this.scene,this.camera),this.input.endFrame(),this.publishDebug()}liftCountdownIgnore(){for(const t of this.fighters)t.spawnIgnore=0,t.contactEdge.clear();for(let t=0;t<this.fighters.length;t++){const e=this.fighters[t];for(let n=t+1;n<this.fighters.length;n++){const i=this.fighters[n];Ke(e,i)&&(sn(e,i)||sn(i,e)||(e.contactEdge.set(i.id,!0),i.contactEdge.set(e.id,!0)))}}}publishDebug(){const t=this.player,e=this.fighters.find(i=>i.bait),n=!!e&&t&&cs(t,e,sn(t,e))&&sn(t,e);Object.assign(window,{__tb:()=>{var i,a,r;return{mode:this.mode,room:this.hub.room,hubPos:[+this.hubPos.x.toFixed(2),+this.hubPos.z.toFixed(2)],hubYaw:+this.hubYaw.toFixed(2),hubNear:this.hubNear,countdown:+this.countdown.toFixed(2),liveT:+this.liveT.toFixed(2),occ:t==null?void 0:t.occupancy,pos:t?[+t.pos.x.toFixed(2),+t.pos.z.toFixed(2)]:null,yaw:t?+t.yaw.toFixed(2):null,joinOn:t==null?void 0:t.joinOn,nudgeT:+this.nudgeT.toFixed(3),tickleHeld:this.input.tickleHeld,escapeHeld:this.input.escapeHeld,toast:this.toast,stam:t?+(100*(((i=this.byId(t.joinOn))==null?void 0:i.stamina)??t.stamina)/(((a=this.byId(t.joinOn))==null?void 0:a.maxStamina)??t.maxStamina)).toFixed(1):0,escape:(t==null?void 0:t.occupancy)==="ticklee"?+t.escape.toFixed(1):+(((r=this.byId((t==null?void 0:t.joinOn)??-1))==null?void 0:r.escape)??0).toFixed(1),vanishLeft:(t==null?void 0:t.vanishLeft)??0,reappearIgnore:t?+t.reappearIgnore.toFixed(2):0,spawnIgnore:t?+t.spawnIgnore.toFixed(2):0,rising:!!(e&&t&&this.risingBlocked(t,e)),pairCd:e&&t?+(this.pairCd.get(Li(t.id,e.id))??0).toFixed(2):0,reappearFlash:t?+t.reappearFlash.toFixed(2):0,vanishHud:(t==null?void 0:t.occupancy)==="vanished",bait:e?{name:e.name,occ:e.occupancy,pos:[+e.pos.x.toFixed(2),+e.pos.z.toFixed(2)],yaw:+e.yaw.toFixed(2),stam:+(100*e.stamina/e.maxStamina).toFixed(1),escape:+e.escape.toFixed(1),vanish:+e.vanishLeft.toFixed(1),reappearIgnore:+e.reappearIgnore.toFixed(2),reappearFlash:+e.reappearFlash.toFixed(2)}:null,rear:n,distBait:e&&t?+t.pos.distanceTo(e.pos).toFixed(2):null,coins:this.save.coins,look:this.save.look,weapon:this.save.weapon,armor:this.save.armor,ownedWeapons:this.save.ownedWeapons,ownedArmors:this.save.ownedArmors,padActive:this.input.padActive,padMove:[this.input.stickX,this.input.moveVec().x,this.input.moveVec().z],coinsEarned:this.coinsEarned,payouts:this.payouts,loadout:this.matchLoadout,lockedWeapon:this.matchWeapon,lockedArmor:this.matchArmor,hub:this.hub.debugPad(),result:this.result}},__tbLaugh:()=>{const i=a=>a?{name:a.name,occ:a.occupancy,stam:+(100*a.stamina/Math.max(1,a.maxStamina)).toFixed(1),frame:a.laughFrameIndex,fps:+a.laughFps.toFixed(2)}:null;return{preview:i(this.plazaPreview),ticklees:this.fighters.filter(a=>a.occupancy==="ticklee").map(i),bills:this.fighters.map(a=>({name:a.name,occ:a.occupancy,clip:a.locomotionClip(),w:a.portraitSprite?+a.portraitSprite.scale.x.toFixed(2):null,h:a.portraitSprite?+a.portraitSprite.scale.y.toFixed(2):null,x:a.portraitSprite?+a.portraitSprite.position.x.toFixed(2):null,y:a.portraitSprite?+a.portraitSprite.position.y.toFixed(2):null}))}},__tbLaughStam:i=>{for(const a of this.fighters)!a.isPlayer&&a.occupancy==="ticklee"&&(a.stamina=a.maxStamina*Math.max(0,Math.min(100,i))/100)},__tbHold:i=>{for(const a of i)this.input.keys.add(a);(i.includes("KeyT")||i.includes("Space"))&&(this.input.tickle=!0,this.input.tickleHeld=!0),i.includes("KeyE")&&(this.input.escape=!0,this.input.escapeHeld=!0),i.includes("KeyQ")&&(this.input.releaseHeld=!0)},__tbRelease:()=>{this.input.keys.clear(),this.input.tickleHeld=!1,this.input.escapeHeld=!1},__tbFaceLane:()=>{this.player&&(this.player.yaw=-Math.PI/2,this.player.pitch=0)},__tbForceResults:()=>{if(this.mode==="play"){for(const i of this.fighters)!i.isPlayer&&i.team!==this.player.team&&(i.occupancy="tapped");this.checkWin()}},__tbParkBehindBait:()=>{if(this.mode!=="play")return;const i=this.fighters.find(o=>o.bait&&_e(o)&&o.occupancy!=="vanished"),a=this.player;if(!i||!a)return;(this.map.inSpawnPocket(i.pos,i.team)||this.map.inSpawnPocket(i.pos,1-i.team))&&(this.place(i,new R(po,0,mo)),i.yaw=-Math.PI/2);const r=i.pos.clone().add(i.forward().multiplyScalar(-1.25));this.place(a,r),a.yaw=i.yaw,a.pitch=0,i.scriptHold=!0},__tbStartOnPlayer:()=>{if(this.mode!=="play"||this.countdown>0)return;const i=this.player;this.nudgeIds.includes(i.id)&&(this.nudgeT=0,this.nudgeIds=[]),(i.occupancy==="tickler"||i.occupancy==="nudge")&&this.release(i),i.occupancy==="nudge"&&(i.occupancy="free",i.joinOn=-1,i.targetId=-1);const a=this.fighters.find(l=>!l.isPlayer&&l.team!==i.team&&l.occupancy==="free"&&_e(l));if(!a||i.occupancy!=="free"&&i.occupancy!=="ticklee"||i.occupancy==="ticklee")return;const r=new R(0,0,0);this.place(i,r),i.yaw=-Math.PI/2,i.pitch=0;const o=i.pos.clone().add(i.forward().multiplyScalar(-1.15));this.place(a,o),a.yaw=i.yaw,a.scriptHold=!0,i.contactEdge.delete(a.id),a.contactEdge.delete(i.id),this.pairCd.delete(Li(a.id,i.id)),this.startTickle(a,i)},__tbEndVanish:()=>{for(const i of this.fighters)i.occupancy==="vanished"&&(i.vanishLeft=.04)},__tbParkAway:()=>{if(this.mode!=="play")return;const i=this.player;if(i){this.place(i,this.map.spawnA.clone()),i.yaw=-Math.PI/2,i.pitch=0,i.contactEdge.clear();for(const a of this.fighters)a.contactEdge.delete(i.id)}},__tbForceWallCancel:()=>{if(this.mode!=="play"||this.countdown>0)return;const i=this.player,a=this.fighters.find(o=>o.bait&&_e(o)&&o.occupancy!=="vanished");if(!i||!a)return;i.occupancy==="tickler"&&this.release(i),(this.nudgeIds.includes(i.id)||this.nudgeIds.includes(a.id))&&(this.nudgeT=0,this.nudgeIds=[]),i.occupancy="free",i.joinOn=-1,a.occupancy="free",a.joinOn=-1,a.scriptHold=!0,this.place(a,this.map.spawnA.clone()),a.yaw=-Math.PI/2;const r=a.pos.clone().add(a.forward().multiplyScalar(-1.25));this.place(i,r),i.yaw=a.yaw,i.pitch=0,i.contactEdge.delete(a.id),a.contactEdge.delete(i.id),this.pairCd.delete(Li(i.id,a.id)),this.startTickle(i,a)},__tbBenchBots:()=>{if(this.mode==="play"){this.nudgeT=0,this.nudgeIds=[];for(const i of this.fighters)if(!(i.isPlayer||i.bait)){if(i.occupancy==="tickler"&&this.release(i),i.occupancy==="ticklee"){const a=this.joinList.get(i.id)??[];for(const r of a){const o=this.byId(r);o&&(o.occupancy="free",o.joinOn=-1,o.targetId=-1)}this.joinList.delete(i.id),i.occupancy="free",i.joinOn=-1,i.targetId=-1}if(i.occupancy==="nudge"||i.occupancy==="free"){i.occupancy="free",i.joinOn=-1,i.targetId=-1;const a=(i.team===0?this.map.spawnA:this.map.spawnB).clone();this.place(i,a)}}}},__tbConnectPad:()=>Bh(),__tbPad:i=>UU(i),__tbDisconnectPad:()=>DU()})}applyLook(){const t=this.player,e=this.input.consumeLook();t.occupancy==="ticklee"?this.lookPitch=cn.clamp(this.lookPitch+e.y,-.9,.6):t.occupancy!=="tapped"&&t.occupancy!=="spectate"&&(t.yaw-=e.x,t.pitch=cn.clamp(t.pitch-e.y,-1.2,1.1))}tickPlayer(t){const e=this.player;if(!(e.occupancy==="tickler"||e.occupancy==="ticklee"||e.occupancy==="nudge"||e.occupancy==="tapped")&&e.occupancy!=="spectate"){const i=this.input.moveVec(),a=e.occupancy==="vanished"?Ni*1.05:Ni,r=-Math.sin(e.yaw),o=-Math.cos(e.yaw),l=Math.cos(e.yaw),c=-Math.sin(e.yaw),h=(r*i.z+l*i.x)*a*t,u=(o*i.z+c*i.x)*a*t,d=this.map.resolve(e.pos.x+h,e.pos.z+u,e.pos.y);let p=d.x,g=d.z;if(this.countdown>0){const _=this.map.clampSpawnPocket(p,g,e.team);p=_.x,g=_.z}e.pos.x=p,e.pos.z=g,e.pos.y=this.map.groundY(e.pos.x,e.pos.z)}this.inNudgePile(e.id)||e.occupancy==="nudge"||(e.occupancy==="free"&&this.autoStartTickle(e),e.occupancy==="tickler"&&(this.input.tickle||this.input.tickleHeld)&&(e.wantTickle=!0),e.occupancy==="ticklee"&&(this.input.escape||this.input.escapeHeld)&&(e.wantEscape=!0),e.occupancy==="tickler"&&this.input.releaseHeld&&this.release(e))}resolveTaps(){for(const t of this.fighters)t.wantEscape&&this.tapEscape(t),t.wantEscape=!1;for(const t of this.fighters)t.wantTickle&&this.tapTickle(t),t.wantTickle=!1}inNudgePile(t){return this.nudgeT>0&&this.nudgeIds.includes(t)}autoStartTickle(t){if(this.countdown>0||this.inNudgePile(t.id)||t.occupancy!=="free")return;let e=null,n=1e9;for(const r of this.fighters){if(!this.canAutoTickle(t,r))continue;const o=t.pos.distanceTo(r.pos);o<n&&(n=o,e=r)}const a=this.fighters.find(r=>r.bait&&this.canAutoTickle(t,r))??e;a&&(a.occupancy==="ticklee"?this.tryJoin(t,a,!0):this.startTickle(t,a,!0))}canAutoTickle(t,e){if(this.startLocked(t,e)||this.risingBlocked(t,e)||t.team===e.team||!_e(e)||e.occupancy==="vanished")return!1;const n=sn(t,e),i=this.packsOn()&&hs(this.fighters,t,e);return!n&&!i?!1:i&&(Ke(t,e)||cs(t,e,!1))?!0:cs(t,e,n)}startLocked(t,e){return!!(this.countdown>0||this.inNudgePile(t.id)||this.inNudgePile(e.id)||t.spawnIgnore>0||e.spawnIgnore>0||t.reappearIgnore>0||e.reappearIgnore>0||this.pairCd.has(Li(t.id,e.id)))}tickNudge(t){if(this.nudgeIds.length===0){this.nudgeT=0;return}if(this.nudgeT>0){const e=dc,n=1-this.nudgeT/e,i=this.nudgeFrom.clone().lerp(this.nudgeTo,Math.min(1,n)),a=this.byId(this.nudgeIds[0]);if(a){const r=i.clone().sub(a.pos);r.y=0;for(const o of this.nudgeIds){const l=this.byId(o);l&&(l.pos.x+=r.x,l.pos.z+=r.z,l.pos.y=this.map.groundY(l.pos.x,l.pos.z),l.occupancy="nudge")}}this.nudgeT=Math.max(0,this.nudgeT-t)}this.nudgeT<=0&&this.finishNudge()}finishNudge(){const t=this.byId(this.nudgeIds[0]);if(!t)return;t.occupancy="ticklee";const e=this.joinList.get(t.id)??[];for(const n of e){const i=this.byId(n);i&&(i.occupancy="tickler",i.joinOn=t.id,i.targetId=t.id)}this.attachSockets(t),this.nudgeIds=[],this.nudgeT=0}startTickle(t,e,n=!1){if(this.startLocked(t,e)||t.team===e.team||!_e(t)||t.occupancy==="vanished"||t.occupancy==="ticklee"||e.occupancy==="vanished"||e.occupancy==="tapped"||this.pairCd.has(Li(t.id,e.id)))return!1;const i=sn(t,e),a=this.packsOn()&&hs(this.fighters,t,e);if(!cs(t,e,i)&&!(a&&Ke(t,e))||this.risingBlocked(t,e))return!1;if(e.occupancy==="ticklee")return this.tryJoin(t,e,n);if(e.occupancy==="tickler"){if(e.isPlayer){const o=this.byId(e.joinOn);return o&&o.occupancy==="ticklee"&&t.team!==o.team?this.tryJoin(t,o,n):!1}return this.peel(t,e),!0}if(!a&&!i)return!1;const r=this.map.findNudge(e.pos,.95);return r?(this.beginDuel(e,t,r),!0):(this.pairCd.set(Li(t.id,e.id),jg),t.isPlayer&&this.say("No clear space — tickle cancelled"),oa(90,.1,"sawtooth",.04),!1)}risingBlocked(t,e){return e.occupancy!=="free"?!1:!!(t.contactEdge.get(e.id)&&Ke(t,e))}beginDuel(t,e,n){this.joinList.set(t.id,[e.id]),this.firstTickler.set(t.id,e.id),e.targetId=t.id,e.joinOn=t.id;const i=[t,e];this.nudgeFrom.copy(t.pos),this.nudgeTo.copy(n),this.nudgeIds=i.map(a=>a.id),this.nudgeT=n.distanceTo(t.pos)<.08?.01:dc;for(const a of i)a.occupancy="nudge";t.escape=Math.min(t.escape,0),t.flashT=0,this.nudgeT<=.02&&this.finishNudge(),$U(),this.say(`${e.name} tickles ${t.name}`),e.isPlayer&&this.input.rumble(90,.45,.25)}tryJoin(t,e,n=!1){if(this.startLocked(t,e)||e.occupancy!=="ticklee"||t.team===e.team)return!1;const i=this.joinList.get(e.id)??[];if(i.includes(t.id))return!0;if(i.length>=this.joinCap())return t.isPlayer&&!n&&this.say(this.isFfa()?"FFA — no packs, hunt another rival":"Join cap 6 — pile is full"),!1;const a=t.isPlayer?va:0;if(!Ke(t,e)&&t.pos.distanceTo(e.pos)>Fi+a)return!1;const r=this.packsOn()&&i.length>=1;if(i.length===0){if(!sn(t,e)&&!r)return!1}else if(!r&&!sn(t,e))return!1;const o=this.socketWorld(e,i.length);if(this.map.blockedAt(o.x,o.z,o.y,.55)){const l=this.map.findNudge(o,.55);if(!l)return!1;t.pos.copy(l)}else t.pos.copy(o);return i.push(t.id),this.joinList.set(e.id,i),t.occupancy="tickler",t.joinOn=e.id,t.targetId=e.id,t.isPlayer||(t.pileTimer=t.role==="sticky"?mc:pc),this.attachSockets(e),oa(280,.06),!0}peel(t,e){const n=e.joinOn,i=this.byId(n);i&&this.dropTickler(i,e),(e.occupancy==="tickler"||e.occupancy==="free"||e.occupancy==="nudge")&&(e.occupancy="free"),this.startTickle(t,e)}dropTickler(t,e){const n=(this.joinList.get(t.id)??[]).filter(i=>i!==e.id);this.joinList.set(t.id,n),e.occupancy="free",e.joinOn=-1,e.targetId=-1,e.isPlayer||(e.pileTimer=Math.max(e.pileTimer,e.role==="sticky"?mc:pc)),n.length===0?(t.occupancy="free",this.joinList.delete(t.id)):this.attachSockets(t)}release(t){if(t.occupancy!=="tickler")return;const e=this.byId(t.joinOn);e&&this.dropTickler(e,t)}socketWorld(t,e){const n=[[0,.2,.85],[.75,.15,.15],[.6,.35,.2],[.2,-.55,.7],[0,.55,-.55],[.5,-.35,.25]][Math.min(e,5)],i=t.forward(),a=new R(i.z,0,-i.x);return t.pos.clone().add(i.multiplyScalar(n[2])).add(a.multiplyScalar(n[0])).add(new R(0,n[1],0))}attachSockets(t){(this.joinList.get(t.id)??[]).forEach((n,i)=>{const a=this.byId(n);if(!a)return;const r=this.socketWorld(t,i);a.pos.x=r.x,a.pos.z=r.z,a.pos.y=this.map.groundY(r.x,r.z);const o=t.pos.clone().sub(a.pos);a.yaw=Math.atan2(-o.x,-o.z)})}tapTickle(t){if(this.inNudgePile(t.id)||t.occupancy==="nudge"||t.occupancy!=="tickler"||t.tapCd>0)return;const e=this.byId(t.joinOn);if(!e||e.occupancy!=="ticklee")return;t.tapCd=uc;const a=(this.joinList.get(e.id)??[]).indexOf(t.id)===0?1:.5,r=t.ticklePower()*a;e.stamina=Math.max(0,e.stamina-r),e.regenWait=Kg,GU(),e.stamina<=0&&this.tapOut(e)}tapEscape(t){this.inNudgePile(t.id)||t.occupancy==="nudge"||t.occupancy==="ticklee"&&(t.tapCd>0||(t.tapCd=uc,t.escape=Math.min(100,t.escape+t.escapePower()),WU(),t.escape>=100&&this.vanish(t)))}vanish(t){const e=this.joinList.get(t.id)??[];for(const n of e){const i=this.byId(n);i&&(i.occupancy="free",i.joinOn=-1,i.targetId=-1)}this.joinList.delete(t.id),this.nudgeT=0,this.nudgeIds=[],t.occupancy="vanished",t.escape=0,t.vanishLeft=Vg,t.group.visible=!1;for(const[n]of[...this.pairCd.entries()])(n.startsWith(`${t.id}:`)||n.endsWith(`:${t.id}`))&&this.pairCd.delete(n);XU(),this.firstTickler.delete(t.id),t.isPlayer&&this.say("Vanished — map only, 20s"),this.checkWin()}tapOut(t){const e=this.joinList.get(t.id)??[],n=this.firstTickler.get(t.id)??e[0],i=n!=null?this.byId(n):void 0;if(i&&i.occupancy!=="tapped"&&i.occupancy!=="spectate"&&(this.award(i,3,"opener",t.name),!this.isFfa()))for(const a of e){if(a===i.id)continue;const r=this.byId(a);r&&this.award(r,1,"assist",t.name)}this.firstTickler.delete(t.id);for(const a of e){const r=this.byId(a);r&&(r.occupancy="free",r.joinOn=-1)}if(this.joinList.delete(t.id),this.arenaMode==="team-timed"){i&&i.team!==t.team&&(this.tapScore[i.team]+=1),_r(),this.say(`${t.name} tapped out`),this.respawn(t);return}if(this.arenaMode==="ffa-timed"){i&&this.ffaScore.set(i.id,(this.ffaScore.get(i.id)??0)+1),_r(),this.say(`${t.name} tapped out`),this.respawn(t);return}t.occupancy=t.isPlayer?"spectate":"tapped",t.stamina=0,t.group.visible=!0,t.body.rotation.x=.2,_r(),this.say(`${t.name} tapped out`),this.checkWin()}respawn(t){if(t.occupancy="free",t.joinOn=-1,t.targetId=-1,t.escape=0,t.vanishLeft=0,t.reappearIgnore=0,t.reappearFlash=0,t.stamina=t.maxStamina,t.spawnIgnore=Wg,t.body.rotation.x=0,t.group.visible=!0,this.isFfa()){let e=this.map.soloPads[t.team]??this.map.soloPads[0],n=e,i=-1;for(const a of this.map.soloPads){let r=1e9;for(const o of this.fighters)o.id!==t.id&&(r=Math.min(r,o.pos.distanceTo(a)));r>i&&(i=r,n=a)}e=n,this.place(t,e.clone()),t.yaw=wr(e,new R)}else{const e=(t.team===0?this.map.spawnA:this.map.spawnB).clone();e.x+=(Math.random()-.5)*1.6,e.z+=(Math.random()-.5)*1.6,this.place(t,e),t.yaw=t.team===0?-Math.PI/2:Math.PI/2}t.isPlayer&&(t.body.visible=!1)}award(t,e,n="opener",i=""){t.isPlayer&&(this.coinsEarned+=e,this.payouts.push({role:n,coins:e,victim:i}))}commitMatchRewards(){if(this.matchRewardsCommitted)return!1;this.matchRewardsCommitted=!0,this.save.coins+=this.coinsEarned;const t=Math.max(15,this.coinsEarned*8+(this.result==="Victory"?40:10));this.save.xp=(this.save.xp??0)+t;let e=!1;for(;this.save.level<10;){const n=100+20*(this.save.level-1);if(this.save.xp<n)break;this.save.xp-=n,this.save.level+=1,this.save.unspent+=1,e=!0}return this.save.level>=10&&(this.save.xp=0),this.persistSave(),e}tickCombatState(t){for(const e of this.fighters){if(e.tapCd=Math.max(0,e.tapCd-t),this.countdown<=0){e.spawnIgnore=Math.max(0,e.spawnIgnore-t);const n=e.reappearIgnore>0;if(e.reappearIgnore=Math.max(0,e.reappearIgnore-t),n)for(const i of this.fighters)i.id!==e.id&&Ke(e,i)&&(e.contactEdge.set(i.id,!0),i.contactEdge.set(e.id,!0))}if(e.occupancy==="ticklee"){e.flashT+=t;const n=e.flashT%qg<.18;e.rim.color.set(n?12868728:e.team===0?6211800:13935194),e.rim.intensity=n?5:2.2}else e.occupancy!=="vanished"&&(e.rim.color.set(e.team===0?6211800:13935194),e.rim.intensity=2.2);if(e.reappearFlash>0&&(e.reappearFlash=Math.max(0,e.reappearFlash-t),e.rim.color.set(16777215),e.rim.intensity=32),e.occupancy==="vanished"){if(e.vanishLeft=Math.max(0,e.vanishLeft-t),e.vanishLeft<=0){e.occupancy="free",e.group.visible=!0,e.reappearIgnore=Jg,e.reappearFlash=Qg,(e.isPlayer||this.player.pos.distanceTo(e.pos)<Zg)&&(jU(),this.say(e.isPlayer?"You reappeared":`${e.name} reappeared`));for(const i of this.fighters)i.id!==e.id&&Ke(i,e)&&(i.contactEdge.set(e.id,!0),e.contactEdge.set(i.id,!0))}}else e.occupancy==="free"&&(e.regenWait=Math.max(0,e.regenWait-t),e.regenWait<=0&&(e.stamina=Math.min(e.maxStamina,e.stamina+Yg*t)));for(const[n,i]of[...e.contactEdge.entries()]){if(this.countdown>0){e.contactEdge.delete(n);continue}if(!i){e.contactEdge.delete(n);continue}const a=this.byId(n);(!a||!Ke(e,a))&&e.contactEdge.delete(n)}}}updateVisibility(){const t=this.player,e=t.occupancy==="vanished";for(const n of this.fighters){if(n.occupancy==="vanished"){n.group.visible=!1;continue}if(e&&n.id!==t.id){n.group.visible=!1;continue}n.group.visible=!0,n.isPlayer?n.body.visible=t.occupancy==="ticklee"||t.occupancy==="tapped":n.portraitSprite&&(n.body.visible=!1)}}updateCamera(){const t=this.player,e=innerWidth/innerHeight;if(this.camera.aspect=e,this.camera.updateProjectionMatrix(),t.occupancy==="spectate"||t.occupancy==="tapped"){const i=this.fighters.find(a=>a.team===t.team&&_e(a)&&!a.isPlayer)??this.fighters.find(a=>_e(a));if(i){const a=i.forward().multiplyScalar(-4);this.camera.position.copy(i.pos).add(a).add(new R(0,2.2,0)),this.camera.lookAt(i.pos.clone().add(new R(0,1.1,0)))}return}if(t.occupancy==="ticklee"){const n=t.forward(),i=n.clone().multiplyScalar(-2.4);this.camera.position.copy(t.pos).add(i).add(new R(0,1.7,0));const a=t.pos.clone().add(new R(0,1.05-this.lookPitch*.8,0)).add(n.multiplyScalar(.3));this.camera.lookAt(a);return}this.camera.position.copy(t.pos).add(new R(0,Ah,0)),this.camera.rotation.order="YXZ",this.camera.rotation.y=t.yaw,this.camera.rotation.x=t.pitch}updateFpTickle(t){const e=this.player,n=this.mode==="play"&&(e.occupancy==="tickler"||e.occupancy==="nudge"),i=this.hudEls["tickle-flash"];if(i&&i.classList.toggle("on",n),!this.fpArms)return;const a=n&&e.occupancy!=="spectate"&&e.occupancy!=="tapped"&&e.occupancy!=="ticklee";if(this.fpArms.visible=!!a,!a)return;this.fpArmT+=t;const r=Ih(e.slug),o=r.rate,l=r.twistRate,c=r.shoulderAmp,h=r.elbowAmp,u=r.weaponWag,d=Math.sin(this.fpArmT*o),p=Math.sin(this.fpArmT*l),g=this.fpArms.getObjectByName("fp-left"),_=this.fpArms.getObjectByName("fp-right");g&&(g.rotation.x=-.35+d*c,g.rotation.z=.25+p*(h*.28),g.position.y=-.28+Math.abs(d)*.04),_&&(_.rotation.x=-.28-d*(c*.9),_.rotation.z=-.22-p*(h*.24),_.position.y=-.3+Math.abs(p)*.035);const m=this.fpArms.getObjectByName("fp-weapon");m&&(m.rotation.z=d*u*.7,m.position.y=-.02+p*.02)}updateHud(t=.016){const e=this.player;this.updateFpTickle(t);const n=this.hudEls["stamina-fill"],i=this.hudEls["escape-fill"],r=(e.occupancy==="tickler"?this.byId(e.joinOn):(e.occupancy==="ticklee",e))??e;n.style.width=`${100*r.stamina/r.maxStamina}%`,i.style.width=`${r.escape}%`;const o=e.locomotionClip();if(this.hudEls["meta-left"].textContent=e.occupancy==="vanished"?`VANISH ${r.vanishLeft.toFixed(1)}s — map only`:`${r.name}  ·  ${r.occupancy}  ·  ${o}  ·  ${this.matchLoadout}`,this.hudEls["player-portrait"]){const E=this.hudEls["player-portrait"];E.dataset.clip=o,E.classList.toggle("running",o==="run"),E.classList.toggle("walking",o==="walk"),E.classList.toggle("tickling",e.occupancy==="tickler"||e.occupancy==="nudge"&&e.joinOn>=0)}this.hudEls["top-left"].textContent=this.countdown>0?"Spawn lock — bots parked · tickle at 0 · mid-lane amber waits":this.arenaMode==="team-timed"?`Team Timed  ·  ${Fc(this.timedLeft)}`:this.arenaMode==="ffa-timed"?`FFA Timed  ·  ${Fc(this.timedLeft)}`:this.arenaMode==="ffa-quick"?"FFA Quick  ·  one life":"Team Quick  ·  one life";const l=this.aliveCount(),c=this.fighters.filter(E=>_e(E)).length,h=this.ffaScore.get(e.id)??0;this.hudEls["meta-right"].textContent=this.arenaMode==="team-timed"?`TAPS CYAN ${this.tapScore[0]}  ·  AMBER ${this.tapScore[1]}  ·  coins +${this.coinsEarned}`:this.arenaMode==="ffa-timed"?`YOUR TAPS ${h}  ·  ${c} up  ·  coins +${this.coinsEarned}`:this.isFfa()?`${c} standing  ·  coins +${this.coinsEarned}`:`CYAN ${l[0]}  ·  AMBER ${l[1]}  ·  coins +${this.coinsEarned}`;let u="";if(e.occupancy==="free")for(const E of this.fighters){if(E.team===e.team||!_e(E)||E.occupancy==="vanished")continue;const y=sn(e,E);if(!cs(e,E,y)&&e.pos.distanceTo(E.pos)>Fi+va)continue;const U=Math.max(e.reappearIgnore,E.reappearIgnore),T=Math.max(e.spawnIgnore,E.spawnIgnore);if(U>0){u=`REAPPEAR LOCK  ·  ${U.toFixed(1)}s`;break}if(T>0){u=`SPAWN IGNORE  ·  ${T.toFixed(1)}s`;break}if(this.startLocked(e,E)||this.risingBlocked(e,E)){u="BREAK CONTACT — then rear/pack starts";break}if(this.packsOn()&&hs(this.fighters,e,E)){u=this.countdown>0?"PACK 2+ — tickle at 0":"PACK 2+ — tickle starts";break}if(y){u=this.countdown>0?"BEHIND — tickle at 0":"BEHIND — tickle starts";break}}this.hudEls["top-right"].textContent=this.countdown>0?u?`SPAWN LOCK  ·  ${u}`:this.input.padActive?"SPAWN LOCK  ·  B / View to leave":"SPAWN LOCK  ·  Leave countdown":e.occupancy==="vanished"?"VANISH — map only · clock is yours":e.occupancy==="ticklee"?this.input.padActive?"TAP B / LT  ESCAPE":"TAP ESCAPE":e.occupancy==="tickler"?this.input.padActive?"TAP A / RT  TICKLE":"TAP TICKLE":u||(this.input.padActive?"FP  ·  behind auto-tickle  A tickle  B escape  Y release":"FP  ·  behind auto-tickle  T tickle  E escape"),this.updateRadar(),this.updateRearCue();const d=e.occupancy==="vanished";this.hudEls.countdown.classList.toggle("vanish-clock",d),d?(this.hudEls.countdown.style.display="block",this.hudEls.countdown.textContent=String(Math.ceil(e.vanishLeft))):(this.hudEls.countdown.style.display=this.countdown>0?"block":"none",this.hudEls.countdown.textContent=this.countdown>0?String(Math.ceil(this.countdown)):""),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display=this.countdown>0?"block":"none");const p=this.hudEls.face,g=this.hudEls["face-still"],_=e.occupancy==="ticklee"||e.occupancy==="tickler"&&r.occupancy==="ticklee";if(p.style.display=_?"block":"none",g){const E=r.keyedPortrait||r.portraitUrl;if(_&&E){g.src=E,g.style.display="block";const y=p.querySelector(".head");y&&(y.style.display="none")}else{g.style.display="none";const y=p.querySelector(".head");y&&(y.style.display="block")}}const m=this.hudEls["btn-tickle"],f=this.hudEls["btn-escape"];m.disabled=e.occupancy!=="tickler",f.disabled=e.occupancy!=="ticklee";const M=this.input.padActive;if(m.textContent=M?"Tickle  A":"Tickle",f.textContent=M?"Escape  B":"Escape",this.hudEls["player-portrait"]){const E=e.occupancy==="tickler"||e.occupancy==="nudge"&&e.joinOn>=0,y=e.occupancy==="ticklee",U=e.locomotionClip(),T=E&&e.tickleFramePortrait||y&&e.laughFramePortrait||(U==="run"||U==="walk")&&e.runFramePortrait||e.keyedPortrait||e.portraitUrl,S=this.hudEls["player-portrait"];T?(S.src=T,S.style.display="block"):S.style.display="none",S.classList.toggle("tickling",!!E)}this.hudEls.crosshair&&(this.hudEls.crosshair.style.display=e.occupancy==="ticklee"||e.occupancy==="spectate"||e.occupancy==="tapped"?"none":"block"),this.toastT-=t||.016,this.hudEls.toast.style.display=this.toastT>0?"block":"none",this.hudEls.toast.textContent=this.toast}updateRearCue(){const t=this.player;if(this.mode!=="play"||t.occupancy!=="free"||!this.map.group.visible){this.rearCue.visible=!1;return}const e=Fi+va;let n=null,i=!1,a=null,r=5.2;for(const h of this.fighters){if(h.team===t.team||!_e(h)||h.occupancy==="vanished")continue;const u=t.pos.distanceTo(h.pos);if(u<r&&(r=u,a=h),!(u>e)){if(this.packsOn()&&hs(this.fighters,t,h)){n=h,i=!0;break}sn(t,h)&&(n=h)}}const o=n??a;if(!o){this.rearCue.visible=!1;return}const l=i?o.pos:o.pos.clone().add(o.forward().multiplyScalar(-.82));this.rearCue.position.set(l.x,o.pos.y+.05,l.z);const c=this.rearCue.material;c.color.set(i?6211800:this.isFfa()?12868728:13935194),c.opacity=n?this.countdown>0?.7:.92:.45,this.rearCue.visible=!0}updateRadar(){const t=this.hudEls.radar;if(!t)return;const e=this.player;if(e.occupancy==="ticklee"||e.occupancy==="spectate"||e.occupancy==="tapped"||e.occupancy==="vanished"){t.style.display="none";return}t.style.display="flex";let n=null,i=1e9;const a=this.fighters.find(u=>u.bait&&_e(u)&&u.occupancy!=="vanished");for(const u of this.fighters){if(u.team===e.team||!_e(u)||u.occupancy==="vanished")continue;const d=e.pos.distanceToSquared(u.pos);d<i&&(i=d,n=u)}a&&e.pos.distanceTo(a.pos)<18&&(n=a,i=e.pos.distanceToSquared(a.pos));const r=this.overlay.querySelector("#radar-copy"),o=t.querySelector(".needle");if(!n){r&&(r.textContent=this.isFfa()?"No rival up":"No amber up");return}const l=Math.sqrt(i),c=n.pos.clone().sub(e.pos),h=Math.atan2(-c.x,-c.z)-e.yaw;if(o&&(o.style.transform=`rotate(${h*180/Math.PI}deg)`),r){const u=this.isFfa()?"rival":"amber";r.textContent=l<1.4?this.packsOn()&&hs(this.fighters,e,n)?`${n.name}  ·  pack 2+ · tickle starts`:`${n.name}  ·  behind · tickle starts`:n.bait?`${n.name}  ·  mid-lane bait  ·  ${l.toFixed(0)}m amber`:`${n.name}  ·  ${l.toFixed(0)}m ${u}`}}aliveCount(){const t=this.fighters.filter(n=>n.team===0&&_e(n)).length,e=this.fighters.filter(n=>n.team===1&&_e(n)).length;return[t,e]}checkWin(){var r,o,l;if(this.mode!=="play")return;let t="",e=!1,n="";if(this.arenaMode==="team-timed"){if(this.timedLeft>0)return;const[c,h]=this.tapScore;c===h?(t="DRAW",e=!1,n=`Timer ended even at ${c}–${h} tap-outs.`):c>h?(t="CYAN",e=this.player.team===0,n=`CYAN ${c} tap-outs to AMBER ${h}.`):(t="AMBER",e=this.player.team===1,n=`AMBER ${h} tap-outs to CYAN ${c}.`)}else if(this.arenaMode==="ffa-timed"){if(this.timedLeft>0)return;let c=0;for(const d of this.fighters)c=Math.max(c,this.ffaScore.get(d.id)??0);const h=this.fighters.filter(d=>(this.ffaScore.get(d.id)??0)===c),u=this.ffaScore.get(this.player.id)??0;c===0||h.length!==1?(t="DRAW",e=!1,n=`FFA timer ended. Top taps ${c}. Yours ${u}.`):(e=h[0].isPlayer,t=e?"ELARA":h[0].name,n=`FFA Timed · ${t} leads with ${c} taps · you ${u}.`)}else if(this.isFfa()){const c=this.fighters.filter(h=>_e(h));if(c.length>1)return;e=!!((r=c[0])!=null&&r.isPlayer),t=e?"ELARA":((o=c[0])==null?void 0:o.name)??"RIVAL",n=`${t} last standing. FFA Quick.`}else{const[c,h]=this.aliveCount();if(c>0&&h>0)return;t=c>0?"CYAN":"AMBER",e=this.player.team===0&&c>0||this.player.team===1&&h>0,n=`${t} still has fighters up. Last team standing.`}for(const c of this.fighters)c.occupancy==="vanished"&&(c.occupancy="free",c.vanishLeft=0);this.mode="results",this.map.group.visible=!1,this.plaza.group.visible=!0,this.scene.fog=new ri(1709588,32,80),this.result=t==="DRAW"?"Draw":e?"Victory":"Defeat",this.hudEls.top&&(this.hudEls.top.style.display="none"),this.hudEls.crosshair&&(this.hudEls.crosshair.style.display="none"),this.hudEls.radar&&(this.hudEls.radar.style.display="none"),this.hudEls["btn-leave"]&&(this.hudEls["btn-leave"].style.display="none"),this.rearCue.visible=!1;const i=this.commitMatchRewards();this.clearFighters(),this.result==="Draw"?oa(220,.15):e?qU():KU(),this.hudEls.results.style.display="flex",this.hudEls.hud.style.display="none";const a=this.overlay.querySelector("#result-copy");if(a){const c=this.save.level<10?100+20*(this.save.level-1):0,h=i?`Level ${this.save.level}  ·  +1 skill point (${this.save.unspent} unspent)  ·  XP ${this.save.xp}/${c||"—"}`:this.save.level>=10?`Level 10 cap  ·  ${this.save.unspent} unspent`:`Level ${this.save.level}  ·  XP ${this.save.xp}/${c}  ·  ${this.save.unspent} unspent`;a.innerHTML=`<h1>${this.result}</h1>
        <p class="sub">${n}</p>
        <ul class="payouts">${this.payoutItems()}</ul>
        <p class="statline">${h}</p>
        <p class="hint">Match loadout locked as ${this.matchLoadout}. Spend new points in Home. Return writes you back to the plaza.</p>`}(l=document.exitPointerLock)==null||l.call(document)}payoutItems(){if(this.payouts.length===0)return`<li>0 coins this match. Bank ${this.save.coins}.</li><li>First tickler +3 from the tick-start opener. Team assists +1.</li>`;const t=this.payouts.map(e=>e.role==="opener"?`<li>+${e.coins} first tickler vs ${e.victim}</li>`:`<li>+${e.coins} assist vs ${e.victim}</li>`);return t.push(`<li>Bank ${this.save.coins} coins.</li>`),t.join("")}payoutLines(){return this.payouts.length===0?`0 coins this match. Bank ${this.save.coins}. First tickler +3, assists +1 (team).`:`${this.payouts.map(e=>e.role==="opener"?`+${e.coins} first tickler vs ${e.victim}`:`+${e.coins} assist vs ${e.victim}`).join(" · ")}. Bank ${this.save.coins}.`}syncPadChrome(){this.overlay.classList.toggle("pad-live",this.input.padActive);const t=this.hudEls["pad-status"];t&&(t.textContent=this.input.padActive?`${this.input.padLabel} connected — A or Menu to play`:"Xbox first: connect a controller and press any button.",t.classList.toggle("on",this.input.padActive));const e=this.hudEls["again-hint"];e&&(e.textContent=this.input.padActive?"B, A, or Menu — return to plaza":"Click Return, or press B / Menu on a pad."),this.mode!=="play"&&this.hudEls.toast&&(this.toastT>0&&(this.toastT-=.016),this.hudEls.toast.style.display=this.toastT>0?"block":"none",this.hudEls.toast.textContent=this.toast)}say(t){this.toast=t,this.toastT=2.2}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}}function Ic(){try{const s=localStorage.getItem($h),t=gc(s?JSON.parse(s):null);return So(t),t}catch{const s=gc(null);return So(s),s}}function So(s){localStorage.setItem($h,JSON.stringify(s))}function Fc(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}function wr(s,t){const e=t.x-s.x,n=t.z-s.z;return e*e+n*n<1e-6?0:Math.atan2(-e,-n)}function dD(){const s=new Qt;s.name="fp-arms";const t=new Ee({color:12886160,roughness:.55,metalness:0}),e=new Ee({color:3812920,roughness:.75,metalness:0}),n=(r,o)=>{const l=new Qt;l.name=r;const c=new bt(new jn(.045,.22,3,6),t);c.rotation.x=Math.PI/2,c.position.set(0,0,-.14);const h=new bt(new jn(.038,.2,3,6),t);h.rotation.x=Math.PI/2,h.position.set(0,-.02,-.36);const u=new bt(new As(.055,8,6),t);u.position.set(0,-.02,-.5);const d=new bt(new jn(.05,.08,2,6),e);return d.rotation.x=Math.PI/2,d.position.set(0,.02,-.06),l.add(c,h,u,d),l.position.set(o*.28,-.32,-.45),l.rotation.x=-.3,l.rotation.z=-o*.2,l};s.add(n("fp-left",-1)),s.add(n("fp-right",1));const i=new Qt;i.name="fp-weapon";const a=new bt(new Xt(.1,.04,.12),new Ee({color:6965818,roughness:.85,metalness:0}));return a.position.set(.28,-.34,-.52),i.add(a),s.add(i),s}function fD(){return`
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
  `}const jh=document.querySelector("#app");if(!jh)throw new Error("#app missing");new uD(jh);
