import ProductSale from '../Models/ProductSale.js';

class ProductSaleRepository {
  async create(data) {
    const productSale = await ProductSale.create(data);
    return productSale;
  }

  async read() {
    const productSale = await ProductSale.findAll();
    return productSale;
  }

  async update(data) {
    const { Id } = data;
    const updatedProductSale = await ProductSale.update(data, {
      where: { Id },
    });
    return updatedProductSale;
  }

  async delete(data) {
    const { Id } = data;
    const deletedProductSale = await ProductSale.destroy({ where: { Id } });
    return deletedProductSale;
  }
}

export default new ProductSaleRepository();
