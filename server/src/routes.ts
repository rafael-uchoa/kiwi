import { Router } from 'express';
import ProductController from './controllers/ProductController';

const routes = Router();

routes
  .get('/api', ProductController.list)
  .post('/api', ProductController.create)
  .delete('/api/:id', ProductController.delete);

export default routes;
