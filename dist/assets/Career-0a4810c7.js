import{r as o,j as s,L as h}from"./index-d4e5aba6.js";import{G as d}from"./iconBase-12a6ae7e.js";import{u as p}from"./benefitsApi-51cc0506.js";import{u as v}from"./careerBannerApi-506ab2e3.js";import{u as g}from"./jobsApi-d26c20e8.js";import{p as u}from"./index-498b1ce3.js";import{S as w}from"./Spinner-241108b6.js";function j(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"}}]})(a)}function N(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"}}]})(a)}function V(){o.useEffect(()=>{window.scroll(0,0)},[]);const{data:a,isLoading:m}=v(),{data:r,isLoading:n}=g(),{data:i,isLoading:x}=p();if(m||n||x)return s.jsx(w,{});const l=r==null?void 0:r.data,t=a==null?void 0:a.data[0],c=i==null?void 0:i.data;return s.jsxs("section",{children:[s.jsxs("div",{className:"career_wrap relative h-screen md:h-[80vh]",children:[s.jsx("div",{className:"career mt-10 md:mt-0",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"grid md:grid-cols-2 gap-10 items-center",children:[s.jsxs("div",{className:"relative z-10",children:[s.jsx("h2",{className:"text-3xl lg:text-5xl text-neutral",children:t==null?void 0:t.title}),s.jsx("p",{className:"text-neutral-content mt-4",children:t==null?void 0:t.description}),s.jsx("div",{className:"mt-6",children:s.jsx("a",{href:"#jobs",children:s.jsxs("div",{className:"gradient-primary-btn w-max flex items-center gap-2",children:["View Jobs ",s.jsx(j,{})]})})})]}),s.jsx("div",{children:s.jsx("img",{src:"/images/career/career.png",alt:""})})]})})}),s.jsx("div",{className:"absolute bottom-[-7px] w-full",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:s.jsx("path",{fill:"#fff",fillOpacity:"1",d:"M0,160L80,181.3C160,203,320,245,480,266.7C640,288,800,288,960,266.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})})})})})]}),s.jsx("div",{className:"py-16 bg-base-100",id:"jobs",children:s.jsx("div",{className:"container",children:l==null?void 0:l.map(e=>s.jsxs("div",{className:"sm:flex justify-between items-center border-b py-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"bg-primary text-base-100 px-1.5 py-1 w-max rounded",children:s.jsx(N,{})}),s.jsx("h3",{className:"font-semibold text-lg text-neutral uppercase",children:e==null?void 0:e.title})]}),s.jsx("p",{className:"text-neutral-content text-[15px]",children:e==null?void 0:e.jobType})]}),s.jsx("div",{className:"mt-5 sm:mt-0",children:s.jsx(h,{to:`/career/${e==null?void 0:e.id}`,className:"sm:block bg-primary text-base-100 font-medium px-6 py-2 rounded-full text-sm scale-[.98] hover:scale-[1] duration-200",children:"Apply Now"})})]},e.id))})}),s.jsx("div",{className:"pt-10 pb-20",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"text-3xl",children:"Benefit"}),s.jsx("div",{className:"mt-8 grid sm:grid-cols-3 gap-6",children:c==null?void 0:c.map(e=>s.jsxs("div",{children:[s.jsx("div",{className:"bg-primary text-base-100 px-2 py-1.5 w-max rounded text-2xl",children:s.jsx("img",{src:`https://emanager-api.emanagerit.com/benefit/${e==null?void 0:e.image}`,alt:"",className:"w-6 h-7"})}),s.jsx("h3",{className:"text-lg font-medium mt-2",children:e==null?void 0:e.title}),s.jsx("p",{className:"text-neutral-content text-sm",children:u(e==null?void 0:e.description)})]},e.id))})]})})]})}export{V as default};
