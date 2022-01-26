import CustomerRepository from '../Repositories/CustomerRepository.js';

class CustomerService {
  async create(data) {
    const customer = await CustomerRepository.create(data);
    return customer;
  }

  async read() {
    const customer = await CustomerRepository.read();
    return customer;
  }

  async update(data) {
    const updatedCustomer = await CustomerRepository.update(data);
    return updatedCustomer;
  }

  async delete(data) {
    const deletedCustomer = await CustomerRepository.delete(data);
    return deletedCustomer;
  }
}

export default new CustomerService();
