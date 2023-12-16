import defaultSerieRepo, {
  SerieRepository,
} from "../../../domain/serie/repositories/serie.repository";
import defaultActorRepo, {
  ActorRepository,
} from "../../../domain/actor/repositories/actor.repository";
import { Serie } from "../../../domain/serie/serie";
import { SerieDTO } from "../../../dtos/serie.dto";
import { CreateSerieRequestDTO } from "./create-serie-request.dto";

export class CreateSerieUseCase {
  constructor(
    private serieRepo: SerieRepository = defaultSerieRepo,
    private actorRepo: ActorRepository = defaultActorRepo
  ) {}

  async create(request: CreateSerieRequestDTO): Promise<SerieDTO> {
    const serie = Serie.create(request);

    await this.serieRepo.save(serie);

    for (const actorId of serie.cast) {
      const actor = await this.actorRepo.findById(actorId);

      if (actor) {
        actor.addSerie(serie.id);

        console.log(`Adding serie to actor ${serie.id} and ${actorId}`);

        await this.actorRepo.save(actor);
      }
    }

    return serie.serialize();
  }
}

const useCase = new CreateSerieUseCase();

export default useCase;
