import { HydratedDocument, Schema, model } from "mongoose";
import { IActor } from "../../actor/entities/actor.entity";
import { IAward } from "../../award/entities/award.entity";
import { ISeason } from "../../season/entities/season.entity";
import { INews } from "../../news/entities/news.entity";

// 1. Create an interface representing a document in MongoDB.
export interface ISerie {
  _id: Schema.Types.UUID;
  name: string;
  rating: number;
  pg: string;
  genre: string;
  directedBy: string;
  studio: string;
  image: string;
  description: string;
  seasons: string[] | HydratedDocument<ISeason>[];
  cast: string[] | HydratedDocument<IActor>[];
  news: string[] | HydratedDocument<INews>[];
  awards: string[] | HydratedDocument<IAward>[];
  nominations: string[];
  releasedAt: string;
  createdAt: string;
  updatedAt?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ISerie>({
  _id: { type: Schema.Types.UUID, required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  pg: { type: String, required: true },
  directedBy: { type: String, required: true },
  studio: { type: String, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  seasons: [{ type: Schema.Types.UUID, ref: "Season" }],
  cast: [{ type: Schema.Types.UUID, ref: "Actor" }],
  news: [{ type: Schema.Types.UUID, ref: "News" }],
  awards: [{ type: Schema.Types.UUID, ref: "Award" }],
  nominations: [{ type: Schema.Types.UUID, ref: "Award" }],
  releasedAt: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: false },
});

export const SerieEntity = model<ISerie>("Serie", schema);

export default SerieEntity;
