import Stock from '../Models/Stock.js';

class SupplierRepository {
  async create(data) {
    const stock = await Stock.create(data);
    return stock;
  }

  async read() {
    const stocks = await Stock.findAll();
    return stocks;
  }

  async update(data) {
    const { Id } = data;
    const updatedStock = await Stock.update(data, { where: { Id } });
    return updatedStock;
  }

  async delete(data) {
    const { Id } = data;
    const deletedStock = await Stock.destroy({ where: { Id } });
    return deletedStock;
  }
}

export default new SupplierRepository();
