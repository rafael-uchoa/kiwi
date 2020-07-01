import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import routes from './routes';

(async () => {
  await createConnection();

  const app = express();
  const port = 7777;

  app.use(express.json());
  app.use(cors());
  app.use(routes);

  app.listen(port, () => console.log(`Server listening on port ${port}`));
})();
