import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface CreateSeasonRequestProps {
  serie: string;
  chapters: string[];
  name?: string;
  releasedAt?: string;
}

const schema: JSONSchemaType<CreateSeasonRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string", nullable: true },
    serie: { type: "string" },
    chapters: { type: "array", items: { type: "string" } },
    releasedAt: { type: "string", nullable: true },
  },
  required: ["serie", "chapters"],
  additionalProperties: false,
};

export class CreateSeasonRequestDTO implements CreateSeasonRequestProps {
  readonly serie: string;
  readonly chapters: string[];
  readonly name?: string;
  readonly releasedAt?: string;

  constructor(props: CreateSeasonRequestProps) {
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(schema);

    validate(props);

    if (validate.errors) {
      throw new SchemaValidationError(
        "Schema validation errors",
        validate.errors
      );
    }

    this.serie = props.serie;
    this.chapters = props.chapters;
    this.name = props.name;
    this.releasedAt = props.releasedAt;
  }
}
