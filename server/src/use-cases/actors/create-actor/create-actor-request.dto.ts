import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface CreateActorRequestProps {
  name: string;
  age: number;
  agency: string;
  imageUrl: string;
  yearsActive: string;
  education: string;
  series: string[];
  news: string[];
  awards: string[];
  nominations: string[];
}

const schema: JSONSchemaType<CreateActorRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "number" },
    agency: { type: "string" },
    imageUrl: { type: "string" },
    yearsActive: { type: "string" },
    education: { type: "string" },
    series: { type: "array", items: { type: "string" } },
    news: { type: "array", items: { type: "string" } },
    awards: { type: "array", items: { type: "string" } },
    nominations: { type: "array", items: { type: "string" } },
  },
  required: [
    "name",
    "age",
    "agency",
    "imageUrl",
    "yearsActive",
    "education",
    "series",
    "news",
    "awards",
    "nominations",
  ],
  additionalProperties: false,
};

export class CreateActorRequestDTO implements CreateActorRequestProps {
  public readonly name: string;
  public readonly age: number;
  public readonly agency: string;
  public readonly imageUrl: string;
  public readonly yearsActive: string;
  public readonly education: string;
  public readonly series: string[];
  public readonly news: string[];
  public readonly awards: string[];
  public readonly nominations: string[];

  constructor(props: CreateActorRequestProps) {
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
    this.age = props.age;
    this.agency = props.agency;
    this.imageUrl = props.imageUrl;
    this.yearsActive = props.yearsActive;
    this.education = props.education;
    this.series = props.series;
    this.news = props.news;
    this.awards = props.awards;
    this.nominations = props.nominations;
  }
}
