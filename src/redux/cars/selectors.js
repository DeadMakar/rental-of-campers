export const selectCars = (state) => state.cars.campers;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;

export const selectEquipmentFilter = (state) => state.cars.filters.equipment;

export const selectVehicleTypeFilter = (state) => state.filters.vehicleType;
