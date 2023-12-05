import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/redux/authSlice";

import menuReducer from "../features/menu/redux/menuSlice";
import { menuApiSlice } from "../features/menu/redux/menuApiSlice";
 import { productsApi } from '../features/products/redux/productsAPI.js'; 
import  cartReducer  from "../features/products/redux/cartSlice.js";
import orderReducer from "../features/order/redux/orderSlice.js";
import {ordersApi} from "../features/order/redux/orderApiSlice";



const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartReducer,
    menu: menuReducer,
    orders:orderReducer,
    [menuApiSlice.reducerPath]: menuApiSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(menuApiSlice.middleware)
      .concat(apiSlice.middleware, productsApi.middleware)
      .concat(apiSlice.middleware, ordersApi.middleware),

  devTools: true,
});





export default store;

