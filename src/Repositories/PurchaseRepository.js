import Purchases from '../Models/Purchases.js';

class PurchaseRepository {
  async create(data) {
    const purchases = await Purchases.create(data);
    return purchases;
  }

  async read() {
    const purchases = await Purchases.findAll();
    return purchases;
  }

  async update(data) {
    const { Id } = data;
    const updatedPurchases = await Purchases.update(data, { where: { Id } });
    return updatedPurchases;
  }

  async delete(data) {
    const { Id } = data;
    const deletedPurchases = await Purchases.destroy({ where: { Id } });
    return deletedPurchases;
  }
}

export default new PurchaseRepository();
