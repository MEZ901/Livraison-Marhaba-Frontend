import { apiSlice } from "../../../app/api/apiSlice";
import orderSlice, { setPendingOrders } from "./orderSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makeOrder: builder.mutation({
      query: () => ({
        url: "/order/ordern",
        method: "POST",
      }),
    }),

    getPendingOrders: builder.query({
      query: () => ({
        url: "/order/pending",
        method: "GET",
      }),
      onSuccess: (data) => setPendingOrders(data),
    }),
  }),
});

export const { useMakeOrderMutation, useGetPendingOrdersQuery } =
  orderApiSlice;

export const { reducer: orderReducer } = orderSlice;
