import defaultRepo, { SerieRepository } from "../../../domain/serie/repositories/serie.repository";
import { SerieDTO } from "../../../dtos/serie.dto";

export interface GetSeriesFilters {
  genre?: string;
  name?: string;
}

export class GetSeriesUseCase {
  constructor(
    private repo: SerieRepository = defaultRepo,
  ) {}

  async getSeries(filters: GetSeriesFilters): Promise<SerieDTO[]> {
    const response = await this.repo.findAll(filters);

    return response.map(serie => serie.serialize());
  }
}

const useCase = new GetSeriesUseCase();

export default useCase;
