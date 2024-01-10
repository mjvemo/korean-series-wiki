import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { CreateNewsRequestDTO } from "@/lib/api/dtos/create-news-request.dto";
import { UpdateNewsRequestDTO } from "@/lib/api/dtos/update-news-request.dto";

enum ActionType {
  GET_NEWS = "news/getNews",
  GET_NEWS_BY_ID = "news/getNewsById",
  CREATE_NEWS = "news/createNews",
  GET_NEWS_BY_ACTOR_ID = "news/getNewsByActorId",
  GET_NEWS_BY_SERIE_ID = "news/getNewsBySerieId",
  DELETE_NEWS_BY_ID = "news/deleteNewsById",
  UPDATE_NEWS_BY_ID = "news/updateNews",
}

// {
//   type: 'series/getSeries',
//   payload: [{}]
// }

export const getNewsAsync = createAppAsyncThunk(ActionType.GET_NEWS, () => {
  return client.getNews();
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

export const getNewsByIdAsync = createAppAsyncThunk(
  ActionType.GET_NEWS_BY_ID,
  (id: string) => {
    return client.getNewsById(id);
  }
);

export const createNewsAsync = createAppAsyncThunk(
  ActionType.CREATE_NEWS,
  (data: CreateNewsRequestDTO) => {
    return client.createNews(data);
  }
);

export const getNewsByActorIdAsync = createAppAsyncThunk(
  ActionType.GET_NEWS_BY_ACTOR_ID,
  (id: string) => {
    return client.getNewsByActorId(id);
  }
);

export const getNewsBySerieIdAsync = createAppAsyncThunk(
  ActionType.GET_NEWS_BY_SERIE_ID,
  (id: string) => {
    return client.getNewsBySerieId(id);
  }
);

export const deleteNewsByIdAsync = createAppAsyncThunk(
  ActionType.DELETE_NEWS_BY_ID,
  (id: string) => {
    return client.deleteNews(id);
  }
);

export const updateNewsAsync = createAppAsyncThunk(
  ActionType.UPDATE_NEWS_BY_ID,
  ({ id, data }: { id: string; data: UpdateNewsRequestDTO }) => {
    return client.updateNewsById(id, data);
  }
);
