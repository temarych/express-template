import { ApiErrorCode } from './api-error-code.enum';

export type IHttpStatusMap = {
  [code in ApiErrorCode]: number;
};

export const httpStatusMap: IHttpStatusMap = {
  [ApiErrorCode.EntityNotFound]: 404,
  [ApiErrorCode.ExpiredAccessToken]: 401,
  [ApiErrorCode.IncorrectPassword]: 401,
  [ApiErrorCode.InvalidAccessToken]: 401,
  [ApiErrorCode.NoAccessToken]: 401,
  [ApiErrorCode.EmailNotUnique]: 400,
  [ApiErrorCode.InvalidBody]: 400,
  [ApiErrorCode.InvalidQueries]: 400,
  [ApiErrorCode.Internal]: 500,
};
