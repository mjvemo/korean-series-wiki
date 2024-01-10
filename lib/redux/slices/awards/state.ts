import { AwardDTO } from "@/lib/api/dtos/award.dto";

export interface AwardState {
  items: AwardDTO[];
  byEntityIdItems: AwardDTO[];
  active?: AwardDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: AwardState = {
  items: [],
  byEntityIdItems: [],
  status: "idle",
};
