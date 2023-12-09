import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addService: builder.mutation({
      query: (formData) => ({
        url: `services/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["service"],
    }),
    updateServiceById: builder.mutation({
      query: ({ id, formData }) => ({
        url: `services/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["service"],
    }),
    getServiceById: builder.query({
      query: (id) => ({
        url: `services/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    getAllServices: builder.query({
      query: () => ({
        url: `services`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
    deleteServiceById: builder.mutation({
      query: (id) => ({
        url: `services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useUpdateServiceByIdMutation,
  useGetServiceByIdQuery,
  useGetAllServicesQuery,
  useDeleteServiceByIdMutation,
} = serviceApi;
