import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface ISeason {
  _id: Schema.Types.UUID;
  serie: Schema.Types.UUID;
  chapters: Schema.Types.UUID[];
  name?: string;
  releasedAt?: string;
  createdAt: string;
  updatedAt?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<ISeason>({
  _id: {type: Schema.Types.UUID, required: true},
  serie: [{type: Schema.Types.UUID, ref: 'Serie'}],
  name: { type: String, required: false },
  releasedAt: { type: String, required: false },
  chapters: [{type: Schema.Types.UUID, ref: 'Chapter'}],
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: false },
});

export const SeasonEntity = model<ISeason>("Season", schema);

export default SeasonEntity;
