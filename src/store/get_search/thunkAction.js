import { createAsyncThunk } from "@reduxjs/toolkit";
import { ManageSearch } from "../../services/manage_search/ManageSearch";

export const getSearchResults = createAsyncThunk(
  "ManageSearch/getSearchResults",
  async (payload) => {
    const res = await ManageSearch.getSearchResults(payload);
    return res.data;
  }
);
