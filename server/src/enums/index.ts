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

  chapters = "/chapters",
  chapter = "/chapters/:id",

  news = "/news",
  new = "/news/:id",

  seasons = "/seasons",
  season = "/seasons/:id",

  series = "/series",
  serie = "/series/:id",

  seriesByActorId = "/actors/:actorId/series",
}
