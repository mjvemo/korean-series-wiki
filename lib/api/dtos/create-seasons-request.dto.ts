export interface CreateSeasonRequestDTO {
  serie: string;
  chapters: {
    name: string;
    releasedAt: string;
    description: string;
  }[];
}
