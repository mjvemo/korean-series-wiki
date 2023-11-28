import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface CreateActorRequestProps {
  name: string;
  bornAt: string;
  agency: string;
  url: string;
  series: string[];
  news: string[];
  awards: string[];
  nominations: string[];
}

const schema: JSONSchemaType<CreateActorRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string" },
    bornAt: { type: "string" },
    agency: { type: "string" },
    url: { type: "string" },
    series: { type: "array", items: { type: "string" } },
    news: { type: "array", items: { type: "string" } },
    awards: { type: "array", items: { type: "string" } },
    nominations: { type: "array", items: { type: "string" } },
  },
  required: [
    "name",
    "bornAt",
    "agency",
    "url",
    "series",
    "news",
    "awards",
    "nominations",
  ],
  additionalProperties: false,
};

export class CreateActorRequestDTO implements CreateActorRequestProps {
  public readonly name: string;
  public readonly bornAt: string;
  public readonly agency: string;
  public readonly url: string;
  public readonly series: string[];
  public readonly news: string[];
  public readonly awards: string[];
  public readonly nominations: string[];

  constructor(props: CreateActorRequestProps) {
    const ajv = new Ajv({allErrors: true});
    const validate = ajv.compile(schema);

    validate(props);

    if (validate.errors) {
      throw new SchemaValidationError(
        "Schema validation errors",
        validate.errors
      );
    }

    this.name = props.name;
    this.bornAt = props.bornAt;
    this.agency = props.agency;
    this.url = props.url;
    this.series = props.series;
    this.news = props.news;
    this.awards = props.awards;
    this.nominations = props.nominations;
  }
}
