import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { CreateSerieRequestDTO } from "./dtos/create-serie-request.dto";
import { SerieDTO } from "./dtos/serie.dto";
import { UpdateSerieRequestDTO } from "./dtos/update-serie-request.dto";
import { CreateActorRequestDTO } from "./dtos/create-actor-request.dto";
import { UpdateActorRequestDTO } from "./dtos/update-actor-request.dto";
import { ActorDTO } from "./dtos/actor.dto";
import { CreateAwardsRequestDTO } from "./dtos/create-awards-request-dto";
import createAward from "@/server/src/handlers/awards/create-award";
import {
  getAwards,
  getAwardsbyId,
  createAwardAsync,
} from "../redux/slices/awards";
import { AwardsDTO } from "./dtos/awards.dto";

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

  updateSerie(id: string, data: UpdateSerieRequestDTO): Promise<SerieDTO> {
    const url = `/series/${id}`;
    return this.request({ url, method: "PATCH", data });
  }

  deleteSerie(id: string): Promise<SerieDTO> {
    const url = `/series/${id}`;
    return this.request({ url, method: "DELETE" });
  }

  getActors(): Promise<ActorDTO[]> {
    const url = "/actors";
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
}

//================== Awards ==================

const client = new ApiClient();

export default client;
// function getAwardsById(id: any, string: any) {
//   throw new Error("Function not implemented.");
// }
