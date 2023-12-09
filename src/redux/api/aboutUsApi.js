import { baseApi } from "./baseApi";

export const aboutUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAboutUs: builder.mutation({
      query: (formData) => ({
        url: `aboutus/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["aboutUs"],
    }),
    updateAboutUs: builder.mutation({
      query: ({ id, formData }) => ({
        url: `aboutus/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["aboutUs"],
    }),
    getAboutUsById: builder.query({
      query: (id) => ({
        url: `aboutus/${id}`,
        method: "GET",
      }),
      providesTags: ["aboutUs"],
    }),
  }),
});

export const {
  useCreateAboutUsMutation,
  useUpdateAboutUsMutation,
  useGetAboutUsByIdQuery,
} = aboutUsApi;
