import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storeslice";

const store = configureStore({
  reducer: {
    mode: storeSlice,
  },
});

export default store;
