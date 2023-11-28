import { randomUUID } from "crypto";
import { isNil } from "lodash";
import { ChapterDTO } from "../../dtos/chapter.dto";

export interface ChapterProps {
  id: string;
  season: string;
  name: string;
  description: string;
  thumbnail: string;
  releasedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateChapterProps {
  id?: string;
  season: string;
  name: string;
  description: string;
  thumbnail: string;
  releasedAt: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateChapterProps {
  season?: string;
  name?: string;
  description?: string;
  thumbnail?: string;
  releasedAt?: string;
}

export class Chapter {
  private _id: string;
  private _season: string;
  private _name: string;
  private _description: string;
  private _thumbnail: string;
  private _releasedAt: string;
  private _createdAt: string;
  private _updatedAt: string;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get season() {
    return this._season;
  }

  get description() {
    return this._description;
  }

  get thumbnail() {
    return this._thumbnail;
  }

  get releasedAt() {
    return this._releasedAt;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  private constructor(props: ChapterProps) {
    this._id = props.id;
    this._name = props.name;
    this._season = props.season;
    this._description = props.description;
    this._thumbnail = props.thumbnail;
    this._releasedAt = props.releasedAt;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  static create(props: CreateChapterProps): Chapter {
    const timestamp = new Date().toISOString();

    return new Chapter({
      id: props.id || randomUUID(),
      name: props.name,
      season: props.season,
      description: props.description,
      thumbnail: props.thumbnail,
      releasedAt: props.releasedAt,
      createdAt: props.createdAt || timestamp,
      updatedAt: props.updatedAt || timestamp,
    });
  }

  update(props: UpdateChapterProps) {
    this._name = isNil(props.name) ? this._name : props.name;
    this._season = isNil(props.season) ? this._season : props.season;
    this._description = isNil(props.description)
      ? this._description
      : props.description;
    this._thumbnail = isNil(props.thumbnail)
      ? this._thumbnail
      : props.thumbnail;
    this._releasedAt = isNil(props.releasedAt)
      ? this._releasedAt
      : props.releasedAt;
    this._updatedAt = new Date().toISOString();
  }

  serialize(): ChapterDTO {
    return {
      id: this.id,
      name: this.name,
      season: this.season,
      description: this.description,
      thumbnail: this.thumbnail,
      releasedAt: this.releasedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
