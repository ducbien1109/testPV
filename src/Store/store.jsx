import list from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: { listProduct: list },
});
