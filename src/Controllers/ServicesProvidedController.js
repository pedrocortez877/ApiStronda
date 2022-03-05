import ServicesProvidedService from '../Services/ServicesProvidedService.js';

class ServicesProvidedController {
  async create(req, res) {
    const servicesProvided = await ServicesProvidedService.create(req.body);

    if (!servicesProvided) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar um novo serviço',
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const servicesProvided = await ServicesProvidedService.read();

    return res.ok(servicesProvided);
  }

  async update(req, res) {
    const updatedServicesProvided = await ServicesProvidedService.update(
      req.body
    );

    if (!updatedServicesProvided) {
      return res.badRequest({
        message: 'Erro ao atualizar serviço',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedServicesProvided = await ServicesProvidedService.delete(
      req.query
    );

    if (!deletedServicesProvided) {
      return res.badRequest({
        message: 'Erro ao deletar serviço',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new ServicesProvidedController();
