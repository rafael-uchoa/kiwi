import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Product from '../entity/Product';

export default {
  async list(req: Request, res: Response) {
    try {
      const products = await getRepository(Product).find();

      res.status(200);
      res.json(products);
    } catch ({ message }) {
      res.status(500);
      res.json(message);
    }
  },

  async create(req: Request, res: Response) {
    try {
      const product = await getRepository(Product).save(req.body);

      res.status(201);
      res.json(product);
    } catch ({ message }) {
      res.status(400);
      res.json(message);
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const product = await getRepository(Product).findOne({
        id: parseInt(req.params.id),
      });

      if (!product) res.status(400).json('Could not find product.');

      await getRepository(Product).remove(product!);

      res.status(200);
      res.json(product);
    } catch ({ message }) {
      res.status(404);
      res.json(message);
    }
  },
};
