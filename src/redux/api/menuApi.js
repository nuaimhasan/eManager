import { baseApi } from "./baseApi";
const URL = "menus";

export const menuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateMenuById: builder.mutation({
      query: ({ id, body }) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["menu"],
    }),
    getMenus: builder.query({
      query: () => ({
        url: `${URL}`,
        method: "GET",
      }),
      providesTags: ["menu"],
    }),
    getMenuById: builder.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["menu"],
    }),
  }),
});

export const {
  useGetMenusQuery,
  useUpdateMenuByIdMutation,
  useGetMenuByIdQuery,
} = menuApi;
