import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://65fb1a1814650eb2100959e7.mockapi.io/adverts/";

export const getCampers = createAsyncThunk(
  "catalog/getCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("adverts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCampersById = createAsyncThunk(
  "catalog/getCampersById",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`adverts/?_id=${credentials}`);
      return response.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
