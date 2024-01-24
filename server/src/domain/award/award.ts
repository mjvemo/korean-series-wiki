import { randomUUID } from "crypto";
import { isNil } from "lodash";
import { AwardDTO } from "../../dtos/award.dto";

export interface AwardProps {
  id: string;
  name: string;
  image?: string;
  year: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAwardProps {
  id?: string;
  name: string;
  image?: string;
  year: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateAwardProps {
  name?: string;
  image?: string;
  year?: string;
  category?: string;
}

export class Award {
  private _id: string;
  private _name: string;
  private _image?: string;

  private _year: string;
  private _category: string;

  private _createdAt: string;
  private _updatedAt: string;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }

  get year() {
    return this._year;
  }

  get category() {
    return this._category;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  private constructor(props: AwardProps) {
    this._id = props.id;
    this._name = props.name;
    this._image = props.image;
    this._year = props.year;
    this._category = props.category;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  static create(props: CreateAwardProps): Award {
    const timestamp = new Date().toISOString();

    return new Award({
      id: props.id || randomUUID(),
      image: props.image,
      name: props.name,
      year: props.year,
      category: props.category,
      createdAt: props.createdAt || timestamp,
      updatedAt: props.updatedAt || timestamp,
    });
  }

  update(props: UpdateAwardProps) {
    this._name = isNil(props.name) ? this._name : props.name;
    this._image = isNil(props.image) ? this._image : props.image;
    this._year = isNil(props.year) ? this._year : props.year;
    this._category = isNil(props.category) ? this._category : props.category;
    this._updatedAt = new Date().toISOString();
  }

  serialize(): AwardDTO {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      year: this.year,
      category: this.category,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
