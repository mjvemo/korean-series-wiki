export interface UpdateSerieRequestDTO {
  name?: string;
  rate?: number;
  pg?: string;
  image?: string;
  directedBy?: string;
  studio?: string;
  seasons?: string[];
  cast?: string[];
  news?: string[];
  awards?: string[];
  nominations?: string[];
  releasedAt?: string;
}
