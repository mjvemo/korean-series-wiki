import defaultRepo, { ChapterRepository } from "../../../domain/chapter/repositories/chapter.repository";
import { ChapterDTO } from "../../../dtos/chapter.dto";

export class GetChaptersUseCase {
  constructor(
    private repo: ChapterRepository = defaultRepo,
  ) {}

  async getChapters(): Promise<ChapterDTO[]> {
    const response = await this.repo.findAll();

    return response.map(chapter => chapter.serialize());
  }
}

const useCase = new GetChaptersUseCase();

export default useCase;
