import Brands from '../Models/Brands.js';

class BrandRepository {
  async create(data) {
    const product = await Brands.create(data);
    return product;
  }

  async read() {
    const products = await Brands.findAll();
    return products;
  }

  async update(data) {
    const { Id } = data;
    const updatedBrand = await Brands.update(data, { where: { Id } });
    return updatedBrand;
  }

  async delete(data) {
    const { Id } = data;
    const deletedBrand = await Brands.destroy({ where: { Id } });
    return deletedBrand;
  }
}

export default new BrandRepository();
