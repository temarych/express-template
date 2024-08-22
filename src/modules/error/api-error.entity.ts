import { HttpStatus } from '@typings/http-status';
import { ApiErrorCode } from './api-error-code.enum';
import { IApiError } from './api-error.interface';
import { apiErrorMap } from './api-error.map';

export type IApiErrorOptions = Partial<Omit<IApiError, 'code'>>;

export class ApiError extends Error implements IApiError {
  public code: ApiErrorCode;
  public status?: HttpStatus;

  constructor(code: ApiErrorCode, options?: IApiErrorOptions) {
    const data = apiErrorMap[code];
    super(options?.message ?? data.message);
    this.code = code;
    this.status = options?.status ?? data.status;
  }
}
