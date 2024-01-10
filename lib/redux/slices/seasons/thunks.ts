import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { CreateSeasonRequestDTO } from "../../../api/dtos/create-seasons-request.dto";
import { UpdateSeasonRequestDTO } from "@/lib/api/dtos/update-seasons-request-dto";

enum ActionType {
  GET_SEASONS = "seasons/getSeasons",
  GET_SEASON_BY_ID = "seasons/getSeasonsById",
  CREATE_SEASON = "season/createSeason",
  GET_SEASONS_BY_SERIE_ID = "seasons/getSeasonsBySerieId",
  DELETE_SEASON_BY_ID = "seasons/deleteSeasonById",
  UPDATE_SEASON_BY_ID = "seasons/updateSeasonById",
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

export const deleteSeasonByIdAsync = createAppAsyncThunk(
  ActionType.DELETE_SEASON_BY_ID,
  (id: string) => {
    return client.deleteNews(id);
  }
);

export const updateSeasonAsync = createAppAsyncThunk(
  ActionType.UPDATE_SEASON_BY_ID,
  ({ id, data }: { id: string; data: UpdateSeasonRequestDTO }) => {
    return client.updateSeasonById(id, data);
  }
);
