import { baseApi } from "./baseApi";

export const jobApplyFormApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addJobApplyForm: builder.mutation({
      query: (formData) => ({
        url: `jobApplyForm/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["jobapplyform"],
    }),
    getJobApplyFormById: builder.query({
      query: (id) => ({
        url: `jobApplyForm/${id}`,
        method: "GET",
      }),
      providesTags: ["jobapplyform"],
    }),
    getJobApplyForms: builder.query({
      query: () => ({
        url: `jobApplyForm`,
        method: "GET",
      }),
      providesTags: ["jobapplyform"],
    }),
    deleteJobApplyForm: builder.mutation({
      query: (id) => ({
        url: `jobApplyForm/${id}`,
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
