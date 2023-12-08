import { baseApi } from "./baseApi";
const URL = "blogsection";
const id = "";

export const blogSectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogSectionById: builder.query({
      query: () => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["blogSection"],
    }),
    updateBlogSectionById: builder.mutation({
      query: (body) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["blogSection"],
    }),
  }),
});

export const { useGetBlogSectionByIdQuery, useUpdateBlogSectionByIdMutation } = blogSectionApi;
