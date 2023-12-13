export interface CreateSerieRequestDTO {
  name: string;
  rating: number;
  pg: string;
  image: string;
  directedBy: string;
  studio: string;
  genre: string;
  seasons: string[];
  cast: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  releasedAt: string;
}
