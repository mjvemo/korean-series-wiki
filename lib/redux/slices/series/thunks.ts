import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { CreateSerieRequestDTO } from "../../../api/dtos/create-serie-request.dto";
import { UpdateSerieRequestDTO } from "@/lib/api/dtos/update-serie-request.dto";

enum ActionType {
  GET_SERIES = "series/getSeries",
  GET_SERIE_BY_ID = "series/getSerieById",
  CREATE_SERIE = "series/createSerie",
  GET_SERIES_BY_ACTOR_ID = "series/getSeriesByActorId",
  DELETE_SERIE_BY_ID = "series/deleteSerie",
  UPDATE_SERIE_BY_ID = "series/updateSerieById",
}

// {
//   type: 'series/getSeries',
//   payload: [{}]
// }

interface GetSeriesAsyncParams {
  genre?: string;
}

export const getSeriesAsync = createAppAsyncThunk(
  ActionType.GET_SERIES,
  (params?: GetSeriesAsyncParams) => {
    return client.getSeries(params);
  }
);

// {
//   type: 'series/getSerieById/[pending | rejected | fulfilled]',
//   payload: {
//     id: 'UUID',
//     ...
//   }
// }

// sync - cosas que pasan en linea -> una despues de la otra
// async - cosas que pasan al mismo tiempo -> hay que esperar una respuesta

export const getSerieByIdAsync = createAppAsyncThunk(
  ActionType.GET_SERIE_BY_ID,
  (id: string) => {
    return client.getSerie(id);
  }
);

export const createSerieAsync = createAppAsyncThunk(
  ActionType.CREATE_SERIE,
  (data: CreateSerieRequestDTO) => {
    return client.createSerie(data);
  }
);

export const getSeriesByActorIdAsync = createAppAsyncThunk(
  ActionType.GET_SERIES_BY_ACTOR_ID,
  (id: string) => {
    return client.getSeriesByActorId(id);
  }
);

export const deleteSerieByIdAsync = createAppAsyncThunk(
  ActionType.DELETE_SERIE_BY_ID,
  (id: string) => {
    return client.deleteSerie(id);
  }
);

export const updateSerieAsync = createAppAsyncThunk(
  ActionType.UPDATE_SERIE_BY_ID,
  ({ id, data }: { id: string; data: UpdateSerieRequestDTO }) => {
    return client.updateSerieById(id, data);
  }
);
