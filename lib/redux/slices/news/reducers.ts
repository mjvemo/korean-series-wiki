// import { NewsDTO } from "@/lib/api/dtos/news.dto";
// import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
// import { NewsState } from "./state";

// export const getNewsFulfilledCaseReducer: CaseReducer<
//   NewsState,
//   PayloadAction<NewsDTO[]>
// > = (state, action) => {
//   state.items = action.payload;
//   state.status = "idle";
// };

// export const getNewsPendingCaseReducer: CaseReducer<NewsState, any> = (
//   state
// ) => {
//   state.status = "loading";
// };

// export const getNewsByIdFulfilledCaseReducer: CaseReducer<
//   NewsState,
//   PayloadAction<NewsDTO>
// > = (state, action) => {
//   state.active = action.payload;
//   state.status = "idle";
// };

// export const getNewsByIdPendingCaseReducer: CaseReducer<NewsState, any> = (
//   state
// ) => {
//   state.status = "loading";
// };

// export const getNewsByIdRejectedCaseReducer: CaseReducer<NewsState, any> = (
//   state
// ) => {
//   state.status = "failed";
// };

// export const addNewsReducer: CaseReducer<NewsState, PayloadAction<NewsDTO>> = (
//   state,
//   action
// ) => {
//   state.items.push(action.payload);
// };
