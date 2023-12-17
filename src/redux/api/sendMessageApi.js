import { baseApi } from "./baseApi";

export const sendMessageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: `contactEmail/add`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = sendMessageApi;
