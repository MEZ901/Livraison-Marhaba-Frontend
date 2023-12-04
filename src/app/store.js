import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/redux/authSlice";
import menuReducer from "../features/menu/redux/menuSlice";
import { menuApiSlice } from "../features/menu/redux/menuApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    menu: menuReducer,
    [menuApiSlice.reducerPath]: menuApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(menuApiSlice.middleware), 
  devTools: true,
});

export default store;