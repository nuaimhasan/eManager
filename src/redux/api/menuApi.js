import { baseApi } from "./baseApi";
const URL = "menus";

export const menuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateMenuById: builder.mutation({
      query: ({body, id}) => ({
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
  }),
});

export const { useGetMenusQuery, useUpdateMenuByIdMutation } = menuApi;
