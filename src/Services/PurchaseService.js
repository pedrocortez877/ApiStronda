import PurchaseRepository from '../Repositories/PurchaseRepository.js';
import PurchaseItemsService from './PurchaseItemsService.js';

class PurchaseService {
  async create(data) {
    const { Purchase, PurchaseItems } = data;

    Purchase.TotalPrice = 0;

    PurchaseItems.forEach((item) => {
      Purchase.TotalPrice += item.PurchasePrice * item.Quantity;
    });

    const purchase = await PurchaseRepository.create(Purchase);

    if (!purchase) {
      return {
        status: false,
        message: 'Ocorreu um erro ao tentar cadastrar uma nova compra',
      };
    }

    PurchaseItems.forEach((item) => {
      item.IdPurchase = purchase.Id;
    });

    const createPurchaseItems = await PurchaseItemsService.create(
      PurchaseItems
    );

    if (!createPurchaseItems) {
      return {
        status: false,
        message: 'Ocorreu um erro ao tentar cadastrar os produtos desta compra',
      };
    }

    return {
      status: true,
    };
  }

  async read() {
    const purchases = await PurchaseRepository.read();
    return purchases;
  }

  async update(data) {
    const updatedPurchase = await PurchaseRepository.update(data);
    return updatedPurchase;
  }

  async delete(data) {
    const deletedPurchase = await PurchaseRepository.delete(data);
    return deletedPurchase;
  }
}

export default new PurchaseService();
