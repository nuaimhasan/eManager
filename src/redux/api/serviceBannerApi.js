import { baseApi } from "./baseApi";

export const serviceBannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addServiceBanner: builder.mutation({
      query: (formData) => ({
        url: `servicebanner/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["serviceBanner"],
    }),
    updateServiceBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `servicebanner/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["serviceBanner"],
    }),
    getServiceBannerById: builder.query({
      query: (id) => ({
        url: `servicebanner/${id}`,
        method: "GET",
      }),
      providesTags: ["serviceBanner"],
    }),
  }),
});

export const {
  useAddServiceBannerMutation,
  useUpdateServiceBannerMutation,
  useGetServiceBannerByIdQuery,
} = serviceBannerApi;
