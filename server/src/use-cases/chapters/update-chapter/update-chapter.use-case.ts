import { isNil } from "lodash";
import defaultRepo, {
  ChapterRepository,
} from "../../../domain/chapter/repositories/chapter.repository";
import { ChapterDTO } from "../../../dtos/chapter.dto";
import { UpdateChapterRequestDTO } from "./update-chapter-request.dto";
import { ResourceNotFoundError } from "../../../errors/resource-not-found.error";

export class UpdateChapterUseCase {
  constructor(private repo: ChapterRepository = defaultRepo) {}

  async update(id: string, request: UpdateChapterRequestDTO): Promise<ChapterDTO> {
    const chapter = await this.repo.findById(id);

    if (isNil(chapter)) {
      throw new ResourceNotFoundError(`Chapter with id ${id} not found`, id);
    }

    chapter.update(request);

    await this.repo.update(chapter);

    return chapter.serialize();
  }
}

const useCase = new UpdateChapterUseCase();

export default useCase;
