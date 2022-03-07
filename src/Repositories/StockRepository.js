import Stock from '../Models/Stock.js';

class SupplierRepository {
  async create(data) {
    const { IdProduct } = data;

    const stock = await Stock.findOrCreate({
      where: { IdProduct },
      defaults: data,
    });

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

  async findOne(data) {
    const { IdProduct } = data;
    const stock = await Stock.findOne({ where: { IdProduct } });
    return stock;
  }
}

export default new SupplierRepository();
