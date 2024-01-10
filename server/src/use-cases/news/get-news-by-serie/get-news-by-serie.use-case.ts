import { ActorDTO } from "../../../dtos/actor.dto";
import { NewsDTO } from "../../../dtos/news.dto";
import { SerieRepository } from "../../../domain/serie/repositories/serie.repository";
import { NewsRepository } from "../../../domain/news/repositories/news.repository";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetNewsBySerieIdUseCase {
  constructor(
    private readonly newsRepo: NewsRepository = new NewsRepository(),
    private readonly seriesRepo: SerieRepository = new SerieRepository()
  ) {}

  async getNewsBySerieId(serieId: string): Promise<NewsDTO[]> {
    const serie = await this.seriesRepo.findById(serieId);

    if (!serie) {
      throw new ResourceNotFoundError(
        `Serie with id ${serieId} not found`,
        serieId
      );
    }

    const news = await this.newsRepo.findBySerie(serie);

    return news.map((award) => award.serialize());
  }
}

const useCase = new GetNewsBySerieIdUseCase();

export default useCase;
