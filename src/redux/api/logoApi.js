import { baseApi } from "./baseApi";
const id = "";

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
      query: ({ file }) => ({
        url: `logo/${id}`,
        method: "PATCH",
        file: file,
      }),
      invalidatesTags: ["logo"],
    }),
  }),
});

export const { useGetLogoByIdQuery, useUpdateLogoByIdMutation } = logoApi;
