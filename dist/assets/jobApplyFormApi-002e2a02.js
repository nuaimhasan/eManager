import{b as e}from"./index-d4e5aba6.js";const r=e.injectEndpoints({endpoints:p=>({addJobApplyForm:p.mutation({query:o=>({url:"jobApplyForm/add",method:"POST",body:o}),invalidatesTags:["jobapplyform"]}),getJobApplyFormById:p.query({query:o=>({url:`jobApplyForm/${o}`,method:"GET"}),providesTags:["jobapplyform"]}),getJobApplyForms:p.query({query:()=>({url:"jobApplyForm",method:"GET"}),providesTags:["jobapplyform"]}),deleteJobApplyForm:p.mutation({query:o=>({url:`jobApplyForm/${o}`,method:"DELETE"}),invalidatesTags:["jobapplyform"]})})}),{useAddJobApplyFormMutation:t,useGetJobApplyFormsQuery:m,useGetJobApplyFormByIdQuery:a,useDeleteJobApplyFormMutation:s}=r;export{m as a,s as b,t as u};
