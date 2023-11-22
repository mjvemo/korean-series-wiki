import { SerieDTO } from "@/lib/api/dtos/serie.dto";

export interface SerieState {
  items: SerieDTO[];
  active?: SerieDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: SerieState = {
  items: [],
  status: "idle",
};
