import client from "@/lib/api";
import { CreateAwardsRequestDTO } from "@/lib/api/dtos/create-awards-request-dto";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

enum ActionType {
  CREATE_AWARD = "awards/createAward",
  GET_AWARDS = "awards/getAwards",
  GET_AWARDS_BY_ID = "awards/getAwardsById",
}
export const createAwardAsync = createAppAsyncThunk(
  ActionType.CREATE_AWARD,
  (data: CreateAwardsRequestDTO) => {
    return client.createAward(data);
  }
);
export const getAwards = createAppAsyncThunk(ActionType.GET_AWARDS, () => {
  return client.getAwards();
});
export const getAwardsbyId = createAppAsyncThunk(
  ActionType.GET_AWARDS_BY_ID,
  () => {
    return client.getAwards();
  }
);
