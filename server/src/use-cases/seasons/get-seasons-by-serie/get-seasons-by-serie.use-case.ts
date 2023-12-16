import { SeasonDTO } from "../../../dtos/season.dto";
import { SeasonRepository } from "../../../domain/season/repositories/season.repository";
import { SerieRepository } from "../../../domain/serie/repositories/serie.repository";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetSeasonsBySerieIdUseCase {
  constructor(
    private readonly seriesRepo: SerieRepository = new SerieRepository(),
    private readonly seasonsRepo: SeasonRepository = new SeasonRepository()
  ) {}

  async getSeasonsBySerieId(serieId: string): Promise<SeasonDTO[]> {
    const serie = await this.seriesRepo.findById(serieId);

    if (!serie) {
      throw new ResourceNotFoundError(
        `Serie with id ${serieId} not found`,
        serieId
      );
    }

    const seasons = await this.seasonsRepo.findBySerie(serie);

    return seasons.map((season) => season.serialize());
  }
}

const useCase = new GetSeasonsBySerieIdUseCase();

export default useCase;
