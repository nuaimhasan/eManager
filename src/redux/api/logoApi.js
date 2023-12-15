import { baseApi } from "./baseApi";

export const logoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLogos: builder.query({
      query: () => ({
        url: `logo`,
        method: "GET",
      }),
      providesTags: ["logo"],
    }),
    updateLogoById: builder.mutation({
      query: ({ id, formData }) => ({
        url: `logo/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
    addLogo : builder.mutation({
      query: (formData) => ({
        url: `logo/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["logo"],
    }),
  }),
});

export const { useGetLogosQuery, useUpdateLogoByIdMutation, useAddLogoMutation } = logoApi;
