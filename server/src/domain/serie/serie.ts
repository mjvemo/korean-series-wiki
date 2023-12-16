import { randomUUID } from "crypto";
import { isNil, uniq } from "lodash";
import { SerieDTO } from "../../dtos/serie.dto";

export interface SerieProps {
  id: string;
  name: string;
  rating: number;
  pg: string;
  image: string;
  genre: string;
  directedBy: string;
  studio: string;
  seasons: string[];
  cast: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  releasedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSerieProps {
  id?: string;
  name: string;
  rating: number;
  pg: string;
  image: string;
  genre: string;
  directedBy: string;
  studio: string;
  seasons: string[];
  cast: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  releasedAt: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateSerieProps {
  name?: string;
  rating?: number;
  pg?: string;
  image?: string;
  directedBy?: string;
  genre?: string;
  studio?: string;
  seasons?: string[];
  cast?: string[];
  news?: string[];
  awards?: string[];
  nominations?: string[];
  releasedAt?: string;
}

export class Serie {
  private _id: string;
  private _name: string;
  private _rating: number;
  private _pg: string;
  private _image: string;
  private _genre: string;
  private _directedBy: string;
  private _studio: string;
  private _seasons: string[];
  private _cast: string[];
  private _news: string[];
  private _awards: string[];
  private _nominations: string[];
  private _releasedAt: string;
  private _createdAt: string;
  private _updatedAt: string;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get rating() {
    return this._rating;
  }

  get seasons() {
    return this._seasons;
  }

  get cast() {
    return this._cast;
  }

  get pg() {
    return this._pg;
  }

  get image() {
    return this._image;
  }

  get genre() {
    return this._genre;
  }

  get directedBy() {
    return this._directedBy;
  }

  get studio() {
    return this._studio;
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

  get releasedAt() {
    return this._releasedAt;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  private constructor(props: SerieProps) {
    this._id = props.id;
    this._name = props.name;
    this._rating = props.rating;
    this._seasons = props.seasons;
    this._cast = props.cast;
    this._pg = props.pg;
    this._image = props.image;
    this._genre = props.genre;
    this._directedBy = props.directedBy;
    this._studio = props.studio;
    this._news = props.news;
    this._awards = props.awards;
    this._nominations = props.nominations;
    this._releasedAt = props.releasedAt;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }

  static create(props: CreateSerieProps): Serie {
    const timestamp = new Date().toISOString();

    return new Serie({
      id: props.id || randomUUID(),
      name: props.name,
      rating: props.rating,
      seasons: props.seasons,
      cast: props.cast,
      pg: props.pg,
      image: props.image,
      genre: props.genre,
      directedBy: props.directedBy,
      studio: props.studio,
      news: props.news,
      awards: props.awards,
      nominations: props.nominations,
      releasedAt: props.releasedAt,
      createdAt: props.createdAt || timestamp,
      updatedAt: props.updatedAt || timestamp,
    });
  }

  update(props: UpdateSerieProps) {
    this._name = isNil(props.name) ? this._name : props.name;
    this._rating = isNil(props.rating) ? this._rating : props.rating;
    this._pg = isNil(props.pg) ? this._pg : props.pg;
    this._image = isNil(props.image) ? this._image : props.image;
    this._genre = isNil(props.genre) ? this._genre : props.genre;
    this._directedBy = isNil(props.directedBy)
      ? this._directedBy
      : props.directedBy;
    this._studio = isNil(props.studio) ? this._studio : props.studio;
    this._seasons = isNil(props.seasons) ? this._seasons : props.seasons;
    this._cast = isNil(props.cast) ? this._cast : props.cast;
    this._news = isNil(props.news) ? this._news : props.news;
    this._awards = isNil(props.awards) ? this._awards : props.awards;
    this._nominations = isNil(props.nominations)
      ? this._nominations
      : props.nominations;
    this._releasedAt = isNil(props.releasedAt)
      ? this._releasedAt
      : props.releasedAt;
    this._updatedAt = new Date().toISOString();
  }

  addActor(id: string) {
    this._cast = uniq([...this.cast, id]);
  }

  addSeason(id: string) {
    this._seasons = uniq([...this.seasons, id]);
  }

  serialize(): SerieDTO {
    return {
      id: this.id,
      name: this.name,
      rating: this.rating,
      pg: this.pg,
      image: this.image,
      directedBy: this.directedBy,
      studio: this.studio,
      genre: this.genre,
      seasons: this.seasons,
      cast: this.cast,
      news: this.news,
      awards: this.awards,
      nominations: this.nominations,
      releasedAt: this.releasedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
