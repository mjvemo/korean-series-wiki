import defaultRepo, { ActorRepository } from "../../../domain/actor/repositories/actor.repository";
import { ActorDTO } from "../../../dtos/actor.dto";

export class GetActorsUseCase {
  constructor(
    private repo: ActorRepository = defaultRepo,
  ) {}

  async getActors(): Promise<ActorDTO[]> {
    const response = await this.repo.findAll();

    return response.map(actor => actor.serialize());
  }
}

const useCase = new GetActorsUseCase();

export default useCase;
