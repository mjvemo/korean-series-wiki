import { ActorDTO } from '../../../dtos/actor.dto';
import { ActorRepository } from '../../../domain/actor/repositories/actor.repository';
import { SerieRepository} from '../../../domain/serie/repositories/serie.repository';
import { ResourceNotFoundError } from '../../../errors/resource-not-found.error';

export class GetActorsBySerieIdUseCase {
  constructor(
    private readonly seriesRepo: SerieRepository = new SerieRepository(),
    private readonly actorsRepo: ActorRepository = new ActorRepository()
   ) {}

   async getActorsBySerieId(serieId: string): Promise<ActorDTO[]> {
    const serie = await this.seriesRepo.findById(serieId);

    if (!serie) {
      throw new ResourceNotFoundError(`Serie with id ${serieId} not found`, serieId)
    }

    const actors = await this.actorsRepo.findBySerie(serie);

    return actors.map(actor => actor.serialize());
   }
}

const useCase = new GetActorsBySerieIdUseCase();

export default useCase;
