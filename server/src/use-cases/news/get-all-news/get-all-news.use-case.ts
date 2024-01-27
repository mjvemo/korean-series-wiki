import defaultRepo, {
  NewsRepository,
} from "../../../domain/news/repositories/news.repository";
import { NewsDTO } from "../../../dtos/news.dto";

export interface GetFilters {
  name?: string;
}

export class GetAllNewsUseCase {
  constructor(private repo: NewsRepository = defaultRepo) {}

  async getNews(filters: GetFilters = {}): Promise<NewsDTO[]> {
    const response = await this.repo.findAll(filters);

    return response.map((news) => news.serialize());
  }
}

const useCase = new GetAllNewsUseCase();

export default useCase;
