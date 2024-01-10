import type { ReduxState } from "@/lib/redux";

export const selectAwards = (state: ReduxState) => state.awards.items;

export const selectActiveAward = (state: ReduxState) => state.awards.active;

export const selectAwardsRequestStatus = (state: ReduxState) =>
  state.awards.status;

export const selectByEntityIdAwards = (state: ReduxState) =>
  state.news.byEntityIdItems;
