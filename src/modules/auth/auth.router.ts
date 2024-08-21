import { container } from 'tsyringe';
import { Router } from 'express';
import { body } from '@middleware/body.middleware';
import { signupRequestSchema, loginRequestSchema } from './auth.schema';
import { AuthController } from './auth.controller';

export const authController = container.resolve(AuthController);
export const authRouter = Router();

authRouter.post('/login', body(loginRequestSchema), authController.logIn);
authRouter.post('/signup', body(signupRequestSchema), authController.signUp);
