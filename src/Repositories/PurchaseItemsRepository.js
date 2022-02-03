import PurchaseItems from '../Models/PurchaseItems.js';

class PurchaseItemsRepository {
  async create(data) {
    const purchaseItem = await PurchaseItems.create(data);
    return purchaseItem;
  }

  async read() {
    const purchaseItems = await PurchaseItems.findAll();
    return purchaseItems;
  }

  async update(data) {
    const { Id } = data;
    const updatedPurchaseItems = await PurchaseItems.update(data, {
      where: { Id },
    });
    return updatedPurchaseItems;
  }

  async delete(data) {
    const { Id } = data;
    const deletedPurchaseItems = await PurchaseItems.destroy({ where: { Id } });
    return deletedPurchaseItems;
  }
}

export default new PurchaseItemsRepository();
