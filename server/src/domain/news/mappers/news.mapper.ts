import { HydratedDocument } from "mongoose";
import { INews, NewsEntity } from "../entities/news.entity";
import { News } from "../news";

export class NewsMapper {
  static toEntity(news: News): HydratedDocument<INews> {
    return new NewsEntity({
      _id: news.id,
      name: news.name,
      description: news.description,
      url: news.url,
      thumbnail: news.thumbnail,
      publishedAt: news.publishedAt,
      createdAt: news.createdAt,
      updatedAt: news.updatedAt,
    });
  }

  static toDomain(entity: HydratedDocument<INews>): News {
    return News.create({
      id: entity._id as unknown as string,
      name: entity.name,
      description: entity.description,
      url: entity.url,
      thumbnail: entity.thumbnail,
      publishedAt: entity.publishedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}
