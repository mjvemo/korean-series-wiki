import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { SerieState } from "./state";

export const getSeriesFulfilledCaseReducer: CaseReducer<
  SerieState,
  PayloadAction<SerieDTO[]>
> = (state, action) => {
  state.items = action.payload;
  state.status = "idle";
};

export const getSeriesPendingCaseReducer: CaseReducer<SerieState, any> = (
  state
) => {
  state.status = "loading";
};

export const getSerieByIdFulfilledCaseReducer: CaseReducer<
  SerieState,
  PayloadAction<SerieDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const getSerieByIdPendingCaseReducer: CaseReducer<SerieState, any> = (
  state
) => {
  state.status = "loading";
};

export const getSerieByIdRejectedCaseReducer: CaseReducer<SerieState, any> = (
  state
) => {
  state.status = "failed";
};

export const addSerieReducer: CaseReducer<
  SerieState,
  PayloadAction<SerieDTO>
> = (state, action) => {
  state.items.push(action.payload);
};

export const createSerieFulfilledCaseReducer: CaseReducer<
  SerieState,
  PayloadAction<SerieDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const createSeriePendingCaseReducer: CaseReducer<SerieState, any> = (
  state
) => {
  state.status = "loading";
};

export const createSerieRejectedCaseReducer: CaseReducer<SerieState, any> = (
  state
) => {
  state.status = "failed";
};

export const getSeriesByActorIdFulfilledCaseReducer: CaseReducer<
  SerieState,
  PayloadAction<SerieDTO[]>
> = (state, action) => {
  state.byEntityIdItems = action.payload;
  state.status = "idle";
};

export const getSeriesByActorIdPendingCaseReducer: CaseReducer<
  SerieState,
  any
> = (state) => {
  state.status = "loading";
};

export const getSeriesByActorIdRejectedCaseReducer: CaseReducer<
  SerieState,
  any
> = (state) => {
  state.status = "failed";
};
