import defaultRepo, {
  SeasonRepository,
} from "../../../domain/season/repositories/season.repository";
import { Season } from "../../../domain/season/season";
import { SeasonDTO } from "../../../dtos/season.dto";
import { CreateSeasonRequestDTO } from "./create-season-request.dto";
import defaultSerieRepo, {
  SerieRepository,
} from "../../../domain/serie/repositories/serie.repository";

export class CreateSeasonUseCase {
  constructor(
    private repo: SeasonRepository = defaultRepo,
    private serieRepo: SerieRepository = defaultSerieRepo
  ) {}

  async create(request: CreateSeasonRequestDTO): Promise<SeasonDTO> {
    const season = Season.create(request);

    await this.repo.save(season);

    const serie = await this.serieRepo.findById(season.serie);

    if (serie) {
      serie.addSeason(season.id);

      await this.serieRepo.update(serie);
    }

    return season.serialize();
  }
}

const useCase = new CreateSeasonUseCase();

export default useCase;
