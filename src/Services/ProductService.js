import ProductRepository from '../Repositories/ProductRepository.js';
import BrandService from './BrandService.js';

class ProductService {
  async create(data) {
    const { Name, Description, BrandName } = data;

    const brand = await BrandService.findOrCreate(BrandName);

    const IdBrand = Number(brand.Id);

    const dataProduct = {
      Name,
      Description,
      IdBrand,
    };

    const product = await ProductRepository.create(dataProduct);
    return product;
  }

  async read() {
    const products = await ProductRepository.read();
    return products;
  }

  async update(data) {
    const updatedProduct = await ProductRepository.update(data);
    return updatedProduct;
  }

  async delete(data) {
    const deletedProduct = await ProductRepository.delete(data);
    return deletedProduct;
  }
}

export default new ProductService();
