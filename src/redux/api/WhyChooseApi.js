import { baseApi } from "./baseApi";

export const whyChooseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWhyChoose: builder.mutation({
      query: (formData) => ({
        url: `whychoose/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["whyChoose"],
    }),
    updateWhyChoose: builder.mutation({
      query: ({ id, formData }) => ({
        url: `whychoose/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["whyChoose"],
    }),
    getAllWhyChoose: builder.query({
      query: () => ({
        url: `whychoose`,
        method: "GET",
      }),
      providesTags: ["whyChoose"],
    }),
    getWhyChooseById: builder.query({
      query: (id) => ({
        url: `whychoose/${id}`,
        method: "GET",
      }),
      providesTags: ["whyChoose"],
    }),
    deleteWhyChoose : builder.mutation({
      query: (id) => ({
        url: `whychoose/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["whyChoose"],
    }),
  }),
});

export const {
  useCreateWhyChooseMutation,
  useGetAllWhyChooseQuery,
  useGetWhyChooseByIdQuery,
  useUpdateWhyChooseMutation,
  useDeleteWhyChooseMutation
} = whyChooseApi;
