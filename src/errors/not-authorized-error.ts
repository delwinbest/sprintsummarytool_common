import { CustomError } from './custom-error';
import { HttpStatusCode } from './http-status-codes';

export class NotAuthorizedError extends CustomError {
  statusCode = HttpStatusCode.UNAUTHORIZED;
  constructor() {
    super('Not authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }];
  }
}
