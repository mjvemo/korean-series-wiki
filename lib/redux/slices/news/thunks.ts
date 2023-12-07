// import client from "@/lib/api";
// import { createAppAsyncThunk } from "../../createAppAsyncThunk";
// import { CreateNewsRequestDTO } from "@/server/src/use-cases/series/create-serie/create-serie-request.dto";

// enum ActionType {
//   GET_NEWS = "news/getNews",
//   GET_NEWS_BY_ID = "news/getNewsById",
//   CREATE_NEWS = "news/createNews",
// }

// // {
// //   type: 'series/getSeries',
// //   payload: [{}]
// // }

// export const getNewsAsync = createAppAsyncThunk(ActionType.GET_NEWS, () => {
//   return client.getNews();
// });

// // {
// //   type: 'series/getSerieById/[pending | rejected | fulfilled]',
// //   payload: {
// //     id: 'UUID',
// //     ...
// //   }
// // }

// // sync - cosas que pasan en linea -> una despues de la otra
// // async - cosas que pasan al mismo tiempo -> hay que esperar una respuesta

// export const getNewsByIdAsync = createAppAsyncThunk(
//   ActionType.GET_NEWS_BY_ID,
//   (id: string) => {
//     return client.getNews(id);
//   }
// );

// export const createNewsAsync = createAppAsyncThunk(
//   ActionType.CREATE_NEWS,
//   (data: CreateNewsRequestDTO) => {
//     return client.createNews(data);
//   }
// );
