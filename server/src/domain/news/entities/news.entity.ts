import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface INews {
  _id: Schema.Types.UUID;
  name: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  createdAt: string;
  updatedAt?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<INews>({
  _id: { type: Schema.Types.UUID, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  publishedAt: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: false },
});

export const NewsEntity = model<INews>("News", schema);

export default NewsEntity;
