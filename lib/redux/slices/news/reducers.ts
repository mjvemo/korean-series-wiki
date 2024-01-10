import { NewsDTO } from "@/lib/api/dtos/news.dto";
import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { NewsState } from "./state";

export const getNewsFulfilledCaseReducer: CaseReducer<
  NewsState,
  PayloadAction<NewsDTO[]>
> = (state, action) => {
  state.items = action.payload;
  state.status = "idle";
};

export const getNewsPendingCaseReducer: CaseReducer<NewsState, any> = (
  state
) => {
  state.status = "loading";
};

export const getNewsByIdFulfilledCaseReducer: CaseReducer<
  NewsState,
  PayloadAction<NewsDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const getNewsByIdPendingCaseReducer: CaseReducer<NewsState, any> = (
  state
) => {
  state.status = "loading";
};

export const getNewsByIdRejectedCaseReducer: CaseReducer<NewsState, any> = (
  state
) => {
  state.status = "failed";
};

export const addNewsReducer: CaseReducer<NewsState, PayloadAction<NewsDTO>> = (
  state,
  action
) => {
  state.items.push(action.payload);
};

export const createNewsFulfilledCaseReducer: CaseReducer<
  NewsState,
  PayloadAction<NewsDTO>
> = (state, action) => {
  state.active = action.payload;
  state.status = "idle";
};

export const createNewsPendingCaseReducer: CaseReducer<NewsState, any> = (
  state
) => {
  state.status = "loading";
};

export const createNewsRejectedCaseReducer: CaseReducer<NewsState, any> = (
  state
) => {
  state.status = "failed";
};

export const getNewsByActorIdFulfilledCaseReducer: CaseReducer<
  NewsState,
  PayloadAction<NewsDTO[]>
> = (state, action) => {
  state.byEntityIdItems = action.payload;
  state.status = "idle";
};

export const getNewsByActorIdPendingCaseReducer: CaseReducer<NewsState, any> = (
  state
) => {
  state.status = "loading";
};

export const getNewsByActorIdRejectedCaseReducer: CaseReducer<
  NewsState,
  any
> = (state) => {
  state.status = "failed";
};

export const getNewsBySerieIdFullfieldCaseReducer: CaseReducer<
  NewsState,
  PayloadAction<NewsDTO[]>
> = (state, action) => {
  state.byEntityIdItems = action.payload;
  state.status = "idle";
};

export const getNewsBySerieIdPendingCaseReducer: CaseReducer<NewsState, any> = (
  state
) => {
  state.status = "loading";
};

export const getNewsBySerieIdRejectedCaseReducer: CaseReducer<
  NewsState,
  any
> = (state) => {
  state.status = "failed";
};

// export const deleteNewsReducer: CaseReducer<
//   NewsState,
//   PayloadAction<NewsDTO>
// > = (state, action) => ({
//   ...state,
//   items: state.items.filter((item) => item !== action.payload),
// });
