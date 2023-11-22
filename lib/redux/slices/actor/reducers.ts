import { ActorDTO } from "@/lib/api/dtos/actor.dto";

import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { ActorState } from "./state";

export const getActorFulfilledCaseReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO[]>
> = (state, action) => {
  state.items = action.payload;
  state.status = "idle";
};

export const getActorPendingCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "loading";
};

export const getActorByIdFulfilledCaseReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const getActorByIdPendingCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "loading";
};

export const getActorByIdRejectedCaseReducer: CaseReducer<ActorState, any> = (
  state
) => {
  state.status = "failed";
};

export const addActorReducer: CaseReducer<
  ActorState,
  PayloadAction<ActorDTO>
> = (state, action) => {
  state.items.push(action.payload);
};
