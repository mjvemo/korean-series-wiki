export interface AutoCompleteItem {
  name: string;
  url: string;
}

export interface AutoCompleteState {
  actors: AutoCompleteItem[];
  series: AutoCompleteItem[];
  awards: AutoCompleteItem[];
  news: AutoCompleteItem[];
  chapters: AutoCompleteItem[];
}

export const initialState: AutoCompleteState = {
  actors: [],
  series: [],
  awards: [],
  news: [],
  chapters: [],
};
