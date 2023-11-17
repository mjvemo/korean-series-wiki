import { isNil } from "lodash";
import defaultRepo, {
  SerieRepository,
} from "../../../domain/serie/repositories/serie.repository";
import { SerieDTO } from "../../../dtos/serie.dto";
import { UpdateSerieRequestDTO } from "./update-serie-request.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class UpdateSerieUseCase {
  constructor(private repo: SerieRepository = defaultRepo) {}

  async update(id: string, request: UpdateSerieRequestDTO): Promise<SerieDTO> {
    const serie = await this.repo.findById(id);

    if (isNil(serie)) {
      throw new ResourceNotFoundError(`Serie with id ${id} not found`, id);
    }

    serie.update(request);

    await this.repo.update(serie);

    return serie.serialize();
  }
}

const useCase = new UpdateSerieUseCase();

export default useCase;
