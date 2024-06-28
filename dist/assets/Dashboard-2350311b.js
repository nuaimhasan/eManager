import{b as h,j as e}from"./index-d4e5aba6.js";import{i as u,e as j}from"./index.esm-8610ff38.js";import{f as v,e as g,c as p}from"./index.esm-195afc91.js";import{G as f}from"./iconBase-12a6ae7e.js";import{u as N}from"./serviceApi-ca70888b.js";import{u as y}from"./administratorApi-9659a2e2.js";import{u as T}from"./clientApi-3383af6d.js";import{u as q}from"./blogApi-686a2312.js";import{u as b}from"./jobsApi-d26c20e8.js";function w(s){return f({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M20.625 8.127q-.55 0-1.025-.205-.475-.205-.832-.563-.358-.357-.563-.832Q18 6.053 18 5.502q0-.54.205-1.02t.563-.837q.357-.358.832-.563.474-.205 1.025-.205.54 0 1.02.205t.837.563q.358.357.563.837.205.48.205 1.02 0 .55-.205 1.025-.205.475-.563.832-.357.358-.837.563-.48.205-1.02.205zm0-3.75q-.469 0-.797.328-.328.328-.328.797 0 .469.328.797.328.328.797.328.469 0 .797-.328.328-.328.328-.797 0-.469-.328-.797-.328-.328-.797-.328zM24 10.002v5.578q0 .774-.293 1.46-.293.685-.803 1.194-.51.51-1.195.803-.686.293-1.459.293-.445 0-.908-.105-.463-.106-.85-.329-.293.95-.855 1.729-.563.78-1.319 1.336-.756.557-1.67.861-.914.305-1.898.305-1.148 0-2.162-.398-1.014-.399-1.805-1.102-.79-.703-1.312-1.664t-.674-2.086h-5.8q-.411 0-.704-.293T0 16.881V6.873q0-.41.293-.703t.703-.293h8.59q-.34-.715-.34-1.5 0-.727.275-1.365.276-.639.75-1.114.475-.474 1.114-.75.638-.275 1.365-.275t1.365.275q.639.276 1.114.75.474.475.75 1.114.275.638.275 1.365t-.275 1.365q-.276.639-.75 1.113-.475.475-1.114.75-.638.276-1.365.276-.188 0-.375-.024-.188-.023-.375-.058v1.078h10.875q.469 0 .797.328.328.328.328.797zM12.75 2.373q-.41 0-.78.158-.368.158-.638.434-.27.275-.428.639-.158.363-.158.773 0 .41.158.78.159.368.428.638.27.27.639.428.369.158.779.158.41 0 .773-.158.364-.159.64-.428.274-.27.433-.639.158-.369.158-.779 0-.41-.158-.773-.159-.364-.434-.64-.275-.275-.639-.433-.363-.158-.773-.158zM6.937 9.814h2.25V7.94H2.814v1.875h2.25v6h1.875zm10.313 7.313v-6.75H12v6.504q0 .41-.293.703t-.703.293H8.309q.152.809.556 1.5.405.691.985 1.19.58.497 1.318.779.738.281 1.582.281.926 0 1.746-.352.82-.351 1.436-.966.615-.616.966-1.43.352-.815.352-1.752zm5.25-1.547v-5.203h-3.75v6.855q.305.305.691.452.387.146.809.146.469 0 .879-.176.41-.175.715-.48.304-.305.48-.715t.176-.879Z"}}]})(s)}const M=h.injectEndpoints({endpoints:s=>({getAllteams:s.query({query:()=>({url:"team/all-teamMembers"}),providesTags:["team"]}),getTeamById:s.query({query:a=>({url:`team/${a}`}),providesTags:["team"]}),addteaNewTeam:s.mutation({query:a=>({url:"team/add",method:"POST",body:a}),invalidatesTags:["team"]}),updateTeam:s.mutation({query:({id:a,formData:t})=>({url:`team/update/${a}`,method:"PATCH",body:t}),invalidatesTags:["team"]}),deleteTeam:s.mutation({query:a=>({url:`team/delete/${a}`,method:"DELETE"}),invalidatesTags:["team"]})})}),{useGetAllteamsQuery:A,useGetTeamByIdQuery:F,useAddteaNewTeamMutation:I,useUpdateTeamMutation:P,useDeleteTeamMutation:U}=M;function $(){var r,n,c,x,m,o;const{data:s}=N(),{data:a}=y(),{data:t}=T(),{data:l}=A(),{data:d}=q(),{data:i}=b();return e.jsx("div",{children:e.jsxs("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"shadow rounded p-4 bg-base-100",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex flex-col gap-1",children:e.jsx("h3",{className:"text-lg",children:"Total Services"})}),e.jsx("div",{children:e.jsx(u,{className:"text-2xl text-neutral-content"})})]}),e.jsx("p",{children:(r=s==null?void 0:s.data)==null?void 0:r.length})]}),e.jsxs("div",{className:"shadow rounded p-4 bg-base-100",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex flex-col gap-1",children:e.jsx("h3",{className:"text-lg",children:"Total Admin"})}),e.jsx("div",{children:e.jsx(v,{className:"text-2xl text-neutral-content"})})]}),e.jsx("p",{children:(n=a==null?void 0:a.data)==null?void 0:n.length})]}),e.jsxs("div",{className:"shadow rounded p-4 bg-base-100",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex flex-col gap-1",children:e.jsx("h3",{className:"text-lg",children:"Total Clints"})}),e.jsx("div",{children:e.jsx(g,{className:"text-2xl text-neutral-content"})})]}),e.jsx("p",{children:(c=t==null?void 0:t.data)==null?void 0:c.length})]}),e.jsxs("div",{className:"shadow rounded p-4 bg-base-100",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex flex-col gap-1",children:e.jsx("h3",{className:"text-lg",children:"Total Team"})}),e.jsx("div",{children:e.jsx(w,{className:"text-2xl text-neutral-content"})})]}),e.jsx("p",{children:(x=l==null?void 0:l.data)==null?void 0:x.length})]}),e.jsxs("div",{className:"shadow rounded p-4 bg-base-100",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex flex-col gap-1",children:e.jsx("h3",{className:"text-lg",children:"Total Blogs"})}),e.jsx("div",{children:e.jsx(p,{className:"text-2xl text-neutral-content"})})]}),e.jsx("p",{children:(m=d==null?void 0:d.data)==null?void 0:m.length})]}),e.jsxs("div",{className:"shadow rounded p-4 bg-base-100",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex flex-col gap-1",children:e.jsx("h3",{className:"text-lg",children:"Total Posted Job"})}),e.jsx("div",{children:e.jsx(j,{className:"text-2xl text-neutral-content"})})]}),e.jsx("p",{children:(o=i==null?void 0:i.data)==null?void 0:o.length})]})]})})}export{$ as default};
