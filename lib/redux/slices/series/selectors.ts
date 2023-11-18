import type { ReduxState } from '@/lib/redux'

export const selectSeries = (state: ReduxState) => state.series.items;
