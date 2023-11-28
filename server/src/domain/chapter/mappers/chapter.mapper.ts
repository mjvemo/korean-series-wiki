import { HydratedDocument } from "mongoose";
import { IChapter, ChapterEntity } from "../entities/chapter.entity";
import { Chapter } from "../chapter";

export class ChapterMapper {
  static toEntity(chapter: Chapter): HydratedDocument<IChapter> {
    return new ChapterEntity({
      _id: chapter.id,
      name: chapter.name,
      season: chapter.season,
      description: chapter.description,
      thumbnail: chapter.thumbnail,
      releasedAt: chapter.releasedAt,
      createdAt: chapter.createdAt,
      updatedAt: chapter.updatedAt,
    });
  }

  static toDomain(entity: HydratedDocument<IChapter>): Chapter {
    return Chapter.create({
      id: entity._id as unknown as string,
      name: entity.name,
      season: entity.season.toString(),
      description: entity.description,
      thumbnail: entity.thumbnail,
      releasedAt: entity.releasedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}
