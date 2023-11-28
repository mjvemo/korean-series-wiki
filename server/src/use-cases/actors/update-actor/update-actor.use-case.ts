import { isNil } from "lodash";
import defaultRepo, {
  ActorRepository,
} from "../../../domain/actor/repositories/actor.repository";
import { ActorDTO } from "../../../dtos/actor.dto";
import { UpdateActorRequestDTO } from "./update-actor-request.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class UpdateActorUseCase {
  constructor(private repo: ActorRepository = defaultRepo) {}

  async update(id: string, request: UpdateActorRequestDTO): Promise<ActorDTO> {
    const actor = await this.repo.findById(id);

    if (isNil(actor)) {
      throw new ResourceNotFoundError(`Actor with id ${id} not found`, id);
    }

    actor.update(request);

    await this.repo.update(actor);

    return actor.serialize();
  }
}

const useCase = new UpdateActorUseCase();

export default useCase;
