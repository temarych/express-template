import { NextFunction, Request, Response } from 'express';
import { Schema, ZodError } from 'zod';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';

export const getErrors = (zodError: ZodError) => {
  return zodError.errors.map((error) => ({
    path: error.path.join('.'),
    message: error.message,
  }));
};

export const body =
  (schema: Schema) =>
  (request: Request, response: Response, next: NextFunction) => {
    const result = schema.safeParse(request.body);

    if (!result.success) {
      return response.status(400).send({
        code: ApiErrorCode.InvalidBody,
        errors: getErrors(result.error),
      });
    }

    request.body = result.data;

    return next();
  };
