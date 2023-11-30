// orderSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch pending orders
export const fetchPendingOrders = createAsyncThunk('orders/fetchPendingOrders', async () => {
  const response = await axios.get(`http://localhost:8080/api/make-order/orderPending`);
  return response.data;
});

// Order slice
const orderSlice = createSlice({
  name: 'orders',
  initialState: { pendingOrders: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPendingOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPendingOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pendingOrders = action.payload;
      })
      .addCase(fetchPendingOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
