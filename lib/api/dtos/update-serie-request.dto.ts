export interface UpdateSerieRequestDTO {
  name?: string;
  rate?: number;
  pg?: string;
  image?: string;
  directedBy?: string;
  genre?: string;
  studio?: string;
  description?: string;
  seasons?: string[];
  cast?: string[];
  news?: string[];
  awards?: string[];
  nominations?: string[];
  releasedAt?: number;
}
