import { PrismaClient } from '@prisma/client';
import { Router, Request, Response } from 'express';

const prisma = new PrismaClient();
const routes = Router();

// @desc		Get all products
// @route		GET /api
routes.get(
  '/api',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await prisma.product.findMany();

      res.status(200).json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }
);

// @desc		Get all products in a category
// @route		GET /api/:category
routes.get(
  '/api/:category',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { category } = req.params;

      const products = await prisma.product.findMany({
        where: { category },
      });

      res.status(200).json(products);
    } catch (e) {
      res.status(500).json(e);
    }
  }
);

// @desc		Create a product
// @route		POST /api
routes.post(
  '/api',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, category, price } = req.body;

      const product = await prisma.product.create({
        data: {
          name,
          category,
          price,
        },
      });

      res.status(200).json(product);
    } catch (e) {
      res.status(500).json(e);
    }
  }
);

// @desc		Update a product
// @route		PUT /api/:id
routes.put(
  '/api/:id',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { name, category, price } = req.body;

      const product = await prisma.product.update({
        where: { id: Number(id) },
        data: {
          name,
          category,
          price,
        },
      });

      res.status(200).json(product);
    } catch (e) {
      res.status(500).json(e);
    }
  }
);

// @desc		Delete a product
// @route		DELETE /api/:id
routes.delete(
  '/api/:id',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const product = await prisma.product.delete({
        where: {
          id: Number(id),
        },
      });

      res.status(200).json(product);
    } catch (e) {
      res.status(404).json(e);
    }
  }
);

export default routes;
