import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { CreateSerieRequestDTO } from "./dtos/create-serie-request.dto";
import { SerieDTO } from "./dtos/serie.dto";
import { NewsDTO } from "./dtos/news.dto";
import { UpdateSerieRequestDTO } from "./dtos/update-serie-request.dto";
import { CreateActorRequestDTO } from "./dtos/create-actor-request.dto";
import { UpdateActorRequestDTO } from "./dtos/update-actor-request.dto";
import { ActorDTO } from "./dtos/actor.dto";
import { CreateAwardsRequestDTO } from "./dtos/create-awards-request-dto";
import { AwardDTO } from "./dtos/award.dto";
import { SeasonDTO } from "@/lib/api/dtos/season.dto";
import { CreateSeasonRequestDTO } from "@/lib/api/dtos/create-seasons-request.dto";
import { CreateNewsRequestDTO } from "@/lib/api/dtos/create-news-request.dto";
import { UpdateNewsRequestDTO } from "@/lib/api/dtos/update-news-request.dto";
import { UpdateAwardsRequestDTO } from "./dtos/update-awards-request-dto";
import { UpdateSeasonRequestDTO } from "./dtos/update-seasons-request-dto";

// import {
//   getAwards,
//   getAwardsbyId,
//   createAwardAsync,
// } from "../redux/slices/awards";
// import { NewsDTO } from "./dtos/awards.dto";

const API_BASE_URL = process.env.API_BASE_URL || "http://127.0.0.1:3002";
export class ApiClient {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.instance(config);
      return response.data as T;
    } catch (error: unknown | AxiosError) {
      if (error instanceof AxiosError) {
        console.error(error.toJSON());
      }

      throw error;
    }
  }

  // =================== Series =======================

  getSeries(): Promise<SerieDTO[]> {
    const url = "/series";
    return this.request({ url });
  }

  createSerie(data: CreateSerieRequestDTO): Promise<SerieDTO> {
    const url = `/series`;
    return this.request({ url, data, method: "POST" });
  }

  getSerie(id: string): Promise<SerieDTO> {
    const url = `/series/${id}`;
    return this.request({ url });
  }

  updateSerieById(id: string, data: UpdateSerieRequestDTO): Promise<SerieDTO> {
    const url = `/series/${id}`;
    return this.request({ url, method: "PATCH", data });
  }

  deleteSerie(id: string): Promise<SerieDTO> {
    const url = `/series/${id}`;
    return this.request({ url, method: "DELETE" });
  }

  // ==================== Actor ====================

  getActors(): Promise<ActorDTO[]> {
    const url = "/actors";
    return this.request({ url });
  }
  updateActorById(id: string, data: UpdateActorRequestDTO): Promise<ActorDTO> {
    const url = `/actors/${id}`;
    return this.request({ url, method: "PATCH", data });
  }

  getActorsBySerieId(id: string): Promise<ActorDTO[]> {
    const url = `/series/${id}/actors`;
    return this.request({ url });
  }

  createActor(data: CreateActorRequestDTO): Promise<ActorDTO> {
    const url = `/actors`;
    return this.request({ url, data, method: "POST" });
  }
  getActor(id: string): Promise<ActorDTO> {
    const url = `/actors/${id}`;
    return this.request({ url });
  }
  updateActor(id: string, data: UpdateActorRequestDTO): Promise<ActorDTO> {
    const url = `/actors/${id}`;
    return this.request({ url, method: "PATCH", data });
  }

  deleteActor(id: string): Promise<ActorDTO> {
    const url = `/actors/${id}`;
    return this.request({ url, method: "DELETE" });
  }

  getSeriesByActorId(id: string): Promise<SerieDTO[]> {
    const url = `/actors/${id}/series`;
    return this.request({ url, method: "GET" });
  }

  // ================== Awards ==================

  getAwards(): Promise<AwardDTO[]> {
    const url = "/awards";
    return this.request({ url });
  }

  getAwardById(id: string): Promise<AwardDTO> {
    const url = `/awards/${id}`;
    return this.request({ url });
  }

  createAward(data: CreateAwardsRequestDTO): Promise<AwardDTO> {
    const url = "/awards";
    return this.request({ url, data, method: "POST" });
  }

  getAwardsByActorId(id: string): Promise<AwardDTO[]> {
    const url = `/actors/${id}/awards`;
    return this.request({ url, method: "GET" });
  }
  getAwardsBySerieIdAsync(id: string): Promise<AwardDTO[]> {
    const url = `/series/${id}/awards`;
    return this.request({ url, method: "GET" });
  }

  updateAwardById(id: string, data: UpdateAwardsRequestDTO): Promise<NewsDTO> {
    const url = `/awards/${id}`;
    return this.request({ url, method: "PATCH", data });
  }

  deleteAward(id: string): Promise<AwardDTO> {
    const url = `/awards/${id}`;
    return this.request({ url, method: "DELETE" });
  }

  // ================== News ==================

  createNews(data: CreateNewsRequestDTO): Promise<NewsDTO> {
    const url = `/news`;
    return this.request({ url, data, method: "POST" });
  }

  getNews(): Promise<NewsDTO[]> {
    const url = "/news";
    return this.request({ url });
  }

  getNewsById(id: string): Promise<NewsDTO> {
    const url = `/news/${id}`;
    return this.request({ url });
  }
  getNewsByActorId(id: string): Promise<NewsDTO[]> {
    const url = `/actors/${id}/news`;
    return this.request({ url });
  }
  getNewsBySerieId(id: string): Promise<NewsDTO[]> {
    const url = `/series/${id}/news`;
    return this.request({ url });
  }

  updateNewsById(id: string, data: UpdateNewsRequestDTO): Promise<NewsDTO> {
    const url = `/news/${id}`;
    return this.request({ url, method: "PATCH", data });
  }

  deleteNews(id: string): Promise<NewsDTO> {
    const url = `/news/${id}`;
    return this.request({ url, method: "DELETE" });
  }

  // ==================== Seasons ===========================

  getSeasons(): Promise<SeasonDTO[]> {
    const url = "/seasons";
    return this.request({ url });
  }

  getSeason(id: string): Promise<SerieDTO> {
    const url = `/seasons/${id}`;
    return this.request({ url });
  }

  getSeasonById(id: string): Promise<SeasonDTO> {
    const url = `/seasons/${id}`;
    return this.request({ url });
  }

  createSeason(data: CreateSeasonRequestDTO): Promise<SeasonDTO> {
    const url = `/seasons`;
    return this.request({ url, data, method: "POST" });
  }

  getSeasonsBySerieId(id: string): Promise<SeasonDTO[]> {
    const url = `/series/${id}/seasons`;
    return this.request({ url });
  }
  updateSeasonById(
    id: string,
    data: UpdateSeasonRequestDTO
  ): Promise<SeasonDTO> {
    const url = `/seasons/${id}`;
    return this.request({ url, method: "PATCH", data });
  }
  deleteSeason(id: string): Promise<SeasonDTO> {
    const url = `/seasons/${id}`;
    return this.request({ url, method: "DELETE" });
  }
}

const client = new ApiClient();

export default client;
