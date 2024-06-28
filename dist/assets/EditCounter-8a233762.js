import{r as d,a as C,u as w,j as e}from"./index-d4e5aba6.js";import{a as D}from"./index.esm-d3631ea6.js";import{_ as S}from"./index-a51c96a6.js";import{S as N}from"./sweetalert2.all-0db675b4.js";import{c as E,d as U}from"./CounterApi-81d75708.js";import"./iconBase-12a6ae7e.js";function q(){var g;const[a,m]=d.useState([]),[u,p]=d.useState(""),[x,h]=d.useState(""),b=C(),{id:f}=w(),{data:s,isLoading:o}=E(f),[v,{isLoading:j}]=U();if(d.useEffect(()=>{if(!o&&s){const{title:t,description:r}=s.data;p(t),h(r)}},[s,o]),o)return e.jsx("div",{children:"Loading..."});const y=async t=>{var c,n;t.preventDefault();const r=(c=a[0])==null?void 0:c.file,i=new FormData;i.append("title",u),i.append("description",x),r&&i.append("icon",r);try{const l=await v({id:f,formData:i});(n=l==null?void 0:l.data)!=null&&n.success&&(m([]),N.fire({title:"",text:"Why Choose Updated Successfully!",icon:"success"}),b("/admin/counter"))}catch{N.fire({title:"",text:"Something went wrong!",icon:"error"})}};return e.jsxs("section",{children:[e.jsx("div",{className:"p-4 border-b bg-base-100 rounded",children:e.jsx("h1",{className:"font-medium text-neutral",children:"Edit Counter"})}),e.jsx("div",{className:"bg-base-100 rounded mt-2 p-3",children:e.jsxs("form",{className:"md:w-1/2",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-neutral-content mb-1",children:["Icon ",e.jsx("small",{children:"(100px/100px)"})]}),e.jsxs("div",{className:"sm:flex items-center gap-4",children:[e.jsx(S,{defaultValue:a,onChange:t=>m(t),dataURLKey:"data_url",children:({onImageUpload:t,onImageRemove:r,dragProps:i})=>e.jsxs("div",{className:"border rounded border-dashed p-4 w-max flex gap-4",...i,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{onClick:t,className:"px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm",children:"Choose Image"}),e.jsx("p",{className:"text-neutral-content",children:"or Drop here"})]}),e.jsx("div",{className:`${(a==null?void 0:a.length)>0&&"mt-4"} `,children:a==null?void 0:a.map((c,n)=>e.jsxs("div",{className:"image-item relative",children:[e.jsx("img",{src:c.data_url,alt:"",className:"w-16 h-16"}),e.jsx("div",{onClick:()=>r(n),className:"w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer",children:e.jsx(D,{})})]},n))})]})}),(s==null?void 0:s.success)&&e.jsx("img",{src:`https://emanager-api.emanagerit.com/counter/${(g=s==null?void 0:s.data)==null?void 0:g.icon}`,alt:"",className:"w-16"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1",children:"Title"}),e.jsx("input",{type:"text",name:"title",defaultValue:u,required:!0,onChange:t=>p(t.target.value)})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"mb-1",children:"Description"}),e.jsx("textarea",{name:"description",defaultValue:x,required:!0,rows:5,onChange:t=>h(t.target.value)})]}),e.jsx("div",{className:"mt-5",children:e.jsx("button",{onClick:y,type:"submit",className:"gradient-primary-btn",disabled:j&&"disabled",children:j?"Loading...":"Update Counter"})})]})})]})}export{q as default};
