/* Core */
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
  getSeriesAsync,
  getSerieByIdAsync,
  createSerieAsync,
  getSeriesByActorIdAsync,
} from "./thunks";
import {
  getSeriesFulfilledCaseReducer,
  getSeriesPendingCaseReducer,
  getSerieByIdFulfilledCaseReducer,
  getSerieByIdPendingCaseReducer,
  getSerieByIdRejectedCaseReducer,
  addSerieReducer,
  createSerieFulfilledCaseReducer,
  createSeriePendingCaseReducer,
  createSerieRejectedCaseReducer,
  getSeriesByActorIdFulfilledCaseReducer,
  getSeriesByActorIdPendingCaseReducer,
  getSeriesByActorIdRejectedCaseReducer,
} from "./reducers";
import { CreateSerieUseCase } from "@/server/src/use-cases/series/create-serie/create-serie.use-case";
import { flushSync } from "react-dom";

export const seriesSlice = createSlice({
  name: "series",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addSerie: addSerieReducer,
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      // GetSeries
      .addCase(getSeriesAsync.pending, getSeriesPendingCaseReducer)
      .addCase(getSeriesAsync.fulfilled, getSeriesFulfilledCaseReducer)
      // GetSerieById
      .addCase(getSerieByIdAsync.pending, getSerieByIdPendingCaseReducer)
      .addCase(getSerieByIdAsync.fulfilled, getSerieByIdFulfilledCaseReducer)
      .addCase(getSerieByIdAsync.rejected, getSerieByIdRejectedCaseReducer)
      // CreateSerie
      .addCase(createSerieAsync.pending, createSeriePendingCaseReducer)
      .addCase(createSerieAsync.fulfilled, createSerieFulfilledCaseReducer)
      .addCase(createSerieAsync.rejected, createSerieRejectedCaseReducer)

      //GetSeriesByActorId

      .addCase(
        getSeriesByActorIdAsync.fulfilled,
        getSeriesByActorIdFulfilledCaseReducer
      )
      .addCase(
        getSeriesByActorIdAsync.pending,
        getSeriesByActorIdPendingCaseReducer
      )
      .addCase(
        getSeriesByActorIdAsync.rejected,
        getSeriesByActorIdRejectedCaseReducer
      );
  },
});
