export class ValidationError extends Error {
  public name: string = 'ValidationError';

  constructor(message: string, public key?: string, public details?: Record<string, unknown>) {
    super(key ? `${message} in ${key}` : message);

    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
