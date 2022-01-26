import ServiceSaleService from '../Services/ServiceSaleService.js';

class ServiceSaleController {
  async create(req, res) {
    const data = req.body;

    const serviceSale = await ServiceSaleService.create(data);

    if (!serviceSale) {
      return res.status(400).json({
        message: 'Ocorreu um erro ao tentar cadastrar uma venda de serviço',
      });
    }

    return res.status(201).json({ message: 'OK' });
  }

  async read(req, res) {
    const serviceSales = await ServiceSaleService.read();

    return res.status(200).json(serviceSales);
  }

  async update(req, res) {
    const data = req.body;

    const updatedServiceSale = await ServiceSaleService.update(data);

    if (!updatedServiceSale) {
      return res.status(400).json({
        message: 'Erro ao atualizar venda de produto',
      });
    }

    return res.status(200).json({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedServiceSale = await ServiceSaleService.delete(data);

    if (!deletedServiceSale) {
      return res.status(400).json({
        message: 'Erro ao deletar uma venda de serviço',
      });
    }

    return res.status(204).json({ message: 'OK' });
  }
}

export default new ServiceSaleController();
