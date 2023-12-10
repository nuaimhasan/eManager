import { baseApi } from "./baseApi";

export const counterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCounter: builder.mutation({
      query: (formData) => ({
        url: `counters/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["counter"],
    }),
    updateCounter: builder.mutation({
      query: ({ id, formData }) => ({
        url: `counters/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["counter"],
    }),
    getAllCounter: builder.query({
      query: () => ({
        url: `counters`,
        method: "GET",
      }),
      providesTags: ["counter"],
    }),
    getCounterById: builder.query({
      query: (id) => ({
        url: `counters/${id}`,
        method: "GET",
      }),
      providesTags: ["counter"],
    }),
    deleteCounter: builder.mutation({
      query: (id) => ({
        url: `counters/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["counter"],
    }),
  }),
});

export const {
  useCreateCounterMutation,
  useUpdateCounterMutation,
  useGetAllCounterQuery,
  useGetCounterByIdQuery,
  useDeleteCounterMutation,
} = counterApi;
