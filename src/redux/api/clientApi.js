import { baseApi } from "./baseApi";

export const clientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addClient: builder.mutation({
      query: (formData) => ({
        url: `clients/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["client"],
    }),
    getClients: builder.query({
      query: () => ({
        url: `clients`,
        method: "GET",
      }),
      providesTags: ["client"],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["client"],
    }),
  }),
});

export const {
  useAddClientMutation,
  useGetClientsQuery,
  useDeleteClientMutation,
} = clientApi;
