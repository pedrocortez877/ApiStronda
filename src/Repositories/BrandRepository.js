import Brands from '../Models/Brands.js';

class BrandRepository {
  async create(data) {
    console.log(data);
    const brand = await Brands.create(data);
    return brand;
  }

  async read() {
    const brands = await Brands.findAll();
    return brands;
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

  async findOrCreate(name) {
    const brand = await Brands.findOrCreate({
      where: { Name: name },
    });
    return brand[0].dataValues;
  }
}

export default new BrandRepository();
