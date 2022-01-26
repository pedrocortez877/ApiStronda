import Suppliers from '../Models/Suppliers.js';

class SupplierRepository {
  async create(data) {
    const supplier = await Suppliers.create(data);
    return supplier;
  }

  async read() {
    const suppliers = await Suppliers.findAll();
    return suppliers;
  }

  async update(data) {
    const { Id } = data;
    const updatedsupplier = await Suppliers.update(data, { where: { Id } });
    return updatedsupplier;
  }

  async delete(data) {
    const { Id } = data;
    const deletedsupplier = await Suppliers.destroy({ where: { Id } });
    return deletedsupplier;
  }
}

export default new SupplierRepository();
