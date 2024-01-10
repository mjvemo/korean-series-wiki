import { ActorDTO } from "../../../dtos/actor.dto";
import { AwardDTO } from "../../../dtos/award.dto";
import { SerieRepository } from "../../../domain/serie/repositories/serie.repository";
import { AwardRepository } from "../../../domain/award/repositories/award.repository";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetAwardsBySerieIdUseCase {
  constructor(
    private readonly awardsRepo: AwardRepository = new AwardRepository(),
    private readonly seriesRepo: SerieRepository = new SerieRepository()
  ) {}

  async getAwardsBySerieId(serieId: string): Promise<AwardDTO[]> {
    const serie = await this.seriesRepo.findById(serieId);

    if (!serie) {
      throw new ResourceNotFoundError(
        `Serie with id ${serieId} not found`,
        serieId
      );
    }

    const awards = await this.awardsRepo.findBySerie(serie);

    return awards.map((award) => award.serialize());
  }
}

const useCase = new GetAwardsBySerieIdUseCase();

export default useCase;
