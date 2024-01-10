import client from "@/lib/api";
import { CreateAwardsRequestDTO } from "@/lib/api/dtos/create-awards-request-dto";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

enum ActionType {
  CREATE_AWARD = "awards/createAward",
  GET_AWARDS = "awards/getAwards",
  GET_AWARDS_BY_ID = "awards/getAwardsById",
  GET_AWARDS_BY_ACTOR_ID = "awards/getAwardsByActorId",
  GET_AWARDS_BY_SERIE_ID = "awards/getAwardsBySerieId",
}

export const createAwardAsync = createAppAsyncThunk(
  ActionType.CREATE_AWARD,
  (data: CreateAwardsRequestDTO) => {
    return client.createAward(data);
  }
);

export const getAwardsAsync = createAppAsyncThunk(ActionType.GET_AWARDS, () => {
  return client.getAwards();
});

export const getAwardByIdAsync = createAppAsyncThunk(
  ActionType.GET_AWARDS_BY_ID,
  (id: string) => {
    return client.getAwardById(id);
  }
);

export const getAwardsByActorIdAsync = createAppAsyncThunk(
  ActionType.GET_AWARDS_BY_ACTOR_ID,
  (id: string) => {
    return client.getAwardsByActorId(id);
  }
);

export const getAwardsBySerieIdAsync = createAppAsyncThunk(
  ActionType.GET_AWARDS_BY_SERIE_ID,
  (id: string) => {
    return client.getAwardsBySerieIdAsync(id);
  }
);

// export const updateAwardsAsync = createAppAsyncThunk(
//   ActionType.UPDATE_AWARD_BY_ID,
//   (id: string) => {
//     return client.updateAwardById(id);
//   }
// );
