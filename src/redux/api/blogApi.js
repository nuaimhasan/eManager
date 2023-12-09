import { baseApi } from "./baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (formData) => ({
        url: `blogs/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `blogs/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["blog"],
    }),
    getBlogById: builder.query({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    getBlogs: builder.query({
      query: () => ({
        url: `blogs`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useAddBlogMutation,
  useUpdateBlogMutation,
  useGetBlogByIdQuery,
  useGetBlogsQuery,
  useDeleteBlogMutation,
} = blogApi;
