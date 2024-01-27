import type { ReduxState } from "@/lib/redux";

export const selectSuggestions = (state: ReduxState) => state.autocomplete;
