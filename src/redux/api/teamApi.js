import { baseApi } from "./baseApi";

export const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllteams: builder.query({
      query: () => ({
        url: "team/all-teamMembers",
      }),
      providesTags: ["team"],
    }),

    getTeamById: builder.query({
      query: (id) => ({
        url: `team/${id}`,
      }),
      providesTags: ["team"],
    }),

    addteaNewTeam: builder.mutation({
      query: (team) => ({
        url: "team/add",
        method: "POST",
        body: team,
      }),
      invalidatesTags: ["team"],
    }),

    updateTeam: builder.mutation({
      query: ({ id, formData }) => ({
        url: `team/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["team"],
    }),

    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `team/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["team"],
    }),
  }),
});

export const {
  useGetAllteamsQuery,
  useGetTeamByIdQuery,
  useAddteaNewTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamApi;
