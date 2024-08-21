import { ApiErrorCode } from './api-error-code.enum';

export interface IApiError {
  code: ApiErrorCode;
  message: string;
}
