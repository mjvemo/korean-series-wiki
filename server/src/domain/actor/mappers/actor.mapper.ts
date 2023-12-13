import { HydratedDocument } from "mongoose";
import { IActor, ActorEntity } from "../entities/actor.entity";
import { Actor } from "../actor";

export class ActorMapper {
  static toEntity(actor: Actor): HydratedDocument<IActor> {
    return new ActorEntity({
      _id: actor.id,
      name: actor.name,
      age: actor.age,
      agency: actor.agency,
      imageUrl: actor.imageUrl,
      education: actor.education,
      biography: actor.biography,
      yearsActive: actor.yearsActive,
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
      id: entity._id.toString(),
      name: entity.name,
      age: entity.age,
      agency: entity.agency,
      imageUrl: entity.imageUrl,
      yearsActive: entity.yearsActive,
      education: entity.education,
      biography: entity.biography,
      series: (entity.series || []) as string[],
      news: entity.news || [],
      awards: entity.awards || [],
      nominations: entity.nominations || [],
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}
