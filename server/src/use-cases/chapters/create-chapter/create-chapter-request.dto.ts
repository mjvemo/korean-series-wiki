import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface CreateChapterRequestProps {
  season: string;
  name: string;
  description: string;
  thumbnail: string;
  releasedAt: string;
}

const schema: JSONSchemaType<CreateChapterRequestProps> = {
  type: "object",
  properties: {
    season: { type: "string" },
    name: { type: "string" },
    description: { type: "string" },
    thumbnail: { type: "string" },
    releasedAt: { type: "string" },
  },
  required: [
    "season",
    "name",
    "description",
    "thumbnail",
    "releasedAt"
  ],
  additionalProperties: false,
};

export class CreateChapterRequestDTO implements CreateChapterRequestProps {
  readonly season: string;
  readonly name: string;
  readonly description: string;
  readonly thumbnail: string;
  readonly releasedAt: string;

  constructor(props: CreateChapterRequestProps) {
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
