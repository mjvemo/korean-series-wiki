import { isNil } from "lodash";
import defaultRepo, {
  NewsRepository,
} from "../../../domain/news/repositories/news.repository";
import { NewsDTO } from "../../../dtos/news.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetNewsUseCase {
  constructor(private repo: NewsRepository = defaultRepo) {}

  async get(id: string): Promise<NewsDTO> {
    const news = await this.repo.findById(id);

    if (isNil(news)) {
      throw new ResourceNotFoundError(`News with id ${id} not found`, id);
    }

    return news.serialize();
  }
}

const useCase = new GetNewsUseCase();

export default useCase;
