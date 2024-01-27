import { CaseReducer, type PayloadAction } from "@reduxjs/toolkit";
import { AutoCompleteItem, AutoCompleteState } from "./state";
import { ActorDTO } from "@/lib/api/dtos/actor.dto";
import { SerieDTO } from "@/lib/api/dtos/serie.dto";
import { AwardDTO } from "@/lib/api/dtos/award.dto";
import { NewsDTO } from "@/lib/models/news.model";
import { ChapterDTO } from "@/lib/api/dtos/chapter.dto";

export interface SuggestionsDTO {
  actors: ActorDTO[];
  series: SerieDTO[];
  awards: AwardDTO[];
  news: NewsDTO[];
  //   chapters: ChapterDTO[];
}

export const getSuggestionsFulfilledCaseReducer: CaseReducer<
  AutoCompleteState,
  PayloadAction<SuggestionsDTO>
> = (state, action) => {
  const { payload } = action;
  state.actors = payload.actors.map((actor) => ({
    name: actor.name,
    url: `/actors/${actor.id}`,
  }));
  state.series = payload.series.map((serie) => ({
    name: serie.name,
    url: `/series/${serie.id}`,
  }));
  state.awards = payload.awards.map((award) => ({
    name: award.name,
    url: `/awards/${award.id}`,
  }));
  state.news = payload.news.map((news) => ({
    name: news.name,
    url: `/news/${news.id}`,
  }));
  //   state.chapters = payload.chapters.map((chapter) => ({
  //     name: chapter.name,
  //     url: `/series/${chapter.}`,
  //   }));
};

export const getSuggestionsRejectedCaseReducer: CaseReducer<
  AutoCompleteState,
  any
> = (state) => {
  state.actors = [];
  state.series = [];
  state.awards = [];
  state.news = [];
};

export const getSuggestionsPendingCaseReducer: CaseReducer<
  AutoCompleteState,
  any
> = (state) => {
  state.actors = [];
  state.series = [];
  state.awards = [];
  state.news = [];
};
