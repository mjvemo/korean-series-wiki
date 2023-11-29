import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface UpdateChapterRequestProps {
  season?: string;
  name?: string;
  description?: string;
  thumbnail?: string;
  releasedAt?: string;
}

const schema: JSONSchemaType<UpdateChapterRequestProps> = {
  type: "object",
  properties: {
    season: { type: "string", nullable: true },
    name: { type: "string", nullable: true },
    description: { type: "string", nullable: true },
    thumbnail: { type: "string", nullable: true },
    releasedAt: { type: "string", nullable: true },
  },
  required: [],
  additionalProperties: false,
};

export class UpdateChapterRequestDTO implements UpdateChapterRequestProps {
  readonly season?: string;
  readonly name?: string;
  readonly description?: string;
  readonly thumbnail?: string;
  readonly releasedAt?: string;

  constructor(props: UpdateChapterRequestProps) {
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
    this.season = props.season;
    this.description = props.description;
    this.thumbnail = props.thumbnail;
    this.releasedAt = props.releasedAt;
  }
}
