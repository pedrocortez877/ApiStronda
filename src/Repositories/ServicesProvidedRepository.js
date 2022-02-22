import ServicesProvided from '../Models/ServicesProvided.js';

class ServicesProvidedRepository {
  async create(data) {
    const brand = await ServicesProvided.create(data);
    return brand;
  }

  async read() {
    const servicesProvided = await ServicesProvided.findAll();
    return servicesProvided;
  }

  async update(data) {
    const { Id } = data;
    const updatedServicesProvided = await ServicesProvided.update(data, {
      where: { Id },
    });
    return updatedServicesProvided;
  }

  async delete(data) {
    const { Id } = data;
    const deletedServicesProvided = await ServicesProvided.destroy({
      where: { Id },
    });
    return deletedServicesProvided;
  }

  async findOrCreate(name) {
    const serviceProvided = await ServicesProvided.findOrCreate({
      where: { Name: name },
    });
    return serviceProvided[0].dataValues;
  }
}

export default new ServicesProvidedRepository();
