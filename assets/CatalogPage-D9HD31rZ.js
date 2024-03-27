import{u as t,r as p,a as j,s as y,b as v,j as e,c as I,d as T,e as V,C as $}from"./index-DykF1C8L.js";import{s as n}from"./sprite-DurmQwTK.js";import{s as z,F as A,a as B,b as G,c as W,C as _}from"./CatalogList-DxpQKXth.js";t.div`
  width: 360px;
`;const w=t.p`
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
`;t.label`
  position: relative;
  font-weight: 500;
  color: rgba(16, 24, 40, 0.6);
`;const D=t.svg`
  stroke: rgb(16, 24, 40);
  fill: transparent;
  width: 20px;
  height: 22px;
  margin-left: 18px;
  margin-right: 8px;
`,K=t.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background: rgb(247, 247, 247);
`,N=t.input`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: rgb(247, 247, 247);

  &:focus {
    outline: none;
  }
`,P=t.p`
  color: red;
`,R=()=>{const[i,x]=p.useState(""),[a,f]=p.useState([]),[l,k]=p.useState(null),[C,L]=p.useState(!0),u=j(y),S=v();j(z);const q=o=>{x(o.target.value),S(I(o.target.value))};return p.useEffect(()=>{(async()=>{try{if(!i){const d=await fetch("https://api.ipify.org?format=json"),{ip:F}=await d.json(),E=await(await fetch(`https://ipapi.co/${F}/json/`)).json();k(E)}L(!1)}catch(d){console.error("Error getting location information:",d)}})()},[i]),p.useEffect(()=>{if(i){const o=u==null?void 0:u.filter(d=>d.location.toLowerCase().includes(i.toLowerCase()));f(o)}else f([])},[i,u]),e.jsx("div",{children:C?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:["You location: ",l==null?void 0:l.country_name,","," ",i||(l==null?void 0:l.city)]}),e.jsxs(K,{children:[e.jsx(D,{children:e.jsx("use",{href:n+"#icon-location"})}),e.jsx(N,{type:"text",placeholder:"Enter city",value:i,onChange:q})]}),a.length>0&&e.jsxs("div",{children:[e.jsx("h3",{children:"Filtered Cars:"}),e.jsx("ul",{children:a.map(o=>e.jsx("li",{children:o.name},o._id))})]}),a.length===0&&i&&e.jsxs(P,{children:["No cars available in ",i]})]})})},U=t.div`
  padding-top: 32px;
`,m=t.div`
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
`,b=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  width: 360px;
`,r=t.label`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 12px;
  width: 112px;
  height: 95px;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s ease;

  &:hover,
  &:active {
    border-color: #d84343;
  }
`,h=t.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  fill: transparent;
  stroke: #101828;
`,s=t.span`
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
`,g=t.svg`
  width: 40px;
  height: 28px;
  margin-bottom: 8px;
`,c=t(A)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:checked + ${s} ${h} {
    stroke: #e44848;
  }

  &:checked + ${s} ${g} {
    stroke: #e44848;
  }
`,Y=t.button`
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
`,H=()=>{const i=v(),x=a=>{i(T(a.equipment)),i(V(a.type))};return e.jsxs(U,{children:[e.jsx(w,{children:"Filters"}),e.jsx(B,{initialValues:{equipment:[],type:""},onSubmit:x,children:e.jsxs(G,{children:[e.jsx(m,{id:"checkbox-group-equipment",children:"Vehicle equipment"}),e.jsxs(b,{role:"group","aria-labelledby":"checkbox-group-equipment",children:[e.jsxs(r,{children:[e.jsx(c,{type:"checkbox",name:"equipment",value:"airConditioner"}),e.jsxs(s,{children:[e.jsx(h,{style:{fill:"#101828"},children:e.jsx("use",{href:n+"#icon-ac"})}),"AC"]})]}),e.jsxs(r,{children:[e.jsx(c,{type:"checkbox",name:"equipment",value:"automatic"}),e.jsxs(s,{children:[e.jsx(h,{children:e.jsx("use",{href:n+"#icon-automatic"})}),"Automatic"]})]}),e.jsxs(r,{children:[e.jsx(c,{type:"checkbox",name:"equipment",value:"kitchen"}),e.jsxs(s,{children:[e.jsx(h,{children:e.jsx("use",{href:n+"#icon-kitchen"})}),"Kitchen"]})]}),e.jsxs(r,{children:[e.jsx(c,{type:"checkbox",name:"equipment",value:"TV"}),e.jsxs(s,{children:[e.jsx(h,{children:e.jsx("use",{href:n+"#icon-tv"})}),"TV"]})]}),e.jsxs(r,{children:[e.jsx(c,{type:"checkbox",name:"equipment",value:"shower"}),e.jsxs(s,{children:[e.jsx(h,{children:e.jsx("use",{href:n+"#icon-shower"})}),"Shower/WC"]})]})]}),e.jsx(m,{id:"checkbox-group-type",style:{marginTop:"30px"},children:"Vehicle type"}),e.jsxs(b,{role:"group","aria-labelledby":"checkbox-group-type",children:[e.jsxs(r,{children:[e.jsx(c,{type:"radio",name:"type",value:"panelTruck"}),e.jsxs(s,{children:[e.jsx(g,{children:e.jsx("use",{href:n+"#icon-van"})}),"Van"]})]}),e.jsxs(r,{children:[e.jsx(c,{type:"radio",name:"type",value:"fullyIntegrated"}),e.jsxs(s,{children:[e.jsx(g,{children:e.jsx("use",{href:n+"#icon-fully-integrated"})}),"Fully Integrated"]})]}),e.jsxs(r,{children:[e.jsx(c,{type:"radio",name:"type",value:"alcove"}),e.jsxs(s,{children:[e.jsx(g,{children:e.jsx("use",{href:n+"#icon-alcove"})}),"Alcove"]})]})]}),e.jsx(Y,{type:"submit",children:"Search"})]})})]})},J=t.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
`,Z=()=>{const i=j(W),x=j(y);return e.jsx($,{children:e.jsxs(J,{children:[e.jsxs("div",{children:[e.jsx(R,{carsInfo:x}),e.jsx(H,{})]}),e.jsx(_,{campers:i})]})})};export{Z as default};
