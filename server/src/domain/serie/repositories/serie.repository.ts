import { isNil } from "lodash";
import SerieEntity from "../entities/serie.entity";
import { SerieMapper } from "../mappers/serie.mapper";
import { Serie } from "../serie";
import { Actor } from "../../actor/actor";
import { IActor } from "../../actor/entities/actor.entity";
import { ActorMapper } from "../../actor/mappers/actor.mapper";
import { isHydrated } from "../../../utils/mongoose";
import { ISerie } from "../entities/serie.entity";

export class SerieRepository {
  async save(serie: Serie) {
    const entity = SerieMapper.toEntity(serie);
    await entity.save();
  }

  async update(serie: Serie) {
    const entity = SerieMapper.toEntity(serie);
    await entity.updateOne(entity);
  }

  async delete(serie: Serie) {
    const entity = SerieMapper.toEntity(serie);
    await entity.deleteOne();
  }

  async findById(id: string): Promise<Serie | undefined> {
    const entity = await SerieEntity.findById(id);

    if (isNil(entity)) {
      return undefined;
    }

    return SerieMapper.toDomain(entity);
  }

  async findAll(): Promise<Serie[]> {
    const response = await SerieEntity.find();
    return response.map((entity) => SerieMapper.toDomain(entity));
  }

  async findByActor(actor: Actor): Promise<Serie[]> {
    const actorEntity = ActorMapper.toEntity(actor);

    await actorEntity.populate(["series"]);

    if (isHydrated<ISerie>(actorEntity.series)) {
      return actorEntity.series.map((serie) => SerieMapper.toDomain(serie));
    }

    return [];
  }
}

const repo = new SerieRepository();

export default repo;
