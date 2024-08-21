import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import { userRouter } from '@modules/user/user.router';
import { authRouter } from '@modules/auth/auth.router';
import { handleError } from '@modules/error/error-middleware';

export const app = express();
export const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(authRouter);

app.use(handleError);

app.listen(port, async () => {
  console.log(`Express server is listening at http://localhost:${port}`);
});
