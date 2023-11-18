import client from "@/lib/api";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";

export const getSeriesAsync = createAppAsyncThunk("series/getSeries", () => {
  return client.getSeries();
});
