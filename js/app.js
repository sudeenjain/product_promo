(()=>{var io="160";var Vl=0,Eo=1,Hl=2;var el=1,Gl=2,tn=3,Sn=0,xe=1,nn=2;var vn=0,fi=1,To=2,wo=3,Ao=4,Wl=5,Un=100,Xl=101,ql=102,Ro=103,Co=104,Zl=200,Jl=201,Yl=202,$l=203,da=204,fa=205,jl=206,Kl=207,Ql=208,th=209,eh=210,nh=211,ih=212,sh=213,rh=214,ah=0,oh=1,ch=2,Os=3,lh=4,hh=5,uh=6,dh=7,nl=0,fh=1,ph=2,yn=0,mh=1,gh=2,_h=3,so=4,xh=5,vh=6;var il=300,gi=301,_i=302,pa=303,ma=304,fr=306,ga=1e3,ke=1001,_a=1002,Ee=1003,Po=1004;var Lr=1005;var Ue=1006,yh=1007;var Gi=1008;var Mn=1009,Mh=1010,Sh=1011,ro=1012,sl=1013,_n=1014,xn=1015,Wi=1016,rl=1017,al=1018,On=1020,bh=1021,Ve=1023,Eh=1024,Th=1025,Dn=1026,xi=1027,wh=1028,ol=1029,Ah=1030,cl=1031,ll=1033,Ur=33776,Nr=33777,Or=33778,Dr=33779,Io=35840,Lo=35841,Uo=35842,No=35843,hl=36196,Oo=37492,Do=37496,Fo=37808,zo=37809,Bo=37810,ko=37811,Vo=37812,Ho=37813,Go=37814,Wo=37815,Xo=37816,qo=37817,Zo=37818,Jo=37819,Yo=37820,$o=37821,Fr=36492,jo=36494,Ko=36495,Rh=36283,Qo=36284,tc=36285,ec=36286;var Ds=2300,Fs=2301,zr=2302,nc=2400,ic=2401,sc=2402;var ul=3e3,Fn=3001,Ch=3200,Ph=3201,dl=0,Ih=1,Ne="",re="srgb",rn="srgb-linear",ao="display-p3",pr="display-p3-linear",zs="linear",jt="srgb",Bs="rec709",ks="p3";var Xn=7680;var rc=519,Lh=512,Uh=513,Nh=514,fl=515,Oh=516,Dh=517,Fh=518,zh=519,ac=35044;var oc="300 es",xa=1035,sn=2e3,Vs=2001,bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=1234567,Di=Math.PI/180,Xi=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function oo(i,t){return(i%t+t)%t}function Bh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function kh(i,t,e){return i!==t?(e-i)/(t-i):0}function Fi(i,t,e){return(1-e)*i+e*t}function Vh(i,t,e,n){return Fi(i,t,1-Math.exp(-e*n))}function Hh(i,t=1){return t-Math.abs(oo(i,t*2)-t)}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qh(i,t){return i+Math.random()*(t-i)}function Zh(i){return i*(.5-Math.random())}function Jh(i){i!==void 0&&(cc=i);let t=cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yh(i){return i*Di}function $h(i){return i*Xi}function va(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mr={DEG2RAD:Di,RAD2DEG:Xi,generateUUID:Gn,clamp:fe,euclideanModulo:oo,mapLinear:Bh,inverseLerp:kh,lerp:Fi,damp:Vh,pingpong:Hh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:qh,randFloatSpread:Zh,seededRandom:Jh,degToRad:Yh,radToDeg:$h,isPowerOfTwo:va,ceilPowerOfTwo:jh,floorPowerOfTwo:Hs,setQuaternionFromProperEuler:Kh,normalize:Se,denormalize:ci},lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],E=s[1],x=s[4],T=s[7],L=s[2],w=s[5],A=s[8];return r[0]=o*_+a*E+c*L,r[3]=o*m+a*x+c*w,r[6]=o*d+a*T+c*A,r[1]=l*_+h*E+u*L,r[4]=l*m+h*x+u*w,r[7]=l*d+h*T+u*A,r[2]=f*_+p*E+g*L,r[5]=f*m+p*x+g*w,r[8]=f*d+p*T+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Br.makeScale(t,e)),this}rotate(t){return this.premultiply(Br.makeRotation(-t)),this}translate(t,e){return this.premultiply(Br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Br=new Vt;function pl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qh(){let i=Gs("canvas");return i.style.display="block",i}var lc={};function zi(i){i in lc||(lc[i]=!0,console.warn(i))}var hc=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uc=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[rn]:{transfer:zs,primaries:Bs,toReference:i=>i,fromReference:i=>i},[re]:{transfer:jt,primaries:Bs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pr]:{transfer:zs,primaries:ks,toReference:i=>i.applyMatrix3(uc),fromReference:i=>i.applyMatrix3(hc)},[ao]:{transfer:jt,primaries:ks,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uc),fromReference:i=>i.applyMatrix3(hc).convertLinearToSRGB()}},tu=new Set([rn,pr]),Zt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=cs[t].toReference,s=cs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return cs[i].primaries},getTransfer:function(i){return i===Ne?zs:cs[i].transfer}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qn,Ws=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=Gs("canvas")),qn.width=t.width,qn.height=t.height;let n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},eu=0,Xs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Gn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vr(s[o].image)):r.push(Vr(s[o]))}else r=Vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ws.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nu=0,we=class i extends bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ke,s=ke,r=Ue,o=Gi,a=Ve,c=Mn,l=i.DEFAULT_ANISOTROPY,h=Ne){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Gn(),this.name="",this.source=new Xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fn?re:Ne),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===re?Fn:ul}set encoding(t){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fn?re:Ne}};we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=il;we.DEFAULT_ANISOTROPY=1;var Qt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,T=(p+1)/2,L=(d+1)/2,w=(h+f)/4,A=(u+_)/4,H=(g+m)/4;return x>T&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=A/n):T>L?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=w/s,r=H/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=H/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fn?re:Ne),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Xs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qs=class extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ma=class extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*_,E=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let L=Math.sqrt(x),w=Math.atan2(L,d*E);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}let T=a*E;if(c=c*m+f*T,l=l*m+p*T,h=h*m+g*T,u=u*m+_*T,m===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hr=new I,dc=new En,on=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fe):Fe.fromBufferAttribute(r,o),Fe.applyMatrix4(t.matrixWorld),this.expandByPoint(Fe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fe),Fe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),hs.subVectors(this.max,Ci),Zn.subVectors(t.a,Ci),Jn.subVectors(t.b,Ci),Yn.subVectors(t.c,Ci),dn.subVectors(Jn,Zn),fn.subVectors(Yn,Jn),Rn.subVectors(Zn,Yn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Rn.z,Rn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Rn.z,0,-Rn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Rn.y,Rn.x,0];return!Gr(e,Zn,Jn,Yn,hs)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,Zn,Jn,Yn,hs))?!1:(us.crossVectors(dn,fn),e=[us.x,us.y,us.z],Gr(e,Zn,Jn,Yn,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ye=[new I,new I,new I,new I,new I,new I,new I,new I],Fe=new I,ls=new on,Zn=new I,Jn=new I,Yn=new I,dn=new I,fn=new I,Rn=new I,Ci=new I,hs=new I,us=new I,Cn=new I;function Gr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cn.fromArray(i,r);let a=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),c=t.dot(Cn),l=e.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var iu=new on,Pi=new I,Wr=new I,zn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):iu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pi.subVectors(t,this.center);let e=Pi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pi.copy(t.center).add(Wr)),this.expandByPoint(Pi.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$e=new I,Xr=new I,ds=new I,pn=new I,qr=new I,fs=new I,Zr=new I,Sa=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xr.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Xr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ds),a=pn.dot(this.direction),c=-pn.dot(ds),l=pn.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xr).addScaledVector(ds,f),p}intersectSphere(t,e){$e.subVectors(t.center,this.origin);let n=$e.dot(this.direction),s=$e.dot($e)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,s,r){qr.subVectors(e,t),fs.subVectors(n,t),Zr.crossVectors(qr,fs);let o=this.direction.dot(Zr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pn.subVectors(this.origin,t);let c=a*this.direction.dot(fs.crossVectors(pn,fs));if(c<0)return null;let l=a*this.direction.dot(qr.cross(pn));if(l<0||c+l>o)return null;let h=-a*pn.dot(Zr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$n.setFromMatrixColumn(t,0).length(),r=1/$n.setFromMatrixColumn(t,1).length(),o=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(su,t,ru)}lookAt(t,e,n){let s=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),mn.crossVectors(n,Re),mn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),mn.crossVectors(n,Re)),mn.normalize(),ps.crossVectors(Re,mn),s[0]=mn.x,s[4]=ps.x,s[8]=Re.x,s[1]=mn.y,s[5]=ps.y,s[9]=Re.y,s[2]=mn.z,s[6]=ps.z,s[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],x=n[7],T=n[11],L=n[15],w=s[0],A=s[4],H=s[8],S=s[12],b=s[1],D=s[5],Y=s[9],it=s[13],P=s[2],O=s[6],k=s[10],$=s[14],G=s[3],W=s[7],J=s[11],j=s[15];return r[0]=o*w+a*b+c*P+l*G,r[4]=o*A+a*D+c*O+l*W,r[8]=o*H+a*Y+c*k+l*J,r[12]=o*S+a*it+c*$+l*j,r[1]=h*w+u*b+f*P+p*G,r[5]=h*A+u*D+f*O+p*W,r[9]=h*H+u*Y+f*k+p*J,r[13]=h*S+u*it+f*$+p*j,r[2]=g*w+_*b+m*P+d*G,r[6]=g*A+_*D+m*O+d*W,r[10]=g*H+_*Y+m*k+d*J,r[14]=g*S+_*it+m*$+d*j,r[3]=E*w+x*b+T*P+L*G,r[7]=E*A+x*D+T*O+L*W,r[11]=E*H+x*Y+T*k+L*J,r[15]=E*S+x*it+T*$+L*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,x=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,T=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,L=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,w=e*E+n*x+s*T+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=E*A,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*A,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*A,t[4]=x*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*A,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*A,t[8]=T*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*A,t[12]=L*A,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,E=c*l,x=c*h,T=c*u,L=n.x,w=n.y,A=n.z;return s[0]=(1-(_+d))*L,s[1]=(p+T)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(p-T)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+x)*A,s[9]=(m-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$n.set(s[0],s[1],s[2]).length(),o=$n.set(s[4],s[5],s[6]).length(),a=$n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ze.copy(this);let l=1/r,h=1/o,u=1/a;return ze.elements[0]*=l,ze.elements[1]*=l,ze.elements[2]*=l,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=u,ze.elements[9]*=u,ze.elements[10]*=u,e.setFromRotationMatrix(ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=sn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(a===sn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=sn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,p=(n+s)*h,g,_;if(a===sn)g=(o+r)*u,_=-2*u;else if(a===Vs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$n=new I,ze=new ne,su=new I(0,0,0),ru=new I(1,1,1),mn=new I,ps=new I,Re=new I,fc=new ne,pc=new En,Zs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zs.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},au=0,mc=new I,jn=new En,je=new ne,ms=new I,Ii=new I,ou=new I,cu=new En,gc=new I(1,0,0),_c=new I(0,1,0),xc=new I(0,0,1),lu={type:"added"},hu={type:"removed"},ve=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Zs,n=new En,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Vt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(_c,t)}rotateZ(t){return this.rotateOnAxis(xc,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(_c,t)}translateZ(t){return this.translateOnAxis(xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ms.copy(t):ms.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?je.lookAt(Ii,ms,this.up):je.lookAt(ms,Ii,this.up),this.quaternion.setFromRotationMatrix(je),s&&(je.extractRotation(s.matrixWorld),jn.setFromRotationMatrix(je),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(lu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),je.multiply(t.parent.matrixWorld)),t.applyMatrix4(je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,cu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ve.DEFAULT_UP=new I(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=new I,Ke=new I,Jr=new I,Qe=new I,Kn=new I,Qn=new I,vc=new I,Yr=new I,$r=new I,jr=new I,gs=!1,li=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Be.subVectors(t,e),s.cross(Be);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Be.subVectors(s,e),Ke.subVectors(n,e),Jr.subVectors(t,e);let o=Be.dot(Be),a=Be.dot(Ke),c=Be.dot(Jr),l=Ke.dot(Ke),h=Ke.dot(Jr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qe)===null?!1:Qe.x>=0&&Qe.y>=0&&Qe.x+Qe.y<=1}static getUV(t,e,n,s,r,o,a,c){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Qe)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qe.x),c.addScaledVector(o,Qe.y),c.addScaledVector(a,Qe.z),c)}static isFrontFacing(t,e,n,s){return Be.subVectors(n,e),Ke.subVectors(t,e),Be.cross(Ke).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),Be.cross(Ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Kn.subVectors(s,n),Qn.subVectors(r,n),Yr.subVectors(t,n);let c=Kn.dot(Yr),l=Qn.dot(Yr);if(c<=0&&l<=0)return e.copy(n);$r.subVectors(t,s);let h=Kn.dot($r),u=Qn.dot($r);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Kn,o);jr.subVectors(t,r);let p=Kn.dot(jr),g=Qn.dot(jr);if(g>=0&&p<=g)return e.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Qn,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return vc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(vc,a);let d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Kn,o).addScaledVector(Qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=oo(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Kr(o,r,t+1/3),this.g=Kr(o,r,t),this.b=Kr(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=re){let n=ml[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=re){return Zt.fromWorkingColorSpace(ge.copy(this),t),Math.round(fe(ge.r*255,0,255))*65536+Math.round(fe(ge.g*255,0,255))*256+Math.round(fe(ge.b*255,0,255))}getHexString(t=re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(ge.copy(this),e);let n=ge.r,s=ge.g,r=ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=re){Zt.fromWorkingColorSpace(ge.copy(this),t);let e=ge.r,n=ge.g,s=ge.b;return t!==re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(_s);let n=Fi(gn.h,_s.h,e),s=Fi(gn.s,_s.s,e),r=Fi(gn.l,_s.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ge=new Gt;Gt.NAMES=ml;var uu=0,Bn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=fi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vi=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var oe=new I,xs=new lt,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ac,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}};var Ys=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $s=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var du=0,Le=new ne,Qr=new ve,ti=new I,Ce=new on,Li=new on,de=new I,cn=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pl(t)?$s:Ys)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(Ce.min,Li.min),Ce.expandByPoint(de),de.addVectors(Ce.max,Li.max),Ce.expandByPoint(de)):(Ce.expandByPoint(Li.min),Ce.expandByPoint(Li.max))}Ce.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)de.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(de));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)de.fromBufferAttribute(a,l),c&&(ti.fromBufferAttribute(t,l),de.add(ti)),s=Math.max(s,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new I,h[b]=new I;let u=new I,f=new I,p=new I,g=new lt,_=new lt,m=new lt,d=new I,E=new I;function x(b,D,Y){u.fromArray(s,b*3),f.fromArray(s,D*3),p.fromArray(s,Y*3),g.fromArray(o,b*2),_.fromArray(o,D*2),m.fromArray(o,Y*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);let it=1/(_.x*m.y-m.x*_.y);isFinite(it)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(it),E.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(it),l[b].add(d),l[D].add(d),l[Y].add(d),h[b].add(E),h[D].add(E),h[Y].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,D=T.length;b<D;++b){let Y=T[b],it=Y.start,P=Y.count;for(let O=it,k=it+P;O<k;O+=3)x(n[O+0],n[O+1],n[O+2])}let L=new I,w=new I,A=new I,H=new I;function S(b){A.fromArray(r,b*3),H.copy(A);let D=l[b];L.copy(D),L.sub(A.multiplyScalar(A.dot(D))).normalize(),w.crossVectors(H,D);let it=w.dot(h[b])<0?-1:1;c[b*4]=L.x,c[b*4+1]=L.y,c[b*4+2]=L.z,c[b*4+3]=it}for(let b=0,D=T.length;b<D;++b){let Y=T[b],it=Y.start,P=Y.count;for(let O=it,k=it+P;O<k;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yc=new ne,Pn=new Sa,vs=new zn,Mc=new I,ei=new I,ni=new I,ii=new I,ta=new I,ys=new I,Ms=new lt,Ss=new lt,bs=new lt,Sc=new I,bc=new I,Ec=new I,Es=new I,Ts=new I,Wt=class extends ve{constructor(t=new cn,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ys.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ta.fromBufferAttribute(u,t),o?ys.addScaledVector(ta,h):ys.addScaledVector(ta.sub(e),h))}e.add(ys)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(vs.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(vs,Mc)===null||Pn.origin.distanceToSquared(Mc)>(t.far-t.near)**2))&&(yc.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(yc),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,L=x;T<L;T+=3){let w=a.getX(T),A=a.getX(T+1),H=a.getX(T+2);s=ws(this,d,t,n,l,h,u,w,A,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let E=a.getX(m),x=a.getX(m+1),T=a.getX(m+2);s=ws(this,o,t,n,l,h,u,E,x,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=E,L=x;T<L;T+=3){let w=T,A=T+1,H=T+2;s=ws(this,d,t,n,l,h,u,w,A,H),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let E=m,x=m+1,T=m+2;s=ws(this,o,t,n,l,h,u,E,x,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function fu(i,t,e,n,s,r,o,a){let c;if(t.side===xe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Sn,a),c===null)return null;Ts.copy(a),Ts.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ts);return l<e.near||l>e.far?null:{distance:l,point:Ts.clone(),object:i}}function ws(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ei),i.getVertexPosition(c,ni),i.getVertexPosition(l,ii);let h=fu(i,t,e,n,ei,ni,ii,Es);if(h){s&&(Ms.fromBufferAttribute(s,a),Ss.fromBufferAttribute(s,c),bs.fromBufferAttribute(s,l),h.uv=li.getInterpolation(Es,ei,ni,ii,Ms,Ss,bs,new lt)),r&&(Ms.fromBufferAttribute(r,a),Ss.fromBufferAttribute(r,c),bs.fromBufferAttribute(r,l),h.uv1=li.getInterpolation(Es,ei,ni,ii,Ms,Ss,bs,new lt),h.uv2=h.uv1),o&&(Sc.fromBufferAttribute(o,a),bc.fromBufferAttribute(o,c),Ec.fromBufferAttribute(o,l),h.normal=li.getInterpolation(Es,ei,ni,ii,Sc,bc,Ec,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};li.getNormal(ei,ni,ii,u.normal),h.face=u}return h}var ln=class i extends cn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function g(_,m,d,E,x,T,L,w,A,H,S){let b=T/A,D=L/H,Y=T/2,it=L/2,P=w/2,O=A+1,k=H+1,$=0,G=0,W=new I;for(let J=0;J<k;J++){let j=J*D-it;for(let ot=0;ot<O;ot++){let V=ot*b-Y;W[_]=V*E,W[m]=j*x,W[d]=P,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[d]=w>0?1:-1,h.push(W.x,W.y,W.z),u.push(ot/A),u.push(1-J/H),$+=1}}for(let J=0;J<H;J++)for(let j=0;j<A;j++){let ot=f+j+O*J,V=f+j+O*(J+1),X=f+(j+1)+O*(J+1),dt=f+(j+1)+O*J;c.push(ot,V,dt),c.push(V,X,dt),G+=6}a.addGroup(p,G,S),p+=G,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){let t={};for(let e=0;e<i.length;e++){let n=yi(i[e]);for(let s in n)t[s]=n[s]}return t}function pu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gl(i){return i.getRenderTarget()===null?i.outputColorSpace:Zt.workingColorSpace}var mu={clone:yi,merge:be},gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=pu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},js=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_e=class extends js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Di*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},si=-90,ri=1,ba=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _e(si,ri,t,e);s.layers=this.layers,this.add(s);let r=new _e(si,ri,t,e);r.layers=this.layers,this.add(r);let o=new _e(si,ri,t,e);o.layers=this.layers,this.add(o);let a=new _e(si,ri,t,e);a.layers=this.layers,this.add(a);let c=new _e(si,ri,t,e);c.layers=this.layers,this.add(c);let l=new _e(si,ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ks=class extends we{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ea=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fn?re:Ne),this.texture=new Ks(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xe,blending:vn});r.uniforms.tEquirect.value=e;let o=new Wt(s,r),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Ue),new ba(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ea=new I,xu=new I,vu=new Vt,en=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ea.subVectors(n,e).cross(xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vu.getNormalMatrix(t),s=this.coplanarPoint(ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},In=new zn,As=new I,qi=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],E=s[13],x=s[14],T=s[15];if(n[0].setComponents(c-r,f-l,m-p,T-d).normalize(),n[1].setComponents(c+r,f+l,m+p,T+d).normalize(),n[2].setComponents(c+o,f+h,m+g,T+E).normalize(),n[3].setComponents(c-o,f-h,m-g,T-E).normalize(),n[4].setComponents(c-a,f-u,m-_,T-x).normalize(),e===sn)n[5].setComponents(c+a,f+u,m+_,T+x).normalize();else if(e===Vs)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(As.x=s.normal.x>0?t.max.x:t.min.x,As.y=s.normal.y>0?t.max.y:t.min.y,As.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _l(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yu(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Mi=class i extends cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let E=d*f-o;for(let x=0;x<l;x++){let T=x*u-r;g.push(T,-E,0),_.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){let x=E+l*d,T=E+l*(d+1),L=E+1+l*(d+1),w=E+1+l*d;p.push(x,T,w),p.push(T,L,w)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Su=`#ifdef USE_ALPHAHASH
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
#endif`,bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Au=`#ifdef USE_AOMAP
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
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ou=`#ifdef USE_BUMPMAP
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wu=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qu=`vec3 transformedNormal = objectNormal;
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
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cd=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vd=`PhysicalMaterial material;
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
#endif`,yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Md=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Id=`#if defined( USE_POINTS_UV )
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
#endif`,Ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gd=`#ifdef USE_NORMALMAP
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
#endif`,Wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sf=`uniform sampler2D t2D;
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`#include <common>
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
}`,Rf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Cf=`#define DISTANCE
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
}`,Pf=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ff=`#define LAMBERT
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
}`,zf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bf=`#define MATCAP
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
}`,kf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vf=`#define NORMAL
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
}`,Hf=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gf=`#define PHONG
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
}`,Wf=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xf=`#define STANDARD
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
}`,qf=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zf=`#define TOON
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
}`,Jf=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yf=`uniform float size;
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
}`,$f=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Kf=`uniform vec3 color;
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
}`,Qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,tp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ft={alphahash_fragment:Mu,alphahash_pars_fragment:Su,alphamap_fragment:bu,alphamap_pars_fragment:Eu,alphatest_fragment:Tu,alphatest_pars_fragment:wu,aomap_fragment:Au,aomap_pars_fragment:Ru,batching_pars_vertex:Cu,batching_vertex:Pu,begin_vertex:Iu,beginnormal_vertex:Lu,bsdfs:Uu,iridescence_fragment:Nu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:Du,clipping_planes_pars_fragment:Fu,clipping_planes_pars_vertex:zu,clipping_planes_vertex:Bu,color_fragment:ku,color_pars_fragment:Vu,color_pars_vertex:Hu,color_vertex:Gu,common:Wu,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:qu,displacementmap_pars_vertex:Zu,displacementmap_vertex:Ju,emissivemap_fragment:Yu,emissivemap_pars_fragment:$u,colorspace_fragment:ju,colorspace_pars_fragment:Ku,envmap_fragment:Qu,envmap_common_pars_fragment:td,envmap_pars_fragment:ed,envmap_pars_vertex:nd,envmap_physical_pars_fragment:pd,envmap_vertex:id,fog_vertex:sd,fog_pars_vertex:rd,fog_fragment:ad,fog_pars_fragment:od,gradientmap_pars_fragment:cd,lightmap_fragment:ld,lightmap_pars_fragment:hd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:dd,lights_pars_begin:fd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:xd,lights_physical_fragment:vd,lights_physical_pars_fragment:yd,lights_fragment_begin:Md,lights_fragment_maps:Sd,lights_fragment_end:bd,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Ad,map_fragment:Rd,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Id,metalnessmap_fragment:Ld,metalnessmap_pars_fragment:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Od,morphtarget_pars_vertex:Dd,morphtarget_vertex:Fd,normal_fragment_begin:zd,normal_fragment_maps:Bd,normal_pars_fragment:kd,normal_pars_vertex:Vd,normal_vertex:Hd,normalmap_pars_fragment:Gd,clearcoat_normal_fragment_begin:Wd,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:qd,iridescence_pars_fragment:Zd,opaque_fragment:Jd,packing:Yd,premultiplied_alpha_fragment:$d,project_vertex:jd,dithering_fragment:Kd,dithering_pars_fragment:Qd,roughnessmap_fragment:tf,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:sf,shadowmap_vertex:rf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:cf,skinning_vertex:lf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:df,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:xf,uv_vertex:vf,worldpos_vertex:yf,background_vert:Mf,background_frag:Sf,backgroundCube_vert:bf,backgroundCube_frag:Ef,cube_vert:Tf,cube_frag:wf,depth_vert:Af,depth_frag:Rf,distanceRGBA_vert:Cf,distanceRGBA_frag:Pf,equirect_vert:If,equirect_frag:Lf,linedashed_vert:Uf,linedashed_frag:Nf,meshbasic_vert:Of,meshbasic_frag:Df,meshlambert_vert:Ff,meshlambert_frag:zf,meshmatcap_vert:Bf,meshmatcap_frag:kf,meshnormal_vert:Vf,meshnormal_frag:Hf,meshphong_vert:Gf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:qf,meshtoon_vert:Zf,meshtoon_frag:Jf,points_vert:Yf,points_frag:$f,shadow_vert:jf,shadow_frag:Kf,sprite_vert:Qf,sprite_frag:tp},at={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Xe={basic:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:be([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:be([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:be([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:be([at.points,at.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:be([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:be([at.common,at.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:be([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:be([at.sprite,at.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:be([at.common,at.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:be([at.lights,at.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Xe.physical={uniforms:be([Xe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Rs={r:0,b:0,g:0};function ep(i,t,e,n,s,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let E=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fr)?(h===void 0&&(h=new Wt(new ln(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:yi(Xe.backgroundCube.uniforms),vertexShader:Xe.backgroundCube.vertexShader,fragmentShader:Xe.backgroundCube.fragmentShader,side:xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(x.colorSpace)!==jt,(u!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Wt(new Mi(2,2),new hn({name:"BackgroundMaterial",uniforms:yi(Xe.background.uniforms),vertexShader:Xe.background.vertexShader,fragmentShader:Xe.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(x.colorSpace)!==jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Rs,gl(i)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function np(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(P,O,k,$,G){let W=!1;if(o){let J=_($,k,O);l!==J&&(l=J,p(l.object)),W=d(P,$,k,G),W&&E(P,$,k,G)}else{let J=O.wireframe===!0;(l.geometry!==$.id||l.program!==k.id||l.wireframe!==J)&&(l.geometry=$.id,l.program=k.id,l.wireframe=J,W=!0)}G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,H(P,O,k,$),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,O,k){let $=k.wireframe===!0,G=a[P.id];G===void 0&&(G={},a[P.id]=G);let W=G[O.id];W===void 0&&(W={},G[O.id]=W);let J=W[$];return J===void 0&&(J=m(f()),W[$]=J),J}function m(P){let O=[],k=[],$=[];for(let G=0;G<s;G++)O[G]=0,k[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:$,object:P,attributes:{},index:null}}function d(P,O,k,$){let G=l.attributes,W=O.attributes,J=0,j=k.getAttributes();for(let ot in j)if(j[ot].location>=0){let X=G[ot],dt=W[ot];if(dt===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),X===void 0||X.attribute!==dt||dt&&X.data!==dt.data)return!0;J++}return l.attributesNum!==J||l.index!==$}function E(P,O,k,$){let G={},W=O.attributes,J=0,j=k.getAttributes();for(let ot in j)if(j[ot].location>=0){let X=W[ot];X===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));let dt={};dt.attribute=X,X&&X.data&&(dt.data=X.data),G[ot]=dt,J++}l.attributes=G,l.attributesNum=J,l.index=$}function x(){let P=l.newAttributes;for(let O=0,k=P.length;O<k;O++)P[O]=0}function T(P){L(P,0)}function L(P,O){let k=l.newAttributes,$=l.enabledAttributes,G=l.attributeDivisors;k[P]=1,$[P]===0&&(i.enableVertexAttribArray(P),$[P]=1),G[P]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),G[P]=O)}function w(){let P=l.newAttributes,O=l.enabledAttributes;for(let k=0,$=O.length;k<$;k++)O[k]!==P[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function A(P,O,k,$,G,W,J){J===!0?i.vertexAttribIPointer(P,O,k,G,W):i.vertexAttribPointer(P,O,k,$,G,W)}function H(P,O,k,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let G=$.attributes,W=k.getAttributes(),J=O.defaultAttributeValues;for(let j in W){let ot=W[j];if(ot.location>=0){let V=G[j];if(V===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let X=V.normalized,dt=V.itemSize,vt=e.get(V);if(vt===void 0)continue;let mt=vt.buffer,At=vt.type,Lt=vt.bytesPerElement,yt=n.isWebGL2===!0&&(At===i.INT||At===i.UNSIGNED_INT||V.gpuType===sl);if(V.isInterleavedBufferAttribute){let Pt=V.data,R=Pt.stride,st=V.offset;if(Pt.isInstancedInterleavedBuffer){for(let Z=0;Z<ot.locationSize;Z++)L(ot.location+Z,Pt.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let Z=0;Z<ot.locationSize;Z++)T(ot.location+Z);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Z=0;Z<ot.locationSize;Z++)A(ot.location+Z,dt/ot.locationSize,At,X,R*Lt,(st+dt/ot.locationSize*Z)*Lt,yt)}else{if(V.isInstancedBufferAttribute){for(let Pt=0;Pt<ot.locationSize;Pt++)L(ot.location+Pt,V.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Pt=0;Pt<ot.locationSize;Pt++)T(ot.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Pt=0;Pt<ot.locationSize;Pt++)A(ot.location+Pt,dt/ot.locationSize,At,X,dt*Lt,dt/ot.locationSize*Pt*Lt,yt)}}else if(J!==void 0){let X=J[j];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(ot.location,X);break;case 3:i.vertexAttrib3fv(ot.location,X);break;case 4:i.vertexAttrib4fv(ot.location,X);break;default:i.vertexAttrib1fv(ot.location,X)}}}}w()}function S(){Y();for(let P in a){let O=a[P];for(let k in O){let $=O[k];for(let G in $)g($[G].object),delete $[G];delete O[k]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;let O=a[P.id];for(let k in O){let $=O[k];for(let G in $)g($[G].object),delete $[G];delete O[k]}delete a[P.id]}function D(P){for(let O in a){let k=a[O];if(k[P.id]===void 0)continue;let $=k[P.id];for(let G in $)g($[G].object),delete $[G];delete k[P.id]}}function Y(){it(),h=!0,l!==c&&(l=c,p(l.object))}function it(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:it,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:T,disableUnusedAttributes:w}}function ip(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function sp(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,T=o||t.has("OES_texture_float"),L=x&&T,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:w}}function rp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new en,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,x=E*4,T=d.clippingState||null;c.value=T,T=h(g,f,x,p);for(let L=0;L!==x;++L)T[L]=e[L];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,T=p;x!==_;++x,T+=4)o.copy(u[x]).applyMatrix4(E,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ap(i){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=gi:a===ma&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===pa||a===ma)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ea(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qs=class extends js{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hi=4,Tc=[.125,.215,.35,.446,.526,.582],Nn=20,na=new Qs,wc=new Gt,ia=null,sa=0,ra=0,Ln=(1+Math.sqrt(5))/2,ai=1/Ln,Ac=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ln,ai),new I(0,Ln,-ai),new I(ai,0,Ln),new I(-ai,0,Ln),new I(Ln,ai,0),new I(-Ln,ai,0)],Si=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ia,sa,ra),t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Wi,format:Ve,colorSpace:rn,depthBuffer:!1},s=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(r)),this._blurMaterial=cp(r,t,e)}return s}_compileMaterial(t){let e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,s){let a=new _e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(wc),h.toneMapping=yn,h.autoClear=!1;let p=new vi({name:"PMREM.Background",side:xe,depthWrite:!1,depthTest:!1}),g=new Wt(new ln,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(wc),_=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let x=this._cubeSize;Cs(s,E*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gi||t.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ac[(s-1)%Ac.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Wt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);let d=[],E=0;for(let A=0;A<Nn;++A){let H=A/_,S=Math.exp(-H*H/2);d.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let T=this._sizeLods[s],L=3*T*(s>x-hi?s-x+hi:0),w=4*(this._cubeSize-T);Cs(e,L,w,3*T,2*T),c.setRenderTarget(e),c.render(u,na)}};function op(i){let t=[],e=[],n=[],s=i,r=i-hi+1+Tc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-hi?c=Tc[o-i+hi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),x=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,H=w>2?0:-1,S=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];E.set(S,_*g*w),x.set(f,m*g*w);let b=[w,w,w,w,w,w];T.set(b,d*g*w)}let L=new cn;L.setAttribute("position",new Pe(E,_)),L.setAttribute("uv",new Pe(x,m)),L.setAttribute("faceIndex",new Pe(T,d)),t.push(L),s>hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(i,t,e){let n=new an(i,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cp(i,t,e){let n=new Float32Array(Nn),s=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:co(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Cc(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Pc(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function co(){return`

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
	`}function lp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===pa||c===ma,h=c===gi||c===_i;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Si(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Si(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function up(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let x=0,T=E.length;x<T;x+=3){let L=E[x+0],w=E[x+1],A=E[x+2];f.push(L,w,w,A,A,L)}}else if(g!==void 0){let E=g.array;_=g.version;for(let x=0,T=E.length/3-1;x<T;x+=3){let L=x+0,w=x+1,A=x+2;f.push(L,w,w,A,A,L)}}else return;let m=new(pl(f)?$s:Ys)(f,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function dp(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*c),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,_),e.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let E=0;E<_;E++)d+=g[E];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function fp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pp(i,t){return i[0]-t[0]}function mp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function gp(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Qt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let E=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],H=0;E===!0&&(H=1),x===!0&&(H=2),T===!0&&(H=3);let S=h.attributes.position.count*H,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let D=new Float32Array(S*b*4*g),Y=new qs(D,S,b,g);Y.type=xn,Y.needsUpdate=!0;let it=H*4;for(let O=0;O<g;O++){let k=L[O],$=w[O],G=A[O],W=S*b*4*O;for(let J=0;J<k.count;J++){let j=J*it;E===!0&&(o.fromBufferAttribute(k,J),D[W+j+0]=o.x,D[W+j+1]=o.y,D[W+j+2]=o.z,D[W+j+3]=0),x===!0&&(o.fromBufferAttribute($,J),D[W+j+4]=o.x,D[W+j+5]=o.y,D[W+j+6]=o.z,D[W+j+7]=0),T===!0&&(o.fromBufferAttribute(G,J),D[W+j+8]=o.x,D[W+j+9]=o.y,D[W+j+10]=o.z,D[W+j+11]=G.itemSize===4?o.w:1)}}_={count:g,texture:Y,size:new lt(S,b)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let E=0;E<f.length;E++)m+=f[E];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){let T=g[x];T[0]=x,T[1]=f[x]}g.sort(mp);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(pp);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let T=a[x],L=T[0],w=T[1];L!==Number.MAX_SAFE_INTEGER&&w?(_&&h.getAttribute("morphTarget"+x)!==_[L]&&h.setAttribute("morphTarget"+x,_[L]),m&&h.getAttribute("morphNormal"+x)!==m[L]&&h.setAttribute("morphNormal"+x,m[L]),s[x]=w,d+=w):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function _p(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var tr=class extends we{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Dn,h!==Dn&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Dn&&(n=_n),n===void 0&&h===xi&&(n=On),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xl=new we,vl=new tr(1,1);vl.compareFunction=fl;var yl=new qs,Ml=new Ma,Sl=new Ks,Ic=[],Lc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Oc=new Float32Array(4);function Ti(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ic[s];if(r===void 0&&(r=new Float32Array(s),Ic[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gr(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function Mp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function Sp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Oc.set(n),i.uniformMatrix2fv(this.addr,!1,Oc),le(e,n)}}function bp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),le(e,n)}}function Ep(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(ce(e,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),le(e,n)}}function Tp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function Cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function Up(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?vl:xl;e.setTexture2D(t||r,s)}function Np(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ml,s)}function Op(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sl,s)}function Dp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yl,s)}function Fp(i){switch(i){case 5126:return xp;case 35664:return vp;case 35665:return yp;case 35666:return Mp;case 35674:return Sp;case 35675:return bp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return Ap;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Pp;case 36295:return Ip;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Dp}}function zp(i,t){i.uniform1fv(this.addr,t)}function Bp(i,t){let e=Ti(t,this.size,2);i.uniform2fv(this.addr,e)}function kp(i,t){let e=Ti(t,this.size,3);i.uniform3fv(this.addr,e)}function Vp(i,t){let e=Ti(t,this.size,4);i.uniform4fv(this.addr,e)}function Hp(i,t){let e=Ti(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gp(i,t){let e=Ti(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wp(i,t){let e=Ti(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xp(i,t){i.uniform1iv(this.addr,t)}function qp(i,t){i.uniform2iv(this.addr,t)}function Zp(i,t){i.uniform3iv(this.addr,t)}function Jp(i,t){i.uniform4iv(this.addr,t)}function Yp(i,t){i.uniform1uiv(this.addr,t)}function $p(i,t){i.uniform2uiv(this.addr,t)}function jp(i,t){i.uniform3uiv(this.addr,t)}function Kp(i,t){i.uniform4uiv(this.addr,t)}function Qp(i,t,e){let n=this.cache,s=t.length,r=gr(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xl,r[o])}function tm(i,t,e){let n=this.cache,s=t.length,r=gr(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ml,r[o])}function em(i,t,e){let n=this.cache,s=t.length,r=gr(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sl,r[o])}function nm(i,t,e){let n=this.cache,s=t.length,r=gr(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yl,r[o])}function im(i){switch(i){case 5126:return zp;case 35664:return Bp;case 35665:return kp;case 35666:return Vp;case 35674:return Hp;case 35675:return Gp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Yp;case 36294:return $p;case 36295:return jp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}var Ta=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fp(e.type)}},wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=im(e.type)}},Aa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},aa=/(\w+)(\])?(\[|\.)?/g;function Dc(i,t){i.seq.push(t),i.map[t.id]=t}function sm(i,t,e){let n=i.name,s=n.length;for(aa.lastIndex=0;;){let r=aa.exec(n),o=aa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Dc(e,l===void 0?new Ta(a,i,t):new wa(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Aa(a),Dc(e,u)),e=u}}}var mi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);sm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Fc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var rm=37297,am=0;function om(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function cm(i){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i),n;switch(t===e?n="":t===ks&&e===Bs?n="LinearDisplayP3ToLinearSRGB":t===Bs&&e===ks&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case pr:return[n,"LinearTransferOETF"];case re:case ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+om(i.getShaderSource(t),o)}else return s}function lm(i,t){let e=cm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function hm(i,t){let e;switch(t){case mh:e="Linear";break;case gh:e="Reinhard";break;case _h:e="OptimizedCineon";break;case so:e="ACESFilmic";break;case vh:e="AgX";break;case xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function um(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ui).join(`
`)}function fm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ui(i){return i!==""}function Bc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(mm,_m)}var gm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _m(i,t){let e=Ft[t];if(e===void 0){let n=gm.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ra(e)}var xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(i){return i.replace(xm,vm)}function vm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ym(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===el?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function bm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nl:t="ENVMAP_BLENDING_MULTIPLY";break;case fh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function Em(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Tm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ym(e),l=Mm(e),h=Sm(e),u=bm(e),f=Em(e),p=e.isWebGL2?"":um(e),g=dm(e),_=fm(r),m=s.createProgram(),d,E,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ui).join(`
`),d.length>0&&(d+=`
`),E=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ui).join(`
`),E.length>0&&(E+=`
`)):(d=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),E=[p,Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==yn?hm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,lm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ui).join(`
`)),o=Ra(o),o=Bc(o,e),o=kc(o,e),a=Ra(a),a=Bc(a,e),a=kc(a,e),o=Vc(o),a=Vc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let T=x+d+o,L=x+E+a,w=Fc(s,s.VERTEX_SHADER,T),A=Fc(s,s.FRAGMENT_SHADER,L);s.attachShader(m,w),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function H(Y){if(i.debug.checkShaderErrors){let it=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(A).trim(),k=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,A);else{let G=zc(s,w,"vertex"),W=zc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+G+`
`+W)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(P===""||O==="")&&($=!1);$&&(Y.diagnostics={runnable:k,programLog:it,vertexShader:{log:P,prefix:d},fragmentShader:{log:O,prefix:E}})}s.deleteShader(w),s.deleteShader(A),S=new mi(s,m),b=pm(s,m)}let S;this.getUniforms=function(){return S===void 0&&H(this),S};let b;this.getAttributes=function(){return b===void 0&&H(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,rm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=am++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}var wm=0,Ca=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pa(t),e.set(t,n)),n}},Pa=class{constructor(t){this.id=wm++,this.code=t,this.usedTimes=0}};function Am(i,t,e,n,s,r,o){let a=new Js,c=new Ca,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,b,D,Y,it){let P=Y.fog,O=it.geometry,k=S.isMeshStandardMaterial?Y.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),G=$&&$.mapping===fr?$.image.height:null,W=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,j=J!==void 0?J.length:0,ot=0;O.morphAttributes.position!==void 0&&(ot=1),O.morphAttributes.normal!==void 0&&(ot=2),O.morphAttributes.color!==void 0&&(ot=3);let V,X,dt,vt;if(W){let ye=Xe[W];V=ye.vertexShader,X=ye.fragmentShader}else V=S.vertexShader,X=S.fragmentShader,c.update(S),dt=c.getVertexShaderID(S),vt=c.getFragmentShaderID(S);let mt=i.getRenderTarget(),At=it.isInstancedMesh===!0,Lt=it.isBatchedMesh===!0,yt=!!S.map,Pt=!!S.matcap,R=!!$,st=!!S.aoMap,Z=!!S.lightMap,nt=!!S.bumpMap,q=!!S.normalMap,St=!!S.displacementMap,ft=!!S.emissiveMap,y=!!S.metalnessMap,v=!!S.roughnessMap,N=S.anisotropy>0,et=S.clearcoat>0,Q=S.iridescence>0,K=S.sheen>0,xt=S.transmission>0,ct=N&&!!S.anisotropyMap,gt=et&&!!S.clearcoatMap,Et=et&&!!S.clearcoatNormalMap,Nt=et&&!!S.clearcoatRoughnessMap,tt=Q&&!!S.iridescenceMap,Xt=Q&&!!S.iridescenceThicknessMap,Ht=K&&!!S.sheenColorMap,It=K&&!!S.sheenRoughnessMap,bt=!!S.specularMap,_t=!!S.specularColorMap,Dt=!!S.specularIntensityMap,qt=xt&&!!S.transmissionMap,ie=xt&&!!S.thicknessMap,Bt=!!S.gradientMap,rt=!!S.alphaMap,C=S.alphaTest>0,ht=!!S.alphaHash,ut=!!S.extensions,Rt=!!O.attributes.uv1,Tt=!!O.attributes.uv2,Jt=!!O.attributes.uv3,Yt=yn;return S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Yt=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:X,defines:S.defines,customVertexShaderID:dt,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Lt,instancing:At,instancingColor:At&&it.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:rn,map:yt,matcap:Pt,envMap:R,envMapMode:R&&$.mapping,envMapCubeUVHeight:G,aoMap:st,lightMap:Z,bumpMap:nt,normalMap:q,displacementMap:f&&St,emissiveMap:ft,normalMapObjectSpace:q&&S.normalMapType===Ih,normalMapTangentSpace:q&&S.normalMapType===dl,metalnessMap:y,roughnessMap:v,anisotropy:N,anisotropyMap:ct,clearcoat:et,clearcoatMap:gt,clearcoatNormalMap:Et,clearcoatRoughnessMap:Nt,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:Xt,sheen:K,sheenColorMap:Ht,sheenRoughnessMap:It,specularMap:bt,specularColorMap:_t,specularIntensityMap:Dt,transmission:xt,transmissionMap:qt,thicknessMap:ie,gradientMap:Bt,opaque:S.transparent===!1&&S.blending===fi,alphaMap:rt,alphaTest:C,alphaHash:ht,combine:S.combine,mapUv:yt&&_(S.map.channel),aoMapUv:st&&_(S.aoMap.channel),lightMapUv:Z&&_(S.lightMap.channel),bumpMapUv:nt&&_(S.bumpMap.channel),normalMapUv:q&&_(S.normalMap.channel),displacementMapUv:St&&_(S.displacementMap.channel),emissiveMapUv:ft&&_(S.emissiveMap.channel),metalnessMapUv:y&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(S.sheenRoughnessMap.channel),specularMapUv:bt&&_(S.specularMap.channel),specularColorMapUv:_t&&_(S.specularColorMap.channel),specularIntensityMapUv:Dt&&_(S.specularIntensityMap.channel),transmissionMapUv:qt&&_(S.transmissionMap.channel),thicknessMapUv:ie&&_(S.thicknessMap.channel),alphaMapUv:rt&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(q||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:Tt,vertexUv3s:Jt,pointsUvs:it.isPoints===!0&&!!O.attributes.uv&&(yt||rt),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:it.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===xe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ut&&S.extensions.derivatives===!0,extensionFragDepth:ut&&S.extensions.fragDepth===!0,extensionDrawBuffers:ut&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function E(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function T(S){let b=g[S.type],D;if(b){let Y=Xe[b];D=mu.clone(Y.uniforms)}else D=S.uniforms;return D}function L(S,b){let D;for(let Y=0,it=l.length;Y<it;Y++){let P=l[Y];if(P.cacheKey===b){D=P,++D.usedTimes;break}}return D===void 0&&(D=new Tm(i,b,S,r),l.push(D)),D}function w(S){if(--S.usedTimes===0){let b=l.indexOf(S);l[b]=l[l.length-1],l.pop(),S.destroy()}}function A(S){c.remove(S)}function H(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:H}}function Rm(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Cm),n.length>1&&n.sort(f||Gc),s.length>1&&s.sort(f||Gc)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Pm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Wc,i.set(n,[o])):s>=r.length?(o=new Wc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Im(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Lm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Um=0;function Nm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Om(i,t){let e=new Im,n=Lm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new ne,a=new ne;function c(h,u){let f=0,p=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let _=0,m=0,d=0,E=0,x=0,T=0,L=0,w=0,A=0,H=0,S=0;h.sort(Nm);let b=u===!0?Math.PI:1;for(let Y=0,it=h.length;Y<it;Y++){let P=h[Y],O=P.color,k=P.intensity,$=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*k*b,p+=O.g*k*b,g+=O.b*k*b;else if(P.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(P.sh.coefficients[W],k);S++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){let J=P.shadow,j=n.get(P);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.directionalShadow[_]=j,s.directionalShadowMap[_]=G,s.directionalShadowMatrix[_]=P.shadow.matrix,T++}s.directional[_]=W,_++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(k*b),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,s.spot[d]=W;let J=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&H++),s.spotLightMatrix[d]=J.matrix,P.castShadow){let j=n.get(P);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,s.spotShadow[d]=j,s.spotShadowMap[d]=G,w++}d++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(O).multiplyScalar(k),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),s.rectArea[E]=W,E++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*b),W.distance=P.distance,W.decay=P.decay,P.castShadow){let J=P.shadow,j=n.get(P);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,s.pointShadow[m]=j,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=P.shadow.matrix,L++}s.point[m]=W,m++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(k*b),W.groundColor.copy(P.groundColor).multiplyScalar(k*b),s.hemi[x]=W,x++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==d||D.rectAreaLength!==E||D.hemiLength!==x||D.numDirectionalShadows!==T||D.numPointShadows!==L||D.numSpotShadows!==w||D.numSpotMaps!==A||D.numLightProbes!==S)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=E,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+A-H,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=S,D.directionalLength=_,D.pointLength=m,D.spotLength=d,D.rectAreaLength=E,D.hemiLength=x,D.numDirectionalShadows=T,D.numPointShadows=L,D.numSpotShadows=w,D.numSpotMaps=A,D.numLightProbes=S,s.version=Um++)}function l(h,u){let f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let E=0,x=h.length;E<x;E++){let T=h[E];if(T.isDirectionalLight){let L=s.directional[f];L.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(T.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),g++}else if(T.isRectAreaLight){let L=s.rectArea[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function Xc(i,t){let e=new Om(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Dm(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Xc(i,t),e.set(r,[c])):o>=a.length?(c=new Xc(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ia=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},La=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
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
}`;function Bm(i,t,e){let n=new qi,s=new lt,r=new lt,o=new Qt,a=new Ia({depthPacking:Ph}),c=new La,l={},h=e.maxTextureSize,u={[Sn]:xe,[xe]:Sn,[nn]:nn},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Fm,fragmentShader:zm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new cn;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let d=this.type;this.render=function(w,A,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(vn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let it=d!==tn&&this.type===tn,P=d===tn&&this.type!==tn;for(let O=0,k=w.length;O<k;O++){let $=w[O],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||it===!0||P===!0){let j=this.type!==tn?{minFilter:Ee,magFilter:Ee}:{};G.map!==null&&G.map.dispose(),G.map=new an(s.x,s.y,j),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let J=G.getViewportCount();for(let j=0;j<J;j++){let ot=G.getViewport(j);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),Y.viewport(o),G.updateMatrices($,j),n=G.getFrustum(),T(A,H,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===tn&&E(G,H),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,D)};function E(w,A){let H=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new an(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,H,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,H,p,_,null)}function x(w,A,H,S){let b=null,D=H.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=H.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let Y=b.uuid,it=A.uuid,P=l[Y];P===void 0&&(P={},l[Y]=P);let O=P[it];O===void 0&&(O=b.clone(),P[it]=O,A.addEventListener("dispose",L)),b=O}if(b.visible=A.visible,b.wireframe=A.wireframe,S===tn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Y=i.properties.get(b);Y.light=H}return b}function T(w,A,H,S,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===tn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld);let it=t.update(w),P=w.material;if(Array.isArray(P)){let O=it.groups;for(let k=0,$=O.length;k<$;k++){let G=O[k],W=P[G.materialIndex];if(W&&W.visible){let J=x(w,W,S,b);w.onBeforeShadow(i,w,A,H,it,J,G),i.renderBufferDirect(H,null,it,J,w,G),w.onAfterShadow(i,w,A,H,it,J,G)}}}else if(P.visible){let O=x(w,P,S,b);w.onBeforeShadow(i,w,A,H,it,O,null),i.renderBufferDirect(H,null,it,O,w,null),w.onAfterShadow(i,w,A,H,it,O,null)}}let Y=w.children;for(let it=0,P=Y.length;it<P;it++)T(Y[it],A,H,S,b)}function L(w){w.target.removeEventListener("dispose",L);for(let H in l){let S=l[H],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function km(i,t,e){let n=e.isWebGL2;function s(){let C=!1,ht=new Qt,ut=null,Rt=new Qt(0,0,0,0);return{setMask:function(Tt){ut!==Tt&&!C&&(i.colorMask(Tt,Tt,Tt,Tt),ut=Tt)},setLocked:function(Tt){C=Tt},setClear:function(Tt,Jt,Yt,he,ye){ye===!0&&(Tt*=he,Jt*=he,Yt*=he),ht.set(Tt,Jt,Yt,he),Rt.equals(ht)===!1&&(i.clearColor(Tt,Jt,Yt,he),Rt.copy(ht))},reset:function(){C=!1,ut=null,Rt.set(-1,0,0,0)}}}function r(){let C=!1,ht=null,ut=null,Rt=null;return{setTest:function(Tt){Tt?Lt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Tt){ht!==Tt&&!C&&(i.depthMask(Tt),ht=Tt)},setFunc:function(Tt){if(ut!==Tt){switch(Tt){case ah:i.depthFunc(i.NEVER);break;case oh:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case lh:i.depthFunc(i.EQUAL);break;case hh:i.depthFunc(i.GEQUAL);break;case uh:i.depthFunc(i.GREATER);break;case dh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Tt}},setLocked:function(Tt){C=Tt},setClear:function(Tt){Rt!==Tt&&(i.clearDepth(Tt),Rt=Tt)},reset:function(){C=!1,ht=null,ut=null,Rt=null}}}function o(){let C=!1,ht=null,ut=null,Rt=null,Tt=null,Jt=null,Yt=null,he=null,ye=null;return{setTest:function($t){C||($t?Lt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function($t){ht!==$t&&!C&&(i.stencilMask($t),ht=$t)},setFunc:function($t,Me,We){(ut!==$t||Rt!==Me||Tt!==We)&&(i.stencilFunc($t,Me,We),ut=$t,Rt=Me,Tt=We)},setOp:function($t,Me,We){(Jt!==$t||Yt!==Me||he!==We)&&(i.stencilOp($t,Me,We),Jt=$t,Yt=Me,he=We)},setLocked:function($t){C=$t},setClear:function($t){ye!==$t&&(i.clearStencil($t),ye=$t)},reset:function(){C=!1,ht=null,ut=null,Rt=null,Tt=null,Jt=null,Yt=null,he=null,ye=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,x=null,T=null,L=null,w=null,A=null,H=null,S=new Gt(0,0,0),b=0,D=!1,Y=null,it=null,P=null,O=null,k=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=W>=2);let j=null,ot={},V=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),dt=new Qt().fromArray(V),vt=new Qt().fromArray(X);function mt(C,ht,ut,Rt){let Tt=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(C,Jt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<ut;Yt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(ht+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Jt}let At={};At[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Lt(i.DEPTH_TEST),c.setFunc(Os),ft(!1),y(Eo),Lt(i.CULL_FACE),q(vn);function Lt(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function yt(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Pt(C,ht){return p[C]!==ht?(i.bindFramebuffer(C,ht),p[C]=ht,n&&(C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ht),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function R(C,ht){let ut=_,Rt=!1;if(C)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),C.isWebGLMultipleRenderTargets){let Tt=C.texture;if(ut.length!==Tt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,Yt=Tt.length;Jt<Yt;Jt++)ut[Jt]=i.COLOR_ATTACHMENT0+Jt;ut.length=Tt.length,Rt=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,Rt=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,Rt=!0);Rt&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function st(C){return m!==C?(i.useProgram(C),m=C,!0):!1}let Z={[Un]:i.FUNC_ADD,[Xl]:i.FUNC_SUBTRACT,[ql]:i.FUNC_REVERSE_SUBTRACT};if(n)Z[Ro]=i.MIN,Z[Co]=i.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(Z[Ro]=C.MIN_EXT,Z[Co]=C.MAX_EXT)}let nt={[Zl]:i.ZERO,[Jl]:i.ONE,[Yl]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[eh]:i.SRC_ALPHA_SATURATE,[Ql]:i.DST_COLOR,[jl]:i.DST_ALPHA,[$l]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[Kl]:i.ONE_MINUS_DST_ALPHA,[nh]:i.CONSTANT_COLOR,[ih]:i.ONE_MINUS_CONSTANT_COLOR,[sh]:i.CONSTANT_ALPHA,[rh]:i.ONE_MINUS_CONSTANT_ALPHA};function q(C,ht,ut,Rt,Tt,Jt,Yt,he,ye,$t){if(C===vn){d===!0&&(yt(i.BLEND),d=!1);return}if(d===!1&&(Lt(i.BLEND),d=!0),C!==Wl){if(C!==E||$t!==D){if((x!==Un||w!==Un)&&(i.blendEquation(i.FUNC_ADD),x=Un,w=Un),$t)switch(C){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.ONE,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case To:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,L=null,A=null,H=null,S.set(0,0,0),b=0,E=C,D=$t}return}Tt=Tt||ht,Jt=Jt||ut,Yt=Yt||Rt,(ht!==x||Tt!==w)&&(i.blendEquationSeparate(Z[ht],Z[Tt]),x=ht,w=Tt),(ut!==T||Rt!==L||Jt!==A||Yt!==H)&&(i.blendFuncSeparate(nt[ut],nt[Rt],nt[Jt],nt[Yt]),T=ut,L=Rt,A=Jt,H=Yt),(he.equals(S)===!1||ye!==b)&&(i.blendColor(he.r,he.g,he.b,ye),S.copy(he),b=ye),E=C,D=!1}function St(C,ht){C.side===nn?yt(i.CULL_FACE):Lt(i.CULL_FACE);let ut=C.side===xe;ht&&(ut=!ut),ft(ut),C.blending===fi&&C.transparent===!1?q(vn):q(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let Rt=C.stencilWrite;l.setTest(Rt),Rt&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),N(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Lt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(C){Y!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),Y=C)}function y(C){C!==Vl?(Lt(i.CULL_FACE),C!==it&&(C===Eo?i.cullFace(i.BACK):C===Hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),it=C}function v(C){C!==P&&(G&&i.lineWidth(C),P=C)}function N(C,ht,ut){C?(Lt(i.POLYGON_OFFSET_FILL),(O!==ht||k!==ut)&&(i.polygonOffset(ht,ut),O=ht,k=ut)):yt(i.POLYGON_OFFSET_FILL)}function et(C){C?Lt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Q(C){C===void 0&&(C=i.TEXTURE0+$-1),j!==C&&(i.activeTexture(C),j=C)}function K(C,ht,ut){ut===void 0&&(j===null?ut=i.TEXTURE0+$-1:ut=j);let Rt=ot[ut];Rt===void 0&&(Rt={type:void 0,texture:void 0},ot[ut]=Rt),(Rt.type!==C||Rt.texture!==ht)&&(j!==ut&&(i.activeTexture(ut),j=ut),i.bindTexture(C,ht||At[C]),Rt.type=C,Rt.texture=ht)}function xt(){let C=ot[j];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(C){dt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),dt.copy(C))}function qt(C){vt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),vt.copy(C))}function ie(C,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let Rt=ut.get(C);Rt===void 0&&(Rt=i.getUniformBlockIndex(ht,C.name),ut.set(C,Rt))}function Bt(C,ht){let Rt=u.get(ht).get(C);h.get(ht)!==Rt&&(i.uniformBlockBinding(ht,Rt,C.__bindingPointIndex),h.set(ht,Rt))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},j=null,ot={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,x=null,T=null,L=null,w=null,A=null,H=null,S=new Gt(0,0,0),b=0,D=!1,Y=null,it=null,P=null,O=null,k=null,dt.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Lt,disable:yt,bindFramebuffer:Pt,drawBuffers:R,useProgram:st,setBlending:q,setMaterial:St,setFlipSided:ft,setCullFace:y,setLineWidth:v,setPolygonOffset:N,setScissorTest:et,activeTexture:Q,bindTexture:K,unbindTexture:xt,compressedTexImage2D:ct,compressedTexImage3D:gt,texImage2D:bt,texImage3D:_t,updateUBOMapping:ie,uniformBlockBinding:Bt,texStorage2D:Ht,texStorage3D:It,texSubImage2D:Et,texSubImage3D:Nt,compressedTexSubImage2D:tt,compressedTexSubImage3D:Xt,scissor:Dt,viewport:qt,reset:rt}}function Vm(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return p?new OffscreenCanvas(y,v):Gs("canvas")}function _(y,v,N,et){let Q=1;if((y.width>et||y.height>et)&&(Q=et/Math.max(y.width,y.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){let K=v?Hs:Math.floor,xt=K(Q*y.width),ct=K(Q*y.height);u===void 0&&(u=g(xt,ct));let gt=N?g(xt,ct):u;return gt.width=xt,gt.height=ct,gt.getContext("2d").drawImage(y,0,0,xt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+xt+"x"+ct+")."),gt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function m(y){return va(y.width)&&va(y.height)}function d(y){return a?!1:y.wrapS!==ke||y.wrapT!==ke||y.minFilter!==Ee&&y.minFilter!==Ue}function E(y,v){return y.generateMipmaps&&v&&y.minFilter!==Ee&&y.minFilter!==Ue}function x(y){i.generateMipmap(y)}function T(y,v,N,et,Q=!1){if(a===!1)return v;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=v;if(v===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),v===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RGBA){let xt=Q?zs:Zt.getTransfer(et);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=xt===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function L(y,v,N){return E(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==Ee&&y.minFilter!==Ue?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function w(y){return y===Ee||y===Po||y===Lr?i.NEAREST:i.LINEAR}function A(y){let v=y.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&h.delete(v)}function H(y){let v=y.target;v.removeEventListener("dispose",H),D(v)}function S(y){let v=n.get(y);if(v.__webglInit===void 0)return;let N=y.source,et=f.get(N);if(et){let Q=et[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(y),Object.keys(et).length===0&&f.delete(N)}n.remove(y)}function b(y){let v=n.get(y);i.deleteTexture(v.__webglTexture);let N=y.source,et=f.get(N);delete et[v.__cacheKey],o.memory.textures--}function D(y){let v=y.texture,N=n.get(y),et=n.get(v);if(et.__webglTexture!==void 0&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(N.__webglFramebuffer[Q]))for(let K=0;K<N.__webglFramebuffer[Q].length;K++)i.deleteFramebuffer(N.__webglFramebuffer[Q][K]);else i.deleteFramebuffer(N.__webglFramebuffer[Q]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[Q])}else{if(Array.isArray(N.__webglFramebuffer))for(let Q=0;Q<N.__webglFramebuffer.length;Q++)i.deleteFramebuffer(N.__webglFramebuffer[Q]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Q=0,K=v.length;Q<K;Q++){let xt=n.get(v[Q]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(y)}let Y=0;function it(){Y=0}function P(){let y=Y;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),Y+=1,y}function O(y){let v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function k(y,v){let N=n.get(y);if(y.isVideoTexture&&St(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){let et=y.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(N,y,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function $(y,v){let N=n.get(y);if(y.version>0&&N.__version!==y.version){dt(N,y,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function G(y,v){let N=n.get(y);if(y.version>0&&N.__version!==y.version){dt(N,y,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function W(y,v){let N=n.get(y);if(y.version>0&&N.__version!==y.version){vt(N,y,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}let J={[ga]:i.REPEAT,[ke]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},j={[Ee]:i.NEAREST,[Po]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[yh]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},ot={[Lh]:i.NEVER,[zh]:i.ALWAYS,[Uh]:i.LESS,[fl]:i.LEQUAL,[Nh]:i.EQUAL,[Fh]:i.GEQUAL,[Oh]:i.GREATER,[Dh]:i.NOTEQUAL};function V(y,v,N){if(N?(i.texParameteri(y,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,J[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,j[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,j[v.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==ke||v.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,w(v.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Ee&&v.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ee||v.minFilter!==Lr&&v.minFilter!==Gi||v.type===xn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===Wi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(y,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function X(y,v){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",A));let et=v.source,Q=f.get(et);Q===void 0&&(Q={},f.set(et,Q));let K=O(v);if(K!==y.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[K].usedTimes++;let xt=Q[y.__cacheKey];xt!==void 0&&(Q[y.__cacheKey].usedTimes--,xt.usedTimes===0&&b(v)),y.__cacheKey=K,y.__webglTexture=Q[K].texture}return N}function dt(y,v,N){let et=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=i.TEXTURE_3D);let Q=X(y,v),K=v.source;e.bindTexture(et,y.__webglTexture,i.TEXTURE0+N);let xt=n.get(K);if(K.version!==xt.__version||Q===!0){e.activeTexture(i.TEXTURE0+N);let ct=Zt.getPrimaries(Zt.workingColorSpace),gt=v.colorSpace===Ne?null:Zt.getPrimaries(v.colorSpace),Et=v.colorSpace===Ne||ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Nt=d(v)&&m(v.image)===!1,tt=_(v.image,Nt,!1,s.maxTextureSize);tt=ft(v,tt);let Xt=m(tt)||a,Ht=r.convert(v.format,v.colorSpace),It=r.convert(v.type),bt=T(v.internalFormat,Ht,It,v.colorSpace,v.isVideoTexture);V(et,v,Xt);let _t,Dt=v.mipmaps,qt=a&&v.isVideoTexture!==!0&&bt!==hl,ie=xt.__version===void 0||Q===!0,Bt=L(v,tt,Xt);if(v.isDepthTexture)bt=i.DEPTH_COMPONENT,a?v.type===xn?bt=i.DEPTH_COMPONENT32F:v.type===_n?bt=i.DEPTH_COMPONENT24:v.type===On?bt=i.DEPTH24_STENCIL8:bt=i.DEPTH_COMPONENT16:v.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Dn&&bt===i.DEPTH_COMPONENT&&v.type!==ro&&v.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=_n,It=r.convert(v.type)),v.format===xi&&bt===i.DEPTH_COMPONENT&&(bt=i.DEPTH_STENCIL,v.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=On,It=r.convert(v.type))),ie&&(qt?e.texStorage2D(i.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,bt,tt.width,tt.height,0,Ht,It,null));else if(v.isDataTexture)if(Dt.length>0&&Xt){qt&&ie&&e.texStorage2D(i.TEXTURE_2D,Bt,bt,Dt[0].width,Dt[0].height);for(let rt=0,C=Dt.length;rt<C;rt++)_t=Dt[rt],qt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,Ht,It,_t.data):e.texImage2D(i.TEXTURE_2D,rt,bt,_t.width,_t.height,0,Ht,It,_t.data);v.generateMipmaps=!1}else qt?(ie&&e.texStorage2D(i.TEXTURE_2D,Bt,bt,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,Ht,It,tt.data)):e.texImage2D(i.TEXTURE_2D,0,bt,tt.width,tt.height,0,Ht,It,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,bt,Dt[0].width,Dt[0].height,tt.depth);for(let rt=0,C=Dt.length;rt<C;rt++)_t=Dt[rt],v.format!==Ve?Ht!==null?qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,tt.depth,Ht,_t.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,bt,_t.width,_t.height,tt.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,tt.depth,Ht,It,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,bt,_t.width,_t.height,tt.depth,0,Ht,It,_t.data)}else{qt&&ie&&e.texStorage2D(i.TEXTURE_2D,Bt,bt,Dt[0].width,Dt[0].height);for(let rt=0,C=Dt.length;rt<C;rt++)_t=Dt[rt],v.format!==Ve?Ht!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,Ht,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,bt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,Ht,It,_t.data):e.texImage2D(i.TEXTURE_2D,rt,bt,_t.width,_t.height,0,Ht,It,_t.data)}else if(v.isDataArrayTexture)qt?(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,bt,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Ht,It,tt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,Ht,It,tt.data);else if(v.isData3DTexture)qt?(ie&&e.texStorage3D(i.TEXTURE_3D,Bt,bt,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Ht,It,tt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,Ht,It,tt.data);else if(v.isFramebufferTexture){if(ie)if(qt)e.texStorage2D(i.TEXTURE_2D,Bt,bt,tt.width,tt.height);else{let rt=tt.width,C=tt.height;for(let ht=0;ht<Bt;ht++)e.texImage2D(i.TEXTURE_2D,ht,bt,rt,C,0,Ht,It,null),rt>>=1,C>>=1}}else if(Dt.length>0&&Xt){qt&&ie&&e.texStorage2D(i.TEXTURE_2D,Bt,bt,Dt[0].width,Dt[0].height);for(let rt=0,C=Dt.length;rt<C;rt++)_t=Dt[rt],qt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Ht,It,_t):e.texImage2D(i.TEXTURE_2D,rt,bt,Ht,It,_t);v.generateMipmaps=!1}else qt?(ie&&e.texStorage2D(i.TEXTURE_2D,Bt,bt,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,It,tt)):e.texImage2D(i.TEXTURE_2D,0,bt,Ht,It,tt);E(v,Xt)&&x(et),xt.__version=K.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function vt(y,v,N){if(v.image.length!==6)return;let et=X(y,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);let K=n.get(Q);if(Q.version!==K.__version||et===!0){e.activeTexture(i.TEXTURE0+N);let xt=Zt.getPrimaries(Zt.workingColorSpace),ct=v.colorSpace===Ne?null:Zt.getPrimaries(v.colorSpace),gt=v.colorSpace===Ne||xt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Et=v.isCompressedTexture||v.image[0].isCompressedTexture,Nt=v.image[0]&&v.image[0].isDataTexture,tt=[];for(let rt=0;rt<6;rt++)!Et&&!Nt?tt[rt]=_(v.image[rt],!1,!0,s.maxCubemapSize):tt[rt]=Nt?v.image[rt].image:v.image[rt],tt[rt]=ft(v,tt[rt]);let Xt=tt[0],Ht=m(Xt)||a,It=r.convert(v.format,v.colorSpace),bt=r.convert(v.type),_t=T(v.internalFormat,It,bt,v.colorSpace),Dt=a&&v.isVideoTexture!==!0,qt=K.__version===void 0||et===!0,ie=L(v,Xt,Ht);V(i.TEXTURE_CUBE_MAP,v,Ht);let Bt;if(Et){Dt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ie,_t,Xt.width,Xt.height);for(let rt=0;rt<6;rt++){Bt=tt[rt].mipmaps;for(let C=0;C<Bt.length;C++){let ht=Bt[C];v.format!==Ve?It!==null?Dt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C,0,0,ht.width,ht.height,It,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C,_t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C,0,0,ht.width,ht.height,It,bt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C,_t,ht.width,ht.height,0,It,bt,ht.data)}}}else{Bt=v.mipmaps,Dt&&qt&&(Bt.length>0&&ie++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ie,_t,tt[0].width,tt[0].height));for(let rt=0;rt<6;rt++)if(Nt){Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,tt[rt].width,tt[rt].height,It,bt,tt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,_t,tt[rt].width,tt[rt].height,0,It,bt,tt[rt].data);for(let C=0;C<Bt.length;C++){let ut=Bt[C].image[rt].image;Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C+1,0,0,ut.width,ut.height,It,bt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C+1,_t,ut.width,ut.height,0,It,bt,ut.data)}}else{Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,It,bt,tt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,_t,It,bt,tt[rt]);for(let C=0;C<Bt.length;C++){let ht=Bt[C];Dt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C+1,0,0,It,bt,ht.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,C+1,_t,It,bt,ht.image[rt])}}}E(v,Ht)&&x(i.TEXTURE_CUBE_MAP),K.__version=Q.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function mt(y,v,N,et,Q,K){let xt=r.convert(N.format,N.colorSpace),ct=r.convert(N.type),gt=T(N.internalFormat,xt,ct,N.colorSpace);if(!n.get(v).__hasExternalTextures){let Nt=Math.max(1,v.width>>K),tt=Math.max(1,v.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,gt,Nt,tt,v.depth,0,xt,ct,null):e.texImage2D(Q,K,gt,Nt,tt,0,xt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),q(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Q,n.get(N).__webglTexture,0,nt(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,Q,n.get(N).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(y,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let et=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||q(v)){let Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===xn?et=i.DEPTH_COMPONENT32F:Q.type===_n&&(et=i.DEPTH_COMPONENT24));let K=nt(v);q(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,et,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,et,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){let et=nt(v);N&&q(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,v.width,v.height):q(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{let et=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<et.length;Q++){let K=et[Q],xt=r.convert(K.format,K.colorSpace),ct=r.convert(K.type),gt=T(K.internalFormat,xt,ct,K.colorSpace),Et=nt(v);N&&q(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,gt,v.width,v.height):q(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);let et=n.get(v.depthTexture).__webglTexture,Q=nt(v);if(v.depthTexture.format===Dn)q(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(v.depthTexture.format===xi)q(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function yt(y){let v=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Lt(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]=i.createRenderbuffer(),At(v.__webglDepthbuffer[et],y,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),At(v.__webglDepthbuffer,y,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(y,v,N){let et=n.get(y);v!==void 0&&mt(et.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&yt(y)}function R(y){let v=y.texture,N=n.get(y),et=n.get(v);y.addEventListener("dispose",H),y.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=v.version,o.memory.textures++);let Q=y.isWebGLCubeRenderTarget===!0,K=y.isWebGLMultipleRenderTargets===!0,xt=m(y)||a;if(Q){N.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ct]=[];for(let gt=0;gt<v.mipmaps.length;gt++)N.__webglFramebuffer[ct][gt]=i.createFramebuffer()}else N.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)N.__webglFramebuffer[ct]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(K)if(s.drawBuffers){let ct=y.texture;for(let gt=0,Et=ct.length;gt<Et;gt++){let Nt=n.get(ct[gt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&q(y)===!1){let ct=K?v:[v];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let gt=0;gt<ct.length;gt++){let Et=ct[gt];N.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[gt]);let Nt=r.convert(Et.format,Et.colorSpace),tt=r.convert(Et.type),Xt=T(Et.internalFormat,Nt,tt,Et.colorSpace,y.isXRRenderTarget===!0),Ht=nt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Xt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,N.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),At(N.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),V(i.TEXTURE_CUBE_MAP,v,xt);for(let ct=0;ct<6;ct++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)mt(N.__webglFramebuffer[ct][gt],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else mt(N.__webglFramebuffer[ct],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);E(v,xt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let ct=y.texture;for(let gt=0,Et=ct.length;gt<Et;gt++){let Nt=ct[gt],tt=n.get(Nt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),V(i.TEXTURE_2D,Nt,xt),mt(N.__webglFramebuffer,y,Nt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),E(Nt,xt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ct=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,et.__webglTexture),V(ct,v,xt),a&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)mt(N.__webglFramebuffer[gt],y,v,i.COLOR_ATTACHMENT0,ct,gt);else mt(N.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,ct,0);E(v,xt)&&x(ct),e.unbindTexture()}y.depthBuffer&&yt(y)}function st(y){let v=m(y)||a,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let et=0,Q=N.length;et<Q;et++){let K=N[et];if(E(K,v)){let xt=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ct=n.get(K).__webglTexture;e.bindTexture(xt,ct),x(xt),e.unbindTexture()}}}function Z(y){if(a&&y.samples>0&&q(y)===!1){let v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,et=y.height,Q=i.COLOR_BUFFER_BIT,K=[],xt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(y),gt=y.isWebGLMultipleRenderTargets===!0;if(gt)for(let Et=0;Et<v.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Et=0;Et<v.length;Et++){K.push(i.COLOR_ATTACHMENT0+Et),y.depthBuffer&&K.push(xt);let Nt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Nt===!1&&(y.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),gt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xt])),gt){let tt=n.get(v[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,N,et,0,0,N,et,Q,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Et=0;Et<v.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]);let Nt=n.get(v[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function nt(y){return Math.min(s.maxSamples,y.samples)}function q(y){let v=n.get(y);return a&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(y){let v=o.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function ft(y,v){let N=y.colorSpace,et=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===xa||N!==rn&&N!==Ne&&(Zt.getTransfer(N)===jt?a===!1?t.has("EXT_sRGB")===!0&&et===Ve?(y.format=xa,y.minFilter=Ue,y.generateMipmaps=!1):v=Ws.sRGBToLinear(v):(et!==Ve||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=P,this.resetTextureUnits=it,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=q}function Hm(i,t,e){let n=e.isWebGL2;function s(r,o=Ne){let a,c=Zt.getTransfer(o);if(r===Mn)return i.UNSIGNED_BYTE;if(r===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===al)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Mh)return i.BYTE;if(r===Sh)return i.SHORT;if(r===ro)return i.UNSIGNED_SHORT;if(r===sl)return i.INT;if(r===_n)return i.UNSIGNED_INT;if(r===xn)return i.FLOAT;if(r===Wi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bh)return i.ALPHA;if(r===Ve)return i.RGBA;if(r===Eh)return i.LUMINANCE;if(r===Th)return i.LUMINANCE_ALPHA;if(r===Dn)return i.DEPTH_COMPONENT;if(r===xi)return i.DEPTH_STENCIL;if(r===xa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wh)return i.RED;if(r===ol)return i.RED_INTEGER;if(r===Ah)return i.RG;if(r===cl)return i.RG_INTEGER;if(r===ll)return i.RGBA_INTEGER;if(r===Ur||r===Nr||r===Or||r===Dr)if(c===jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ur)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ur)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Or)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Io||r===Lo||r===Uo||r===No)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Io)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===No)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oo||r===Do)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Oo)return c===jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Do)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fo||r===zo||r===Bo||r===ko||r===Vo||r===Ho||r===Go||r===Wo||r===Xo||r===qo||r===Zo||r===Jo||r===Yo||r===$o)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ko)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ho)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Go)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yo)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$o)return c===jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fr||r===jo||r===Ko)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Fr)return c===jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ko)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rh||r===Qo||r===tc||r===ec)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Fr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Qo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ec)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===On?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ua=class extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},He=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gm={type:"move"},Bi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Na=class extends bn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,_=e.getContextAttributes(),m=null,d=null,E=[],x=[],T=new lt,L=null,w=new _e;w.layers.enable(1),w.viewport=new Qt;let A=new _e;A.layers.enable(2),A.viewport=new Qt;let H=[w,A],S=new Ua;S.layers.enable(1),S.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=E[V];return X===void 0&&(X=new Bi,E[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=E[V];return X===void 0&&(X=new Bi,E[V]=X),X.getGripSpace()},this.getHand=function(V){let X=E[V];return X===void 0&&(X=new Bi,E[V]=X),X.getHandSpace()};function Y(V){let X=x.indexOf(V.inputSource);if(X===-1)return;let dt=E[X];dt!==void 0&&(dt.update(V.inputSource,V.frame,l||o),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function it(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",P);for(let V=0;V<E.length;V++){let X=x[V];X!==null&&(x[V]=null,E[V].disconnect(X))}b=null,D=null,t.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",it),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new an(p.framebufferWidth,p.framebufferHeight,{format:Ve,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let X=null,dt=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=_.stencil?xi:Dn,dt=_.stencil?On:_n);let mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new an(f.textureWidth,f.textureHeight,{format:Ve,type:Mn,depthTexture:new tr(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let At=t.properties.get(d);At.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(V){for(let X=0;X<V.removed.length;X++){let dt=V.removed[X],vt=x.indexOf(dt);vt>=0&&(x[vt]=null,E[vt].disconnect(dt))}for(let X=0;X<V.added.length;X++){let dt=V.added[X],vt=x.indexOf(dt);if(vt===-1){for(let At=0;At<E.length;At++)if(At>=x.length){x.push(dt),vt=At;break}else if(x[At]===null){x[At]=dt,vt=At;break}if(vt===-1)break}let mt=E[vt];mt&&mt.connect(dt)}}let O=new I,k=new I;function $(V,X,dt){O.setFromMatrixPosition(X.matrixWorld),k.setFromMatrixPosition(dt.matrixWorld);let vt=O.distanceTo(k),mt=X.projectionMatrix.elements,At=dt.projectionMatrix.elements,Lt=mt[14]/(mt[10]-1),yt=mt[14]/(mt[10]+1),Pt=(mt[9]+1)/mt[5],R=(mt[9]-1)/mt[5],st=(mt[8]-1)/mt[0],Z=(At[8]+1)/At[0],nt=Lt*st,q=Lt*Z,St=vt/(-st+Z),ft=St*-st;X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ft),V.translateZ(St),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let y=Lt+St,v=yt+St,N=nt-ft,et=q+(vt-ft),Q=Pt*yt/v*y,K=R*yt/v*y;V.projectionMatrix.makePerspective(N,et,Q,K,y,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function G(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=A.near=w.near=V.near,S.far=A.far=w.far=V.far,(b!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,D=S.far);let X=V.parent,dt=S.cameras;G(S,X);for(let vt=0;vt<dt.length;vt++)G(dt[vt],X);dt.length===2?$(S,w,A):S.projectionMatrix.copy(w.projectionMatrix),W(V,S,X)};function W(V,X,dt){dt===null?V.matrix.copy(X.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(X.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Xi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let J=null;function j(V,X){if(h=X.getViewerPose(l||o),g=X,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let vt=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,vt=!0);for(let mt=0;mt<dt.length;mt++){let At=dt[mt],Lt=null;if(p!==null)Lt=p.getViewport(At);else{let Pt=u.getViewSubImage(f,At);Lt=Pt.viewport,mt===0&&(t.setRenderTargetTextures(d,Pt.colorTexture,f.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(d))}let yt=H[mt];yt===void 0&&(yt=new _e,yt.layers.enable(mt),yt.viewport=new Qt,H[mt]=yt),yt.matrix.fromArray(At.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(At.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),mt===0&&(S.matrix.copy(yt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),vt===!0&&S.cameras.push(yt)}}for(let dt=0;dt<E.length;dt++){let vt=x[dt],mt=E[dt];vt!==null&&mt!==void 0&&mt.update(vt,X,l||o)}J&&J(V,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let ot=new _l;ot.setAnimationLoop(j),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}};function Wm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,gl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,x,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,E,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xm(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,x){let T=x.program;n.uniformBlockBinding(E,T)}function l(E,x){let T=s[E.id];T===void 0&&(g(E),T=h(E),s[E.id]=T,E.addEventListener("dispose",m));let L=x.program;n.updateUBOMapping(E,L);let w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function h(E){let x=u();E.__bindingPointIndex=x;let T=i.createBuffer(),L=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let x=s[E.id],T=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,A=T.length;w<A;w++){let H=Array.isArray(T[w])?T[w]:[T[w]];for(let S=0,b=H.length;S<b;S++){let D=H[S];if(p(D,w,S,L)===!0){let Y=D.__offset,it=Array.isArray(D.value)?D.value:[D.value],P=0;for(let O=0;O<it.length;O++){let k=it[O],$=_(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,Y+P,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,x,T,L){let w=E.value,A=x+"_"+T;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{let H=L[A];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return L[A]=w,!0}else if(H.equals(w)===!1)return H.copy(w),!0}return!1}function g(E){let x=E.uniforms,T=0,L=16;for(let A=0,H=x.length;A<H;A++){let S=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,D=S.length;b<D;b++){let Y=S[b],it=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,O=it.length;P<O;P++){let k=it[P],$=_(k),G=T%L;G!==0&&L-G<$.boundary&&(T+=L-G),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=$.storage}}}let w=T%L;return w>0&&(T+=L-w),E.__size=T,E.__cache={},this}function _(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){let x=E.target;x.removeEventListener("dispose",m);let T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Zi=class{constructor(t={}){let{canvas:e=Qh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=re,this._useLegacyLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;let x=this,T=!1,L=0,w=0,A=null,H=-1,S=null,b=new Qt,D=new Qt,Y=null,it=new Gt(0),P=0,O=e.width,k=e.height,$=1,G=null,W=null,J=new Qt(0,0,O,k),j=new Qt(0,0,O,k),ot=!1,V=new qi,X=!1,dt=!1,vt=null,mt=new ne,At=new lt,Lt=new I,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return A===null?$:1}let R=n;function st(M,U){for(let z=0;z<M.length;z++){let B=M[z],F=e.getContext(B,U);if(F!==null)return F}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",ht,!1),R===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),R=st(U,M),R===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Z,nt,q,St,ft,y,v,N,et,Q,K,xt,ct,gt,Et,Nt,tt,Xt,Ht,It,bt,_t,Dt,qt;function ie(){Z=new hp(R),nt=new sp(R,Z,t),Z.init(nt),_t=new Hm(R,Z,nt),q=new km(R,Z,nt),St=new fp(R),ft=new Rm,y=new Vm(R,Z,q,ft,nt,_t,St),v=new ap(x),N=new lp(x),et=new yu(R,nt),Dt=new np(R,Z,et,nt),Q=new up(R,et,St,Dt),K=new _p(R,Q,et,St),Ht=new gp(R,nt,y),Nt=new rp(ft),xt=new Am(x,v,N,Z,nt,Dt,Nt),ct=new Wm(x,ft),gt=new Pm,Et=new Dm(Z,nt),Xt=new ep(x,v,N,q,K,f,c),tt=new Bm(x,K,nt),qt=new Xm(R,St,nt,q),It=new ip(R,Z,St,nt),bt=new dp(R,Z,St,nt),St.programs=xt.programs,x.capabilities=nt,x.extensions=Z,x.properties=ft,x.renderLists=gt,x.shadowMap=tt,x.state=q,x.info=St}ie();let Bt=new Na(x,R);this.xr=Bt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=Z.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Z.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(O,k,!1))},this.getSize=function(M){return M.set(O,k)},this.setSize=function(M,U,z=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=M,k=U,e.width=Math.floor(M*$),e.height=Math.floor(U*$),z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(O*$,k*$).floor()},this.setDrawingBufferSize=function(M,U,z){O=M,k=U,$=z,e.width=Math.floor(M*z),e.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,U,z,B){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,U,z,B),q.viewport(b.copy(J).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(j)},this.setScissor=function(M,U,z,B){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,U,z,B),q.scissor(D.copy(j).multiplyScalar($).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(M){q.setScissorTest(ot=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(M=!0,U=!0,z=!0){let B=0;if(M){let F=!1;if(A!==null){let pt=A.texture.format;F=pt===ll||pt===cl||pt===ol}if(F){let pt=A.texture.type,Mt=pt===Mn||pt===_n||pt===ro||pt===On||pt===rl||pt===al,wt=Xt.getClearColor(),Ct=Xt.getClearAlpha(),zt=wt.r,Ut=wt.g,Ot=wt.b;Mt?(p[0]=zt,p[1]=Ut,p[2]=Ot,p[3]=Ct,R.clearBufferuiv(R.COLOR,0,p)):(g[0]=zt,g[1]=Ut,g[2]=Ot,g[3]=Ct,R.clearBufferiv(R.COLOR,0,g))}else B|=R.COLOR_BUFFER_BIT}U&&(B|=R.DEPTH_BUFFER_BIT),z&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),gt.dispose(),Et.dispose(),ft.dispose(),v.dispose(),N.dispose(),K.dispose(),Dt.dispose(),qt.dispose(),xt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",ye),Bt.removeEventListener("sessionend",$t),vt&&(vt.dispose(),vt=null),Me.stop()};function rt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=St.autoReset,U=tt.enabled,z=tt.autoUpdate,B=tt.needsUpdate,F=tt.type;ie(),St.autoReset=M,tt.enabled=U,tt.autoUpdate=z,tt.needsUpdate=B,tt.type=F}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ut(M){let U=M.target;U.removeEventListener("dispose",ut),Rt(U)}function Rt(M){Tt(M),ft.remove(M)}function Tt(M){let U=ft.get(M).programs;U!==void 0&&(U.forEach(function(z){xt.releaseProgram(z)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,B,F,pt){U===null&&(U=yt);let Mt=F.isMesh&&F.matrixWorld.determinant()<0,wt=Fl(M,U,z,B,F);q.setMaterial(B,Mt);let Ct=z.index,zt=1;if(B.wireframe===!0){if(Ct=Q.getWireframeAttribute(z),Ct===void 0)return;zt=2}let Ut=z.drawRange,Ot=z.attributes.position,ae=Ut.start*zt,Ae=(Ut.start+Ut.count)*zt;pt!==null&&(ae=Math.max(ae,pt.start*zt),Ae=Math.min(Ae,(pt.start+pt.count)*zt)),Ct!==null?(ae=Math.max(ae,0),Ae=Math.min(Ae,Ct.count)):Ot!=null&&(ae=Math.max(ae,0),Ae=Math.min(Ae,Ot.count));let ue=Ae-ae;if(ue<0||ue===1/0)return;Dt.setup(F,B,wt,z,Ct);let Je,te=It;if(Ct!==null&&(Je=et.get(Ct),te=bt,te.setIndex(Je)),F.isMesh)B.wireframe===!0?(q.setLineWidth(B.wireframeLinewidth*Pt()),te.setMode(R.LINES)):te.setMode(R.TRIANGLES);else if(F.isLine){let kt=B.linewidth;kt===void 0&&(kt=1),q.setLineWidth(kt*Pt()),F.isLineSegments?te.setMode(R.LINES):F.isLineLoop?te.setMode(R.LINE_LOOP):te.setMode(R.LINE_STRIP)}else F.isPoints?te.setMode(R.POINTS):F.isSprite&&te.setMode(R.TRIANGLES);if(F.isBatchedMesh)te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)te.renderInstances(ae,ue,F.count);else if(z.isInstancedBufferGeometry){let kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Rr=Math.min(z.instanceCount,kt);te.renderInstances(ae,ue,Rr)}else te.render(ae,ue)};function Jt(M,U,z){M.transparent===!0&&M.side===nn&&M.forceSinglePass===!1?(M.side=xe,M.needsUpdate=!0,os(M,U,z),M.side=Sn,M.needsUpdate=!0,os(M,U,z),M.side=nn):os(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),m=Et.get(z),m.init(),E.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),M!==z&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(x._useLegacyLights);let B=new Set;return M.traverse(function(F){let pt=F.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){let wt=pt[Mt];Jt(wt,z,F),B.add(wt)}else Jt(pt,z,F),B.add(pt)}),E.pop(),m=null,B},this.compileAsync=function(M,U,z=null){let B=this.compile(M,U,z);return new Promise(F=>{function pt(){if(B.forEach(function(Mt){ft.get(Mt).currentProgram.isReady()&&B.delete(Mt)}),B.size===0){F(M);return}setTimeout(pt,10)}Z.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Yt=null;function he(M){Yt&&Yt(M)}function ye(){Me.stop()}function $t(){Me.start()}let Me=new _l;Me.setAnimationLoop(he),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(M){Yt=M,Bt.setAnimationLoop(M),M===null?Me.stop():Me.start()},Bt.addEventListener("sessionstart",ye),Bt.addEventListener("sessionend",$t),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(U),U=Bt.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,A),m=Et.get(M,E.length),m.init(),E.push(m),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(mt),dt=this.localClippingEnabled,X=Nt.init(this.clippingPlanes,dt),_=gt.get(M,d.length),_.init(),d.push(_),We(M,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,W),this.info.render.frame++,X===!0&&Nt.beginShadows();let z=m.state.shadowsArray;if(tt.render(z,M,U),X===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(_,M),m.setupLights(x._useLegacyLights),U.isArrayCamera){let B=U.cameras;for(let F=0,pt=B.length;F<pt;F++){let Mt=B[F];xo(_,M,Mt,Mt.viewport)}}else xo(_,M,U);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,U),Dt.resetDefaultState(),H=-1,S=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function We(M,U,z,B){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){B&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(mt);let Mt=K.update(M),wt=M.material;wt.visible&&_.push(M,Mt,wt,z,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||V.intersectsObject(M))){let Mt=K.update(M),wt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Lt.copy(Mt.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(mt)),Array.isArray(wt)){let Ct=Mt.groups;for(let zt=0,Ut=Ct.length;zt<Ut;zt++){let Ot=Ct[zt],ae=wt[Ot.materialIndex];ae&&ae.visible&&_.push(M,Mt,ae,z,Lt.z,Ot)}}else wt.visible&&_.push(M,Mt,wt,z,Lt.z,null)}}let pt=M.children;for(let Mt=0,wt=pt.length;Mt<wt;Mt++)We(pt[Mt],U,z,B)}function xo(M,U,z,B){let F=M.opaque,pt=M.transmissive,Mt=M.transparent;m.setupLightsView(z),X===!0&&Nt.setGlobalState(x.clippingPlanes,z),pt.length>0&&Dl(F,pt,U,z),B&&q.viewport(b.copy(B)),F.length>0&&as(F,U,z),pt.length>0&&as(pt,U,z),Mt.length>0&&as(Mt,U,z),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Dl(M,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let pt=nt.isWebGL2;vt===null&&(vt=new an(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Wi:Mn,minFilter:Gi,samples:pt?4:0})),x.getDrawingBufferSize(At),pt?vt.setSize(At.x,At.y):vt.setSize(Hs(At.x),Hs(At.y));let Mt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(it),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let wt=x.toneMapping;x.toneMapping=yn,as(M,z,B),y.updateMultisampleRenderTarget(vt),y.updateRenderTargetMipmap(vt);let Ct=!1;for(let zt=0,Ut=U.length;zt<Ut;zt++){let Ot=U[zt],ae=Ot.object,Ae=Ot.geometry,ue=Ot.material,Je=Ot.group;if(ue.side===nn&&ae.layers.test(B.layers)){let te=ue.side;ue.side=xe,ue.needsUpdate=!0,vo(ae,z,B,Ae,ue,Je),ue.side=te,ue.needsUpdate=!0,Ct=!0}}Ct===!0&&(y.updateMultisampleRenderTarget(vt),y.updateRenderTargetMipmap(vt)),x.setRenderTarget(Mt),x.setClearColor(it,P),x.toneMapping=wt}function as(M,U,z){let B=U.isScene===!0?U.overrideMaterial:null;for(let F=0,pt=M.length;F<pt;F++){let Mt=M[F],wt=Mt.object,Ct=Mt.geometry,zt=B===null?Mt.material:B,Ut=Mt.group;wt.layers.test(z.layers)&&vo(wt,U,z,Ct,zt,Ut)}}function vo(M,U,z,B,F,pt){M.onBeforeRender(x,U,z,B,F,pt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,U,z,B,M,pt),F.transparent===!0&&F.side===nn&&F.forceSinglePass===!1?(F.side=xe,F.needsUpdate=!0,x.renderBufferDirect(z,U,B,F,M,pt),F.side=Sn,F.needsUpdate=!0,x.renderBufferDirect(z,U,B,F,M,pt),F.side=nn):x.renderBufferDirect(z,U,B,F,M,pt),M.onAfterRender(x,U,z,B,F,pt)}function os(M,U,z){U.isScene!==!0&&(U=yt);let B=ft.get(M),F=m.state.lights,pt=m.state.shadowsArray,Mt=F.state.version,wt=xt.getParameters(M,F.state,pt,U,z),Ct=xt.getProgramCacheKey(wt),zt=B.programs;B.environment=M.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||B.environment),zt===void 0&&(M.addEventListener("dispose",ut),zt=new Map,B.programs=zt);let Ut=zt.get(Ct);if(Ut!==void 0){if(B.currentProgram===Ut&&B.lightsStateVersion===Mt)return Mo(M,wt),Ut}else wt.uniforms=xt.getUniforms(M),M.onBuild(z,wt,x),M.onBeforeCompile(wt,x),Ut=xt.acquireProgram(wt,Ct),zt.set(Ct,Ut),B.uniforms=wt.uniforms;let Ot=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ot.clippingPlanes=Nt.uniform),Mo(M,wt),B.needsLights=Bl(M),B.lightsStateVersion=Mt,B.needsLights&&(Ot.ambientLightColor.value=F.state.ambient,Ot.lightProbe.value=F.state.probe,Ot.directionalLights.value=F.state.directional,Ot.directionalLightShadows.value=F.state.directionalShadow,Ot.spotLights.value=F.state.spot,Ot.spotLightShadows.value=F.state.spotShadow,Ot.rectAreaLights.value=F.state.rectArea,Ot.ltc_1.value=F.state.rectAreaLTC1,Ot.ltc_2.value=F.state.rectAreaLTC2,Ot.pointLights.value=F.state.point,Ot.pointLightShadows.value=F.state.pointShadow,Ot.hemisphereLights.value=F.state.hemi,Ot.directionalShadowMap.value=F.state.directionalShadowMap,Ot.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ot.spotShadowMap.value=F.state.spotShadowMap,Ot.spotLightMatrix.value=F.state.spotLightMatrix,Ot.spotLightMap.value=F.state.spotLightMap,Ot.pointShadowMap.value=F.state.pointShadowMap,Ot.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Ut,B.uniformsList=null,Ut}function yo(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=mi.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Mo(M,U){let z=ft.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Fl(M,U,z,B,F){U.isScene!==!0&&(U=yt),y.resetTextureUnits();let pt=U.fog,Mt=B.isMeshStandardMaterial?U.environment:null,wt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rn,Ct=(B.isMeshStandardMaterial?N:v).get(B.envMap||Mt),zt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ot=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,Ae=!!z.morphAttributes.color,ue=yn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ue=x.toneMapping);let Je=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=Je!==void 0?Je.length:0,kt=ft.get(B),Rr=m.state.lights;if(X===!0&&(dt===!0||M!==S)){let Ie=M===S&&B.id===H;Nt.setState(B,M,Ie)}let se=!1;B.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Rr.state.version||kt.outputColorSpace!==wt||F.isBatchedMesh&&kt.batching===!1||!F.isBatchedMesh&&kt.batching===!0||F.isInstancedMesh&&kt.instancing===!1||!F.isInstancedMesh&&kt.instancing===!0||F.isSkinnedMesh&&kt.skinning===!1||!F.isSkinnedMesh&&kt.skinning===!0||F.isInstancedMesh&&kt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&kt.instancingColor===!1&&F.instanceColor!==null||kt.envMap!==Ct||B.fog===!0&&kt.fog!==pt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Nt.numPlanes||kt.numIntersection!==Nt.numIntersection)||kt.vertexAlphas!==zt||kt.vertexTangents!==Ut||kt.morphTargets!==Ot||kt.morphNormals!==ae||kt.morphColors!==Ae||kt.toneMapping!==ue||nt.isWebGL2===!0&&kt.morphTargetsCount!==te)&&(se=!0):(se=!0,kt.__version=B.version);let wn=kt.currentProgram;se===!0&&(wn=os(B,U,F));let So=!1,Ri=!1,Cr=!1,pe=wn.getUniforms(),An=kt.uniforms;if(q.useProgram(wn.program)&&(So=!0,Ri=!0,Cr=!0),B.id!==H&&(H=B.id,Ri=!0),So||S!==M){pe.setValue(R,"projectionMatrix",M.projectionMatrix),pe.setValue(R,"viewMatrix",M.matrixWorldInverse);let Ie=pe.map.cameraPosition;Ie!==void 0&&Ie.setValue(R,Lt.setFromMatrixPosition(M.matrixWorld)),nt.logarithmicDepthBuffer&&pe.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pe.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ri=!0,Cr=!0)}if(F.isSkinnedMesh){pe.setOptional(R,F,"bindMatrix"),pe.setOptional(R,F,"bindMatrixInverse");let Ie=F.skeleton;Ie&&(nt.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),pe.setValue(R,"boneTexture",Ie.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(pe.setOptional(R,F,"batchingTexture"),pe.setValue(R,"batchingTexture",F._matricesTexture,y));let Pr=z.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0&&nt.isWebGL2===!0)&&Ht.update(F,z,wn),(Ri||kt.receiveShadow!==F.receiveShadow)&&(kt.receiveShadow=F.receiveShadow,pe.setValue(R,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(An.envMap.value=Ct,An.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Ri&&(pe.setValue(R,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&zl(An,Cr),pt&&B.fog===!0&&ct.refreshFogUniforms(An,pt),ct.refreshMaterialUniforms(An,B,$,k,vt),mi.upload(R,yo(kt),An,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mi.upload(R,yo(kt),An,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pe.setValue(R,"center",F.center),pe.setValue(R,"modelViewMatrix",F.modelViewMatrix),pe.setValue(R,"normalMatrix",F.normalMatrix),pe.setValue(R,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ie=B.uniformsGroups;for(let Ir=0,kl=Ie.length;Ir<kl;Ir++)if(nt.isWebGL2){let bo=Ie[Ir];qt.update(bo,wn),qt.bind(bo,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function zl(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Bl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,U,z){ft.get(M.texture).__webglTexture=U,ft.get(M.depthTexture).__webglTexture=z;let B=ft.get(M);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){let z=ft.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){A=M,L=U,w=z;let B=!0,F=null,pt=!1,Mt=!1;if(M){let Ct=ft.get(M);Ct.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(R.FRAMEBUFFER,null),B=!1):Ct.__webglFramebuffer===void 0?y.setupRenderTarget(M):Ct.__hasExternalTextures&&y.rebindTextures(M,ft.get(M.texture).__webglTexture,ft.get(M.depthTexture).__webglTexture);let zt=M.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);let Ut=ft.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?F=Ut[U][z]:F=Ut[U],pt=!0):nt.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?F=ft.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?F=Ut[z]:F=Ut,b.copy(M.viewport),D.copy(M.scissor),Y=M.scissorTest}else b.copy(J).multiplyScalar($).floor(),D.copy(j).multiplyScalar($).floor(),Y=ot;if(q.bindFramebuffer(R.FRAMEBUFFER,F)&&nt.drawBuffers&&B&&q.drawBuffers(M,F),q.viewport(b),q.scissor(D),q.setScissorTest(Y),pt){let Ct=ft.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,z)}else if(Mt){let Ct=ft.get(M.texture),zt=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.__webglTexture,z||0,zt)}H=-1},this.readRenderTargetPixels=function(M,U,z,B,F,pt,Mt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){q.bindFramebuffer(R.FRAMEBUFFER,wt);try{let Ct=M.texture,zt=Ct.format,Ut=Ct.type;if(zt!==Ve&&_t.convert(zt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ot=Ut===Wi&&(Z.has("EXT_color_buffer_half_float")||nt.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ut!==Mn&&_t.convert(Ut)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===xn&&(nt.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-B&&z>=0&&z<=M.height-F&&R.readPixels(U,z,B,F,_t.convert(zt),_t.convert(Ut),pt)}finally{let Ct=A!==null?ft.get(A).__webglFramebuffer:null;q.bindFramebuffer(R.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(M,U,z=0){let B=Math.pow(2,-z),F=Math.floor(U.image.width*B),pt=Math.floor(U.image.height*B);y.setTexture2D(U,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,M.x,M.y,F,pt),q.unbindTexture()},this.copyTextureToTexture=function(M,U,z,B=0){let F=U.image.width,pt=U.image.height,Mt=_t.convert(z.format),wt=_t.convert(z.type);y.setTexture2D(z,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,B,M.x,M.y,F,pt,Mt,wt,U.image.data):U.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,B,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,B,M.x,M.y,Mt,wt,U.image),B===0&&z.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z,B,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pt=M.max.x-M.min.x+1,Mt=M.max.y-M.min.y+1,wt=M.max.z-M.min.z+1,Ct=_t.convert(B.format),zt=_t.convert(B.type),Ut;if(B.isData3DTexture)y.setTexture3D(B,0),Ut=R.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)y.setTexture2DArray(B,0),Ut=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);let Ot=R.getParameter(R.UNPACK_ROW_LENGTH),ae=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ae=R.getParameter(R.UNPACK_SKIP_PIXELS),ue=R.getParameter(R.UNPACK_SKIP_ROWS),Je=R.getParameter(R.UNPACK_SKIP_IMAGES),te=z.isCompressedTexture?z.mipmaps[F]:z.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,te.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,M.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,M.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?R.texSubImage3D(Ut,F,U.x,U.y,U.z,pt,Mt,wt,Ct,zt,te.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ut,F,U.x,U.y,U.z,pt,Mt,wt,Ct,te.data)):R.texSubImage3D(Ut,F,U.x,U.y,U.z,pt,Mt,wt,Ct,zt,te),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ae),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,ue),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Je),F===0&&B.generateMipmaps&&R.generateMipmap(Ut),q.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),q.unbindTexture()},this.resetState=function(){L=0,w=0,A=null,q.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ao?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===pr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===re?Fn:ul}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fn?re:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Oa=class extends Zi{};Oa.prototype.isWebGL1Renderer=!0;var bi=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var er=class extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},oi=new ne,qc=new ne,Ps=[],Zc=new on,qm=new ne,Ui=new Wt,Ni=new zn,nr=class extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new on),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oi),Zc.copy(t.boundingBox).applyMatrix4(oi),this.boundingBox.union(Zc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oi),Ni.copy(t.boundingSphere).applyMatrix4(oi),this.boundingSphere.union(Ni)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ui.geometry=this.geometry,Ui.material=this.material,Ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(n),t.ray.intersectsSphere(Ni)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,oi),qc.multiplyMatrices(n,oi),Ui.matrixWorld=qc,Ui.raycast(t,Ps);for(let o=0,a=Ps.length;o<a;o++){let c=Ps[o];c.instanceId=r,c.object=this,e.push(c)}Ps.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ji=class extends we{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,s=[],r=[],o=[],a=new I,c=new ne;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(fe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(fe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Yi=class extends Oe{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new lt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Da=class extends Yi{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lo(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Is=new I,oa=new lo,ca=new lo,la=new lo,Fa=class extends Oe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Is.subVectors(s[0],s[1]).add(s[0]),l=Is);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Is.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Is),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),oa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),ca.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),la.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ca.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),la.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(oa.calc(c),ca.calc(c),la.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Jc(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Zm(i,t){let e=1-i;return e*e*t}function Jm(i,t){return 2*(1-i)*i*t}function Ym(i,t){return i*i*t}function ki(i,t,e,n){return Zm(i,t)+Jm(i,e)+Ym(i,n)}function $m(i,t){let e=1-i;return e*e*e*t}function jm(i,t){let e=1-i;return 3*e*e*i*t}function Km(i,t){return 3*(1-i)*i*i*t}function Qm(i,t){return i*i*i*t}function Vi(i,t,e,n,s){return $m(i,t)+jm(i,e)+Km(i,n)+Qm(i,s)}var ir=class extends Oe{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vi(t,s.x,r.x,o.x,a.x),Vi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends Oe{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vi(t,s.x,r.x,o.x,a.x),Vi(t,s.y,r.y,o.y,a.y),Vi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sr=class extends Oe{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends Oe{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rr=class extends Oe{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ki(t,s.x,r.x,o.x),ki(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends Oe{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ki(t,s.x,r.x,o.x),ki(t,s.y,r.y,o.y),ki(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ar=class extends Oe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Jc(a,c.x,l.x,h.x,u.x),Jc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},Va=Object.freeze({__proto__:null,ArcCurve:Da,CatmullRomCurve3:Fa,CubicBezierCurve:ir,CubicBezierCurve3:za,EllipseCurve:Yi,LineCurve:sr,LineCurve3:Ba,QuadraticBezierCurve:rr,QuadraticBezierCurve3:ka,SplineCurve:ar}),Ha=class extends Oe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Va[s.type]().fromJSON(s))}return this}},or=class extends Ha{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new sr(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new rr(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ir(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ar(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Yi(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var $i=class extends or{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new or().fromJSON(s))}return this}},tg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=bl(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,p;if(n&&(r=rg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return ji(r,o,e,a,c,p,0),o}};function bl(i,t,e,n,s){let r,o;if(s===gg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Yc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Yc(r,i[r],i[r+1],o);return o&&_r(o,o.next)&&(Qi(o),o=o.next),o}function kn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_r(e,e.next)||ee(e.prev,e,e.next)===0)){if(Qi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ji(i,t,e,n,s,r,o){if(!i)return;!o&&r&&hg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ng(i,n,s,r):eg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Qi(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ig(kn(i),t,e),ji(i,t,e,n,s,r,2)):o===2&&sg(i,t,e,n,s,r):ji(kn(i),t,e,n,s,r,1);break}}}function eg(i){let t=i.prev,e=i,n=i.next;if(ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&di(s,a,r,c,o,l,g.x,g.y)&&ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ng(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ee(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=Ga(p,g,t,e,n),E=Ga(_,m,t,e,n),x=i.prevZ,T=i.nextZ;for(;x&&x.z>=d&&T&&T.z<=E;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&di(a,h,c,u,l,f,x.x,x.y)&&ee(x.prev,x,x.next)>=0||(x=x.prevZ,T.x>=p&&T.x<=_&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&di(a,h,c,u,l,f,T.x,T.y)&&ee(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&di(a,h,c,u,l,f,x.x,x.y)&&ee(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;T&&T.z<=E;){if(T.x>=p&&T.x<=_&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&di(a,h,c,u,l,f,T.x,T.y)&&ee(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function ig(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_r(s,r)&&El(s,n,n.next,r)&&Ki(s,r)&&Ki(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Qi(n),Qi(n.next),n=i=r),n=n.next}while(n!==i);return kn(n)}function sg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fg(o,a)){let c=Tl(o,a);o=kn(o,o.next),c=kn(c,c.next),ji(o,t,e,n,s,r,0),ji(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rg(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=bl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(dg(l));for(s.sort(ag),r=0;r<s.length;r++)e=og(s[r],e);return e}function ag(i,t){return i.x-t.x}function og(i,t){let e=cg(i,t);if(!e)return t;let n=Tl(e,i);return kn(n,n.next),kn(e,e.next)}function cg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&di(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ki(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&lg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function lg(i,t){return ee(i.prev,i,t.prev)<0&&ee(t.next,i,i.next)<0}function hg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ga(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ug(s)}function ug(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ga(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function dg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function di(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!pg(i,t)&&(Ki(i,t)&&Ki(t,i)&&mg(i,t)&&(ee(i.prev,i,t.prev)||ee(i,t.prev,t))||_r(i,t)&&ee(i.prev,i,i.next)>0&&ee(t.prev,t,t.next)>0)}function ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _r(i,t){return i.x===t.x&&i.y===t.y}function El(i,t,e,n){let s=Us(ee(i,t,e)),r=Us(ee(i,t,n)),o=Us(ee(e,n,i)),a=Us(ee(e,n,t));return!!(s!==r&&o!==a||s===0&&Ls(i,e,t)||r===0&&Ls(i,n,t)||o===0&&Ls(e,i,n)||a===0&&Ls(e,t,n))}function Ls(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Us(i){return i>0?1:i<0?-1:0}function pg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&El(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ki(i,t){return ee(i.prev,i,i.next)<0?ee(i,t,i.next)>=0&&ee(i,i.prev,t)>=0:ee(i,t,i.prev)<0||ee(i,i.next,t)<0}function mg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Tl(i,t){let e=new Wa(i.i,i.x,i.y),n=new Wa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yc(i,t,e,n){let s=new Wa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$c(t),jc(n,t);let o=t.length;e.forEach($c);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,jc(n,e[c]);let a=tg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function $c(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var cr=class i extends cn{constructor(t=new $i([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:_g,x,T=!1,L,w,A,H;d&&(x=d.getSpacedPoints(h),T=!0,f=!1,L=d.computeFrenetFrames(h,!1),w=new I,A=new I,H=new I),f||(m=0,p=0,g=0,_=0);let S=a.extractPoints(l),b=S.shape,D=S.holes;if(!Hi.isClockWise(b)){b=b.reverse();for(let R=0,st=D.length;R<st;R++){let Z=D[R];Hi.isClockWise(Z)&&(D[R]=Z.reverse())}}let it=Hi.triangulateShape(b,D),P=b;for(let R=0,st=D.length;R<st;R++){let Z=D[R];b=b.concat(Z)}function O(R,st,Z){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(st,Z)}let k=b.length,$=it.length;function G(R,st,Z){let nt,q,St,ft=R.x-st.x,y=R.y-st.y,v=Z.x-R.x,N=Z.y-R.y,et=ft*ft+y*y,Q=ft*N-y*v;if(Math.abs(Q)>Number.EPSILON){let K=Math.sqrt(et),xt=Math.sqrt(v*v+N*N),ct=st.x-y/K,gt=st.y+ft/K,Et=Z.x-N/xt,Nt=Z.y+v/xt,tt=((Et-ct)*N-(Nt-gt)*v)/(ft*N-y*v);nt=ct+ft*tt-R.x,q=gt+y*tt-R.y;let Xt=nt*nt+q*q;if(Xt<=2)return new lt(nt,q);St=Math.sqrt(Xt/2)}else{let K=!1;ft>Number.EPSILON?v>Number.EPSILON&&(K=!0):ft<-Number.EPSILON?v<-Number.EPSILON&&(K=!0):Math.sign(y)===Math.sign(N)&&(K=!0),K?(nt=-y,q=ft,St=Math.sqrt(et)):(nt=ft,q=y,St=Math.sqrt(et/2))}return new lt(nt/St,q/St)}let W=[];for(let R=0,st=P.length,Z=st-1,nt=R+1;R<st;R++,Z++,nt++)Z===st&&(Z=0),nt===st&&(nt=0),W[R]=G(P[R],P[Z],P[nt]);let J=[],j,ot=W.concat();for(let R=0,st=D.length;R<st;R++){let Z=D[R];j=[];for(let nt=0,q=Z.length,St=q-1,ft=nt+1;nt<q;nt++,St++,ft++)St===q&&(St=0),ft===q&&(ft=0),j[nt]=G(Z[nt],Z[St],Z[ft]);J.push(j),ot=ot.concat(j)}for(let R=0;R<m;R++){let st=R/m,Z=p*Math.cos(st*Math.PI/2),nt=g*Math.sin(st*Math.PI/2)+_;for(let q=0,St=P.length;q<St;q++){let ft=O(P[q],W[q],nt);mt(ft.x,ft.y,-Z)}for(let q=0,St=D.length;q<St;q++){let ft=D[q];j=J[q];for(let y=0,v=ft.length;y<v;y++){let N=O(ft[y],j[y],nt);mt(N.x,N.y,-Z)}}}let V=g+_;for(let R=0;R<k;R++){let st=f?O(b[R],ot[R],V):b[R];T?(A.copy(L.normals[0]).multiplyScalar(st.x),w.copy(L.binormals[0]).multiplyScalar(st.y),H.copy(x[0]).add(A).add(w),mt(H.x,H.y,H.z)):mt(st.x,st.y,0)}for(let R=1;R<=h;R++)for(let st=0;st<k;st++){let Z=f?O(b[st],ot[st],V):b[st];T?(A.copy(L.normals[R]).multiplyScalar(Z.x),w.copy(L.binormals[R]).multiplyScalar(Z.y),H.copy(x[R]).add(A).add(w),mt(H.x,H.y,H.z)):mt(Z.x,Z.y,u/h*R)}for(let R=m-1;R>=0;R--){let st=R/m,Z=p*Math.cos(st*Math.PI/2),nt=g*Math.sin(st*Math.PI/2)+_;for(let q=0,St=P.length;q<St;q++){let ft=O(P[q],W[q],nt);mt(ft.x,ft.y,u+Z)}for(let q=0,St=D.length;q<St;q++){let ft=D[q];j=J[q];for(let y=0,v=ft.length;y<v;y++){let N=O(ft[y],j[y],nt);T?mt(N.x,N.y+x[h-1].y,x[h-1].x+Z):mt(N.x,N.y,u+Z)}}}X(),dt();function X(){let R=s.length/3;if(f){let st=0,Z=k*st;for(let nt=0;nt<$;nt++){let q=it[nt];At(q[2]+Z,q[1]+Z,q[0]+Z)}st=h+m*2,Z=k*st;for(let nt=0;nt<$;nt++){let q=it[nt];At(q[0]+Z,q[1]+Z,q[2]+Z)}}else{for(let st=0;st<$;st++){let Z=it[st];At(Z[2],Z[1],Z[0])}for(let st=0;st<$;st++){let Z=it[st];At(Z[0]+k*h,Z[1]+k*h,Z[2]+k*h)}}n.addGroup(R,s.length/3-R,0)}function dt(){let R=s.length/3,st=0;vt(P,st),st+=P.length;for(let Z=0,nt=D.length;Z<nt;Z++){let q=D[Z];vt(q,st),st+=q.length}n.addGroup(R,s.length/3-R,1)}function vt(R,st){let Z=R.length;for(;--Z>=0;){let nt=Z,q=Z-1;q<0&&(q=R.length-1);for(let St=0,ft=h+m*2;St<ft;St++){let y=k*St,v=k*(St+1),N=st+nt+y,et=st+q+y,Q=st+q+v,K=st+nt+v;Lt(N,et,Q,K)}}}function mt(R,st,Z){c.push(R),c.push(st),c.push(Z)}function At(R,st,Z){yt(R),yt(st),yt(Z);let nt=s.length/3,q=E.generateTopUV(n,s,nt-3,nt-2,nt-1);Pt(q[0]),Pt(q[1]),Pt(q[2])}function Lt(R,st,Z,nt){yt(R),yt(st),yt(nt),yt(st),yt(Z),yt(nt);let q=s.length/3,St=E.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);Pt(St[0]),Pt(St[1]),Pt(St[3]),Pt(St[1]),Pt(St[2]),Pt(St[3])}function yt(R){s.push(c[R*3+0]),s.push(c[R*3+1]),s.push(c[R*3+2])}function Pt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Va[s.type]().fromJSON(s)),new i(n,t.options)}},_g={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-u),new lt(f,1-g),new lt(_,1-d)]:[new lt(a,1-c),new lt(h,1-u),new lt(p,1-g),new lt(m,1-d)]}};function xg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var lr=class i extends cn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let E=[],x=d/n,T=0;d===0&&o===0?T=.5/e:d===n&&c===Math.PI&&(T=-.5/e);for(let L=0;L<=e;L++){let w=L/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+T,1-x),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let x=h[d][E+1],T=h[d][E],L=h[d+1][E],w=h[d+1][E+1];(d!==0||o>0)&&p.push(x,T,w),(d!==n-1||c<Math.PI)&&p.push(T,L,w)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var un=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Tn=class extends un{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Ns(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ic:r=t,a=2*e-n;break;case sc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ic:o=t,c=2*n-e;break;case sc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,T=p*m-p*_;for(let L=0;L!==a;++L)r[L]=d*o[h+L]+E*o[l+L]+x*o[c+L]+T*o[u+L];return r}},qa=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Za=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ge=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ds:e=this.InterpolantFactoryMethodDiscrete;break;case Fs:e=this.InterpolantFactoryMethodLinear;break;case zr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return zr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&vg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ge.prototype.TimeBufferType=Float32Array;Ge.prototype.ValueBufferType=Float32Array;Ge.prototype.DefaultInterpolation=Fs;var Vn=class extends Ge{};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=Ds;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Ge{};Ja.prototype.ValueTypeName="color";var Ya=class extends Ge{};Ya.prototype.ValueTypeName="number";var $a=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)En.slerpFlat(r,0,o,l-a,o,l,c);return r}},ts=class extends Ge{InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.DefaultInterpolation=Fs;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends Ge{};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=Ds;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Ge{};ja.prototype.ValueTypeName="vector";var Ka=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},yg=new Ka,Qa=class{constructor(t){this.manager=t!==void 0?t:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var ha=new ne,Kc=new I,Qc=new I,hr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var tl=new ne,Oi=new I,ua=new I,to=class extends hr{constructor(){super(new _e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Oi),ua.copy(n.position),ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ua),n.updateMatrixWorld(),s.makeTranslation(-Oi.x,-Oi.y,-Oi.z),tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl)}},ur=class extends es{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new to}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},eo=class extends hr{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new eo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},dr=class extends es{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ho="\\[\\]\\.:\\/",Mg=new RegExp("["+ho+"]","g"),uo="[^"+ho+"]",Sg="[^"+ho.replace("\\.","")+"]",bg=/((?:WC+[\/:])*)/.source.replace("WC",uo),Eg=/(WCOD+)?/.source.replace("WCOD",Sg),Tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo),wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo),Ag=new RegExp("^"+bg+Eg+Tg+wg+"$"),Rg=["material","materials","bones","map"],no=class{constructor(t,e,n){let s=n||Kt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Kt=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mg,"")}static parseTrackName(t){let e=Ag.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Rg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=no;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);var xr=class extends bi{constructor(t=null){super();let e=new ln;e.deleteAttribute("uv");let n=new un({side:xe}),s=new un,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new ur(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Wt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Wt(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Wt(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Wt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Wt(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new Wt(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let p=new Wt(e,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new Wt(e,wi(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Wt(e,wi(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new Wt(e,wi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let d=new Wt(e,wi(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let E=new Wt(e,wi(20));E.position.set(3.235,11.486,-12.541),E.scale.set(2.5,2,.1),this.add(E);let x=new Wt(e,wi(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function wi(i){let t=new vi;return t.color.setScalar(i),t}var wl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCATYAkADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6C8BfGXwr8Rp7i10m9K3UTECKUhdw9RXeBTnGOR+VflboWr3nh2+hvtKmaG7hIYMGPIHbFfdnwU+POnfEKzh03U5Vg12MY+c8y8elfKYvLZUleGp6dPEKW57QeoHdq4/4ifEvQvhlpb3eqyqbgjMcK8sfwrM+LHxb0f4XaTcTT3EcuqY/dQKc8kelfn74y8b6r4/12XVtUnkcFiY4SflUUsHgJ1HeehlVrpbH6A/DL4vaF8U7R2sZFhvUP+ofCkj15r0YqUABFflf4f8AFGqeHNUg1PS53huYGDHaxG4DtivvT4LfHPS/idpn2a6mS11mBcSbz97A7CqxmXSpu8S6VdNanrscfmtsHGevsK8T+Lf7R2i/DiVLLTkW+1BWAkUjIU981zfx7/aKt/DNlNoPh2USam+VaePonrzivjO4vWupprq5czXU7b3c+taYLLOf3pk1K66H6RfDP4o6N8TNEivbOZI77A8y1yBjiu4O1uQOO9flz4O8Z6z4J1qPVNIldZYz+8jBOGHp1r79+F3xt8PfELw79tvLyKyv7dP9ISRuuB6UsZl8qcuamrhTqprU9IaaK0ie4uGWO3QEu79BXyt8Rv2sG0HxJ9j0Cyiu7SF9krv6+1cl8fP2jJPEd3P4f8OSGLTVJSeTPzEj0r5w8x33BhweS3dq3weWqUeap1M54i2x+mPwx+Iuj/EvQItR0+eMXgA82LIBB78V2ilmGSuB0zX5e+BPHWrfDrW11bS7mRgD88AJ+celfdngr9oXwn4m8LPq2q3aWl3An7y3J+YnHSufFZe4SvDY0jXTR6Prmt6d4U02XV9UmSOzhBLbu/FfFvjr9qbxPP4pF5ogRNHtpMGPON6jvXJ/HH4233xO1x7O1lkg0CElDGDjdivJAxDBVYlB613YTLEo3kiJV2tj9LfhL8XdG+KXh+OS2ZIdRjA86HPfua9ABBGR06nNflv4Q8Zah4I1m31TS7h42jbLxq3DV9raN+1J4Tl8Itq1+xXWoUIFuSRuOOuK5q2WSjK6COIXU9R8a+NdK+HmhXOrarOF8sHbFnl+OK+G9V/aT8X6j4wGtWV48WnQycWu7Csmf51x3xN+KOs/FDXJr3UZmSzVisduvA29uMVxO4ADaAB0Fd2Fy+MI3kRUr32P0/8Ahb8WNK+KegQXFhJGl9Go863JAIOOTXeo6SZZgQye9flL4L8dav4C1WLUtJnkjZSC6Bjhh/KvtTSP2uPCk3hQajdKw16KPa0B/ibHXFVUw7WxPtdD134gePtJ+GujTazrNwu1FJSAHljivg7xj+0h4v8AEfikazYXstraW8nyWyHCuo6ZrjfiV8Ttd+J2vzX2qTH7CGIit1Pygdq477QAAVAyOAfStqVDTUXOfo58Efj9ovxO06Gxu5ks9cRQrRkj5j65zXspjeKQrIRx0x3r8gNM1S+0PVrfVtNuXgv7c7kYMQp+oFfY/hr9tGyt/Bhj1eyml8RRIUVh91jjr0qKuGb+EOc+j/iF8RdJ+GXh+41PVJkEwU+XBn5mJHHFfnj40+N/jDxdr8upQ6lNaW8UhaGJDgMvaue8e/EnW/iTrMupaxcOybiI4M/KozxXJSzbxtftW9ChGK13D2h94fs9ftJWfi61h8PeJJ0g1WPCrM7A+ZjtnNfSTgq2B8yHo4OQa/HiKaa3nWa1leGZSCroSCDnPavrb4UfthDwt4ZfTfFEcl7eQptgkjHGe2TisauGu7oPaH1h498d6V8OtFk1XV50Uoh8uH+Jj2r88fin8cfEvxK1SW4h1GfTbWJyIY4TjdjpmuX+KXxZ1z4p67NqGo3Lpb7iI7dT8oHauHju3fAY5rSjQSXvEymfXv7P37Uc1q1t4a8ZSeYmdsN1IRxxjnmvsy3eK4tku7SQTW0gyrr0Ir8hISCpG7GSBkDkfj2r3r4UftPa38M4fsGoh9Q0wLhM/MV9O1RUw7exUKh95+IPEmk+F9Gn1LV7lILeMZwxwWI9K+CPjZ+0FqPxPvZrCyd7bw8hKKoOC+PauN+LPxo1z4q6m73UrW+mA7o4FOPzFec+cMe3t0q6WGSWopVD174RfG7WPhVqKpFK9zoszASRMfu9Ae9foL4G8b6J4+0aHUNHuUdnXLxg5KGvydEmenQ12nw7+JutfDTVotQ0ydvLUgtC7fKwznpTqUE9iIVNT9TLua3srSW5vZ1t7aIbmdjgYFfE37RX7Sk/iFpfDvhWcw2aEiWdD94dDXn/AMVf2k/EvxPtY7PI0+xA5WHgt354rxkuuOPr+NRTwrW5Uqhs+GvEmp+EdWi1TS7yWK5V9zsXJ3+vGa+/PgV+0FpPxLs49O1F/I1mNQDvY/vD61+dKylTkY/Grun6jfaPfxahp87W93GwYMhxnFbzoJoaqH67ThbS2lurpligiG5pGPGPWvjj9oX9pJ71Ljwx4UuWS3UkSXKNywzzXiviD9ofx34j0b+yry+ZLbZsYo3LCvL0k+XHJYksWJySTWNPCpO7BzuLFI8Nx9o82T7YSSZy5znOa+rP2f8A9qOfSZIvDni6RpbRyFiu2JwnQDJNfJ7knpRjcg34LDkH0rapSi1YjmP2Cs7m11G1ju7K4Se0kUMJEOVAPqa+bv2hv2jU8K2s/h3w3Kj6kw2Szoc7R7V8peGvjj4x8J6HLo1jqErWsqbCWb7o9q4O61C4vriS4uJmlnlOWdjk1lToWK5h2o3s2o3Ml3ezPc3M5Jd2PJr1P4LfHbWPhVqscTzvPosjASQklioPevISATmmScqV6g9jW7pJi5z9bPBHjLR/H2lRapol5DNG65kQtkoT/KvIfj9+0Npnw+06XR9FnS71y4BibY2fKzXwt4R8e+I/BMM8WhajLaxzjayIcCsa7vJ9QvZb25kaS6l+/I53ZrH6sr3BzZc1XVb3XNQnvtSmae8mJLM53YrU8IeNdW8Ca3b6rpFwyNGctGGIVx9MVze8klietMyQeDXRyK1iLs/Sv4OfHfQvivp8MDTLba3GoDxynbk/Q1rfFz4x6B8J9HaS4uo5tVmXEUKsDhq/MjS9VvdBvPtumXT2t0P+WiZzTta1zU/ElwbjV7yS7mPUu1crwyvcrmZv/EDx/qvxG1ybVdVuncOcpCScLz6VziXDRyJNFI0UyHcrx8EEVTAxxmnA4rqjFWsLmZ9f/s+/tQNA1v4W8VuDFwkV036ZNfVHifxzoHg/w9Nrt/qFu9vGnmRqsgJevyZySVPOUORj1rSvPEmr6jax2l5qE01pEMJHuOAPzrnnhU3ctTZ6N8Y/j1rHxa1N1jne10SM/uoFO3ePfmvMFuofJ8t4sL0qmoCDAAA7D0pScjBFbwSirCcrnqHwl+M+q/C3VEe2mebSCR5kD9AO/FffPgr4qeF/H/hoaxb6jHbJGu6aKRgpU454Nflsp2cg05dQv7dZFtb2aGOTh1WQgGuHEYCNZ3LVdrQ+rfj/APtPvdLN4b8ISlYDmO4uoz2/A18qLcOQ8ssjtM3+sZjkuaq8klmJZz1J6n8aDiuqhQjQSSRlOXMXLDW77TL2DUNKme0vIWDB04LY7Gvtf4C/tR2Xiwx6D4okW21NAEWYkAPgepr4a3c0uSGVkd0dejISD+YqMRho1eg6dTkP0O+OH7Q+mfD3TDp2h3Ud1rF0uIzGc7D9Qa+CNZ8Ran4j1ObUtWuHmupm35Y52fSsyWeSZg00skrjo0jbiPxqtI7FuDSoYSFHYudbmLssySoRMMg+vQH1r2r4E/tG6n8ONUg0vWpWuvD8zbVLn7n614G+5lweaEUDbx908CqqUVV3REZuJs72VhjO3viprO7u9Iv472wuWguYzlXjPIqBqbj2rpcU9BXNHWdcvfEE63WqXctzcqMBnOcCs7zeMdqMZpuPaoUVEQu7JGCR9Kns7260yUy2N1JazH+OI4NV6QnmqcVJagTzTSzyPLPK0sj/AHmfksfWmBiBio91GaEktEA9SUyQSCeuKkt7u4s932a4khV/vBDgNVcnim470wuK6AuXxljyTSl26Z4pM0hosg1YGRlHHWpPNJXAYr6hehqOik0pblJ2B1DHjgU9T8vFNNApq60QnK+hID603y0Lbto3UlFK19yLDzTO9GTSHpRYdhQ5FBSPfvCKH7nFRlsfWnAkgVVk9wsPcl8A9qbjFJk0ZNKyWxSYY9qb5Y8zzP48YzTqbuqbAwZyowTk+tQlj60rEk0xqLCDeVPBqKSQMeVyfWlI4phFAAXz2oUkNmm+9OUiqAtJNgDJqU3GVwpqmOaeKYEhOetLUYp1ICQHFLuJ79KZmkzRYCXezcE0KeaiBp4NDYrEgODT2cnvUQY5p+akLBjPWjgUZpKBjwaM00UtABRRRQAUh5paQ0XATpRk0UCi4DqQnFLRincABozSZxSE5ouFg706minUwCmnrTqaetABRRRQAGmEH0p9JketADMGk2ZqRiMUygBpXFNp1I3SgVhmaYRS596bk0rBYawPpTlFFKKYWNYmkpD0pDRcYNUZp2feigAphNPppHNADcml3GkPWigBc0lFFA0FFFFAbBRiigHmgLhilxS5pRQIbigjFOGM0mBQA2inECkxQAm3NGMUUUAFMZiDT6jbqaAELcd6TdSEgdaTKnqaLAIXXPWms2elIVjJzmnYWgCJmppbPapSqmkMa0AQ5oxipdqg9KX5c8igCJCN1TgikHl04baAA0DrTsDtRjFABRjNKBkUuAKAG55pwIpQqnrT/LU96LAR5pd5FS7VoKr+NKwEfmGnq2aNq0YAPFFgHDpRmkJA70mR60WAfkUUzI9aWiwDqQ0lFFgCgnFFHBosA3dTsmkKgGlFFgCiiiiwwHWnU0HFLmmIWmmlDUlABRRRQAh6Uw1JRQBHTT1qRqYelADTTT0p9NbpQAzGRxUZQ560/JpN1ACUopM+9KKANMsAajJzSE8mkoAN+DS+YPSkIBpu2gB/mrRmm7RQBigBaKKKACiiigAooooGFFIWFAYGgQtFGc0CgApcmlpp70ALmjNN3gUGQUALRTDIMU0S0AS00gDnNN357UhNAClARk0wxjFOJzTT0oAiMK5zml8v3pc80uaAIjGc5zSke9OJpp6UAB6U3A9KWigACg0BVz1opNuOaAJQtOqMcU7PpQA7NG7AptFABk04E02nCgBQT60HNAozQAc0ZPrRmloATBPenBT9aBTgTQAmDRUlFAEdFSUmB6UAIvSnUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUANamGpTUZoAYTzTWp5AzTDQA0jPSm7TT84oLe1ADMUAU7rQBQBdppqSm0ANop2BSEHtQAlFGD3pcUAJRS4oxQAlFLijB9KAEoNLg0mDQBGaKD1ooAVTg08HJqI0oJxxQBNTTSAnHPWmFjQAN1ppFOpDQA3FLgUUUAFNPWnZFNzzQAUHOKXikPFADOe9BNL1pChI60ANJpKXyG7GmNBJ60AOoqMxSA0BHoAkopux+lKIm9KAHilFJ5bDtT1Q9aAEopSpFIAaACkNO2mk289aAAUuaQAetLkDvQAop1M3L60u9fWgB4pRjNM3j1oEi5zQBODmiofNU8g8UnnqvegCeioftC0vnrQBLRUfnLQJV9aAJKKb5invRvXHWgB1N3UhcYpuRQBLSHpUPmY6Gl888UAS5zS1H59IJqAJaKj840vnUAPopvmijzFoAU9DTKduBpp+lABgVG1P3GmHmgBuM0mKdil2j1oAaBil24NOCA96d5XuKAJfOWkEoPSsnznHej7Q47E0Aa3mn+7mjzyP4TWWLl/cU4TOR1NAGi1wCOhH1phuAKpeY2ME0maALxnBHFMMhPINVlfHfiniRe1ADmuHXoDSi8fuKZ5x6YpGbdxigCb7WetOW53dqrBCOop+PSgCwJj6UCX2qvuYUeY3pQBOWYkkCkLOO1R+c392jz27igB/mP6UwyPnpTfPb0o85uuKAHea392jzTn7pqM3J9OaZ9oYHigCfzD3B/KhmJ7GoPtUlJ9okNAE3NNJaovPekEr0AOLsD1qOSdgOtO3EnmoZzjrQAomY9DR50nY1EpGKevNADxcSik+2Sjrmilx7UAAvJKabqU9BTsY7U8DPagCI3EuORxQJ5PQ1YI9qeoA7UAVhcSe9O86Q881aWMegpdijqKAKnmSnuaPMmHY1bCqDmpNyD0oAoebP6HFBeUDoavO6qM8VD9rTP3G/KgCBDIT0NL5cjetWRdRn+E/itTRybuicfSgCh5Mp9aPs03rWkST0So2EnYUAU/s8wHU0eVJ71Z/eA8il3MO1AFcQPj0oMD1ZDFulP2P3FAFLyWFBRgKtMD6U3DelAFbDUvze9TmNvSja3pQBBlh60hZvU1YC880EKPSgCvub1p3mtinsoqMr6UAJvajzGFGDQELUAHmNR5pFI0TdakhsJ7lf3a7z7UARecfWjzz61MdHvhxNGQBTG0qdRnGKAEE59aXzyKjFs8Z5NS2tpLfTGKFSXFADhPjmnfaeOlWz4bv1zuiOBTP7JuEO1kI+tAFU3eO1J9r9qu/2dIv8AApp72Bij3GMF+yjqaG0tyopPcz/tQPOKPtOcYGc+le0+Ef2W/GXjbRYdYgAsrWcZjEozmtu2/Yu8dS7mbUdPWJVLEsdpwOveuN42lzctynSla9j56edl/hI+tN+1MOlb/ibwwfDWuy6RJdRXFxCSGaNsrkVlxWJnJCLwOCfSupO+xntuPGnSMMrEG+ho/sq5bpbkVrWk5iYxsmGXvV/ziw6kfSqA5v8AsW5HVQPrSHR5x/droWmPQkn61XZiTQBiHS7gfwg0g02cH5lxW0WbsajZnPBOaAMv+zXXlmHPYUf2ccZzir7E0wk0AUBZMMndR9mPrVw5pMfWgCqLZh3oEDVbAoNAFTyWpPLNWvWkxmgCqUNG0+lWPLb0pChHagCuV9RTTHmrQT2oKcdKAKq24OamW0z9KsQpuxxVjy9hoAzzZCmC1Ga0WqIDFAFQ2mKQ249KtmkoApGEDqK1tC8Ox6gXa4bbEOlVfL82QIi7nPYV2MFqLKxVcYZhk5oA5y68P2kDt5TMVHHNZkliiHC10t3gAgVjSDLmgCh9jGeRUq2qAdKtY9qUD2oAq/ZU9KDaqBxVvZmmsMCgDPeEr2qF8j1rQZCeoqs8XNAFYSN6mneZmpfJppixQAiZartpb72GRkU23i3EVtWdv8wGKALlhpNvLIokjBBrautJsbWJQLRTnvU9hbBFDkdKLlzO+OwoAzJLG1SLckCAn1FZUqxZPyKPoK2b8+Um1awzzyaAIHCDkAVVdhu5AxVqXpVQqDmgBjMpHQVVl9amdcdKiZSTigCISAdKkFz7U0wNnpSeS3pQA9rjPamByT6UeXil2YoANxo3npTgOBTwo6nqaAICc0hGateWtIYlNAFQxlhSeS1XPLA7U7GO1AFARnNWYYM9amx7VNEoB6UAV2gycCur8N2ItkEjKPm55rFig8yZcDOTXWPi0shjhsdKAMvUJt9y2fujtWNd3IBIAq/KcqSep5NY9zzJg9M0AVJU+RpCeT0FdR4Y0xrCzN7MoDyDKg1S8OaT/auopuXMSdc112p+WoEcQxFFxxQBjzX8hZivG71rJuJ5JCQWI+lXLhw2SO1Z0u7kgZHegBpkZFLFjgda9B+Bfw2u/ij4ztVEZXT7STdMxGQRxXC6fpdz4g1C30iyVnu7rG0KM96/SH4L/DC3+GXgyCBIgNRu0Dytj5s9TXnY7E+yjaO5vRjdnoNnpsOlafb6dZkpb2mECqeteI/tPfFaP4c+DZNPsZi2r3RwFz8wB4r1/wAVeJbHwj4fu9Vu5BH5cRZNx5ZsV+bnjnxVefEnxTdazeyF43LLGhPQAmvNweG9tU55m1WfKrI8xt9Puprqa/vpWMsrmQlu+eapal4iLsbW2TAHDEVoeLNTcILK3bMo4wKl+HfgC78Ra9a2CqTcTOpII7Zr6FNU0cXJzy1OpniivLfzgojmHVKyUlPK4xg0SXssTlV5ZeoP8XvUvyXkYmjx6Ee9UA0jjNNIpVBU4NKRQBGRzTTUjetRkUARsvftTcVLSbRQBHt9qNozT9oo20AM25NL5eakAwKKAIjFim7RUj0ygBAooIFLRQAmB6U10z2p9KoyaAHQptHSnv8ANQSeg6UfjQBEeAagYjNWZSMcVVJ5oACaB3pKMFmRVGSxoA1PD1m0szTEdDxW7eXBIx1xxVixtfsGnKSCGYd6yriQnJxQBUuJN3es9xzwalmkycCogMmgBNtOVfal2mngcUAJgUxxU1RkCgCAimNHxmpWGKSgCDaKQpmpGx2ojUs2O1AFizi6V0+mWm9lOKzLK3GF4rrdIgAXkUDsTsBHGcVmGQJuPc1o3rKvGaw7mXHSgCrcSmRzmqUnGasSNgZqrJIKBFSU8VAehqWZxioc570AQspJpMY61KR6UwigBmfelzRgYpKAAqDSbAKeKQ0AJQKKB1oAdRRRQAUUUUAKBk1NHwMVEvWr9vaecVxQBqaTZFgJD0qa8mMnyDtxWjCotrPHtWNNKBuagChdOEGM8is9YDeSrHH98kU68lEpzuxmug8JaYFf7bOpCBePegDds7aLRdOEYGLhhzWbPP8AKyk9etS3lw1zcvJn5RwKyrhyCeaAIZsZKjvVO4+SMuTtU8Y9alklIGQMt/Ku2+EHw6u/id40t7SCNm0+BlkkbHHHWsq1T2ceZhGLbPdf2RPg67yDxjq8QBjJWFHXqCeDX2C2UbzM/u0PJPRVqHTNIs9B0u10+yj2JGirtUYBIFeT/tE/E9Ph/wCEJrG1lUarqMe2IK3K8HrXgTbxFRNnbT9yJ88ftUfF9vE2vJ4a0qU/YrJ/3zL0NfOGoavFp9s8cR/efwipp5LkxT3905luJgWd2PINcExuNYv2IY+Whya9zD0VSgkjlnPmZ0WjWigSarffNgkgH1r6i/ZC8Dv4g8U3HiOZWW2hT5M18pzXhlC25x5XTbX6W/staba2Xw5t2gUZZCWP4VGMk1DQdNan55avbtbyRyAkNjn3FVILg20nmqSIz1WtnWmVxHnpj+QrnLZxNcvbE4V+a6zM3mZZkWROhpnSqdpM0bmBzwOlWn+XkUADcioyaXOaQmgBKKKKACiig0AFGajzSZNACtTaCaaTQA6imZxRvoAfTkpiGpgMUALTDLihmqFuTQAOSxqPBp+KYcCgbVhMYrY8OWq3NyXcfKlZL8gKvLNXY2CQaZp4LunmOM4zzRcRY1O7BZYwflA6VgXUvBAq5bx3mrXvl2WmXVxKegEbAH8cV2WmfAv4ja0qyW/hq4jik6MwyMfjRcdnueYkBuRQq4r3CD9kj4mXS5WK1jH92QYP86fcfsg/E+JAy2tpJgfwSdaBWPDwKWvR9Y/Z/wDiX4fjaS48NvJGoySjE/0rzjV4L/Q5AmpadLZv6SA0AFQhyQ3GcelNtbhL1W8uVWxz8tdX8PPBjePdae2eY2enW6+ZNIoyWA6g0AcWboEFgrMq9Sik4p+fMUOv3T7Yr7C0jwB4Wk8NjUNG0RI9LQFJLjIJmI6/nXkPxR+HOhWlh/b/AIZOyHrc25OfKoA8ZbIIHvWlp8IbkioFTzEjIHytyD7Vs2MCgDigEaFlbAlcCuhVRbQjsaoWcaqFbFS3lx6UFFG6uC7HnmqUmAPfvT3fkk9apzSkng0AQynk1Tk+9Uk0nPJqo8gB60CYyYc1DnFSO+ahJ56UCFPNIaNxpM+9ACHpSU6kxQAopDRmkoAKB1opQaAFooyKOtABRQaWMZagB8Me5xXUaVa8A9qw7WPMgGK6q322tt15IoAr6leDAjXjtWBcyBVPPSp57gMzsTzmsuZ2uiscXLMcUAO03Tm1a/UDJRDk12l7OkEa28PAXg4pNF02PR9O8xlImkHJqlMwLlz3oGiN5PLXryay5pPMbiprqQscis6a4MCFlGSOaG7ahY0LK1lvr61sLWJpri6fy8L2yK/Rn4BfC2H4ZeDrdZURdTuF/eNj5gDXhn7KXwdE7t4r1qHCkb7eOReTjHIr7DASRnaQlIlXOTwABXh43Euo/ZxZ0Uo6XZk+KPElp4N8P3GtalIscNqCRk43nBr80PiH8Q774j+LrvVbon7PDKVhjJ429q9Z/ay+L03izW/+EZ0a5P8AZMKlZXQ9WHavnWyj27Sxyy8GtsHQ5VzW3JqSb0HeJNx0pm3bNwPFcp4cuYrSFkI3O5IzXR+LZ1GnpGrZz6Vx1kyxbMYzivWWxhY09TgETxSKMITmv0b/AGPtX/tTwC8YAAUhcZ68/wD1q/PDVNt1pqOo5FfZ/wCxHqEzWVxZ5OxBzzXFjI+7c1pnybqzjgZwUGK5ewBk1yMKcsxAFbGqyklznrk1zVpJJHqUDofnDZrtMjptetprLUcuMYFPtrnzkXPUU/U3kviGlYsxrKtSyMQOxoA1zRUcUocYNSZGetABRRRQAUGiigCOm1I3SouaAA000ppCM0AJSbadilAoAkiQ8GpO9NDYGKd1GaAIpOtM/GnyKQMnpUcqKsYeThPWgBpkXpnmoxmS4S3RS87/AHI16mvQfhj8I/EvxUv/ALPo1i8FmTh76ZfkABr638LfC/4f/A+0U3EMeueI8ffcb1Vvb0FS5JLVm+GwtTES9nTTbZ8+fDH9mHxn41kgvtSgXSNKGD5s/wAsjL6jmvoSD4IfC3wf5Z1W4OsXUSjCucAtUXiDx14g16QrNN9ms+iQxdAPSsJclcncSeu7JzXmVMaldR1PscDwi3aVeXyPQIviLouhQCz0DwzbQRx8KxiVj+fWqc3xO8RXKMBLHbx/wiPjFZXhPwrdeKr8RwfJCOGc9K9Qm+CdlLbbGu5BNjqDxmpi8RWV1sd1WGUZfP2co3f3nmEnjnxIWyNWmH/As0+Dx94kjbI1hmPowzW3J8GNXXVlh34sQeZc9q761+CWiiAF2MjgfeDd6FTxG1zTEZlk9OK91O/ZHnkXxU8T2yjfLDPH3Vo85p03jzwr4rQWXirw1avvG3zVgGRn3qHx34HfwhJ5kDl7Z/XtXEBFPzOAxaodetRlaTub08sy7MaXtKULea0IvGH7JnhrxFbS6p4C1Yx3rfMLV3Crn04rxXweLn4Q+Mb/AELxxZNp1veRm3W6CkqCeM5r3fTrq50qbz9PuGgkXkY6V202p+Gvi1pTeGvG9lF5so2x3eAGU46hu1dlHGxk+WW58xmnDVXC3qUveieYWN1rOk6XYaFoWu2kvgxWLXErINxU88GvIfjB4u0Kxs7rw74UkaaC94uZmOcGvSU/Yq8Qx6nPaQ+K3g8MuSYgJTynbvWiP2I/DMcez/hMJFuT1Al4J/GuxSTPmo0aj2ifK2nQeZDAoB+RQp966W1tAyqFHI6ivYPEP7JfinwjaSXui3o1e3jBYru5xXm1hbPDcSQXETRXcZw8bAjB/GqQShy7kgtxFbkkYOKx7lgfyrT1G62nZ0xWDcSnBoM2yCQ8NVNjipJZflNUnlOOtAXI5eT7VTb7xp7yFieaj69aBBTSOaU005oAQ0UUoHFACAZoI4pelGaAG4pKdTcGgAoowaKACiigUAOqWMfMKiq5ZW5mkAFAGtplr5h31Y1KXyxsB5xVuJVs7cAEVhalcb2Y5oAz7hvlbPStfwlo3mySXk4/dRHKZrO0yzfVNQigAzG33q7m+MNjaLbwArtGCKAKt/eiUkA/KOlY0smQeaJpDnrVG4l2jg5Y9aE0NOwkjDIBOAe9d38FfhhefE3xfbwpE39lWz4mcjgjNcTo+lXfiXV7bR7GNnurgr05wM1+k/wa+Gdp8MfCsNhGgOoXUYllkA5z3FcGMrqEGjSkuZncaNpVl4f0q00uzjVYrZdihRya8U/aU+LqeBPDL6TYzA6rdEphTyAeK9Q8c+MNO8B+HL3U76UCURnygx5Zq/Mvxd4vv/iB4pu9d1CVi0jEIhPAAPFeZg8NKU+d7G9SUYqyMpzLLLLJdMWnkcuxJz1ppCjp3prEsxJOTTQSWAr6GKSVkczd0Yfix8RooPFc1B99a3fFrHfGCCBWFAOSfbFMR1BONJRfXmvrX9iaQi/uhzzx1r5If/kHL7Yr6y/YowuuvHg8KWNc2KV6bZVPc+V9bOwNiuftD/pCt3zxW94ibhiOnSubtGZriPPTNdJmdnKdrJ67cVlJmO62txuNaZO5oz6gVkXR23m6gDWeIRlcd6MHNSI3mRKe4FFABRRRQAUUUUAIehqIipiM0m0YoAhIoxTyKAvvQJuwzFKBSlaAuKBoUVIOcVHmnBsdeKAGzuqRNJIcItewfAP4Cah8T71dY19GsvC1qfmeQY83HI61mfA34RXHxc8U273MbJ4ftTmeQj5SQc19Z+PfEENpa2/hXw2qw6Rap5TNEAAxFYV6qpwuenleXVMdW9nDRFvXPHNh4e0xPDngy2it7OAbDNGoG7HHWvP4mkklaeZ2ed/vMajgtREeMhfQ1Y6V4tWvKb1P1TAZXQwUEqa16sX3702T7hPenj1pcZ69KyPRO2+FXi610C9a1ujsilOQ56Zr2nWNJfxCltcWOqvbxoQ5MJzvHoa+XJrVJlwQMeldV4R8e6n4WkELlrixyBtJ+4K7cPi+VKMtj47PMjlVn9YoPXqj37+3tMulfSBef6aRtPy85+tGm2sXhC1uHvb3fG/zZY9PauMv/HPhnTrUaraost843bF6gmvK/FPjHUPFc++aR4rftHnrXZPEwUbrVng4PIK2KlazjHrf9Dc+J/jqLxRK1pZArAp5f1xXn4yAM1MygqAQMU3yz1NeTVn7R8zP0HAYOngqKpQGqu8cgn2p5t496hv9YOVx1BoVzCyhV3MxwBXsvw3+HqyFdS1KNXyMojDkVVGjKpL3TnzXMqWDpuU9fI5Cy0Lxv4usY7RZ5bezXgNnkirjfAbVYo/MbUJnkHON1egfFr4mQfDHw832O3WXVZlxa2w/iPvWZ8D/ABP4q8V6XNf+JgqGU7o4VOdvNerHDwvaTZ8JLN8TKLq0oKMPQ4ODUfEnw1vES93yWQONrAsCKj+LPw8074leF/8AhK/DUUUOq2yFpVQABgBzx617n488NW3iPw/fQyxhmjjZlwOc4rwT4E67NZa3f+Hrnd5cxaMxueg5pu9KaXQmq4ZjQdRRtOOr9D5AvLgzu/mLslRirL3yDism4Ix716l8ePBZ8F/Ea/EalbW7fdGO2DXl9yoXpXXc+ak9TPlPy1UcDBq1LVR+hoAq4FGBTjTDQAjDim4p2TQaAGYpwHFIKdQA08UU6k4oAaelJTqQigBKKKKACiilC7qABRkgV1Gk2X7vdjtWPp9p5kgGOK6rctlb4GBxQBn6gSikA1zlyWkkEagsWPQVrapeCJQSevTFaHhfR8y/2hcj5R0Q0AaehafFo1j5jj9+wzz2qjdyB3Zick1Y1G+aW4YgYTsPSsqZw2STxQBVuGwCM8ms6VjGOcs7sFVR1NWXbzCxJwADg17F+zl8HZ/iT4mXV72Ex6RakONw+8RWFeqqcLjUeZns37KHwW/sS1j8W63Epu2OIUZeQp6Gvqa5u0gjmu7hhHBANzSHpiltbVI7aG2tkSO2RAqKB6V8v/tVfGb+ydNPhPR7jF1cgpO6H7hrwPerVLHWrU46bnjP7RXxcl+I3ieTTLGQppWnSdVP+sGTXi8iKD8nSm26+VCoDlpGH7wk5JNP46V9BSpqnBI5pO7uyLHrRHgOSafjNN6dK2JbOf8AFY8xIx6c1zls3IFdJ4lOEA71z1ugwD3oFc3lONO619XfsUSbfEN65PRMfp/9evk9DuslHevqT9ieQnxPPDn75JrnxX8OxpTep8v6xkIdx5PNYkZIYEHBroNZx0PWubZ9rDHrXQZnUxzFo4TnJA+as69ZvN3VqWsStZRsOp4qjqK7CAaANHT5y0IDVcrM0l8q2SMCtOgAooooAMe1JilochIt7HAHegLCYxTSTg/I2Paur8H/AA48ZeN5/K0PRZ5YD/y8smUH15r3bw1+xteMVn8Z+IoLGLGTHavz9MUr2NI0pydoo+WXmhjXmVWP91Tk/lTUledgIbW6dvTyT/hX3ZpXwp+C/hWRVNmNWu4uPMl/iPrXUweLvCWigLpnhO1XbwN0SsMVlKvTjuz0KOTYutrGDPz8t/D+v3ahrfQ7uYHuqEfzq7/whPisLvPhjU8eqxZxX3jN8VJdxNpoemxjtmEL/KiH4saspOdOtB7J0rB4un3O5cM4yS+Gx8Ay6JrVsSZtE1KPH962NUvs11e3MGlra3MdxczIoJhYYyfpX6JD4qtIMXehW0y9xtX+tWLXxl4RvbiK4u/C0EVwhyriNeD68VaxlO1kYTyHGUfs3MrwtocPwZ+E1rpUSAX97tdmUc5I71yECkRkuQXYliR6muj8deJ/+Em1ECNMWyYCD0rnYxtGM152LrqpLQ+7yDALC4bVWkxkg5pjDaKm2570kdrLeuIoYHmkJ4VK47XPclOMFeTIQQDUnbNdXY/DLWJbQ3tyVt7dBuYP1rhdP1aPVZr0W4ylpIYz6E1Uqc4q7Why0sww9efLSldo0AO4qWPjjA59aRexwM+gqRQNpY9B1qUdEmMmgUgvwvrmk03QtU16Vo9Pty6g43ngV1fgrwfJ4tv1L7ktIz8xHfmvcLhNI+H+gXF0yRxW9tGWPTLkDpXbQwjqJSbsj5rMuIfqknRpK8vyPFh8HNcFoJWlIlxnYOh9q4fUoLjRrt7S+iMc6dR617R8H/ijq/xVuLq+k0k2WiRMyQyE58wg1x37SUCaVf6LJAn76+k2Mw9M1vWwkVG8TgyviKvOv7PEW1KPw38MnxHrHnyr/o8BDCvpq2iSCBFChVVePpXGfC/QYtL8OwSFV8yZN2a7S+cQWdxJ2SNj+ldGGpezhc+fzzMJYvEtLZaI+QPizq0nir4t20UbGS3sUbKE8cV6N8Fb2WHVZrYsQqj7h6CvItMcah451a9c5wWUV7F8GrdZNUvJcc1yxk5Yg92VGFLKnGx7sFDRyBujA/lXx74fR9O+NWrujERtPtRc9s19fyv5aTSHoqE/pXx1ot02qfF+S5iOUE5GR9a68T0R4OUt/vLdin+2daJ/aei6ljlIwv4mvle8cmX32jNfV37bV6sGnaHCMfvGWvkWSfzXLe2K6I7HjVElJ2GO+TVd+tSMwqBm/KqIRHTTTutNPWgYmKMUtLigBgp1OApdlADKaRzUmPamkc0AMI9KSnnpSUANop1FADalhTcTUeMmtXSrPfICelAGzo1oscZdhyai1SdeRuwBWnMyW9uFHUCuZv2a7uUhhyzSHaQO1AC6fYtruoKo/wBSpGTXXalPHawC1txtVR+tNtbSHQ9PiSMYmK/Max7qbzXLHn0NAFaR2J5PNULufcNoPHep7mUrnFZ0KXN/dRWNlC813dHaiqOc1EpqKA6HwH4Uv/H3iiz0fToGeLzAJpAOAvev0y8D+ErL4e+G7bR7CNVMSjewH3jgV5z+zv8AB2D4ceF4dQvYgdbv49zAryleo+IvElj4R0a51jVZVjgiUj5zyxx2rw8VVdaXKjtpwio3OP8AjZ8VrP4W+FriUzL/AGtOv7iJevSvzk1fV77xBql1qeoStJPcv5g3Hpmuo+KPxAvPib4quNTllZrWJ2SKPPGBwK4zJP3iMivQweGjTjzdTCpK+ggFLRRXeZhQOtFFBFjnvEwG1T3rBh+5W74o4WICsKHmOgZrWx3W3T7tfUP7FbmPx4654WPJH5mvmLTBmPnvxX03+xxiLx3enPLLtH5Vz4n4DSmj5r1rDKx71y5Hz/jXT6yCqg+vNc2fvfU1unchnWWb7NOth61W1dcDeT2p1szNbRf7FQ6zOGjA9uaYg0g7snPet5Olc/pJASt+E5FAD+KQ4AyenrTtypy5GAO/f6V7F8FfgHqfxSvV1G6LWPhyEhmncY3gdRzSbsUoXPO/B3gHxH8QtWj03QLGWbefmnwQqD1zivrHwR+zn4O+GSJqfjO6XVdXCg/Z16A+m3vXfXXiXQvhxpsfhvwVYxIVG151UZz3O4VwNx5t5O893PJNMxyWc5wa4a+MjDSO59RlPDlTEfvK2kfxO3vvidKkLWfh/T4tNsgMKY12nFcPe3F1qspkvbqWdic/MSMUPnhfShRXnTxE5bs+3wmWYfCq1OIxIAgwuAvp1p7KCBinYAoFYO76noRSWxDgdqXFSFaAvtQacwwA0hXJ6VIeO1AJ9KZL1GDrSil5/D1o/A/lTYuZLcVR8kh9BXunwh0y3OlmZ4Y2fj5iOa8NK/uiP7xA/WvpX4d2qwaDDtAGVFdWAjepqfK8UVXDDKKe5H8T70af4OvWRSSylFCjuRXhvwb+E15f6FPf6kWt0ubhn8sjt619M6jZWV5bFb9Ue3Q7j5nQU6y+yG2VLJozAvA8sggflXrVKEJ7nw2Gx1TDL927eZ494t+FcWnaTJeaefniGT714xbX7XUpt4wC4YK69+tfZV4FNlcCQAoI23ce1fHPwrsV1z4k6qjZMIuGYDtwa4a+GjzpRPp8nzirOjUVZ35VdM+o/AmippGiw7V2vIoJ4ryL9qbX54NH03SIWK/apsMQeSPSvoOFPKWOJR8qqK+XP2j5Zbnxx4cs1wERt3Ndc7UqZ4WBvisfzT1vqetfBW0tdP8AClta22xSo3MB2JFeJ/HjxlZ+Lfid4f0DS5hcfZGxMydEbPINZt42qz28ltY6pNZI5wzRvim/Db4fwW/icRRq8828SyXMnzMT35rmWIU4qCPoZZK8PiJYmb90+uPDlubfQ7KMDpGBU2vvs0PUSOvksP0q3aqlvbxQgg7FApL22W6s54m5WRCMetdqg0rI+LlPmqOT7nw1oU7RatrTkbQrlSfqa+gvgjbMtrcXRU7Xfg+teOQ+F7xPF+qaSbWSNri43LkdVz1r6u8LaFb6Do0FuihQqgtXHh6TVVyZ9bmmLpwwMKUd2Z/xE8T2/hPwjqF5cNhniZUHqSK+YvgFpD6lrcGourZmuGk59M5rS/aA8cv448Q23hjR33WunTA3UiHIPtXffDGytPBfhXUNdvNqQWoYpnjtVVZ89RKPQ87CU1hsFOrP7R84/tmeIhq/jjS9MQ5SzOCB7CvniV1ZjtAGK3PH/iKXxh401XWXZmj+0OE3elYHv2PNd62Pnm7u4xuaYRSscmm5NJiGle4pmKlpuygBmKcBml20oGKAADPFKRSignigCI9aaetPIOc0ygBDSUppKACilHSnKNxxQA6CMyNjFdXp9sIIwxHOOKydOttzDjvWxf3C20QVjjNAFDVNQUbgD8/p61f8O6UlpC2ozr+8cZUGqei6UdRuRdyj9zEcjPetbVL1S+yPhF4xQBU1O+aZ2OeCayWlOfanXEu7pjPpWe1wA3T5P4iegoAbc3OWZSDntgda+uf2WfgU0RPivxBAGOfMs0cds15n+zp8FZ/iV4hh1rUEK6LYvhgw/wBZzX6BW1lBZQW9naJ5UNsNiqOm2vFx+Ib92B1U6atdks9wqCaWVljt4EMm89FAr4D/AGk/jRJ4/wDEMuh6XMw0S3yCVPDMDzXrP7UfxzXTbeTwh4fmzeZ23UiHjaeor40C+SrJncSxYuepJPerweFsuaZE6jWiGtiNgsQ+WlI70Zor1o2SsYXuwooopgFFFKoyRQBzficFivoKw4FLJit/xQpXafWsGA42igDW0oETIh+6Dmvpr9j6fHxLEPH7w7j9M181WjCGVGbjNfR/7H0pj+Kjgou1Isgnsetc+J+C5pBnz34gXaB7DFcn0f8AGus10FkJ7VyrfL+dbpWRmdPZAfZFOKzdSI+UY71o2pAsl+lZV+2X9qYE+lcua6WIosZJOCBuP0rndHAOT712fhrwzd+M9f03RrCN2luJfLkKAnap9cdKaHFczsejfAn4PXHxc8RJNMDDoNkyyvMeA4HUelfW3i3xLZ6JZReF/DKpa2Fsu1zEMbu3amz2unfBjwDp3hXSgkd+6YnkT7xJHfFcpoPhLXtfO61gZgx+aZxXBiZv4Ybn1mR5dSilisU7LoZawKjZXOfU1MD616JD8HdY8nfJJGTjt61xOq6Ne6FetbX8YRv4SO9eXKjVS5pn2eFzPC15ezpSuUSKB0pxXBNJjArHc9JO4UUmaUjAzniiw2FGCMZ71GZ40Ulm4FWrSKe5g81Ld2hJwJPU+lWot7GNSrGG7IZEK43gjNN3CNS2cYH51694F+GMV/ZR3+qM+TyIz0xW74n+F1jqEUP9nxrEyfeA4zXVDA1GuY+eq8TYenVdHseeeBfAM/id1nnUx2YPTH3hXperfC3Sm0x44ogjIp+YV0vhwWOnW0GmwTRGeNcOiEZz71tXX/HpOMfwkYr0KWHhCGp8hjM7xNbEc8JWSZ8Y2dwbjWpNOY/PFPtA9QD1r668LW62+kQKBwFFfIOkxnUPjdqcSDEcT8qPXNfZWlxeTZRL04qMPTUZNo6s9xkq9GHM9Tx/9pfxdcaD4JuNPspWju79dispwa1P2fdKuNM8AWP2qaSWeWMEs7E/zrzH9pq8a98W6LpaYIwCR+Ne/fD+zWy8L2UYGPkGfyrdSfPY82pSjDCRlbVmt4hmFroGpzE42W7tn8K+W/2b4Fn8XaxeMeS7bT6819EfFC8Nj4A12YfeEBH514n+zN4ck+yTaxI5SPcchuAcn1qasU5ovA2jhas2/I+mUwDz16V83ftBaVMnibTdXZc2kS7Mgd6+j0kRxuVlIJ4wc1heLPC9n4q057K7Xg9D3Bqq1L2sLJnPluK+q4lVJrQ+VDcRDy1PLyDCjvk17B4Yso/A3hDUPEmqBUKR7hu69K1NH+D+j+H3N7f3G6OAlw0zAKv4mvCfi/8AE2T4m+I7fwt4Z3Hw5asY72dOFZh2GOorhpYf2Cc5PU+ox2ayzJxw2GWnVnqfwZ+KU2v3eqSa1L5UVw+bQOeq17ykizRhomVkPQivjiCOGK0gtYw0awxhAycHiq7t4qiyNN8QXUUfoZelVTxyT98xxnDNRvmos+tdUj0TTJTqeota2sqDJnlYKcfU183fFb9oubxJLN4V8BpJI7/urm/IwsY55U15rqfhnVdZn3674kv7+AdbYk7T+IrrvCPgO91Hy7LRdM+y2vAMzKBgU3ied2prcVDh/wBkvaYydkhvw38FyXdxDYwq1xPLg3d43O45qr+1d8Sx4a0eLwFobqZSqtO6Hn3/AJ11fxD+J+gfAHw/No+lyx3nimdCrBTkxk9/aviHUdXv9bv59R1OVpr+dmZnY54J6V00KbhqzyM0x0a81TpaQRTPC7O3UketMJHahjjim11njCE0lB60VLEFFFFABRRRQAUUhIB5oLCgAbpUR608nNMPWgAoopQCelACY3cCrVrb7nANRwRkt0ro9LsN7bjgAc5oAuW8CWcHmvjAGax44n8Q3zRLkxZySKualctPcLZWxyx647Vrpbw6BZrBCuLl8bmNAyOaVLSJLWAlVUYNZN46oMDr61JM7B2Zz8xrMmkMz4B4oEypdTEg4ILe/auw+E3w41D4s+JbfTbZW/s1SDPNjAyDyM1znh/w5f8Ai7XbfRdMt3lupZFDOASACa/SX4RfCux+FHhaC0tYlk1GVQ80gXnJHIrz8Xi1TjZbm0Ip7nT+EvDNh4N0a10XTLdYoY0AbaMF2HevN/j/APGe1+Gfh5rO3dX1fUFMShTkxn1rqPi18S7D4YeGbjUrqRftkiZt4ieSa/ODxB4o1Hxt4gvNd1Sd3a6bfGp6JXHg6HtZc8zecklZGZPe3WpXk17fStLezE72Y1Gck9Ke5Bcnuf1pO1e3ypKyOR6sZg0U/FJQkJjaKdn3o4piDHtS4IGRQoyaeBzigDmPFRISOuetycL9RXSeLQoiViPnzgVz1uB8ueoNAGpPnzYAPUV9GfskS7fiXKcAl8J+lfOjjMtu+epr6L/ZDjx8U7TceDlv1rDEL3DSCPCtZAaAe4BrkJfvnnvXYavgBlz90AVx0v3zz3rcyOlg/wCPBcHtWXqX+sAB5xWlaf8AINWsu7JMmT2oKRb0i6EMcgKhnH3R6mvvT9l74cx+BfCuoeN9ZgQT3aBrcOOV+ma+PPgX4Jm+I/xH0rTUi3WysWlHbAx1r9INZ0/+2NS0jwfpzbdMs4QsgTp8vas6jaVkdOFoqdTmey3M3wb4GufGuuXPiDXdxhMmYI25+X8a9W1/W9K+H/h+a+uNkMcKHYg43nHArb0rTorCwhtUUKsShRjjpXzT+0jr76xq2l6JC4MNvMGkCnk/Ws5Wpx5nud7qTzCuqMXaPRHVfB/4reJfiB4iv576zhg0Q5Ftt+/kHvVb9oS5XT9R0h48CRuWHrXSfBjw5HpumyXAICycgdgK8r+O3iSDxB8RLTR7FxNJbR5cochazqvmpXfU7MLT9nmEYUPs7mbktGkh4LDNMEoPXmrFra3Gp3MVlZQPLIQAWUcKfeu7g+C2pukE8kw9XVeK8mGHnN6I+5q5lh8NFKtPU89jcTuEiUux4wozVvVNPu9KjiN3H5Rl+7nqa+iPD3w+0fSIkdLONpyOXOM5rwb4v34vfinaabG+RCoHlrXV9StG7PEjxH7fEezpR08z0XwD8M9PvrCK/vk3s3IWvRL7QtJsbDEkUMFnbfOzNgKPfNP8KW/2bRLVG4yBxXlv7SGvyxeGxoMErRnUgELIfm616FOnClTVj5XF4vEYrFSXNpfQ9l0ueznso5LKaKa3I+V4myCKz/F+uL4d8O3uoEgPGh259cVi/CrQE8N+BtKtFJJEKkk9STXN/tEX32XwDMAxUuSODWjn7tzz4Q5qyi31OG/ZstbnU9S1XX724mklmmcKrsSAM9hX0RqEnk2Fy+fug147+zbY+R4Nt5COXBavU/FrTR+Hb3yFJl8s4A65xU0fegzpxtOMMUoLpY+V/hBZnVvil4kvup88ru/Gvr6FdoRfQV4B+zb4LvbKz1bWNTgMFzc3b4Vh1HrX0Ko+cmqpQ5btk5jXVVxjHofHvxhvvtvxqjjBytuqg19ReFXVtFtQvQIP5V8j+J4X1X4r+JLtXG6NwijPoa98+H/xE0qOxisdQuEt54wF+cgA/nXNGrFVGmeti8JOWBhOCvY9J1vTbbWNNlsr1N9vN8rL614l8a/EVh8LfBceiaAqw3t5KECRnDKD345rpvH3x78KeDrF1ivEv9UcYhtYDuLN9R0r502ap448QTeK/EqOjTDENmx/1QHTinXqwgr3uzmynLa2JmlJWjfU7fwP8V9W8C6MlrqkU18cmQsOW5rdvP2rrQx+VY6BfSXvQLLGVTP1rgJ42eXepz7GnO7gAKFB7jArgWNqLRH2lbhrC1dbWZR8X+LPHvxTZrTVZxpGgy43W1u+RIPQmjSNItNCs1tbGARxj7x6lj61fUjHvS1jUrynuz0cBlVDBr3EKhOanDBR8xwOmTVZtuDubauOtbfhXwvceLdSSPJTTIMPLMfu8dazhTdWSSOjG4iGHpupU2R0Pw/0KNobnXdXjWLT7ZS2ZOA2PrxXiPxJ/aw1zVLq60jwfaJpumpuiM+BlgOMgirv7S3xmhnZPA3hWfbaWuPPniON/YjivmNyEDbMqrZOPrXvU8OqSXc/KczzKpjK3O3oNv5p769ku724kurxyS0srbifxqJnJBBNN3AHBpHbI4rdtnl6MbRSAmgtTuO4h60UUUhBRRRQAUUUUAMbrTTSk80hoASiiigAqWIZNRgEnAq7ZwbjzQNFqyhMkgVR81bl3KLK3Eaf65/lX60aZZJGhmY4YDgetWBCFk+13A3FhhE9CO9AyCxsk0mD7TJ818579hRJM7AvNy57+lSPJgNNMwy3QVjX2o+YNoHFJ7BYguLjLMM8dveoLe2ury5gtrKNprm4kEYRRyM96gkaRli8tCzyttRQMlj6Yr7L/Zj+AyaPCvi/xBAPtVyo8mBx9w+uK5a2KVKNupUI8zO5/Z3+Cdr8PtCt9V1KJJNbnAJZl5UEf/Xr1jxJ4psPBuk3etaxOYobZcgMcF+O1aF1fwaXZz6hqFxHFYwqd7HgLivz1/aH+NU3xQ15tN06V00OzYxHHSTHevHp0J4mrzS2NqloLQ5n4qfEXUPit4puL66lI023fFtEDkFea4pvl4HCjoB0FU3YgosIICjAHrXo7/CHXrXw3pWsy3CSf2nzBbDBP5179OnGnFKJyym5HCBGPQZp2xwPmQ161cfADXfsljdafqdrfSTjM8EI+a39mqeT9n/VhqdvaWmp2dzFKgLyLLkI393rwa0CJ44wYdQaYa9T174Oav4YF1Jq9yEtIY96zRjfu9q4rwT4LvfH39oXUF1HZaTpx/e30/3FHuDQNnPmkXrzXbxfB/Ub/W4rXRNe0/VLKcZkuojiOED1rcuPgBqYslvvDup22tKJPLmS3l3+We/AoEebJESMgVIkRDDNej33wans0W2s9bW510AF7BcfLntTh8JJDp+6bxLaW+rx/f091+dT6ZoA8S8WxRkJkHIrlRIo4FeqeP8A4aazpmraTYvNFMl8BmSPomawPif8MZ/hvqOn2zym4juollaQcqPagDn75vL+yMB0HT1r6K/ZPk2fFKJsfdjUY9Ca+dtTVlntOMgkCvoT9lGMn4oQjOfMIArHEfAXBnh2oNuBY/xc1ys3+sP1rptTO1UGOSormJz85rVGaOksRu05e1Y95IIn3npz1ratBtsFHqK53V0aaa3iHWSUAUyj7b/YX8HR6X4d1XxpeRZbLLCWHT6Gvqv4V6fJcLca1dIRc3EjAZ7LnivLPhxpbeFPgT4Z0+FRHPeSAsMcsDzX0J4RshZ6FbREYO3NQ/ekd9/ZYd2+0ad5crY2s07n5YlLEmviea/bxR4w13UpxuVLgiOvq74n339meC9SlDEFgVB/CvkfwPA6abd3Bc7p52bkVx42pyxPb4Yw6nV9o+h0GqeJ/GltY/YNB1UafBJwWK5IFUfC3hMW10g8yS81a6Y+bc9znrWgYsyBiSSPyr1b4ReHftF5JfzqpCH5cVw0ZTqyUeh9LmEKGXwliEveZ6B4K8J2vhvTI3aJBOULMxHPSuH0H4x3niX4nN4esLNBpUAKzXHfcK7H4seJB4X8GXd2TtkYGNMds14b+zlbNNql3eSjM8shfcfevUnJQahE+Io0pY2FXEVeh9UkhN3y/L618eaq51n49XrqpxG4GfpX17ev5UErFhjb+XFfJnw8sJtW+LGrXpQsiznDfjV1tFYnK/dm6nZH1bpsW2zt0IONtfOnxzm/tH4i6PYA7gm0kV9KWxKIqnoozXyvrV4uufHmZOogIWprP3Eicuj7SvKXa59QaXF5OmWkX92NR+leDftVXrJomnWasQJWJIFfQEIUQwqOoAr5m/aZk+2+J9Gst3Cx5x7mqnpBmeXx9pjIrzPUPgVF5Xgy0ULgKgr08rvGCAR6EV84/Dz4hQeBrYWeqSEWIUHdjOK1vE/7TWgW+nyp4Zjl1XUyMKgQqFNZ0asVBXZ25rl2J+tycYaM9zAhX91HtUg5KrinXEvk2s0h6IhP6V5H8EZ9c1q3vNZ8QzE3NydyQZ/1Y9K9J8U3QtPDWqXGcbIHP6V0cycbo8V0ZRqqEtz400q7bUPEviG+YAu10wB/Gp9T0621oEXcbMOnyuVNZXgpzLYXdyes1w5z+Nb4GO9fP1Heo2fr2WUYrDpNdDM0nwxomjSiS1syzg5DTHeQfbNb73Hm8nPsOwqsBmlFRKTO+FCEPhViTrTGU04dKDWd7Gq0GjgUFlB5IFBwv3iBXQ+F/BN14suVP+psYSHkmbgYq6UJVJWicuLxdPC03UqMreHPCtz4tvltIlIhQhpJTwAtZfxr+NGn/DvR5fA/hB0kvSuy7njwding81F8ZfjjYeDbOXwh4LCyXZXyrm6Q/czxnNfI9xM7M89xI0t3IcvIxySa9vD4ZUlrufmmc5xPHT5fs9iAuVdyXLyuSWdjknNQOx5zSF8H3qNmJOTXWfPDGGTSAYpaRjigBaKZuNLuoAdRRRQAUUUUAFIeho3AUFhQBGaSnHk0UANop1KqFyB2oAktovMccVv2VkSQemKrWFmWwMV0VtFtjORjZQMVRFFhplzs5VPWo5JHlZppD8n8Kf3aV2Ejjf8AdFZd/f7flTpQMr39yJGIZsADIrG37lLEj2Xu30p9zMmxpJT8qc8da93/AGdfgHc+P9Ti8R61btFo1m3mRo44lH5VlVqxpopLm0Ok/Zn+AkviK7i8S+JITHp8TCW0hkXO88etfa04hgt38wJBZQrnPQAAUy2s7ezsxa20SW1hbLwRwABXyD+0t+0ObiSXwj4VmLKvE9ynQjoRXiy5sRPQ6I2gjH/aS+Oz+KpJfCuhTbdJX5ZpV+8zCvm6KGOGPyYwNnBLepoVQpYgli53EnqTTxXsUKKhGyOeq+d6EM9sJoHReCw4PpXpOgfFdfDvhiCy8meW8tMCJpWLKg71wFuiyXcEb5w7heK+ltO/Zt0/W9Nt57Xz2eRAzY5GSKtz5XqcNfEwoaM5K6/aX0Xw3DA3he0n825UfbvtXQk/e21yvi/47aTfWVnZ+E4DaRrOLi7lxgsT94V6e/7IDyMdiyfRlp0X7HEn8duT/n6U1UizFZhF7J/cczpH7RumGyurPUdGN9bum2NiQe3ua4vwl8SLDQj4g0/VrOU+G9afc8NuvzqK9mt/2NY85aOVSPQ1qL+yEnCl5sAf570vaK+iD683tG54ppfxc8O+DNVMPhzTGHhuaMpMlyPnOetWtN+OemeCYDbfD3S0t7aWUy3cn8UgPUAGvZG/ZDi2bf3jnsCKqN+x7Hzm2b/gJx/Sl7TyD6+1vBnkmpfFfwaLw69o/h+4i8UTYL3HnkojepWorz47+F1i+1z6Ndt4ifmWYjMbH1HtXsC/scQA58uVc/3TUp/Yzt3iyGfP+11/nTVRdgeYR/lf3HzbrH7RQvr9Ll9Kt5fLXaiNxg+tY+v/ABYk8f6Rb6ZqelQxzxPuSZDnjsK+jrz9iWKYkhcDqetcP47+BOh/D7w5cXCANfW/86PaK9hvHU1ZS0ufP+pbVmtxt5Q17p+ypJs+L+nxYOCm/j614Hf3H+mwhlJJxX0B+yw8f/C2kODlI1A+uCamvrA9Cm1LVHg+sjDYx0Arl5kO4n3rrNW+eMH2rlZ+A1aIR0elsZrDefpVXTLQah400K0xlXuVyPXmrGjHNisf41c8FgJ8UvD4Yjasy/zqmxpXaR+nV/aJb2/gfSkXEaIrFfwFe02cYjtowOmK8a126Fv4v8MqcYS1XjHrXs0LE26fQVlF6s78SuWjA8p/aDvjb+BzGDgzPjFeB+G4lg0K3/2iTXs/7SQkPhq0Vc7FfLV5t4S8JXmu6XbJBKI8R7ue9efjYylKyPp+Gp06NN1KjskUklQAburMAK+lPh3YJaeHomA+Z8GvnPStAubnxUmjyAs8bguQOMV9XadaJp1jBbJ0CingKUottlcVYuE4whB76niX7UmoND4b0qxQ8XE/P0qP4AaZ5Mc8gXCjoax/2oJZJNX8NWqozLu3HapPOa9d+GHh8aH4fi3LtaZAx/GuuUW6tzxqNeFHLpxvrJnUavBLc6XdRQEGd1IGfXFeefB74bXXhGC/udUKte3M7OMdlr1M7UywYAdSewrgr34yeFtNvdRt7vUYkWw/1jq2f0rWdm/ePGp1KrThBHdzuLeKR8dATXyV4HZdS+Mus38rARRznLHpwa6Txd+09FqsVxp3gvSLjUZJPkFyRtCe+K820bTr2PT7xtSneO7vXMjtFwwz2zXHiasI2sz6LI8trT57pq6PoTxd+0L4O8KSNaxXX9p3yA/6PZ/MwPpXhGpeJNR+JXib+3tQsTZ2aLthiIIbHuKo6f4Z0nQ5VmtrWN7hzuNw4zJn3NbvnuTnd9axqYnn06HvZdw6sNUVWWrILlVnkyQCMY5quLaC3gYxQRqznlgoBqw5ySTTJBu8pPV64+Z9GfTVIxUObsfRnwntfJ8Oo7ElmOcmrHxf1D+zPh5rco6mEqPxFaPgG1+z+GbUdytcL+0pqIsfhreITh5iFHvXtR92jqfk1X97j9P5j508FxeV4ZtT3fL/AJ1vis/QofI0LTou/kqfzrSA5rwpaybP1nCR5aSXkIBTgMcmigsFGWPFS/I6ROvBNI0iRjk/T1NNeRVQM2eemO5rvPCfhG3WybX/ABEy2+l24Eg3cbgKuhSdWXKjgx+PpYOk6k36LzKng/wDJrx/tLU3+yaNDiQu5xkf4V5z8a/2gRH5nhHwSVhs4v3dxdxn746cGsr40ftA3Hi0S6B4aBtNCtj5bupIMor5+l2omBnHqa92jho01ofl+Z5pVxk+ab93sVrqZonYtMZpW5MjdTWezs/WprnrVYmuix5NxCc0w0pJptIGFIRmg9aWgQ3aKXbilooAM0UUUAFFFFADCCKbzT26U2gAooooAMEnArQs4MkE1ViTcRW1p1q0r46CgDX023CgnFWpODnOEFNhVo02kYVaztWvvk2IeBQNkWp3oXISsCW5UKzyn5F6mpmPnAvI+Ix1PpXpnwY+Ceo/FTW4pZIZItBhYCaRuNwyOlZVKqpq7BRcti18A/gpf/FDWk1C9t3j0C1fLs6/fGa/Q/TNLs9E0230ywjS3s7RAq44BA7mq3hvw7p/hXSbfStKt0hsrdNjEKBu9zXgX7Qn7QVr4TtLjw34cnWTV3yk0inOxT6V4Up1MTUtHY6YpRRlftMfHz+xbabwj4ZnDXbj99NG3QdxXxkBIJGkzvkkYs7nrz1qSWSe6uZLu5naW7kYlnY5JyaQ9a9vD0FRic9SV2OOMnFKKaKd2rolqRcfatjUrAesqmv0o+Cl0ZdCtQeQUXH5CvzVgYf2ja7iB8w61+k3wQjC+HrAjvHmsZSaZ5WKdq8UezbVIHyj8qDGnoPypR0orTzPUsN8tewFKAPSmyOFXIIGKwdS8ZaTpEgiuLlPNIzgc1DnFbkTqQpq8mkdAAPQUEKewrhD8V9DWQr5wNbum+MdL1cAQXC7j2JpKrB7MyhiqE9FJG8qClKg8YpscgcZBB+lPJ5q077HQkmtDL1OTy2UADoea+P/ANouFRo173eRyx/DFfXGusRtwevFfJf7Q7CKx1IvyqIelZ1Gm0eXj4JzifB2qyKt3bvzgyYr3v8AZXuFf4rWygnMzY/LFeBamQ8luwHGc17n+yOyP8XrFScbE3/rU17qJ6tJWikeM3UvmWin1Fc3PnmuhdCbND+FYUoyxHpW6B7m1o2fsrMaseH5xafEPQbluB9pjX9aZo6/6Cx9TWNqd09pqNpdR/etpA/P1oeuhSep+pfjqSOPxB4T1BGJW4SOIf3cYGa94s2LQKy8qVAB/CvmmHU/+Eu+DXhfX4Cr3NhGjNs5wRivdPAPiO313w/aPHIrSIgDjPOawjNKbTPWxVNzwkJx6GH8bPD1x4h8E3MVoubhMNwM8CvDfDWpakIIIdPST7Wi+SUHbHevraUKylHKlGGCp5zWHeWug+GoJNTuYrW0gXmWZhjHvUVaPPK97GmWZr9Upum4c1zzJrNPh34N1TxPrDp/azw/L659q0/gd4zuvFugyXeoyfvm5jDkbiPpXhHjTx/dfGTxSILNDD4a0uQxsx6Te49a047i98OeVLprvbNGNsbEEL7Vm8Qqfuo9OGVVMbRlVqu0nt/kfTniGw0OS3fU9XhhaO0QyGSTHyheTivmhfjbrPiDxzd6roI3eGraMxIjdGK+lcr4gg8YeOZhH4l8RgaaORBbkpv9jW7pWmW2h6elpY25jtVHDKvGfeoqY28bJamuW5C4v/adUL4r+MvxB8b282kaTYW+m2kvyyXROHA9q5Sz8E6XDbImoCS7u3/187Py59TXUzybjy6k/WoVGTXHUrymvePqsJk+FoawSLEEVvaRRxwRxosYwuxQOPr3pZH8zrz9TUIGDThXPJtnpQpwhpFCEYHSgN7U7FNxzUXNVYU+tSWsLTX9uj/dBzmmAc+1K5YrtVyvGAR6VonZpmFSLmnFHr2tfHbwb8PtItbK8vTcX4TC29uvmHd6H0rxDx18QPFHxmKWsmn/ANkeHVYMJGbJkI9u1VrXw7pFhcyXSWSNdudzSyfNmtQSPL8uML2A4FdksZeHKj5vCcNwpV/azd9bjIUWKOKEdIkCAgelS4xSbSvagnHXNcDd2fVQjyqy2E4pzgCIs/C9qaSuMk8V0vgbw83ijVY1lGLG2bc5PQ1rSg5ysjnxmJhhqTqSexo+CfCUAtZfEOuERaTaDzRu74FeFfGX40XnxAv5NM0h/s/h2ybaqLx5o9a3v2h/i6+s6gPB3h5/J0izPlXJQ4DHFfPU8qRoqRgKI+OO9e5QoRprQ/K8yzCpjKrnPbouwThUUheAKyZrrOQKfPcnBGevFZ7GulnlS1Fd8nJqInNBoqbkiGkNKfSm4oASnCjbRQLqFFFFAwooooAKKKKACiiigApqjceKeBk1dsrFmnXAzmgCfTtOe5dcLxmuvis4rWNVZRuAzU+mWkdhbea6jJHesbVtTzll4z0oC9hmoagGYqh5HWudubnedpYDPc9KGkZmdi2M/wAR7V6L8HPgrqfxa1VC0TwaHHIPNuMdcenNYTrKmrsqzZF8FvhFqvxY16JTFLDoMbYmnK9SD2Nfov4b8MWfhHQ7XSdMiSK2jUIzjHJ9aTwl4U0vwfoUGjaNCIoY1Cu2ACx9TXiHx+/aAtvBdnPoGhTi51uceVIykYiJ/GvGqVamJnyrY3ilFEP7Qn7Qdn4NtJfDOgTfadXlzHNJGf8AVg9+K+IrmZ7u5kvLmVpb2UkySMck80lxcT3l3Pf3rtLqExJlkf1qM9a9XD0I0VZGUpXHYptOoNdSZkxBSHOaBTjTGiuU8y9s8nrIo/Wv0x+Bw/4klmv9yFf5V+bNugbUrEnoZAa/Sf4FAf8ACPwP/eQYrKpujy8XG2Jgj2Rc4HpSSvsQn0pVcEYrH8T35sNKmlQ4ODzV3tG56FSXJByPPPHvjq4jZ9P00kMR80o7e1eXLbyTsZJnZnJySSatveyXcsrsc7mPWnrHtHFePVk5tnwmLxVWtNtvRFWOyhVwSgJ96vW8bRTIYGMTryNnFRgYNO3lTuHUVjFcrvc5FJrVHpPg/wAaPFKtrfyHk7VZj1r1COXzQD2PIr5ikvSkkc2CXjORg19B+E72S+0W1mlBDsoJzXp4ao5Kx9Vk2MlUXJLoO1xCJIznOa+Qv2gQ8mm6qeuTx+VfYmrJ+8V25QAj8a+TvjvbY07UQ46K7/yravpFHRmcuVq3c/P+6dZ7hQnRWCn2r339laNYvi0hU87Qn6GvCraENdOxHy+YSK91/ZUw3xZthkbnfP8ASnVV6dz16L91HicrD+zowP4lzXPyAfN64roboBbCH/dH8q5y4+VT71qtgOm0cY07Nc7q6efKykcE10OjsDp5HrWTqSCK4Ge9VeyBn2F+xf8AEqzl029+H2tOu24UtE7sAAew5NerXt7rvwo16WK2kZrdnLqCMhlPQDtXwf4eElm1tf2krxXcLB0kViMEdOlfZPw3/aL8PeLtKg8P+PojHdwgIl8eN3YHNc1Wjz+8nqexl2PjQbhVV4vdHoE/7SurxWzRx+Grh7ojCOV+QH3ryfxRqPjH4mXf2jxTqS2ekg5WwtW+WQejAV7AvgfQNSUS6V4vtBZP0zcjP6mqs8Xw18ABrjXtfgvJoxvCiQPuI7Vhas1ys9pVMpo/vaau+xQ+GfgM6mYzJbLZ6NagEs3y5A7nNHiL9o74d6b4nuPC1xYm4tbXCm9jI2enavDPjB+1df8AiaB9A8G2n9l6NyrXAIzKucHoa+fo2JD7wJXc8u/JJPqa6KVGMVqrniY7NqmIqc0NEtj77T4mfBtUFwL15CORGGyR7YrBv/2oPAlvdnT20YjTDwZPLO418jWOi2lpaid7aMSnnp2p894sSAq+9T0BHSn7GL6HJPMK8tXNv5n2JZ+Pfg14qCtDqyWMrdpFxitmLwt4Ev8ABsfF9kc9PnxXwJc4nkJ5X/dpIzLCf3d3cIfZqn6rTe6OulneNpq0Zn6B/wDCtdNmObXxNp7jt++H+NH/AAqi7Y/utXsmHtODXwNFqWpxkFNVuVPruq5H4k8QRfc1q5x/vkf1qXg6XY6o8SY6P2k/kfd3/CotVHI1GAj/AHwRS/8ACq71B+81ezXHUNivhlvF3iZgqnXb5Qo42zkVDJ4n8QsMf8JDqQ/7ak0vqVLsN8TYxrVn3evwzRoys2vaep9fNAqZfhhp0QzN4ls1GOqzqf61+fk2tazKpEmuXjk/3mP9Kqf2lqGMSahdMOxEzD+tL6lTehm+I8e9pH6Dz+AdAhXMni2zA92B/rVBPBnhJ5CD4z0/d2HmYr4GN3csMfb77n/psT/Wq7mUnP2y4J9WbNUsFStawLiHH9Z/gj9EY/h/oMybYPFdize1wv8AU0yf4Sag0bNYapb3CnoFlU5r89IXuom3RX04I9HIrqdD8Z+LNHmjk07W54dn952IP61LwNJ9Bx4kx0He9/VH1fq/hrWPDx8q+sWVCcBwcg13viq+i+HHwevNRhUpdXCgBh15FeQ/Dn9pzUDJDpvjS3S/sTgG4WPBX8as/tMfGnw74n8L2+haFMZFyGYpyAOOKqlhI03eLLzDPquOpRhJWtvY+cJ5fOlurpmLPcuZGJ65NYk7YJOafJdkxgKTiqEkhY9a7DwHIikbcaiY9qHOTTKTFcdRTc0uTU2JsIetFL1pDxQhhRRSlaYCUUUUAFFFFABRRRQAUZxRSCIynagy/pQBYtYzLKFXk12umWaQIsrgDHrVHR9KS0txcT/f9DSalqJ2lV4UelS2BY1fWQxEUZ4HpXM3dznlslfUdj6UXEqAiR5OG49yfSvavgR+z5qXxGv4tV1qN7Tw/GQ2HGDIRWVSqoK7LhG7Mz4JfAXUvilqMV/fK9roEbAux4LYOcCvv3w9oFh4b0q20vRLaO3tEABI4JYdzVzR9H07QtLi03TIUgsIFA446dzXzf8AtA/tFw+HbSbw94YkV9RlGyaeM/6v9a8hynXnZHUkkjV+Pv7R1l4Kt5vDug3IuNcnHlvIn/LE+uc18PXl3PqV1PfXkry31ycySseSfao5HuL2aW8vZzPeTnLyPzk0letQoxpx21OWpJ30E7YoxQRSityUFIelLTaLEsBThmkHSl5waYDo5NtzB/sMK/SH4Ebn8N2R5x5dfmwhH2u2H96VR+tfpN8CSV0C1XsI1rGb1SPLxMr4mJ7QF3Z5rK8S2n2zRrmLbuYocCthB8oPc02WPepHrVyjeNjvqR56dj5kWwaCWWJ+HU8r6VO6lBj2rv8Axj4HnSWW/wBNwSx3OnfNef3EhifZMrJJ0O7gZryKlOUNz4XGYWrTqNW0ZDuGcU4fMpC8n0qlLIqkkPn2XmnWL3N1OsVrC7yE9AprJJy2OaNOTailqSLZS3E8cCZMjEYH419F+GbNrPSraN/vKgBrjPBPgqW2kS9vkHndQCOlelouwADoBXpYWnKKu0fWZRg5U4881ZmZq8gAVT36V8tfHgk2WtnYDsjxn8a+n9aP72L1618s/HQu2k6qADmUnI9sVtideVGuY6ygvM+Eo4laVsDGCc4r179lTc3xqtFAwsaZNeSpxPKRyA+K9a/ZWc/8LfD8ZJ2/pVVf4Z7NFWR4lczbtNiOeT/SsS6TMYFbc8A/s23x3UGsW5zsBx0rRbCN/SF/4l6e7CqniAfv0x3GK0NPA+wQAdag16AARHPNMDb0YhbONe9WGWNiwkjV8nqRnFZ2mblgUe1XRnHPWgByy3Fuhjgvp44D/ACRj8qpXEQdg7TSyH/ackfrVljjrUcpHl8d6AK2MYAAx6Cuj0DThIftFwMIvRTWfpGmNdSeY6nygOtdNlQvAwgFADb27M3B4UdBWJcSmVsDoKmvbgs3B4FUBmgB/WnKOOlMFPBxxQA4D2pcUDikZwo+tAEbOeeaiLnuaGfJNMNFgYFs0w5p23mjFKwJi0mOaU9KZErNLjrTHcs2sRkY10NnY5Qdvaq+m2W3kjrWwXWFSMUA0NuZY7aMw9Y8ZNYczW5B8lNuakvbhpGI7VTY4BoBJIjk5XmoHOOlJJITUTNmgGKetMPFFIRnrQIaDT6btAp4FAAKDS4oZeaAGinUnSgtxQAlFJupaACiiigAoopQCWCjqaAEALMFHUnArtNB0dbOITzIpbGfmpNC0OGELcT8t6Vbv9RDEqvCDjii4EGoXSsXHO0du1c+0pNwsIRpHkO1UUZJJ6Vd/wBIvbqKG1ie4lmYIsSDJJPTgV9bfAf9muPRPK8ReMIRJfMA0VoR9zuCa5a9aMFc1jTcjhvgZ+zJda/Nb+I/F0LRWQYNHang5HIJB7dK+07KC1srNba3jitrG3XB2/KoApJZorK1eaZ0gsolw/ZUAFfHHx9/aUfV55PCvhBzHZ/6u5uh3+hryH7TES8jduMFY3fj/wDtLIhuPC3g+UCU5juLuM/dPpXyRIxlkeaZ2muZP9ZI5zk+tQRxlGkZ2aQyf6wseWPrUgz3r2cPQhTj5nNKbb0G7TS7cU6kNdHmISiiigApBS0UECd6WiimhsjjXZqFjnoJAa/SL4Fvnw/aZ6sgx+HFfnAV3zw4JzuGD6c1+jnwKiaPRNMRiciAH61zSdpo8nHK1WHqe6LwoFHfmhTlRijAI966D0+iQjopUgisHUvCem6rnz7VGJ745rdYMOgGKTcB1xScU9yKlKE1aSOOi+GuiRtuFsua2tO8NafpSkW9vGvfO0ZrYDL7UmcnipVOC2RlDC0IO8VqOjG1eacOaQYFGR6ir0OrRKxha8rF1YLlcYzXy78c3MVnqIPGyJjX1XrEckiLsGR7GvlT4+RE6drW9SP3ZUVlWlsjyse0mmfCdmTIDjO1pGOfxr139lSIf8LgtVBHzvmvJNPDZlTOAhNeufsoQtN8aIGQf6pMnn8amfwHqUPgR41IM6dAPRR/KsC8YbCMdK6BxjTEasC8GIs1uijoNDXfZIT/AA1Hr2C0ftU2gHFmPrVXW33TKKANLTT+4SrhYA1U04YgSpn5Y0AEkg6CrFlYtesp/hB5pllatcTKNvB6mukitVtF2rwtAEnyrEkEPCp1qnd3IVTGppt3deWSqd/Ss13Ln3oAaSXY5pcDpSqvOTT6AGhcHmnYxRTWOKAFJwKgY9aeWqJjQA0miiigAopC1CguwAoAOT061q6bZEkMw5p1lYgc43E1vxRJDEHIANACLtjUE8Vn3V2CSoNLd3QwQDWU8m4mgdx7vuOSarTScYpkkm04HWoicnJoC4hpppSabQDFAoNJn3petAhAM07GKNuKBQAuMUh5pxphOKAA009DSnmkYZFADB1qSmAc80/PagAoFFKAWOBQAqRmQlR1rp9C0MRj7RdYzjIBqXQNEVl86bCjqM1o6ldxLF5auAi984pNha4y81BUXZHwvtVTT9J1HxRqkOmaPavdXUrAFlBZVB9xWt4F+HOvfFHWYtP0i3kWz3DzbphgBe/Nfefw0+FOifCzSYbOwtknvcAy3TqCx4+leficUoaI3hSOP+Cf7P2nfDS3g1LVY1vtecDezjIiGOuCK9j1zVrHQLGXVdUuUgsIF+ZycD8KzfGHjDRfAGlTatrNyoKqSsO75n47Cvz9+L/xt1f4talNGJZrXRYm2pbg4Dr7+tefShUryvI05lA6n44ftGal48u7jRvD8rWuhqxSSRThpOOvTmvCEg2DaGJzyx/vH1p0aqihVAAAxT69qjQjTjY55S5ncQDjrS0UVuSFBFFFADcGinUUCG0U6igBtA606jvQA6EAXUBY4VXUk+nNfXXg/wDaA8P+GdHtY1vQJ0jCnK18iClABySAfrWU6SnqceIwvt2pN2sfbTftXacpLJext7VGP2udOBw0n4r/APqr4neGN+saflTFt4lPCAH2qfYv+ZmawU1tUZ9uf8NbaSetxIPwpj/tZ6Sel4PoV/8Ar18UHA6cVFJEHHOD+FP2b6sf1OfWdz7Ul/a30tOku76VWb9sHTE/57H6DP8ASvi8W8XdFP4VKiKg+WMD6U/ZIh4L+8z7NP7X+mBcieQexWq8v7YdlsHlSFmPUcjH618eqc8ED8aSWOPGTGv1AodNd2H9n32m/vPqLxD+2AywDy2fPoD/APWrhNd/aM0vxLoV3b3UUj3cwyCR0r548T+WlupVBn1ArDtJ9kGe9T7Lq2Ssuu1zybsdNZOHF1L08xyQPavVf2UJ/L+Lgxkljt47cV47pUpm4zXrn7KKj/hcdqOT8+79RTm/cserTjY8nddmjWwwc7Qfzrn71iwxXTXuVtIUA+6oFc7d4K8VqhG5oLAWyx9+tZ+rvvuT7GpfDk++XaegqDVDm+9s0wNexY+Uo9qvwwvcTKgHfk1V0u1a4Coo/EV1VrbLarjb83rQBLa26WQO4cio7y9DAhabdXGFOSCayncucmgBsjF25pBRSgUAKKeOlMFOY470AOqJjSluKjJzQAMeKi3U5jxUW6gB+aM0lFACPnbwM1r6Vp++MMw5PaoNOsmmfc3TrXU2tosKeYeMdqAGQWywjc4qpf3vO0Hgdqm1G+DgAYGK5+ecu/qKAFmm3cioGc460jsajLUAIT3NMJzQTSUAFGPalA4pce1ADcGlFLRQAUZxRSE0ALuyKaaTdzS0AFITS01hmgBQaWkUc9KVDlwq4LZ4A60BcVUZ2CgEk9hXUaRoQiVZ7ngdQpFW9H8PG2iW9uMYIzg9RTrq/udUvE0/Sbd7q8c7VhiXJX3qZT5UOKuw1bV40jUQcRjgAdSa9N+EH7P+tfEmePUNSjks9CBDZcYZ69P+Cn7MCWyQeIfGoWW4fDR2I+6pxxketfUduYoIPIgjS2tIhgKoARce9eRicX0gdMadtTK8K+EdJ8H6TFpei2scMaAZdV5Y1xXxU+NGg/CaxdprhLvVSD5durAnp6Zrg/jf+01p3gpJdE8LOl5rTgq06nKxHv0NfFGpanfa7qkuqatcPdXUx3fvGJVSewFLD4V1PemKU0tjoPH/AMRdY+JmttqerXEohyfKtgflC9uK5TAU4HA7CllBmYE8Y6AUmK9WNNQ0Rg9dRV7mnUijApa0QgooophcKKKKACiiigQUUUUAFFFFAAOtPBxmmDilJzQAu6kzSUUAIaRhxTqQ0ARkEUmfepGFRkc0APBGOtO4YYqKnrwKAMHxRhLNR/ETXOW6/uCa6XxSu+2X0Fc3Cw+zbaVgNvw+hZGPqa9e/Zqha3+NNsQSNqj/ABryPQJljCKf4mr2r9nPa/xjgbvIwUfhWdVe6NHj98R9gSQdSOK5e4bEfPeuouvl0qEn+6K5S6bev41ogZf8OHbcPVrUrZpbmLAJ3ntSeELKS+uJRGuSBXUXluLPBdRuXr3piNnRLSKwsRwGcjkntSXl2AMDrWfDf/uRg1AzlzknNABJIznJNNHWlFOXrQAg5NOC96XiloAawA6UwmntURJBoAU81GTTieKjY0AI3IxTAvNOPNGR0oAQnFW7Sze4kU4+TvSWlo9ywIHy11+n2SQRAsBxQA2ysVhAJG1RVe/1DYxROB2p2p3+PlQgD0rnpZmds0AOupzIetVS3vSscVEze1ACs1MJzSUooASnY9qMc07AoAQCloooAKaadTM0ALSEUZoNADCpz7U6iigApCcUtS2dhPqNyqW6MzE88dKVwEghlupBDCuXbiuy0jw7a6HAbm8Aa4AyM1atLK08MxLlfO1GT7qKMnP0r1v4a/s6+IfiVdw6x4iL6foQIZYDwzj6EVlVrKC1KjT1PN/C3g/xN8UNUWw0O3kW1LAvOQdqg9a+0/hT8DPDvwrso5lhS711lHmzyc4/3a77w14Y0fwfpkVjodlHBHGuMIo3McYOTWD8Qvid4e+F+lzajrdwrXGP3dshy549K8mtiJ1fdidEYqOp1GsarZaPp76jqV0lraxLlmkbGcDtXxl8a/2nZ/E5ufDvhOVrawGY5bpcgufwNeY/FL4z6/8AFS+kFxM9topOYrZGwCvbPvXnYjVANi4wMflXRhsEl70yZ1b6EcZIdy5aSZjlpH5Yn8akyQTnmhUGKdtFekklsYjCeaKXFGKAAUtAHFLtNUSJRRg0YNABRRSjpQAlFOooAbRTqKAG0UYNFABRRRQAUUUUAFFFFACGmkDrTjTTQA1Rk0+mr0p4GTQBieJR/oZOa5SFsxECur8RH/R9vpXJQDhjQBsaWdg3k8JzXtn7L06yfGnSd5/2j9MivE9OwLKRj3OK9d/ZcfHxitZCcBVVR9etZVvhKieXai5SwUHPAxiudt4pLnouRXZXdg15ACF/djpWbIF02PEajd61UdhM6LwjbR2drNtwHbqag127EkfBzg4NV9AviYLgg9FzVKW486z3dTuNWIs2UhkznsKvgVnaWMoTWmBQACn5GOtNppOKAFJozioyc01mNAD3kNM8ymZoFAD91NxS0h9+lACHI6VYsrFrqUbunWpbLT5Lhgdvy10kUMVqq5HIFADLe2FqoGOOtF/qSxxlEPNVr29JyFPFZDPnJJzQA55i53NVd35zTWkz0pvWgAyTSGlpDQAlFFFABRk0UUAKKdxTM4pCSRxQA8gYqOk+bPXiloAKKOlAO40ANLYPOcUvLdAaViUZV2bt3auq0PwwLrbcXRKISMJ3b2FS2krsai2yjovhyfUW3lSIhyTXoPhjw3ealdJpvhqxa5upCFaZVyq/j2r1D4Z/AnWfGojmvI5NK0dCOvDuK+r/AAj4H0HwRpy22j2qQ7R80xX539c1wV8UkrRN400tzyn4W/s46b4Xli1nxJjUNa2giN+VT0617sAPIfGyGKMYJHyqorE8VeMNG8EaTLqWvXcVtboMqGblq+KfjF+0/rPjoyaT4cZ9N0c/K0ucNIPUGuKEKleWpcp2R7Z8X/2n9K8GJLofhkLfa2ylTMOUQ4PWvizxNr+r+KtQk1HWr17q5dshWOQg9qyinlzmTzC8jctIxyzH1JoPvXp0cNGmtjnc2w3dD3pxYscmkwKK6kiWFLmkopiuFFFFADqKM+9FABRSig0AJRRRQAUU4dKQ9aAEopDmjnNAC49qKM06gBtFOooAbSYpx6UlACYNJg06igBpFRt0qU000AInSngc0wdadQBzviFz5cntxXN26/uWrodfQ7GrnoQRCRSYGppH7yCRSOBzXsH7NMDQ/FLTCDjzpOfpXkOif8tVY/QV7l+ziAfitpAIwEGf1rOfwlROKvWjtNBt4lA8xkBJrgb+ZnJArpJ53lsQXJ4GK5a8yoZvXpVx2Ey/oDEQXeT1XFTy2/k6eD61F4dQSW0xx1rRvsNphI7HFUIj0zhBmtEVl6e3yCtQHC0ABPoaiLY4NOJBHFRnnrQAuaSiigBMUtFNdto4BzQArdKuWGnS3bgkEL61NpelyXLB5TtT0Petp3W1TauAB6UATKY7SFUXsKzbq6Lk81DcXRkJ5qi8nvQAkz56GoWORzQTnvTWNABRTRTqACiiigApDS0hoAaTRuNLj2pMUAJRS4oxSuAlITilPFJyxx933PemgAMCf8aWJHkk2Rrub2q3pWiXWtXK2lpDJPO5wBGCa+r/AIRfsqz3Cwah4kP2e14YwEfM/P04rmr4iNPqXGF9WeNfDj4Zar4ovES0sXlc4y5X5Vr7B+HX7P8ApHhvy7zWFF3qQ5CN/q159K9W0LQNO8PQR2ekWUUMMa7SQvzN+NZ/jDx74f8AAdjLe65fpFgEiIN87fhXl1MTOs7QOhJRR0EY8kYOxIEXGRgKgrxD4u/tK6D8PYZbDR3TVdZA27UPyocetfPHxS/ai1vxxJc6R4fDabozfK0q5DSL7814UNwLlnaR2OWZzkk10UMJfWZlKobvjbx94h+I1+9/r13NJET8tsGO1R6YNc6QuAAvy9gOgp5pMV6MYqOxne4g470ufejFAqgAHmnUmKWqEwooooAKKKB1oAUCnAUlOoEFIaWmnvQAUU0dadQAc0UYooAMGlxTSTSg+1AChaWkzRuoAWiiigBD0pKU0lABTTTqaaACkNLSGgBB1pTQKU/dNAHN68/ykVgQ8qa2Neb5jWPBxGxNAF7RmzclT0r279nmfZ8VbMAjJKqM/nXh2ikG7yTXsX7P0bj4xaOgGQ0uf5Cs6vwjicEHL2AAHSsDVx5cakiumt4tmnR5xkgH86wNfHyAAirB7ljw2wWzkbFXLx8aXGD/ABE1W8Nq39n3JI4RaZfzF7eIdlFMRLYMAoFae/isbTyWWtU0AOz6UlNoyaAHUUgNTQwvO4VQeetAEQ5YLg5NbFlpJDLLIOPerFnpSW3zudxPY9qluL8IhQEcelADpbpYRhcAD0rKubveagnnaRuvFVy3XNAEhlyaYWyajPWl3UAL3pDSE0ooAQU6kNJQA6imZp2aAFpDSE0gOaLgLRRRStcTdgpA2WPp6013CEkk7QOwyT+Fdr4A+FPi34i3SR6Vpskdk/DXMi4UCsp1IQ1ky4xb2OJkkjBVC2Wb7ozyx+let/DL9nfxZ8Tp4Xltn0/RgfmnlBViM9RX1J8MP2UfC/g3yL3XNmp6gvzFX5RT7V9AQJHBbrFBFHDaxDAjwFRRXn18dfSmaRp21Z558O/gr4V+GlrCljZJdXyjDXUoBJP0r0G9vINNtXub+eO2tkGWkc4AFeSfEz9orwh8PllgFyuoaunS2hOdp9zXxd8S/jd4r+J13Il5dSWulsfkt4jjAz3rCFGdd+8aOSitD6V+Kv7WWm6GlxpnhNPtV5937SfuH8cV8f694l1jxdfvqGuX8t1O53Kjt8sf0rIjhWFBGuSF7mpBxXpUcLGmYSm2OPWoz0pSc02uqxA2nUUUyhRzS4ApB0paCQooooAKKKKBhQOtFFAhw7U6mDpThQAhooNFABQTiiigBoNOoIpuTQA6gDNFAOKAAjFFBOaKAHUUUUANPWig0UAIelJSnpSUAFNPWnU00AKKXGQRSCnL96gDj/EJxc7ayAcJj1rW8Qg/bWNZJFAmWdM+S5RvSve/2eoR/wALd0mY/cRQfxzXhGngeanua9z+B0nlfEfS9oyXkVTz2qKi90qJ5uJ82Sc/KoxXMau+5OtbqPnTEP1/nXK6g5BbrVIR0HhlmawuIs/eqrqatBwTxUnhUhom+bFM8Qthl5pgSadIdorU3E1i6XnaK1wfWgCVeaMY59O1IisxAUE5rWtdKZtrycAdqAKlnZy3bgquE710cdtFZx9ACaQSpbDCDFZ11elieaAJru+J4BrHlnMhPpTXk3tmoSeaAH7sUhbNNooAdnNNoooAcKBxQBmkzQA4nNNPSgHNLQA2nCjFFJgFMBKP7UsjoihmOxR/e711Hgv4c+KfH91HFoOmSSK2AZZF/d8981lOrGKuyrM5mZljXcWAB9TXT+DPhz4r+IF4tvomkzSIeszqVVR65xzX1d8M/wBjzSdG8q68Y3TXtyCH+xj/AFYP15r6W0fSdL0C0jsdLsYbS3jGFRFAP51w1cwtpTNY0k9WfOXwu/ZC0fw/NBqHiqcahf8A3hAMAIfQ+tfSWmafb6Zbmz060itok4CRLt496yvE/jbw74JsJbrWtRigwNwjd8u30r5K+JX7YGpaxJcaX4Qs/s9scqbyXhyPUcVxqNTEy1NHJRPp3x98VfCnw3smn1fUIvtABxbxMGYn3FfHfxO/al8SeN3m0/QVOk6OcgOp5cfgeK8S1G/vNXvJb3U7uW8vHJJklJOc1XWRnGWGDXfSwKhuYyqtjvmeV5pnaed/vSSHcfwzTv1poxTq7ow5TIKQk0tFaWGMNApxHtSHjtTGFFIDmlqWSxwooFFABRRRQAUUUUAFFFFADh2pe1NFKaACiminUAKKABikzRk0AKQKbinZoxQA3FAGKdijFACUDrS4oAxQAtFFFADTRTqKAGGkpzGm0AFNNONNoAUUqnk1GWwacmTkn0oA5DXiTdNWYwwvFa2vKFnz71lScpmkwJbHKsG9DmvcPgU5l+JWhLzy+7+leI2XKt9a9k+AsxX4oaSxJKpj88ipn8I0ebwN/wASmAHrsH61zV8R81dIg26auf4RiuZvOWP1qo7CNzwsnyOareJWzdRqO1XfCxCwyA9ziqXiSNpL1FiGTTAk0xiEB6muis9PlvGztIWq/h7Rj5Qkl4wM4NdWJ4rSLCgZxQAy3sYrJdzYLUk18AML0rPub5pWPNUjKTxmgC1NdFmIqsXyKZRQAU2nGm0AFFFFABRQaBQCHUUUUMGgpCCRkDJpA/nSCKFWmmzxFEMsa9R8Dfs7ePfiC8UkFi2n2H8U0wKvj6VlKtCO7GoyZ5bK4MYw3zjqoBJH5V23gj4S+MPiHIkek6VPHbkjN5IMKPwIr7J+Hn7J/hDwj5V1rCnVtRHJdgMA/iK9507T7WwtxbWFtHbxDosC7f5VwVcd0ibRp21Z81/DT9j3Q/D4jvvFVz/aF6MExp/q8+/NfROiaZp3h+zWy0iwhs7deCsKdves3xT408PeCrd7jXNVhgWP5hEG/eH8K+W/iB+2PNc+fZ+CrDbj5PtjjDD3xXLGFau7taGl4rc+qfE/jLw94MspLvWtRgtIl55cFj/wHrXyz8Sv2v7yXzbHwZaiKEgr9slGVbjt6V8zeIPEOt+Lr1rzxDqU97cMcgbztHtjOKzCNihVACegrtoYGMdZGbqJbFvXdd1fxTfPeazqE11K7Ftkj5QZ9KrDCpsHCj+GmAYNOruVOEfhRjKTluRgHnFOANO4FFWCAUDrRQOtAh1FFFADcmjGetFKKADaKXFFFABRRRQAUUUUAFFFFABRRRQAooPSgUGgBBTqaOtOoAKKKKAFFLSCloAKKKKACiiigAooooADTDT6aaAG0U6igBpptONIaAG4Gc08ZwaaCM07rQByfiBDHMCe9ZBPy10PiaPdEDnBrnVG23znJoAtaUm9G7jOa9X+Bchb4n6PzgPMo/AV5bo5AL/3a9Q+CHyfFjw8gPG/cf5VFTYaOEjBbRSenB5rlpSAu3qa6r7PcSaJEkKnBUHpWbaaVHFGWuG+b0qo7CNXwbZG5j5HGa1dcsbexlifhm9fSqvh2+Fr5yRr8q9DVDXruS4k5JFMDYhvQ8YEZwB6UjSsxySaxtNchOvNacZyOaAFPNJinYoxQAlFITilHIoAKbg07Ge9IW29enrRzWATBpcGhTv4HP0qSBlkkEQPmyHpHGMtS5luUlci8vP19KPLC9Wx7V6J4J+Cfjjx9Ip0zSXgts/625G0getfSHgL9jHSdNaK78Wag15Pwxg9PxrmqYuFPcagz480TRNX8Rziz0fS7i8dzwVQ4FfQHgT9jrxHrgin8R3sdlaZDGIcSYr7R0Hwl4f8JWUdvo2m20Ma/wAXljf9c1r3UscEAlupo4Y1Gd0zYA/GvNq42U/gRvGC6nmvgf4CeBvAqrJZ6ZHeXq/8t7gZYHj3r1FUJAVNqIowFGAK8h8f/tF+B/h7HJG1+t/enJEUJDKx9M18w+Nf2qfF/i7zLfRiNGsWJ46lx+dZ06Fes7g5qOx9leM/ib4V8CQM+t6nCso+7ArDc3tXyv8AET9sHU9S83TvCtt9jtWGPOl++B7HFfOmoXt3qtw02oXMt3K3JMrFsH+lZ0yjcMAcdABXoUcCo6zMpVS7q+s6n4gu3udYv7i+mJyDM33fpVaOVk9CB09qhG70p4DV3ciirIzbbHqTjnuaGNAH4UcZxQJMQUtO28UhGKpIdxpozQaUU0hBSikpRSAWiig0DG0o6UlKOlAMWiiigQUUUUAFFFFABRRRQAUUUUAKKDS0UANHWnUUUAFFFFACjpS0g6UtABRRRQAUUUUAFFFFABRRRQAGmHpT6Y3WgBKYxNPpjCgBobnNPRieKjA5p4GDQBgeJiSg7CudZv3CgV0XisFYY8dK5YMTFRcDW0ZN0cnvXpnwMYv8W9KOeIyo/WvONAAMbA/WvR/ga6j4r6SM4MkwH5VnMaIHvba10YRRBeF4rz65uC+7PqTWuH8rSVXJP4+tc1NIcE1oSkb3hhg0dwT0zSa9jzwB6VX8MthSB93NSa8wEpxQMdYfdrXjHy1iacx2it2PlRQAYpCOKkYZwB1pkn7tSzEAL1NJtARN1xSbtnGM/Srem6de61OsOmWU147HH7pc4r2HwX+yv468XmO5liXTrQ/eab5XH0FYzrwh1GoNniTsnRnw3XHU1u+HfCmv+Kpvs+i6Rc3kp6YUjH44r7V8G/sfeEfDphudZmfVrxcHEnABx06V7tpOi6P4fgjh0vT7e2RRtwkYDD8RXFPH30RsqN9z4s8DfsceINdiE3iW9TT7c4zCOHX2r6U8D/s9+BfAccaxaat9dLx51yM816ncyiGMyXMsccY5LSngfnXlXjv9obwN4DBjutRS9ueiw253KT6VyudapsaKnGJ6tFCI4RHFCkMCDAVAAPzrI17xXoHhi1afWNSt7WIDO0tk18YeOv2v/E3iES23hyyGm2Y4Encj6V4Tqev6vr80k+qahcXMkhyQzkr9MGrpYGUpXmzOVRJn2B47/bE0fR/NsvCVl9tuhwJpOY+lfNni/wCMXjDx5LI2q6nJbxN/y7wHCf0rgoo1hP7tFTv8oxTiASWIyT3r0IYSESHNvYgEKqT1Y5zlmLf1qbeQpVSPMbhUA60mBR5pjKvEo81DuXPqK6vgVoolPuaJ0LXUWPfoV+N65UiPINRjQNeZ8DRL7j+9Ca+s/wBmH4zr4vkfwt4g0q1N5aqPLuAvLDsOlfUz2FlHkJZ26sOoMan+leVVx06c7NG0YKWx+WCeFvEbDjQ7g/VCP6VN/wAIh4nC5Hhq9f8A3RX6V+OL9fD3g+91Ozs7IXMKkqXhGOB9K+I5v2ovG8k1wY7PSdqOyKBHtPB+lXDE1KnwoTiluePnwv4pXc0nhrVY0B6+SSKqtp+o2o3XOmX0QHUtA1e46N+1t4z0+7VtS0XT57cHlVI5H5V9KfC74y+B/i7F9jn06ytNVxg25jTDH2JrR16sdZInli9j8/I2804CuD6OpU/rSONjYPWv0T8c/s3+CvF0Mnl232G8IIVo2CjP4V8d/FX4C+IvhZL9okVr3S3b5JIRkqPc5rSljFL3WxOFjyyikUhh8pzj0pa6r3IsFKKSlHSmIWjFFFACEUAYpaKACiiigAooooAKKKKACimllA5IHuaFEdyRtYuvQiMbj+VK8VuGo8dKUDNdZ4Z+HHinxnNHBo2k3Dxn/lqyEAfmK9E8Z/s1XHgTwIPEGsair6kc/uU42j3rneKgnylcp4j9aMe1QwZkgSQnjJH61MeTXSSNPWkFKRRjFABRRRQA6iiigAooooAKKKKACiiigAoopM0AKaYelOJppoAaaY3SnmmNQAgp9MXrTx1oAw/E7Klpk4z0rkwN0Yx0rpfFuTDGB0zXORj5FpMDR0+Xy0Kg9K9L+CZCfFnw+B2bcT+IrzHT0zkdjXpPwTyfinpLAch1UfnUSVxo49pFbTrRMdEB/Osi5jUq2K1b2P7LBFnsgFZMc8To+8/lVPTdgkbHhizIjc46VF4gj2OM1veB9PvtY3RafYz3TE4AWMj9cV6ZZfsweOPF86tPbjT7cjP74dqxniadNXZpGk56I8RsJUCqDIie7nArp9NsLrUXWK0tLi4lPAMSFlP4ivrj4d/sW+GtNCXWv3z3k8eC0QOY8/nX0n4b8AeFfDEEaaNo9tCyj7+0MT+dcksyi17hTwzjofBvhT9mnx54v2M9kdPtW6TvwQPcEV794N/Yy0DSXSXxJftqMw+YiI7R+Ir6cDtKMKuEUfw8AVzut+M9A8MRPLq2s2tvGgJ2s+GPtXFPEVKmxSpJbi+HvA/hjwnAkek6PawGMcSbBuP410DNO6b8YT/bO0Yr5s8Zftk+GdHJtdAsX1C4/haQfJn618/eMf2kfH3i95IY706baOcGKPnj0yDVQw9Wp8Qc6Wx90eKPiN4T8I27PrGtWtu4B+XeGJ9uK8A8Y/tlWVqstt4X0zzZuQLiblD+lfH93czX777+6nu5TzmRyw/WmYUKAoA9hXZTwCjqyJ1GzuvF3xi8ZeNpZGv9Wmt0brDA2Ex6VwKwosxfaS+Sd7En9DT6BXfGnGK0Ri5yHMSSSeSaaadTTWiEIKXJoopXGHv6UMxkdWwAR6UHmkI4oA9M/Z1nmT4q6cEkKpK/zL69K/SF0JaQ9MngfSvzf/Z4AX4tab/djAz9c1+kTEYj9dua+fx6/eHZR2OM+LGT8PdWwcbIWP6V+WsVw8k84Xq0jnH/AAKv1M+K4z8OddIPIhr8u4IRHc3IOMq2OK68sd3qZ1yVYyR89WrK/udJvIb/AE+d7e6gIZSjEbsHOOKgzSZ54r1JxUlaRhB2P0J/Z9+MsXxO8Pra3rKNbskCujdWAHX6165fWdprNhJYajbLPaTDDI/8Ir8yfhF41k+H3xH0y6hYiC8cC5J6YJGBX6dwSx31pb3sZyl0gcfjXhYmi6ctNjpUk1Y/P74+fBWb4Z69LeadGW0e9O8sAdsR9OleKHCn27V+pHxB8JWvjjwhqWmXSK37pmjyo+/jivzP1bRZNC1S90y6Uie3duT6Z4rswlTmVmYzp2dzHpwFWPs64qN0MfXpXpEWuR0VFNcRR8l8fhSR3UD4HmAmlcXKyaijBPI6UU7j5Qoooo3EFFI7BACaXG7OOcDNK3mAUuKaZFUZZsCnJJG4yrqV+tHMluws2XdD/s6DWrWXWx/xLNwEqqM8Zr7z+Ffwr+FOq6JBrmgadDdhsbmbkhvpX5/SupRtrA4U9DX1l+xHqU/2fUtPMjeRGNwUknnFedjoyUeaLNKS11PrSxs7XTYBFZ28ECgYURoFI/KvHv2o0x8NnLc+WOSfevZE+QgH7/evF/2sN3/CqryRWwc7cevFeZRd5q50zgfn/Z4ayQAYGMin1Xs5n+zIAvAG2pQkjKWX+H7w9K+iTVkcTWo7FGKWFhcMFhjeZj1WMZpskywvsmgnhbP/AC0XFHPG9iuXS4uKMUjNhht5FANUmQmOopM0ZpjFooBFGc0AFFFFABTT1p1NNABmkzSHrRQApNJRRQAhqNutSGmkZoAavWnjrSAYpyjJoAwfFij7Mhx92uWjPyLXXeJVBtMH1rkgoAx6UmBo6UAzMT6V6F8GJPL+J2h4/jn/AJVwGkAHzT6DFd18IG2fFHRcY4cH9RUNDPZ7D9jLxXrFpFLq15FaxDkiNvm/EZr0nwn+yj4J8ORLPqTNqdwgyVcbcH8q+odWKwQObi5ij5OWkbH868h8b/GHwD4RtZ1u9ega7Ax5SnJz+Br5WviMVWfunr0I0lrM7H4Z+HNC0a2eLTtLtY0XgExjI/Gul1zzmiABZUB4b+HFfH9p+2Pa6dDdQeHdHknuATiaQZjJ9a8s8eftD+P/ABMvmS6j/Z8TdUtmxx9MVpTwdeorTM51adOpeJ933njbw14Qtmn1fV7WNQMlI3BP5V5X4s/bD8M6IHg0G0fUpzkKw4x+tfDNtdXV/OZ9RvZ7ySTnLuR/WtKMpEu0KOOQcc16mFy2NOPvanJWxLnLQ9d8Y/tO+P8AxYHtobiPT7Qk/Kow+PrXkuoXt9q0ryalf3F6H52zPuxUON7lic5pWXHSvQjRhHYxcmyKJfs5xCo2ntUpOeaYM0+tErk3Y0jminUU0A2gU6imIKaadTaACiiigApV5YD1pKVRl1oA9G+AuR8UbRs9Sq4r9J5h82PQCvzY+AalvixpCckPJuz+VfpRP9/2xXg453qHZS0RyHxQjMnw81dR1aNj+hr8vUOZ75sc+cw4r9S/iSoPgLWCO0DH8xX5bMFR5gOrSs36mt8tla5jWCikzQTgcV6176mSHBSzW8gAWRJVOR6ZzX6efCLUzrnw60q7LbgIwin6V+YM2VtZH9BxX6Kfsz3pn+FGnxnjYu6vMx65Un3NYLU9ft22v7HqCK/O79pTTD4f+J8zbApvDvx7V+hkS7XjNfCP7bMUreP9NaIYeRfKU+5rkwsrSNZq54x4f0bVfGGprY6FaNc3TMBtC5UV9NeCf2N7i4t0ufFOpiMOMtAO3tmvTv2cfhhp3gPwXZ6mYFbU7xfnkIyQMZr13U7dtU0y5s/NaJ50IEmehx2rWvi3zcq0FGndXPkbxF4a/Z78Dat/Y98bme9VtjtHLwpru7D9mf4X+MtIXUtCvLkWkoyHjOdp7Zr5N+MPwy1L4feMdQXWoxcx3bl4pyM49Oa+kP2LdWuo7K+0eSZmtEG8IegpzVSNLnUgUdThfiZ+yvrfg20l1DQppNSsl+Yq2dwFeBtbuoZZAY7hDh0Ixtr9ZNqBmjZFeF+GVgCCDXxF+1f8NrHwfrEWvadGIrW45nUDGTVYbEzb5JsU0fOE0kduAzuEU9yadaJNqEwisraa6ZjgeSm6u4+EeoeD18U29r4zt3l0+5ICEDgMemf0r9B/CXw+8G6Jaw3Wh6NZqrqCkyLnPpXRWxkoO1iIQuz4q+H37Mfi/wAZ3VrNqEP9n6S7AmVh8xX6VT+Pnwt0r4Zaxpek6ErzXVwQrgdWP5V+ils5RgoCqozwBivE/HvhDRl8cWnjTxG6JpmlqxCv/EwrgeKm5F+wVzxn4UfslJrMFvrXjGd4YWG+K2jOCR719CW3wE+HiWotF0WF0Ix5jDDYrlfhz+094a+JPiebQbO1mgMJMcTOvytj04r3Ew+UPLY/MtZVa1W/vF04x2PjX46fsv23hvTpvEPhmYpaRfNJbbeAO/arH7Fb77vWX2FcnaB6dAa+ifi/qNnovw41ma+kCwshGGPXivm79iecXOq6yY/9W8hdfTGa0VSdSHKxOKi9D7KlYSMWHUcV4r+1ODJ8MygH3n5+le1PKm9hjgHnFeJftWzR23wymlfiOMH5vTNZUbc6uXLblPgeFo4bLeRkZOAO/OK90+Dn7OWpfEZE1XW/MsdDXkqPleUe3tVH9l/4Pz/Ea9g1jWYG/sK0ySCMb8HI6/SvSvjH+1HqXw/1ceGPC+kRQQWK4P2hcZUenFejVxMm+SmYqnqfQPh/4SeEPC1jFa2Og2swQf66ZfnNVPGPwP8ACHjfTZYJ9Htre7YYSWMfdP5VJ8HPHcvxJ8DWmuXKIl1IMOidFrvreQ7fMf5UQFsngDFeapT5ryepryqx+WvxF8F3Xw68WXGi3JLQhyIZP7wrmuc9K9f/AGnPEdn4s+JUH2J0dLPKOy+oryJiysVwMGvoMNPmp3e5yTsmFJilorW5NwFFFFABRRRQAUUUUANPWig0UAFFFFACGkpSKSgAo5HSilGMUAZHiAFrUEiuSAGDXZ66B9gc45FcWhGMUmBqaSuIpD/eNdx8KQI/iNo0p6mdFH51xelgeW3tXZ/DWP8A4uJ4eAGf3+7+VSxm/wCIvij4y8VK8mr69cSq+TsViuM/Q15NqirPclpHklPcyNu/nW3ISVQoSFPasG8kCytxShShFXSBybZreFgUWYR5RWPYYqzrhDoFYcjuaZ4WANqzY703W2+ersIXTSxC47VvKvygVi6SNwFbgIwKLD2ADFDAkUtFFguMwfSlp1FAhtFOopgNpD0p9IR7UhoZRT8Cm4osDEopcUYpiEpQdpB9KMUAcikwPRvgM234s6af7mP55r9JicmL/cBr8z/gPn/hatjnq7qor9MpkPnH0UD+VeHjE+Y66TOV+JpI+HmvEDJ8nC1+W5Obu6U/wttxX6mfERRN4E1dCM5jY4/A1+Wu3N9qDYx+/YD8DXRl0VYyrbgB7UAZNSGmHIGRXqS0MkyO6P8AojL1LMq/ma/SL4AaSdM+GNiOhkjXr71+c2mWM+seIdN022Xc0syFhjPGa/VTwvpq6H4b07TQAvlwoCB9K8vMZJJI3gjXU5kiGPlPevgz9r7Uhd+PYfK+d7ZgVFfd8uoQWFtPdXB2wwAsWP0zX5cfFzxRN4s+JGtXURL2qTlUA6CsMJT53dlzdtT7o+AvxK0nxn4KsrBLmKG/s1CsjEcnj3r1O91Kz0m2NxeXcEMEQ3Mzn0r8ptJOsRX6por3kt+33UtXZefwr6D8Kfs+/E34jWkVx4j1y8sbLqYWkw5H50V8IlO8mOE9Dnv2nPijbfEbxR/Zmir9oSH5UKDJY57V9B/sv/Dq78F+H/7R1QCK71CP93CThh07Utj8Lvhx+z5oja1q0SahqMY3I1xgtnHYd65f9n/4jap8TfiPfXV9IUsYnY2sA4VUPTipqczhyR2BH1QBgDPHqPSvBv2vbeG6+GUfnIC/m5BHXivemYEs20rz0NeH/tToH+HLs33Yxk1lQvzoc1pc/PqNHksxKUBaP7mO3PWv0g/Z31W51b4aWEc7EtbrjeT1r86TIi6RCy5G7BP51+hf7L0sc/wvikR93zbTXpY1KMEzKm3c9gTgqM9eM18k/to+LJrfT7PRIiyxyybm96+txw4I6ivij9tOEjWNFJB+c7q8/DO9RaG07pHzx4Z1O98Jatbavp8hjuLVt4UHG819daP+2Zpo02J9V0j/AImCIA+1/vN+dfHa8qKNgJ5UH8K9erhoVNzlU3sej/GX44az8WLho5VktNJGQtuOM/416d+xPH5OuaqinCrFtwOnSvmwBSQCARX09+xW6Pq2uOANzNt4+tZV6KpUvdKhK7PsUxgFgeuc15n8b/BNz8RfDX9gxD9xM6tI3oAa9Pfh29q82+NvjS8+HvhSLW7LafLfdMCM/J3rwpJ7x3Op2SOj8J+FrLwZ4YsNG01BFFFGgbZxuYDnNeK/tP8AwVg8Z+Hm13Soduq2g3yiMf61fSvZfh74ztfH/gzTtetCp+1pkqOqketdEAACHTejAqykZB9TWlOpKlNXK0sfnl8Hv2hNY+FVvc6c2mfaYAdjQs20p+tdL8Qf2rPE/jLSZdO0uAaVbTDD4+9j61pftM/A+Twrqr+KdCt92m3R3Tqo4Vj+FfObEDBzlTxn0r2KdGlWtPqcc5tMQkktK7M8rtlnbuabkscnrQeRQBiu9K2iMG2xaKXGaAKoYtFBopAFFFFAB1oIFFFADMCjFPxSYoAbijFOxRigBuKbipCKbigBu00mDT8UuBQBl64MaewriI1+Y/Wu41xCbJsDgVxcA+Zs0AbGlDKSV3Hw7byfiHofHR1/MkVxekAFGA9a6/wK+/x5oZ5y1wi/kamQznZEYW8Z9R/OsC8jbe2a6eXi2QHsAP0rBvMDNNO4Pc2PDDgWzIP4ara0+ZaseGkC28rf3qqaoC1wRTEX9IA2g4rZrK0pdqDNawoAUUuKQdaeAaAGkUlPIxSUANop1FADaKdgGjAoAbSEU7FGKAG4oxTgMUoGaAGBc05VIIOelO2EU6NGc4AOaAO6+B8B/wCFraKzHBEm4Be/Sv0tlYkL6mvzz/Zs0t9R+KdnMqhooFySOxBr9CpWDMuORtHFeLjpJysddFo5/wAcRb/BetZ7W7n86/Li6Cx3t0oPPmszY+pr9SfGuf8AhDNaVsgmIivys1G6t11rVV85FKy7cFsGtMvSvczr67Eu4E8c1HKcQu+cBAWJ+lQpeQR8mUN7R/MfyFeq/Cr4Ia98TtQtS9rLBoQbLTOpUOMcjkV6NWpFJyb2M4Qvqdh+yZ8K38U+JJPFV7E4sbdQYmYcMR6V94v++KlRgsoAA7Vj+EfCdh4K0C20bTIVjtbVcMwGMnuTXm/xe+P2g/DqyltNPuI73WXUhY0bcE+teHLmryOhNQ1MH9pz4pQ+EPDM+gWVwP7Vu1zhT0XHevhrStKuNTvobK3fzbvUJcMQOhNaviTXL/xNq0+patdvPdyOSpc9AecVe+F93FpnxH0Sa7G23aUEk9Fr1KVH2NNtGUpc9j7m+C3wS0X4caDa3MlslxrEy7pJZVztyO1ettN5e+WRm2RqzFe3Apsc0c8MEsRJjlUMp7EU5lX543OFkUrn0zXkTm5T1ZtypH52fHLx3qfjbxtdrLM/9n2TNGsGeCB3r0n9jSGJvEeoTEcxx4A9ODWf8XP2cPFcfjC4vvC9s99a3xOMcbc969X/AGePhpH8L5LiPVtRhk8Raiv/AB6gjKEfSu6VeEaVkTbU+hJju3e9eGftYfu/hTdPjJJC/pXt7OqABiNw6gdq8m/aQ0S68R/DO4hso2mKEuUUZJx9K4qFSKne5pPY/OR5A2mAA8qnT8K/Qj9k3I+FNoDxuOcV+fV3pF9p+mNLqFo9s8pIUN1PPoa/RX9mTTn074X2XmoybkBG4Yz+FduOlzQTRhT3PXx6jua+O/21U/4mukLnonSvsVBkrjpxmvkP9teyuY/7N1BYpHichdwXOOa48K/3iNatz5Ykj2bF9gaYOKTzPNw+Tzx0xSE+lfQnHezGb9rEnoAa+kv2Ipj/AGvqMe77xLEfTNfNUiExSHIAVST719S/sTeH7yO71PVDBIlkY8KzqQCcf/XrjxzvTNaa1Psd+WJ968c/aiKr8LL9ZFDRlMEfWvYjzzXmnx/0O58R/DHU7W0jaSUDcQBk4APSvJoqMZXbOuS0PlX9k34rN4O1aHwxqbgaZejKyyHiMk8AV98BlRlkTDxOu5WBzxX5KxRyQnYglhurWT5RICrArX3t+zb8V4/G3hxNGv7gf2rZDblz8zgfjW2JopvmhrcxUtbM9j1rRrPxFpN3pV+ge3nQr83bPpX5v/GL4Y6h8J/FM0Dpu0e7YtA5/hBr9L/LIYgrgjriuQ+I/wAN9L+Jnh6bS9VhYybT5MuDlG7c1GHqulJFyhHc/MMITjHII4IpduK6v4h/DnxH8Mdal07UtPlNmrfurpFLAr25rleSM5yK9ynPnVzjkrMTFKBS0VoIKKKKACjGaKKADApMUtFACYoxS0UAJijFLRQA0ik2mnGjaaAGinBOacq4p6ruoAytbOyycD0riIQS7HtXb6zzEyH0rjIV/eMgouBraKMmTd2Fdd4JVU8daA+OFl3frXH6dmMSnNdp4NTzPFOknnPmKv5kVEh3MAnzkFYupxeVxW1po3Wyv/eANZGsn5sVS2Bmt4a/49WH41FqUYLZ96d4bH7mQDsKn1ZQqjjmmQP01fkBrVVCRkdKzdMI8vFayD5eKBoRVFOxTgKMUDGmmmpMUhFAyOipKNue1AiOk29j0qXaBVjSPsA1WBNXcjTZGCynOMfjUylyq4FJk2jOeKi8xQcF1H1OK+xdD/ZN8CeItFttX0/V7qW1nUMDHJkD2rRj/Y08JN8x1a8HfaRmuJ4+F7M1VJvU+K/Oj6B0J+tWIhu6sAPwr6o8Z/s3fDP4f6cl/wCINVZIuu1hjcK5nT/DHwFkVSupSlW5G2UjFUsYmrpXD2R4GBH/AM9FNPSLzAu2QLHn52B5A719WaN8Evgz4ocJpHiORJTwEebqal8Q/sawTwM+h63NvA4DDCn6UvrkJe69A9nYwvg98SPhd8LbMTLM0uqyDbK7pgj6V6cf2tvAayMUV2bPY18keOfgt4z8CSn+0NJkuLQZxOvI+vSvPE8qQEpEpKnBG3kGso4WnVvqHM4n3lfftZ+Bby1kgubW7MMgIYKM9fwrxfUtZ+Ad7dT3T2V0Jp2LsskJAyfevArYRnpHyParLcjHb0rSGDUHoyvaeR7rofjL4CeH7o3EHhkT3KdCT1/Cu/k/bE0DTrL7Ponh2WGOIYRUACjjvjrXyHIiH+BSf92hFCHgBfoMVq8JGW4e0R7V4y/ac8ceLbaWG0ePT7J8rmL5XI9+K8W82Wa4e5nczXMjfNI5yTTssQRnikUbenSqp0I09EjGUnJilt456VGyFtuHKlSCrDjpUgo61rJJqzEnbY9++G37Vt/4NsodK123+1WsQCrP1ZR6V7PH+2B4BngDSyuJf7mzGf1r4acAxlSARVT5FwoCj6iuSeDhe7RftGtz658afthk2c0HhfTjFKwwk78gV85WHxJ8R2XjVPFr6hLPqKtvKu3yfgMVyUlzFEyxudsrnCRjq34VfutJ1CxhjnvLG4to5fuNIuA341caFFKxTq9j660b9tLwzLYoNW0+WG9Aw+yPKk9zTNb/AGxtKNoyaJoouWcYVm7fhXyCsJkwP0IqdIDEQQvPtWf1Kle4e2drM7wePBqvjKHxF4ns0vLdW3raRJ8o/CvbR+2XaWFrFBZ+HjDbxjakezAAr5YlmdDhuB60LNuX72RW8sJCURQnbWx9SL+22yk7dAjb2JIrD8UftW2XjrR59L1TwiHjYYVw2dvv1r5vflsYo+72FZxwdO+g5VLjrlka5mkiTZCx+RP7oqDqak5Y0FeOldaXLoZSv1H2Sxi7gmmj8yGNstF/eHpX0Po/7Ut/4Y0a30vSPDq2ttANuQAd3HWvnQL6nFTGV+OTkdOazqUYzWpSlY+i2/bM8SRnH9mQH2df/rUyP9sfxHMGWTRLSSJuGXpkenSvnN13nJY5qWJvL7ZrneDpvdD9rI6Txz4pt/GGrNqcOlxafK5yyxnINZXhvxbqvgrWoNX0Wby7iE/NGej/AIVmzzqT6CqRnVpxHCHuZm4EMIy5PvWzhGEbW0EpO+h9Aj9r/wAbyMgS2tGbvuGP6USftbeOFBP2WBfdGFcXB8F/EkfhF/FGoW32KyVPMEcnDn8K8/dhMmQMD+dY06FKo7pmvtHbU9W8QftJeK/GGlTabqttC0Ug27mjBP515K3LE+pzSY9aXFdcYKGiMW7idaKKKoQUUUUAGM0YFFFACYoxS49qOaAExRinAZNLtoAZijFP20m00ANwaMGnbTRg+lACVPEgzUODmrUS54FAGJrmFSU+1cZZjdM5rtdei/dsPauRskxO4AqQL9knL+ma7Lwe6nxV4fA4D3S5+gNcnZLsRz/EQa6nwMq/8JjoW4/LDIGP4nH9abWgGVZ2+yxU+gwa5nVGLzYx0NdlCoXTUX1FcnfqFm5ojsNmv4ZOLeQmp9TAdDUXhsBreUemTVq7Xdb5I6GmQQafwuMVtx4KisSxIFbkAyPagaH7aTFS7BRtoGR7eOtJt96kxSY7UAM2/SjaaftOaXaaAI9vtUE8KvE6soK4zz0q4BQwzG4x1GKTA+0v2QtSmuPADWUzBljYuB6V9BSKGTcp2k9hXzj+x2v/ABT+sKx+4dor6QCfMFHTvXzWIf7xnfT2PnP9sGNW8K2oZd6YAyRnFfGdva28cSboI9oUfw19p/tiMw8F2QUrh5a+LC/mIvPAGB+FetgLchzVG7j45BaTCSyY20g5WSPqpr6Q+AP7Sd5YajH4c8XXBkgc4t7uQ89cc8180gc9KhuoDIg2ErJGd6lTyCOldGKoRnH3VqQps/WOZLfU7MefFDd2sy/KXQEMpr5Y+PX7NMN0s/iPwhF5dwuXltBgLj2FdR+y18TZfFnhr+xdRmLahYDHzE5I7V9BBzA+4rlW4YV4t50JHQoqSPylkhmjmkSWMwXERKzRtwR2qNutfSH7U3wsh8O6ovibTYjHaXPMwVeC1fOA5APQGvao1vbRTXQ55wtsNIyKTFSYppBzXQiEMopxFISBQOwlA68cUhI9KXPynAyfSpa1uOxreG/CmueNpXt/D1h9tnXqm7bXqHh39knxz4jkU6jJHpVqD86SDJ/OvLfCXjLWfAGrQaro115Gxw0kePvLX6S/DjxZ/wAJ14QsddLMHnjG8Z4yBzXn4ytUhonoXCKe55p8Ov2X/Bvg3yZryE6lfR4bdN8y5HpXlf7Y6R2V1oNtCqwWyjdsQYHevsVAOcLivkX9s+3aTUdPYLnYnWuHDVJSqK5rKKij5jiVVVW/v/dGOp9K9t+HX7N2v/EPTI9Ru5l06xf7pk6tXjmnCJNU0jz8CCOZWkz6V+nfg6a1uPCWly2QU2jRjAXoOK9PG1PZtWMVFM+MvHn7Jes+EtJuNS028W+t4V3OhOW/AV8/E/M0RQxyRHaykYIP0r9XpdkdrdyTsq2ojbIb7pGK/MT4imxk+IWqNpuPsxkckjGM1lhcRKpPlsNw5Tm8d80nWhelKK9S1jMaop23NLgelSpCwPzYwfeok7CtdkRRlIBXGelNaN0cIkbyzN0SMZNbeg6BqPibU4dL0e1ee6nOFwMhfevt74Qfs76R4Esor7WLYX2syjeyyjIRvbmuWtiFBaPU1jC58W6X8NPGmr2rXVvosywDkGRCM1UsPDF43iFND1VW06eQhVeRCFyfc1+oqxrDAUWCNIl6R7Bj+VfO37WfhPSNW8BR6lhLTUoiWjkjwjZHuOa5FmEpe7bUpwS1ZwPh79jOW9EVzq2txy2coDAREA4I7GvePAfwA8EfD+JTY6ct1dr/AMtrn5mB+teafsc/ES41/wAOSaHqM7zzWhIjeRixPbrX0yeGcHGQa5686qdmzSmkeTftIOqfDK7BxtQAbR24NfnwgDRbh/DxX3/+0wwHwwuPVicCvz3sJT9mJk4JdsD8a6sv2ZnWLAUU4LTyhAGQRmgJgc8V6rMBmKQ8U/FJjmlr0AbxTHJUDaMsTgDnrRNKkIy7ovsxxn6V6f8AAv4Val8SvFVtcSW8sejQsrM7rgNg5645rnqV1T3KUbnnFzY32n7Bf2bW7MNyhurD1qI4P1r339rDT4LLxnZwwIiQxRJEoVQM4+leDyxFH246VVOr7TUJRIQDS8+lSYxxzRWyZKIx1p1OHWnUAR0hFSED0pNtAEeDRTyKawoAaeSBVy1FVEUZ61ciGBnNAGNrzAb/AKVyViN87Y6V2OrwebHK3tXG2T+XdMOwNSBqQrlnA5xWv4OmZfE2mOpwTcIuf+BVk6UpIuN3OcmtXwGgfxXo6E/8vQY/QGnuNEqjZZRD0WuVvzmYj3rrsZsVA+lcnqKbJx70Ic2a/hk585fatG7jLW7gCs7wsfkmOPmNatxOqwSDvVGZk2WMgZ5BrorYAqOa5W3kKyn3NdNYNuUA0ii5tHrQVwOtPxRigCKkIyeKl2/SjbQBHtweaUg45p+3PagrmgCMD2pwXgnjgZp2KJPlic+gpS2Gtz68/Y5dn8OaiTwXlxX0qP3SEnkmvmf9jdj/AGPfIRwoJr6Zf5wK+bxX8Q7Yao+c/wBsVZG8GaftIAT5q+Kbfc0EB55XNfcX7XCg+BllIzgha+KIYiIU68DFerl/wnNVWpHtPanBMEcVLgAU4Yr0GZHoHwG8SHwt8TNMjDFYrwgyn16V+jDSeaqyj7r8j6dq/LXw/ciy8WaTc9WE6Rj86/T3S7j7To9hLx/qU/lXi4/4rHRS0Od+Jnhy28UeCdTtLiISbIi0a4/ixX5s3WmvplxPaTcTROwK+nNfqk6CW3nQ4OVPB+lfmX8R2Efj7WYFwGaUnPYAVWXVLSsOqc0BxjvUtpaXWpTrbWFpLdTseBGhYfmK6v4ZfD/UPihrsel2EbpaowM1wB0WvvfwB8KvDPw4sEgsrOJ51UebcyKCTxz1FdlfFRgrR3M40+p8TaL+zl4+11EmeyGnwOMrJKRgj8a13/ZM8cyI72mo2NyE6qB3/OtT9oz40axruvzaHoeoSWtjaP5bm2Yqf0rybwX8WfFvgHWrXULbWbu6tA4E0VxLnK55rFSrOPMVeK0H+KPhF468F75NT0t5oF6vbxlgK5GAvIxBiZGTqsg2kV+oXgrxba+P/Cdpq6Is9vcIN8TAYzjntXiPxu/Z00zXrOfX/DluLfUIRukhT/lp69qmhjnzcswcHbQ+LLy0draVg2d424NfoB+zG5Hw4hjP3YhjFfCNyhTzbdxslgfa6nqDmvuz9l7B+HKk9Weqx9pRTQUk+p7Mo3gEdzivlD9sdBu01gPnlYD8iK+r1O07a+Tv2y5UiGjhkJ288fjXBh3aqjWom0fK16AQEzhq9K+H37Rnib4c2osf3N5poHCztyPYVQ+H3wf1n4rxBtKvrKBh95JT82K9q8KfsX2VrNHc+JNWlkI5aGLlTXqYmvSt725jCm0cPrn7Rvjv4vEeH/D+lGCCY7TJADz7cV5LrvhnUPC2ozWGrRGO8U5YnqCa/RvwT8OPC/gl1TRNNhgKDlwvJ4r4j/aFuA3xTuyTncxOMcYrmwtZc2iNJI8sWDCs+5fl9avaJ4c1bxRdfZ9F06a6cnG5UyoNd38I/hhdfFTxEsGDHpkRDSMOhA6ivvbwd4N0PwRawafo1lHEo4eXHLHFbV8Y4uxi43Phm1/Zq8TW9qb7xJfwaNaYBDFxk+2DXQaD+zz4S8RR/Z7fx9aS3zj5UIxz6VB+1br15rnjiPS5byf7Jav8qRuVB/LrXh8Il06dJbO6nhkjbKsj4Ix71MY1KsbpjTUXZn3f4U+DM/wv8Oyw+GBbz6/KuRdT9AfavIfGt58dfC11JqNzM0ioS3+jHeAv0re/Z2+Pl7qt3H4X8SSKJVGIbg9W9BmvqogBDFMqSqR8wIByK4KkZU5XmbpxtofHfgz9sG5s4ng8UaZLLcxdCxKsT9Ca8r+Mfxm1b4s3UalDaaTbNmOHPJHvX0Z8c/2cdM8Q2Fz4h8PW6W+qWwLmFVH7zHXjFfHD200k7xygRvCSjoRj5hXdhoUptStqZTvY9s/Y7haHxk8SlgCpYjt3r7hfKbyepNfE37JeE8f3gU/6uPb+lfbU+CxFcmK0qM3obHjf7TO4fDG6kA4iXOfr/wDqr4J8FeF9f8Yy2ttoemTXjN951X5U571+kfxR8L6f4t8H3drq1x5GnAbpCGwSB2zXy83x8j8AAaB8OtGtYrC3HlyXUy4eRh15xRhKs9oImrFNmt4W/Y71y+hjm13UltWYZCxnlfbFXtb/AGMrlIWbTdemllA4R17/AJV2/wAFv2iD451CTSvEEEUN9jEcifxGvoFkwVAYkjrjrRPE1YO0iFBWPy88Y+EdX8D6y+l65ayRMxwkpBw1HgPwhY+MdYNhqWrxaXbA4Essm3NfePx++Htp4+8B3u2BBqFupeOVRhgAOma/N2a0aS2ljmTD27MvPXivRoVXVgZ1Fax9qfD79k3wVLDHqt1q0mrQKw2jduQ496+j9D0jT9AsobTTLOK0tY8bVQdcV5b+zCnlfCqwjAwMbj+Qr1+MAkgD5TXj1VKUrX2OinFWPnX44fDvwl4p1+G517xLbadOTkJI2K8T8Y/CXwTouiS6hpniuO7u1ziOObIb8K6n9ry3t08W2Lhd22PkHp2r51awt0XaFwevNehhaMpK/MRVnFOwkPzq3ovAoI5p6fu120mK9RKyscz1GgUtLijBpiEIGKbinYNGDQAzFIVqTFJigBipzVpRhaiAwamXpQBm6k2y2lPrmvP42Imc+prutbbbaSD2rhIuZGNKwG9pYJikK9cVr+Bv3Xi3TpB0jlB59zWVo5yGQd62vCUWzxBYr/E9yg/Wh6DQ+3z/AGZD6nJrltUz554rsbZMadCCPur/ADrldVjzI3FMUzR8LKNkhx2NXLyLdCxX1qPwum2ObI4xV8orWV0/cHii5JzkK/vOldBYg8ViQL+9545robNcqKLlGgBSleKcBxS7aAI9poI4qTbRt4oAhwaKeUOeKXZ60AMApsi5jfPTFTAUFcqR7ZpPYEfWP7Hcgk0rWGAxtbbX02eCfbmvln9jJiuk6mjZzJIefxr6m7nNfN4j+IzvhseC/tZgDwFBn+KTNfEsWTbpivtv9rIbvBFmOynJr4mUbYIBx93P516uX/Cc1Xcbg0gyBjHWnmkPSvR6mLY/RwZvFGhxAZD3AOPxr9P9AQx+HtNX1jH6Cvzg+GejHXPiLotsAzLGwY4+tfpZbw/ZbK1gXpGmOa8PHO87HTSVxWkKW90392Jj+lfmN8TGku/idfLAuZJ5HVQPriv0p8Q3kemeG9WvJG2qkDc/UV+efhmzTxH8XLKRn+WScuCe/wA1Rg1aLZc/isfZnwA8CxeBvAVi7RKt/dKTI2OcV3nia4Np4av5dxBWNjn/AICa1LW1W00+0hQYCIB9eKp67p8WsaNeWU7+XHLGyl8425GM1z1Je/dlpaaH5eajcPNq+sXJkUGW5cBnPUZrMuIWkt5o4InuJXXaqxDPP4V9bWvwd+EHh6SZNZ8S+fOZWdkjlzgk9DXV6V4o+B/hD/jzt4ZZIzkSMgY16SxD5OWKuc/s0ndm7+y1pmqaZ8OoIdRieFNuURxz0969oijGXjY/I6lcH3rxiT9qHwLaoI7M5Rf4VG2s+T9rDwlAwY2F02O6HI/lXDPD1HJSSNIyVrHzf+0N4btvB/jm/wDsir5EwaQj/aNfTH7Krlvh5GrHkZJr5Z+O3jq1+I2qy6hYQNHC2B+8HNfTf7J8hk+Hly2clWCiu2tHlpe9uCtfQ96xuOe2a+Rv2zyzPYsT8q4UD1zX1xGSFUEdBmvlH9sW2/caS5H+skB/WuDDu1RSaLqK6ufNvgfX9V8J+LdJvrG8mhhMiiaMH5CtfptpF+ms6PY6ioC/aIw314r8wFOx4G5+8B+tfpR8OmDeB9G/2YBXZj4RTTMaUm2dDGuJWI64Ir89v2lEe3+KNwmAFCFiR2r9DI1BkB96+Av2mozdfEfUMcFxsBrLBv37G07H0t+zBoFrpPw6tLqJR9on5Y+tezRy7X5OR2Hoa+af2UPiHaajoMvh2aRY723O2NWOCelfR5VkfLDDA45rHEKUZO4RSPg79qTT30z4mxNHGVjlQuW9TXkMoJwe7V9l/tT/AA+fxDoEWt2MRe8tuZcelfG/DwRtysv8SHqK9TATTjZnNVWpLYai+j6lY6hCSJreQMD75r9MPBOqtrPhDSr6R900sKmQ9a/MC7jMiQ88NIBiv0b+CUE0fw108z5LFRtB9KxzCKtoaQZ6KkfzMhBZXTB+hr86P2gdOg0D4p30FmAkDnJVf7x71+h1xerpNnNqN5KsdtEu5i3avzX+LmuDxn8RtV1GyO62R8Kx79elYYLm5wm9D0H9ke5J8e3wYnMjYH04r7rmXMkhx3r4W/ZEg2/ECTzPlwpb+dfdcgyWOOtLGv3y6J5d8d3kh+Gl0sb7SQS3uK+AbNgbRmHG92P619/ftARAfDi8PZUNfAdsuy2QHjjNdWXJWuYVzqvhJdyQfFXRI0zjO481+khdZVi/vlc1+a/wtjH/AAs7TZc52sq1+k6j5YmA6RKP0rnxyvNmlL4UjP1448O6tjBzbsK/L/XbUprWuKx+VJCMfVq/UPV0MujX64HKN/KvzQ8ReUNb17I+U3RGPoa0wStFodRH3B+ziR/wreBc8KuK9XiGML3zmvI/2aJd/wANYj1bdj8K9ciYlwT1rz60uWTSNYKyPir9rx2bxVbDs2FFeAkEyHNfRf7XtnjxNpTZPIDV88onLN2Ne3gf4KucdXWYwUtS7aCtdhBFgelJgelS7aNuaAItoo2ipNgpNgoAj20gHzYqXbSYoASnY9qaAS1SMuBkUAYeuDdCVx2riUULKy132pwNJE5x0FcMkZ88k+poA3dERQ7Z9K3/AAhHv8X6WCBtWYNWFpSHzm56Ct3ws5XxVZEHjev86TAuW0Y/s9ieucce1crq0YMhGK7G1AbS0IA5ya5LVF/etj1qugpbmj4XQeVIp9Cau2se+wuB6Map+GQSk2Oy1o2HFpeD0BqAObCgTH610NimVFc+B++x3zXSaYnyCqGXxGcdaChFTbaQrQBHgelGBT9tG2gBmB0pCuKft+tGKAIwM96GGEkPopqTb70qAbXB7jFJ7C6n1J+x5GVs9QGMAAmvp/HI96+Zv2Rf+PHVyOzba+m2xk+or5uqm6jO+nseBftauF+H5f8Ai3Ba+J42Lwx/7KgV9t/tYw7/AABBgZzJk18RWoxAvHGe9erl6fKc9bckwTSOdiFicACpYRvbB4Tux6Ctzwt4I1Dx/r9tpGmxs6iQNK6jI29+a7as1BXZny3Pa/2R/BbX2rN4jnjP2eLIQsO/WvshhuJ45rmPA3guz8A+GbTRrJVBiAaQgdTjmqHxG+J2k/DbRri7vZkN6ynyrfqx4618/KTrVHY64+7G55n+1J8RE8P6BDoNnMpu79SGCnoK+PfC2uf2B4n0W+VjvR0Un6nmtDxbr91411q51rUpWJkkLRJ12KelYEtpvZZM7XU7oyfWvVpUFGny9TBz1ufqRpd6mo6Rp90jhkkhXkepFWJUjljaOUExMMMB3FeH/s3/ABPg8U+HIvD11cKuqWQ24bq/0r3MkKxQghx1B7141WLi2pHRCSasfA37RHwpvPCniubVYbZ30u+O4ugPyfU15dbWkCxB4eVH+1mv081bRbDxBYTafqdutzaSggow6Z7181eLv2SlW6nuvC+opDGxJ8grnHt0ruweLVPSa0MasG9j5WlmU9I1x9KrvdFAS0agfSvVdQ/Zw8fQXZSODzQe6rxXT+D/ANk3Xry+TUfFV9FaaVbrvdYjgnHY12yxNJ6xZEYSW589yTCWNhl8HHykcV9w/si/N8O5B1LSbsV8vfGK50GTxNLaeHLaNLC1h8vzI/426E19TfsnxmHwKy4IAHWuXFz56ZcdGe6AZGTXy1+2QSIdGUA7VGePxr6o2/uQADk18tftk7ksrJtrbOFBA4rjw6fOjWo7qx8rnLJYoP45V/nX6TfDhNngTTP+uaj9K/NqSQRGxJ6hlr9I/huCPh9oQOcmINzXXjleSuZUo2OpiJ8wH0r4K/aVYRfEgIMBny3FfekfLAAA5FfBH7Uu5PiwwCYCx4yaxwbSqamtV6Hlek63f+HdZi1XR5mtruJsjafve1fYvwe/aXtvGxj0nW7N4tUiAUtkgE+tfI/hTw1d+LdctNG0+M+fM2GYc4r7e0X4MWXg7wJc2ejWsB8SXEeGupBkq2PWunHuEnYxpJvc9PF3o+pxzWpvLWaGQbZIyckV8zfFL9k+41K+m1TwjepmQljbSPsAriJPgB8X9Nvbq4s9Wy8z7yUfH6VYXwN8eLVAst7PIF7hjyK46S5Xo7GriQ+Df2WfEt1rME3iG4t7Gzt3DsplBD4r6mv/AIj+Cvh/okVnLqcLeQgCwo3zEj6V8h6x4S+LcqML6HUXjA6QyEZrhLzw34jt5P8AiZaPqEm3vKNxroUfaS95ktWPTPjD+0BqHj2KTStNLWukdCw+8w/KvDkdYVCpk9ix6mtCYAExyRPAw42ycVSe3cMGC/LnrXo04wjojCXM9D239lR/+K/ugP4UA/T/AOvX3NO+xnPYV8PfslW7y+NLuVUJQtgnHTFfbsuXkkGOM9a8fFP3zqpLSx5h+0C2/wCF9++evA/I1+fqXRkZlXopxX6D/HS1Nz8Nb5ApKopYgDNfntptvugDHOWdjz9a7Mv0TM651Pwwfb8SNETn55h+lfpcTujU9NwFfnJ8L7JR8RdIDD94pDAfjX6LrgW8AJ521hmEvfKpbFfVH2aPqBzysL/yr8vPFFyy6trBBx++kfH41+oOrjfo1+o5LRFf0r8xvFNl/wAVX4igCkOHxgjGeaWBldtCraI+2/2W5i3w1tVblgMn8hXsyoA4PbOa8K/ZO1SK88C3FujKJLdthTvXuokRW6cjtXFXVqjNKT90+SP2uIRJrlkxcgKgXmvnJ4xGQo5AA5r63/ai+HuseI7K01TSI2ufKbMkS+lfPHhj4beJ/GEjiLS5bSGIHzJ5furivWweIjy8rMakFe5xuPamkZq1e2/2O9ubTertbuY2dejEVBgmvRVnqmc70GbaNtP2kdqMH0piRGVpNtPIo20DGFfemFcd6mxUbigBqD5qn2bhUcY55qyF46UAUrqHEEpI/hrzx4z9rOOmTXo+oP5ds49RXn7n/SWGKANLR13zSAnrW14YUt4n08DvOo/WsnSRtMpA5C5rW8JknxBYPj7ku40mBtIuNPHbaMfnXHamNzt9a7Zl/wBBk4/iI/I1xmoL8z8UJ3QnuaHhQ5M49RWhbjy4bw44Jqj4TGEmc+tayrmymPrmkM5NDuuz9a6rT1wgrmoYv9JZs966e0GEWqAv4pCpqQDijbQBEVPpSheKkx7UmKAI8UYqTFGKAI8U+G2mu5UgtlLzuQFUdeaXFOtZpbS4E0MjRSjo69RSle2gLzPtn9nrwM/gXwpJJqU0MV1eEPsLAEZ9a9fN3anOLuDJ/wCmor83pPGHiidR5viG7bHABPQVVfxF4glb59YuD77yK8uWBqNuVzoVZJWPuH43+FJvHPg5tP0y4ha5QfLyCP518qQfs3eMTbxxfa9OR1GCJGA/rXGJ4i16I5TW79T/ALMx/rT5PE2vuMHxDf8APXL5q4UKsFoxOcWj1nwr+yVqNy6S+IvEdlawBvmihmGGX86+gvD0Xw3+DumrBbahZ277fnuMhmf8RXwtPq+tTqwm1a5lX1LlT+lUGM8gAluJpF/uu5b+tE8LOp8TJ5ktj628cftVWVnHNZ+F7f7RcHgXLjKnivlnxBrereKtVfUdZunuLliSEZshR7e1UI0EXKgKf9kVLuJO7qx4ya6aOHjTWgnK5EAMYxx6CjYCq5HC1Js9uaNtbqyJsWNM1jUNA1CHUNKm8i8hYEFTjP1r60+Gn7UOj61awWfiUNbagoCmVRwfck18hEDHTmk8pM5ZST6g4rnrYWNX1GpOJ+mdh4i0XVUR7TU4HVx8vzrk/rVzdBGSTOq8dQ4xX5l22o3tic2t5cRemJG4/WrUnijxJImxtcvAvtKa4P7LkndMtVj9D9W8eaB4atZZdQ1m3Upk7BJlj7Yr5a+M37Rl14rik0bwsjQ6eSQ9yeGcdxXgk8s95815dTXbjkGVs0ecXAUrtA7V00sFyu8inUTLfhvw6viDVIdLE4txcN888hHHcmvurwDe+DvAnhq30lfEFmZwmHfOMmvgoSBz8rPGf7yHBqJhOzHfcSN6ZNViMJ7TRaEKVmfpHF8QvCqqQuu2T8f89RxXAfFSLwV8TvDraVLr8UM6fNHICDg18OLEg6s276mpkOzpLKPo5rGGAcHdMbmdl4R+GemyeL1tNb8SQx6dYScTSD/Wc19oWvxK8B6VYWmn2/iCz8u1TYuHxX59Tp5q8TPn61SGnITlgGPqRV1cJKruxxndn6Ky/F3wdEoY61AADnKvmvGvjfpvw/8AilZJqFprsVtrNv8ANvxkyCvlL+zoD1Q/g2Kk8iO3VAPNIYgABz1qYYL2bTuKpK56L8D/ABFY+BfH0T6uVFr5mPtRGBknr+lfflnd2+rW63lhMk9vKN4dOc18n/Cn9nLT/F+gR6r4jnk8uThEjPzD0Nddf/BHxl4JVrnwV4lvJoY+VtJ5eAPTFc2JlGUuVbmkFofQwM4Gfmz6FelKJZABuAH1FfE93+0R8R/DWqy2Gr27R3MRwVYYB+laVt+1x4jiIE2mF1HXC5zWKwlWWqHKoo7n2GbkE7fkY+mKjlsbC6GZ7SKQd8ivmnQf2utOkuQut6ZPBERjei//AFq9+8K+KtJ8W6cl/o9ys0EgyRnLL9aycKlPctOEtjmPHHwS8JeNrdw1jFZ3nVJ4xzmvjT4k/Du/+G+vx6bqrEWFwcpdkYG3Pf8ACv0NJwa8Z/af0mz1j4fefLGjSxtlXI5GK6aNaXMkKcbbHJ/Czx18KvhtpKfYZy17MoaWTOct3xXYP+094AEzA3Vyoz/cyK+F7SOGWAHyozgkAqPSpjbxHomPpXXLBc75rmPtuVn29fftH/DfU7OayuroyW867HRkxkV8q+ObXwiusm68Iy+bazHc6g/cri1tYtwO3P1GamUCPOwBM9dvetsNg/Zu9zOcuZ3Pafg/4h8A+DZF1fXfPn1dOE28qor2+X9qjwEOS1wCBwDHxXxKYoyc7RmnbRjHb0qa+DhUlqy1USR9mP8AtX+CFH7tS+eueK8F+K2reAvE96+teHbWaHVJWy4L/K3vivKXgjfIKLz7U6KNIhhUAPrTpYKNLZg5p7nZ/D/4ian8OdUW+sArwn/Wwn7pHevp3w9+1D4R1aBTqGbWcjldvevjJnJB7GoQOOOtVUwlOpsNVLH2zrP7T3g3SoHW3Q3rkcIO5r5/+Ivx+1/xlFLYafEmkabIfuwDY7D3NeUCOMjLICfWhxuOTk1NLBQgyXUuNByWOSWPJPqff3ooApSK7bWVkZPUSijFFCAKKcKKYETVG3NTPUZGaACJQTzVgdKjiXA5qbFAGXq7kQN9K4Qkm5+prvNWjLQufauGEZF0TjoaANnS0w8g9q1PDEfk69bsejSqP1FUtMHDn1q9pSsde0xVPW4U0Abwz/Zq56nJrkNQUZf612TYkspNnReK46+xk5qVsD3NHwooxKvsa1tu21lXpgVm+E1+eWtdh5i3AB5NAzlVT98xB710Nlzt+lYKoVmZSf4q3rL7oxVCNEDilApyjjmnAY6UAR7T6Um361LRQBFtoxUtFAEWKMVIR7UYHpQBHtNGCKk2j0o2igCKipNoo2470ARYyaay1Jj3pwXNJDsQbaUAVKUOKAnPTmnYBmOKTFTbcdqTb9adhERFJipdtNPFDAZijFPowKgdhm00DrT8CjAqhDce1OpcUYo1AQ03YKfijFADduKMYp2KMGgEN5FMeNpHikJwsLByPXFSYNKCVOaUldWHe594fA/xZpvifwTZW1pMgu7dR5seckcV6ZFy7Zj2soPJHWvzV8P+I9X8LXou9GvHtZiclUPBNe6eGf2rtXsoorbW9JSfB/14fk+9eHXwVRS5onTGStY4j9ozxONf+IRsjZfZHtVI87ZjfXlm0IARnb619QeKPib8KPiKiHX7D7PdAf65GCn8a4W48D/B66kEsGvXUSNztE3ArtoVHTWqIqJPU8Qu7i2eNkmKlTxhj1r6Q/Y/0rXoGvrqRJ4tHZyAsgIB57VFpOi/A7QZUmvdQutRKDcFlXcAa7LUP2nPDmh2QsfDGj+ZbRDCbQE6dK561R1XZRHTSifRLYYM5IWJT8zE4wK+S/2mfihb6vHH4W0eZZVhfMzxn36VxXjD48+L/GEUsDzGzsGHEUXDfnXl3aWUFzJJ993OWNPD4OUXzSKnV6FW2gFvEEHap8A04LxS169ro5pRu7jMUEU+kIzRexNiM5pcGnhD6Uu0+lOwxmD6UYNPxiigViMim7amopJ2YWI8ZoC4qTbmgLQwsRlQe1IUAqbaKaVFAyLbSYqXaKNtAEdFSbBRsFAEBxTCvoKnZKYVoAEHFSgUxRk4NSgcUAZ+pZNtIccYrhFJeZ/Y13+qsFtHHqK4JBic8d6ANjSX3TFPatXRefEtnjosgI+tYmn5W644rodAAGu2h7tMoz+IoA2LRlbTbg/3pGH5GuSvIV3muutUEekEN97JPPua5S9baSTUrYDT8JJzKewzVmwmMs92npmo/CQ3CVQOCDU+n2xS8vmPSmgOfkUi5f61s2f3RWZKn+lOfetKz7UwNVMnipce1NiXPPepttADNtGKfRQAzFJt+lSUUAMC+1G0elPAzTtooAi2Ck2ip9oppUZoAj200r71Nt96Tb70AQbMUoWpCtJtNADdppAp9KlCnFGD6UAR4PpSVLijFAEeKaV5qWk25oAiK59KAmOoqXB9KAueopWAj2D0pNgqYr7Um0e9MCMJSbal20lAEYXBpTilkiYo0qozBByBWIPEkEcrK6sRnqBxUe0SdjeGGqzXNFaG1gelG0elMtLuHUU3Q1Lsx0qlboYuPK7MbtFRygom4DNTBSaeiDeFboaGEdyosMrpu2rt96kaZCFUuoYds1y+u3F1b3TxLcFEHQVzrXWoLKGiny3bNc856nq/U1OCsz0iWGKf76Rt/wABzVdrC26fZ4ziuUs9e1OPAlRWPc4rci1i6xnyI2/GqUoWM/7OrPY2bW0jgTCR7W/ujOKtru/iUAetYH9q3bn7oQexpk13cSH5pxu9Kl1IR1RccrrPc35GB4zUXNc2Xvd2Vcn6VItzfIOjH8Kh4k6Fkk7as3T9KXBrEGp3ifeUn6irFvqhf5XGDVwxCe5z1cpqwWhpYzRsPtSROJBkGpQPWuhTT2POlRnT0miPkUo5qTFGPanczIynNGypKKAI9tBSpKMUARhOaXZntT8e1KBQBHs+tIYx71Lil2cUAVyuPWkxVnZSeUKAK+KMVY8qo2j/AAoAiK5ppTmpcH0pNpz0oAasY681JtOCaeq8d6kA4NAGHrSkWhb2rhozmck16HrIEtow9BXnwX949AGlpp3XBPtW7oTBdd049zOp/KsPTF2uTXRaHEP7WtXI+44I/E0AbgQPa3OCeH2iuQ1aEhgB3Ndlbrm3uRngzN/M1zOtJscEetTHYEXvCIx5y98VYsLgSXF1Gv3smqnhLO6U+xqXR9q6heHr1pobMecFblv96tCy7VTuFP2mQ471o2ScA4piNi3XNWDHUVsKtBSRQBDso2VNtNFAEGz6UbKnwKNo9KAINnPSnbPapNo9KMH0oAj2UhSpcUYoAh2e9Hl+9TYo20AQ+UfUUnlH2qxt4o2+1AEPlGjyjU+32o2/WgCuIznmlMXHWp9uaTYaAK3ln0pCpHUVa2kU0rnrQBXpCKsbB6UnligCACl21KUA6U0igBu0UFV2tt+8B1pwGaNm3J9aN0C3uZtn8T5PCdtfaV9ghlMyECSVM4zXA6fJNdyughLNIxPA4Ga9Hn0myv8AmWEMR3IqW0060tDmCNQw4zXM6Dcr3PUo5h7OPIkV9JsVsbUKq7WI+bmrYQNxUrJhs9zWXqetW+mHaVLS/wAIHrWiahucXLKvO8dzRFuelR4IcDaRt6kjisUeLb1o9409mA6/LVDUvEerX0ZRLcxAjjFR7eD0udkcrxCadjM8W3CnU41jfeMc47VVtlAG7jOKpJp10HZ7hyXJzVwnylC5waxlNM9bD03SVmiy9yI1IwM1UGosDjPNQsxySVP1xSQeT5i724zzUNm/tGnoW11MhsFjk+1TLqoVv3gyfeun0mfw0dsdzbOxxyy1uf8ACD6PrcTNplwhk6+Wx5FYSqpbndTw85q9zmNM1GGRjnAHvXQQXMBHRa5u48HX+nTujxuCp44ODT1tLqEBSGFYuSeqOqm5wdmjenlt2bkL+VUri0imG5AoPtUKRy7OVz704CROhIpXN5PmWqEs547a4EUoB3HAz2rfu9JlhRZo23xMM/SuJ1JzHcBjnd613Xg3Vlurc2U7BkI4zWsK0oO5wVcJTxKdO2pnIecVIFrR1LRpLG5JXmJ+lU/LZTzXq06iqK58XjMJPC1HCSI8UhFWMZFMxz2rU4yErn0o2/Sp4raW5k2QRtK3oozisy+1ey0y4MFzLsl6EelSprY0jRqSV1EuYIpduabbSx3aCSJtyHoanEZxTuiJRcXZkWz604DFPEfrS7femIjop1FADaQgHrT6TFAEZSm9DU2KY6igBEIzg1NtG04qBAS2Kt44oAyNUjJtXArgSn79hjua9I1JcWc5A7V50ik3BzQBd01N04jAro9KDQ6jZ+rToP1FZuixKbzJHIGa3LVdmr6aB1M4NAGykG2GRRn5Sf1Ncr4gXaVrrw/mSX7dhIRmuM1tvMnK5qVshoveEVDiYD+7U2kw+XeX5I7U3wWpa5cdiKvWG1ZtQduhYimgZgTR5uG471o2iEADFUZSTcOR0zWrZAnmmI0YFxV2NM9arxA8cVdWgAKhRxULLz2qcjNNx7UAQFR6UmwZ6VY2j0pCgz0oAiCkHpS7fapgKdQBWKe1O2DFT02gCLy6DHUuM0bfpQBCY6TyzU+2jbQBBsI7UYPpU+2kxQBDg+lJip8UxloAjIpuPapSpFM20AR4NGDUm2kx6UAREUmKm2Z5oKUARBaUJ9MVLspNpoAao29OKULjoMGnYoxQAm0FlyCcc8VxvjjTp0KahbpvEfO3FdzFzkBcmob6SOytJZbhQV2nCmsqqTR04bnU04HJeEfija6PbtBf6dFMr9WbqKvy+NNBvHYrEsWTkegrkLXwlJ4hvHuYR9ngZvwxXR2nw70+3P71zKPauP6vc+kWaqjHlkZ+o6vprFmR1IPesCTVrRm2hSzdq7pPAWkq27EmPQ1dg8KaPacrbh29GFaRw7TuYVc3hJaHm0K3+pMY7eNgnTOOK6vQ/BsccZlvFLN2FdfBDDAT5cCxj0FSM2R2rRUjyq2Ncn7rOXvvCMEg82zLRzdcMeKZpFzPoshfyGSVT96MZzXVCpFweuPxpVMPGehths0q0Xcgk+IplULd2OcDG8rzTbbVdN1ksItqyehonVJZNkkalfpXn+ukab4hh+ykrnkgcCuWeFUD18Lnk6s1Fo6bVEe1kO1jj0FZT6t5Od3atuDTbq/hE85IjAzuNcZ4jvLeGbyYCGJ6kVlTj7x7GKrKNPmFutTjv5uFz71q6aWt5Y5FJUAg8d6460YpPhT3712On3CMqhquvFW0OLA1XKopHq+k3i6vpbRMoLgcMfvVz1zE8TsHXaQeKs+ELhIpQA+B6Vo+KbdVlSSNeGGSaywdXknZm2e4T21BVuxzlIFpwyRTgODx/wDWr2r82p8An1Of1DxZqvhi6Kaciq7jBc9QD6Vzdppkup3j3mo5Ic7i7dzXeXGjw6nHi6Ub15DY5p39iK9n5JlAA6Y61yVKc4vQ+kwWLoQhaoV9LsVtk/dA+Xjg561oFAKjsrEadF5YcsD6nNWdhA4HFbU4ytqeJjasKlZuGxBtppXmpsZPWjbWqOYrlaNtTFMUwimK4wqPSk2in49qNtAxm0UxhUpWmFaAEiX5qnIwKIVqd4m2k44oFczL7m2dexFefTAC4baO9d7qLhbeQ9sVwKn/AEhsjqaVxmxoxxPIx7Cugs9p1KylP8Djn6msDSMETH1rc05d72in7xnQfhmncDeSPy4rv/alc/rXDakd1y/sa7508oX2W3AMecVw1zGHeR/epWwM2PBKkTyNjopNS2Ayl4p5O4mjwW4SW846RkfpTNHyv9plv4SaaAydpM5HvW5Zw4UVkRqWn/Guks48oKYE8K4PSrQHOaagwcCpD1oASkwPSncGlx2oAZgelJj2qTbSbaAGAUuKdtoxQAwrmjyzUgGKdQBHtNG2pMZowKAI9tG2n4oxQBHt+tGKkxRigCPYTTGQ1PijFAFYj1pNvtUzLntTdvtQBGVFMxip9p70mwGgCGnKM1J5YFLtoAi2GjYalxSYNAERQ+lLs+U8flUhFLzt46+lJrQCrcX2ladpM11eX3l3i52wKea5HRl1DxbIZ7pmSzU5AxwRWpqXgeDW737ZM7AjqPWultbWKws0toAFVRj61ioXdz01iaUKVqa1I47aG1hSO2YBAOQKd74pwhEfSlK1ojzpTc9WMNRv1FSYppXNWSiOkxUuwY6UeWKaAaF96VV5608KB3pdhPQ80MBnn6dp9pLd6lJsKqdgzjNc/wCC/C8viG4l1u4t3a03kI2MgD1rV1/Rl1vTZbaQZlx8uKzvC/xF1PwFolx4eurVXicFUdh0zXn4hTktD6HKHRXvS3LXjbxHDp1l9htWAGMfLXkW0yO0hyWY9TWnrF8L27aRlA3c4BqrBJHvAPQdKwgpRWp6mJqqtLlRLZ6fIzFkUljWtbWV3Ef9W35Vb0nUYIgAwGRXQR69EhHyKc1NRyZ04ajCKWo3w9eTW9wqvH3716LqB+36b8pzIo4Fcpp91ZXTh9qo3tXYaftADoQykdK4r8srntul7ak6ZxsalMq64cdRUqp7V0Gr6Qf+PiEAk9QKxxEwPPavew9RTgfnGY4KeFquLWg1FxTtvNPCikAweK2PNbuRPhAzN2HFRalIul6O95JcRliuVjDc1YkCyKVx83rXlfiGxvodQkMxkKbvlweMVFRu2h24OlCcveLkfiXVJ5BJEmF6hfWuy0bVzqsHlzpsuF9RXKeHpLQMqzMBzjmuzg0+2Mxmt36VyU5ScrHs4rCUI0bq1y0YwfqKaYR61Ng9fWgLn613LRanzcklsVmjxTdp9Kslc9qaU+tMkg2GmEYNWdtQsPmoAkgXjNT3GowaPbSXVwjSqB9xRmmQKcZqyYkmjaOVQysO9ROLktDShLlleWx5ZfX19rtzPd27NBan7seOKybeZnlKnkqcZr0PWNDEcTLbyCJWHIxXFfZktLhoAdz5yWqKUJJ6nfiq1GUFyLU1dKXYzr2Ck10Whr502mg9TNk59BWFpi7mnIHO3FdJo4jiELt/C4H0ya2bVzzWXLB9+kjcSWK8k+tcu0JAlZunNdnaQj+xTgchcVzUUBlsrtmyduefSojsOfxMk8IHdJMB1bNO0tQTqX90uRUPgdtt7MCfuqat6PDsS93dGdjVIkzYFH2o47GumtEwgrBtEH2liPWumt1G0CmA8LTsYFSUY9qAIwv0pQvtUoWjaKAGbRS7BT9opdooAj2gUbR6VJtFBUUARbRSbalC4oxQBFt96NtPxRigBhWk2mpMUYoAj2mjB9KkxRigCPB9KSpqKAISPWk2ipsD0owPSgCEgYpuKsbfak2CgCDFLsqbyxSeXQBFspNlTbPek2GgCLZRsqXYaNhzQAwbsYzgUY96k2Gk2GgCMikIqQxmkEZpMCPHtQVz2qUoR2pNvtSAi2+1BXmpOhpduaLgR7felCe9TlBmhlKpkYyOaG+o0S21qxOQTmvM/idfK+oQwqVyi/NjrXQ+L/Hlhp9kU0iVm1IfKyOcD3rzTTobnxFq6tKzM7EFnxkfSsXU5tD1sNR9mucoywTm2WZEdlPG4iq8Mr5+dGBr3H/hG7M6clqIhuUfex1rAm8Essny+WV7Vm6bOmGJpSersef28gyOSp96uo78ESD866vUfB7Q2oLInzdOcVxd5Ym1uGjUjcvvUOJ3RnpeLNeK9lixiXBrc0/xfeWbAMSyCuHW4ki4Y7gKtRapCq/Nu4rGdJPc6aeYOk9z1Wz+IiRSosse6NvvA1sNqOnagvmWTrubkrnpXkEM0dwm6JjuPYmkJurVw8crAjng9KVKPs3oViqkMXD3z1sgAZOKYQcZ7VxWkeL3LpHeuCBwDXaQv56K4O6I84Fd8asXufKYnAzpO/QaemRmmm2iuV2yIGB65GavGIHleRTPKx6itE77HGm0Yp8L2kM4kRAB1xWkkaQptjUAfSrBU470xl6U4xS6FOtOWkmRAdKXbinY9qMe1UQ9SM5pDUuKQjFAiKq8n3zVoioWQ5zQBLCOBVkLxzUEParQxigChqUG6Fmx2rzieH/TXJFen6mdlm30rzeZ91031pMDT0ZBukNbFinmLaovWS6UfkayNGOxJG9RWzox/wBKsx2WXdSGbmnTB9KEaj+GuUGsCyiu7R7f5nY/NXSaGQLVc/3a5nVg/wBomPHftRFaDk9RngzK39y2OGU8Vs2hGL7PASsnwjG3nykda0rQM1pqDHhmfFUSUbAhrg49a6aBTgYrmdPXZP6811lsnyg4oAkx7UVKFHSniL1oAgFOAqbyxRsoAjCil204Jz3p2ygCPbQV4qTbRtoAgIxSVOyAiothzQA3FJin7KNtADMUYp+2jaaAGYoxTtpo2mgBKNtKAfSnYPpQAzbS7RTsH0pdv1oAj20balxRigCLafWk2mpdv0o20ARbTRg+lS7aaRz0oAZg0Yp9AFADMUYqTFIVoAZijBp+2jbQBHg0YNSbaNtAEWwE0bfSnbaMUANAxTuoI7HilxijHtQBg3fhHRryczPbKJT1OOtW9O0LT9KybW3VSerVp49qMe1SoJO5oqs0rJgpKnP6U12LNuxj2FOpNvFNpENtlPU4V1C2EL8ejelcFqXgDUPNaS1vBIH65Fek7A3WjywhyCfzqHE6aeJlDY8euPB2rQKS0JceqisW60m7h4eBwfcV9AJM6DHUe9Nktra7P7+2VxUOlc6Fjeb4z5/t4LpCAiHP5VofbJIGWO6Uxhu5r2Kfwzo0uSLbYfUGub8ReBreazeSz+aRBna3NS6Vtzto4yleyZxDWYbEq7WU9OK3tB8U3Xh47JoxPbfxAnoK5bTbiSJ3srgFZUOMGtMwrnY/Rq5J6M9WPLNHrOj+ItE12PFpdJDOR/qiO9X5LdlHzfN7ivn+aIafeeZG7pjnKnFdZpHja+sNkhYXFuOCp5atacpR6nm4rBUp6xVmellfTOKjZeOlU9M12216Lz4CUJ6oeoq8cH6jrXbGV0eDOnKLaZFg+lGD6VJijbTRmRUY9qlxRimBHs21HIBjgVOeOtQyYPQUAESmp8VHDxU+PagCjrzBLAkeleZmQNITnvXpeuKGsGz6V5iyYnIB4zQBvaT+8jdAcYrU0QGS8j7YkC/rWToCl7sIOeM10+gW4fVLWIDrOCfzoAu6JF/oqL/sgVi67aeU8h7Gui0QZs4mPVl4rI8SsVB4pQ+Ec/iKHgaPdfy7ugBrXjhVDeIMcZNZfglsX7Lj73FawGL3UwucKNtMRh6ah84k+prr7ZcoBXK2JInYe9dbaDKA+1AE22lA9acFNOCj0oAjxRipNgo2fWgBgFLinhKNnvQAzFIV+lSbfejaaAI9uO1IU5zipNpo2n0oAi8vPakMQqbBpMGgCHy/ejyz61KQRSUAReWRQENS0UARhTnpTse1PFLQBHj2pQOOlPpcDFAEeB6UYHpUmKNooAj2j0pCgqXaKTaKAI9gpPLFS7aNtAEPle9HlGpSuKABkDuaAIthoKGpH+RsGlAGKBkOw+lBQjtUpAppHNAmR7fajbj1qSigCPHtSYHpUtB6UAV9vNLtNOxzS4FADQuaXy/anqKeBxQBCYyKTHtVjpTaAIaQ1PgUxwM0gIx0p44oAzS7SO1MBuDTlPlgtjJpQtKFzSY1pqjyz4h6L9muotUhjIUkbzVCVfMtYZ+ckCvS/FunjUNAkQc7PmxXE6ZbCbRVVgDInXNcOIfK7n1GUc1WLuzBu7dZoCxAJrFsVktbkncQueldaIwSVArGu7cLIRjvWKqcx6NajZ3LsFxNotymoW7Ewk5kQd69L0vVIdZskuYCBn7yZ5FebadGXgktiAVbsaraJqU/hbWVVifsztyD0relJ3PNxuDjKHNFHsKrlRxg0uD6VKs8V1BHPCQVkGfpTTmu5LS58zNOMrMjxRin9aXbQSRMuahZParRFMK+1AEUYwQanxxTFUZFWwgwKAM3Uk32br7V5jKoW5dR2OK9S1Vtls+OwrzOWLfdt7mgDa8MRj7cWI/hxXU6Htj8Qwg9A1YHhwBL4jFdHp8Hl63FIR96VR+tA0S6AhayjbPCJWZqDpetKH425/GtjQI2/spMnqK5u/Rhcy7eKUNhz+JkfhI+VrbgdMmt7SY/MudU3DmRywrG8LqF1jd6Ka6DSQBqOoof4VLVTJOft0Au5AOzV1Np9wCuZg5uXOO5rprMZQGkBaAp4X2pFFSqvFADNp9KTb9amxRigCHbRipsUbaAIcUYqUr9KNtAEWDSVKVo2igCKipNoo20AR00pU22grQBXKUoQ1NtPoKNp9KAItuO1GPapNp9KDxQDI8e1Linge1OIXvQJMixRipdo9KNgoGRYoxUnlijZQBHijaak2UhU0Cd2ROjAbgOB1qC+nis9HutRFzEDb/8sj1f6VfQEEA9PevMfFPgm5uNUedbyVLF8lwG4rOcmjtwNKNSdpHVeGvFMPieJisZR14w3Wt4rx0riPh/pMdldTGBt8ar1rushh0opzuPG0oUZ8sSIqPSm4qcrTNtaHER4oxUgUUhFADMUlPxSY9qAItoJzil2+1Sbc9qQAg0ANCn0p23ilx7U/FADMcUmKkxRigCPFNKjuKl2/SjbQBFgZ6Uu32qQoPSl2igCMLmjb71KBSY60CZW1CMnTrhR/EuK4PRF2W92mBnJrv9Rfy9OlPtXEaLCXWZx3Y15mMep9bw7G8WY84CyuuOazb2LKh8VrXybbljVS5UbMetc0We9WpXZVtcqwccGq/iSz+2WwlHDrzkVchj24Aqy0fmwvG38XatITaZjOknCx0/w2uHvtE8pmy8fvXUFScjGMV5J4S1uTQNda3BAhkOCD6V7K5EgDr0YZH0r0KVRy0Pi8fR5JuxV2UFDjtUrLim10HnkJU+lNYY61YC4+tQuuTxQA2NQWFXkjBIFVYFy+ByfQVqW0W4Dj8aGC12MXWIcxbR6V53PD5V49eq6tEEhdsdq8xvDvum+tAGt4diDXgat/z9mt2ca8HzQaxvDrD7dg9sVq+Xv8Q20nO0PQxo1vD67tLU9flrnL0YnkOOprqPD67dIjH+xXO30Z3ynrgmphsOe5W8MRiTWMZ68Vp2G4eIdVH8J4rM8HqzeIIx6k1vaYEk1/UVz+8Ys2KokwkXN5IB2aumtFxGK56BSdQkU92NdTBHtXBFAEqqMDin7RTlUelO2igBm2jbUgWlxQBFtpCtTYoK5oAhxRg08oRSbTQA3BpuKk2mkKGgBmKMU7aaUKTQAwCgjIp+ynbc0AQ4xRU3lijy6AIasWNhcanex2trF5lxITtU01UA61zni3xbqng6S3vtKiZpEUgsozisqsnFXR0YanGdS0thut+Kk8Ma4dJ1WJIpc4+Vs4rdR454kmiIZHGQa+fzdan42137TKZJ7qaXczMpGPavoLTdOOm6ZBAVYuFG7PbilSnKS946sbQhBJwF/CjBPapNvpS7cVrc80hx7UVMBzTtoNCdwK9LipjGMU0rihMCPFRXVstzayxMfvDGD0qwOTis5fEthp19+/j8wxn7p6Gs6s1GOp24HDVa9RezMbwRFHZXF/aSbY2UnYDxn6V1PkkZJGCK8q8YeI3utU+22ca27K2VCnjFei+FdWk1zR45ZeZwBk1lhqja1O3MsFKm+dlxhUeKmbAJGaacEfWuo8UYBkZHSkJB6VFPfW2nqz3jhI8fd9apxa9YSKZYwUj7sTUTlGKvc6oYOtUV4K5oYzTgvPb8awv+E68PJI8ZuCCvcHrSv438PorMbpzxnG3OaUaie5P1SqnZxNn53k8tIyzYycDNZUviPToLr7I8oW6B5U8VyEnxru9Dubh9Js9/mqY9zpuwD3rhrdNW1zU3vTEZLmYnkDgVg60k7Ho08DTt77Pf403xrIpyhGQRTwuaq6Da3NppUCXRO7byD2q7gZyK6I6q55NSKjNpMZto2VJRVkEW0+go2e1S4FJigCIqfSjbUhFFAEeMUdjUlAXcQO9AbmZ4gk8vSpOe1YGhW+NOL+uTV/xhceXHDZj78nFPsYhbaUqkfMFrx8ZL3rH3nDtDlo3Zxuop/pLfWqtwmFBq/fLuuSRVW4j+WsYvQ9qokUkG5htqzGpDZqGL5Tgda0baIuQTwKq5hyKRwmtK1vrELjIJcc173pFwbrS7Zz2QCvGfF9vtmhkXrmvX/CaMPDlmWzlhXdhmj5HOIcrNPbupDFgVLtx2pSOOa7z54rFPaoJF5q6VFV3Xg0hogtbq0tpybuYW8Y+8zHGR7VyOteO5r2/NposmyKI48zHWqPxO0u8vIoZYNzRxjlVJ/pXLeHrCeMo3zFc85HSuWvPldz3stoUpK7Wp3Vl4zuoQ9pqxBR14kI6msJkWa9eVWOwnNdDeeFxq1mk0Q3tF8x46VlRWnlyMMYK06EnLU5cyoU6UvdNXQomF6pA6108lts1a0wMZdc1i6Cdt4mRXU3nyalYv28xa6GeWiLw2C2jKSONtZM0YYXW7tXQeGFx4fgyOSmawrkMYLgj1NKGw5bsx/CK/8VF14GRW1a4i8Y6ht6LFWJ4SVm8QxqO71swgt411TnGcCqJM1G2ag4xzuzXVWx3oK5aVM6pIQejYrqLLHligC4FHQU4L60oUYFPAoAYFwafilAzS7cUAN20m0elPxRtNADNvtSFM9qkwaaRQAwoKNgp+KMUAR7KNlSYoxQAzYKcFWlxRg0AJtU0mwUuDRQAnlg96SSCKSEpNGskZ/hYZqTtSiITDaxwpqWrgm09ChZWVhbM729tHCw6vtHFXVYspYSiRfVa8u8f+M1sUn0qxc7pOGZTyK53wB4j1TTr5UlkluLSQgZc5ANZc8U7HoPCTnD2jlr2PcGXPIFM2k0+KQSYI6MM5qTy+fxrRO5w2s7Miii8zeqgtIBkKOSa5mXxxplprC6ZcpNFcnsy4qbxxr+oeE1hvLCIEhcFiOma8FvtfudS8QPqNyN10eRjsaylUalZHq4XCQnScmfTzxcKUO5WGRUZjYnpWT4FmvbrRIZr3PzL8u7rXRyyRQRtJLwig5rb7PMzgdNe05EU4bd5GfA+6pOa8O1vV2XVbvLdHI4r0LVvi7p+iw3FrFAZJZMoDjpXkDuby5lnbpIxavNlKUpeR9Ngoxw0Pd3Ip71pgcnLda9A8CeL4NIg8qYFgw5x2rzmQL5jACmqxQ/LxWibS0HUkqr5ZH0EnifS7vKhwu49TSX2t6dbwE+eAqj1rwVLydEPzZAq7YRXuvXMVpA0kjOcD0FPnnscUcDRhLnka/ivxXJqrfZdOUs2cBzyGpnh34f6xqqqb67ktoD1TOMj2r1Hw54FsdCtVlkRJr/HcZCmt54d3LAfTsPpWkKbfxGGJx9ny0tDltP8AhzoFnEPNhWdh/E3etA+E/D6/6vTlX6GtYQhegFBXHaupQitjypV6nN8RkReHNKhk3R2ac9ioNacNtb26Yht4o/8AaQYIp4XnpTsYp8qJdWb3YqknhiWHvSMAegxTse1JiixnYbijbT6XFFgI8D0o2ipCo9KaRx0oAjI5pKfikpXAbinwsElDN0UZoXjn3xWL4v1f+yLDZGMySnAx1FTKoo7nThqLqzUUc7d3B1nxF5vWOJiBWzdt5dsR7Vh+HI2RdzrmRzkmtbVG2xMK8KvLnm2fpmX0PY0VFnLTHdMTUbjPFKzZlNAO6mthyd2U9mJBW1ZqGUYFZ4QbuladickLUtigjnPF1qRDEwHIPNeueGVSbw7Ysg+VYxn615z4jUPZPkZxWj8N/FICHTJiSB90114Wep85nVHmjdHoTLgnimlfarEikvn1FM284Ir1o6o+Oa1sQbR6Gq8innir+0UxkBoC1inDbQ3AKsAQeCCKsQ+GtLtwJFgzIeTjpS7AOlaEXCKPaokkyoVXB6MryBIbaQRRiNcHI6V5XPMRqEhzhd3SvUtQUtFIQeNteWXEeLqRvU04x5Spzc9WamlT/wCmqBXZaipkktG7giuI0pMXsZ96765A/wBDP8XmKP1pvYzQeGQX0KM+iYrKukxaze2a1PCbb/DyN/s1VvFBs56UNiqitJnJeFZmi8T2wA43EtXVpYhPE9xcE/eBfiuY8OR58QqQOBxmuvdt2t3UanlI+aog5R5D/aUmB1Y11VjzGK5SeMrfsQMYPNdZpoHlqfagC9nHFOHSpNgPNG0DpQA0DFLTgKXbQAyjFO20u00AMwaNuaeAc9DS7DQBEVoxUuw0bDQBHRUmzFG32FAEdJinlR6UbaAGYoxT9tOCfWgCFmEaF24ArJ8R6kLDwzd38NwhKnAXIzW9tBBzwDwa8j+Jnge60qKTU7a5mlspOWiDZAP0rCrKS2O3Bez5/wB5v0PNLOG41q+eSZs73yW7gV6poWhXFytvZWcG23iYM8pHX8a5bwNYwPcW81ydtu5w5PYV7VrWr6bp9rbW2n3CR24X5imCW471ycybcn0PdlQmrU6a+L8C2IEto0hjlUyIOeRzTgygDJ+buBXjWua1Ouro1nLIY1OSoJ+au2s/iNLHYpC+msHAwGZetaLFwjuY1chrS+E6/W7W0vdAnF4AYVXKt71474D8N6frHiK4llgEsMLZQeprQ13UvEXiQGGzh2wNwUHAOa2fBXgnxR4QVr+800fZ3GRh+1R9YhKV7nXDLqtHDuFtTvo444WMSARpnAUdqyPE9/bW2nyxyTBXx0HXFcfr3j68snliHlwKSSQ3X868u1jxVdaqZERmPq56GtJVm1yrY8uhl8qU/a1NDM1WdLnXmFuWaMnkntV+5lS3TaDyaq2FsLeDzn5b1NVribzpPxqVorHopcrbfUsBgRmmtjk0w0h4yaCL6kF9M0UWU617d8KdHig0Rr5wplfBB9K8NuV89xEDz1r0XwT45/4RrTxaahG7W7N27VSdjmrKdSL5Oh7YoJPfJoMTDJINeeD4q6XdSyxEvDGB8p/iqt4Q8d3eoeIntCpnsScK7H5gK6FNM4HgJqDmz0hkPpUbKR2qy/LnAwOwqJkJatEzzrWdiEA+lOAOalCYp2wkUNjIs0gGTUgQ56U7YRSuDIgvPanYHpTiOaSqENK+gpuPapMGgqDQNEeM1GetT+X71YFurRYYgRjljU7DSb0Rn3EsdnZS3MpAVQSAe5FcBFFLr88uqXjN5OD5SHpxTfFmtDW9WXRrN2FtbvmRl6fjWjHA3kR28ZPlwcAjoa8zF1uiPr8iy2y9rMWwYRqzHgjtiqmr3eYzz1q4xWBWJHNcxqd+JXKA1wQTep9ZUlyLUrxNvkJqyFwaq2Qy2avkVq9DkhqiPHNWrUlZVJ6VBipIgQ4FZyehpFak+pW5uFdcjY4xWL4O8Lztr5Lzrb28TlvMdutddZ6dNqcUnkgARjJY9q8/1GSfWJJra3mYeU5jLKTyfwrShJo58ZSg46nrLeJ9OTWl0qK8F0x6sMHFb4UgckH0ryvwF8P7myvhezSFMc7n716yyggY6AY4717NCba1R8HmXs4z/doiIqNulT7aYy571r1PNvcgx83Wr6fdFVAvI5q6inAAphYh1BSLJz6ivK7wf6Yy4716nqxb7IVA7V5fdI328g8H0osBf0lN2oRiu3uztNsPQiuP0iJl1BW9a6a8uA08cY67gAKT2Giz4PIHh9F/2ap3so+yzRgdSan8FEt4eXjgLUd3FmFyB3NKn8JpW+I5fQmKa7EMcF67Wztg2t37g5ZxiuN035dbhPcMTXdaZmPVXk7AE49aoyOS1CIJqMiYwc1u2IxEtY2qMJtVkkAwcnitvT+Y1oA1FGRS7DQBwKlFAEWzBpfLIqXFGDQBFsOOlKFPpUu2lwfSgCJVIOaeRTscjiliiad2iiIMyjO0njFTJ21KhCU3yx3GYoIxXGz/ABFs7LxB/Y95EschO3zAcjNdpgMqup3IwyGHelGSlsVUozpO00MNIR7VIVpNtWZkJXFAFSMtIABQAm0U8LxSDBOBSltvQdaTaGo3EyFIJ6Cs7xlKq+GLyNwNssfyA9Kff6nBZMAMyzn/AJZrXC+KdfnRCLjEsv8AyzhHYe9ctWvFaHsYHK6s5KrJWSOKmxY6fb2yDZIRuyKktneYJDBuMp6knNUI4b3UZyRG7sx43D7vsK6vRdLOmIJZmBl9PSvMqS5U2fY4WPPJJq1jY0rw9FawrcXShpyOciqWvXTR/wCqjwq9MVppqZuAfReKimjiuFwyiuXncpantSpxcbR0OOj8XahpcweLqDnkVrav8Z9d1LT1s5ZsIBjjinXuhRygsqiuduvDxHRR+VdMORbnk4ijW+yzmNQkl1R2eWTdnrmo7e3EK4fGBXQnQnUfdqFtFctgg10KpBbM86eDqN3ktTJknDJsHT0quIBnIHNdPb+H/LJYqWz2ouLHahSOI7jxVKoiZYOTV5I5baSSMdKjkYAHnn61panZz6XCwuIXhlborjB+tdN4E+G1z4oha7mbZHjO70rSHvHm1oumrs4K1jNzdRwqxLucAAV9BeF/A2lwaVEbyESXEo+bdzirGk/DXR9FKzeX504OfMrrIYUiQKFI9M11Rgup4+JxV1ameb698HtOv5w9tIYW68VueFPBdh4b+eMeZcjq7V1UhjBxKQBTAYm/1ciuPqKu0UY+0ruI0DJ5780beafjb6fnT1iY4PAX1Pam5JHMld7EZQ7QRSyTRQ53OMr2rP1fxRpOhxsLq6Qt22sDzXjPiP4q3NxczJpGU38bmQnNZupc7KWEctZaI9qsNd0vUrl7WC7jNynBjzzVx1wWU8EV4T8OvD2r6l4gTUmWSJWO53Ixn6V9ASwrtXJ+YDBPrVxba1M8TTjB2iUintRsqTaaUCtDlRGEHekMeO9TFeMmnBVEbySHbGvJYnpQnYFdvQrbe+eO5rgfHHjcWUY07TW3zSjaxU5xXP8Aj74kyxGTTdGPHSSUHqK5HwramaR7m4kZ3Jzlq58RVsro9bLcI5TTkdp4d0oxJ5j4MsvLt3rqV/dKI04FZUWpxRooVRwMZFMl1jA+SvAnzVJH6LS9nSgkiXWZEitmO75q4cOJJGOc1q6tqO6NgerVi2y5bOM966acOVHDia6lKyNi0GxAatFwTmq1hYahqsiw6dB58uec5wB9a05vDWrWMpingRX9A4NTLcunNWIAu4ZHWlVhG6l2AUdatRWMkaEz3UMIHUN1rJutT0u1ZkjZ7m56g9UzS5W9ipVYx3Zvf8JImkaDdwciSUnDD0rkfBUYnvFZxy8mTmrFoH1Rnkv5UjUj5LdTkUzwfcJa+J/IcYUnAPpW1KNmrnJiarlFyj2PcVjLIEC4QAU4qEGKsKPlBHI7EVAc817UbWVj4CvfmvJDCM1Ew5qc9aiajqcyGKh3Cr0aHIPtVROtakSArTGVZbdZoJAwzgcGvL79BHqUvqK9WnzFDJ6c15ReN5mpTH/apsDT0t/9MTPeteOHOtQE/dLA1h6Uu/Uo8/d6V1c0Ii1CEj2qJDJvBAUeGF9SKLqMC1fPRRUfgn5fDUXP8NSXTE2cvHc1NP4TSt8bOMsf+QqmOpYCvRLeIpqFwOyxDNefaeAdWt8DkvmvTI0/0yTH3pFxWhkcFqMZjvmPqa3NNGVUiqGtRhb1lx3rU0lcIKANRU59ad5ZFSIvU06gCIClAHSnFeaXbigBNvtT9nFJk1IOSoJ6nAoG0RqMuFHevK/i14mvvCd8s1hOfNddhVTkj8K2/iD8QT4OilighWe6I+UE9Kx/hr4bTxb9o8R66DdSyciFsYSuWUm3Znq0IKjBVXueS6Hbap4u16GZlkZnbLSEEY/OvqOxga20+2t2YMYlxmpY9JsLP5rS0jhJ9FqbZt6c1rTioo5MTipV3dojK0hWnkelIQSK1OQi2mjywaeBT1+YnDDjqT2qJOw9Cq0bLINpwv8AEe2KwrvV5b+9ey04gKhxPMT8q1z3jDxzm4fTNPban3JpBXC3/jCdIfsdiSoxh3U/e964605PSJ9Dl2AgrVKp6Xq+u6JokHlpL5s/8cwPf2riL/xvpazb/syyyep5JrijbebmSad2ZjkqTS4hQghBx3Ncyo9W9T6F4zTlgrJHTx+KjdMPs9qsAJ6gVaS8lLb5GzmuTW+2n5QBUx1ViADUThdWLhirHa291GVzuwfQVYS5Qn71cImrMvepk1rb1NYugzrp46K+I75J1IwCCKkzCyHcn41wf9v7V+U8/WlPiNymN1T7CRq8xpPqdsVtuN2MVVNpG8pK42Vw8viN/wC8aI/Ecm0kOdo680/q8zN5hT2PRra0t9pLso9Klmu9O0iJrqVIyUXK7+hIritB1C+1y6MNqMgdWPSty88OW9wRFf3Ltjqi1LvTepspqpG8DzHxF4ml8Wa+1zdYYY2JGnQV738GEu7qwmt4o28sDGCMVz+m+GvDOmqLhbFZJU9eDXTab4qfS7yKazRYIlxwB2ro+tWXuo4JZQ66aqPc7ma2aF2VomyCRXOeLfEMHh3QpJnjJmIO2vZPDniiw12wWdreFm2/MCveptR/4RnV4RDf6NbS47FabzJWseFLIJ057XPk2P4itqGgNCLf/SDndK3G2uBHi7VLG8H2WZ2YHksSQa+wNX8A+CtSQxRaKkSkY/dnFefat+zf4ev8tYztbt1A39KijjI82rO+rganJZRPL7X4u3UMCxvErzHgkjirOneK9Z8b6mdLspVgycOwPGPatq+/Zh1ZDmwv7eQDoHfn+dZ2ifBXxl4f8SwXMsSRW8bZLox+YV2qvF9TzKmAnTV4x1O3sPhHo9nhtTdr24HJJboa1U8J6BZOPs+mxZHdlBrckEyxqCCXxgn3qi8pQneCK7IyhY8Ot7ZN81xUEcQCwxLGvTCjFRsSc5pFuEY8cH3pxAI45zWnMuhyt33ItgpMEdqk20bfSmndEkXmFvlrgPip4nl0nTUsLZsSXS4bBr0iK2y+4+lfOnxdlJ8WxctiMGonsa0fiOLFrNqlxFaQ7mlOCSK9s8OfC68TQzfC4jAiG5ov4zXknhbUotN8Qw3Ep+V/lznpW74i8YatputTPZX0wt5ANkaHgiuCtFy0PqcvqQhG9rs6W5t43jeWFyGj6xnjNYsmqAKSSFI7Vh22uy/Zp5rl8SydR71jTXssrswbJ7VjTonXiMc+hu3mqPcTLkjAOK1tOQzkKpxu4Jrj4GknKlvve1dt4dtJbyUWkKFpZBnocYqprlDDTdTVm54g1rUfA+nWkekqyvdD5pMZzmudXUbnUbQ3upXkiEejda6/Xrxb6KDRp9srRJ/rOPkx2rzvXYSZhFgmFRgAd6zha51Yq8I3RFda3afwPPKe+8kg1EL2WaP9zGkSn+71rPFoU6ITXQaXocsiCWQiGPqS3cV03gkeSp1aj12M23E8cyyLKxcH0610lj4lXSXV7qBdrn723mqc2t6bpTPFYQG7vO7Y4BrDuLPUtZdpJUwDztx0pXjLodLreyWmp9C+G/EEd/aK0MiyRNzgnLV0CyJIOvPpXzHpNtr+h3KvamUr18tRXpOj+K/EmP32jOwP8XOTVU51Kb7o4cRQo4hXk0meqFPSq0iHB9a5NPHFzb4Fzpk0Z9TXYeC5tN8Zyy/bdSisYIBkhnw1bSxiS1R56ylyfuO6IYUO/oa2IThRmvK/iF4qh8P6xJBompvNFGwGScg11fgbxT/wkdsqypi5Uc+9XTrqexjiMsnRTle6R1F3Hvgl47E15Bd5GoPgHqf517Jc/LbzZ7KRXkt4AuoPgdTXQeYk9y9pKbbmI/xE11l0n+k259xXKWJMd/EfWuquc+daY6lxUsoj8DDf4dQHqq1YnQG0kUDnmovAh3eHEPqtT3XyWs7VnS+E0rfGzi7EbNcgAHCt/WvSoGxqCBeuzNec2SBtSjPcsK9Is1/4mTE9BGBWpkchrif8TBj3zWppYyorN18H7e+B3rU0lDsTPpQBrqOM0YzUirgYoxigBmDTSpqWk2igCMcVPbANKFI69KjK1i67430jwa6Rak7C4mG6JR3qJbGlKlKckkeMfFWCeHxPILlCY3OUB9K7j4G6qoS406Z1BblU9q4r4m/EOz8ZiNrSzSKeL5Vfua4TS9Yv9IvYr62mZJ0xg54PtXLZ8x71SKdJQZ9hSpsZsnryKgJzxivOPDnxrsdRtYoNXheO6AxvVcLmu0t/Emk3cPmx3sWPdua6lJJHizw9RS2L7uqsB3prZYqqgsxPQVg3vxD8O6YrlrgTzr/yzFeda58Xb/UvNi0uAWsfTzH6n6VMqiSuXHBVJ7HrGtavp2ixsbq7jicDJjLfN+FeSeI/ihc6oJrXSI/Ithw8pOCfeuAv7h528++ne6mPOWOcVTG+QHcCI+oArF1Wz0KOBUbXJpdQkmc5fLfxN/e96jMuOVPNQ8CjqM1ja6uei27eRIZmP8RzQJX/ALxqKnDNK1gjNolDtTd7Uhzjim4btmjQpTZKHOKaZDQA3pSMhIz0HvV6BzuxHJMaYsrE4HWormaKHhpFye3enWlne6mwjsrS4kc9CqEin7iV2zK8pP3VcldTHgt3qvdSMqfJ0bgfWvQtD+C3jPW0jb7GLeJj99j0H0rvbH9mi3jV7jWtU80x87IztP4VzzxVNaJm0cNWnZ8uhzGj6PPpfgqyvIg0Ujcsy8GtbS7pNZ07zlXFxAMEnq9ZOv6hLppbR4GJsYTtXcecVh6brn9lXUc6ncBwy+1czj7T3j6CnWVGMYdTorvUMn5D04OeOazZNRdDnPArQ12zS8t49Vsv9TKM7F7Vx9wSQWyeOCKUY3diqldp3ueu+BfFclnLGA2YieVr2m3nW7jSROjjNfJ2iai9rJGQTjPSvffBfiESW6Rs+4fyrjxFNRZ3UKqqx8zvkRxJjYWz2Fcj4x+J2h+DQY5nMt2f+WackH3rqluiCsmc9wBXiHxC+Hd0PEI8R2ca3cOd0sMgyfwFZ0Ypy1M6sJ20Rcm+Ol/dQNFb6JOHkGY5Qmce/Stz4eeJfFGspOmtozwk5RpBgqK8r1L4t3FrbnTdK0sx3SffedApHsM1zSfFfxfZSyTRzrjHCKuQPyrsdJvY5FXjCWup9axAA/OFP1FMubO2cZKDJ9q4T4e+Pv7c0aNtbvYI7xlB2dDXYJrel3c/2WHULdpgM7N/NczdSGjZ28mHrJXiUrzSbZslOG9qxcNHKyEHArprnMQaRziNBlm7Vzq6/ouo3Bhtr2Np1OGXvXbhMVJP3jws4yShKDnS0YgGTTguKsNGB0qMgZwa96ElJXPgqkJU5cklsOjJcgAV89/Hu3H9rQOg/ebsHFfQUV0tsWlONsXzc18t/EHxA3iPxZdOc+VA+MdqJF4dXZxrFzE7L95TgV6BYeItP0LQ45p9Kiv7nA5k/hrjm/eypEqEySOFCKOtdvrnh1dP0O1hkIW6dgdntXHUdnY+gwFOVm0ZF0th4q/fWyraS9fLUcUkHgrU2H7tMjsx6VqaXBZ6dFtnIDEcVpRX9srbYprkH/Zbiuac2tj11QhOzkVLHwY9lGbjUbuFI15KofnP0rXtdWa3haLRYnVckG6kGGx3FQtLb5Dyr5rdix5FZGq63JH8kZHlnsBUJuW50pUqa0NWWaK0tmETbrhjl5D3zWbFZ3OqybIU3An/AFh6CqVmr3jiaZvKtF/1jMeMUtz4rklVtL0WNliY7WkA5NVyvoclSpz6Ms6pfaX4WUIW+13mPuAZXNYVtB4g8ZSGZ3NtZIemMACuw0XwJG4Sa8xJKfmIPet7xgI9F8PqttGsTSLjgUo1EnZlSwVRx557HGaDpdtda5BplooYBsSS46+tfQVt4X0yxtkgSFGKdS3evJfgxpUX2lr27dY3ySC/evbYzDMXYSoQScYNdtFw6nhY+pUjLlgnYr/2XYxlTHbxhgOuKmAdBhYkx/uiphCv8LKf+BUhgfsfyNdF0ePUc3umQuqTczWsTY9Vrzr4j+ESkY1DSo2QkfOsQxXpGGBxgmlLuyGNjlD1BFY1KalsbYfEypTTTZ8r6d4avb2/HnCZiW6FTXvngPw3NoxE0owGUADHtXSW1jZpc+YLdTJ/e2it1o43Rdq7So6UqVLlZ14jNOeDhFb7mNq9wYrOXGMMK8ruW/0lifWvUfEduw092Gea8ruGZbggjvXYePZLY2bFc30ZPTArqbyM77Vh2Oa5WxkAubZfU8138yI8MTd9wqWBjfDyFj4djHotWL5QLeYHtml+HAJ8Nhh1xijVgUt5fXmop/CaVU+Y4yxb/ia24xwZK9NhX/Tlx/EK8z0sb9WgHvn9a9QtgBqsUfdUzWhkct4ghCXbH3q7pI3RKag8Rgm7P1q1pC7YloA1lXNL5eacoqRRmgCLyD2FIYW9KtA0tAFIxN6Gs3VvCukeIVH9p2qSzLwkjdVrf7e1MKhugyalq5cKkoO8Ty3UfgPpN6+be/EGTwCM4rjfEvwc1Pw5A88My3dsv3ii9q+hY4yGwVwD71ZTAEkbIJYypBU9KykrHZSxVVtXPi4qLaYrKvHTHpUrTRqMxMwPoDit34hwQ2fiW6hgQYDFiB2rnEUsAQOKxbdz1YyctWiZrgbMlDv96g+1MeKc68dKihj3N0pWuac0tiW3LvJz0rRjAwQRmo44wAOxqxHhRUPQ6oU7K7IZLZW5HWqhQdBWsMHjFR+RAspMjMGboopc9jSVLmWhneTnsKBA2a6PSfDuo61cCDT9KuZ5M8DyyAfxxXoWhfs6eMdacS3MSabbnqkvJNRKpGOrJjT6M8fMcKrudtuOpNOhge4IEEUk2enlrur6f0j9mjRNNuFk1S7kuJQMlFPyH9a9K0bwR4d0BEWy0qCN1/j25J/OueeKitjeGFb16HyJonww8U69tNrpUnlHqzgqR+YrvrD9m/UbpUbV9RiihHWIcNX1B5rBNkapGp44UD+Ved/Eb4l6V4ItZbcsbvVdmVhXnB96wdeUvhN44eEWuY5jRPgh4Q0EgyW7XknU+aNwzXc2ek6Pods81np9vaxRjLMgHSuH+H3jm+1vSZtW8RJFY2hBMf8ADuFcz4s+PunRwz6ZpenteRyDa0hOKyaqTlZs7rUaaulqewW2r2t8oeC9j8ockKQD/OvMPGnxJlS3urfS7WSSeNsE9civDI9TMK3e26uEhnJdo0kOU/GtLwdDq3iyWSHTPNjjT700p4YfWreHUPeYo13U92ImpXn9sRG7YBJv4kPBBrnZAYgQRxmuv1rRDo84WRi7n77A5BrlryLrjp2rejUWyMMRRlDWR0XgPXoLWeXTb1v9HueFZ+imk8R6VJp2oPG0eYmG5WXoR61xEiMHVl4ZTkH0r1fw7qtv4u0gaZdOi3sK/u3Y4L+xrSSafMiaMvaR5GeeGV7aUbW+XNdx4V8TtbuiFyBmuO161m06+eCdTHIOq9vwNUbe5eFwwJGDSnT9qrip1nQnZn1V4e8QpqEIhLAS9snrWwk7xtiRsH9K8L8Ka4/7ohvmUg5r2OzuP7UsjJGd06jpXm1Kbgz6OjVjUjoUfEfgbQfEbebeWqCU9ZBjNcZc/CjwxZ20zyy+XGAfnLdK7e4uJCgDZBUcqPWvOfHel6l4jljt4bnyrMEbwp5NEakl1OWtQhq7XZ5ncW0EepSWulzyzxR52vFyafYQtp18t3N9qiuV/wCWuwk16jpOkad4cgjjsbdTIB80jdTU15Itzu3Iv5CumNRGUMJK3MnYxdL+Lckgl0+/LzQEBQx4LU1fC+jXWpxXtjdPbyNh3XzOetZevaXb26/bLeDzGH3kUDJrD00XMl4J4Q8dv3DnqfSpcU/hMuaSlaoj32DULdoI0R1YIoUsTyasKqzY2ENnkkV5bHqEgUBTtBHatqw8R3Wn2ki27gTsvyk89a7MNiXBcsjys2yqGJXtaS1Of+LHjmPR4H0iyfdcXA+YqfuV4MJvKJkkOWPLE9TW14itr4avdTaoW+0O5YOe4qHRPC954r1JLG2QrbI2JpgOFH1r0lVi43PmFgqilyROn8BaLHctda3dlUt7dN0ZP8RFVr/Wp/EWpSSoC5P+rHpVvxBeqiweF9GTctodkkinO6tPS7GDw3Z78KbthnJ7VxSldnv4ejyq0fmVH8LxwxJd6jIzSdQoPSql3eRxKqQIgUd/ak1DUZbvJkkJBOevFY0koyQW4qo0+YqrUhSVoliW+bkZpNMtX1q78rOxcZLE8VjPO8km1EyM4rejuG0XTfKjQteXDYwOoBpygo7nJTqSqSuitr8r6rfQ6TZZW2QBXYdCRXW6HoEGiQo+wNJ3zVrwz4Yi06286cb53O4k+9bBtG3HIBJ6CuerWurI9/CYPXnmjS0dVupQRyx6D0rmPibdAvBZ7vmA5Wu20m2NjG00q7Qqk5rybxBfjWfEJcPvCnAwa56N5O52Y2UVTUDodFi8nS02b1bFacN1dxoMXMimp7O1MWnxAgjIpmMNjGabnysmOFg4pseuq6gnS7b8c1N/wkGrKuEuAfrUAHsKniVd3Kin7eS2YngKMt0hv/CVa1D12t+NSp491OPh7cN9DTJEQjoKpSqozgCmsVNGcspoS+yjpNO+I8gcCSzYn2rp4PiFZyBTLbyIfYV5raxKXzitZIVIHFUsbM53kOGfQ7PWfHekyaftfeufVa8wuvEekXF0Qlzg56EYq34ggU2uOmBXmF/ajexDY57VtDGyZ5tfh+km+U9XsNTsheQN9pQgY4zXpySwzW1uY54icg/e5r5bhiaO5hPmMQxA4Nd8l1PZRQN5z7QRXVHFJ7nnVMh0fKz174XxZ8Lx5znFM1YF4bvj7pxXMeCPGrWOg/Z4IstGvWud1rx5qM9rOVUKSx+XFKNdI4/7Jr1HdbG5pUJTVImVSSWAr06zt8arLI/G2MdeK+Z9M8W6pNqce18EN1HavRo/EeqNcgzXjfMBgCqeNikbw4fq1NGdf4g2tcHDLnPrS6XLFGgEkqgD3rybxJqd7NPxcOTnqDiorFrjjFxIRjn5q55Y/sdcOGGvike6f2lYxDLTpj2NV5vEekwD/X5/CvKgkrKAXY0CF89T+NL6+zqjw1SW7PSm8Z6TH/GWPtUD+O9PGdsTkV5+tsz/AHgPyoFqQeBWUsbLobx4fw8Tt5PHkS8xwE+zVQm+INySQloFHqK5owSHABK/hVkWDSAZOTSjjZ9zpWR4V7xLcvj3US2QMAeoqnJ8RZrW4i/tS4a3s5TteSL7yinQ6R59ykO5ULHG5ug+tYvjzw/aWdssFxd2txKfurE+aX1ic3dsJ5bQoRtTjqZ3jq68PagofQWlug3+suZhhmrj4tMlNoJBGdgHJrUFrFpOnYGCpH3R0FbOmywy+GJQWVupBFaxm+rOWVCDOCkUc+1OgjHWk4LMD61Oi4A5rocrI4oxV7EiAs4Aq/Jb+VCsjd+Kj05N0oyK2LuF51WOJdzelYTmzupQ5kYeHc7IwWkbhVHeu+8IeEYtOVdQ1mLzi3zLCaqaHp9ppREtzhro8qP7prpDrQlOXcE1y1Krvoepg8Il70z3nwb8VNG0+2itZNMhto0AAIUcV6AvivTtZgDWt0pLDhA1fINzqqNFgsPaqlj4puNNcNbzuNp7Gs25SWpNbAUefmi9T64nZ2blR7MKYAc8jj1rxXwv8Yn2LDefMegLGvTtP8Wafq8Q8qdVYjJ5rCUbDVKUVpsaWozmDTb10OJFhbYfevkXwlpcnj7x7f2mo3GLtXYAseSPSvq+4nHfDoRg46V4j41+GGp2evf8JN4Q2fby2WidsA+9VSkrWuTKi27tHA/EqS40y6j0W7uZIrSxbbGueHrjbHT77W5Bb6fYMUPG8Dj65r2O2+GGqeKQ8/jm4RJ2O5UQ7hXaaNpNt4Z0v+zbRIzEhysu0Zb8a19rybFwwbrSu9EeXeHvg1iKSXW7ob5F2hEOCoPrVz4e+f4V1nUdEltj9iPywyqvB+pru7q66szHP+1WLNdlnOTwKl1nJHbHBRpWcDG8V2ME4mwM88HFeW3duUZkI6dK9R1C5GGyRj3rzfxBcQ7nwQD7VeHV2c+YW5bnOzJtYjGaitZ3srpZ4mKSr0ans/GetQnnmvR5ND5t1LPmiz0WG/0z4hWaW1+8dnrUS7YpG/j/AP14rhNY0u+0K8e1vUMbDozfxD2rKuJGV96MyyLyrKcYNdHpHi+PVoBpGvgSF/lScA7l9OaXs5R1Q5YqNRa7k3hrVRBIi5xXuHhDXo8xlH+YHBFfO+q6Zc+FdQWJ/nicbo3HPy/Wuw8C66fPId8JH8xJrnxFDnjdHp5fjlB8tRn0jrNnb3Fn9rhkSIkZIPc151cTJ5h/0hD2xmvN/HHxNub+X7JZzOkUZx8p61wbeJtRRs+bn3rKGBbVzWrnNKErHvMrgLkOpH1qszZBww5rxaLxnqEeMsT+NXYvHl30bP50/qUugRz+i0enSt5YYbMqetZbKFOFGADnFcW/jmY4yTTV8ZFjlhVLDTiZPNKE3c7YSFakS62k84Pqa4xPGMZ60tx4uikURRfNcP8AcTvT9g29UCzCm9Ezp7nT18TSLpxjEk0hwJFGdv40eJNStfAGhjw9o219Su1CzSj74NdOqQ/DbwcdU1Bl/te8TfCndcivLvDVidd1afWdQ3EM24A+vWnCMo7sVTlbXItWb3hjQV0e0+23ahrqQZ3N1zWTrdw0zFtx5NbWramzrsBwi8ACuTvrnzePSnFtsdaUacLIzpWJwM8DrWfPuZ9qZ54zVi8uFjjKj7zVNpkKFDJKcE9OK7U7I8CUvbT5S3pWnJCd0jZOMjPrXUaJoyXN21/c/MQP3a9gaydNh+0SqrAkdq7a0t3Cxoo+YcYFcVatrY+gwGDit+hpBGKp90sR0FbOm6WTCZplA5q7omgOsYmkUHPbNZnjrxZa+G7B4Y5FN26lVReorz3JzlZHty5aMOaRxvxI8Ypp8B06zk/fnIOK85sHaFftDDdKTkAdc1Qfz9X1B57p/vHnPUV1GjadcXd3CtpbsIkOCzjg16NOMYR5WfNSqzxNW6Op8P8A9oSWbT37nZ1jjbrWnmXOccHnHpVpNOczJJI5JVMbR0FWGgPJrim1zH0FGk1BJsz1Ld6kBxU7QGm+S392ouaqDQwnK1Uk5NW3Vgp+U1UKs7YANBaiyW1HzcVqKcACqdnbSFhxWi1syjODTSHypmN4gP8Aou7PQYxXm10fnA969I16J3tSOmBXm1yMSkEdDWkXY4K+jsidIWNxbtwVzXa3ELGwhOPnMigD8a5u1ti1xbsQNgxXbX4WKxibps5rXm2MuS8GxPBdoX0x2xn5apX2mnyJiEJbJro/AcBbRnPcrVmazb7NMRyaqexjhtaaR5VpdiYtSUFSMnuK9KTS97xkD7q1z1rZGTUUBHG4V6VFZ7XXgYAFYPY6YKx5vq+mkS9O9X9L07MQO3NbfiGBRIBgD3qbSRAkYDMKxsdiSsV4dPz1Wpzp4H8NbKy2wGQwqtLqVvGSAVpOJV0UFswOMUfYvaiXWIQeKYdWjxweaXKx3RKLIgU5LcrzjpWfLrJ521D/AGrJjrTUWO6QzxZ4bvdds0j066NvL6hsVgab8LUhi8zUr+SS6A45zzXQDV5getOOpSuOSa0i5JWMJ0ISlzM4fXfDF5Y7kMhltW4BHauPgN3pUzWjMxiY8V67c3UskZVhlCO9cLr2kkOZgTjqB6V1UZX3PKxeGt8JgT2vlgP2NOQAqCDxWiIPtNpg5yKyXR4JCrdK6XK55kqXJqzUtZNpGPzrf02/azha7WNWKHv0rk45MDg8V0EALaGWB4d8VnI6cPK2xs2Wv6Xfyn7dF5Mr/wASCrVzolxIDNp8v2iPsoPNcYkLFmz24pYb6502QSRTsgHbccVDp82qO6OMa0mi9eXNxC5iuAYzn7pqOObHQ5q9H4vguWWHWIVkiYgeZEvzYrrYvBXh/WbQXGlasyykZEcjAZNZNW3KUlU+FnFNNtG5W2n2qzZ+K73TGXy5mwD2NGteHL/RciePKH7rqd2a5p5FyQeCPWnGmp7mUqs6J63o3xfmiKLdFivvXp2h+PtP1OIYkCu3Y18nGTe20A+ua07DWJ7BwyyNjtzRPCRtdMqlmKcvePqy9ut8ZlDAp6g1zd7qkcK5kkCj/aNeeeFPH0skkdvcSfITjmsT4v689teRQWkoIdc/Kelc6w0nKx6NTMadOm5I7bU/FWm24bzZgzDptrhdZ+JFoq+Xbks3fivK5by5dv3khOevNVZJA3U16NLARirs+axPENSXu09Dqb/xpe3hKg7U7c1hz381y2XYms8P709SOnr0rrhRhFaHjVsdWqv3maen3IJ8qQ5J6Zq2ylCRWRDCYW3A7m9a2cFkDt94jmlY1oz01My55zVIxCQ9DuXkMOuav3A5NVVQnOGwQPzrSOxy1m073O502U+MPC89lIxa+sl3GQ9SB2rlk1M6XZmFEZZ5MiQY5Faug3TaBBJeQv8AvXGcGs271dbuaSaaEF5DlsDrWPc63KLgry1MaOTzHL53k9alcEn7pFa+nxaTeziIs9uzf3jiuhHw5u7rLWd5byx9RmQA1alZGSwspe8nc4RuO1Nrr9Q+HWs2/LlMDurg1hy+G7yIkGRMjrmq509jKdCUehmUc+9XP7Iut2BJGT7GqtzBLattkwzHsvJNNtLVkezdtEMMvlKXb7gOPrXr/wAGPAcLyP4u1xQLG0BMauOvpVT4afB+41uL+3vEzCz0eHkRyDBfByOtX/iL4/XW9nh3w+n2fTovkxHwDiuOrW5naJ6+DwqglUqHPeONZvfiZ4w2opXT7ZiiAdMCt2dYtMto7WJQpUc4qx4f0hND0zdLgzEdT1rH1K4WSUvXPzuTsezCk6cfaSKF7MMk55rmry78l8jHNWdU1Dy88iuce4a9nGMECu2FNWPDxmIbnyp7k/lvdSg4yM10lhYmQxhhkKelLpVgpjDHAbsMV0T2S6ZZNfsMuowAazqT1sb4XCtR5pFZFGn63aHzo0hPUGvZtH0KF4Y7mMq6sAc9q8M8N+IdKSC7j1iN5LiTd5T+h7V3lj41TRfBn2dJi0xzgk9BXHWpyb0PawGLpU4y5nsdF418fWfheze2tnD3hGMDtXgl1dX3iS+EkjmR5D0/u1WmuLvxDqRILSMzV3nh7QF0iIyTDMx7elaRpRoR03OSpiZ46paOyLfh7QbDTrbdcp5s57Guki1KFBsWGOJB2UVlIcjIGKbJWMlzM9OjSVNKxu/2nCOmKeNTj9q5ugk461m6Z1+0kdGdQiPpSi9iPpXMBiD1p29uzUvZidVnTmeEjtUSvBvzxXPl3A+9UBnkU8Mafs2Cqne2ZiJGCK0/KjlHavP7K+lQjLVuQ6pIMc1m4tM2jUTLeu2Km1YjBGK8i1K3xekDpmvUNT1JzbNnnivK9Rus3zMfWtY3Oau4t3N6xjBuIQR8vFdbrVuRp5YDjAFcHb6n5U0DY4JrvbnUUuNEG7Ayw/Q1TvoZqUeRm94IvLWLSCpZRJt+76VmXniOOFZ0BGCTVTwwmy1ckc7awtRhB84g85NWzkoK1NFI+IQmoKsZ6Pmu9h1qW9ghKMQVHOK8it7Yved/vV67oNtGlqitgErWcjeG5ga9qc3mKCWNMsdQkKgcjNaPiOwjjAdeSTUGm2eUU7etY2OlMsRyTN/EabKkjnqa1obTjpSmyPpVBdmGbdieaUW59TWwbJhSfZD3oKMoQGn+RWkLcg8il8r2oGkZog9qAmD0rSWEelNMIobGkUUi8xsGsLW1Xc0YGeK62KABvQVQ1HTI5C0g5zTpyaIqU7o8+hjaMsCOKrXtmJVJ710V/pskTblHy1XFi8yZFdUZnl1qLeljjXhkikRG+6TivQRZRR6LaJHl+5wM1yusWDvAQvBHcVm6R4g1LRZFaTdNEn8DdxVyjzrRnHSkqE3zo657SEAlGIJ6g1lXloNh5BBrr9G8d+A/ESrbazZDT74nHn7uPxq3rXw4n8k3vh7UYNVtPvFYRkgUkpR0OiVSnUWh5Zc2ueCOKgt7iW0kyjsrDpgmty5iEUrwzxvDKONknBrKurcZyOa2jZ/EcVWMo6xOpsPiFMsK22oEXFvjGMc/nU0nh7S9dX7Vp99DAW6xSNzmvP5YBzgGoFR4WysjKf8AZolQS1iR9bklapqjvpPAepRrujlt5R7NWPe6Le6cpa4hIQHqATWZaa1fW2Nl7Jketb1l49vrY4vQLu16MpABpWktxKtReiVitpjMtzG0Y71n+M7qS61cKx3MoA4ro9bngSzj1vTLdvKkGWiHO2uRWzu9akN4WEKN/e64qqcrHNi5S5eSJizEITng1VYmRvlByfQV2cmlaZAg+0S+dJiqM17FAuyC1AHZiK7IzujzPq9leTOei068mYDG1fUiti10qGDDXVwpA7JUEuoTy5BKhfQVTZsnOeaAUoR1N37ZYwgiCHf9apnUWYnJGPT0rMIz3NG2psTLE32RpE+cMiqzrtao4mlU5UZ9KdLKzH94hVvai9kWpc6uyxJdtKoQDao/Wqjn0pA/4UHCjcTx60kiJTUtEHkoxDPy1CTXlruMV5ImegBp0eJPukNj8TU0GnX2oMBa2k0jE4HyHmq91fEy4OrtEprrGqHIkvZWb/ePSozfTtvMt1IPq3Jr0Lw/8DPGGvSxyNCljA3eYdRXpGm/BzwZ4JBvPEmqJdzry0SNkA+nWsp1YQWmp1UcHiastXoeHeHPDGv+JLtLbR7aecyH/WMp2j8a9/8ADnwq8O/DezGt+MrpLvU0GUtSwO09ao6z8bdL0WB7LwpZRWcK5XzEUFmryXWdc1jxjcme7uJGjJ5ySBiuZynPV7Ho0sPClondnV/EL4qan47ujpmmR/Z7JDsWKMYGB04o8HeETp58+7GZiMtu7VD4Y0lbNA0MasDy0mOR+Na+q615MZjjbB7n1NY2tpE76cOX36ga7qkSExxn7vBrhtS1JVDMCN3ao9V1YDdk5euSubl5pNzE1vSpO92cGNzG6cUOvrtrssrHPpVrSLGQspC80zTbIzyDIyDW/M6WEG1Pv4xXVLQ8nD07y9pNnQ20+n6Fbi4mdWmxkRjvViw0rVvH8j+RE6WYH3V7VxGkadPrN8ouHZgDxX0LoPiCHwV4cuIbWJTcTLjeR04rkq6H0uH/AH0dVZHiOreFLfRJXjupDuhPK+9cze6m99cRwQsfKU4FbvjDVH1W8lkZyZZDlvrUXg/w4bu6ExXKKcnNawtCN5Hm1I89R06a0Ow8IeHY7aJbiZfmbvXTTwhunapA8UMKRoeAORSbgf4q4pTcnqfQYTDRowstyuLcYpfs4qYtim7uKxvrodRA1tzxUTW5q5upGIxT1C5S+zH0o+zH0q2DxTgy03dDsig8DHgA1We3YHODW3uXIpj7D1xRdi5VuZlvE4boa1II5CBU1oIy3QVvW1vG6jgVDNIo528jfyGzzxXnOoRA3Tgjkmva7+xjNu5wOleVaraqt6SAODWkEYVo3KX2fYIWI6Yrf1C4MejDb0UE4rOki3mNcdxW5e2PmaI645bAq7pSOGakotI6fQYQbTA7isq70/M0xwetdb4dsv8AiXhXQJIB8y+hpJdPy8hPpWfMOhP3UjzJrHy75Bjv6V6hpliXMEmOMCuUltRFMTgHnvXZ6fCyR2knmgKByualu51xRR8Sxxn5doGPSqWlRAoOOlHia+WO52Eqc88VHpl/GEHIFTY1TN1VAAp/lg9xWdJfx4JDis6XXAhwGo5bhdI33QL3FQO6jPSuek1tieGqM6szDk0cth8xutKtQGdB3rH+3kjrVeS6kY8Zp2Hzm41wgHUVC12F/iFZDLO4HUA96gNtLk72IFCQnVsbTXq4zuANRrfpn5iprC+xorEvcnHpnpSeZa2zZL7mHfNNw7C9szqbm1SazMnGD2Fcstwml3J+1ZEEhwSKt2fiqCyk8ooWV+PpWpLpVvrlqTA0bs3Y9RQlJETfP8LMPVtKWJFuIGEtvKNy4OcfWuVuNObnchKnkV3OiadeaRcPZ3ib7RzwW6LWjd6HHLK4J+Ufd+lWptGcsJ7Re8jyO68JRX8RaLash7Y5qvpWq+I/A1yGsrqdEHVS3ykV6Rd6H5LZjDBh6VQnEEkLQXcW8nv3FdEKyekjgr5dKMb09GOj8b6D49VbbWLePT9TAwtzGuQT7msPW/Dtzpil1YT2/VZAwJI+lYmt+FpATLZOTFn7gOMVi2viDVdFcwyMxgPGxwTWygt4s8ydaUHyVV8y+823I2HPpiq7TwscMwQ+jHFdv4Q+JtjpLKb3S7S4BP8Ay0jzXo938Qvh94ijCX/hfT4mwAZIlwablJbijGM+qPna4YByUZSvbBqpNM5UqDj1r2TWvAng3XlaXRtUWzkPKxFeBXAav4D1TTMMjrdovRkHWrp1E1ZnJWw1SL5oleDxHcw6ULBSnkMvJPWs2O9uH+R3JjHSrll4M8Q6tKRb2ezHJMgwMVv2vwx11yObYHvtkFVFwjqQ6deZyhlPqajknYjGa7eb4UeIJPuqrfQiqbfCbxQnMdo7e2KuNan1ZlPCYh9DjCeOtIDzXZD4W+L9vyaLJIfXYaqH4XeN2kwmiuR3BOMVTqQ6Mw+p1npys5hnCDcegpvm7RvJ+Xr7139v8GPEk6hruWGzQ9RKa04fhL4e05A+s65yvLCFuKh1opamtPLa0ntY8703UIpXCRxtM/8A0zXNdfZeEfEuvRqun6BIQ3R2+U/ka7W18cfD/wCH8GNM0uK8uVHyyuMtn1rH1b9oDxDrSmLTohbxdBsTB/MVhzzb0R3ww9OjpUkQ2nwA8WXO4391bWGT92Uium034HeGtJQSa74kUr1Ihf8ApmvN5tf8Xa437y6u1B4JLkg1Wk8O6rJzd3rMOv3qp8zW5Sp0k7xge1W8nwi8Lqy+T/aEqcjzOKrXfx+0PSomi0Tw9DEcHadoOa8gXw7bRKDPcfUZrRtLTSoBgRb8dDXO6fVs6aab2SRs6z8YfFviQeXD5sCt93yuABXNNpWr6ifO1G5kZ29TzW9bzLGcRRhR9KuR+bcHaBmk5pbI6Y4dy3kc3aeG4IX5BYnoD3rqdM8O5K+cAluav20FvYxmWYgsOxrE1bxOW3IjbYxxxUpzm7bGjhSw65nuX9W8QRabE1raKuF4JFcJqGsNKCQ5yaq3+pGUttOM96xjk967adFR3PHxePc1ox0kzSMSxzmkSHzWHHSmqCzbRWtYWnQ4rWTUdjzaMJVZFzT4jEp2rye9SSWRlkLSHf7elatjaBkbPGKmW2V5AvFcs6h7tLDJJJmh4d05IVEmBmn+KdVe3tWXJ54FXbdFt7c5lRVHJzXIeI7wamClvyE6noKwjeTuztqyVGk1E5q1SW7uwr/MztxXsOgacmlWKYUGRhzXj8Nz9jkR97qynsuRXTQ+LrhlXbcce4xWlVczRxYGapu9Q9EkkVMs6YX1NNS6tpBlGBPoK4G68R3F5AYZJQFPcVTsNQOnSbhMz5PQc1nKmenLGpP3UeoBo5OOhpfIA6GuXsfEUc2AwOfcVtLqDADKNz0Nc9uU6qVdTWqLLWpPINRvE6+tRDVIS20ybGHUGpft6HowYfWi76G3NEhLup+6aYZj3U1a+1xn/lnn3FOWW3nOCQpPrUuTFo9mUvtWDjBpGul71pf2WsgzGwb6Gq82nLH99sH6UKXcLMhtrkbutdDZ3Y2jDdK5/wDs+TqnPvViKO4hABVqptWLV0joLu7Mlq4U8gc15fqM5+2EE967OeWVYXJBHFebXtznUW3dc04mFSojoreQM6fLkA8muzuHgGhq+BnP8q82stQxF1GN1dJNqX/ErKhuAPXrmi2tznlUvFntuqPa6frV/HFgLvJwTXJXuvwwtKcDv0NZXjfW2HinUI1J+RiP1rh7++lkRxuPeoguZXJoVEqSLeoeKIWmlwcHdjg10cPiFjZIoHIUYNeIXU0jXCjd96SvW9ItTcafCFX5sDmtOW2p0KpKS0Od8S67N52Vcg9KTR9bnmTDsSe1WvEWgSM6nbhe+aNF0yNWRI4nuJM42oOlToVGE29TSSa4fnDMDViO0lk+YgiujttO+xw+ZfyxQRgfcJ+f8qim13TIUK20fnH+83BodzXlit2Y6aVPIfl6e9TJYLbf69wDUFzrE9x8oYIn90VjXF15LHfKSD6mkrsiVRROie602MYBZn9ulU59YYAiK2Ue9cy2qq8ipAjSSMcAIM1sromoTRrLqE62UBGQDyW/CtOVLcj2zlsQ3GuTpw8qhfQCoFvXnGd0hHt0on/s61JWKF7k/wDPXtVKaed+FCxx9to5oSVzGcpJks056biKqSX6pwqM7DtSbc/M5/GnRQyXUwitojKfQVo7JHO5VJuyKr6lPkbLbaB3NWLTX9Qt3IjYJn+7wa7HTfhvc3NuLnUp1soT1Vm5P0q55HhTw+hCCS8nXpuGQaylUj9k6qWHqRXM2cquoa5qIWISzsG/2Tj867bw7PqZtTa6zamOOMfJOW6fhWPL43uN4XTraO2XGAqDNVPsWr6wry3119ltzz8xxupPXWxqpqL3bZsvrFoJXheYFlOFOeoqndwR3iFkUA1neRoumx7mMk04/iPIzVrRbuPUpyiMQ+OABUO61N03NGBcRm0ZmkyRnpVN2sb8bJ4AQPQc12GoWsTF0uIcHpzxXE6xp09jumtgXjHLY7V0UpOWiPMxVHlTbV0R3fg+yuo99vIIz2DGsG48L39icwyFx7HNWYtXWU7d5yeCKvW+oSryk2B6EZrrUpR0aPHtRk7bMwRPqNpjcZDjsMir0PiS9jQAyyBR2Zq6RNQinGJ41b3AqY2mkXMYQxFWPc0uZdUbKhJr93Ip6d8TmsrWWGV3GVxkd6w18aoJnkUOCTnOTWvN4RsZmzHKBntVK68DRvHiKUZ+lF4MidHF9DR0/wCIEi4/0iQD2Y11Nn8ZpdLwYpJHHcSHIrzg+BLmHDLIDt5waD4TupfvBAT70uWkw58ZBWaPabT9qa9iiaBIUUrxnaKx9Y+P+qaqrHeoY9CFx/KvL7bwa0L7ppVArZh0XTrYBpJVb1FDhTWw1VxL3sihqfjnW9U3obqXk9A1ULLRdS1dmMrPtYcs9dK13ptoC0ECOR61kXniG6fIjXYvoOlNJdDOcGtas7ixeFNJ0wbrucTEfwU99Y02z/49LQAjgVgS/aJ33yMxz2qEowPAxWkad92clSvyfAjoZfFk8i4VQg9hVCbW7qfgtj3rM2nuKliiZiOKr3UQsTVloXoJncguxPtWvbDcRgVm2luzHmt23WOFOTzWc0nsd1C+8i7CvFaz30NhbrggviuXm1MQ5wfyrDudWaRj8xrFULvU6p4yMVZGzq2uvKxG7j0rmLm9MpPNQzXBkbOagPNdUKaieNisTKqxSSaSipYIDKwAGQKtyONRcnYlsrcu4cjPNdHaw5IJFQabZSSuERcfWtW8kg0iMtM483sg71zTbex7WEw7guaRaj2W0DGRwvesefxFFbSEwDzJO3FY8z6l4ivcRIYbccdetbNpb6domHkAuLgdQO31qVFNanRPETkmoqyJorW+1KNbq9kMVuOcDjIqN0E92kUEa+T/AHf7wqO61STUWJLFIR0QdBRpVwLW/iZ8FARgmpl7uhUHCVk2b8epaPDstrrSNhTuR1rVTRPCmsbZCjW0jcZ3fLXTPpWl+IrRIry22l1wky/Lg1wGp6NeeE7xre5XzLJj+7lxwfxrmc7v3Weq6UKaTcbo6d/hZB5Ynt5BPCf7hyRVnSvBWkM+1tyTpxhxj+dZGi69d6eVa0vXEf8AcB4r0TS9W0vxbF9jugtrqIHyTf3j6VjKVRdTsoww01qjnLvwVCrMY4t3uuKzX8PSQNmJyGH8Lmujlv8AUNDvmsL4YKn5XPQitOBrTV/l3bJ/X1rP2kupv7Gn9lHntxYRyHFxEEbp5gGcVV/4RO8ZGfT7xrk9dh4Irvb/AE7y8xso9M4rm5rCXT5vtNqzCRTnrxWkJs550O5x5ur+yuGgu42hkXqGq0L4Hk4J9a9D0jWtM8S50/WoES46CZFwTVHWfAEelyNtJMLcxsPStPaLqYvDz+yzihqs8J/dTsn0rSsfFc8PF0vnp7DmnXHhe4X5gp29jWZPpjwHDKapcrM7VoPVHa6TfaVqrBY5Gt5yekjcVsX1je2SgtGJYuzxjI/OvK0tyj5GQw6EV2fh7xjqOklYpWNxZMMNG3aolBrVG1Ovf3ZIsXd3E8MkTkKSM15peW0Ul3IQwPp716xq+j6d4isp7vSXCXAXLQA8ivDdQW8tLyRDkPGejVUddERXtHc3LeyKwNlMVZuIS+mbMcDArM0nxA8e+O5VWVuK9GstPtdT0lJotoOelU1y7nLCmp3aZY8T2/n+KNZk/wCmpFYLac0hdQm7jtXYarZmbWNRlY4Vp3P61nTX0Gnxy7MFsdaUNisNTi4rm2OMTwnCJWmumWMIc7Twa9Jso7aDTrZbVCzkYzjNeYXF3JqV+sYYkFsfrX0v4C8IwaZ4cXVdSUFI0yqtWcm7ne5whsee6j4UaO3Goa7cCC2AyqHgtXKSeM7a2V7fRLdYwvHmOPmP41D8UPFl14j1NgJSLCM4WMcDg1x1gVL7lGFPSqhFswr4vlXKjXu9Rub2QPdO8snfcaZHcsrHsKY2SajdCcEVvZI8+UpSdyw87ycA4960NG8Jal4oulihUCBDlpT2puk2JupY1POTg17Xexjw14WRbZVWSVOWSsKs1HRHfQoN+9I86vptJ8HRG3022SfURw8zc7TXHXV1c6ndme4lZnPYnitO6tS88skgyztkms+dRESAKcXdXe4paN2IW+XjIpkmChBPBpoOSQatadai+u44ScLnk1eyMbNysWdD8O3WvSBNjLCOrY7V18l9o/gpBDaos99jljzg1t/b7bStJuIbbZ5qR4yOvSvFr2/8yeaWRy0hPU1iuabsdVWUKCXLudLquvXepSPJPO5DfwZ4FZEImv7xLO3Q73P3sdKx5L5yoGT0roPB+oCzvWuGwGxwa0VFwOWOKU5as6qW30/wfbKXVZNQcZy3PNcZqWu3d/MZJpMRg5CDpUniW6l1DUDK75A6Vi3G/buIB9jV046akV8Q4y91FjzmvJViThSa9k+GmmaXpt6Zr1VYpHkZrwy3uvIuopCMBSDivXfC2q2V9co0soVHAB5rOsux0ZfWjO6kzR8c3mnX11NJbIEXGML9a8qbVTp10VlUm3Y4ZX6V6T4v8PSWLNPayieCTlVXtXml9aSy7hPCSPQinR03KxnNsloZHiLwu0YGr6Z89q/LKOx9hWFBcyKcOCPXNdbY3l7pUm1WL2r8NEegFJf6Np+qsZrN1jn6mIdzXZGp0kfPYjDcz5o6GVbXO7vVzzienNZ5066s3xLA4HrirtuOgxzRUfY1ocyWpfsySM8itVMhe9Z0K4NX0HHArmb1PRptllWOOpqrMxLYzUzEqvNULibgmnHVm7nZEc8HH3z+dZ80KjOcmnTXBHRqqyXQ5ya3jC551eohpRVPSoXiBOaabpc9aDcKe9VyNHnznFjhAD9Ka9ugpPtAHeoHn3E4NWkzN8o4xpgmoC2xuKQuajJpqNzKTS2LyXxjXjrTG1F3yKp5pjkVooEOvJIkmn3f1qqTk0/NJRy2OZybZHRgU8ipI7N5iCDgUwI44TLkL2rodI00BPNlcIo65qjGkNmu8MGcdaimvnuTksQvoOlTa500+WGp0s+twon2eyjHmAffPArJjtEmY3F7IZGBztNZxvCECqgGP4hSreHOHyVNTynV9adi9d6yxXZboI4+gxWTHP8AvNxY5P3j606XLAkAhfeqixyyybYVMn+6KfIluYSqzk9C8bnaxIO1O5rQ0OOfVdQgjtkMmG5PpTtI8F32qEPdfubUcknqa9J0tdO0WBYLGNd46v3NctZroejgcNOo1KWiOpghFtawxuMOo55qTV4odV0SaO6w5UfLntWTFfNPyScDkknpWX4h8QxWVmYoXDSNxxXnqL5z6apOChY4B3exndU4RSRir1nrcnmI5crKhypBrMG+4DFwdxNbGmaVhQ5XP1ruqWUdTyKXPz3ieqrfp4t8OxvcZ+2W4wr45ase1fyNpjc5U4JqhpxeFQisVBHT1rWgiRRwoG7rXnTse/RvyrmOia4W4sgx54rLZVxnGQRUYYqm0dKFfbgGpSN3sczrNmYpRJGCr5zxXpXhmeTWtEEd0dzxjgmuPu4PtbqMZycV3Hhy3/suyLPwMdKU3YIws7mVcbY5CjKCM9KzL2wt7hTkDcelX7+VZrp2HQmq5AxSi2azUWrNHLz6GFYlKrvpzRryDmurKBjVe6iGw8VvGo1ozjqYeO6OVjuZ9MmSeGQoU6r2aquqQQeJ1kukjCXSDlAPvVo6hASpwKydId7fVMDgHg1pzWd0ck6fPozkF00wyyZBDDPWt7TtVn0/TAuSAvPWug13S0jknmIG1l+WuOvnzYOg69K0j7+5w14yop8p634gvxDf3if7ZP61wFxdfaIrhyT1rptfk/0vWH6jzSorjYRutpV9STVRWiMqc/cSJPCFsb7xDbIenmA/Wvqnx9ePY+CbW1gyu9QDj6V8veCnSHXoDu2lX/rX1b4ns49U8L27N8wVc/pXLVlaR6HInGPqfKPiCz2xjj3P51k2A2jFd54q0wxxuACAOlcVBCyvt561tRkZYmhZl1RmpFQEipFgIHSnLEQc1u9zmjG250WgRqjKSeRg16XPKuqaQIyclBxXlGn3HlMOTXWWGqMi4DcVy1Ycx6lCpG1jHvLBhIUINc9qVsUz8vIr0aVobwbuA9ZN/paTphR81RCXLuVOh2PM5AyNz0p0N29vJujOD9a6C/8AD0yhiBkVy19YXFu44b6V0xnFnl1oTi7llNbmSdyGYseoPSqg8i5vP3pUJIcE9gaouxIwRg0w9twyBW1OKWpxzru+po6r4fn0wGWMmWE8hl5GKzLe8kiwUJHPQ1rWXiK4s1ET/vrfoUNWjZabrQPkypbSH+E01JLclqMtYOxSGom4UGQcilLpKpHSq17oN9YHOwyx9nQcGs7znhIyGB7g1XL1RDqTWki3daYX+ZHOPSmW19c6e6rllA9DT4dSAAzVjdDcLkqDmk4XEmlLmi9TesPG80aBGkLgdnNaa65baiu2RUUnuK4eS0iP3OKasDRDKMaTpo6o4ua31OvuLCCXJWQbaxbjRZIpPMgkIYc/KcVnG9uIgACaVNakjPzbm+lTyMmWJpyeqsXl1W7g/d3MLOg7kZq7CttdoGUbG9MVmx6rHL94tn0NSfahjchwadmxwqQWt9DSa2KciomujAOaorqd0pwgDfhVK81a9z89sG/4DS9mXKtD7LNGfWVIxWVeasoHFZkmoSO2Wtwn0qCSdJB+8jJFa06a6nDWr1Foh02ols1Va4ZuM019n8ETA1F+8/55t+VdSjFHlVqlVvUf5r+tAlcd6ZhyeUb8qQsQcFSKdkc7lIkM70CVz1qHdn+E04E4wFNKyFzyROJCakBFVwSBnafyoDseimnoO8n0Ji5BpjH1NIqu/wDAT9KdHbyE58t/xFMaUnoMU08c1oQ26/xWzk094JWQpHDgN0JHSk2WqMjO2H0pPOkVSobj0qz/AGNdP/y0C/jV9NAiTHnXQyR3qHKxXsZ9DDidYgw5O45OTmklnRcEAjPY10CaLpsZDtMXfvtNWk/syDGy2EpHdxUuQRw0m/fOZijnnx5UDsD321q2vhvUroZ8gov94npW9FrbRDZFbxwr2IANK2o3U/3p+D2AxUOdjupYSmvidyKy8H28RH9oXgYeiGt62bTNKQR2VsrY/jfrWCymQ8s341ZSUKgHpWEpSZ6MIQhoomldajNcK3zY9AKrwPsO6STaR61AJkPfmpDF5nQbqz2N05LYkvtfk+WKAEZ4LAVXWzVwJJSCT71KLNs8Ia1bDS92CQaTdjWFOVR3ZWtrRcDAGBWta2pOMDitC10lUIyPzqxKots8AYrnnO+h6dKgoK4lvaqi5xk1Y3eWuTxWe2oM5CQruJ71o2unXN0oEpwp9qyZ0LUhaaQ8oeDUkYkkHPX2rSXToIEJZxxVWS9ggB28mkaRfLuXtLsQG8yUjaPWtK91NDF5MZ/KuU/tKaZ8DhatxSKAGZualxuUqiLhXPzE1DJIq9TxUct4oGAaoySGVSM8UKNgc77F2K4jlk2qavm1EowawtJtCLjJY4zXY29tkA9sUm9SoR5tzmrzTlCsAK4yWJbXVC2eQa9KvcJIQe1eYa7NsvXftmtoK5z14qDuM8R6uI2CZ5Yetcv5nm2bt75qLxJd+ZIGz90VW02fz7Kb0UfzrtpLlPnsZXcpcp6bq8nmvqnPWdz+tcPHe7Gn5+UCu11YwJNquG4V2P5k15RHMZJbkRyFmJ6VpGHu2OD63GFtTe0XU0g1NZGOG3Dn8a+qvC/ieLWNBjtZpQWC4Ar4stJl+3DzJNrA9DXrul63JpNtbyxzjaDnrXLVw0nqj1cNmVLRSZ2fjRTBNJGcGM9DXF2+meZJvU/Ka2dW8W6dq9kBcXKLcY7HFc5put2llc83Kyx55GeBUwp1I9DtnjMPP7SNk6ewGAP0qtNZvH2zXS2+r6PcorLeRjjoagurvS2BIvIj9DWtps5p1KFviRyzM8ZyRjFPTVZoSMEkVZvL3TegvISfQOM1kzXtkw3LOuOlX7Ob2Ob63Sh8MkbcWvEDLEj8a1rPxNC+AzAj1rhWmt2HEymqpuYYfuyr+dTKg0ti45pFdT16Ke2vF+Rhn0NUdQ0e2uIm3xqGPcV5vb+JoYCB9qUMOMEj/Gtm08fpbMA86SIeMZrL2ElqkdMMxw89Jsqan4URXZoCc+lc1c2E8DFWQ5r0Q+JtJ1HDTSiHPocVDcz6K65S7V/qa2hzrdHJWlhpu6kjzMo4OGXmpUJXGDg+1dHfXOjByHuVX14rJd9IEwjW9Q7uh6Vvv0Z5tR007xmiay1q4tSNzmRB2PStVrzS9RGJYUjc9SBXP3EdvCMrMD6c9aoz3NuBhZ0LdwG6VXKJYtL4rM3brQ7Vz/o84PpWZJpV5Cx2KWX1FZq3W4ARylSOvNXbfVbiE4MuV9M1oqUkr7ieLw0vUa4nh++pFMW6YnAzmtWHXYXwJ4Vf61MbvRZ2CugRj6VLUl0B1Kb2mjKWcfxYpsu0ncgrQmGixglrlUX1J6VVa50b7sd+h+j0k9bNGTlHdyTKgHNL5rDoeKJ3tlO5JywPeq/nxdTIPpVqDZlLEQjpcna5kA4cj6VC17Pu/wBY341DJcx9jUaXNuz7S+H9KrkZn9Yh3JTdsx+YBqel4F58sH8KFW3yMsQD14ppks95VJMkeoo5JIf1iP8AMWl1FCMNCn5U4X0X/PJTVRpIV7A+4ppmgxkjGKXJJi+sR7l5b2A/8sVpftNuT/q1/EVlPdW6KXZsIPeo4tQt7jPkkuo7gVSh3YvrMO5t+bbHnyUpfMtv+fdfwrJgnhm4jkGf7uc1JvwSOfpRydg+sU+tjSElsOkApDexJx5CH8Kz9+RioJJkhUs8igD1o5WH1in0NT+0FU5WFAakOqyMvybB/wABzWFFqdvJ8xhuGT1WMkfpVtbi1mX9ySD6MMfzqbalfWox6lmS9lkHLKPpxUP2iXPEp/OqzyjOM00TIDyarkkR9Zg3uWvMdjyxNSoMjkk/jTI5bfbvcgYqZdQsfK8xIJnUcFgCB/Koloawrx2uIFA5C0pkx/DU1nr+m3SsoR1kXqD6VI+qWA52Nt7ZFOMXLVBKtST1ZVE3IAXFWrcMzrjJ9qhOtaargMvHWrVn4i0tnytrcSqvUxckVM1JLVG9KvQ/mL0cTMeAFFW1tSemDxTbfxZ4cPEiXGR2dann8WaKObeAsPyrl5aj2R6CxeGX2kW4NJbarsgwa0baxjUEkgD61zy+MrAH5rabH+y1WoPHmhLIA8FyCOxHFV7Cpa9jaOYYWO7OkaC3jjDb1b2Bpi3csThYomIJ6baqL8RfD1uF8rSvtEx/hxyaWX4tR2yER+HpLX0LocfrWEqVS9rGsc0wa+0bUNvq95xHF5a56mtWPw7bRKJL295PLLurzq6+K9zcfdjZP93pVQ+PBPjz4t/1pRwdSW6NHnWESspHpVxdaRpwzboGI7+tZM/i2Vmwg2r6CuKPih7kO1tpstxGPvGMEgflWVL4rhAeRo2Ur1UjlauOE7mEs+orY9BbVZLjlmODUYnTrk5rg7PxdcXQc2+mXU8ajJeNMgVND4xVwcw7WHUEYNH1R30J/t2g92dv9uVOi5NRpqBlfaCR7VyCeLY3zm3b8DU9t4vvJebHQ7m6UfxRpupvCTSvYFnmG/mO0hSWQg9RWkIsR9Oa4L/hPdZibYfC2ofhbn+lSy/EDULcK13odzAD082MoPzNZvCt9bHRDPcL3PQtMiKyZcYFdR9qjihwrZOO1eLJ8VLiIgCyIH51dj+Jcs67mhCkdiMVLwVRvyNXxFhFprc7XWLssGPSvJfE+qiK6Zc8mujuta8SatGstjoM9xE3R1jJU/QivOPEOl+LLm8eaTw/dQohyRsOP5VpSoNNps4MVntGWzKupXBliLE/erQ8OQl7CQ9ya5JNXuA0ltcW5STONrjpXR6fqEttZP5agEDNdsaLPDnmVNyud1qkbC61wliV8wgV5ZFLJYvdTKcYya9R1KYvJrD54Mzn9a8i1CVvIuyD7V104pxtY+fU5N2Z9MfDT4AeEvF/gZPFniPVxacFpDnAUV3Ft8IvhJr9vFpuk+MIY7xhiPfNgEn8axNBuvN/ZV1Uls7QIwc4r5asy1tbWc8RKSxzApMOuQfWvJpKrWcp82x2TbSR3vxp+FOv/CPVFg1KNJtOm/1NyhOGB6c/jXn9lLsfarHBHrX2h8eAfEf7MPhrUdWAlvkUFJH+8MdK+JNGjkeKCR87m5+tehhZucNTlqSa6nWW5KwgBmH41qaDpN14l8QWWmWpLGRlV8dlJrMt0Z4mJwNozk96+kP2SvA0eoa1qPia7hdoraLKALkEinipKFNyRMJyvuavxH/ZP0bR/Acur6LeyT6xZxCa5hz0GM44r5PsoiYmk2NGw4Kk9K+3vhnrvinVPjJ4pstW0yf/AIR3VQY0MyEKqj0r5c+M/hGb4ffEnVtNkUx29zIZIBjjb2rlwde8rSNJt9GcdHzn5uKr3h2QSuOqrkGpctnaFwp7+tV784s5a9KcTJTkup9FfDr9m/wZr/wxj8X+J9Xa1jVd8jHOAKZpfwq+AOsvHaQeKsXEhCKwlI3MenevZPhHp+k+IP2db2w1u5S20h02STseFrhPAX7LPwv1yZ9X0bxONVOnuJ2t7ZsvhecYryfrCTkm9joi9Lnkvxn+B9z8HZ4WjuEvtGucNDMDuOD05ry3C9FUgV7n+0X8XR4+u7fwtp1lJaWWkFV/fjDkLxXiG3YWHOAeM13YWblBc6uZ1ZSS0ZR1CJhasYxuckADNfRHh74JeE9T+Al14yu1uF1qAnYQ2F468V4BclRExZtoAzmvur4GaTpOu/ABbfXZGg02MmSRgcZGKyxtSVNJomk+bdnyT8HPhHr3xb1UhIzZeHreQ+dfSjACDrg1r/G3QPhx4SvYtB8JOb3ULf5bi+znJr6hh1Dw/wDEz4Z614O+GN+1lc6YGUqgCmfrn3NfC95pVzpF5daVqSPHqNsxSTzM7mIPJ5pYeq60tdPIuT5Y6MzoYyi4YksO/rUm7Hc1IwGcAdsU0j2r0Vsc3NJsBIw7moL2dozGUG6R3CgfXipse1O0+MTa9o6OPkN3GzfgayqS5VcabbsfS/gf4FeD/A3gqLxz8Tbt3SXBis4z8x7jjvWj4d8QfAb4lal/wjq6G2kyzkx2900W0k+pNav7YVlLd/D/AMJTwDGnlUzjgYA718jRKTLDHZuGuXwYRG3zA+2K8+lGVaLnKVjpd4rlR6D8X/hUfhT4kNlDfR31hdZaF0cNx+Fec7MOVx0ra8QWXiTSZoV8QW88TFA8bTkk4P1rGExlckMCPUCu2lFxSTdzmk3ccUUIXYfKoyTX1V4h+GPhPTv2ctO8TJpcK6w8W83P8Z9K+Tr6YxWjn1wuD7mvvvTL/wANw/s3WM/i6A3GjoioYlOMVz4qTUk0a09j4Y0G8hu9V0qGcZildFcY65NfQf7Ungjw14J8N6FdaLZC3uJ4U3kjqT1qzo2ufs5zatpaafpFwl6ZlCES8bh7VqfttRwXOieGXtA628u3aD2UdKxdaTqJalPY+SdwWJSuefWoZZtqHIzUyrtiUCq11HuiJ7J8x/CvTadrnPd2Pfv2f/gNpvjvT5vGPjG4MPh+yBbyVPL4rpp/2jfhZol++maT8P4H0e2bbJPPBl3AODzXceBXfVf2SLlNOAM0SM0yp1xiviuweBNOZZZY1IYh0YjOc150Ie2lLnexu7qN0fW/j34O+EPiL4Ff4heAIzZiNfMltFTAHHIr5Vc5Yg8SLw4x90+lfZv7M5uLT4G+Jp71GXTZQ+0yZAxz0r4xu5459Q1CWEgxvcPtx0xmqwkndxFJtbkNw+23kckjaM17L+z78ErP4hxX/ifxTOYPDml/vGA/jA7V4rfHNpMoBO4YwPevtD4PWp1P9l/xJDpQV7raVZIs7uPYVrjOaKVgiuqOQuP2hvhZoGozaTo/w9trrTLaQQtdEjLDpnmofi94P+GfiPwhB4w8G3tvYaicCXTy2WGa+ZEZbJbtJ1MbCQqwdMHjrXUjwD4pk8NnX7WxujomNxmxhQO9SqMI2knqTKU9jniobqckHHFR+So+Yjcp7mkt5hKm4cg9D61JNGZoHCnGPm/Ku2/u3Iuz6J/Zz+COkeK9MvPFnix8aLY7m8rp5m2rmuftV+CtB1GTTdC8A2cmi2zNG0k0AYyBevNdt8FJjr37N2t2GnyL9ttomeWMdSMV8NPcxRJd29yyxSpI26NuD1NedTh7So+Y1Umkfa3in4beDPjf8NJ/G3g2FdN1K3TzJbSFdoz1IIr5EPnQl7edQs0Rw49K+wv2QtMuNH+FfirUb6MxWNwr7Wk4BGOMV8kas4n1/WJR917pyv0zV4Wcudw6IdTVXZlzRBlk3YIA4wK+q/2S/C+k6t4C8WXV7p9tPPBasY2kXlTivltl3CTOPmr69/Y9hz8PfG7KTlkZOfYVWLk4wdiKabe58gzlotf1aM4GyQ4UdBzRnjmm6hPGniPXt2dxumUY9jTEuI5mKoSWHJGK3ov3FcmV0yWol+WYNzj6VIMetRTrIURYh88jhQPetue2pN2e4/su+DovGPjUarqFsJNN08s8hcDbgc/0r6B+O2h6H8U/htd6v4XtLfztMlaN/IRQdq0fAzwIPBvwQuTPqMOl3+qZH2iUDow6Ve+APw9sPAY1rS5/GlhrEWtbwLZDyC3WvBrVW6rknsdVP4T4ORM7iuBsyhU+oqs+Qf14rt/i14Rk8DfEDU9PlUx28khMAPcEmuJl5b3PWvYoyc1zXOeW56l+z78WYfh/4qGm6zYxXWg6k2yQyIGwT3ya6r4/fAu7j8b6XdeEbf7TouuSDBhGQhbtXz20Cyo7HIZRlSOoNfcn7KHjHUNS8Aazb6iyXJ0hS1s7/MysBXLioypvng9xqTOZ+J+paB+zv8KtN8KWVhbXfijUY9s8rDLoTXyFFJLL+8m/1zcvn1rrfiFr174x8baxfapM00kM5VAxziualCs+7HIrbC0bRu92KUmHmiKJyewNfYf7Ja2lt4A1q+k0+K7ntY2kRXXLMccV8cSLuRgehFfYf7Il+bHwL4ovFQTNbghIz0PHSoxrcYWTHB3Zxur/ALUXi60vZ7eD4cJsjYgMts3r1zivP/iX8btf+KUMGn6v4fXSPJX5T5ewn9BXcX37XXiGx1a9t08Hw+VBKUDLDu3AevFeSfFP4uXfxS1mG9utOGmuqhNgi2g/pU0Y7XRcklqjk1BhUKqt8vGSc5qa5uXisZnHDYwPxqGIIHByWPfNWr63NxYmNR95h+hrunFcrTM1Npn3b4H8QXvhv9mcarpVukuqW0WEBiDHOPpXz74V/aG+KGreMbC0vtEtriKWVY3jezGQp4POK958M+JLvwh+y+mo2cKSXWQqq6hhx7GuI+Cn7QFr8RLm40LWrGwsvETZS2uBEEyw4HTvXz9SLTk1G6/I7qMoy+J2PNv21PC+laDr2l6lp9vHZ3t2imaGMYwSOa8IjuANLZclmYYzXVftG6R4t0jx3PD4ouXuQzZgkJ+XHauOt4GSzRS2/jNevhU/ZxaOXExvM7u/lIj1LnPzMfzJryy5R5opVXOC/Nesa1GsbatjARZCuK8xhIXzT2ya6IO0LGTumfYXws0zRPFXwEfwzP4gs9OubiTcyzviqfhz9lvwppktreeIPHunNptpJ5zRW82S/wCGa+Q2mlilXyrqePd/CGwK7C0UmODzneU4zlmNcKwcot8r3OiWIvoz3L9pX4v6R4ostN8JeFkP9h6YPLMjcbuOtfO1lGEMYH3UGAKsarJl8AYA6Co7PnBrroU/ZLlOecuY1pEa4CwoQnm/KWJwAK+tbr4jaT8H/gnptt4Z1CGbxBPD+88sgsrYFfI7jegXJAqIWyoflJI75JNFWiqm4Rdj1ez/AGnfiZE1nO2pq43qXXygDt7816P+0BqvhT4p+C9I8UWWrWp8SRoFntx9/jrXzNtAGAOPSkXCZ27l+lZfU4KSlEtz0sSyOWAJwPaql8cwMAuc9vWpt+fp60u1W6811NaWuZXPp/4eeO/Ddr+zhe6HqGqRR6rIzMtsepPavBPhH491L4beLLbV7RyIJZiZ4QeGXPQjHNc0YV7MfpSBdvI7VxxwcU5X6lObTPpH9oSLwX4vtLTxl4cvYU1RlDXNmhxk454r50nmMxDEYOOR6Gq0cEccjOgKu3UhutLXRRp8isVOXMRXi+dZzqFJbb8uPWvp7wp8QNBs/wBnDU9Akv8Ay9XaHakYPOcc18zHoRkjNReWiuHC7XHf1qa1BVrNii+VHQ/Cnxzqnwr8UW2s6ZI6osgWeLJ+de+a9e/aD1f4efEGGy8X+G9Qhj8RSKPtVkq4IJ614EcHIpoG0goqg9+KXsUpKSJUr7gHaUbnTax6jFGOaUuWOTSZrdAwwaYVIO5Dtdfut6U/NLkUShzIlOzufS/w8+Pvh/W/ByeC/iPa+bYxLsguY13Mo/KrOhTfs+fD3UP7dgv59Vv4sm3t5o8KpzkCvl/huCagKLDzGu4+h5rleD10dkzo9rdWPQvjP8Tbv4v+K21FokttPiTZBCq4+UHjp7VwaOuNqpsK8UiszDceCfSkJ5rojT5EktjFyuxlzH50ar1G4H6YNfTV58VPDT/s8Q+EvtyvrO/cYioP0r5nyTTVUK7Y6t1zUVKEZtO+xV2WNJ8m11fTLueNAbebezKoB6171+0T8UfDnj/wv4Ys9Ekka6sIQsqt0zjFeADAPIyPQ00Qosm9I1UkdB3qJUeaSkF3awrKERADk4GfrUfy8gjII5pxHHHFASujQz1PXPgt8cbj4TPdWl1brf6Hd5Se2Ybhj2Fd5qPiH9nzWL7+1rm2uLcysJXtRFhS2elfM65VsileOJ/m5D/zrnlhYSldtmqqM+gfit+0Xb6/4bTwh4F09NI8PrwXT+NfevnxLZbUGNDuXO7PuaVVU/w7TUmMcZq6dGNNaEyk5CcLywyfSvTfgv8AG/Ufg3fyLFb/AGrR7j5Z7VjxjvXmRpCM9aqpTVRWkEZWPp3UvG/wC8R3ya1e+H5orwne0EUnG7qeK5P4r/tFN4x0CLwr4V0/+yPDkA2GNhguteFmGNusaE+uKUrnjH5VjDCQi7lSndEdvEIUVB0AxVhT27GmAYp4rp8jM9B+FPxe1b4Saq1zZRi406f5bm2YZ3r9K9YufiT8BvEty+ta14buIdRch2gEOEZvf8a+Z8n1qN1BIb+LsfSueWGTd07GkanKe+fEz9pSTxNoI8MeE9NTRdBX5R5Q2lwPUV4TuyWJ6sc1ECScs25vWnVpCkobEylzDmO48V7j8APjjofwn0zUdO1i3eaK8JLKFyCDXhlIc+v5iipRVRWY4TcXdH0XN8UPgTNPLLN4F815XLu8cmC2a8x+KHinwNrstqPBmhTaWo/1gkfdmuAIU/eVT+FN2xqeEA+lZU8Iov4hym5biHr06c1r+HLuxs9bs9R1FPOtLaRXMHZ8GstelOA47V0SgnGzZB6z8bvjb/wtKz0/S9Itp9L020xhI5MbsV5f4d1jUfDPiGx1i01C73Wb7irSZzVQ4B4GKcKyhSgk4tFKZ658Z/jJpHxch0y5j0zydVtIwjTMnLHGCa8jA455OOaWitKdGNNWRLYwDCNgc16/8HPjYnws0TVtNazWcX4OWK9M15GfpTDkdDROnGW4Jl26uPtd/fXmADdTNJgds1WY80inignmiMeXYLiZr1/4IfHAfCHTb6wk0qHUYLxizJIeDz0rx/pRU1aSqqzHF2Z9EXP7Tnh4PJJH8OLbzWYklGBzn2NcH8SvjBp3xB0q3s7LwvFpciclwgB/MV5nRz61EaChaxTlcbCMRomTvXqfWtS3fcoBOMHNZyjnIq5CcA10NKSsZrc9kPxyv3+Gw8ECxYWa8G4z1zXzVDe3XhbxDDqFhKRcW0m5GB9813QfEZ5zxXA6vzqLE8j0rGNGMb9mVdp3R6N8TfjPqPxX0uwh1fTrZbi1UKLgfePvXM2arFpuWYkBSNxrn2Be35PTpWvK7f8ACPlUGWx1q6dNU1aOwSm5as77WmJi1X/bnc15nCjMJsivSNQy0d8rdQ7E/iTXCpH8swA70U/hRMtzEZT56D3ruLEl5FQfwoK48R5ugOeDXYWHyK7+q4qxMydUb9+VqSyHyiq142+4P1q/ZoQoNAy8KKKKACmtTsgUm4UDGU5etLuHPNMJoEB60hJpM0UAGTRRTQcUCuOppoJppNA7iE0ZppNGaADNGaSigB1FIKWgAptKelJQAduKKKKBWCgcUUUDFzRmkooAKKKKACiiigAoDUhOKTdigB+aAc0zfShhQA+im7h60Z96AHYFFNz70u40ALQRmkzSE0ALilptFJgOopufekLcdaYDiaSmM3akDYNAEgp1NWlPSgBaKjLc0u7FAWH0UwvSq2aGA480m2kLYFIHqbgPpDS7qaTmnYAooop2AKKKKAAdatRE4qrVqLpQA6RsRtXHaqA1yfrXXTkiM49K47UPmnNAC4HlYI4rZgw2mPgfKBWN/wAs+fSt2yGdJcAfeBFDd0CWp2mpFRLqqqPlWXbXIeWFjkK9TmuokHmW+pMTy9y5/WudMeIWX61FP4UNrUwIl3XfJPWuryIbPJ9K5e1Q/b8fw5rpdUYQ2S54yKsRh4Ms+RzzW5Au1BVCxi3J5hFaIYAAUAOpMj1o3CmE89aAFY5puTk012xUZlxQBISaaTzUBn5pDPzQBMWxRuNQefSiegCbcaTzKhMwpvmigVicyUbs1D5oo86gLE2KMVCZaTzT60DJ8UmDUAkPrThKfWgCWkJA61EZTnrSb89aAJtwpag34o84UAT0wsc0zzfem+YD3oAnDCguvrUBYHvTCT60AWC47Um45qFWNOzQBPkYpN9Q596UGgCXfRvFRgijNADiRTc0hPFNBoAfRupuRSZoAfu+lLmo80ZoAlDkUocdzUBb0pm45oAt7h601mHWq+4+tJk+tAE++jzSKg8wA4oLUATeYfWk8wVDu96TI9aAJ/Mo3g1Dn3oz70AS78U7zuMVBRQBP5gIpQ1V+aUE0AT7qUSYqDeaXfQBM0uR0pFfPaoTJR5gpWAthwaXIqmJad5vvTAtUVCsvvT/ADBQA+imK2T1p24UAOFWIqrr1qzCOaAHXC/uHNcVfn96frXb3HMEgHYVw12d0hHvSYEqjdFx6V0NggXTWB6AVh26boq3Ld1GlS8neAaSWg0zq4MSx3SjorsT+JrDjTd5oPIycGr2k3IEurwDnEpVc80x4vJhf1OaVP4UD3Odgi/04AetX9al8144VGcHmobX9zdGVxxmnWim5vZZWHy54qxFq3iEUG3oaUnAqSbCd6oSzgnGeKAJXkx3qE3AWqss2OBUIYmgC48+e9R+d71BRQBK0pNN8yozTc0ASmSjzKjHNFAEm/NJn0plFAD8n1ppJz1pKKAFDEd6XzG9abRQA4SN60vmmmUUASeaaPOPpUdFAEvmg9RR5imoqKAJCynjNJ06GmiloAMml8wrSUmKAFMho3t60mKMYoAcJGFHmmm5ozQA8TEUvnUwYo4oAeJKPM5qNu1G6gCTzKTec0wmkzQBJvNKHNRZNGTQBK0nFM3H1pM0lADt1LvPrTKKAHE55opAaM0ALn3pM0hIpM89aAH0U2igB1KD70yigB+T60bj603JFG40AO3GjdTc0tAAW9qTNBpKAFzRmkooAeHwetO82oqKAJxLSrLzUApaAL6Pmrcb4xWVHIQcGrMc2D1oA05ATE3uK4a+jMc8gPrXbwvvQfTFcrrkHlXXPC0APsU3R81buI/L0+TaSCw6etQWIxAW9qv7Ve3wxwnU0dBXL+lRvDreqIxOTO56+9Xb+cKrIOW9KtajYrpviLWJZGyoc7Md8msG5lZn8xh15FRD4UW1qRMv7h0ByXOSavrJFb2oAI3YrHe4O75RzUsNtJOwLZAqyRLm6LnAqoSzdc1rjS1696Dp1AGTgntShT6Vomz2037KaAKW00pXjpzVs2xxwKb5DDqKAKu35Sajx7VcMXPQ0eSP7tAFUAUYGatmD2o+z80AVcUbMjOatfZ6XyCBx1oApbT6Uu32q55J7jmnCIntQBRx7UYq75JPammA+lAFPFAFXDD/ALNNEPtQBWwaXB9KtrFx0pfJz7UAUiPUUhHtVzyM9qXyD6UAVBGTR5TVb8k+lL5Z9KAKgjNL5ZNWxGfSlEdAFIxsDSGM1f8AJJoaEjtQBn7DSFGHar/kn0pDCfSgCjtPpRg+lXfK9qQxe1AFMUtWDCD2pvkj6UAQmm1OYR60nk0AQ0VMIaXyKAIKKkaPZSBC3qKAGUVJ5RpPKNADKKf5TUCJj2oAiPWkFWRCRwRR9mJPFAEGKWrH2VgM44oEJ9KAK4FOAz2qwsJz0p3knPSgCsVI60hFWWiNNMdAFcLS1P5PtR5FAEB5pMVM0RpvlNQBHg0AVIIm9KcLdiOhoAi25pCpFTiIjsc1Mtvu6igCkAaWtAWeacbI9sUAZtODlTWidPGKY2mkqTQBYsH3KOc1T8SWwESSn1qOF3tpCrcAUuu36TWip6YoAjtEVrEOKmhKmJsjjFRWLK+n4XtVu2tTJCrE8Z5o6Ca1L0Ty3shmupCZX5Yds1S1E+ZIIUz+FTTyOr+TEP3rHt2rSstKEEe+f5n9TUryC5l2WlFDuk5+tafkrGABipJZUHGQAPSqU94kf8VUMmJAPWgYPesmXUUB4bNMGqKozmgDYZBSeWvtWI+rg/xUwauP73NAG75QpjQjtWN/axP8VH9rYH3qANVosDmmbR6VR/tQMBkilF8nqKALZUUBBmqwvUPeni7T1oAn2ClKCoftSHuKcLhT3oAftoC+tM89fWneap70AOCil2CmCRSetSbhigBNgoCClLCgGgA2r6UmwelOooAbsFGwU6igBBECKPKozTlfFADfLx1o2j0prTAHk0eYp70ASKgp4QGovNVB15oFyPWgCcxCm+UKYbhTzmm/alB6igCXyBTTAKjOoxr1xkVG+poRxigCwLZetIbVD1qqNUXoTTX1RB3oAtfY0FIbNCOtZr6sucZqNtWX1oA1fssY7il+zLjqKxxqy+tKNXUjrQBri3Tvig20fYCsb+0wT1praoR0NAG39lXtimGFVOKxl1ZvU0jamx6NQBs+StKECntWJ/asgHWl/tZ+hxQBtYUnoKUBR2FYZ1YjqKP7UJ6GgDd6+mKAq1hDUz3NO/tT34oA3gqUbENYS6p71MNU/wBqgDXMSnvTfJX2rJOoj+9QNQ/2qANYQKfSlECisc6lj+KkGqnHWgDa8mM9qY0SZrG/tQk9aY2qkHk0AbiRIKk2pjjFc8NYPUU7+12FAG/tT2oGwdMVzUmruTTRqzDqxoA6jzF6YFL5i1y51Y4+9Thqxx1oA6YzKOvFRSX0MYxuFczNq7FcA81m3GoSNnk5oA6me9gkJBIBqjcxR3MRVGBY9q5Z7iRucmiK8mhk3K34UAdXpiMtu8b/ACle1b09wlrZRAjJJANcrYa7BIAuArd/etfU5ftenrLD/wAsjuKipkCtc6W205dPi+0XDAzD7wNZmq+JQylIxj3FYmpeIJ7qRlydp7isZ3Z8kk5piNGXV5Wycmqcl7JL1Y1VOSaUUxjmlIOQTTTMSMUhGaMd6AE3NSEmlyKKAEyfU04SMOKSigB3mt6mlEzDuaZgUYFAE4uT6mpFuT61U6UoODQBeF0cdakW6PrVANning0AaK3PvUq3HHWs0U/djvQBrRynHWpllOetZUUjfhVlJGNAGirkmpFfb16VUjk6VODmgC0DkZFBNRKcdDTiTigBc0hfFMzUZc55oAe8oAqB7rA61HKetVXyw60ASSXRJzUL3xUHmqspI71VkY80AWn1BznB4qH+0ZAepqrikoAutqEhGMmojfTf3qr0UASNdSH+KkFzJ6mozSUASmd27mkLs3U1HRQA/c3rQGPrTMmlyaAH7ieKKYDzTgeaAJMClHFN3e1O6jNABRSFgKUEHvQAjE44pmSTUhBxxTMHPSgBRz1FIeDxTiQBzSEgigBpNJkmg9KaDQA78aN7Yxmkz70UAGT60FmHegmm9e9AC7mPel3MO9Nwe3NByKAF8xh3pu5j1o3Uuc9qAE5o3HpzS0ZFABuPpTTzTsiigBtFO4pOKAGNUEowasMOeKjkTcOhoAqmo2bB6ZFTtGR2NQSKd3AY/hQA3djlBgmuj0PVPM2QyN35965xI5JJNoU5+lXLezuLd/NKEAd6ANAOB1PNLuZ+Ap/CmKJskrFn8Kd9svYuFgDfhSEO8mTrsY/hUkVnPMfljb8RR/aF/tyICD7CpI9Y1RefJOB3xTGSDRbtsfumpf7BvjwsZA96Qa5qxOBGR+FH9u6uh/1bH6CgB6+GrxuStK3h27HYmmr4k1cdInH/AAGnjxJqg5MZ/EUAR/2BdgfcY006Ndr/AMsm/KrQ8TamRjyh+VKPEWpf88s/hQBQbTLlesZ/KozYzDqhFaR8SaivW3J/CkbXdQmH/HqMf7tAGT5Lg42n8qlW0dv4TV0Xl63P2QE/Sgz6ix4tSPwoArrYS/SpUsJs/dzStLqY/wCWB/Ko2udUXpCfyoAtDTZD1U5pV0p/Q1TF/qx/5ZEfhT0vNWB+4R9RQBqR6Y2OOlTJpzDvWO1/q/8AdH5U37Vq57Ae4oA6JLQKOc1MtuuK5j7RrBHWk87WicE8UAdWtuAaDDnjtXJmXWh2Jppl1lecsKAOs+zk9cU02eTXLC41nH3z9MVNHLrJGQRQBuS2R6fNUI04nOD+dY7T6yOOTTVk1o8/MBQBfn0qUngg1Sk0u4zwpNKX1cDOCagM+rucAEGgBG065HWM/lTP7PuT/wAszU6HWgOOaRhrYHKfpQBWNncAcxGozFIvWNh+FWv+J0eqCmGPVs4aMEUAVsH0P40VMbXUm6Qj8Kb9i1IcmGgCOjGacbLUCeYaX7Jer1gzQBHtbsKCjelPFtqHaAijyL8f8sW/KgBoikbopqaO3Z8A5BpixamvSE4+lBTU85EZFAFj7FIelTDTZz0XNVQur44jOfpUiQ6y4/iT6UAT/wBjXDfw1LF4fuH5K8fWqvla8nAkYimE68DguaANqPw3IRycfjQ3h1153VjhdcJ5lI/Gl/4nI4Mx/OgC7Pozr0OcVVbT3XjFM26tj/WZqMw6k/3nwaAHNZOOMGmCzkzwtIbPUe0n60os9T/vlqAJRYu5wBz9asxaFLIOcCqZsNWPR8UgtNXU4ErfnQBqr4cJAzIB+NS/8IuxHEg/OssWuqHGZ2FSCPU4/wDlsxoAvnwvKByc/Q1C3huUdD+dVHl1Ucea34VXb+1X/wCWzj8aANA+Gro/d2fnUkfhG9kHOB+Oazkh1fr571J5es/wzuPxoA2IvBlwMb2A+tSP4OKjl1z9axRFrf8Az8SfnShNZ6G5fP1oA108GO54dT/wKrcXgadhjjH1Fc88Ws44uWz9arsniFDxdSAezUAdS/gO4H3QDT4vhzfzfcVD9TiuXjvfEcfIvpcjtuqZda8Tp92/cUAdUnws1AnLIv4MKsx/C6YcSOF+prjG17xKR81659wxFRnW9dbhr2b/AL6oA79fhYi/M11GM9i2Ksx/CyBjxPEx/wB4V5lJqmrvjfdytjpk1Jb6tqqvxdyD/gRoA9csPhTAkqlniOTzjFew6X8CdK13RMRy20c5GMSNivliLUtcODHqMgPb56nbXPGkTAwavMoHYPQAGezjGF28+1NTULSI/cB+gpFs4weAMe9ONvEn3UU0hCvqluf+WfH0qJtVhHSEH8KUwRk/cApPs8Z6pTGRnWIUORBk/SnLrEcn3Ytp9xT/ALJF/dpPssXXbQAh1Ug42Kfwpx1NWxuhU/hSC0jJ6UNaJ2oARtWjTpbqfwpn9rg9LcD8Kk+zKB0FAtwOgFAES63tPMK/itSHWSekKflS+SCOg/KlW2TutAEY1yRTxEPwFP8A7fmP8A/KnmCM9qb9nTsKAE/tuT+4Pyo/txv+eI/Kl+zj0FHkqvBUGgCJtabP+oB/CmNrjt1gGPpVjyE/u037Mh/hoAqNq5JwFo/tE/3atfY0/u0v2VP7ooAp/wBotn7nFH9ov2Rh9Kum0TGQKFtUXtQBTGrypwFP40ja1L3jz+FXjaxntQLWMdgaAM8atu6xHPtS/wBrup4jYCrr28ZP3RSCFAMbRQBU/tth/Cx+opW16YDAj/SrRgjI+6Kb9mj9BQBV/tyU9UNM/tls/dOfpV37PGOcCk+zxnnaKAKqa3Lnhf0qRtal64/Cpvs0Y/hFDW0Z/h5oArDWpj/DQNXkJ6VMbVMdKb9mT0oAaNUc/wANSDUHPem/ZlzR9nANAEq38g6mhtSfPUfiKjMIprW4PNAEralJ7U0aqw7c0wW+etO+zIO2aAF/teUcBc0i6pMOfLH5UCBRTjEtADG1Of8AhUA00ardEYqQwrR5C0AQ/wBp3WfWj+1Zx1HNTCFQc0ht1PYUAVJNSmkOOlAuJic4zVk26g5xTgijtQBXFxMDkIacb64/uVZwPSnADHSgCib+bPMeaP7SlHAj2+9XcD0FBjUjG0UAUF1O4T1Jpf7ZuyceVxVvyE9MU8RgDFAFBtUuT1Q0DUpcfdq6UU9qDEnoKAKP2+cnOylN9Mf4f0q8Il7AUGJc9BQBQGp3SdFNIdSuyOOD9KvGIegppQDoBmgCiNSvRwQ1Mlvb3r8xrRGcdOKBnBx1oAylu71/71PE94vVmH41oYYHIUUvzPwQBQBn/abkckk00yyt1zWmYhjkCjylx0FAGaJJB3NODsTyTV7yV9BTfLX0oAplm780m4g5xV0xrjpTTGvpQBGl4Y1+UHfU66rOe1RFF9KTGO1AG+VyKbgipMU0g0hDMe1GBTttG2mMTFJj2p+KSgBuPajHtTqKAGYoxT8CkxQA3FJT8U3FACUUuKMUAJRjNLikIxQAUUUUAFFFFABRRRQAUUUUANYY5phqQ9KZQA2iiigBM0ZoxSYNADsikPSkwaKAEJpvenHpSUAOpp606mmgBCcUA5pD1oHFADqKTNGc0ALRRRQAUUUhoAM0ufemYOaWgAPWimnrSigBwpaQUtABgUUUUAFFFFADaKXGaMUAApaKKAA80gGKWigBp6009acetNNABRn3opG6UADE03caTJNJmgB244puaM0lACk00ilpM0AJj2pMU7ijigDdpDS0UkJDcGjHtTqKYxtFOooAbRj2p1GPagCM5pBn8KcRRigBDTacRSYoASilxRigBKQ9KdikKmgBtFKRikoAKKKKACiiigAooooADzTdtOooAjoI4qSkIzQBHtNJg0/aaMH0oAZg0U/B9Ka1ADT0pKdRQA2ilNNJoAQgZpCKCTSZNAAOaUDFIOKUHNAC0UUUAFIaWigBuDRTqKAG0U6igBBS0UUAFFFFABRRRQAUCigdaAHU2nUUANwaQnAp9RnrQA0nNFBGKKACiiigCNsZ4pMVJgE0bRQBGRSU9lwKbigBKaafimlTQAlFGDRigDfwaNppVBJIxgig5BxTa6iQmD6UmDVqzsLvUpvJsbaS5n/uRjJpl1az2E7W95E9vcL96OQYNZ+0i9CuWRBRTqaeD9atC1CirFrY3F7OIbaLzbg9IxyW+gqe6065sZPKvbWa1nHVZV21PMr2HyvcoYz2pMVM4Gfl6UBA3Heqd0JXICKTFWDbOJI4wCzSHCqoyTVq/wDD2raQYv7SspLZJhmJnVhuFJtJhqZw4oxmpGheNsFfegDHWqsxXIyKbipSMkBQSScADnn6VrX3hLXNO09dQutMnisX6SsuAahzityrGGR7UmKeRntQVIGae+qCwyilbGOa17fwd4iu9JbVbfSbhtNTJaULwBRewjH4owKSPDIG9aftFMBmKMU8JkE9AK3dG8E6/wCJbSW50nTZ7iOL77quQKmUlHVgc/ijFWJ7SS1leCVdk8R2yoeoP0qEjBpxaeqASginoNx7D3Nbfh/wdrfiyWWPSLGW4KdWVSRj8KUpJBa5gEcUnPpVq9sbnTbyWzuoHhuoyQyOpHSq5z6UlK+wWaG1GW3N3qYH8/etbw74Y1Xxhe/Y9Ds3u7zGQqA4/E44p3SAwTnnNNHWtPXdF1Lw5qbafq1s9teqCSjKcVncdqaaY7AabinqQDzyPpV/Q9A1DxLrEemaTby3VzIRhFB7+9OTSBmWQKbiuh8XeDdZ8B6idP8AEFhLaXDAFd3fNc+cgkMOR+lKL5tiRBzSgUbto45PpVuysZ7+6gtLWF5bmc7VRRk5obSGV2Qr1pMV1fiz4c+J/BFvbXGu6ZPb29xyjMuAK5RWDgbeVPftSUrgJg0pGOtOx70jhQBu4Y9F9abdgsNoz2rtJPhP4ui8O/8ACQvpcn9l4zuCZbFcRJIHJCjBHBB4x9aSknsFh9FMUmnbgOc8VT01Yri0V02geAvEfiqwmvNG0qW4t4gS7bTwB1rn2ie2uHt7mJop4yVZGGOahTi9B2IaXFK64bA6UmdoPXj0qttgFHFJjNamieH9U8RTG30uze6uuvlxg9PyqtqWmXej3b2l/C0F2hw0bLyKnnTYrMqbeKB1pcGjByOKpyGgoq5pWkX+vXy2OmWsl1dt0ijHJNT674b1nwtdC11zTZbC5PSOUcml7RS0Q+VmZTTT2BXIIII60Cq6CIyMUxqv6Rpl54h1SPTtPtZJ7lzhVQZya1/F/gDxD4HmgTXNPlt1lHDMuMVPPENTlgTn2p9BhbJORt/hwe1IpIbBGT2p3AWirdpYyahdR21vE0k8nConWuw8VfBrxj4P0iHWdS05k02VQ28KSQPcVLnFbsvlbVzgyM0m2mpJ5gJXkUuTnAHNX5kWF2H1FM2nOOKnRHZlQJvkJACDqSfavRNR+AvjXTPDaeJZNLY6Yw3nqGA+mKmU4x3Y+Vnmu3HWmkc1IMOzLtIZTggjGKGQjrQpXEdDKjrcPDPE8U0RIdHG01seE/C2p+MNVj0rTbOS4mdhlkHCD1NFFcs60/ZXuaqCUj7w+DPwP0v4aabDcXUMd1q0ihmZhkDI6Vg/Hb9nuz+I9nNrGiRrb65bjPlqMCSiivm44mo6+rOxRVj4Z1DSr/R9Rk0zUbZ4b2AlWjKkA+4Jp2k6bd6vqUenWMDTXc52KgGcH1oor6VVJezucsormPun4G/s+6d4H0+21jXI1n1uUbgj8+Ua6L4yfBHTPiZpstxFBHba1GuYnQY3YHTpRRXz7xNT2j1OjlVj4H8UeENV8IapLpuqWzQTxvgEj7wHesRlkN2lrDE0s8mAiKOWoor6JVJOkpdTka94+wPgF+zjFa/ZvEPiuNpLhsS28DjgDPevcfib8LtC+JmjnTLi1ihuIkxbyqANp7CiivnquJqOpe52OC5T8/8Ax/8AD7Vvh3q8+natEyxKT5U+OGHauKkJiZU2lnfAUKCck+1FFe7RqylTV2cXKuY+n/2fP2c5dXnt/EfiZDFaKQY7d14PcHmvrnWfCWj+JdAbQ72xgFoY9iEJjaMdc0UV4devN1NzspxTR+fnxo+DGp/C/VZmWPztIkbdFKvO0Z715MdzR7gQUJ6DvRRXt0KsvZnNNJOx7v8AA39ne98f31vqmpK0GixEOCwx5mOor7osPDekW2jf2BDYQLpjR7DHt5PGM0UV5WJqzc0rm0UrHxL+0P8As6Xvge+k1rQI5J9LlO9lAz5ft1r56CCRCxIjCDLcc0UV7VGT5EYSirnrPwX+CGo/FTV4pngkttHhO6SVhw4r9DPC3g/R/BGippOk2sYhVNsr45ftRRXDWqSvuUoqx81/tGfs0DUI5vFXhKEC4UF5rdBgH1J4r4xmgeGSSGdWjuIyQ6MCCpHHeiiuvDTbWpLijrPhl8N9Z+KOuR6Zplu5tgwEs+PlXnnmv0n+HXw30v4Y+H4bDT7aNrry/wB9IQMs340UU60ncIxR5j+0D+zxZ/ELTpdb0G3S38QRfMwVR+85+nWvgPVNPutL1K603UYDBeWx2vG/WiiinJ2KaWpp+BPh/rXxF1yLTtHgeQFgHkA+6M81+j3wa+DmjfCLQY4reCOTVZgGlmKgkHqRRRUVZu5FOKKPxo+Buj/FrSXcW8dvrkakxyhQMn3r85fFnhS/8G65caNqlu0FxC2BJJwJPcUUU6UncqwvhHwfqfjTWYdI0eEzXErAGRRkKD36V+iXwR+A2lfCjRoJ54Y7nxA6gyTEZK8UUU8RNjSR0PxT+Euh/FzQ5LPUoEj1LYfJuVHKnHFfmt8Sfhfrnwq8RzaXrcLfZdxENwq/Kw7Emiipw03cHFXMHQtDvtf1GDTtKtmvL+dtmIxkLnvX6A/s/wD7Nmn/AA9tIta12NLrXJVBCMOIjiiirxE3YXKj2fxr4W0Xx5olzpWs2ySxTLhWIz5Zxjivzk+M3wG1r4VanNPHDJeaJK5KSDJ2jtmiiuGlWnzlOKseSRRyTyxwQRtLNJwkagksa+t/gB+zB9oMXiPxjAQinzIbVhyRkUUVvjK01HRk00rn2LLa2T6b/ZklpH/ZmwxiALxtNfEH7Qf7MEvhuWXxR4WiM2nysXlgQfc9+lFFeXha8/a7m84qx8y7Isk4MTZw4bsfSvWPgn8ANY+K+sxTTRSWegxEGSZhjdjsKKK9fEVZKG5goK5+iHhPwrovgbQodJ0i3jW3QBZG2jLkevFfP37Q37NVv4qs5vEfhWJIdTjy8sKrzJ39KKK8ujWnz7mzgkj4dudPn0+5lttRj+z3MJIdXGDxXQ+B/h7rXxE1uLTdChkYMRvnx8qg+9FFexWqSVO5jyq5+iHwb+CmifCjRo1SKO51lgDLM6g4yOlc78dP2eNI+JdjJqOnxpaa6ilsgbRIR+NFFeNCrPmWpo4o+A9f8M6h4U1abStUt3guIm2hpPlDe9Q6N4Z1LxTq1vpekwtcXEzbDsBIXPfIoor2JTl7K5k4o/Qb4FfADS/hVpcF/dwrca5Kvzswzt4/+vXRfGb4O6V8XdCeGVFg1iJcwXCDByBxRRXjwqz59zaysfnT4z8C6z8ONYm0bWrdhsY7J8cOPrWVpnh++8Ralb6ZpMbT3VydoVBnbRRXsqb5LnPZXP0G+AnwB074Y6VHqGoxx3GuXC7juXJjNei/EPwBpHxN0WfStWhRnkU7J8ZKtjFFFeJUrT59zpjFWPzr+LPwY1r4U69NBc27zaS7Ew3IycjPTpXnNtYXmralBp+l2z3F1KflVRyaKK9ehVlKF2YSSufeP7PX7ONt4Ks4vEPiOJJtVk+eOJhnZ3r6F1/SrHxRpU+l6nbpLp8ylTEQMDNFFePUrTc3qb2Vj8/vjr+zZqHw1v5tW0WJ7jQJyXCIP9Vk9+K8GQxzOscB825ZggjUc5NFFe1hKspU3czUUfZv7OH7Msdt9m8U+L4t0xAaG2ccYPIJr63eC3ltfsssEb2RXyzAyjASiivJxFWbm7s05VY+N/2hf2Yf7P8AtHirwlEHh+/Naxj5h3r46u5ytwYduLndsMI+8G9CKKK9DC1JOndmLirn/9k=";var Al=1.4,Rl=3;function Tr(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Cl(i,{srgb:t=!0,anisotropy:e=8}={}){let n=new Ji(i);return t&&(n.colorSpace=re),n.anisotropy=e,n}function Pg(){let e=Tr(288,620),n=e.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,288,620),n.fillStyle="#000";let s=17,r=288/s/2,o=12;n.beginPath(),n.moveTo(0,0);for(let c=0;c<=s*2;c++)n.lineTo(c*r,c%2===0?0:o);n.lineTo(288,0),n.closePath(),n.fill(),n.beginPath(),n.moveTo(0,620);for(let c=0;c<=s*2;c++)n.lineTo(c*r,c%2===0?620:620-o);return n.lineTo(288,620),n.closePath(),n.fill(),n.fillRect(0,0,2,620),n.fillRect(286,0,2,620),new Ji(e)}function Ig(i,t,e,n,s){let r=Tr(n,s),o=r.getContext("2d");o.drawImage(i,t,e,n,s,0,0,n,s),o.globalCompositeOperation="destination-in",o.save(),o.translate(n/2,s/2),o.scale(n/s,1);let a=o.createRadialGradient(0,0,s*.44,0,0,s*.6);return a.addColorStop(0,"rgba(0,0,0,1)"),a.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(-n,-s,n*2,s*2),o.restore(),r}function Lg(i){let n=Tr(576,1240),s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,1240);r.addColorStop(0,"#1c1719"),r.addColorStop(.5,"#141012"),r.addColorStop(1,"#0e0b0c"),s.fillStyle=r,s.fillRect(0,0,576,1240);let o=s.createLinearGradient(0,0,576,0);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.3,"rgba(255,255,255,0.05)"),o.addColorStop(.55,"rgba(255,255,255,0)"),o.addColorStop(.8,"rgba(255,255,255,0.035)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,576,1240);for(let _ of[0,1166]){let m=s.createLinearGradient(0,_,0,_+74);m.addColorStop(0,"rgba(255,255,255,0.08)"),m.addColorStop(1,"rgba(0,0,0,0.25)"),s.fillStyle=m,s.fillRect(0,_,576,74);for(let d=0;d<74;d+=6)s.fillStyle="rgba(255,255,255,0.05)",s.fillRect(0,_+d,576,1.5)}let a=s.createLinearGradient(576/2-22,0,576/2+22,0);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(.5,"rgba(255,255,255,0.07)"),a.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=a,s.fillRect(576/2-22,80,44,1080);let c=Ig(i,18,120,290,210),l=360,h=c.height/c.width*l;s.drawImage(c,(576-l)/2,250,l,h),s.textAlign="center",s.fillStyle="#EBD9A0",s.font='600 92px Georgia, "Times New Roman", serif',s.fillText("Dark",576/2,640),s.fillText("Delight",576/2,735),s.font="500 26px Georgia, serif",s.fillStyle="rgba(235,217,160,0.85)";let u="DARK CHOCOLAYER";s.save(),s.translate(576/2,850);let f=9,p=0;for(let _ of u)p+=s.measureText(_).width+f;p-=f;let g=-p/2;s.textAlign="left";for(let _ of u)s.fillText(_,g,0),g+=s.measureText(_).width+f;return s.restore(),s.fillStyle="rgba(235,217,160,0.55)",s.fillRect(576/2-70,780,140,2),Cl(n)}function Ug(){let i=new Mi(Al,Rl,24,60),t=i.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e)/(Al/2),s=t.getY(e)/(Rl/2),r=Math.pow(Math.max(0,1-n*n),.55),o=mr.smoothstep(1-Math.abs(s),0,.16),a=Math.sin(n*38)*.006*(1-o);t.setZ(e,.16*r*o+a)}return i.computeVertexNormals(),i}function Pl(i){let t=new He,e=Ug(),n=Pg(),s=new we(i);s.colorSpace=re,s.anisotropy=8,s.needsUpdate=!0;let r={alphaMap:n,alphaTest:.5,roughness:.34,metalness:.2,clearcoat:.8,clearcoatRoughness:.22,envMapIntensity:1.1},o=new Wt(e,new Tn({...r,map:s})),a=new Wt(e,new Tn({...r,map:Lg(i)}));return a.rotation.y=Math.PI,t.add(o,a),{group:t}}var vr=.58,yr=.66,Mr=.04,is=.035,Sr=.12,br=2,Er=4;function Ng(i,t,e){let n=new $i,s=-i/2,r=-t/2;return n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n}function Og(){let e=Tr(256,292),n=e.getContext("2d"),s=20,r=16,o=(a,c,l,h,u)=>{n.beginPath(),n.moveTo(a+u,c),n.arcTo(a+l,c,a+l,c+h,u),n.arcTo(a+l,c+h,a,c+h,u),n.arcTo(a,c+h,a,c,u),n.arcTo(a,c,a+l,c,u),n.closePath()};return o(s,s,256-s*2,292-s*2,r),n.fillStyle="rgba(35,14,8,0.30)",n.fill(),n.lineWidth=5,n.save(),o(s,s,256-s*2,292-s*2,r),n.clip(),n.strokeStyle="rgba(20,7,3,0.55)",o(s+1,s+1,256-s*2,292-s*2,r),n.stroke(),n.strokeStyle="rgba(255,190,150,0.22)",o(s-3,s-3,256-s*2,292-s*2,r),n.stroke(),n.restore(),n.save(),n.translate(256/2,292/2+6),n.rotate(-.2),n.textAlign="center",n.textBaseline="middle",n.font='italic 700 58px Georgia, "Times New Roman", serif',n.fillStyle="rgba(15,5,2,0.55)",n.fillText("Campco",2.5,2.5),n.fillStyle="rgba(255,200,165,0.32)",n.fillText("Campco",-1.5,-1.5),n.fillStyle="rgba(96,46,30,0.95)",n.fillText("Campco",0,0),n.restore(),Cl(e)}function Il(){let i=new He,t=Ng(vr-is*2,yr-is*2,.04),e=new cr(t,{depth:Sr,bevelEnabled:!0,bevelThickness:is,bevelSize:is,bevelSegments:4,curveSegments:8});e.translate(0,0,-Sr/2),e.computeVertexNormals();let n=new Tn({color:5975069,roughness:.3,metalness:0,clearcoat:.55,clearcoatRoughness:.32,envMapIntensity:1.15}),s=new un({map:Og(),transparent:!0,roughness:.4,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),r=new Mi(vr-.02,yr-.02),o=Sr/2+is+.002,a=br*vr+(br-1)*Mr-.06,c=Er*yr+(Er-1)*Mr-.06,l=new Wt(new ln(a,c,Sr*.9),new un({color:2757130,roughness:.6}));i.add(l);let h=7,u=()=>(h=h*16807%2147483647,(h-1)/2147483646),f=[];for(let p=0;p<Er;p++)for(let g=0;g<br;g++){let _=new Wt(e,n),m=new Wt(r,s);m.position.z=o,_.add(m);let d=(g-(br-1)/2)*(vr+Mr),E=((Er-1)/2-p)*(yr+Mr);_.position.set(d,E,0),i.add(_),f.push({mesh:_,base:new I(d,E,0),away:new I(d*1.5+(u()-.5)*.9,E*1.15+(u()-.5)*.7,(u()-.35)*2.6),spin:new I((u()-.5)*2.6,(u()-.5)*3.2,(u()-.5)*2),orbit:new I(u()*1.4+.4,u()*1.6+.4,u()*1+.2),phase:u()*Math.PI*2})}return{group:i,blocks:f,slab:l}}function po(i){let t=new lr(1,12,9),e=new Tn({color:4858131,roughness:.1,metalness:0,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.3}),n=new nr(t,e,i);n.frustumCulled=!1,n.visible=!1;let s=31,r=()=>(s=s*16807%2147483647,(s-1)/2147483646),o=[];for(let u=0;u<i;u++){let f=u%2===0?-1:1;o.push({phase:r(),rate:1.6+r()*1.8,vx:f*(.9+r()*2.6),vy:1.4+r()*3,vz:(r()-.4)*1.8,size:.022+Math.pow(r(),2.4)*.062,stretch:1+r()*.6})}let a=new ve,c=1.45,l=5.2;function h(u,f,p,g,_){if(n.visible=f>.01,!!n.visible){for(let m=0;m<i;m++){let d=o[m],E=(d.phase+u*d.rate)%1,x=E*c,T=p+d.vx*x*_,L=g+d.vy*x-.5*l*x*x,w=d.vz*x;a.position.set(T,L,w);let A=Math.pow(Math.sin(Math.PI*E),.55)*f,H=d.size*A;a.scale.set(H,H*(d.stretch+(1-E)*.35),H),a.updateMatrix(),n.setMatrixAt(m,a.matrix)}n.instanceMatrix.needsUpdate=!0}}return{mesh:n,update:h}}var De=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Wn=(i,t,e)=>i+(t-i)*e,Ai=i=>i*i*(3-2*i),Dg=[{in:-1,out:.13},{in:.19,out:.32},{in:.38,out:.52},{in:.62,out:.73},{in:.78,out:.88},{in:.93,out:99}],Fg=[0,.255,.47,.675,.83,1],wr=[{p:0,top:"#F9EBB6",bot:"#EFD07A",fg:"#2B140D",dark:0},{p:.5,top:"#F9EBB6",bot:"#EFD07A",fg:"#2B140D",dark:0},{p:.64,top:"#3B1C12",bot:"#190B06",fg:"#F2E2AE",dark:1},{p:.88,top:"#3B1C12",bot:"#190B06",fg:"#F2E2AE",dark:1},{p:.97,top:"#4D1713",bot:"#180806",fg:"#F2E2AE",dark:1},{p:1,top:"#4D1713",bot:"#180806",fg:"#F2E2AE",dark:1}],Ll=i=>[1,3,5].map(t=>parseInt(i.slice(t,t+2),16)),mo=(i,t,e)=>{let n=Ll(i),s=Ll(t);return`rgb(${n.map((r,o)=>Math.round(Wn(r,s[o],e))).join(",")})`};function zg(i){let t=0;for(;t<wr.length-2&&i>wr[t+1].p;)t++;let e=wr[t],n=wr[t+1],s=Ai(De((i-e.p)/(n.p-e.p||1)));return{top:mo(e.top,n.top,s),bot:mo(e.bot,n.bot,s),fg:mo(e.fg,n.fg,s),dark:Wn(e.dark,n.dark,s)}}function Ul({scroller:i}){let t=document.documentElement,e=[...document.querySelectorAll(".chapter")],n=e.map(l=>l.querySelector(".chapter__body")),s=[...document.querySelectorAll(".rail button")],r=[...document.querySelectorAll(".blob")],o=document.querySelector(".hint");s.forEach((l,h)=>{l.addEventListener("click",()=>{let u=i.offsetHeight-window.innerHeight,f=i.offsetTop+Fg[h]*u,p=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:f,behavior:p?"auto":"smooth"})})});let a=-1;function c(l){let h=zg(l);t.style.setProperty("--bg-top",h.top),t.style.setProperty("--bg-bot",h.bot),t.style.setProperty("--fg",h.fg),t.style.setProperty("--blob",String(1-h.dark)),r.forEach((f,p)=>{let g=p%2===0?1:-1;f.style.transform=`translate3d(${g*l*120}px, ${-l*(60+p*50)}px, 0) rotate(${g*l*25}deg)`});let u=0;e.forEach((f,p)=>{let g=Dg[p],_=.03,m=Ai(De((l-(g.in-_))/_)),d=1-Ai(De((l-g.out)/_)),E=Math.min(m,d),x=l<(g.in+Math.min(g.out,1.2))/2?1:-1,T=n[p];T.style.opacity=E.toFixed(3),T.style.transform=`translate3d(0, ${((1-E)*22*x).toFixed(1)}px, 0)`,f.style.visibility=E<.01?"hidden":"visible",f.style.pointerEvents=E>.6?"auto":"none",E>.5&&(u=p)}),u!==a&&(s.forEach((f,p)=>{p===u?f.setAttribute("aria-current","true"):f.removeAttribute("aria-current")}),a=u),o&&(o.style.opacity=String(1-De(l/.04)))}return{update:c}}var Bg=document.documentElement,Nl=document.getElementById("scroller"),Ar=document.getElementById("stage"),kg=document.getElementById("gl"),rs=document.getElementById("loader"),go=window.matchMedia("(prefers-reduced-motion: reduce)").matches,qe=(i,t,e)=>De((i-t)/(e-t)),Ze=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Vg=i=>1-Math.pow(1-i,3),Ol=(i,t,e)=>Ai(De(1-Math.abs(i-t)/e)),ss=[[0,1.5],[.14,1.5],[.2,-1.5],[.34,-1.5],[.4,1.5],[.58,1.5],[.64,-1.4],[.73,-1.4],[.78,1.4],[.88,1.4],[.93,1.5],[1,1.5]];function Hg(i){for(let t=0;t<ss.length-1;t++){let[e,n]=ss[t],[s,r]=ss[t+1];if(i<=s)return Wn(n,r,Ai(De((i-e)/(s-e||1))))}return ss[ss.length-1][1]}function _o(){Bg.classList.add("no-webgl"),rs&&(rs.hidden=!0)}function Gg(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}async function Wg(){if(!Gg())return _o();let i;try{i=new Zi({canvas:kg,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return _o()}i.setClearColor(0,0),i.toneMapping=so,i.toneMappingExposure=.92,i.outputColorSpace=re;let t=new bi,e=new Si(i);t.environment=e.fromScene(new xr,.04).texture;let n=new _e(30,1,.1,80),s=new ns(16773328,1.3);s.position.set(3,4,6);let r=new ns(16766896,1.1);r.position.set(-5,2,-4),t.add(s,r,new dr(16777215,.15));let o=new He;t.add(o);let a=new Image;a.src=wl;try{await a.decode()}catch{await new Promise(A=>{a.onload=A,a.onerror=A})}let c=Pl(a),l=Il();o.add(c.group,l.group),l.group.visible=!1;let h=110,u=po(h);t.add(u.mesh);let f=Ul({scroller:Nl}),p={dist:9,xScale:1,yOffset:0,exScale:1,spread:1,portrait:!1},g=Math.tan(mr.degToRad(n.fov/2));function _(){let w=Ar.clientWidth||window.innerWidth,A=Ar.clientHeight||window.innerHeight,H=w/A;p.portrait=H<.9;let S=p.portrait?5.5:4.6,b=p.portrait?2.9:5.2,D=S/(2*g),Y=b/(H*2*g);p.dist=Math.max(D,Y);let it=2*p.dist*g,P=it*H;p.yOffset=p.portrait?(.5-.35)*it:0,p.xScale=p.portrait?0:De((H-.9)/.6,.4,1),p.exScale=De(P/4.4,.5,1),p.spread=De(P/9,.45,1);let O=Math.min(window.devicePixelRatio||1,2);i.setPixelRatio(O),i.setSize(w,A,!1),n.aspect=H,n.updateProjectionMatrix();let k=p.portrait?56:110;k!==h&&(t.remove(u.mesh),u.mesh.dispose(),h=k,u=po(h),t.add(u.mesh))}_(),window.addEventListener("resize",_),"ResizeObserver"in window&&new ResizeObserver(_).observe(Ar);let m={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",w=>{w.pointerType!=="touch"&&(m.tx=(w.clientX/window.innerWidth-.5)*2,m.ty=(w.clientY/window.innerHeight-.5)*2)},{passive:!0});function d(){let w=Nl.getBoundingClientRect(),A=w.height-(Ar.clientHeight||window.innerHeight);return De(-w.top/(A||1))}let E=d(),x=performance.now(),T=go?1:0;function L(w){let A=Math.min(.05,(w-x)/1e3);x=w;let H=w/1e3,S=d();E=go?S:E+(S-E)*(1-Math.exp(-A*7));let b=E;T=Math.min(1,T+A/1.8);let D=Vg(T);m.x+=(m.tx-m.x)*(1-Math.exp(-A*4)),m.y+=(m.ty-m.y)*(1-Math.exp(-A*4));let Y=go?0:1,it=Hg(b)*p.xScale;o.position.set(it,p.yOffset,0);let P=1-.1*Ze(qe(b,.58,.7))+.1*Ze(qe(b,.9,.98));n.position.set(m.x*.25,.35-m.y*.15,p.dist*P),n.lookAt(0,0,0);let O=Ze(qe(b,0,.14)),k=Ze(qe(b,.16,.34)),$=Ze(qe(b,.36,.46)),G=Ze(qe(b,.46,.58)),W=Wn(-.6,-.12,O)+k*(Math.PI+.12)+$*(Math.PI-.18)+(1-D)*1.6+m.x*.18*Y;c.group.rotation.set(Math.sin(Math.PI*k)*.12-G*.5+m.y*.06*Y,W,G*.45+Math.sin(H*.9)*.02*Y*(1-G)),c.group.position.set(G*.9,G*6.8+Math.sin(H*1.1)*.06*Y*(1-G)-(1-D)*.5,0),c.group.scale.setScalar(Wn(1,.92,G)*Wn(.86,1,D)),c.group.visible=b<.6;let J=Ze(qe(b,.6,.74))*(1-Ze(qe(b,.92,.99))),j=Ze(qe(b,.74,.93));l.group.visible=b>.44,l.group.position.set(0,Math.sin(H*1.1+1)*.05*Y,-.35*(1-G)-0),l.group.rotation.set(.1+m.y*.05*Y,-.22+j*Math.PI*2+m.x*.12*Y,0),l.group.scale.setScalar(1+.06*Ze(qe(b,.93,1))),l.slab.visible=J<.01;let ot=p.exScale;for(let X of l.blocks)X.mesh.position.set(X.base.x+(X.away.x-X.base.x)*J*ot+Math.sin(H*X.orbit.x+X.phase)*.1*J*Y,X.base.y+(X.away.y-X.base.y)*J*ot+Math.cos(H*X.orbit.y+X.phase)*.1*J*Y,X.away.z*J*ot),X.mesh.rotation.set(X.spin.x*J+j*X.orbit.x*J,X.spin.y*J+j*X.orbit.y*J,X.spin.z*J+j*X.orbit.z*J*.6);let V=Math.max(Ol(b,.53,.07),Ol(b,.84,.1))*(p.portrait?.8:1);u.update(b,V,it,p.yOffset-.3,p.spread),f.update(b),i.render(t,n),requestAnimationFrame(L)}rs&&(rs.classList.add("is-done"),setTimeout(()=>rs.hidden=!0,700)),requestAnimationFrame(L)}Wg().catch(i=>{console.error(i),_o()});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
