import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { ActorState } from "./state";

export const getActorsFulfilledCaseReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO[]>
> = (state, action) => {
  state.items = action.payload;
  state.status = "idle";
};

export const getActorsPendingCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "loading";
};

export const getActorsByIdFulfilledCaseReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};
export const getActorsRejectedCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "failed";
};

export const getActorsByIdPendingCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "loading";
};

export const getActorsByIdRejectedCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "failed";
};

export const getActorsBySerieIdFullfieldCaseReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO[]>
> = (state, action) => {
  state.byEntityIdItems = action.payload;
  state.status = "idle";
};

export const getActorsBySerieIdPendingCaseReducer: CaseReducer<
  ActorState,
  any
> = (state) => {
  state.status = "loading";
};

export const getActorsBySerieIdRejectedCaseReducer: CaseReducer<
  ActorState,
  any
> = (state) => {
  state.status = "failed";
};

export const addActorReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO>
> = (state, action) => {
  state.items.push(action.payload);
};

export const createActorFulfilledCaseReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const createActorPendingCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "loading";
};

export const createActorRejectedCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "failed";
};

export const updateActorReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO>
> = (state, action) => {
  state.items.push(action.payload);
};

export const deleteActorsByIdFullfieldCaseReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO>
> = (state, action) => {
  state.items = state.items.filter((item) => item.id !== action.payload.id);
  state.status = "idle";
};

export const deleteActorsByIdPendingCaseReducer: CaseReducer<
  ActorState,
  any
> = (state) => {
  state.status = "loading";
};

export const deleteActorsByIdRejectedCaseReducer: CaseReducer<
  ActorState,
  any
> = (state) => {
  state.status = "failed";
};
