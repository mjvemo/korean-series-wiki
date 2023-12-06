import { randomUUID } from "crypto";
import { isNil, uniq } from "lodash";
import { ActorDTO } from "../../dtos/actor.dto";

export interface ActorProps {
  id: string;
  name: string;
  age: number;
  agency: string;
  imageUrl: string;
  education: string;
  yearsActive: string;
  series: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateActorProps {
  id?: string;
  name: string;
  age: number;
  agency: string;
  imageUrl: string;
  education: string;
  yearsActive: string;
  series: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateActorProps {
  name?: string;
  age?: number;
  agency?: string;
  imageUrl?: string;
  education?: string;
  yearsActive?: string;
  series?: string[];
  news?: string[];
  awards?: string[];
  nominations?: string[];
}

export class Actor {
  private _id: string;
  private _name: string;
  private _age: number;
  private _agency: string;
  private _education: string;
  private _imageUrl: string;
  private _yearsActive: string;
  private _series: string[];
  private _news: string[];
  private _awards: string[];
  private _nominations: string[];
  private _createdAt: string;
  private _updatedAt: string;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get agency() {
    return this._agency;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get yearsActive() {
    return this._yearsActive;
  }

  get education() {
    return this._education;
  }

  get series() {
    return this._series;
  }

  get news() {
    return this._news;
  }

  get awards() {
    return this._awards;
  }

  get nominations() {
    return this._nominations;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  private constructor(props: ActorProps) {
    this._id = props.id;
    this._name = props.name;
    this._age = props.age;
    this._agency = props.agency;
    this._imageUrl = props.imageUrl;
    this._education = props.education;
    this._yearsActive = props.yearsActive;
    this._series = props.series;
    this._news = props.news;
    this._awards = props.awards;
    this._nominations = props.nominations;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  static create(props: CreateActorProps): Actor {
    const timestamp = new Date().toISOString();

    return new Actor({
      id: props.id || randomUUID(),
      name: props.name,
      age: props.age,
      agency: props.agency,
      imageUrl: props.imageUrl,
      education: props.education,
      yearsActive: props.yearsActive,
      series: props.series,
      news: props.news,
      awards: props.awards,
      nominations: props.nominations,
      createdAt: props.createdAt || timestamp,
      updatedAt: props.updatedAt || timestamp,
    });
  }

  update(props: UpdateActorProps) {
    this._name = isNil(props.name) ? this._name : props.name;
    this._age = isNil(props.age) ? this._age : props.age;
    this._agency = isNil(props.agency) ? this._agency : props.agency;
    this._imageUrl = isNil(props.imageUrl) ? this._imageUrl : props.imageUrl;
    this._education = isNil(props.education)
      ? this._education
      : props.education;
    this._yearsActive = isNil(props.yearsActive)
      ? this._yearsActive
      : props.yearsActive;
    this._series = isNil(props.series) ? this._series : props.series;
    this._news = isNil(props.news) ? this._news : props.news;
    this._awards = isNil(props.awards) ? this._awards : props.awards;
    this._nominations = isNil(props.nominations)
      ? this._nominations
      : props.nominations;
    this._updatedAt = new Date().toISOString();
  }

  addSerie(id: string) {
    this._series = uniq([...this.series, id]);
  }

  serialize(): ActorDTO {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      agency: this.agency,
      imageUrl: this.imageUrl,
      education: this.education,
      yearsActive: this.yearsActive,
      series: this.series,
      news: this.news,
      awards: this.awards,
      nominations: this.nominations,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
