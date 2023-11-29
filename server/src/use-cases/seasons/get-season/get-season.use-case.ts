import { isNil } from "lodash";
import defaultRepo, {
  SeasonRepository,
} from "../../../domain/season/repositories/season.repository";
import { SeasonDTO } from "../../../dtos/season.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetSeasonUseCase {
  constructor(private repo: SeasonRepository = defaultRepo) {}

  async get(id: string): Promise<SeasonDTO> {
    const season = await this.repo.findById(id);

    if (isNil(season)) {
      throw new ResourceNotFoundError(`Season with id ${id} not found`, id);
    }

    return season.serialize();
  }
}

const useCase = new GetSeasonUseCase();

export default useCase;
