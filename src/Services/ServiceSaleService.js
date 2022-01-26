import ServiceSaleRepository from '../Repositories/ServiceSaleRepository.js';

class ServiceSaleService {
  async create(data) {
    const serviceSale = await ServiceSaleRepository.create(data);
    return serviceSale;
  }

  async read() {
    const serviceSales = await ServiceSaleRepository.read();
    return serviceSales;
  }

  async update(data) {
    const updatedServiceSale = await ServiceSaleRepository.update(data);
    return updatedServiceSale;
  }

  async delete(data) {
    const deletedServiceSale = await ServiceSaleRepository.delete(data);
    return deletedServiceSale;
  }
}

export default new ServiceSaleService();
