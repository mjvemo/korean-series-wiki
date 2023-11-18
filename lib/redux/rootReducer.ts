/* Instruments */
import { counterSlice, seriesSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  series: seriesSlice.reducer,
}
