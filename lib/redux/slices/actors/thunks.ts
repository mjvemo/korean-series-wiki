import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

export enum ActionType {
  GET_ACTORS = "actors/getActors",
  GET_ACTOR_BY_ID = "actors/getActorById",
}

// {
//   type: 'series/getSeries',
//   payload: [{}]
// }

export const getActorsAsync = createAppAsyncThunk(ActionType.GET_ACTORS, () => {
  return client.getActors();
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

export const getActorsByIdAsync = createAppAsyncThunk(
  ActionType.GET_ACTOR_BY_ID,
  (id: string) => {
    return client.getActor(id);
  }
);
