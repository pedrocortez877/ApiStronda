import ProductSaleRepository from '../Repositories/ProductSaleRepository.js';

import ProductsOfASaleProductService from './ProductsOfASaleProductsService.js';
import StockService from './StockService.js';

class ProductSaleService {
  async create(data) {
    const { ProductSale, ItemsProductSale } = data;
    const { DiscountValue } = ProductSale;

    ProductSale.GrossValue = 0;
    ProductSale.LiquidValue = 0;

    ItemsProductSale.forEach((item) => {
      const { ProductValue, Quantity } = item;
      ProductSale.GrossValue += ProductValue * Quantity;
    });

    ProductSale.LiquidValue = ProductSale.GrossValue - DiscountValue;

    const productSale = await ProductSaleRepository.create(ProductSale);

    if (!productSale) {
      return {
        status: false,
        message: 'Ocorreu um erro ao tentar cadastrar a venda de produto',
      };
    }

    ItemsProductSale.forEach((item) => {
      item.IdSale = Number(productSale.Id);
    });

    const itemsProductSale = await ProductsOfASaleProductService.create(
      ItemsProductSale
    );

    if (!itemsProductSale) {
      return {
        status: false,
        message: 'Ocorreu um erro ao tentar cadastrar os produtos desta venda',
      };
    }

    const updateStock = await StockService.update(itemsProductSale, false);

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
    const productSales = await ProductSaleRepository.read();
    return productSales;
  }

  async update(data) {
    const updatedProductSale = await ProductSaleRepository.update(data);
    return updatedProductSale;
  }

  async delete(data) {
    const deletedProductSale = await ProductSaleRepository.delete(data);
    return deletedProductSale;
  }
}

export default new ProductSaleService();
