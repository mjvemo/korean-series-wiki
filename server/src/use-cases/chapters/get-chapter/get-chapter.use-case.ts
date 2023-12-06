import { isNil } from "lodash";
import defaultRepo, {
  ChapterRepository,
} from "../../../domain/chapter/repositories/chapter.repository";
import { ChapterDTO } from "../../../dtos/chapter.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class GetChapterUseCase {
  constructor(private repo: ChapterRepository = defaultRepo) {}

  async get(id: string): Promise<ChapterDTO> {
    const chapter = await this.repo.findById(id);

    if (isNil(chapter)) {
      throw new ResourceNotFoundError(`Chapter with id ${id} not found`, id);
    }

    return chapter.serialize();
  }
}

const useCase = new GetChapterUseCase();

export default useCase;
