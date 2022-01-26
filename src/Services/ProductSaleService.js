import ProductSaleRepository from '../Repositories/ProductSaleRepository.js';

class ProductSaleService {
  async create(data) {
    const productSale = await ProductSaleRepository.create(data);
    return productSale;
  }

  async read() {
    const productSales = await ProductSaleRepository.read();
    return productSales;
  }

  async update(data) {
    const updatedProductSale = await ProductSaleRepository.update(data);
    return updatedProductSale;
  }

  async delete(data) {
    const deletedProductSale = await ProductSaleRepository.delete(data);
    return deletedProductSale;
  }
}

export default new ProductSaleService();
