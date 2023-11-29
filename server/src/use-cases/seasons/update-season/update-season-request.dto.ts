import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface UpdateSeasonRequestProps {
  serie?: string;
  chapters?: string[];
  name?: string;
  releasedAt?: string;
}

const schema: JSONSchemaType<UpdateSeasonRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string", nullable: true },
    serie: { type: "string", nullable: true },
    chapters: { type: "array", nullable: true, items: { type: "string" } },
    releasedAt: { type: "string", nullable: true },
  },
  required: [],
  additionalProperties: false,
};

export class UpdateSeasonRequestDTO implements UpdateSeasonRequestProps {
  readonly serie?: string;
  readonly chapters?: string[];
  readonly name?: string;
  readonly releasedAt?: string;

  constructor(props: UpdateSeasonRequestProps) {
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
