import { baseApi } from "./baseApi";
const URL = "job";

export const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => ({
        url: `${URL}/all-jobs`,
        method: "GET",
      }),
      providesTags: ["jobs"],
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["jobs"],
    }),
    updateJob: builder.mutation({
      query: ({ id, body }) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["jobs"],
    }),
    addJob: builder.mutation({
      query: (body) => ({
        url: `${URL}/add`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["jobs"],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["jobs"],
    }),
  }),
});

export const {
  useAddJobMutation,
  useUpdateJobMutation,
  useGetJobsQuery,
  useGetJobByIdQuery,
  useDeleteJobMutation,
} = jobsApi;
