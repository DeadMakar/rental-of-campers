export const selectCampers = (state) => state.catalog.campers;

export const selectCampersById = (state) => state.catalog.camperById;

export const selectFavoritesCampers = (state) =>
  state.favorites.favoritesCampers;

export const selectIsLoading = (state) => state.catalog.isLoading;

export const selectIsError = (state) => state.catalog.error;
