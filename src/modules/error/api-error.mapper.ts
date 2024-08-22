import { ApiErrorDto } from '@api/apiErrorDto';
import { ApiErrorDtoDetails } from '@api/apiErrorDtoDetails';
import { ApiError } from './api-error.entity';

class ApiErrorMapper {
  public toApiErrorDto(entity: ApiError): ApiErrorDto {
    return {
      code: entity.code,
      message: entity.message,
      details: entity.details as ApiErrorDtoDetails,
    };
  }
}

export const apiErrorMapper = new ApiErrorMapper();
