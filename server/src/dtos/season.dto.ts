export interface SeasonDTO {
  id: string;
  serie: string;
  chapters: {
    name: string;
    description: string;
    releasedAt: string;
  }[];
  name?: string;
  releasedAt?: string;
  createdAt: string;
  updatedAt?: string;
}
