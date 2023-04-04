import { createSlice } from "@reduxjs/toolkit";


export const categorySlice = createSlice({
  name: "category",
  initialState: {
    page: 0,
    categories: [],
    isLoading: false,
  },
  reducers: {
    setCategory: (state, payload) => {
      state.categories = payload
    },
  },
});
export const { setCategory } = categorySlice.actions;
