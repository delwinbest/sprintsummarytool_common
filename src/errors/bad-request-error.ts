import { CustomError } from './custom-error';
import { HttpStatusCode } from './http-status-codes';

export class BadRequestError extends CustomError {
  statusCode = HttpStatusCode.BAD_REQUEST;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors = () => {
    return [{ message: this.message }];
  };
}
