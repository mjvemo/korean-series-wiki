export class ResourceNotFoundError extends Error {
  readonly name = 'ResourceNotFoundError'
  readonly status = 404;

  private id: string;

  constructor(message: string, id: string) {
    super(message);

    this.id = id;
    Error.captureStackTrace(this);
  }

  toJSON(): Record<string, any> {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      id: this.id,
    }
  }
}
