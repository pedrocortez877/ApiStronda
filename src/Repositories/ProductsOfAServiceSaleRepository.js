import ProductsOfAService from '../Models/ProductsOfAService.js';

class ProductsOfAServiceRepository {
  async create(data) {
    const productsOfAService = await ProductsOfAService.create(data);
    return productsOfAService;
  }

  async read() {
    const productsOfAService = await ProductsOfAService.findAll();
    return productsOfAService;
  }

  async update(data) {
    const { Id } = data;
    const updatedProductsOfAService = await ProductsOfAService.update(data, {
      where: { Id },
    });
    return updatedProductsOfAService;
  }

  async delete(data) {
    const { Id } = data;
    const deletedProductsOfAService = await ProductsOfAService.destroy({
      where: { Id },
    });
    return deletedProductsOfAService;
  }
}

export default new ProductsOfAServiceRepository();
