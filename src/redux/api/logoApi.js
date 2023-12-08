import { baseApi } from "./baseApi";
const id = "65707e7dd42a4f24a4dce9d9";

export const logoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLogoById: builder.query({
      query: () => ({
        url: `logo/${id}`,
        method: "GET",
      }),
      providesTags: ["logo"],
    }),
    updateLogoById: builder.mutation({
      query: ( formData ) => ({
        url: `logo/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
  }),
});

export const { useGetLogoByIdQuery, useUpdateLogoByIdMutation } = logoApi;
