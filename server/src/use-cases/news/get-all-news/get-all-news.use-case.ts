import defaultRepo, { NewsRepository } from "../../../domain/news/repositories/news.repository";
import { NewsDTO } from "../../../dtos/news.dto";

export class GetAllNewsUseCase {
  constructor(
    private repo: NewsRepository = defaultRepo,
  ) {}

  async getNews(): Promise<NewsDTO[]> {
    const response = await this.repo.findAll();

    return response.map(news => news.serialize());
  }
}

const useCase = new GetAllNewsUseCase();

export default useCase;
