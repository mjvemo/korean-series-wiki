import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface CreateAwardRequestProps {
  name: string;
  year: string;
  image?: string;
  category: string;
}

const schema: JSONSchemaType<CreateAwardRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string" },
    image: {type: "string", nullable: true},
    year: { type: "string" },
    category: { type: "string" },
  },
  required: ["name", "year", "category"],
  additionalProperties: false,
};

export class CreateAwardRequestDTO implements CreateAwardRequestProps {
  readonly name: string;
  readonly image?: string;
  readonly year: string;
  readonly category: string;

  constructor(props: CreateAwardRequestProps) {
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
