import{u as t,r as d,j as e,a as w}from"./index-C92E0ZZp.js";const i="/rental-of-campers/assets/sprite-DxqZk0-x.svg",m=t.p`
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
`,v=t.svg`
  stroke: rgb(16, 24, 40);
  fill: transparent;
  width: 18px;
  height: 20px;
  margin-left: 18px;
  margin-right: 8px;
`,b=t.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 56px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background: rgb(247, 247, 247);
`,y=()=>{const[s,n]=d.useState(null);return d.useEffect(()=>{(async()=>{try{const r=await fetch("https://api.ipify.org?format=json"),{ip:c}=await r.json(),x=await(await fetch(`https://ipapi.co/${c}/json/`)).json();n(x)}catch(r){console.error("Error getting location information:",r)}})()},[]),e.jsxs("div",{children:[e.jsx(m,{children:"Location"}),s?e.jsxs(b,{children:[e.jsx(v,{children:e.jsx("use",{href:i+"#icon-location"})}),e.jsxs("p",{children:[s.city,", ",s.country_name]})]}):e.jsx("p",{children:"Loading location..."})]})},k=s=>s.cars.campers,L=t.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`,I=t.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  overflow: hidden;
`,C=t.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;

  width: 339px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,R=t.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
`,B=t.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: rgb(16, 24, 40);
  stroke-width: 2.3px;
`,z=t.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
`,E=t.div`
  display: flex;
  justify-content: space-between;
`,F=t.svg`
  width: 16px;
  height: 16px;
`,P=t.span`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,S=t.svg`
  width: 16px;
  height: 16px;
  stroke-width: 1.3px;
  fill: transparent;
  stroke: rgb(16, 24, 40);
`,D=t.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,N=t.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`,T=t.p`
  color: rgb(71, 84, 103);
  width: 525px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`,_=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 526px;
  margin-bottom: 24px;
`,o=t.div`
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
`,q=t.button`
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
`,A=({camper:s})=>{const{name:n,price:l,rating:r,location:c,adults:a,children:x,engine:h,transmission:g,form:$,length:G,width:H,height:J,tank:M,consumption:O,description:f,details:p,gallery:j,reviews:u}=s;return e.jsxs(L,{children:[e.jsx(I,{src:j[0],alt:n,width:290,height:310}),e.jsxs("div",{children:[e.jsxs(E,{children:[e.jsx(C,{children:n}),e.jsxs(z,{children:[e.jsxs(R,{children:["€",l.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,"")]}),e.jsx(B,{children:e.jsx("use",{href:i+"#icon-heart-null"})})]})]}),e.jsxs(N,{children:[e.jsxs(P,{children:[e.jsx(F,{children:e.jsx("use",{href:i+"#icon-star"})}),r," (",u.length," Reviews)"]}),e.jsxs(D,{children:[e.jsx(S,{children:e.jsx("use",{href:i+"#icon-location"})}),c]})]}),e.jsx(T,{children:f}),e.jsxs(_,{children:[e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:i+"#icon-adults"})}),e.jsxs("p",{children:[" ",a," adults"]})]}),e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:i+"#icon-automatic",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",g]})]}),e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:i+"#icon-petrol"})}),e.jsxs("p",{children:[" ",h]})]}),e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:i+"#icon-kitchen",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",p.kitchen&&"Kitchen"," "]})]}),e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:i+"#icon-beds",style:{stroke:"#101828",fill:"transparent"}})}),e.jsxs("p",{children:[" ",p.beds," beds"]})]}),e.jsxs(o,{children:[e.jsx("svg",{children:e.jsx("use",{href:i+"#icon-ac"})}),e.jsx("p",{children:" AC"})]})]}),e.jsx(q,{type:"submit",children:"Show more"})]})]})},K=t.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Z=()=>{const s=w(k);return e.jsx(K,{children:s.map(n=>e.jsx(A,{camper:n},n._id))})},U=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(Z,{})]});export{U as default};
