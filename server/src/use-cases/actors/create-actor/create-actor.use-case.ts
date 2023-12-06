import defaultActorRepo, {
  ActorRepository,
} from "../../../domain/actor/repositories/actor.repository";
import defaultSerieRepo, {
  SerieRepository,
} from "../../../domain/serie/repositories/serie.repository";
import { Actor } from "../../../domain/actor/actor";
import { ActorDTO } from "../../../dtos/actor.dto";
import { CreateActorRequestDTO } from "./create-actor-request.dto";

export class CreateActorUseCase {
  constructor(
    private actorsRepo: ActorRepository = defaultActorRepo,
    private seriesRepo: SerieRepository = defaultSerieRepo
    ) {}

  async create(request: CreateActorRequestDTO): Promise<ActorDTO> {
    const actor = Actor.create(request);

    await this.actorsRepo.save(actor);

    for (const serieId of actor.series) {
      const serie = await this.seriesRepo.findById(serieId);

      if (serie) {
        serie.addActor(actor.id);

        await this.seriesRepo.update(serie);
      }
    }

    return actor.serialize();
  }
}

const useCase = new CreateActorUseCase();

export default useCase;
