import{r as n,j as t}from"./index-d4e5aba6.js";import{S as p}from"./sweetalert2.all-0db675b4.js";import{u as h,a as g}from"./serviceSectionApi-e09c2d94.js";import{S as j}from"./Spinner-241108b6.js";function N(){const{data:e,isLoading:r}=h(),[m,{isLoading:c}]=g();console.log(e);const[a,o]=n.useState(""),[d,l]=n.useState("");if(n.useEffect(()=>{var s,i;e!=null&&e.data&&!r&&(o((s=e==null?void 0:e.data[0])==null?void 0:s.title),l((i=e==null?void 0:e.data[0])==null?void 0:i.description))},[e,r]),r)return t.jsx(j,{});const x=async s=>{var u;s.preventDefault();const i=(u=e==null?void 0:e.data[0])==null?void 0:u._id,S={title:a,description:d};try{(await m({id:i,body:S}).unwrap()).success&&p.fire({icon:"success",title:"",text:"Service Section Updated Successfully"})}catch{p.fire({icon:"error",title:"",text:"Something went wrong"})}};return t.jsxs("section",{className:"bg-base-100 rounded shadow",children:[t.jsx("div",{className:"p-4 border-b",children:t.jsx("h3",{className:"font-medium text-neutral",children:"Service Section Seting"})}),t.jsxs("form",{className:"flex flex-col gap-3 p-4 md:w-1/2",children:[t.jsxs("div",{children:[t.jsx("p",{className:"mb-1",children:"Title"}),t.jsx("input",{type:"text",name:"title",required:!0,defaultValue:a,onChange:s=>o(s.target.value)})]}),t.jsxs("div",{children:[t.jsx("p",{className:"mb-1",children:"Description"}),t.jsx("textarea",{name:"description",rows:"3",required:!0,defaultValue:d,onChange:s=>l(s.target.value)})]}),t.jsx("div",{children:t.jsx("button",{className:"gradient-primary-btn",onClick:x,disabled:c&&"disabled",children:c?"Loading...":"Update"})})]})]})}export{N as default};
