import { ZodSchema, z } from 'zod';
import { SignupRequestDto, LoginRequestDto } from '@api/index';

export const signupRequestSchema: ZodSchema<Required<SignupRequestDto>> =
  z.object({
    email: z.string().email(),
    name: z.string().min(1),
    password: z.string().min(1),
  });

export const loginRequestSchema: ZodSchema<Required<LoginRequestDto>> =
  z.object({
    email: z.string().email(),
    password: z.string().min(1),
  });
