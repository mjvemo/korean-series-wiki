import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IChapter {
  _id: Schema.Types.UUID;
  season: Schema.Types.UUID;
  name: string;
  description: string;
  thumbnail: string;
  releasedAt: string;
  createdAt: string;
  updatedAt?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IChapter>({
  _id: {type: Schema.Types.UUID, required: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  releasedAt: { type: String, required: true },
  season: {type: Schema.Types.UUID, ref: 'Season'},
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: false },
});

export const ChapterEntity = model<IChapter>("Chapter", schema);

export default ChapterEntity;
