import ProductRepository from '../Repositories/ProductRepository.js';

class ProductService {
  async create(data) {
    const product = await ProductRepository.create(data);
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
