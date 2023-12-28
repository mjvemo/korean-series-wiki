import { ActorDTO } from "../../../dtos/actor.dto";
import { AwardDTO } from "../../../dtos/award.dto";
import { ActorRepository } from "../../../domain/actor/repositories/actor.repository";
import { AwardRepository } from "../../../domain/award/repositories/award.repository";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetAwardsByActorIdUseCase {
  constructor(
    private readonly awardsRepo: AwardRepository = new AwardRepository(),
    private readonly actorsRepo: ActorRepository = new ActorRepository()
  ) {}

  async getAwardsByActorId(actorId: string): Promise<AwardDTO[]> {
    const actor = await this.actorsRepo.findById(actorId);

    if (!actor) {
      throw new ResourceNotFoundError(
        `Actor with id ${actorId} not found`,
        actorId
      );
    }

    const awards = await this.awardsRepo.findByActor(actor);

    return awards.map((award) => award.serialize());
  }
}

const useCase = new GetAwardsByActorIdUseCase();

export default useCase;
