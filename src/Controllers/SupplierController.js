import SupplierService from '../Services/SupplierService.js';

class SupplierController {
  async create(req, res) {
    const data = req.body;

    const supplier = await SupplierService.create(data);

    if (!supplier) {
      return res.status(400).json({
        message: 'Ocorreu um erro ao tentar cadastrar um novo endereço',
      });
    }

    return res.status(201).json({ message: 'OK' });
  }

  async read(req, res) {
    const suppliers = await SupplierService.read();

    return res.status(200).json(suppliers);
  }

  async update(req, res) {
    const data = req.body;

    const updatedSupplier = await SupplierService.update(data);

    if (!updatedSupplier) {
      return res.status(400).json({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.status(200).json({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedSupplier = await SupplierService.delete(data);

    if (!deletedSupplier) {
      return res.status(400).json({
        message: 'Erro ao deletar endereço',
      });
    }

    return res.status(204).json({ message: 'OK' });
  }
}

export default new SupplierController();
