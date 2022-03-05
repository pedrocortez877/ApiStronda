import ServiceSaleRepository from '../Repositories/ServiceSaleRepository.js';

class ServiceSaleService {
  async create(data) {
    const { ServiceSale, ItemsServiceSale, ServiceProvided } = data;

    ServiceSale.ServiceSaleValue = ServiceProvided.LaborValue;

    if (ItemsServiceSale) {
      ItemsServiceSale.forEach((item) => {
        const { Quantity, ProductValue } = item;
        ServiceSale.ServiceSaleValue += ProductValue * Quantity;
      });
    }

    console.log(ServiceSale);
    console.log(ItemsServiceSale);
    console.log(ServiceProvided);

    // const serviceSale = ServiceSaleRepository.create(ServiceSale);

    return ServiceSale;
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
