import { HttpStatus } from '@typings/http-status';
import { ApiErrorCode } from './api-error-code.enum';

export interface IApiError<T extends object = object> {
  code: ApiErrorCode;
  status?: HttpStatus;
  message: string;
  details?: T;
}
