import BrandService from '../Services/BrandService.js';

class BrandController {
  async create(req, res) {
    const data = req.body;

    const brand = await BrandService.create(data);

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
    const data = req.body;

    const updatedBrand = await BrandService.update(data);

    if (!updatedBrand) {
      return res.badRequest({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const data = req.query;

    const deletedBrand = await BrandService.delete(data);

    if (!deletedBrand) {
      return res.badRequest({
        message: 'Erro ao deletar marca',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new BrandController();
