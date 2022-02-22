import SupplierService from '../Services/SupplierService.js';

class SupplierController {
  async create(req, res) {
    const data = req.body;

    const supplier = await SupplierService.create(data);

    if (!supplier) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar um novo endereço',
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const suppliers = await SupplierService.read();

    return res.ok(suppliers);
  }

  async update(req, res) {
    const data = req.body;

    const updatedSupplier = await SupplierService.update(data);

    if (!updatedSupplier) {
      return res.badRequest({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedSupplier = await SupplierService.delete(data);

    if (!deletedSupplier) {
      return res.badRequest({
        message: 'Erro ao deletar endereço',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new SupplierController();
