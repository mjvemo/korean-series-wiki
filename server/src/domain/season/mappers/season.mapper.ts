import { HydratedDocument } from "mongoose";
import { ISeason, SeasonEntity } from "../entities/season.entity";
import { Season } from "../season";

export class SeasonMapper {
  static toEntity(season: Season): HydratedDocument<ISeason> {
    return new SeasonEntity({
      _id: season.id,
      name: season.name,
      serie: season.serie,
      chapters: season.chapters,
      releasedAt: season.releasedAt,
      createdAt: season.createdAt,
      updatedAt: season.updatedAt,
    });
  }

  static toDomain(entity: HydratedDocument<ISeason>): Season {
    return Season.create({
      id: entity._id as unknown as string,
      name: entity.name,
      serie: entity.serie.toString(),
      chapters: (entity.chapters || []).map(it => it.toString()),
      releasedAt: entity.releasedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}
