import { isNil } from "lodash";
import NewsEntity from "../entities/news.entity";
import { NewsMapper } from "../mappers/news.mapper";
import { News } from "../news";

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
}

const repo = new NewsRepository();

export default repo;
