import { createAsyncThunk } from "@reduxjs/toolkit";
import { ManageChannel } from "../../services/manage_channel/ManageChannel";

export const getChannelDetails = createAsyncThunk(
  "ManageChannelDetails/getChannelDetails",
  async (payload) => {
    const res = await ManageChannel.getChannelDetail(payload);
    return res.data;
  }
);

export const getChannelVideos = createAsyncThunk(
  "ManageChannelDetails/getChannelVideos",
  async (payload) => {
    const res = await ManageChannel.getChannelVideos(payload);
    return res.data;
  }
);
