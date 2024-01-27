import defaultRepo, { AwardRepository } from "../../../domain/award/repositories/award.repository";
import { AwardDTO } from "../../../dtos/award.dto";

export interface GetFilters {
  name?: string;
}

export class GetAwardsUseCase {
  constructor(
    private repo: AwardRepository = defaultRepo,
  ) {}

  async getAwards(filters: GetFilters = {}): Promise<AwardDTO[]> {
    const response = await this.repo.findAll(filters);

    return response.map(award => award.serialize());
  }
}

const useCase = new GetAwardsUseCase();

export default useCase;
