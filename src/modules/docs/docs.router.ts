import fs from 'fs';
import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

export const openapiYaml = fs.readFileSync('schema.yaml', 'utf8');
export const openapiJson = yaml.parse(openapiYaml);

export const docsRouter = Router();

docsRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiJson));
docsRouter.use('/schema.yaml', (_, response) =>
  response.type('yaml').send(openapiYaml),
);
