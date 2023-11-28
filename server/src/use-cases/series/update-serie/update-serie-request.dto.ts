import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface UpdateSerieRequestProps {
  name?: string;
  rating?: number;
  pg?: string;
  image?: string;
  directedBy?: string;
  studio?: string;
  seasons?: string[];
  cast?: string[];
  news?: string[];
  awards?: string[];
  nominations?: string[];
  releasedAt?: string;
}

const schema: JSONSchemaType<UpdateSerieRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string", nullable: true },
    rating: { type: "number", nullable: true },
    seasons: { type: "array", nullable: true, items: { type: "string" } },
    cast: { type: "array", nullable: true, items: { type: "string" } },
    pg: { type: "string", nullable: true },
    image: { type: "string", nullable: true },
    directedBy: { type: "string", nullable: true },
    studio: { type: "string", nullable: true },
    news: { type: "array", nullable: true, items: { type: "string" } },
    awards: { type: "array", nullable: true, items: { type: "string" } },
    nominations: { type: "array", nullable: true, items: { type: "string" } },
    releasedAt: { type: "string", nullable: true },
  },
  required: [],
  additionalProperties: false,
};

export class UpdateSerieRequestDTO implements UpdateSerieRequestProps {
  readonly name?: string;
  readonly rating?: number;
  readonly pg?: string;
  readonly image?: string;
  readonly directedBy?: string;
  readonly studio?: string;
  readonly seasons?: string[];
  readonly cast?: string[];
  readonly news?: string[];
  readonly awards?: string[];
  readonly nominations?: string[];
  readonly releasedAt?: string;

  constructor(props: UpdateSerieRequestProps) {
    const ajv = new Ajv({allErrors: true})
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
    this.directedBy = props.directedBy;
    this.studio = props.studio;
    this.news = props.news;
    this.awards = props.awards;
    this.nominations = props.nominations;
    this.releasedAt = props.releasedAt;
  }
}
