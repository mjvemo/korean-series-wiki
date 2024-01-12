export interface UpdateSeasonRequestDTO {
  serie: string;
  chapters: {
    name: string;
    releasedAt: string;
    description: string;
  }[];
}
