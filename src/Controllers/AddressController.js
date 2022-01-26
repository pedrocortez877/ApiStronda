import AddressService from '../Services/AddressService.js';

class AddressController {
  async create(req, res) {
    const data = req.body;

    const address = await AddressService.create(data);

    if (!address) {
      return res.status(400).json({
        message: 'Ocorreu um erro ao tentar cadastrar um novo endereço',
      });
    }

    return res.status(201).json({ message: 'OK' });
  }

  async read(req, res) {
    const address = await AddressService.read();

    return res.status(200).json(address);
  }

  async update(req, res) {
    const data = req.body;

    const updatedAddress = await AddressService.update(data);

    if (!updatedAddress) {
      return res.status(400).json({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.status(200).json({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedAddress = await AddressService.delete(data);

    if (!deletedAddress) {
      return res.status(400).json({
        message: 'Erro ao deletar endereço',
      });
    }

    return res.status(204).json({ message: 'OK' });
  }
}

export default new AddressController();
