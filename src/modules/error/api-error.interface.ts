import { HttpStatus } from '@typings/http-status';
import { ApiErrorCode } from './api-error-code.enum';

export interface IApiError {
  code: ApiErrorCode;
  status?: HttpStatus;
  message: string;
}
