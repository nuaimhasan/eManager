import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
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