import Purchases from '../Models/Purchases.js';

class PurchaseRepository {
  async create(data) {
    const purchase = await Purchases.create(data);
    return purchase;
  }

  async read() {
    const purchases = await Purchases.findAll();
    return purchases;
  }

  async update(data) {
    const { Id } = data;
    const updatedPurchase = await Purchases.update(data, { where: { Id } });
    return updatedPurchase;
  }

  async delete(data) {
    const { Id } = data;
    const deletedPurchase = await Purchases.destroy({ where: { Id } });
    return deletedPurchase;
  }
}

export default new PurchaseRepository();
