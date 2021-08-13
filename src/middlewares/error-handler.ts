import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { HttpStatusCode } from '../errors/http-status-codes';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
  } else {
    console.error(err);
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({
      errors: [
        {
          message: 'Something went wrong',
        },
      ],
    });
  }
};
