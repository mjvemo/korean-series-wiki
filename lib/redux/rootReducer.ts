/* Instruments */
import { counterSlice, seriesSlice } from "./slices";
import { actorsSlice } from "./slices/actors/slice";

export const reducer = {
  counter: counterSlice.reducer,
  series: seriesSlice.reducer,
  actors: actorsSlice.reducer,
};
