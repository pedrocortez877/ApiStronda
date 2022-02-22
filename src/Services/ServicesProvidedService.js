import ServicesProvidedRepository from '../Repositories/ServicesProvidedRepository.js';

class ServicesProvidedService {
  async create(data) {
    const servicesProvided = await ServicesProvidedRepository.create(data);
    return servicesProvided;
  }

  async read() {
    const servicesProvided = await ServicesProvidedRepository.read();
    return servicesProvided;
  }

  async update(data) {
    const updatedServicesProvided = await ServicesProvidedRepository.update(
      data
    );
    return updatedServicesProvided;
  }

  async delete(data) {
    const deletedServicesProvided = await ServicesProvidedRepository.delete(
      data
    );
    return deletedServicesProvided;
  }

  async findOrCreate(name) {
    const ServicesProvided = await ServicesProvidedRepository.findOrCreate(
      name
    );
    return ServicesProvided;
  }
}

export default new ServicesProvidedService();
