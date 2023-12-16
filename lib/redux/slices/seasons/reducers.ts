import { SeasonDTO } from "@/lib/api/dtos/season.dto";
import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { SeasonState } from "./state";

export const getSeasonsFulfilledCaseReducer: CaseReducer<
  SeasonState,
  PayloadAction<SeasonDTO[]>
> = (state, action) => {
  state.items = action.payload;
  state.status = "idle";
};

export const getSeasonsPendingCaseReducer: CaseReducer<SeasonState, any> = (
  state
) => {
  state.status = "loading";
};
export const getSeasonsRejectedCaseReducer: CaseReducer<SeasonState, any> = (
  state
) => {
  state.status = "loading";
};

export const getSeasonByIdFulfilledCaseReducer: CaseReducer<
  SeasonState,
  PayloadAction<SeasonDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const getSeasonByIdPendingCaseReducer: CaseReducer<SeasonState, any> = (
  state
) => {
  state.status = "loading";
};

export const getSasonByIdRejectedCaseReducer: CaseReducer<SeasonState, any> = (
  state
) => {
  state.status = "failed";
};

export const getSeasonsBySerieIdFulfilledCaseReducer: CaseReducer<
  SeasonState,
  PayloadAction<SeasonDTO[]>
> = (state, action) => {
  state.items = action.payload;
  state.status = "idle";
};

export const getSeasonsBySerieIdPendingCaseReducer: CaseReducer<
  SeasonState,
  any
> = (state) => {
  state.status = "loading";
};

export const getSasonsBySerieIdRejectedCaseReducer: CaseReducer<
  SeasonState,
  any
> = (state) => {
  state.status = "failed";
};

export const createSeasonFulfilledCaseReducer: CaseReducer<
  SeasonState,
  PayloadAction<SeasonDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const createSeasonPendingCaseReducer: CaseReducer<SeasonState, any> = (
  state
) => {
  state.status = "loading";
};

export const createSeasonRejectedCaseReducer: CaseReducer<SeasonState, any> = (
  state
) => {
  state.status = "failed";
};

export const addSeasonReducer: CaseReducer<
  SeasonState,
  PayloadAction<SeasonDTO>
> = (state, action) => {
  state.items.push(action.payload);
};
