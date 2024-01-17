import { AwardDTO } from "../api/dtos/award.dto";
import { ActorDTO } from "../api/dtos/actor.dto";
import { NewsDTO } from "../api/dtos/news.dto";

export interface Serie {
  id: string;
  name: string;
  releasedAt: number;
  description: string;
  url: string;
}

export interface SerieFormPayload {
  imageUrl: string;
  name: string;
  pg: string;
  releasedAt: number;
  rating: number;
  genre: string;
  directedBy: string;
  studio: string;
  description: string;
  seasons: [];
  cast: ActorDTO[];
  news: NewsDTO[];
  awards: AwardDTO[];
  nominations: string[];
}
