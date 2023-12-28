import { ChapterDTO } from "./chapter.dto";

export interface SeasonDTO {
  id: string;
  chapters: ChapterDTO[];
  serie: string;
}
