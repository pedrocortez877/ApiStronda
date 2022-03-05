import ServicesOfASaleService from '../Models/ServicesOfASaleService.js';

class ServicesOfASaleServiceRepository {
  async create(data) {
    const servicesOfASaleService = await ServicesOfASaleService.bulkCreate(
      data
    );
    return servicesOfASaleService;
  }

  async read() {
    const servicesOfASaleService = await ServicesOfASaleService.findAll();
    return servicesOfASaleService;
  }

  async update(data) {
    const { Id } = data;
    const updatedServicesOfASaleService = await ServicesOfASaleService.update(
      data,
      {
        where: { Id },
      }
    );
    return updatedServicesOfASaleService;
  }

  async delete(data) {
    const { Id } = data;
    const deletedServicesOfASaleService = await ServicesOfASaleService.destroy({
      where: { Id },
    });
    return deletedServicesOfASaleService;
  }
}

export default new ServicesOfASaleServiceRepository();
