import BrandService from '../Services/BrandService.js';

class BrandController {
  async create(req, res) {
    const data = req.body;

    const brand = await BrandService.create(data);

    if (!brand) {
      return res.status(400).json({
        message: 'Ocorreu um erro ao tentar cadastrar uma nova marca',
      });
    }

    return res.status(201);
  }

  async read(req, res) {
    const brands = await BrandService.read();

    return res.status(200).json(brands);
  }

  async update(req, res) {
    const data = req.body;

    const updatedBrand = await BrandService.update(data);

    if (!updatedBrand) {
      return res.status(400).json({
        message: 'Erro ao atualizar marca',
      });
    }

    return res.status(200).json(updatedBrand);
  }

  async delete(req, res) {
    const data = req.body;

    const deletedBrand = await BrandService.delete(data);

    if (!deletedBrand) {
      return res.status(400).json({
        message: 'Erro ao deletar marca',
      });
    }

    return res.status(204);
  }
}

export default new BrandController();
