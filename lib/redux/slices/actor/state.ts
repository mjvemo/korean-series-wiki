import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";

export interface ActorState {
  items: ActorDTO[];
  active?: ActorDTO;
  status: "idle" | "loading" | "failed";
}

export const initialState: ActorDTO = {
  items: [],
  status: "idle",
};
