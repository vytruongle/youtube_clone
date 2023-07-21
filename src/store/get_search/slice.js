import { createSlice } from "@reduxjs/toolkit";
import { getSearchResults } from "./thunkAction";

const initialState = {
  search: [],
  isLoading: false,
};

const manageSearchSlice = createSlice({
  name: "manageSearchSlice",
  initialState,
  reducers: [],

  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.search = action.payload.items;
      })
      .addCase(getSearchResults.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const manageSearchReducer = manageSearchSlice.reducer;
export const manegeSearchAction = manageSearchSlice.actions;
