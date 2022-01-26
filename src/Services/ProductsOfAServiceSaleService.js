import ProductsOfAServiceRepository from '../Repositories/ProductsOfAServiceSaleRepository.js';

class ProductsOfAServiceService {
  async create(data) {
    const productsOfAService = await ProductsOfAServiceRepository.create(data);
    return productsOfAService;
  }

  async read() {
    const productsOfAService = await ProductsOfAServiceRepository.read();
    return productsOfAService;
  }

  async update(data) {
    const updatedProductsOfAService = await ProductsOfAServiceRepository.update(
      data
    );
    return updatedProductsOfAService;
  }

  async delete(data) {
    const deletedProductsOfAService = await ProductsOfAServiceRepository.delete(
      data
    );
    return deletedProductsOfAService;
  }
}

export default new ProductsOfAServiceService();
