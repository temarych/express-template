import { container } from 'tsyringe';
import { Router } from 'express';
import { authorize } from '@modules/auth/auth.middleware';
import { UserController } from './user.controller';

export const userController = container.resolve(UserController);
export const userRouter = Router();

userRouter.get('/me', authorize, userController.getMe);
