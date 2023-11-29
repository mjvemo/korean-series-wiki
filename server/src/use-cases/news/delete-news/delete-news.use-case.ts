import { isNil } from "lodash";
import defaultRepo, {
  NewsRepository,
} from "../../../domain/news/repositories/news.repository";
import { NewsDTO } from "../../../dtos/news.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class DeleteNewsUseCase {
  constructor(private repo: NewsRepository = defaultRepo) {}

  async delete(id: string): Promise<NewsDTO> {
    const news = await this.repo.findById(id);

    if (isNil(news)) {
      throw new ResourceNotFoundError(`News with id ${id} not found`, id);
    }

    await this.repo.delete(news);

    return news.serialize();
  }
}

const useCase = new DeleteNewsUseCase();

export default useCase;
