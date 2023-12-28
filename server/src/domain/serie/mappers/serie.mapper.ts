import { HydratedDocument } from "mongoose";
import { ISerie, SerieEntity } from "../entities/serie.entity";
import { Serie } from "../serie";

export class SerieMapper {
  static toEntity(serie: Serie): HydratedDocument<ISerie> {
    return new SerieEntity({
      _id: serie.id,
      name: serie.name,
      rating: serie.rating,
      seasons: serie.seasons,
      cast: serie.cast,
      pg: serie.pg,
      image: serie.image,
      description: serie.description,
      genre: serie.genre,
      directedBy: serie.directedBy,
      studio: serie.studio,
      news: serie.news,
      awards: serie.awards,
      nominations: serie.nominations,
      releasedAt: serie.releasedAt,
      createdAt: serie.createdAt,
      updatedAt: serie.updatedAt,
    });
  }

  static toDomain(entity: HydratedDocument<ISerie>): Serie {
    return Serie.create({
      id: entity._id as unknown as string,
      name: entity.name,
      rating: entity.rating,
      seasons: (entity.seasons || []) as string[],
      cast: (entity.cast || []) as string[],
      pg: entity.pg,
      image: entity.image,
      description: entity.description,
      genre: entity.genre,
      directedBy: entity.directedBy,
      studio: entity.studio,
      news: entity.news || [],
      awards: entity.awards || [],
      nominations: entity.nominations || [],
      releasedAt: entity.releasedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}
