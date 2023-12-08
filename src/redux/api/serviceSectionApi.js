import { baseApi } from "./baseApi";
const URL = "servicesection";
const id = "";

export const serviceSectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServiceSectionById: builder.query({
      query: () => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["serviceSection"],
    }),
    updateServiceSectionById: builder.mutation({
      query: (body) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["serviceSection"],
    }),
  }),
});

export const {
  useGetServiceSectionByIdQuery,
  useUpdateServiceSectionByIdMutation,
} = serviceSectionApi;
