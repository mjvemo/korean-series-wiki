import { randomUUID } from "crypto";
import { isNil } from "lodash";
import { SeasonDTO } from "../../dtos/season.dto";

export interface SeasonProps {
  id: string;
  name?: string;
  serie: string;
  chapters: {
    name: string;
    description: string;
    releasedAt: string;
  }[];
  releasedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSeasonProps {
  id?: string;
  name?: string;
  serie: string;
  chapters: {
    name: string;
    description: string;
    releasedAt: string;
  }[];
  releasedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateSeasonProps {
  serie?: string;
  chapters?: {
    name: string;
    description: string;
    releasedAt: string;
  }[];
  name?: string;
  releasedAt?: string;
}

export class Season {
  private _id: string;
  private _serie: string;
  private _chapters: {
    name: string;
    description: string;
    releasedAt: string;
  }[];
  private _name?: string;
  private _releasedAt?: string;
  private _createdAt: string;
  private _updatedAt: string;

  get id() {
    return this._id;
  }

  get serie() {
    return this._serie;
  }

  get chapters() {
    return this._chapters;
  }

  get name() {
    return this._name;
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

  private constructor(props: SeasonProps) {
    this._id = props.id;
    this._serie = props.serie;
    this._chapters = props.chapters;
    this._name = props.name;
    this._releasedAt = props.releasedAt;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  static create(props: CreateSeasonProps): Season {
    const timestamp = new Date().toISOString();

    return new Season({
      id: props.id || randomUUID(),
      name: props.name,
      serie: props.serie,
      chapters: props.chapters,
      releasedAt: props.releasedAt,
      createdAt: props.createdAt || timestamp,
      updatedAt: props.updatedAt || timestamp,
    });
  }

  update(props: UpdateSeasonProps) {
    this._name = isNil(props.name) ? this._name : props.name;
    this._serie = isNil(props.serie) ? this._serie : props.serie;
    this._chapters = isNil(props.chapters) ? this._chapters : props.chapters;
    this._releasedAt = isNil(props.releasedAt)
      ? this._releasedAt
      : props.releasedAt;
    this._updatedAt = new Date().toISOString();
  }

  serialize(): SeasonDTO {
    return {
      id: this.id,
      name: this.name,
      serie: this.serie,
      chapters: this.chapters,
      releasedAt: this.releasedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
