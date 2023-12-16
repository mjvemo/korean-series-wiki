import { initialState } from "./state";
import {
  createSeasonAsync,
  getSeasonsAsync,
  getSeasonsBySerieId,
} from "./thunks";
import {
  addSeasonReducer,
  createSeasonFulfilledCaseReducer,
  createSeasonPendingCaseReducer,
  createSeasonRejectedCaseReducer,
  getSasonsBySerieIdRejectedCaseReducer,
  getSeasonByIdFulfilledCaseReducer,
  getSeasonsBySerieIdFulfilledCaseReducer,
  getSeasonsBySerieIdPendingCaseReducer,
  getSeasonsFulfilledCaseReducer,
  getSeasonsPendingCaseReducer,
  getSeasonsRejectedCaseReducer,
} from "./reducers";
import { createSlice } from "@reduxjs/toolkit";

export const seasonsSlice = createSlice({
  name: "seasons",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addSeason: addSeasonReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSeasonsAsync.pending, getSeasonsPendingCaseReducer)
      .addCase(getSeasonsAsync.fulfilled, getSeasonsFulfilledCaseReducer)
      .addCase(getSeasonsAsync.rejected, getSeasonsRejectedCaseReducer)

      .addCase(
        getSeasonsBySerieId.fulfilled,
        getSeasonsBySerieIdFulfilledCaseReducer
      )
      .addCase(
        getSeasonsBySerieId.pending,
        getSeasonsBySerieIdPendingCaseReducer
      )
      .addCase(
        getSeasonsBySerieId.rejected,
        getSasonsBySerieIdRejectedCaseReducer
      )

      .addCase(createSeasonAsync.fulfilled, createSeasonFulfilledCaseReducer)
      .addCase(createSeasonAsync.pending, createSeasonPendingCaseReducer)
      .addCase(createSeasonAsync.rejected, createSeasonRejectedCaseReducer);
  },
});
