import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import {
  actor,
  actor1,
  actor2,
  actor3,
  actor4,
  actor5,
  actor6,
} from "../../../models/actor.model";

export interface ActorState {
  items: ActorDTO[];
  active?: ActorDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: ActorState = {
  items: [],
  // items: [actor, actor1, actor2, actor3, actor4, actor5, actor6],
  status: "idle",
};
