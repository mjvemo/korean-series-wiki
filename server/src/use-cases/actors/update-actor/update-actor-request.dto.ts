import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface UpdateActorRequestProps {
  name?: string;
  age?: number;
  agency?: string;
  imageUrl?: string;
  series?: string[];
  yearsActive?: string;
  education?: string;
  news?: string[];
  awards?: string[];
  nominations?: string[];
}

const schema: JSONSchemaType<UpdateActorRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string", nullable: true },
    age: { type: "number", nullable: true },
    agency: { type: "string", nullable: true },
    imageUrl: { type: "string", nullable: true },
    yearsActive: { type: "string", nullable: true },
    education: { type: "string", nullable: true },
    series: { type: "array", items: { type: "string" }, nullable: true },
    news: { type: "array", items: { type: "string" }, nullable: true },
    awards: { type: "array", items: { type: "string" }, nullable: true },
    nominations: { type: "array", items: { type: "string" }, nullable: true },
  },
  required: [],
  additionalProperties: false,
};

export class UpdateActorRequestDTO implements UpdateActorRequestProps {
  public readonly name?: string;
  public readonly age?: number;
  public readonly agency?: string;
  public readonly imageUrl?: string;
  public readonly yearsActive?: string;
  public readonly education?: string;
  public readonly series?: string[];
  public readonly news?: string[];
  public readonly awards?: string[];
  public readonly nominations?: string[];

  constructor(props: UpdateActorRequestProps) {
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
