import ProductService from '../Services/ProductService.js';

class ProductController {
  async create(req, res) {
    const product = await ProductService.create(req.body);

    if (!product) {
      return res.badRequest({
        message: 'Ocorreu um erro ao tentar cadastrar um novo produto',
      });
    }

    return res.created({ message: 'OK' });
  }

  async read(req, res) {
    const products = await ProductService.read();

    return res.ok(products);
  }

  async update(req, res) {
    const updatedProduct = await ProductService.update(req.body);

    if (!updatedProduct) {
      return res.badRequest({
        message: 'Erro ao atualizar produto',
      });
    }

    return res.ok({ message: 'OK' });
  }

  async delete(req, res) {
    const deletedProduct = await ProductService.delete(req.query);

    if (!deletedProduct) {
      return res.badRequest({
        message: 'Erro ao deletar produto',
      });
    }

    return res.noContent({ message: 'OK' });
  }
}

export default new ProductController();
