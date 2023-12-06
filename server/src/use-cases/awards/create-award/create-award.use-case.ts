import defaultRepo, {
  AwardRepository,
} from "../../../domain/award/repositories/award.repository";
import { Award } from "../../../domain/award/award";
import { AwardDTO } from "../../../dtos/award.dto";
import { CreateAwardRequestDTO } from "./create-award-request.dto";

export class CreateAwardUseCase {
  constructor(private repo: AwardRepository = defaultRepo) {}

  async create(request: CreateAwardRequestDTO): Promise<AwardDTO> {
    const award = Award.create(request);

    await this.repo.save(award);

    return award.serialize();
  }
}

const useCase = new CreateAwardUseCase();

export default useCase;
