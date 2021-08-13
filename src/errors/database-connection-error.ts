import { CustomError } from './custom-error';
import { HttpStatusCode } from './http-status-codes';

export class DatabaseConnectionError extends CustomError {
  reason = 'Error connecting to database';
  statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
  constructor() {
    super('Error connecting to database');
    // Required when class extends built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
