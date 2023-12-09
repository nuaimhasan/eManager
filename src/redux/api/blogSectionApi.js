import { baseApi } from "./baseApi";
const URL = "blogsection";

export const blogSectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogSection: builder.query({
      query: () => ({
        url: `${URL}`,
        method: "GET",
      }),
      providesTags: ["blogSection"],
    }),
    updateBlogSectionById: builder.mutation({
      query: ({id, body}) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["blogSection"],
    }),
  }),
});

export const { useGetBlogSectionQuery, useUpdateBlogSectionByIdMutation } = blogSectionApi;
