import AddressRepository from '../Repositories/AddressRepository.js';

class AddressService {
  async create(data) {
    const address = await AddressRepository.create(data);
    return address;
  }

  async read() {
    const addresses = await AddressRepository.read();
    return addresses;
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
