import BrandService from '../Services/BrandService.js';

class BrandController {
  async create(req, res) {
    const brand = await BrandService.create(req.body);

    if (!brand) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar uma nova marca',
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const brands = await BrandService.read();

    return res.ok(brands);
  }

  async update(req, res) {
    const updatedBrand = await BrandService.update(req.body);

    if (!updatedBrand) {
      return res.badRequest({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedBrand = await BrandService.delete(req.query);

    if (!deletedBrand) {
      return res.badRequest({
        message: 'Erro ao deletar marca',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new BrandController();
