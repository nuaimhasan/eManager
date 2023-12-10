import { baseApi } from "./baseApi";
const URL = "banner";

export const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => ({
        url: `${URL}`,
        method: "GET",
      }),
      providesTags: ["banner"],
    }),
    updateBannerById: builder.mutation({
      query: ({id,body}) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const { useGetBannerQuery, useUpdateBannerByIdMutation } = bannerApi;
