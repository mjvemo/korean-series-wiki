import { Application } from "express";
import { Resource } from "../enums";

import getActors from "./actors/get-actors";
import createActor from "./actors/create-actor";
import deleteActor from "./actors/delete-actor";
import getActor from "./actors/get-actor";
import updateActor from "./actors/update-actor";

import getActorsBySerieId from "./actors/get-actors-by-serie-id";

import getAwards from "./awards/get-awards";
import createAward from "./awards/create-award";
import deleteAward from "./awards/delete-award";
import getAward from "./awards/get-award";
import updateAward from "./awards/update-award";

import getChapters from "./chapters/get-chapter";
import createChapter from "./chapters/create-chapter";
import deleteChapter from "./chapters/delete-chapter";
import getChapter from "./chapters/get-chapter";
import updateChapter from "./chapters/update-chapter";

import getAllNews from "./news/get-all-news";
import createNews from "./news/create-news";
import deleteNews from "./news/delete-news";
import getNews from "./news/get-news";
import updateNews from "./news/update-news";

import getSeasons from "./seasons/get-seasons";
import createSeason from "./seasons/create-season";
import deleteSeason from "./seasons/delete-season";
import getSeason from "./seasons/get-season";
import updateSeason from "./seasons/update-season";

import getSeasonsBySerieId from "./seasons/get-seasons-by-serie-id";

import getSeries from "./series/get-series";
import createSerie from "./series/create-serie";
import deleteSerie from "./series/delete-serie";
import getSerie from "./series/get-serie";
import updateSerie from "./series/update-serie";

import getSeriesByActorId from "./series/get-series-by-actor-id";

export function register(app: Application) {
  // actors
  app.get(Resource.actors, getActors);
  app.post(Resource.actors, createActor);
  app.get(Resource.actor, getActor);
  app.patch(Resource.actor, updateActor);
  app.delete(Resource.actor, deleteActor);
  app.get(Resource.actorsBySerieId, getActorsBySerieId);

  // awards
  app.get(Resource.awards, getAwards);
  app.post(Resource.awards, createAward);
  app.delete(Resource.award, deleteAward);
  app.get(Resource.award, getAward);
  app.patch(Resource.award, updateAward);

  // chapters
  app.get(Resource.chapters, getChapters);
  app.post(Resource.chapters, createChapter);
  app.delete(Resource.chapter, deleteChapter);
  app.get(Resource.chapter, getChapter);
  app.patch(Resource.chapter, updateChapter);

  // news
  app.get(Resource.news, getAllNews);
  app.post(Resource.news, createNews);
  app.delete(Resource.new, deleteNews);
  app.get(Resource.new, getNews);
  app.patch(Resource.new, updateNews);

  // seasons
  app.get(Resource.seasons, getSeasons);
  app.post(Resource.seasons, createSeason);
  app.delete(Resource.season, deleteSeason);
  app.get(Resource.season, getSeason);
  app.patch(Resource.season, updateSeason);
  app.get(Resource.seasonsBySerieId, getSeasonsBySerieId);

  // series
  app.get(Resource.series, getSeries);
  app.post(Resource.series, createSerie);
  app.get(Resource.serie, getSerie);
  app.patch(Resource.serie, updateSerie);
  app.delete(Resource.serie, deleteSerie);
  app.get(Resource.seriesByActorId, getSeriesByActorId);
}
