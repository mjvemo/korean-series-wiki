import { isNil } from "lodash";
import defaultRepo, {
  AwardRepository,
} from "../../../domain/award/repositories/award.repository";
import { AwardDTO } from "../../../dtos/award.dto";
import { UpdateAwardRequestDTO } from "./update-award-request.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class UpdateAwardUseCase {
  constructor(private repo: AwardRepository = defaultRepo) {}

  async update(id: string, request: UpdateAwardRequestDTO): Promise<AwardDTO> {
    const award = await this.repo.findById(id);

    if (isNil(award)) {
      throw new ResourceNotFoundError(`Award with id ${id} not found`, id);
    }

    award.update(request);

    await this.repo.update(award);

    return award.serialize();
  }
}

const useCase = new UpdateAwardUseCase();

export default useCase;
