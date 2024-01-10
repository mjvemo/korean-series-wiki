import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface UpdateNewsRequestProps {
  name?: string;
  description?: string;
  thumbnail?: string;
  publishedAt?: string;
}

const schema: JSONSchemaType<UpdateNewsRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string", nullable: true },
    description: { type: "string", nullable: true },
    thumbnail: { type: "string", nullable: true },
    publishedAt: { type: "string", nullable: true },
  },
  required: [],
  additionalProperties: false,
};

export class UpdateNewsRequestDTO implements UpdateNewsRequestProps {
  readonly name?: string;
  readonly description?: string;
  readonly thumbnail?: string;
  readonly publishedAt?: string;

  constructor(props: UpdateNewsRequestProps) {
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
    this.thumbnail = props.thumbnail;
    this.publishedAt = props.publishedAt;
  }
}
