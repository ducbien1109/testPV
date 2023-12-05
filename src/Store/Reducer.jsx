import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const listProduct = createSlice({
  name: "product",
  initialState,
  reducers: {
    setData: (state, actions) => {
      state.products = actions.payload;
    },
  },
});
export const { setData } = listProduct.actions;
export const getData = (state) => {
  return state.listProduct.products;
};
const list = listProduct.reducer;
export default list;
