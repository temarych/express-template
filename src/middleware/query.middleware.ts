import { NextFunction, Request, Response } from 'express';
import { SomeZodObject, ZodError } from 'zod';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';

export const getErrors = (zodError: ZodError) => {
  return zodError.errors.map((error) => ({
    path: error.path.join('.'),
    message: error.message,
  }));
};

export const query =
  (schema: SomeZodObject) =>
  (request: Request, response: Response, next: NextFunction) => {
    const result = schema.safeParse(request.query);

    if (!result.success) {
      return response.status(400).send({
        code: ApiErrorCode.InvalidQueries,
        errors: getErrors(result.error),
      });
    }

    request.query = result.data;

    return next();
  };
