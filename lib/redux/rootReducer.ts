/* Instruments */
import { counterSlice, seriesSlice } from "./slices";
import { actorsSlice } from "./slices/actors/slice";
import { awardsSlice } from "./slices/awards";

export const reducer = {
  counter: counterSlice.reducer,
  series: seriesSlice.reducer,
  actors: actorsSlice.reducer,
  awards: awardsSlice.reducer,
};
