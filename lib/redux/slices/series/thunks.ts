import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { CreateSerieRequestDTO } from "@/server/src/use-cases/series/create-serie/create-serie-request.dto";

enum ActionType {
  GET_SERIES = "series/getSeries",
  GET_SERIE_BY_ID = "series/getSerieById",
  CREATE_SERIE = "series/createSerie",
}

// {
//   type: 'series/getSeries',
//   payload: [{}]
// }

export const getSeriesAsync = createAppAsyncThunk(ActionType.GET_SERIES, () => {
  return client.getSeries();
});

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
