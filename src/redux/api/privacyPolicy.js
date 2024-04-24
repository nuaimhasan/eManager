import { baseApi } from "./baseApi";

export const privacyPolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPrivacyPolicy: builder.mutation({
      query: (contentInfo) => ({
        url: `/privacy-policy/add`,
        method: "POST",
        body: contentInfo,
      }),
      invalidatesTags: ["privacyPolicy"],
    }),

    updatePrivacyPolicy: builder.mutation({
      query: ({ id, contentInfo }) => ({
        url: `/privacy-policy/${id}`,
        method: "PATCH",
        body: contentInfo,
      }),
      invalidatesTags: ["privacyPolicy"],
    }),

    getPrivacyPolicy: builder.query({
      query: () => ({
        url: `/privacy-policy`,
        method: "GET",
      }),
      providesTags: ["privacyPolicy"],
    }),
  }),
});

export const {
  useCreatePrivacyPolicyMutation,
  useUpdatePrivacyPolicyMutation,
  useGetPrivacyPolicyQuery,
} = privacyPolicyApi;
