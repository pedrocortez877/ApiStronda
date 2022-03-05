import ServicesOfASaleServiceRepository from '../Repositories/ServicesOfASaleServiceRepository.js';

class ServicesOfASaleService {
  async create(data) {
    const servicesOfASaleService =
      await ServicesOfASaleServiceRepository.create(data);
    return servicesOfASaleService;
  }

  async read() {
    const servicesOfASaleService =
      await ServicesOfASaleServiceRepository.read();
    return servicesOfASaleService;
  }

  async update(data) {
    const updatedServicesOfASaleService =
      await ServicesOfASaleServiceRepository.update(data);
    return updatedServicesOfASaleService;
  }

  async delete(data) {
    const deletedServicesOfASaleService =
      await ServicesOfASaleServiceRepository.delete(data);
    return deletedServicesOfASaleService;
  }
}

export default new ServicesOfASaleService();
