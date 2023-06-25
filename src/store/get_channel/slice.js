import { createSlice } from "@reduxjs/toolkit";
import { getChannelDetails, getChannelVideos } from "./thunkAction";

const localChannelRegistered = JSON.parse(
  localStorage.getItem("channelRegsitered")
);

const initialState = {
  channel: [],
  channelVideos: [],
  channelRegsitered: localChannelRegistered || [
    {
      channelId: "UCmXmlB4-HJytD7wek0Uo97A",
      channelImg:
        "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj",
      channelTitle: "JavaScriptMastery",
    },
    {
      channelId: "UCtowbSVJlDLjgs-5qsznSTA",
      channelImg:
        "https://yt3.ggpht.com/ytc/AGIKgqM7iJU6QYRW2aHWWnREVqmR-ZO3nhKndOLwl_-bDg=s88-c-k-c0x00ffffff-no-rj",
      channelTitle: "CamBongDa",
    },
    {
      channelId: "UCj06sjVmkCDEapk8JwBg06A",
      channelImg:
        "https://yt3.ggpht.com/ytc/AGIKgqM1QkmiVmw_UiEVR2tsdyLdFN9Ysa43gUK1XDBmmw=s68-c-k-c0x00ffffff-no-rj",
      channelTitle: "Optimus",
    },
  ],
  isLoading: false,
};

const ManageChannelSlice = createSlice({
  name: "ManageChannelSlice",
  initialState,
  reducers: {
    getChannelRegsiter: (state, action) => {
      state.channelRegsitered.push(action.payload);
      localStorage.setItem(
        "channelRegsitered",
        JSON.stringify(state.channelRegsitered)
      );
    },
    removeChannelRegister: (state, action) => {
      const indexLiked = state?.channelRegsitered?.findIndex(
        (channel) => channel.channelId === action.payload
      );
      if (indexLiked > -1) {
        state.channelRegsitered.splice(indexLiked, 1);
        localStorage.setItem(
          "channelRegsitered",
          JSON.stringify(state.channelRegsitered)
        );
      }
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
export const { getChannelRegsiter, removeChannelRegister } =
  ManageChannelSlice.actions;
