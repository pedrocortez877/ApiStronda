import Addresses from '../Models/Addresses.js';

class AddressRepository {
  async create(data) {
    const address = await Addresses.create(data);
    return address;
  }

  async read() {
    const addresss = await Addresses.findAll();
    return addresss;
  }

  async update(data) {
    const { Id } = data;
    const updatedAddress = await Addresses.update(data, { where: { Id } });
    return updatedAddress;
  }

  async delete(data) {
    const { Id } = data;
    const deletedAddress = await Addresses.destroy({ where: { Id } });
    return deletedAddress;
  }
}

export default new AddressRepository();
