import defaultRepo, {
  NewsRepository,
} from "../../../domain/news/repositories/news.repository";
import { News } from "../../../domain/news/news";
import { NewsDTO } from "../../../dtos/news.dto";
import { CreateNewsRequestDTO } from "./create-news-request.dto";

export class CreateNewsUseCase {
  constructor(private repo: NewsRepository = defaultRepo) {}

  async create(request: CreateNewsRequestDTO): Promise<NewsDTO> {
    const news = News.create(request);

    await this.repo.save(news);

    return news.serialize();
  }
}

const useCase = new CreateNewsUseCase();

export default useCase;
