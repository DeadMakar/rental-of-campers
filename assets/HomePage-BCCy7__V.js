import{u as o,j as e,L as r}from"./index-CRgCEcWB.js";import{s as t}from"./sprite-CyKfa0Vq.js";const i="/rental-of-campers/assets/camper_bg-DScZmOBI.jpg",n=o.div`
  background-image: url(${i});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
`,s=o.button`
  color: #454545;
  background: rgb(247, 247, 247);
  padding: 5px 0;
  margin: 0 auto;
  text-decoration: none;
  font-weight: 700;
  font-size: 19px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 250px;
  height: 70px;
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  &.active {
    border-bottom: 1px solid #454545;
    text-shadow: 0px 2px 17px rgba(246, 246, 246, 1);
  }
  &.active:hover {
    border-bottom: 1px solid #e44848;
  }
  &:hover {
    color: #e44848;
  }
`,d=()=>e.jsx(n,{children:e.jsxs("div",{children:[e.jsxs("h1",{children:["HEY YOU!!! LIKE TO TRAVEL WITH COMFORT?",e.jsx("br",{}),"DO YOU LOVE A HOME ATMOSPHERE?",e.jsx("br",{})]}),e.jsx("h2",{children:"YOU CAME TO THE RIGHT ADDRESS"}),e.jsx("p",{children:"The military will never find you if your home is a mobile home )"}),e.jsx(r,{to:"/catalog",children:e.jsxs(s,{children:[e.jsx("svg",{children:e.jsx("use",{href:t+"#icon-van"})}),"MAKE YOUR CHOICE",e.jsx("svg",{children:e.jsx("use",{href:t+"#icon-alcove"})})]})})]})});export{d as default};
