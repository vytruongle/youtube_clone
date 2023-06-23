import { createSlice } from "@reduxjs/toolkit";
import { getChannelDetails, getChannelVideos } from "./thunkAction";

const initialState = {
  channel: [],
  channelVideos: [],
  isLoading: false,
};

const ManageChannelSlice = createSlice({
  name: "ManageChannelSlice",
  initialState,
  reducer: {
    getMovie: (state, payload) => {
      state.channel = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getChannelDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChannelDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.channel = action.payload?.items;
        // console.log(action.payload);
      })
      .addCase(getChannelDetails.rejected, (state) => {
        state.isLoading = true;
        console.log("error");
      })
      .addCase(getChannelVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChannelVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.channelVideos = action.payload?.items;
        // console.log(action.payload);
      })
      .addCase(getChannelVideos.rejected, (state) => {
        state.isLoading = true;
        console.log("error");
      });
  },
});

export const manageChannelReducer = ManageChannelSlice.reducer;
export const manageChannelAction = ManageChannelSlice.actions;
