import type { ReduxState } from "@/lib/redux";

export const selectSeasons = (state: ReduxState) => state.seasons.items;

export const selectActiveSeason = (state: ReduxState) => state.seasons.active;

export const selectSeasonRequestStatus = (state: ReduxState) =>
  state.seasons.status;

export const selectByEntityIdSeasons = (state: ReduxState) =>
  state.news.byEntityIdItems;
