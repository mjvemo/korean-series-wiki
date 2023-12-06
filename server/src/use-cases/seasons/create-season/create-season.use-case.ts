import defaultRepo, {
  SeasonRepository,
} from "../../../domain/season/repositories/season.repository";
import { Season } from "../../../domain/season/season";
import { SeasonDTO } from "../../../dtos/season.dto";
import { CreateSeasonRequestDTO } from "./create-season-request.dto";

export class CreateSeasonUseCase {
  constructor(private repo: SeasonRepository = defaultRepo) {}

  async create(request: CreateSeasonRequestDTO): Promise<SeasonDTO> {
    const season = Season.create(request);

    await this.repo.save(season);

    return season.serialize();
  }
}

const useCase = new CreateSeasonUseCase();

export default useCase;
