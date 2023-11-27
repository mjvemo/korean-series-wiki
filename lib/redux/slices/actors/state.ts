import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { actor, actor1, actor2 } from "../../../models/actor.model";

export interface ActorState {
  items: ActorDTO[];
  active?: ActorDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: ActorState = {
  items: [actor, actor1, actor2],
  status: "idle",
};
