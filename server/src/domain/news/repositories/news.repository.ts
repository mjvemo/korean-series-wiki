import { isNil } from "lodash";
import NewsEntity, { INews } from "../entities/news.entity";
import { NewsMapper } from "../mappers/news.mapper";
import { News } from "../news";
import { Actor } from "../../actor/actor";
import { ActorMapper } from "../../actor/mappers/actor.mapper";
import { Serie } from "../../serie/serie";
import { SerieMapper } from "../../serie/mappers/serie.mapper";
import { isHydrated } from "../../../utils/mongoose";

export class NewsRepository {
  async save(news: News) {
    const entity = NewsMapper.toEntity(news);
    await entity.save();
  }

  async update(news: News) {
    const entity = NewsMapper.toEntity(news);
    await entity.updateOne(entity);
  }

  async delete(news: News) {
    const entity = NewsMapper.toEntity(news);
    await entity.deleteOne();
  }

  async findById(id: string): Promise<News | undefined> {
    const entity = await NewsEntity.findById(id);

    if (isNil(entity)) {
      return undefined;
    }

    return NewsMapper.toDomain(entity);
  }

  async findAll(): Promise<News[]> {
    const response = await NewsEntity.find();
    return response.map((entity) => NewsMapper.toDomain(entity));
  }

  async findByActor(actor: Actor): Promise<News[]> {
    const actorEntity = ActorMapper.toEntity(actor);

    await actorEntity.populate(["news"]);

    if (isHydrated<INews>(actorEntity.news)) {
      return actorEntity.news.map((news) => NewsMapper.toDomain(news));
    }

    return [];
  }

  async findBySerie(serie: Serie): Promise<News[]> {
    const serieEntity = SerieMapper.toEntity(serie);

    await serieEntity.populate(["news"]);

    if (isHydrated<INews>(serieEntity.news)) {
      return serieEntity.news.map((news) => NewsMapper.toDomain(news));
    }

    return [];
  }
}

const repo = new NewsRepository();

export default repo;
