import AddressService from '../Services/AddressService.js';

class AddressController {
  async create(req, res) {
    const address = await AddressService.create(req.body);

    if (!address) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar um novo endereço',
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const addresses = await AddressService.read();

    if (!addresses) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar buscar o endereço',
      });
    }

    return res.ok(addresses);
  }

  async update(req, res) {
    const updatedAddress = await AddressService.update(req.body);

    if (!updatedAddress) {
      return res.badRequest({
        message: 'Erro ao atualizar endereço',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedAddress = await AddressService.delete(req.query);

    if (!deletedAddress) {
      return res.badRequest({
        message: 'Erro ao deletar endereço',
      });
    }

    return res.noContent();
  }
}

export default new AddressController();
