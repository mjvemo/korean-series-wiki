import { HydratedDocument } from "mongoose";
import { IActor, ActorEntity } from "../entities/actor.entity";
import { Actor } from "../actor";

export class ActorMapper {
  static toEntity(actor: Actor): HydratedDocument<IActor> {
    return new ActorEntity({
      _id: actor.id,
      name: actor.name,
      bornAt: actor.bornAt,
      agency: actor.agency,
      url: actor.url,
      series: actor.series,
      news: actor.news,
      awards: actor.awards,
      nominations: actor.nominations,
      createdAt: actor.createdAt,
      updatedAt: actor.updatedAt,
    });
  }

  static toDomain(entity: HydratedDocument<IActor>): Actor {
    return Actor.create({
      id: entity._id as unknown as string,
      name: entity.name,
      bornAt: entity.bornAt,
      agency: entity.agency,
      url: entity.url,
      series: (entity.series || []).map(it => it.toString()),
      news: (entity.news || []).map(it => it.toString()),
      awards: (entity.awards || []).map(it => it.toString()),
      nominations: (entity.nominations || []).map(it => it.toString()),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}
