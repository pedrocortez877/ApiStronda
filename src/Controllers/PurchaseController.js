import PurchaseService from '../Services/PurchaseService.js';

class PurchaseController {
  async create(req, res) {
    const createPurchase = await PurchaseService.create(req.body);

    if (!createPurchase.status) {
      return res.badRequest(createPurchase.message);
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const purchases = await PurchaseService.read();

    return res.ok(purchases);
  }

  async update(req, res) {
    const updatedPurchase = await PurchaseService.update(req.body);

    if (!updatedPurchase) {
      return res.badRequest({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedPurchase = await PurchaseService.delete(req.query);

    if (!deletedPurchase) {
      return res.badRequest({
        message: 'Erro ao deletar endereço',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new PurchaseController();
