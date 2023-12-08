import { baseApi } from "./baseApi";

export const whyChooseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWhyChoose: builder.mutation({
      query: ( formData ) => ({
        url: `whychoose/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["whyChoose"],
    }),
  }),
});

export const { useCreateWhyChooseMutation } = whyChooseApi;
