import { baseApi } from "./baseApi";

export const benefitsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBenefit: builder.mutation({
      query: (formData) => ({
        url: `jobBenefit/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["benefits"],
    }),
    updateBenefit: builder.mutation({
      query: ({ id, formData }) => ({
        url: `jobBenefit/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["benefits"],
    }),
    getBenefitById: builder.query({
      query: (id) => ({
        url: `jobBenefit/${id}`,
        method: "GET",
      }),
      providesTags: ["benefits"],
    }),
    getBenefits: builder.query({
      query: () => ({
        url: `jobBenefit`,
        method: "GET",
      }),
      providesTags: ["benefits"],
    }),
    deleteBenefit: builder.mutation({
      query: (id) => ({
        url: `jobBenefit/${id}`,
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
