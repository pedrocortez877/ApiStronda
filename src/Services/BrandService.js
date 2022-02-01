import BrandRepository from '../Repositories/BrandRepository.js';

class BrandService {
  async create(data) {
    const brand = await BrandRepository.create(data);
    return brand;
  }

  async read() {
    const brand = await BrandRepository.read();
    return brand;
  }

  async update(data) {
    const updatedBrand = await BrandRepository.update(data);
    return updatedBrand;
  }

  async delete(data) {
    const deletedBrand = await BrandRepository.delete(data);
    return deletedBrand;
  }

  async findOrCreate(name) {
    const brand = await BrandRepository.findOrCreate(name);
    return brand;
  }
}

export default new BrandService();
