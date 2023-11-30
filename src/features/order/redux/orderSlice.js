import { createSlice } from "@reduxjs/toolkit";
// import { apiSlice } from "../../../app/api/apiSlice";

const initialState = {
  pendingOrders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPendingOrders: (state, action) => {
      state.pendingOrders = action.payload;
    },
  },
});

export const { setPendingOrders } = orderSlice.actions;

export default orderSlice.reducer;