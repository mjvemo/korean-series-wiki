import type { ReduxState } from "@/lib/redux";

export const selectActors = (state: ReduxState) => state.actors.items;

export const selectActiveActor = (state: ReduxState) => state.actors.active;

export const selectActorRequestStatus = (state: ReduxState) =>
  state.actors.status;

export const selectByEntityIdActors = (state: ReduxState) =>
  state.actors.byEntityIdItems;
