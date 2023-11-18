import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { SerieState } from "./state";

export const getSeriesFulfilledCaseReducer: CaseReducer<
  SerieState,
  PayloadAction<SerieDTO[]>
> = (state, action) => {
  state.items = action.payload;
  state.status = 'idle';
};

export const getSeriesPendingCaseReducer: CaseReducer<SerieState, any> = (
  state
) => {
  state.status = "loading";
};
