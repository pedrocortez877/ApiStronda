import StockRepository from '../Repositories/StockRepository.js';

class StockService {
  async create(data) {
    let stock = null;

    data.forEach(async (product) => {
      const { IdProduct, Quantity } = product;
      const dataCreateStock = {
        IdProduct: Number(IdProduct),
        Quantity: Number(Quantity),
      };

      stock = await StockRepository.create(dataCreateStock);

      if (!stock[1]) {
        const updatedQuantity =
          Number(stock[0].dataValues.Quantity) + Number(Quantity);
        stock[0].Quantity = updatedQuantity;
        this.update(stock[0].dataValues);
      }
    });
    return stock;
  }

  async read() {
    const stock = await StockRepository.read();
    return stock;
  }

  async update(data) {
    const updatedStock = await StockRepository.update(data);
    return updatedStock;
  }

  async delete(data) {
    const deletedStock = await StockRepository.delete(data);
    return deletedStock;
  }
}

export default new StockService();
