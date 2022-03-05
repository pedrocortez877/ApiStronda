import ProductSaleService from '../Services/ProductSaleService.js';

class ProductSaleController {
  async create(req, res) {
    const productSale = await ProductSaleService.create(req.body);

    if (!productSale) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar uma venda de produto',
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const productSales = await ProductSaleService.read();

    return res.ok(productSales);
  }

  async update(req, res) {
    const updatedProductSale = await ProductSaleService.update(req.body);

    if (!updatedProductSale) {
      return res.badRequest({
        message: 'Erro ao atualizar venda de produto',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedProductSale = await ProductSaleService.delete(req.query);

    if (!deletedProductSale) {
      return res.badRequest({
        message: 'Erro ao deletar venda de produto',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new ProductSaleController();
