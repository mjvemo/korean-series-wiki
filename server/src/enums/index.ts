export enum DomainEntity {
  SERIE = "serie",
  ACTOR = "actor",
  NEW = "new",
  AWARD = "award",
  CHAPTER = "chapter",
}

export enum Resource {
  actors = "/actors",
  actor = "/actors/:id",

  actorsBySerieId = "/series/:serieId/actors",

  awards = "/awards",
  award = "/awards/:id",

  awardsByActorId = "/actors/:actorId/awards",
  awardsBySerieId = "/series/:serieId/awards",

  chapters = "/chapters",
  chapter = "/chapters/:id",

  news = "/news",
  new = "/news/:id",

  newsByActorId = "/actors/:actorId/news",
  newsBySerieId = "/series/:serieId/news",

  seasons = "/seasons",
  season = "/seasons/:id",

  seasonsBySerieId = "/series/:serieId/seasons",

  series = "/series",
  serie = "/series/:id",

  seriesByActorId = "/actors/:actorId/series",
}
