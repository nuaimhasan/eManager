import{b as n}from"./index-d4e5aba6.js";const o="contact",c=n.injectEndpoints({endpoints:t=>({getContactUs:t.query({query:()=>({url:`${o}`,method:"GET"}),providesTags:["contactUs"]}),updateContactUsById:t.mutation({query:({id:a,data:s})=>({url:`${o}/${a}`,method:"PATCH",body:s}),invalidatesTags:["contactUs"]}),addContactUs:t.mutation({query:a=>({url:`${o}/add`,method:"POST",body:a}),invalidatesTags:["contactUs"]})})}),{useGetContactUsQuery:d,useUpdateContactUsByIdMutation:u,useAddContactUsMutation:i}=c;export{u as a,i as b,d as u};
