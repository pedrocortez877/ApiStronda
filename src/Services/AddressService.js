import AddressRepository from '../Repositories/AddressRepository.js';

class AddressService {
  async create(data) {
    const address = await AddressRepository.create(data);
    return address;
  }

  async read() {
    const address = await AddressRepository.read();
    return address;
  }

  async update(data) {
    const updatedAddress = await AddressRepository.update(data);
    return updatedAddress;
  }

  async delete(data) {
    const deletedAddress = await AddressRepository.delete(data);
    return deletedAddress;
  }
}

export default new AddressService();
