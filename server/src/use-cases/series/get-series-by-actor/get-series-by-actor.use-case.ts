import { ActorDTO } from "../../../dtos/actor.dto";
import { SerieDTO } from "../../../dtos/serie.dto";
import { ActorRepository } from "../../../domain/actor/repositories/actor.repository";
import { SerieRepository } from "../../../domain/serie/repositories/serie.repository";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetSeriesByActorIdUseCase {
  constructor(
    private readonly seriesRepo: SerieRepository = new SerieRepository(),
    private readonly actorsRepo: ActorRepository = new ActorRepository()
  ) {}

  async getSeriesByActorId(actorId: string): Promise<SerieDTO[]> {
    const actor = await this.actorsRepo.findById(actorId);

    if (!actor) {
      throw new ResourceNotFoundError(
        `Actor with id ${actorId} not found`,
        actorId
      );
    }

    const series = await this.seriesRepo.findByActor(actor);

    return series.map((actor) => actor.serialize());
  }
}

const useCase = new GetSeriesByActorIdUseCase();

export default useCase;
