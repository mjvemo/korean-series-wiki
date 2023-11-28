import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IActor {
  _id: Schema.Types.UUID;
  name: string;
  bornAt: string;
  agency: string;
  url: string;
  series: Schema.Types.UUID[];
  news: Schema.Types.UUID[];
  awards: Schema.Types.UUID[];
  nominations: Schema.Types.UUID[];
  createdAt: string;
  updatedAt?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IActor>({
  _id: {type: Schema.Types.UUID, required: true},
  name: { type: String, required: true },
  bornAt: { type: String, required: true },
  agency: { type: String, required: true },

  series: [{type: Schema.Types.UUID, ref: 'Serie'}],
  nominations: [{type: Schema.Types.UUID, ref: 'Award'}],
  awards: [{type: Schema.Types.UUID, ref: 'Award'}],
  news: [{type: Schema.Types.UUID, ref: 'News'}],

  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: false },
});

export const ActorEntity = model<IActor>("Actor", schema);

export default ActorEntity;
