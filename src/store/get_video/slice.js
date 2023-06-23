import { createSlice } from "@reduxjs/toolkit";
import {
  getSuggestVideo,
  getVideoComments,
  getVideoDetails,
} from "./thunkAction";

const localVidWatched = JSON.parse(localStorage.getItem("videoWatched"));
const localVidLiked = JSON.parse(localStorage.getItem("videoLiked"));

const initialState = {
  videos: [],
  videoDetail: [],
  videoComment: [],
  videoWatched: localVidWatched || [],
  videoLiked: localVidLiked || [],
  isLoading: false,
};

const manageVideoSlice = createSlice({
  name: "manageVideoSlice",
  initialState,
  reducers: {
    getVideoWatched: (state, action) => {
      state.videoWatched.push(action.payload);
      localStorage.setItem("videoWatched", JSON.stringify(state.videoWatched));
    },
    getVideoLiked: (state, action) => {
      state.videoLiked.push(action.payload);
      localStorage.setItem("videoLiked", JSON.stringify(state.videoLiked));
    },
    removeVideoLiked: (state, action) => {
      const indexLiked = state?.videoLiked?.findIndex(
        (video) => video.id === action.payload
      );
      if (indexLiked > -1) {
        state.videoLiked.splice(indexLiked, 1);
        localStorage.setItem("videoLiked", JSON.stringify(state.videoLiked));
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getSuggestVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSuggestVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload?.items;
        // console.log(payload);
      })
      .addCase(getSuggestVideo.rejected, (state) => {
        state.isLoading = true;
        console.log("error");
      })
      .addCase(getVideoDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideoDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videoDetail = action.payload?.items;
      })
      .addCase(getVideoDetails.rejected, (state) => {
        state.isLoading = true;
        console.log("error");
      })
      .addCase(getVideoComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideoComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videoComment = action.payload?.items;
      })
      .addCase(getVideoComments.rejected, (state) => {
        state.isLoading = true;
        console.log("error");
      });
  },
});

export const manageVideoReducer = manageVideoSlice.reducer;
export const { getVideoWatched, getVideoLiked, removeVideoLiked } =
  manageVideoSlice.actions;
