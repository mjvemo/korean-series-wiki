import { ActorDTO } from "@/lib/api/dtos/actor.dto";

export interface ActorState {
  items: ActorDTO[];
  active?: ActorDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: ActorState = {
  items: [],
  status: "idle",
};
