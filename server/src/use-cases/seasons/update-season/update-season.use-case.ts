import { isNil } from "lodash";
import defaultRepo, {
  SeasonRepository,
} from "../../../domain/season/repositories/season.repository";
import { SeasonDTO } from "../../../dtos/season.dto";
import { UpdateSeasonRequestDTO } from "./update-season-request.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class UpdateSeasonUseCase {
  constructor(private repo: SeasonRepository = defaultRepo) {}

  async update(id: string, request: UpdateSeasonRequestDTO): Promise<SeasonDTO> {
    const season = await this.repo.findById(id);

    if (isNil(season)) {
      throw new ResourceNotFoundError(`Season with id ${id} not found`, id);
    }

    season.update(request);

    await this.repo.update(season);

    return season.serialize();
  }
}

const useCase = new UpdateSeasonUseCase();

export default useCase;
