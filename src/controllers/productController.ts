import { Request, Response } from "express";
import { IProduct } from "../models/product";
import productService from "../services/productService";

export class ProductController {
  getAll = async (req: Request, res: Response) => {
    const { limit, skip, sort } = req.params;
    let products: IProduct[] = [];

    if (limit && skip && sort) {
      products = await productService.getAll(+limit, +skip, sort);
    }

    products = await productService.getAll();

    return res.status(200).send({ products });
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) return res.status(422);

    const product = await productService.getById(id);

    if (!product) return res.status(404).send({ errorMsg: "No product found" });

    return res.status(200).send({ product });
  };
}

const productController = new ProductController();
export default productController;
