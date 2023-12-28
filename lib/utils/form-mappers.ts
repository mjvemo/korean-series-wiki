import { ActorsFormPayload } from "@/lib/models/actor.model";
import { SerieFormPayload } from "@/lib/models/serie.model";
import { CreateActorRequestDTO } from "@/lib/api/dtos/create-actor-request.dto";
import { CreateSerieRequestDTO } from "../api/dtos/create-serie-request.dto";
import { CreateAwardsRequestDTO } from "@/lib/api/dtos/create-awards-request-dto";
import { AwardFormPayload } from "../models/award.model";
import { SeasonFormPayload } from "../models/season.model";
import { CreateSeasonRequestDTO } from "@/lib/api/dtos/create-seasons-request.dto";

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
    news: [],
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
    releasedAt: values.year || "",
    news: [], // values.news,
    awards: [], // values.awards,
    nominations: [], // values.nominations,
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
