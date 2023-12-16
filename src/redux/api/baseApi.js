import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: async (headers) => {
      const token = localStorage.getItem("eManager_jwt");
      if (token) {
        headers.set("Authorization", `bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "contactUs",
    "banner",
    "admin",
    "menu",
    "blogSection",
    "serviceSection",
    "logo",
    "whyChoose",
    "aboutUs",
    "blog",
    "client",
    "service",
    "serviceBanner",
    "counter",
    "careerBanner",
    "jobs",
    "benefits",
    "jobapplyform",
  ],
});
