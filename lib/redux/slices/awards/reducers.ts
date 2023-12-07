import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { AwardsDTO } from "@/lib/api/dtos/awards.dto";
import { AwardState } from "./state";

export const getAwardsFulfilledCaseReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardsDTO[]>
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
  PayloadAction<AwardsDTO>
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
  PayloadAction<AwardsDTO>
> = (state, action) => {
  state.items.push(action.payload);
};

export const createAwardFulfilledCaseReducer: CaseReducer<
  AwardState,
  PayloadAction<AwardsDTO>
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
