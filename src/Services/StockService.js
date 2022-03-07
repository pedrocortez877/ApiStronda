import StockRepository from '../Repositories/StockRepository.js';

class StockService {
  async create(data) {
    const stock = await StockRepository.create(data);
    return stock;
  }

  async read() {
    const stock = await StockRepository.read();
    return stock;
  }

  async update(data, addToStock) {
    let stock = null;

    data.forEach(async (product) => {
      const { IdProduct, Quantity } = product;
      const dataUpdateStock = {
        IdProduct: Number(IdProduct),
        Quantity: Number(Quantity),
      };

      if (addToStock) {
        stock = await StockRepository.create(dataUpdateStock);

        console.log(stock[1]);

        if (!stock[1]) {
          const updatedQuantity =
            Number(stock[0].dataValues.Quantity) + Number(Quantity);
          stock[0].Quantity = updatedQuantity;
          StockRepository.update(stock[0].dataValues);
        }
        return;
      }

      stock = await StockRepository.findOne(dataUpdateStock);

      if (stock) {
        const updatedQuantity =
          Number(stock.dataValues.Quantity) - Number(Quantity);
        stock.Quantity = updatedQuantity;
        StockRepository.update(stock.dataValues);
        return;
      }

      dataUpdateStock.Quantity = -1;

      stock = await StockRepository.create(dataUpdateStock);
    });

    return true;
  }

  async delete(data) {
    const deletedStock = await StockRepository.delete(data);
    return deletedStock;
  }
}

export default new StockService();
