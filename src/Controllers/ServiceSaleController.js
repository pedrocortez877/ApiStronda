import ServiceSaleService from '../Services/ServiceSaleService.js';

class ServiceSaleController {
  async create(req, res) {
    const data = req.body;

    const serviceSale = await ServiceSaleService.create(data);

    if (!serviceSale) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar uma venda de serviço',
      });
    }

    return res.status(201).json({ message: 'OK' });
  }

  async read(req, res) {
    const serviceSales = await ServiceSaleService.read();

    return res.ok(serviceSales);
  }

  async update(req, res) {
    const data = req.body;

    const updatedServiceSale = await ServiceSaleService.update(data);

    if (!updatedServiceSale) {
      return res.badRequest({
        message: 'Erro ao atualizar venda de produto',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedServiceSale = await ServiceSaleService.delete(data);

    if (!deletedServiceSale) {
      return res.badRequest({
        message: 'Erro ao deletar uma venda de serviço',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new ServiceSaleController();
