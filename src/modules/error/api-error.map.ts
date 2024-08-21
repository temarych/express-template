import { ApiErrorCode } from './api-error-code.enum';
import { IApiError } from './api-error.interface';

export type IApiErrorMap = {
  [code in ApiErrorCode]: Omit<IApiError, 'code'>;
};

export const apiErrorMap: IApiErrorMap = {
  [ApiErrorCode.Internal]: {
    message: 'Internal server error',
  },
  [ApiErrorCode.EntityNotFound]: {
    message: 'Entity not found',
  },
  [ApiErrorCode.ExpiredAccessToken]: {
    message: 'Expired access token',
  },
  [ApiErrorCode.IncorrectPassword]: {
    message: 'Incorrect password',
  },
  [ApiErrorCode.InvalidAccessToken]: {
    message: 'Invalid access token',
  },
  [ApiErrorCode.NoAccessToken]: {
    message: 'No access token',
  },
  [ApiErrorCode.EmailNotUnique]: {
    message: 'Email is not unique',
  },
  [ApiErrorCode.InvalidBody]: {
    message: 'Invalid body',
  },
  [ApiErrorCode.InvalidQueries]: {
    message: 'Invalid queries',
  },
};
