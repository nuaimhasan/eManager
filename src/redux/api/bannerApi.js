import { baseApi } from "./baseApi";
const URL = "banner";
const id = "656f34590c2e36ef0871a853";

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
