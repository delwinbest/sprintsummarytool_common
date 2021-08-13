import { CustomError } from './custom-error';
import { HttpStatusCode } from './http-status-codes';

export class NotFoundError extends CustomError {
  statusCode = HttpStatusCode.NOT_FOUND;

  constructor() {
    super('Route not found');
    // Required when class extends built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors = () => {
    return [
      {
        message: 'Not Found',
      },
    ];
  };
}
