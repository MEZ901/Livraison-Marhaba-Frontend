import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menus: [],
  menuById: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (state, action) => {
      state.menus = action.payload;
    },
    setMenuById: (state, action) => {
      state.menuById = action.payload;
    },
    clearMenuById: (state) => {
      state.menuById = null;
    },
  },
});

export const { setMenus, setMenuById, clearMenuById } = menuSlice.actions;

export default menuSlice.reducer;