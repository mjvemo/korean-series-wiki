import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { getAwardsAsync } from "../..";

enum ActionType {
  AUTOCOMPLETE_GET_SUGGESTIONS = "autocomplete/getSuggestions",
}

export const getEntitySuggestions = createAppAsyncThunk(
  ActionType.AUTOCOMPLETE_GET_SUGGESTIONS,
  async (search: string) => {
    const filters = { name: search };
    const [actors, series, awards, news] = await Promise.all([
      client.getActors(filters),
      client.getSeries(filters),
      client.getAwards(filters),
      client.getNews(filters),
      //   client.getChapters(filters),
    ]);
    return { actors, series, awards, news };
  }
);
