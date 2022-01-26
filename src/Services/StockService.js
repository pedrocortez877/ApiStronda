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
