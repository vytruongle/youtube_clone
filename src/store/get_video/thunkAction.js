import { createAsyncThunk } from "@reduxjs/toolkit";
import { ManageVideo } from "../../services/manage_video/ManageVideo";

export const getSuggestVideo = createAsyncThunk(
  "ManageVideo/getSuggestVideo",
  async (payload) => {
    const res = await ManageVideo.getSuggestVideo(payload);
    return res.data;
  }
);

export const getVideoDetails = createAsyncThunk(
  "ManageVideo/getVideoDetails",
  async (payload) => {
    const res = await ManageVideo.getVideoDetail(payload);
    return res.data;
  }
);

export const getVideoComments = createAsyncThunk(
  "ManageVideo/getVideoComments",
  async (payload) => {
    const res = await ManageVideo.getVideoComment(payload);
    return res.data;
  }
);
