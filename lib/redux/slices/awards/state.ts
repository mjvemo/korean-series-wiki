import { AwardsDTO } from "@/lib/api/dtos/awards.dto";

export interface AwardState {
  items: AwardsDTO[];
  active?: AwardsDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: AwardsDTO = {
  id: "",
  prizeName: "",
  year: 0,
  category: "",
  result: "",
  items: [],
  status: "idle",
  active: undefined,
};
