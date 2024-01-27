import defaultRepo, { SeasonRepository } from "../../../domain/season/repositories/season.repository";
import { SeasonDTO } from "../../../dtos/season.dto";

export interface GetFilters {
  name?: string;
}

export class GetSeasonsUseCase {
  constructor(
    private repo: SeasonRepository = defaultRepo,
  ) {}

  async getSeasons(filters: GetFilters = {}): Promise<SeasonDTO[]> {
    const response = await this.repo.findAll(filters);

    return response.map(season => season.serialize());
  }
}

const useCase = new GetSeasonsUseCase();

export default useCase;
