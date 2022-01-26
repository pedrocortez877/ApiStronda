import SupplierRepository from '../Repositories/SupplierRepository.js';

class SupplierService {
  async create(data) {
    const supplier = await SupplierRepository.create(data);
    return supplier;
  }

  async read() {
    const suppliers = await SupplierRepository.read();
    return suppliers;
  }

  async update(data) {
    const updatedSupplier = await SupplierRepository.update(data);
    return updatedSupplier;
  }

  async delete(data) {
    const deletedSupplier = await SupplierRepository.delete(data);
    return deletedSupplier;
  }
}

export default new SupplierService();
