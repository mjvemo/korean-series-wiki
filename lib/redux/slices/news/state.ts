import { NewsDTO } from "@/lib/api/dtos/news.dto";

export interface NewsState {
  items: NewsDTO[];
  active?: NewsDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: NewsState = {
  items: [],
  status: "idle",
};
