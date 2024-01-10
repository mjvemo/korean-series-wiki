import { randomUUID } from "crypto";
import { isNil } from "lodash";
import { NewsDTO } from "../../dtos/news.dto";

export interface NewsProps {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNewsProps {
  id?: string;
  name: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateNewsProps {
  name?: string;
  description?: string;
  thumbnail?: string;
  publishedAt?: string;
}

export class News {
  private _id: string;
  private _name: string;
  private _description: string;
  private _thumbnail: string;
  private _publishedAt: string;
  private _createdAt: string;
  private _updatedAt: string;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get thumbnail() {
    return this._thumbnail;
  }

  get publishedAt() {
    return this._publishedAt;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  private constructor(props: NewsProps) {
    this._id = props.id;
    this._name = props.name;
    this._description = props.description;
    this._thumbnail = props.thumbnail;
    this._publishedAt = props.publishedAt;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  static create(props: CreateNewsProps): News {
    const timestamp = new Date().toISOString();

    return new News({
      id: props.id || randomUUID(),
      name: props.name,
      description: props.description,
      thumbnail: props.thumbnail,
      publishedAt: props.publishedAt,
      createdAt: props.createdAt || timestamp,
      updatedAt: props.updatedAt || timestamp,
    });
  }

  update(props: UpdateNewsProps) {
    this._name = isNil(props.name) ? this._name : props.name;
    this._description = isNil(props.description)
      ? this._description
      : props.description;
    this._thumbnail = isNil(props.thumbnail)
      ? this._thumbnail
      : props.thumbnail;
    this._publishedAt = isNil(props.publishedAt)
      ? this._publishedAt
      : props.publishedAt;
    this._updatedAt = new Date().toISOString();
  }

  serialize(): NewsDTO {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      thumbnail: this.thumbnail,
      publishedAt: this.publishedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
