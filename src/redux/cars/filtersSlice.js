import { createSlice } from "@reduxjs/toolkit";
import { filterCars } from "./operations";

const initialState = {
  campers: [],
  filters: {
    equipment: [],
    vehicleType: [],
  },
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const filtersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    updateEquipmentFilter(state, action) {
      state.filters.equipment = action.payload;
    },
    updateVehicleTypeFilter(state, action) {
      state.filters.vehicleType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterCars.pending, handlePending)
      .addCase(filterCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(filterCars.rejected, handleRejected);
  },
});
export const { updateEquipmentFilter, updateVehicleTypeFilter } =
  filtersSlice.actions;

export default filtersSlice.reducer;
