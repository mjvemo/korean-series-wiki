import { ActorsFormPayload } from "@/lib/models/actor.model";
import { SerieFormPayload } from "@/lib/models/serie.model";
import { CreateActorRequestDTO } from "@/lib/api/dtos/create-actor-request.dto";
import { UpdateActorRequestDTO } from "@/lib/api/dtos/update-actor-request.dto";
import { CreateSerieRequestDTO } from "../api/dtos/create-serie-request.dto";
import { CreateAwardsRequestDTO } from "@/lib/api/dtos/create-awards-request-dto";
import { AwardFormPayload } from "../models/award.model";
import { SeasonFormPayload } from "../models/season.model";
import { CreateSeasonRequestDTO } from "@/lib/api/dtos/create-seasons-request.dto";
import { NewsFormPayload } from "../models/news.model";
import { CreateNewsRequestDTO } from "../api/dtos/create-news-request.dto";
import { UpdateSerieRequestDTO } from "../api/dtos/update-serie-request.dto";

export function actorFormToCreateActorRequest(
  values: ActorsFormPayload
): CreateActorRequestDTO {
  return {
    imageUrl: values.imageUrl,
    name: values.name,
    age: values.age || 0,
    education: values.education,
    agency: values.agency,
    yearsActive: values.yearsActive || "",
    biography: values.about,
    series: values.series.map(({ id }) => id),
    news: values.news.map(({ id }) => id),
    awards: values.awards.map(({ id }) => id),
    nominations: values.nominations,
  };
}

export function actorFormToUpdateActorRequest(
  values: ActorsFormPayload
): UpdateActorRequestDTO {
  return {
    imageUrl: values.imageUrl,
    name: values.name,
    age: values.age || 0,
    education: values.education,
    agency: values.agency,
    yearsActive: values.yearsActive || "",
    biography: values.about,
    series: values.series.map(({ id }) => id),
    news: values.news.map(({ id }) => id),
    awards: values.awards.map(({ id }) => id),
    nominations: values.nominations,
  };
}

export function serieFormToCreateSerieRequest(
  values: SerieFormPayload
): CreateSerieRequestDTO {
  return {
    image: values.imageUrl,
    name: values.name,
    rating: values.rate || 0,
    pg: values.pg,
    genre: values.genre,
    studio: values.studio,
    directedBy: values.directedBy,
    description: values.description,
    seasons: values.seasons,
    cast: values.cast.map(({ id }) => id),
    releasedAt: values.releasedAt || 0,
    news: values.news.map(({ id }) => id), // values.news,
    awards: values.awards.map(({ id }) => id), // values.awards,
    nominations: [], // values.nominations,
  };
}
export function serieFormToUpdateSerieRequest(
  values: SerieFormPayload
): UpdateSerieRequestDTO {
  return {
    image: values.imageUrl,
    name: values.name,
    rate: values.rate || 0,
    pg: values.pg,
    genre: values.genre,
    studio: values.studio,
    directedBy: values.directedBy,
    description: values.description,
    seasons: values.seasons,
    cast: values.cast.map(({ id }) => id),
    releasedAt: values.releasedAt || 0,
    news: values.news.map(({ id }) => id),
    awards: values.awards.map(({ id }) => id),
    nominations: [],
  };
}

export function awardFormToCreateAwardRequest(
  values: AwardFormPayload
): CreateAwardsRequestDTO {
  return {
    year: values.year || 0,
    category: values.category,
    name: values.name,
  };
}

export function seasonFromtoCreateSeasonRequest(
  serieId: string,
  values: SeasonFormPayload
): CreateSeasonRequestDTO {
  return {
    serie: serieId,
    chapters: values.chapters.map((chapter) => ({
      name: chapter.name,
      description: chapter.description,
      releasedAt: chapter.releaseAt,
    })),
  };
}

export function newsFormToCreateNewsRequest(
  values: NewsFormPayload
): CreateNewsRequestDTO {
  return {
    name: values.name,
    description: values.description,
    thumbnail: values.thumbnail,
    publishedAt: values.publishedAt,
  };
}
