import { ActorDTO } from "../../../dtos/actor.dto";
import { NewsDTO } from "../../../dtos/news.dto";
import { ActorRepository } from "../../../domain/actor/repositories/actor.repository";
import { NewsRepository } from "../../../domain/news/repositories/news.repository";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetNewsByActorIdUseCase {
  constructor(
    private readonly newsRepo: NewsRepository = new NewsRepository(),
    private readonly actorsRepo: ActorRepository = new ActorRepository()
  ) {}

  async getNewsByActorId(actorId: string): Promise<NewsDTO[]> {
    const actor = await this.actorsRepo.findById(actorId);

    if (!actor) {
      throw new ResourceNotFoundError(
        `Actor with id ${actorId} not found`,
        actorId
      );
    }

    const news = await this.newsRepo.findByActor(actor);

    return news.map((award) => award.serialize());
  }
}

const useCase = new GetNewsByActorIdUseCase();

export default useCase;
