import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface CreateSerieRequestProps {
  name: string;
  rating: number;
  pg: string;
  image: string;
  description: string;
  directedBy: string;
  studio: string;
  genre: string;
  seasons: string[];
  cast: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  releasedAt: string;
}

const schema: JSONSchemaType<CreateSerieRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string" },
    rating: { type: "number" },
    seasons: { type: "array", items: { type: "string" } },
    cast: { type: "array", items: { type: "string" } },
    pg: { type: "string" },
    description: { type: "string" },
    image: { type: "string" },
    genre: { type: "string" },
    directedBy: { type: "string" },
    studio: { type: "string" },
    news: { type: "array", items: { type: "string" } },
    awards: { type: "array", items: { type: "string" } },
    nominations: { type: "array", items: { type: "string" } },
    releasedAt: { type: "string" },
  },
  required: [
    "name",
    "rating",
    "seasons",
    "cast",
    "releasedAt",
    "pg",
    "directedBy",
    "studio",
    "image",
    "description",
    "genre",
    "news",
    "awards",
    "nominations",
  ],
  additionalProperties: false,
};

export class CreateSerieRequestDTO implements CreateSerieRequestProps {
  readonly name: string;
  readonly rating: number;
  readonly pg: string;
  readonly image: string;
  readonly description: string;
  readonly directedBy: string;
  readonly studio: string;
  readonly genre: string;
  readonly seasons: string[];
  readonly cast: string[];
  readonly news: string[];
  readonly awards: string[];
  readonly nominations: string[];
  readonly releasedAt: string;

  constructor(props: CreateSerieRequestProps) {
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(schema);

    validate(props);

    if (validate.errors) {
      throw new SchemaValidationError(
        "Schema validation errors",
        validate.errors
      );
    }

    this.name = props.name;
    this.rating = props.rating;
    this.seasons = props.seasons;
    this.cast = props.cast;
    this.pg = props.pg;
    this.image = props.image;
    this.description = props.description;
    this.directedBy = props.directedBy;
    this.studio = props.studio;
    this.genre = props.genre;
    this.news = props.news;
    this.awards = props.awards;
    this.nominations = props.nominations;
    this.releasedAt = props.releasedAt;
  }
}
