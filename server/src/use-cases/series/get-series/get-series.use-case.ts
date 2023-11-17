import defaultRepo, { SerieRepository } from "../../../domain/serie/repositories/serie.repository";
import { SerieDTO } from "../../../dtos/serie.dto";

export class GetSeriesUseCase {
  constructor(
    private repo: SerieRepository = defaultRepo,
  ) {}

  async getSeries(): Promise<SerieDTO[]> {
    const response = await this.repo.findAll();

    return response.map(serie => serie.serialize());
  }
}

const useCase = new GetSeriesUseCase();

export default useCase;
