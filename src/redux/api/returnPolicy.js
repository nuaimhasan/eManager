import { baseApi } from "./baseApi";

export const returnPolicyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReturnPolicy: builder.mutation({
      query: (contentInfo) => ({
        url: `/return-policy/add`,
        method: "POST",
        body: contentInfo,
      }),
      invalidatesTags: ["returnPolicy"],
    }),

    updateReturnPolicy: builder.mutation({
      query: ({ id, contentInfo }) => ({
        url: `/return-policy/${id}`,
        method: "PATCH",
        body: contentInfo,
      }),
      invalidatesTags: ["returnPolicy"],
    }),

    getReturnPolicy: builder.query({
      query: () => ({
        url: `/return-policy`,
        method: "GET",
      }),
      providesTags: ["returnPolicy"],
    }),
  }),
});

export const {
  useCreateReturnPolicyMutation,
  useUpdateReturnPolicyMutation,
  useGetReturnPolicyQuery,
} = returnPolicyApi;
