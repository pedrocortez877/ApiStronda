import ServiceSaleService from '../Services/ServiceSaleService.js';

class ServiceSaleController {
  async create(req, res) {
    const serviceSale = await ServiceSaleService.create(req.body);

    if (!serviceSale.status) {
      return res.badRequest({
        message: serviceSale.message,
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const serviceSales = await ServiceSaleService.read();

    return res.ok(serviceSales);
  }

  async update(req, res) {
    const updatedServiceSale = await ServiceSaleService.update(req.body);

    if (!updatedServiceSale) {
      return res.badRequest({
        message: 'Erro ao atualizar venda de produto',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedServiceSale = await ServiceSaleService.delete(req.query);

    if (!deletedServiceSale) {
      return res.badRequest({
        message: 'Erro ao deletar uma venda de serviço',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new ServiceSaleController();
