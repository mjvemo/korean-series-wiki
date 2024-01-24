import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IAward {
  _id: Schema.Types.UUID;
  name: string;
  year: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IAward>({
  _id: { type: Schema.Types.UUID, required: true },
  name: { type: String, required: true },
  year: { type: String, required: true },
  image: { type: String },
  category: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: false },
});

export const AwardEntity = model<IAward>("Award", schema);

export default AwardEntity;
