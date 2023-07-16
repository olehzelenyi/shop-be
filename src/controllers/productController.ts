import { Request, Response } from "express";

export class ProductController {
  getAll = async (req: Request, res: Response) => {
    const products: any = [];
    return res.status(200).send({ products });
  };

  getById = async (req: Request, res: Response) => {
    const product = undefined;
    return res.status(200).send({ product });
  };
}

const productController = new ProductController();
export default productController;
