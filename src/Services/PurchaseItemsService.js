import PurchaseItemsRepository from '../Repositories/PurchaseItemsRepository.js';

class PurchaseItemsService {
  async create(data) {
    const purchase = await PurchaseItemsRepository.create(data);
    return purchase;
  }

  async read() {
    const purchases = await PurchaseItemsRepository.read();
    return purchases;
  }

  async update(data) {
    const updatedPurchase = await PurchaseItemsRepository.update(data);
    return updatedPurchase;
  }

  async delete(data) {
    const deletedPurchase = await PurchaseItemsRepository.delete(data);
    return deletedPurchase;
  }
}

export default new PurchaseItemsService();
