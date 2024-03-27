import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCampersById } from "./operations";

const initialState = {
  campers: [],
  camperById: {},
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCampersById.fulfilled, (state, action) => {
        // Додати отриманий об'єкт кемпера до об'єкта `camperById` за його ідентифікатором
        const { id, data } = action.payload;
        state.camperById[id] = data;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
