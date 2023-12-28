import { Schema, model, HydratedDocument } from "mongoose";
import { ISerie } from "../../serie/entities/serie.entity";
import { IAward } from "../../award/entities/award.entity";

// 1. Create an interface representing a document in MongoDB.
export interface IActor {
  _id: Schema.Types.UUID;
  name: string;
  age: number;
  agency: string;
  imageUrl: string;
  yearsActive: string;
  education: string;
  biography: string;
  series: string[] | HydratedDocument<ISerie>[];
  news: string[];
  awards: string[] | HydratedDocument<IAward>[];
  nominations: string[];
  createdAt: string;
  updatedAt?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IActor>({
  _id: { type: Schema.Types.UUID, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  agency: { type: String, required: true },
  imageUrl: { type: String, required: true },
  yearsActive: { type: String, required: true },
  education: { type: String, required: true },
  biography: { type: String, required: true },
  series: [{ type: Schema.Types.UUID, ref: "Serie" }],
  nominations: [{ type: Schema.Types.UUID, ref: "Award" }],
  awards: [{ type: Schema.Types.UUID, ref: "Award" }],
  news: [{ type: Schema.Types.UUID, ref: "News" }],

  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: false },
});

export const ActorEntity = model<IActor>("Actor", schema);

export default ActorEntity;
