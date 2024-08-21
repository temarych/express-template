import { container } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';
import { ApiErrorCode } from '@modules/error/api-error-code.enum';
import { ApiError } from '@modules/error/api-error.entity';
import { AuthService } from './auth.service';

export const authorize = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authService = container.resolve(AuthService);
  const accessToken = request.header('Authorization') ?? null;

  if (!accessToken) throw new ApiError(ApiErrorCode.NoAccessToken);

  const result = await authService.authorize(accessToken);

  request.user = result!.user;

  return next();
};
