import{u as n,j as t}from"./index-d4e5aba6.js";import{p as m}from"./index-498b1ce3.js";import{a as c}from"./blogApi-686a2312.js";import{S as o}from"./Spinner-241108b6.js";function u(){window.scroll(0,0);const{id:a}=n(),{data:e,isLoading:i}=c(a),s=e==null?void 0:e.data,r=(s==null?void 0:s.description)&&m(s==null?void 0:s.description);return i?t.jsx(o,{}):t.jsx("section",{className:"pb-10",children:t.jsxs("div",{className:"container",children:[t.jsx("img",{src:`https://emanager-api.emanagerit.com/blogs/${s==null?void 0:s.image}`,alt:"",className:"w-full h-96"}),t.jsx("h2",{className:"mt-3 text-neutral text-xl font-semibold",children:s==null?void 0:s.title}),t.jsx("p",{className:"mt-4 text-[15px] text-neutral-content",children:r})]})})}export{u as default};
