import ServiceSaleRepository from '../Repositories/ServiceSaleRepository.js';
import ServicesOfASaleService from './ServicesOfASaleService.js';
import ProductsOfAServiceSaleService from './ProductsOfAServiceSaleService.js';
import StockService from './StockService.js';

class ServiceSaleService {
  async create(data) {
    const { ServiceSale, ProductsOfThisSale, ServicesOfThisSale } = data;
    const { DiscountValue } = ServiceSale;

    ServiceSale.ServiceSaleValue = 0;
    ServiceSale.ProductsServiceSaleValue = 0;
    ServiceSale.GrossValue = 0;
    ServiceSale.LiquidValue = 0;

    ServicesOfThisSale.forEach((item) => {
      const { ServiceValue } = item;
      ServiceSale.ServiceSaleValue += ServiceValue;
      ServiceSale.GrossValue += ServiceValue;
    });

    if (ProductsOfThisSale) {
      ProductsOfThisSale.forEach((item) => {
        const { Quantity, ProductValue } = item;
        ServiceSale.ProductsServiceSaleValue += ProductValue * Quantity;
        ServiceSale.GrossValue += ProductValue * Quantity;
      });
    }

    ServiceSale.LiquidValue = ServiceSale.GrossValue - DiscountValue;

    const serviceSale = await ServiceSaleRepository.create(ServiceSale);

    if (!serviceSale) {
      return {
        status: false,
        message: 'Ocorreu um erro ao cadastrar a venda de serviço',
      };
    }

    ServicesOfThisSale.forEach((service) => {
      service.IdSale = Number(serviceSale.Id);
    });

    const servicesOfThisSale = await ServicesOfASaleService.create(
      ServicesOfThisSale
    );

    if (!servicesOfThisSale) {
      return {
        status: false,
        message: 'Ocorreu um erro ao cadastrar os serviços desta venda',
      };
    }

    if (!ProductsOfThisSale) {
      return {
        status: true,
      };
    }

    ProductsOfThisSale.forEach((product) => {
      product.IdSale = Number(serviceSale.Id);
    });

    const productsOfThisSale = await ProductsOfAServiceSaleService.create(
      ProductsOfThisSale
    );

    if (!productsOfThisSale) {
      return {
        status: false,
        message: 'Ocorreu um erro ao cadastrar os produtos desta venda',
      };
    }

    const updateStock = await StockService.update(productsOfThisSale, false);

    if (!updateStock) {
      return {
        status: false,
        message: 'Ocorreu um erro ao tentar atualizar o estoque',
      };
    }

    return {
      status: true,
    };
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
