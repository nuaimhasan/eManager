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
    addBlogSection: builder.mutation({
      query: (body) => ({
        url: `${URL}/add`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["blogSection"],
    }),
  }),
});

export const { useGetBlogSectionQuery, useUpdateBlogSectionByIdMutation,useAddBlogSectionMutation } = blogSectionApi;
