import { baseApi } from "./baseApi";
const URL = "admins";

export const administratorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdministrator: builder.mutation({
      query: (body) => ({
        url: `${URL}/add`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["admin"],
    }),
    adminLogin: builder.mutation({
      query: (body) => ({
        url: `${URL}/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["admin"],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin"],
    }),
    getAdmins: builder.query({
      query: () => ({
        url: `${URL}`,
        method: "GET",
      }),
      providesTags: ["admin"],
    }),
  }),
});

export const {
  useAddAdministratorMutation,
  useAdminLoginMutation,
  useDeleteAdminMutation,
  useGetAdminsQuery,
} = administratorApi;
