import { baseApi } from "./baseApi";
const URL = "banner";
const id = "";

export const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBannerById: builder.query({
      query: () => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["banner"],
    }),
    updateBannerById: builder.mutation({
      query: (body) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const { useGetBannerByIdQuery, useUpdateBannerByIdMutation } = bannerApi;
