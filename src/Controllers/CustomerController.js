import CustomerService from '../Services/CustomerService.js';

class CustomerController {
  async create(req, res) {
    const customer = await CustomerService.create(req.body);

    if (!customer) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar um novo cliente',
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const customers = await CustomerService.read();

    return res.ok(customers);
  }

  async update(req, res) {
    const updatedCustomer = await CustomerService.update(req.body);

    if (!updatedCustomer) {
      return res.badRequest({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedCustomer = await CustomerService.delete(req.query);

    if (!deletedCustomer) {
      return res.badRequest({
        message: 'Erro ao deletar cliente',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new CustomerController();
