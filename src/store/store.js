import { configureStore } from "@reduxjs/toolkit";
import { manageVideoReducer } from "./get_video/slice";
import { manageChannelReducer } from "./get_channel/slice";
import { manageSearchReducer } from "./get_search/slice";

const store = configureStore({
  reducer: {
    manageVideos: manageVideoReducer,
    manageChannels: manageChannelReducer,
    manageSearchResults: manageSearchReducer,
  },
});

export default store;
