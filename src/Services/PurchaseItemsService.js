import PurchaseItemsRepository from '../Repositories/PurchaseItemsRepository.js';

class PurchaseItemsService {
  async create(data) {
    const purchaseItems = await PurchaseItemsRepository.create(data);
    return purchaseItems;
  }

  async read() {
    const purchaseItems = await PurchaseItemsRepository.read();
    return purchaseItems;
  }

  async update(data) {
    const updatedPurchaseItems = await PurchaseItemsRepository.update(data);
    return updatedPurchaseItems;
  }

  async delete(data) {
    const deletedPurchaseItems = await PurchaseItemsRepository.delete(data);
    return deletedPurchaseItems;
  }
}

export default new PurchaseItemsService();
