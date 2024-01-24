import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface UpdateAwardRequestProps {
  name?: string;
  image?: string;
  year?: string;
  category?: string;
}

const schema: JSONSchemaType<UpdateAwardRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string", nullable: true },
    image: { type: "string", nullable: true },
    year: { type: "string", nullable: true },
    category: { type: "string", nullable: true },
  },
  required: [],
  additionalProperties: false,
};

export class UpdateAwardRequestDTO implements UpdateAwardRequestProps {
  readonly name?: string;
  readonly image?: string;
  readonly year?: string;
  readonly category?: string;

  constructor(props: UpdateAwardRequestProps) {
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
    this.image = props.image;
    this.year = props.year;
    this.category = props.category;
  }
}
