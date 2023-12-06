import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface CreateNewsRequestProps {
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
}

const schema: JSONSchemaType<CreateNewsRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    url: { type: "string" },
    thumbnail: { type: "string" },
    publishedAt: { type: "string" },
  },
  required: ["name", "description", "url", "thumbnail", "publishedAt"],
  additionalProperties: false,
};

export class CreateNewsRequestDTO implements CreateNewsRequestProps {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly thumbnail: string;
  readonly publishedAt: string;

  constructor(props: CreateNewsRequestProps) {
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
    this.description = props.description;
    this.url = props.url;
    this.thumbnail = props.thumbnail;
    this.publishedAt = props.publishedAt;
  }
}
