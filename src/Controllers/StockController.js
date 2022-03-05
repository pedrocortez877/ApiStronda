import StockService from '../Services/StockService.js';

class StockController {
  async create(req, res) {
    const stock = await StockService.create(req.body);

    if (!stock) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar estoque',
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const stocks = await StockService.read();

    return res.ok(stocks);
  }

  async update(req, res) {
    const updatedStock = await StockService.update(req.body);

    if (!updatedStock) {
      return res.badRequest({
        message: 'Erro ao atualizar estoque',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedStock = await StockService.delete(req.query);

    if (!deletedStock) {
      return res.badRequest({
        message: 'Erro ao deletar estoque',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new StockController();
