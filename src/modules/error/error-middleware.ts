/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import { ApiError } from './api-error.entity';
import { ApiErrorCode } from './api-error-code.enum';
import { httpStatusMap } from './http-status.map';
import { apiErrorMapper } from './api-error.mapper';

export const handleError = async (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const internalApiError = new ApiError(ApiErrorCode.Internal);
  const apiError = error instanceof ApiError ? error : internalApiError;

  if (apiError.code === ApiErrorCode.Internal) {
    console.error(error);
  }

  response
    .status(httpStatusMap[apiError.code])
    .send(apiErrorMapper.toApiErrorDto(apiError));
};
