import { isNil } from "lodash";
import defaultRepo, {
  ActorRepository,
} from "../../../domain/actor/repositories/actor.repository";
import { ActorDTO } from "../../../dtos/actor.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetActorUseCase {
  constructor(private repo: ActorRepository = defaultRepo) {}

  async get(id: string): Promise<ActorDTO> {
    const actor = await this.repo.findById(id);

    if (isNil(actor)) {
      throw new ResourceNotFoundError(`Actor with id ${id} not found`, id);
    }

    return actor.serialize();
  }
}

const useCase = new GetActorUseCase();

export default useCase;
