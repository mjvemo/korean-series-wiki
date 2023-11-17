import defaultRepo, {
  SerieRepository,
} from "../../../domain/serie/repositories/serie.repository";
import { Serie } from "../../../domain/serie/serie";
import { SerieDTO } from "../../../dtos/serie.dto";
import { CreateSerieRequestDTO } from "./create-serie-request.dto";

export class CreateSerieUseCase {
  constructor(private repo: SerieRepository = defaultRepo) {}

  async create(request: CreateSerieRequestDTO): Promise<SerieDTO> {
    const serie = Serie.create(request);

    await this.repo.save(serie);

    return serie.serialize();
  }
}

const useCase = new CreateSerieUseCase();

export default useCase;
