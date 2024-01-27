import { isHydrated } from "../../../utils/mongoose";
import { isNil } from "lodash";
import { SerieMapper } from "../../serie/mappers/serie.mapper";
import { Serie } from "../../serie/serie";
import { Actor } from "../actor";
import ActorEntity, { IActor } from "../entities/actor.entity";
import { ActorMapper } from "../mappers/actor.mapper";

export interface FindAllParams {
  name?: string;
}

export class ActorRepository {
  async save(actor: Actor) {
    const entity = ActorMapper.toEntity(actor);
    await entity.save();
  }

  async update(actor: Actor) {
    const entity = ActorMapper.toEntity(actor);
    await entity.updateOne(entity);
  }

  async delete(actor: Actor) {
    const entity = ActorMapper.toEntity(actor);
    await entity.deleteOne();
  }

  async findById(id: string): Promise<Actor | undefined> {
    const entity = await ActorEntity.findById(id);

    if (isNil(entity)) {
      return undefined;
    }

    return ActorMapper.toDomain(entity);
  }

  async findAll(params: FindAllParams): Promise<Actor[]> {
    const response = await ActorEntity.find({
      ...(isNil(params?.name)
        ? {}
        : { name: { $regex: new RegExp(params!.name, "i") } }),
    });
    return response.map((entity) => ActorMapper.toDomain(entity));
  }

  async findBySerie(serie: Serie): Promise<Actor[]> {
    const serieEntity = SerieMapper.toEntity(serie);

    await serieEntity.populate(["cast"]);

    if (isHydrated<IActor>(serieEntity.cast)) {
      return serieEntity.cast.map((actor) => ActorMapper.toDomain(actor));
    }

    return [];
  }
}

const repo = new ActorRepository();

export default repo;
