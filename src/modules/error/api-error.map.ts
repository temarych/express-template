import { HttpStatus } from '@typings/http-status';
import { ApiErrorCode } from './api-error-code.enum';
import { IApiError } from './api-error.interface';

export type IApiErrorMap = {
  [code in ApiErrorCode]: Omit<IApiError, 'code'>;
};

export const apiErrorMap: IApiErrorMap = {
  [ApiErrorCode.Internal]: {
    status: HttpStatus.InternalServerError,
    message: 'Internal server error',
  },
  [ApiErrorCode.EntityNotFound]: {
    status: HttpStatus.NotFound,
    message: 'Entity not found',
  },
  [ApiErrorCode.ExpiredAccessToken]: {
    status: HttpStatus.Unauthorized,
    message: 'Expired access token',
  },
  [ApiErrorCode.IncorrectPassword]: {
    status: HttpStatus.Unauthorized,
    message: 'Incorrect password',
  },
  [ApiErrorCode.InvalidAccessToken]: {
    status: HttpStatus.Unauthorized,
    message: 'Invalid access token',
  },
  [ApiErrorCode.NoAccessToken]: {
    status: HttpStatus.Unauthorized,
    message: 'No access token',
  },
  [ApiErrorCode.EmailNotUnique]: {
    status: HttpStatus.Conflict,
    message: 'Email is not unique',
  },
  [ApiErrorCode.InvalidBody]: {
    status: HttpStatus.BadRequest,
    message: 'Invalid body',
  },
  [ApiErrorCode.InvalidQueries]: {
    status: HttpStatus.BadRequest,
    message: 'Invalid queries',
  },
};
