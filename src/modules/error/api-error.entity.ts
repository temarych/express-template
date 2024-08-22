import { HttpStatus } from '@typings/http-status';
import { ApiErrorCode } from './api-error-code.enum';
import { IApiError } from './api-error.interface';
import { apiErrorMap } from './api-error.map';

export type IApiErrorOptions<T extends object = object> = Partial<
  Omit<IApiError<T>, 'code'>
>;

export class ApiError<T extends object = object>
  extends Error
  implements IApiError<T>
{
  public code: ApiErrorCode;
  public status?: HttpStatus;
  public details?: T;

  constructor(code: ApiErrorCode, options?: IApiErrorOptions<T>) {
    const data = apiErrorMap[code];
    super(options?.message ?? data.message);
    this.code = code;
    this.status = options?.status ?? data.status;
    this.details = options?.details;
  }
}
