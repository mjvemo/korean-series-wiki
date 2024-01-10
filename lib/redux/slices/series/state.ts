import { SerieDTO } from "@/lib/api/dtos/serie.dto";

export interface SerieState {
  items: SerieDTO[];
  byEntityIdItems: SerieDTO[];
  active?: SerieDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: SerieState = {
  items: [],
  byEntityIdItems: [],
  status: "idle",
};
