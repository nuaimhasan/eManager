import { baseApi } from "./baseApi";
const URL = "contactus";
const id = "656f2809ac9e30474aa8a808";

export const contactUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getContactUsById: builder.query({
      query: () => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["contactUs"],
    }),
    updateContactUsById: builder.mutation({
      query: (body) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["contactUs"],
    }),
  }),
});

export const { useGetContactUsByIdQuery, useUpdateContactUsByIdMutation } = contactUsApi;
