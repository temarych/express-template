import { ZodSchema, z } from 'zod';
import { SignupRequestDto, LoginRequestDto } from '@api/index';

export const signupRequestSchema: ZodSchema<SignupRequestDto> = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const loginRequestSchema: ZodSchema<LoginRequestDto> = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
