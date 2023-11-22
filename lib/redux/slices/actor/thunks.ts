import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

export enum ActionType {
  GET_ACTOR = "actor/getActor",
  GET_ACTOR_BY_ID = "actor/getActorById",
}

// {
//   type: 'series/getSeries',
//   payload: [{}]
// }

export const getActorAsync = createAppAsyncThunk(ActionType.GET_ACTOR, () => {
  return client.getActor();
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

export const getActorByIdAsync = createAppAsyncThunk(
  ActionType.GET_ACTOR_BY_ID,
  (id: string) => {
    return client.getActor(id);
  }
);
