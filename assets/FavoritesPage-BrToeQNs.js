import{u as o,h as c,r as $,j as a,a as d,f,g as x,C as b}from"./index-DykF1C8L.js";import{c as m,C as k}from"./CatalogList-DxpQKXth.js";import"./sprite-DurmQwTK.js";const g="#4fa94d",y={"aria-busy":!0,role:"progressbar"};o.div`
  display: ${s=>s.$visible?"flex":"none"};
`;const v="http://www.w3.org/2000/svg",t=242.776657104492,u=1.6,w=c`
12.5% {
  stroke-dasharray: ${t*.14}px, ${t}px;
  stroke-dashoffset: -${t*.11}px;
}
43.75% {
  stroke-dasharray: ${t*.35}px, ${t}px;
  stroke-dashoffset: -${t*.35}px;
}
100% {
  stroke-dasharray: ${t*.01}px, ${t}px;
  stroke-dashoffset: -${t*.99}px;
}
`;o.path`
  stroke-dasharray: ${t*.01}px, ${t};
  stroke-dashoffset: 0;
  animation: ${w} ${u}s linear infinite;
`;const j=[0,30,60,90,120,150,180,210,240,270,300,330],C=c`
to {
   transform: rotate(360deg);
 }
`,L=o.svg`
  animation: ${C} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,F=o.polyline`
  stroke-width: ${s=>s.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,S=({strokeColor:s=g,strokeWidth:e="5",animationDuration:i="0.75",width:r="96",visible:n=!0,ariaLabel:p="rotating-lines-loading"})=>{const h=$.useCallback(()=>j.map(l=>a.jsx(F,{points:"24,12 24,4",width:e,transform:`rotate(${l}, 24, 24)`},l)),[e]);return n?a.jsx(L,{xmlns:v,viewBox:"0 0 48 48",width:r,stroke:s,speed:i,"data-testid":"rotating-lines-svg","aria-label":p,...y,children:h()}):null},P=c`
to {
   stroke-dashoffset: 136;
 }
`;o.polygon`
  stroke-dasharray: 17;
  animation: ${P} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;o.svg`
  transform-origin: 50% 65%;
`;const z=()=>a.jsx(S,{visible:!0,height:"96",width:"96",color:"orange !important",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""}),B=o.h2`
  color: #101828;
  padding-top: 250px;
  margin-bottom: -304px;
  font-weight: 500;
  font-size: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,T=()=>{const s=d(f),e=d(m),i=d(x),r=e.filter(n=>s.includes(n._id));return a.jsxs(b,{children:[r.length===0&&a.jsx(a.Fragment,{children:a.jsx(B,{children:"Sorry, but you still don't have a favorite model) "})}),i?a.jsx(z,{}):a.jsx(k,{campers:r,pathForModal:"favorites"})]})};export{T as default};
