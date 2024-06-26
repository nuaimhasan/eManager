import { baseApi } from "./baseApi";
const URL = "careerBanner";

export const careerBannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCareerBanner: builder.query({
      query: () => ({
        url: `${URL}`,
        method: "GET",
      }),
      providesTags: ["careerBanner"],
    }),
    updateCareerBannerById: builder.mutation({
      query: ({ id, body }) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["careerBanner"],
    }),
    addCareerBanner: builder.mutation({
      query: (body) => ({
        url: `${URL}/add`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["careerBanner"],
    }),
  }),
});

export const {
  useGetCareerBannerQuery,
  useUpdateCareerBannerByIdMutation,
  useAddCareerBannerMutation,
} = careerBannerApi;
