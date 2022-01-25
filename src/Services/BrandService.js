import BrandRepository from '../Repositories/BrandRepository.js';

class BrandService {
  async create(data) {
    const brand = await BrandRepository.create(data);
    return brand;
  }

  async read() {
    const brand = await BrandRepository.findAll();
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
}

export default new BrandService();
