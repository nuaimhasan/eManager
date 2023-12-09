import { baseApi } from "./baseApi";
const id = "657416541355bff6bc8878b4";

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
      query: (formData) => ({
        url: `aboutus/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["aboutUs"],
    }),
    getAboutUsById: builder.query({
      query: () => ({
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
