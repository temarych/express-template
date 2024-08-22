import { NextFunction, Request, Response } from 'express';
import { Schema, ZodError } from 'zod';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { ApiError } from '@modules/error/api-error.entity';

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
      throw new ApiError(ApiErrorCode.InvalidBody, {
        details: getErrors(result.error),
      });
    }

    request.body = result.data;

    return next();
  };
