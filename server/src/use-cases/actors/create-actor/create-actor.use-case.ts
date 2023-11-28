import defaultRepo, {
  ActorRepository,
} from "../../../domain/actor/repositories/actor.repository";
import { Actor } from "../../../domain/actor/actor";
import { ActorDTO } from "../../../dtos/actor.dto";
import { CreateActorRequestDTO } from "./create-actor-request.dto";

export class CreateActorUseCase {
  constructor(private repo: ActorRepository = defaultRepo) {}

  async create(request: CreateActorRequestDTO): Promise<ActorDTO> {
    const actor = Actor.create(request);

    await this.repo.save(actor);

    return actor.serialize();
  }
}

const useCase = new CreateActorUseCase();

export default useCase;
