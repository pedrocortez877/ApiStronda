import Customers from '../Models/Customers.js';

class CustomerRepository {
  async create(data) {
    console.log(data);
    const customer = await Customers.create(data);
    return customer;
  }

  async read() {
    const customer = await Customers.findAll();
    return customer;
  }

  async update(data) {
    const { Id } = data;
    const updatedCustomer = await Customers.update(data, { where: { Id } });
    return updatedCustomer;
  }

  async delete(data) {
    const { Id } = data;
    const deletedCustomer = await Customers.destroy({ where: { Id } });
    return deletedCustomer;
  }
}

export default new CustomerRepository();
