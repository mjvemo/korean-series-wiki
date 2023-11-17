export class SchemaValidationError extends Error {
  readonly name = 'SchemaValidationError'
  readonly status = 400;

  private errors: any[];

  constructor(message: string, errors: any[]) {
    super(message);

    this.errors = errors;
    Error.captureStackTrace(this);
  }

  toJSON(): Record<string, any> {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      errors: this.errors,
    }
  }
}
