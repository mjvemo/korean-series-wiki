import defaultRepo, { ChapterRepository } from "../../../domain/chapter/repositories/chapter.repository";
import { ChapterDTO } from "../../../dtos/chapter.dto";

export interface GetFilters {
  name?: string;
}

export class GetChaptersUseCase {
  constructor(
    private repo: ChapterRepository = defaultRepo,
  ) {}

  async getChapters(filters: GetFilters = {}): Promise<ChapterDTO[]> {
    const response = await this.repo.findAll(filters);

    return response.map(chapter => chapter.serialize());
  }
}

const useCase = new GetChaptersUseCase();

export default useCase;
