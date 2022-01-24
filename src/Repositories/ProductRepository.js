import Products from '../Models/Products.js';

class ProductRepository {
  async create(data) {
    const product = await Products.create(data);
    return product;
  }

  async read() {
    const products = await Products.findAll();
    return products;
  }

  async update(data) {
    const { Id } = data;
    const updatedProduct = await Products.update(data, { where: { Id } });
    return updatedProduct;
  }

  async delete(data) {
    const { Id } = data;
    const deletedProduct = await Products.destroy({ where: { Id } });
    return deletedProduct;
  }
}

export default new ProductRepository();
