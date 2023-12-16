import { SeasonDTO } from "@/lib/api/dtos/season.dto";

export interface SeasonState {
  items: SeasonDTO[];
  active?: SeasonDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: SeasonState = {
  items: [],
  status: "idle",
};
