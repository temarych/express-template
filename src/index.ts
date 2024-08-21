import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';

export const app = express();
export const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.listen(port, async () => {
  console.log(`Express server is listening at http://localhost:${port}`);
});
