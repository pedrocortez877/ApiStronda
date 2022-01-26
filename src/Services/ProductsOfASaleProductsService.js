import ProductsOfASaleRepository from '../Repositories/ProductsOfASaleRepository.js';

class ProductsOfASaleService {
  async create(data) {
    const productsOfASale = await ProductsOfASaleRepository.create(data);
    return productsOfASale;
  }

  async read() {
    const productsOfASale = await ProductsOfASaleRepository.read();
    return productsOfASale;
  }

  async update(data) {
    const updatedProductsOfASale = await ProductsOfASaleRepository.update(data);
    return updatedProductsOfASale;
  }

  async delete(data) {
    const deletedProductsOfASale = await ProductsOfASaleRepository.delete(data);
    return deletedProductsOfASale;
  }
}

export default new ProductsOfASaleService();
