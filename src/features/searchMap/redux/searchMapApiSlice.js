import { apiSlice } from "../../../app/api/apiSlice";

export const restoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllRestos: builder.query({
      query: () => "/resto/",
    }),

  }),
});

export const {
  useGetAllRestosQuery,
} = restoApiSlice;
