import { isNil } from "lodash";
import defaultRepo, {
  SerieRepository,
} from "../../../domain/serie/repositories/serie.repository";
import { SerieDTO } from "../../../dtos/serie.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class DeleteSerieUseCase {
  constructor(private repo: SerieRepository = defaultRepo) {}

  async delete(id: string): Promise<SerieDTO> {
    const serie = await this.repo.findById(id);

    if (isNil(serie)) {
      throw new ResourceNotFoundError(`Serie with id ${id} not found`, id);
    }

    await this.repo.delete(serie);

    return serie.serialize();
  }
}

const useCase = new DeleteSerieUseCase();

export default useCase;
