export interface SeasonDTO {
  id: string;
  chapters: { name: string; releaseAt: string; description: string }[];
}
