import { randomUUID } from "crypto";
import { isNil } from "lodash";
import { ActorDTO } from "../../dtos/actor.dto";

export interface ActorProps {
  id: string;
  name: string;
  bornAt: string;
  agency: string;
  url: string;
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
  bornAt: string;
  agency: string;
  url: string;
  series: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateActorProps {
  name?: string;
  bornAt?: string;
  agency?: string;
  url?: string;
  series?: string[];
  news?: string[];
  awards?: string[];
  nominations?: string[];
}

export class Actor {
  private _id: string;
  private _name: string;
  private _bornAt: string;
  private _agency: string;
  private _url: string;
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

  get bornAt() {
    return this._bornAt;
  }

  get agency() {
    return this._agency;
  }

  get url() {
    return this._url;
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
    this._bornAt = props.bornAt;
    this._agency = props.agency;
    this._url = props.url;
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
      bornAt: props.bornAt,
      agency: props.agency,
      url: props.url,
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
    this._bornAt = isNil(props.bornAt) ? this._bornAt : props.bornAt;
    this._agency = isNil(props.agency) ? this._agency : props.agency;
    this._url = isNil(props.url) ? this._url : props.url;
    this._series = isNil(props.series) ? this._series : props.series;
    this._news = isNil(props.news) ? this._news : props.news;
    this._awards = isNil(props.awards) ? this._awards : props.awards;
    this._nominations = isNil(props.nominations)
      ? this._nominations
      : props.nominations;
    this._updatedAt = new Date().toISOString();
  }

  serialize(): ActorDTO {
    return {
      id: this.id,
      name: this.name,
      bornAt: this.bornAt,
      agency: this.agency,
      url: this.url,
      series: this.series,
      news: this.news,
      awards: this.awards,
      nominations: this.nominations,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
