/* Instruments */
import { counterSlice, seriesSlice } from "./slices";
import { actorsSlice } from "./slices/actors/slice";
import { awardsSlice } from "./slices/awards";
import { newsSlice } from "./slices/news";
import { seasonsSlice } from "./slices/seasons";

export const reducer = {
  counter: counterSlice.reducer,
  series: seriesSlice.reducer,
  actors: actorsSlice.reducer,
  awards: awardsSlice.reducer,
  seasons: seasonsSlice.reducer,
  news: newsSlice.reducer,
};
