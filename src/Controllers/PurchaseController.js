import PurchaseService from '../Services/PurchaseService.js';

class PurchaseController {
  async create(req, res) {
    const createPurchase = await PurchaseService.create(req.body);

    if (!createPurchase.status) {
      return res.status(400).json(createPurchase.message);
    }

    return res.status(201).json({ message: 'OK' });
  }

  async read(req, res) {
    const purchases = await PurchaseService.read();

    return res.status(200).json(purchases);
  }

  async update(req, res) {
    const data = req.body;

    const updatedPurchase = await PurchaseService.update(data);

    if (!updatedPurchase) {
      return res.status(400).json({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.status(200).json({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedPurchase = await PurchaseService.delete(data);

    if (!deletedPurchase) {
      return res.status(400).json({
        message: 'Erro ao deletar endereço',
      });
    }

    return res.status(204).json({ message: 'OK' });
  }
}

export default new PurchaseController();
