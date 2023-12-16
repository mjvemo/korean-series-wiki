export interface SeasonFormPayload {
  chapters: ChapterFormPayload[];
}

export interface ChapterFormPayload {
  name: string;
  description: string;
  releaseAt: string;
}