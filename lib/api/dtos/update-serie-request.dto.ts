export interface UpdateSerieRequestDTO {
  name?: string;
  rating?: number;
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
