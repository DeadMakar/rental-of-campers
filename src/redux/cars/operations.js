import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://65fb1a1814650eb2100959e7.mockapi.io/adverts/";

export const fetchCars = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("adverts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterCars = createAsyncThunk(
  "campers/filter",
  async (filters, thunkAPI) => {
    try {
      const response = await axios.get("adverts", { params: filters });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
