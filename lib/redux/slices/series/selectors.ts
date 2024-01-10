import type { ReduxState } from "@/lib/redux";

export const selectSeries = (state: ReduxState) => state.series.items;

export const selectActiveSerie = (state: ReduxState) => state.series.active;

export const selectSerieRequestStatus = (state: ReduxState) =>
  state.series.status;

export const selectByEntityIdSeries = (state: ReduxState) =>
  state.series.byEntityIdItems;
