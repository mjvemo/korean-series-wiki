import defaultRepo, {
  ChapterRepository,
} from "../../../domain/chapter/repositories/chapter.repository";
import { Chapter } from "../../../domain/chapter/chapter";
import { ChapterDTO } from "../../../dtos/chapter.dto";
import { CreateChapterRequestDTO } from "./create-chapter-request.dto";

export class CreateChapterUseCase {
  constructor(private repo: ChapterRepository = defaultRepo) {}

  async create(request: CreateChapterRequestDTO): Promise<ChapterDTO> {
    const chapter = Chapter.create(request);

    await this.repo.save(chapter);

    return chapter.serialize();
  }
}

const useCase = new CreateChapterUseCase();

export default useCase;
