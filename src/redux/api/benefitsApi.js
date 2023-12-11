import { baseApi } from "./baseApi";

export const benefitsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBenefit: builder.mutation({
      query: (formData) => ({
        url: `benefits/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["benefits"],
    }),
    updateBenefit: builder.mutation({
      query: ({ id, formData }) => ({
        url: `benefits/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["benefits"],
    }),
    getBenefitById: builder.query({
      query: (id) => ({
        url: `benefits/${id}`,
        method: "GET",
      }),
      providesTags: ["benefits"],
    }),
    getBenefits: builder.query({
      query: () => ({
        url: `benefits`,
        method: "GET",
      }),
      providesTags: ["benefits"],
    }),
    deleteBenefit: builder.mutation({
      query: (id) => ({
        url: `benefits/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["benefits"],
    }),
  }),
});

export const {
  useAddBenefitMutation,
  useUpdateBenefitMutation,
  useGetBenefitsQuery,
  useGetBenefitByIdQuery,
  useDeleteBenefitMutation,
} = benefitsApi;
