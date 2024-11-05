import { createSlice } from "@reduxjs/toolkit";
import { editUsers, getUsers, postUsers } from "./thunk/Fetch";

let userSlice = createSlice({
  name: "user",
  initialState: { isLoading: false, data:[], error: null },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.data = false;
    });
    builder.addCase(editUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload
    });
    builder.addCase(editUsers.rejected, (state, action) => {
      state.data = false;
    });
    builder.addCase(postUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload
    });
    builder.addCase(postUsers.rejected, (state, action) => {
      state.data = false;
    });
  },
});
export const userData = userSlice.reducer;
