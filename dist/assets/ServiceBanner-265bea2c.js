import{r as l,j as e}from"./index-d4e5aba6.js";import{a as B}from"./index.esm-d3631ea6.js";import{_ as C}from"./index-a51c96a6.js";import{S as N}from"./sweetalert2.all-0db675b4.js";import{u as D,a as L}from"./serviceBannerApi-09ee647a.js";import{S as _}from"./Spinner-241108b6.js";import"./iconBase-12a6ae7e.js";function q(){var f,v,b;const[r,o]=l.useState([]),[m,u]=l.useState(""),[p,x]=l.useState(""),[h,g]=l.useState(""),{data:s,isLoading:d}=D(),[S,{isLoading:j}]=L();if(l.useEffect(()=>{var t,i,a;s!=null&&s.data&&!d&&(u((t=s==null?void 0:s.data[0])==null?void 0:t.title),x((i=s==null?void 0:s.data[0])==null?void 0:i.subtitle),g((a=s==null?void 0:s.data[0])==null?void 0:a.description))},[s,d]),d)return e.jsx(_,{});const w=async t=>{var c,n;t.preventDefault();const i=(c=s==null?void 0:s.data[0])==null?void 0:c._id,a=new FormData;a.append("title",m),a.append("subtitle",p),a.append("description",h),a.append("serviceBanner",(n=r[0])==null?void 0:n.file);try{(await S({id:i,formData:a}).unwrap()).success&&(o([]),N.fire({icon:"success",title:"",text:"Service Banner Updated Successfully"}))}catch{N.fire({icon:"error",title:"",text:"Something went wrong!"})}};return console.log((f=s==null?void 0:s.data[0])==null?void 0:f.image),e.jsxs("section",{className:"bg-base-100 rounded shadow",children:[e.jsx("div",{className:"p-4 border-b",children:e.jsx("h3",{className:"font-medium text-neutral",children:"Service Banner Setting"})}),e.jsxs("form",{className:"p-4",children:[e.jsxs("div",{className:"text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Background Image"}),e.jsxs("div",{children:[e.jsx(C,{defaultValue:r,onChange:t=>o(t),dataURLKey:"data_url",children:({onImageUpload:t,onImageRemove:i,dragProps:a})=>e.jsxs("div",{className:"border rounded border-dashed p-4",...a,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{onClick:t,className:"w-max px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm",children:"Choose Image"}),e.jsx("p",{className:"text-neutral-content",children:"or Drop here"})]}),e.jsx("div",{className:`${(r==null?void 0:r.length)>0&&"mt-4"} `,children:r==null?void 0:r.map((c,n)=>e.jsxs("div",{className:"image-item relative",children:[e.jsx("img",{src:c.data_url,alt:"",className:"w-32 h-20"}),e.jsx("div",{onClick:()=>i(n),className:"w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer",children:e.jsx(B,{})})]},n))})]})}),((v=s==null?void 0:s.data[0])==null?void 0:v.image)&&e.jsx("img",{src:`https://emanager-api.emanagerit.com/serviceBanner/${(b=s==null?void 0:s.data[0])==null?void 0:b.image}`,alt:"",className:"w-40 mt-4"})]})]}),e.jsxs("div",{className:"md:col-span-2 rounded flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Title"}),e.jsx("input",{type:"text",name:"title",required:!0,defaultValue:m,onChange:t=>u(t.target.value)})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Sub Title"}),e.jsx("input",{type:"text",name:"subTitle",defaultValue:p,onChange:t=>x(t.target.value)})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-1",children:"Description"}),e.jsx("textarea",{name:"description",rows:"3",required:!0,defaultValue:h,onChange:t=>g(t.target.value)})]})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{disabled:j&&"disabled",className:"gradient-primary-btn",onClick:w,children:j?"Loading":"Save"})})]})]})}export{q as default};
