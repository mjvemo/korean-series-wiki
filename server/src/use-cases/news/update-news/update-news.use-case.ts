import { isNil } from "lodash";
import defaultRepo, {
  NewsRepository,
} from "../../../domain/news/repositories/news.repository";
import { NewsDTO } from "../../../dtos/news.dto";
import { UpdateNewsRequestDTO } from "./update-news-request.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class UpdateNewsUseCase {
  constructor(private repo: NewsRepository = defaultRepo) {}

  async update(id: string, request: UpdateNewsRequestDTO): Promise<NewsDTO> {
    const news = await this.repo.findById(id);

    if (isNil(news)) {
      throw new ResourceNotFoundError(`News with id ${id} not found`, id);
    }

    news.update(request);

    await this.repo.update(news);

    return news.serialize();
  }
}

const useCase = new UpdateNewsUseCase();

export default useCase;
