import { apiSlice } from "../../../app/api/apiSlice";

export const deliveryTrackingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateDeliveryLocation: builder.mutation({
      query: (deliveryCredentials) => ({
        url: "/delivery/updateLocation",
        method: "POST",
        body: { ...deliveryCredentials },
      }),
    }),
  }),
});

export const { useUpdateDeliveryLocationMutation } = deliveryTrackingApiSlice;
