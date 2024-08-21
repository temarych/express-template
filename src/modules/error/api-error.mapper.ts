import { ApiErrorDto } from '@api/apiErrorDto';
import { ApiError } from './api-error.entity';

class ApiErrorMapper {
  public toApiErrorDto(entity: ApiError): ApiErrorDto {
    return {
      code: entity.code,
      message: entity.message,
    };
  }
}

export const apiErrorMapper = new ApiErrorMapper();
