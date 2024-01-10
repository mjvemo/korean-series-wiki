import type { ReduxState } from "@/lib/redux";

export const selectNews = (state: ReduxState) => state.news.items;

export const selectActiveNews = (state: ReduxState) => state.news.active;

export const selectNewsRequestStatus = (state: ReduxState) => state.news.status;

export const selectByEntityIdNews = (state: ReduxState) =>
  state.news.byEntityIdItems;
