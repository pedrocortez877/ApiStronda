import ServiceSale from '../Models/ServiceSale.js';

class ServiceSaleRepository {
  async create(data) {
    const serviceSale = await ServiceSale.create(data);
    return serviceSale;
  }

  async read() {
    const serviceSales = await ServiceSale.findAll();
    return serviceSales;
  }

  async update(data) {
    const { Id } = data;
    const updatedServiceSale = await ServiceSale.update(data, {
      where: { Id },
    });
    return updatedServiceSale;
  }

  async delete(data) {
    const { Id } = data;
    const deletedServiceSale = await ServiceSale.destroy({ where: { Id } });
    return deletedServiceSale;
  }
}

export default new ServiceSaleRepository();
