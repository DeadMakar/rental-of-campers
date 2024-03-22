import{u as v,r as f,j as o,a as on,g as sn,b as lt,c as cn,d as un,f as ln,C as fn}from"./index-Dn_nx8m9.js";import{s as C}from"./sprite-CyKfa0Vq.js";const ft=v.p`
  width: 360px;
  height: 24px;
  width: 360px;
  height: 24px;
  color: rgba(16, 24, 40, 0.6);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`,dn=v.svg`
  stroke: rgb(16, 24, 40);
  fill: transparent;
  width: 18px;
  height: 20px;
  margin-left: 18px;
  margin-right: 8px;
`,pn=v.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background: rgb(247, 247, 247);
`,hn=()=>{const[e,r]=f.useState(null);return f.useEffect(()=>{(async()=>{try{const n=await fetch("https://api.ipify.org?format=json"),{ip:a}=await n.json(),c=await(await fetch(`https://ipapi.co/${a}/json/`)).json();r(c)}catch(n){console.error("Error getting location information:",n)}})()},[]),o.jsxs("div",{children:[o.jsx(ft,{children:"Location"}),e?o.jsxs(pn,{children:[o.jsx(dn,{children:o.jsx("use",{href:C+"#icon-location"})}),o.jsxs("p",{children:[e.country_name,", ",e.city]})]}):o.jsx("p",{children:"Loading location..."})]})},gn=e=>e.cars.campers,yn=v.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`,vn=v.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`,bn=v.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  width: 339px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,mn=v.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,xn=v.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: rgb(16, 24, 40);
  stroke-width: 2.3px;
`,jn=v.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
`,Tn=v.div`
  display: flex;
  justify-content: space-between;
`,Sn=v.svg`
  width: 16px;
  height: 16px;
`,En=v.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,wn=v.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: rgb(16, 24, 40);
`,_n=v.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,An=v.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`,$n=v.p`
  color: rgb(71, 84, 103);
  width: 525px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`,In=v.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 526px;
  margin-bottom: 24px;
`,se=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: #f2f4f7;

  & p {
    font-weight: 500;
    line-height: 1.25;
  }

  & svg {
    width: 20px;
    height: 20px;
    fill: #101828;
    stroke-width: 1.5px;
  }
`,Cn=v.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: #e44848;
  border-radius: 200px;
  padding: 16px 40px;
  border: none;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:hover {
    background-color: #d84343;
  }
`,On=({car:e})=>{const{name:r,price:t,rating:n,location:a,adults:s,children:c,engine:h,transmission:y,form:b,length:F,width:R,height:d,tank:A,consumption:L,description:M,details:$,gallery:_,reviews:P}=e;return o.jsxs(yn,{children:[o.jsx(vn,{src:_[0],alt:r,width:290,height:310}),o.jsxs("div",{children:[o.jsxs(Tn,{children:[o.jsx(bn,{children:r}),o.jsxs(jn,{children:[o.jsxs(mn,{children:["€",t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,"")]}),o.jsx(xn,{children:o.jsx("use",{href:C+"#icon-heart-null"})})]})]}),o.jsxs(An,{children:[o.jsxs(En,{children:[o.jsx(Sn,{children:o.jsx("use",{href:C+"#icon-star"})}),n," (",P.length," Reviews)"]}),o.jsxs(_n,{children:[o.jsx(wn,{children:o.jsx("use",{href:C+"#icon-location"})}),a]})]}),o.jsx($n,{children:M}),o.jsxs(In,{children:[o.jsxs(se,{children:[o.jsx("svg",{children:o.jsx("use",{href:C+"#icon-adults"})}),o.jsxs("p",{children:[" ",s," adults"]})]}),o.jsxs(se,{children:[o.jsx("svg",{children:o.jsx("use",{href:C+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),o.jsxs("p",{children:[" ",y]})]}),o.jsxs(se,{children:[o.jsx("svg",{children:o.jsx("use",{href:C+"#icon-petrol"})}),o.jsxs("p",{children:[" ",h]})]}),o.jsxs(se,{children:[o.jsx("svg",{children:o.jsx("use",{href:C+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),o.jsxs("p",{children:[" ",$.kitchen&&"Kitchen"," "]})]}),o.jsxs(se,{children:[o.jsx("svg",{children:o.jsx("use",{href:C+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),o.jsxs("p",{children:[" ",$.beds," beds"]})]}),o.jsxs(se,{children:[o.jsx("svg",{children:o.jsx("use",{href:C+"#icon-ac"})}),o.jsx("p",{children:" AC"})]})]}),o.jsx(Cn,{type:"submit",children:"Show more"})]})]})};v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin-bottom: 100px;
`;const Fn=v.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;v.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  height: 56px;
  background-color: transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: border-color 0.5s ease;

  &:hover {
    border-color: #e44848;
  }
`;const Rn=()=>{const e=on(gn);return!e||e.length===0?o.jsx("div",{children:"No cars available"}):o.jsx(Fn,{children:e.map(r=>o.jsx(On,{car:r},r._id))})};var Mn=function(r){return Pn(r)&&!Ln(r)};function Pn(e){return!!e&&typeof e=="object"}function Ln(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Nn(e)}var Dn=typeof Symbol=="function"&&Symbol.for,kn=Dn?Symbol.for("react.element"):60103;function Nn(e){return e.$$typeof===kn}function Vn(e){return Array.isArray(e)?[]:{}}function we(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ge(Vn(e),e,r):e}function Un(e,r,t){return e.concat(r).map(function(n){return we(n,t)})}function Bn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(a){n[a]=we(e[a],t)}),Object.keys(r).forEach(function(a){!t.isMergeableObject(r[a])||!e[a]?n[a]=we(r[a],t):n[a]=ge(e[a],r[a],t)}),n}function ge(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||Un,t.isMergeableObject=t.isMergeableObject||Mn;var n=Array.isArray(r),a=Array.isArray(e),s=n===a;return s?n?t.arrayMerge(e,r,t):Bn(e,r,t):we(r,t)}ge.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,a){return ge(n,a,t)},{})};var er=ge,dt=typeof global=="object"&&global&&global.Object===Object&&global,zn=typeof self=="object"&&self&&self.Object===Object&&self,z=dt||zn||Function("return this")(),W=z.Symbol,pt=Object.prototype,Gn=pt.hasOwnProperty,Hn=pt.toString,pe=W?W.toStringTag:void 0;function qn(e){var r=Gn.call(e,pe),t=e[pe];try{e[pe]=void 0;var n=!0}catch{}var a=Hn.call(e);return n&&(r?e[pe]=t:delete e[pe]),a}var Kn=Object.prototype,Wn=Kn.toString;function Yn(e){return Wn.call(e)}var Xn="[object Null]",Zn="[object Undefined]",Mr=W?W.toStringTag:void 0;function re(e){return e==null?e===void 0?Zn:Xn:Mr&&Mr in Object(e)?qn(e):Yn(e)}function ht(e,r){return function(t){return e(r(t))}}var sr=ht(Object.getPrototypeOf,Object);function te(e){return e!=null&&typeof e=="object"}var Jn="[object Object]",Qn=Function.prototype,ei=Object.prototype,gt=Qn.toString,ri=ei.hasOwnProperty,ti=gt.call(Object);function Pr(e){if(!te(e)||re(e)!=Jn)return!1;var r=sr(e);if(r===null)return!0;var t=ri.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&gt.call(t)==ti}var Lr=Array.isArray,Dr=Object.keys,ni=Object.prototype.hasOwnProperty,ii=typeof Element<"u";function rr(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=Lr(e),n=Lr(r),a,s,c;if(t&&n){if(s=e.length,s!=r.length)return!1;for(a=s;a--!==0;)if(!rr(e[a],r[a]))return!1;return!0}if(t!=n)return!1;var h=e instanceof Date,y=r instanceof Date;if(h!=y)return!1;if(h&&y)return e.getTime()==r.getTime();var b=e instanceof RegExp,F=r instanceof RegExp;if(b!=F)return!1;if(b&&F)return e.toString()==r.toString();var R=Dr(e);if(s=R.length,s!==Dr(r).length)return!1;for(a=s;a--!==0;)if(!ni.call(r,R[a]))return!1;if(ii&&e instanceof Element&&r instanceof Element)return e===r;for(a=s;a--!==0;)if(c=R[a],!(c==="_owner"&&e.$$typeof)&&!rr(e[c],r[c]))return!1;return!0}return e!==e&&r!==r}var ai=function(r,t){try{return rr(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const Z=sn(ai);function oi(){this.__data__=[],this.size=0}function yt(e,r){return e===r||e!==e&&r!==r}function _e(e,r){for(var t=e.length;t--;)if(yt(e[t][0],r))return t;return-1}var si=Array.prototype,ci=si.splice;function ui(e){var r=this.__data__,t=_e(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():ci.call(r,t,1),--this.size,!0}function li(e){var r=this.__data__,t=_e(r,e);return t<0?void 0:r[t][1]}function fi(e){return _e(this.__data__,e)>-1}function di(e,r){var t=this.__data__,n=_e(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function H(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}H.prototype.clear=oi;H.prototype.delete=ui;H.prototype.get=li;H.prototype.has=fi;H.prototype.set=di;function pi(){this.__data__=new H,this.size=0}function hi(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function gi(e){return this.__data__.get(e)}function yi(e){return this.__data__.has(e)}function be(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var vi="[object AsyncFunction]",bi="[object Function]",mi="[object GeneratorFunction]",xi="[object Proxy]";function vt(e){if(!be(e))return!1;var r=re(e);return r==bi||r==mi||r==vi||r==xi}var Xe=z["__core-js_shared__"],kr=function(){var e=/[^.]+$/.exec(Xe&&Xe.keys&&Xe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ji(e){return!!kr&&kr in e}var Ti=Function.prototype,Si=Ti.toString;function ne(e){if(e!=null){try{return Si.call(e)}catch{}try{return e+""}catch{}}return""}var Ei=/[\\^$.*+?()[\]{}|]/g,wi=/^\[object .+?Constructor\]$/,_i=Function.prototype,Ai=Object.prototype,$i=_i.toString,Ii=Ai.hasOwnProperty,Ci=RegExp("^"+$i.call(Ii).replace(Ei,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Oi(e){if(!be(e)||ji(e))return!1;var r=vt(e)?Ci:wi;return r.test(ne(e))}function Fi(e,r){return e==null?void 0:e[r]}function ie(e,r){var t=Fi(e,r);return Oi(t)?t:void 0}var ye=ie(z,"Map"),ve=ie(Object,"create");function Ri(){this.__data__=ve?ve(null):{},this.size=0}function Mi(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Pi="__lodash_hash_undefined__",Li=Object.prototype,Di=Li.hasOwnProperty;function ki(e){var r=this.__data__;if(ve){var t=r[e];return t===Pi?void 0:t}return Di.call(r,e)?r[e]:void 0}var Ni=Object.prototype,Vi=Ni.hasOwnProperty;function Ui(e){var r=this.__data__;return ve?r[e]!==void 0:Vi.call(r,e)}var Bi="__lodash_hash_undefined__";function zi(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ve&&r===void 0?Bi:r,this}function ee(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ee.prototype.clear=Ri;ee.prototype.delete=Mi;ee.prototype.get=ki;ee.prototype.has=Ui;ee.prototype.set=zi;function Gi(){this.size=0,this.__data__={hash:new ee,map:new(ye||H),string:new ee}}function Hi(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Ae(e,r){var t=e.__data__;return Hi(r)?t[typeof r=="string"?"string":"hash"]:t.map}function qi(e){var r=Ae(this,e).delete(e);return this.size-=r?1:0,r}function Ki(e){return Ae(this,e).get(e)}function Wi(e){return Ae(this,e).has(e)}function Yi(e,r){var t=Ae(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function Y(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Y.prototype.clear=Gi;Y.prototype.delete=qi;Y.prototype.get=Ki;Y.prototype.has=Wi;Y.prototype.set=Yi;var Xi=200;function Zi(e,r){var t=this.__data__;if(t instanceof H){var n=t.__data__;if(!ye||n.length<Xi-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Y(n)}return t.set(e,r),this.size=t.size,this}function fe(e){var r=this.__data__=new H(e);this.size=r.size}fe.prototype.clear=pi;fe.prototype.delete=hi;fe.prototype.get=gi;fe.prototype.has=yi;fe.prototype.set=Zi;function Ji(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Nr=function(){try{var e=ie(Object,"defineProperty");return e({},"",{}),e}catch{}}();function bt(e,r,t){r=="__proto__"&&Nr?Nr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var Qi=Object.prototype,ea=Qi.hasOwnProperty;function mt(e,r,t){var n=e[r];(!(ea.call(e,r)&&yt(n,t))||t===void 0&&!(r in e))&&bt(e,r,t)}function $e(e,r,t,n){var a=!t;t||(t={});for(var s=-1,c=r.length;++s<c;){var h=r[s],y=n?n(t[h],e[h],h,t,e):void 0;y===void 0&&(y=e[h]),a?bt(t,h,y):mt(t,h,y)}return t}function ra(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var ta="[object Arguments]";function Vr(e){return te(e)&&re(e)==ta}var xt=Object.prototype,na=xt.hasOwnProperty,ia=xt.propertyIsEnumerable,aa=Vr(function(){return arguments}())?Vr:function(e){return te(e)&&na.call(e,"callee")&&!ia.call(e,"callee")},me=Array.isArray;function oa(){return!1}var jt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ur=jt&&typeof module=="object"&&module&&!module.nodeType&&module,sa=Ur&&Ur.exports===jt,Br=sa?z.Buffer:void 0,ca=Br?Br.isBuffer:void 0,Tt=ca||oa,ua=9007199254740991,la=/^(?:0|[1-9]\d*)$/;function fa(e,r){var t=typeof e;return r=r??ua,!!r&&(t=="number"||t!="symbol"&&la.test(e))&&e>-1&&e%1==0&&e<r}var da=9007199254740991;function St(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=da}var pa="[object Arguments]",ha="[object Array]",ga="[object Boolean]",ya="[object Date]",va="[object Error]",ba="[object Function]",ma="[object Map]",xa="[object Number]",ja="[object Object]",Ta="[object RegExp]",Sa="[object Set]",Ea="[object String]",wa="[object WeakMap]",_a="[object ArrayBuffer]",Aa="[object DataView]",$a="[object Float32Array]",Ia="[object Float64Array]",Ca="[object Int8Array]",Oa="[object Int16Array]",Fa="[object Int32Array]",Ra="[object Uint8Array]",Ma="[object Uint8ClampedArray]",Pa="[object Uint16Array]",La="[object Uint32Array]",E={};E[$a]=E[Ia]=E[Ca]=E[Oa]=E[Fa]=E[Ra]=E[Ma]=E[Pa]=E[La]=!0;E[pa]=E[ha]=E[_a]=E[ga]=E[Aa]=E[ya]=E[va]=E[ba]=E[ma]=E[xa]=E[ja]=E[Ta]=E[Sa]=E[Ea]=E[wa]=!1;function Da(e){return te(e)&&St(e.length)&&!!E[re(e)]}function cr(e){return function(r){return e(r)}}var Et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,he=Et&&typeof module=="object"&&module&&!module.nodeType&&module,ka=he&&he.exports===Et,Ze=ka&&dt.process,le=function(){try{var e=he&&he.require&&he.require("util").types;return e||Ze&&Ze.binding&&Ze.binding("util")}catch{}}(),zr=le&&le.isTypedArray,Na=zr?cr(zr):Da,Va=Object.prototype,Ua=Va.hasOwnProperty;function wt(e,r){var t=me(e),n=!t&&aa(e),a=!t&&!n&&Tt(e),s=!t&&!n&&!a&&Na(e),c=t||n||a||s,h=c?ra(e.length,String):[],y=h.length;for(var b in e)(r||Ua.call(e,b))&&!(c&&(b=="length"||a&&(b=="offset"||b=="parent")||s&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||fa(b,y)))&&h.push(b);return h}var Ba=Object.prototype;function ur(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Ba;return e===t}var za=ht(Object.keys,Object),Ga=Object.prototype,Ha=Ga.hasOwnProperty;function qa(e){if(!ur(e))return za(e);var r=[];for(var t in Object(e))Ha.call(e,t)&&t!="constructor"&&r.push(t);return r}function _t(e){return e!=null&&St(e.length)&&!vt(e)}function lr(e){return _t(e)?wt(e):qa(e)}function Ka(e,r){return e&&$e(r,lr(r),e)}function Wa(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Ya=Object.prototype,Xa=Ya.hasOwnProperty;function Za(e){if(!be(e))return Wa(e);var r=ur(e),t=[];for(var n in e)n=="constructor"&&(r||!Xa.call(e,n))||t.push(n);return t}function fr(e){return _t(e)?wt(e,!0):Za(e)}function Ja(e,r){return e&&$e(r,fr(r),e)}var At=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Gr=At&&typeof module=="object"&&module&&!module.nodeType&&module,Qa=Gr&&Gr.exports===At,Hr=Qa?z.Buffer:void 0,qr=Hr?Hr.allocUnsafe:void 0;function eo(e,r){if(r)return e.slice();var t=e.length,n=qr?qr(t):new e.constructor(t);return e.copy(n),n}function $t(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function ro(e,r){for(var t=-1,n=e==null?0:e.length,a=0,s=[];++t<n;){var c=e[t];r(c,t,e)&&(s[a++]=c)}return s}function It(){return[]}var to=Object.prototype,no=to.propertyIsEnumerable,Kr=Object.getOwnPropertySymbols,dr=Kr?function(e){return e==null?[]:(e=Object(e),ro(Kr(e),function(r){return no.call(e,r)}))}:It;function io(e,r){return $e(e,dr(e),r)}function Ct(e,r){for(var t=-1,n=r.length,a=e.length;++t<n;)e[a+t]=r[t];return e}var ao=Object.getOwnPropertySymbols,Ot=ao?function(e){for(var r=[];e;)Ct(r,dr(e)),e=sr(e);return r}:It;function oo(e,r){return $e(e,Ot(e),r)}function Ft(e,r,t){var n=r(e);return me(e)?n:Ct(n,t(e))}function so(e){return Ft(e,lr,dr)}function co(e){return Ft(e,fr,Ot)}var tr=ie(z,"DataView"),nr=ie(z,"Promise"),ir=ie(z,"Set"),ar=ie(z,"WeakMap"),Wr="[object Map]",uo="[object Object]",Yr="[object Promise]",Xr="[object Set]",Zr="[object WeakMap]",Jr="[object DataView]",lo=ne(tr),fo=ne(ye),po=ne(nr),ho=ne(ir),go=ne(ar),J=re;(tr&&J(new tr(new ArrayBuffer(1)))!=Jr||ye&&J(new ye)!=Wr||nr&&J(nr.resolve())!=Yr||ir&&J(new ir)!=Xr||ar&&J(new ar)!=Zr)&&(J=function(e){var r=re(e),t=r==uo?e.constructor:void 0,n=t?ne(t):"";if(n)switch(n){case lo:return Jr;case fo:return Wr;case po:return Yr;case ho:return Xr;case go:return Zr}return r});const pr=J;var yo=Object.prototype,vo=yo.hasOwnProperty;function bo(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&vo.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Qr=z.Uint8Array;function hr(e){var r=new e.constructor(e.byteLength);return new Qr(r).set(new Qr(e)),r}function mo(e,r){var t=r?hr(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var xo=/\w*$/;function jo(e){var r=new e.constructor(e.source,xo.exec(e));return r.lastIndex=e.lastIndex,r}var et=W?W.prototype:void 0,rt=et?et.valueOf:void 0;function To(e){return rt?Object(rt.call(e)):{}}function So(e,r){var t=r?hr(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Eo="[object Boolean]",wo="[object Date]",_o="[object Map]",Ao="[object Number]",$o="[object RegExp]",Io="[object Set]",Co="[object String]",Oo="[object Symbol]",Fo="[object ArrayBuffer]",Ro="[object DataView]",Mo="[object Float32Array]",Po="[object Float64Array]",Lo="[object Int8Array]",Do="[object Int16Array]",ko="[object Int32Array]",No="[object Uint8Array]",Vo="[object Uint8ClampedArray]",Uo="[object Uint16Array]",Bo="[object Uint32Array]";function zo(e,r,t){var n=e.constructor;switch(r){case Fo:return hr(e);case Eo:case wo:return new n(+e);case Ro:return mo(e,t);case Mo:case Po:case Lo:case Do:case ko:case No:case Vo:case Uo:case Bo:return So(e,t);case _o:return new n;case Ao:case Co:return new n(e);case $o:return jo(e);case Io:return new n;case Oo:return To(e)}}var tt=Object.create,Go=function(){function e(){}return function(r){if(!be(r))return{};if(tt)return tt(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function Ho(e){return typeof e.constructor=="function"&&!ur(e)?Go(sr(e)):{}}var qo="[object Map]";function Ko(e){return te(e)&&pr(e)==qo}var nt=le&&le.isMap,Wo=nt?cr(nt):Ko,Yo="[object Set]";function Xo(e){return te(e)&&pr(e)==Yo}var it=le&&le.isSet,Zo=it?cr(it):Xo,Jo=1,Qo=2,es=4,Rt="[object Arguments]",rs="[object Array]",ts="[object Boolean]",ns="[object Date]",is="[object Error]",Mt="[object Function]",as="[object GeneratorFunction]",os="[object Map]",ss="[object Number]",Pt="[object Object]",cs="[object RegExp]",us="[object Set]",ls="[object String]",fs="[object Symbol]",ds="[object WeakMap]",ps="[object ArrayBuffer]",hs="[object DataView]",gs="[object Float32Array]",ys="[object Float64Array]",vs="[object Int8Array]",bs="[object Int16Array]",ms="[object Int32Array]",xs="[object Uint8Array]",js="[object Uint8ClampedArray]",Ts="[object Uint16Array]",Ss="[object Uint32Array]",S={};S[Rt]=S[rs]=S[ps]=S[hs]=S[ts]=S[ns]=S[gs]=S[ys]=S[vs]=S[bs]=S[ms]=S[os]=S[ss]=S[Pt]=S[cs]=S[us]=S[ls]=S[fs]=S[xs]=S[js]=S[Ts]=S[Ss]=!0;S[is]=S[Mt]=S[ds]=!1;function Se(e,r,t,n,a,s){var c,h=r&Jo,y=r&Qo,b=r&es;if(t&&(c=a?t(e,n,a,s):t(e)),c!==void 0)return c;if(!be(e))return e;var F=me(e);if(F){if(c=bo(e),!h)return $t(e,c)}else{var R=pr(e),d=R==Mt||R==as;if(Tt(e))return eo(e,h);if(R==Pt||R==Rt||d&&!a){if(c=y||d?{}:Ho(e),!h)return y?oo(e,Ja(c,e)):io(e,Ka(c,e))}else{if(!S[R])return a?e:{};c=zo(e,R,h)}}s||(s=new fe);var A=s.get(e);if(A)return A;s.set(e,c),Zo(e)?e.forEach(function($){c.add(Se($,r,t,$,e,s))}):Wo(e)&&e.forEach(function($,_){c.set(_,Se($,r,t,_,e,s))});var L=b?y?co:so:y?fr:lr,M=F?void 0:L(e);return Ji(M||e,function($,_){M&&(_=$,$=e[_]),mt(c,_,Se($,r,t,_,e,s))}),c}var Es=4;function at(e){return Se(e,Es)}function Lt(e,r){for(var t=-1,n=e==null?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a}var ws="[object Symbol]";function gr(e){return typeof e=="symbol"||te(e)&&re(e)==ws}var _s="Expected a function";function yr(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(_s);var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],s=t.cache;if(s.has(a))return s.get(a);var c=e.apply(this,n);return t.cache=s.set(a,c)||s,c};return t.cache=new(yr.Cache||Y),t}yr.Cache=Y;var As=500;function $s(e){var r=yr(e,function(n){return t.size===As&&t.clear(),n}),t=r.cache;return r}var Is=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Cs=/\\(\\)?/g,Os=$s(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Is,function(t,n,a,s){r.push(a?s.replace(Cs,"$1"):n||t)}),r});const Fs=Os;var Rs=1/0;function Ms(e){if(typeof e=="string"||gr(e))return e;var r=e+"";return r=="0"&&1/e==-Rs?"-0":r}var Ps=1/0,ot=W?W.prototype:void 0,st=ot?ot.toString:void 0;function Dt(e){if(typeof e=="string")return e;if(me(e))return Lt(e,Dt)+"";if(gr(e))return st?st.call(e):"";var r=e+"";return r=="0"&&1/e==-Ps?"-0":r}function Ls(e){return e==null?"":Dt(e)}function kt(e){return me(e)?Lt(e,Ms):gr(e)?[e]:$t(Fs(Ls(e)))}var Nt={exports:{}},x={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=typeof Symbol=="function"&&Symbol.for,vr=O?Symbol.for("react.element"):60103,br=O?Symbol.for("react.portal"):60106,Ie=O?Symbol.for("react.fragment"):60107,Ce=O?Symbol.for("react.strict_mode"):60108,Oe=O?Symbol.for("react.profiler"):60114,Fe=O?Symbol.for("react.provider"):60109,Re=O?Symbol.for("react.context"):60110,mr=O?Symbol.for("react.async_mode"):60111,Me=O?Symbol.for("react.concurrent_mode"):60111,Pe=O?Symbol.for("react.forward_ref"):60112,Le=O?Symbol.for("react.suspense"):60113,Ds=O?Symbol.for("react.suspense_list"):60120,De=O?Symbol.for("react.memo"):60115,ke=O?Symbol.for("react.lazy"):60116,ks=O?Symbol.for("react.block"):60121,Ns=O?Symbol.for("react.fundamental"):60117,Vs=O?Symbol.for("react.responder"):60118,Us=O?Symbol.for("react.scope"):60119;function N(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case vr:switch(e=e.type,e){case mr:case Me:case Ie:case Oe:case Ce:case Le:return e;default:switch(e=e&&e.$$typeof,e){case Re:case Pe:case ke:case De:case Fe:return e;default:return r}}case br:return r}}}function Vt(e){return N(e)===Me}x.AsyncMode=mr;x.ConcurrentMode=Me;x.ContextConsumer=Re;x.ContextProvider=Fe;x.Element=vr;x.ForwardRef=Pe;x.Fragment=Ie;x.Lazy=ke;x.Memo=De;x.Portal=br;x.Profiler=Oe;x.StrictMode=Ce;x.Suspense=Le;x.isAsyncMode=function(e){return Vt(e)||N(e)===mr};x.isConcurrentMode=Vt;x.isContextConsumer=function(e){return N(e)===Re};x.isContextProvider=function(e){return N(e)===Fe};x.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr};x.isForwardRef=function(e){return N(e)===Pe};x.isFragment=function(e){return N(e)===Ie};x.isLazy=function(e){return N(e)===ke};x.isMemo=function(e){return N(e)===De};x.isPortal=function(e){return N(e)===br};x.isProfiler=function(e){return N(e)===Oe};x.isStrictMode=function(e){return N(e)===Ce};x.isSuspense=function(e){return N(e)===Le};x.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ie||e===Me||e===Oe||e===Ce||e===Le||e===Ds||typeof e=="object"&&e!==null&&(e.$$typeof===ke||e.$$typeof===De||e.$$typeof===Fe||e.$$typeof===Re||e.$$typeof===Pe||e.$$typeof===Ns||e.$$typeof===Vs||e.$$typeof===Us||e.$$typeof===ks)};x.typeOf=N;Nt.exports=x;var Bs=Nt.exports,Ut=Bs,zs={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bt={};Bt[Ut.ForwardRef]=zs;Bt[Ut.Memo]=Gs;function w(){return w=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},w.apply(this,arguments)}function ue(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var Ne=f.createContext(void 0);Ne.displayName="FormikContext";var Hs=Ne.Provider;Ne.Consumer;function zt(){var e=f.useContext(Ne);return e}var k=function(r){return typeof r=="function"},Ve=function(r){return r!==null&&typeof r=="object"},qs=function(r){return String(Math.floor(Number(r)))===r},Je=function(r){return Object.prototype.toString.call(r)==="[object String]"},Ks=function(r){return f.Children.count(r)===0},Qe=function(r){return Ve(r)&&k(r.then)};function D(e,r,t,n){n===void 0&&(n=0);for(var a=kt(r);e&&n<a.length;)e=e[a[n++]];return n!==a.length&&!e||e===void 0?t:e}function Q(e,r,t){for(var n=at(e),a=n,s=0,c=kt(r);s<c.length-1;s++){var h=c[s],y=D(e,c.slice(0,s+1));if(y&&(Ve(y)||Array.isArray(y)))a=a[h]=at(y);else{var b=c[s+1];a=a[h]=qs(b)&&Number(b)>=0?[]:{}}}return(s===0?e:a)[c[s]]===t?e:(t===void 0?delete a[c[s]]:a[c[s]]=t,s===0&&t===void 0&&delete n[c[s]],n)}function Gt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var a=0,s=Object.keys(e);a<s.length;a++){var c=s[a],h=e[c];Ve(h)?t.get(h)||(t.set(h,!0),n[c]=Array.isArray(h)?[]:{},Gt(h,r,t,n[c])):n[c]=r}return n}function Ws(e,r){switch(r.type){case"SET_VALUES":return w({},e,{values:r.payload});case"SET_TOUCHED":return w({},e,{touched:r.payload});case"SET_ERRORS":return Z(e.errors,r.payload)?e:w({},e,{errors:r.payload});case"SET_STATUS":return w({},e,{status:r.payload});case"SET_ISSUBMITTING":return w({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return w({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return w({},e,{values:Q(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return w({},e,{touched:Q(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return w({},e,{errors:Q(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return w({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return w({},e,{touched:Gt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return w({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return w({},e,{isSubmitting:!1});default:return e}}var X={},Te={};function Ys(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,a=n===void 0?!0:n,s=e.validateOnMount,c=s===void 0?!1:s,h=e.isInitialValid,y=e.enableReinitialize,b=y===void 0?!1:y,F=e.onSubmit,R=ue(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=w({validateOnChange:t,validateOnBlur:a,validateOnMount:c,onSubmit:F},R),A=f.useRef(d.initialValues),L=f.useRef(d.initialErrors||X),M=f.useRef(d.initialTouched||Te),$=f.useRef(d.initialStatus),_=f.useRef(!1),P=f.useRef({});f.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var Ue=f.useState(0),Be=Ue[1],xe=f.useRef({values:d.initialValues,errors:d.initialErrors||X,touched:d.initialTouched||Te,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=xe.current,j=f.useCallback(function(i){var u=xe.current;xe.current=Ws(u,i),u!==xe.current&&Be(function(l){return l+1})},[]),xr=f.useCallback(function(i,u){return new Promise(function(l,p){var g=d.validate(i,u);g==null?l(X):Qe(g)?g.then(function(m){l(m||X)},function(m){p(m)}):l(g)})},[d.validate]),ze=f.useCallback(function(i,u){var l=d.validationSchema,p=k(l)?l(u):l,g=u&&p.validateAt?p.validateAt(u,i):Js(i,p);return new Promise(function(m,I){g.then(function(){m(X)},function(G){G.name==="ValidationError"?m(Zs(G)):I(G)})})},[d.validationSchema]),jr=f.useCallback(function(i,u){return new Promise(function(l){return l(P.current[i].validate(u))})},[]),Tr=f.useCallback(function(i){var u=Object.keys(P.current).filter(function(p){return k(P.current[p].validate)}),l=u.length>0?u.map(function(p){return jr(p,D(i,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(p){return p.reduce(function(g,m,I){return m==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||m&&(g=Q(g,u[I],m)),g},{})})},[jr]),qt=f.useCallback(function(i){return Promise.all([Tr(i),d.validationSchema?ze(i):{},d.validate?xr(i):{}]).then(function(u){var l=u[0],p=u[1],g=u[2],m=er.all([l,p,g],{arrayMerge:Qs});return m})},[d.validate,d.validationSchema,Tr,xr,ze]),U=V(function(i){return i===void 0&&(i=T.values),j({type:"SET_ISVALIDATING",payload:!0}),qt(i).then(function(u){return _.current&&(j({type:"SET_ISVALIDATING",payload:!1}),j({type:"SET_ERRORS",payload:u})),u})});f.useEffect(function(){c&&_.current===!0&&Z(A.current,d.initialValues)&&U(A.current)},[c,U]);var de=f.useCallback(function(i){var u=i&&i.values?i.values:A.current,l=i&&i.errors?i.errors:L.current?L.current:d.initialErrors||{},p=i&&i.touched?i.touched:M.current?M.current:d.initialTouched||{},g=i&&i.status?i.status:$.current?$.current:d.initialStatus;A.current=u,L.current=l,M.current=p,$.current=g;var m=function(){j({type:"RESET_FORM",payload:{isSubmitting:!!i&&!!i.isSubmitting,errors:l,touched:p,status:g,values:u,isValidating:!!i&&!!i.isValidating,submitCount:i&&i.submitCount&&typeof i.submitCount=="number"?i.submitCount:0}})};if(d.onReset){var I=d.onReset(T.values,Fr);Qe(I)?I.then(m):m()}else m()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);f.useEffect(function(){_.current===!0&&!Z(A.current,d.initialValues)&&b&&(A.current=d.initialValues,de(),c&&U(A.current))},[b,d.initialValues,de,c,U]),f.useEffect(function(){b&&_.current===!0&&!Z(L.current,d.initialErrors)&&(L.current=d.initialErrors||X,j({type:"SET_ERRORS",payload:d.initialErrors||X}))},[b,d.initialErrors]),f.useEffect(function(){b&&_.current===!0&&!Z(M.current,d.initialTouched)&&(M.current=d.initialTouched||Te,j({type:"SET_TOUCHED",payload:d.initialTouched||Te}))},[b,d.initialTouched]),f.useEffect(function(){b&&_.current===!0&&!Z($.current,d.initialStatus)&&($.current=d.initialStatus,j({type:"SET_STATUS",payload:d.initialStatus}))},[b,d.initialStatus,d.initialTouched]);var Sr=V(function(i){if(P.current[i]&&k(P.current[i].validate)){var u=D(T.values,i),l=P.current[i].validate(u);return Qe(l)?(j({type:"SET_ISVALIDATING",payload:!0}),l.then(function(p){return p}).then(function(p){j({type:"SET_FIELD_ERROR",payload:{field:i,value:p}}),j({type:"SET_ISVALIDATING",payload:!1})})):(j({type:"SET_FIELD_ERROR",payload:{field:i,value:l}}),Promise.resolve(l))}else if(d.validationSchema)return j({type:"SET_ISVALIDATING",payload:!0}),ze(T.values,i).then(function(p){return p}).then(function(p){j({type:"SET_FIELD_ERROR",payload:{field:i,value:D(p,i)}}),j({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Kt=f.useCallback(function(i,u){var l=u.validate;P.current[i]={validate:l}},[]),Wt=f.useCallback(function(i){delete P.current[i]},[]),Er=V(function(i,u){j({type:"SET_TOUCHED",payload:i});var l=u===void 0?a:u;return l?U(T.values):Promise.resolve()}),wr=f.useCallback(function(i){j({type:"SET_ERRORS",payload:i})},[]),_r=V(function(i,u){var l=k(i)?i(T.values):i;j({type:"SET_VALUES",payload:l});var p=u===void 0?t:u;return p?U(l):Promise.resolve()}),je=f.useCallback(function(i,u){j({type:"SET_FIELD_ERROR",payload:{field:i,value:u}})},[]),ae=V(function(i,u,l){j({type:"SET_FIELD_VALUE",payload:{field:i,value:u}});var p=l===void 0?t:l;return p?U(Q(T.values,i,u)):Promise.resolve()}),Ar=f.useCallback(function(i,u){var l=u,p=i,g;if(!Je(i)){i.persist&&i.persist();var m=i.target?i.target:i.currentTarget,I=m.type,G=m.name,We=m.id,Ye=m.value,nn=m.checked,cc=m.outerHTML,Rr=m.options,an=m.multiple;l=u||G||We,p=/number|range/.test(I)?(g=parseFloat(Ye),isNaN(g)?"":g):/checkbox/.test(I)?rc(D(T.values,l),nn,Ye):Rr&&an?ec(Rr):Ye}l&&ae(l,p)},[ae,T.values]),Ge=V(function(i){if(Je(i))return function(u){return Ar(u,i)};Ar(i)}),oe=V(function(i,u,l){u===void 0&&(u=!0),j({type:"SET_FIELD_TOUCHED",payload:{field:i,value:u}});var p=l===void 0?a:l;return p?U(T.values):Promise.resolve()}),$r=f.useCallback(function(i,u){i.persist&&i.persist();var l=i.target,p=l.name,g=l.id,m=l.outerHTML,I=u||p||g;oe(I,!0)},[oe]),He=V(function(i){if(Je(i))return function(u){return $r(u,i)};$r(i)}),Ir=f.useCallback(function(i){k(i)?j({type:"SET_FORMIK_STATE",payload:i}):j({type:"SET_FORMIK_STATE",payload:function(){return i}})},[]),Cr=f.useCallback(function(i){j({type:"SET_STATUS",payload:i})},[]),Or=f.useCallback(function(i){j({type:"SET_ISSUBMITTING",payload:i})},[]),qe=V(function(){return j({type:"SUBMIT_ATTEMPT"}),U().then(function(i){var u=i instanceof Error,l=!u&&Object.keys(i).length===0;if(l){var p;try{if(p=Xt(),p===void 0)return}catch(g){throw g}return Promise.resolve(p).then(function(g){return _.current&&j({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(_.current)throw j({type:"SUBMIT_FAILURE"}),g})}else if(_.current&&(j({type:"SUBMIT_FAILURE"}),u))throw i})}),Yt=V(function(i){i&&i.preventDefault&&k(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&k(i.stopPropagation)&&i.stopPropagation(),qe().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),Fr={resetForm:de,validateForm:U,validateField:Sr,setErrors:wr,setFieldError:je,setFieldTouched:oe,setFieldValue:ae,setStatus:Cr,setSubmitting:Or,setTouched:Er,setValues:_r,setFormikState:Ir,submitForm:qe},Xt=V(function(){return F(T.values,Fr)}),Zt=V(function(i){i&&i.preventDefault&&k(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&k(i.stopPropagation)&&i.stopPropagation(),de()}),Jt=f.useCallback(function(i){return{value:D(T.values,i),error:D(T.errors,i),touched:!!D(T.touched,i),initialValue:D(A.current,i),initialTouched:!!D(M.current,i),initialError:D(L.current,i)}},[T.errors,T.touched,T.values]),Qt=f.useCallback(function(i){return{setValue:function(l,p){return ae(i,l,p)},setTouched:function(l,p){return oe(i,l,p)},setError:function(l){return je(i,l)}}},[ae,oe,je]),en=f.useCallback(function(i){var u=Ve(i),l=u?i.name:i,p=D(T.values,l),g={name:l,value:p,onChange:Ge,onBlur:He};if(u){var m=i.type,I=i.value,G=i.as,We=i.multiple;m==="checkbox"?I===void 0?g.checked=!!p:(g.checked=!!(Array.isArray(p)&&~p.indexOf(I)),g.value=I):m==="radio"?(g.checked=p===I,g.value=I):G==="select"&&We&&(g.value=g.value||[],g.multiple=!0)}return g},[He,Ge,T.values]),Ke=f.useMemo(function(){return!Z(A.current,T.values)},[A.current,T.values]),rn=f.useMemo(function(){return typeof h<"u"?Ke?T.errors&&Object.keys(T.errors).length===0:h!==!1&&k(h)?h(d):h:T.errors&&Object.keys(T.errors).length===0},[h,Ke,T.errors,d]),tn=w({},T,{initialValues:A.current,initialErrors:L.current,initialTouched:M.current,initialStatus:$.current,handleBlur:He,handleChange:Ge,handleReset:Zt,handleSubmit:Yt,resetForm:de,setErrors:wr,setFormikState:Ir,setFieldTouched:oe,setFieldValue:ae,setFieldError:je,setStatus:Cr,setSubmitting:Or,setTouched:Er,setValues:_r,submitForm:qe,validateForm:U,validateField:Sr,isValid:rn,dirty:Ke,unregisterField:Wt,registerField:Kt,getFieldProps:en,getFieldMeta:Jt,getFieldHelpers:Qt,validateOnBlur:a,validateOnChange:t,validateOnMount:c});return tn}function Xs(e){var r=Ys(e),t=e.component,n=e.children,a=e.render,s=e.innerRef;return f.useImperativeHandle(s,function(){return r}),f.createElement(Hs,{value:r},t?f.createElement(t,r):a?a(r):n?k(n)?n(r):Ks(n)?null:f.Children.only(n):null)}function Zs(e){var r={};if(e.inner){if(e.inner.length===0)return Q(r,e.path,e.message);for(var a=e.inner,t=Array.isArray(a),n=0,a=t?a:a[Symbol.iterator]();;){var s;if(t){if(n>=a.length)break;s=a[n++]}else{if(n=a.next(),n.done)break;s=n.value}var c=s;D(r,c.path)||(r=Q(r,c.path,c.message))}}return r}function Js(e,r,t,n){t===void 0&&(t=!1);var a=or(e);return r[t?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}function or(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(a){return Array.isArray(a)===!0||Pr(a)?or(a):a!==""?a:void 0}):Pr(e[n])?r[n]=or(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Qs(e,r,t){var n=e.slice();return r.forEach(function(s,c){if(typeof n[c]>"u"){var h=t.clone!==!1,y=h&&t.isMergeableObject(s);n[c]=y?er(Array.isArray(s)?[]:{},s,t):s}else t.isMergeableObject(s)?n[c]=er(e[c],s,t):e.indexOf(s)===-1&&n.push(s)}),n}function ec(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function rc(e,r,t){if(typeof e=="boolean")return!!r;var n=[],a=!1,s=-1;if(Array.isArray(e))n=e,s=e.indexOf(t),a=s>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!a?n.concat(t):a?n.slice(0,s).concat(n.slice(s+1)):n}var tc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function V(e){var r=f.useRef(e);return tc(function(){r.current=e}),f.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current.apply(void 0,n)},[])}function nc(e){var r=e.validate,t=e.name,n=e.render,a=e.children,s=e.as,c=e.component,h=e.className,y=ue(e,["validate","name","render","children","as","component","className"]),b=zt(),F=ue(b,["validate","validationSchema"]),R=F.registerField,d=F.unregisterField;f.useEffect(function(){return R(t,{validate:r}),function(){d(t)}},[R,d,t,r]);var A=F.getFieldProps(w({name:t},y)),L=F.getFieldMeta(t),M={field:A,form:F};if(n)return n(w({},M,{meta:L}));if(k(a))return a(w({},M,{meta:L}));if(c){if(typeof c=="string"){var $=y.innerRef,_=ue(y,["innerRef"]);return f.createElement(c,w({ref:$},A,_,{className:h}),a)}return f.createElement(c,w({field:A,form:F},y,{className:h}),a)}var P=s||"input";if(typeof P=="string"){var Ue=y.innerRef,Be=ue(y,["innerRef"]);return f.createElement(P,w({ref:Ue},A,Be,{className:h}),a)}return f.createElement(P,w({},A,y,{className:h}),a)}var Ht=f.forwardRef(function(e,r){var t=e.action,n=ue(e,["action"]),a=t??"#",s=zt(),c=s.handleReset,h=s.handleSubmit;return f.createElement("form",w({onSubmit:h,ref:r,onReset:c,action:a},n))});Ht.displayName="Form";const ic=v.div`
  padding-top: 32px;
`,ct=v.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 48px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 100%;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.1);
  }
`,ut=v.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 360px;
`,q=v.label`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 12px;
  width: 112px;
  height: 95px;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #d84343;
  }
`,ce=v.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;

  fill: transparent;
  stroke: #101828;
`,B=v.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
`,Ee=v.svg`
  width: 40px;
  height: 28px;
  margin-bottom: 8px;
`,K=v(nc)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:checked + ${B} ${ce} {
    stroke: #e44848;
  }

  &:checked + ${B} ${Ee} {
    stroke: #e44848;
  }
`,ac=v.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  background-color: #e44848;
  border-radius: 200px;
  border: none;
  padding: 16px 60px;
  height: 56px;

  margin-top: 64px;

  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:hover {
    background-color: #d84343;
  }
`,oc=()=>{const e=lt(),r=t=>{e(cn(t.equipment)),e(un(t.type))};return o.jsxs(ic,{children:[o.jsx(ft,{children:"Filters"}),o.jsx(Xs,{initialValues:{equipment:[],type:""},onSubmit:r,children:o.jsxs(Ht,{children:[o.jsx(ct,{id:"checkbox-group-equipment",children:"Vehicle equipment"}),o.jsxs(ut,{role:"group","aria-labelledby":"checkbox-group-equipment",children:[o.jsxs(q,{children:[o.jsx(K,{type:"checkbox",name:"equipment",value:"airConditioner"}),o.jsxs(B,{children:[o.jsx(ce,{style:{fill:"#101828"},children:o.jsx("use",{href:C+"#icon-ac"})}),"AC"]})]}),o.jsxs(q,{children:[o.jsx(K,{type:"checkbox",name:"equipment",value:"automatic"}),o.jsxs(B,{children:[o.jsx(ce,{style:{stroke:"#101828"},children:o.jsx("use",{href:C+"#icon-automatic"})}),"Automatic"]})]}),o.jsxs(q,{children:[o.jsx(K,{type:"checkbox",name:"equipment",value:"kitchen"}),o.jsxs(B,{children:[o.jsx(ce,{style:{stroke:"#101828"},children:o.jsx("use",{href:C+"#icon-kitchen"})}),"Kitchen"]})]}),o.jsxs(q,{children:[o.jsx(K,{type:"checkbox",name:"equipment",value:"TV"}),o.jsxs(B,{children:[o.jsx(ce,{style:{stroke:"#101828"},children:o.jsx("use",{href:C+"#icon-tv"})}),"TV"]})]}),o.jsxs(q,{children:[o.jsx(K,{type:"checkbox",name:"equipment",value:"shower"}),o.jsxs(B,{children:[o.jsx(ce,{style:{stroke:"#101828"},children:o.jsx("use",{href:C+"#icon-shower"})}),"Shower/WC"]})]})]}),o.jsx(ct,{id:"checkbox-group-type",style:{marginTop:"30px"},children:"Vehicle type"}),o.jsxs(ut,{role:"group","aria-labelledby":"checkbox-group-type",children:[o.jsxs(q,{children:[o.jsx(K,{type:"radio",name:"type",value:"panelTruck"}),o.jsxs(B,{children:[o.jsx(Ee,{style:{width:"40px",height:"28px"},children:o.jsx("use",{href:C+"#icon-van"})}),"Van"]})]}),o.jsxs(q,{children:[o.jsx(K,{type:"radio",name:"type",value:"fullyIntegrated"}),o.jsxs(B,{children:[o.jsx(Ee,{style:{width:"40px",height:"28px"},children:o.jsx("use",{href:C+"#icon-fully-integrated"})}),"Fully Integrated"]})]}),o.jsxs(q,{children:[o.jsx(K,{type:"radio",name:"type",value:"alcove"}),o.jsxs(B,{children:[o.jsx(Ee,{style:{width:"40px",height:"28px"},children:o.jsx("use",{href:C+"#icon-alcove"})}),"Alcove"]})]})]}),o.jsx(ac,{type:"submit",children:"Search"})]})})]})},sc=v.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
`,fc=()=>{const e=lt();return f.useEffect(()=>{e(ln())},[e]),o.jsx(fn,{children:o.jsxs(sc,{children:[o.jsxs("div",{children:[o.jsx(hn,{}),o.jsx(oc,{})]}),o.jsx(Rn,{})]})})};export{fc as default};
