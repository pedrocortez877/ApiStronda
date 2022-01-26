import ProductSaleService from '../Services/ProductSaleService.js';

class ProductSaleController {
  async create(req, res) {
    const data = req.body;

    const productSale = await ProductSaleService.create(data);

    if (!productSale) {
      return res.status(400).json({
        message: 'Ocorreu um erro ao tentar cadastrar um novo produto',
      });
    }

    return res.status(201).json({ message: 'OK' });
  }

  async read(req, res) {
    const productSales = await ProductSaleService.read();

    return res.status(200).json(productSales);
  }

  async update(req, res) {
    const data = req.body;

    const updatedProductSale = await ProductSaleService.update(data);

    if (!updatedProductSale) {
      return res.status(400).json({
        message: 'Erro ao atualizar venda de produto',
      });
    }

    return res.status(200).json({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedProductSale = await ProductSaleService.delete(data);

    if (!deletedProductSale) {
      return res.status(400).json({
        message: 'Erro ao deletar venda de produto',
      });
    }

    return res.status(204).json({ message: 'OK' });
  }
}

export default new ProductSaleController();
