import { createSlice } from "@reduxjs/toolkit";
export const storeSlice = createSlice({
  name: "mode",
  initialState: true,
  reducers: {
    change(state) {},
  },
});
export const { change } = storeSlice.actions;
export default storeSlice.reducer;
