import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { AwardState } from "./state";
import { AwardDTO } from "@/lib/api/dtos/award.dto";

export const getAwardsFulfilledCaseReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardDTO[]>
> = (state, action) => {
  state.items = action.payload;
  state.status = "idle";
};

export const getAwardsPendingCaseReducer: CaseReducer<AwardState, any> = (
  state
) => {
  state.status = "loading";
};

export const getAwardsRejectedCaseReducer: CaseReducer<AwardState, any> = (
  state
) => {
  state.status = "failed";
};

export const getAwardsByIdFulfilledCaseReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const getAwardsByIdPendingCaseReducer: CaseReducer<AwardState, any> = (
  state
) => {
  state.status = "loading";
};

export const getAwardsByIdRejectedCaseReducer: CaseReducer<AwardState, any> = (
  state
) => {
  state.status = "failed";
};

export const addAwardReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardDTO>
> = (state, action) => {
  state.items.push(action.payload);
};

export const createAwardFulfilledCaseReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const createAwardPendingCaseReducer: CaseReducer<AwardState, any> = (
  state
) => {
  state.status = "loading";
};

export const createAwardRejectedCaseReducer: CaseReducer<AwardState, any> = (
  state
) => {
  state.status = "failed";
};

export const getAwardsByActorIdFullfieldCaseReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardDTO[]>
> = (state, action) => {
  state.byEntityIdItems = action.payload;
  state.status = "idle";
};

export const getAwardsByActorIdPendingCaseReducer: CaseReducer<
  AwardState,
  any
> = (state) => {
  state.status = "loading";
};

export const getAwardsByActorIdRejectedCaseReducer: CaseReducer<
  AwardState,
  any
> = (state) => {
  state.status = "failed";
};

export const getAwardsBySerieIdFullfieldCaseReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardDTO[]>
> = (state, action) => {
  state.byEntityIdItems = action.payload;
  state.status = "idle";
};

export const getAwardsBySerieIdPendingCaseReducer: CaseReducer<
  AwardState,
  any
> = (state) => {
  state.status = "loading";
};

export const getAwardsBySerieIdRejectedCaseReducer: CaseReducer<
  AwardState,
  any
> = (state) => {
  state.status = "failed";
};

export const updateAwardReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardDTO>
> = (state, action) => {
  state.items.push(action.payload);
};

export const deleteAwardByIdFullfieldCaseReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardDTO>
> = (state, action) => {
  state.items = state.items.filter((item) => item.id !== action.payload.id);
  state.status = "idle";
};

export const deleteAwardByIdPendingCaseReducer: CaseReducer<AwardState, any> = (
  state
) => {
  state.status = "loading";
};

export const deleteAwardsByIdRejectedCaseReducer: CaseReducer<
  AwardState,
  any
> = (state) => {
  state.status = "failed";
};
