import { isNil } from "lodash";
import defaultRepo, {
  AwardRepository,
} from "../../../domain/award/repositories/award.repository";
import { AwardDTO } from "../../../dtos/award.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class DeleteAwardUseCase {
  constructor(private repo: AwardRepository = defaultRepo) {}

  async delete(id: string): Promise<AwardDTO> {
    const award = await this.repo.findById(id);

    if (isNil(award)) {
      throw new ResourceNotFoundError(`Award with id ${id} not found`, id);
    }

    await this.repo.delete(award);

    return award.serialize();
  }
}

const useCase = new DeleteAwardUseCase();

export default useCase;
