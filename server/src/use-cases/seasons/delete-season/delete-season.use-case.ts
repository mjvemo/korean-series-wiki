import { isNil } from "lodash";
import defaultRepo, {
  SeasonRepository,
} from "../../../domain/season/repositories/season.repository";
import { SeasonDTO } from "../../../dtos/season.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class DeleteSeasonUseCase {
  constructor(private repo: SeasonRepository = defaultRepo) {}

  async delete(id: string): Promise<SeasonDTO> {
    const season = await this.repo.findById(id);

    if (isNil(season)) {
      throw new ResourceNotFoundError(`Season with id ${id} not found`, id);
    }

    await this.repo.delete(season);

    return season.serialize();
  }
}

const useCase = new DeleteSeasonUseCase();

export default useCase;
