import { baseApi } from "./baseApi";

export const jobApplyFormApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addJobApplyForm: builder.mutation({
      query: (formData) => ({
        url: `jobapplyform/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["jobapplyform"],
    }),
    getJobApplyFormById: builder.query({
      query: (id) => ({
        url: `jobapplyform/${id}`,
        method: "GET",
      }),
      providesTags: ["jobapplyform"],
    }),
    getJobApplyForms: builder.query({
      query: () => ({
        url: `jobapplyform`,
        method: "GET",
      }),
      providesTags: ["jobapplyform"],
    }),
    deleteJobApplyForm: builder.mutation({
      query: (id) => ({
        url: `jobapplyform/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["jobapplyform"],
    }),
  }),
});

export const {
  useAddJobApplyFormMutation,
  useGetJobApplyFormsQuery,
  useGetJobApplyFormByIdQuery,
  useDeleteJobApplyFormMutation,
} = jobApplyFormApi;
