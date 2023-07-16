import Product, { IProduct } from "../models/product";

export class ProductService {
  getAll = async (limit = 20, skip = 0, sort = ""): Promise<IProduct[]> => {
    try {
      let products: IProduct[] = [];
      products = await Product.find().skip(skip).limit(limit).exec();
      return products;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  getById = async (vendorCode: string): Promise<IProduct | null> => {
    try {
      const product = await Product.findOne({ vendorCode }).exec();
      return product;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
}

const productService = new ProductService();
export default productService;
