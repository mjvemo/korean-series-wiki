import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { CreateSeasonRequestDTO } from "../../../api/dtos/create-seasons-request.dto";

enum ActionType {
  GET_SEASONS = "seasons/getSeasons",
  GET_SEASON_BY_ID = "seasons/getSeasonsById",
  CREATE_SEASON = "season/createSeason",
  GET_SEASONS_BY_SERIE_ID = "seasons/getSeasonsBySerieId",
}

export const getSeasonsAsync = createAppAsyncThunk(
  ActionType.GET_SEASONS,
  () => {
    return client.getSeasons();
  }
);

export const getSeasonByIdAsync = createAppAsyncThunk(
  ActionType.GET_SEASON_BY_ID,
  (id: string) => {
    return client.getSeason(id);
  }
);

export const createSeasonAsync = createAppAsyncThunk(
  ActionType.CREATE_SEASON,
  (data: CreateSeasonRequestDTO) => {
    return client.createSeason(data);
  }
);

export const getSeasonsBySerieId = createAppAsyncThunk(
  ActionType.GET_SEASONS_BY_SERIE_ID,
  (id: string) => {
    return client.getSeasonsBySerieId(id);
  }
);
