import Ajv, { JSONSchemaType } from "ajv";
import { SchemaValidationError } from "../../../errors/schema-validation.error";

export interface CreateAwardRequestProps {
  name: string;
  year: number;
  category: string;
}

const schema: JSONSchemaType<CreateAwardRequestProps> = {
  type: "object",
  properties: {
    name: { type: "string" },
    year: { type: "number" },
    category: { type: "string" },
  },
  required: ["name", "year", "category"],
  additionalProperties: false,
};

export class CreateAwardRequestDTO implements CreateAwardRequestProps {
  readonly name: string;
  readonly year: number;
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
    this.year = props.year;
    this.category = props.category;
  }
}