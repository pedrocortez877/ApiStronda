import StockService from '../Services/StockService.js';

class StockController {
  async create(req, res) {
    const data = req.body;

    const stock = await StockService.create(data);

    if (!stock) {
      return res.status(400).json({
        message: 'Ocorreu um erro ao tentar cadastrar estoque',
      });
    }

    return res.status(201).json({ message: 'OK' });
  }

  async read(req, res) {
    const stocks = await StockService.read();

    return res.status(200).json(stocks);
  }

  async update(req, res) {
    const data = req.body;

    const updatedStock = await StockService.update(data);

    if (!updatedStock) {
      return res.status(400).json({
        message: 'Erro ao atualizar estoque',
      });
    }

    return res.status(200).json({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedStock = await StockService.delete(data);

    if (!deletedStock) {
      return res.status(400).json({
        message: 'Erro ao deletar estoque',
      });
    }

    return res.status(204).json({ message: 'OK' });
  }
}

export default new StockController();
