import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `menu`,


    }),
  }),
});


export const { useGetAllProductsQuery } = productsApi;