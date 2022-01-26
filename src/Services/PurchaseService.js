import PurchaseRepository from '../Repositories/PurchaseRepository.js';

class PurchaseService {
  async create(data) {
    const purchase = await PurchaseRepository.create(data);
    return purchase;
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
