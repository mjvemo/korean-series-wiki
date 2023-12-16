import { ActorDTO } from "../../../dtos/actor.dto";
import { SeasonRepository } from "../../../domain/season/repositories/season.repository";
import { SerieRepository } from "../../../domain/serie/repositories/serie.repository";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetSeasonsBySerieIdUseCase {
  constructor(
    private readonly seriesRepo: SerieRepository = new SerieRepository(),
    private readonly seasonsRepo: SeasonRepository = new SeasonRepository()
  ) {}

  async getActorsBySerieId(serieId: string): Promise<ActorDTO[]> {
    const serie = await this.seriesRepo.findById(serieId);

    if (!serie) {
      throw new ResourceNotFoundError(
        `Serie with id ${serieId} not found`,
        serieId
      );
    }

    const actors = await this.seasonsRepo.findBySerie(serie);

    return actors.map((actor) => actor.serialize());
  }
}

const useCase = new GetSeasonsBySerieIdUseCase();

export default useCase;
