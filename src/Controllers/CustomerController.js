import CustomerService from '../Services/CustomerService.js';

class CustomerController {
  async create(req, res) {
    const data = req.body;

    const customer = await CustomerService.create(data);

    if (!customer) {
      return res.status(400).json({
        message: 'Ocorreu um erro ao tentar cadastrar um novo cliente',
      });
    }

    return res.status(201).json({ message: 'OK' });
  }

  async read(req, res) {
    const customers = await CustomerService.read();

    return res.status(200).json(customers);
  }

  async update(req, res) {
    const data = req.body;

    const updatedCustomer = await CustomerService.update(data);

    if (!updatedCustomer) {
      return res.status(400).json({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.status(200).json({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedCustomer = await CustomerService.delete(data);

    if (!deletedCustomer) {
      return res.status(400).json({
        message: 'Erro ao deletar cliente',
      });
    }

    return res.status(204).json({ message: 'OK' });
  }
}

export default new CustomerController();
