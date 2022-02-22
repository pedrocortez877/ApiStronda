import CustomerService from '../Services/CustomerService.js';

class CustomerController {
  async create(req, res) {
    const data = req.body;

    const customer = await CustomerService.create(data);

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
    const data = req.body;

    const updatedCustomer = await CustomerService.update(data);

    if (!updatedCustomer) {
      return res.badRequest({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedCustomer = await CustomerService.delete(data);

    if (!deletedCustomer) {
      return res.badRequest({
        message: 'Erro ao deletar cliente',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new CustomerController();
