import isNil from "lodash/isNil";
import { isHydrated } from "../../../utils/mongoose";
import { Actor } from "../../actor/actor";
import { ActorMapper } from "../../actor/mappers/actor.mapper";
import SerieEntity, { ISerie } from "../entities/serie.entity";
import { SerieMapper } from "../mappers/serie.mapper";
import { Serie } from "../serie";

export interface FindAllParams {
  genre?: string;
  name?: string;
}

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

  async findAll(params?: FindAllParams): Promise<Serie[]> {
    const response = await SerieEntity.find({
      ...(isNil(params?.genre)
        ? {}
        : { genre: { $regex: new RegExp(params!.genre, "i") } }),
      ...(isNil(params?.name)
        ? {}
        : { name: { $regex: new RegExp(params!.name, "i") } }),
    });
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
