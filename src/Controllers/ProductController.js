import ProductService from '../Services/ProductService.js';

class ProductController {
  async create(req, res) {
    const data = req.body;

    const product = await ProductService.create(data);

    if (!product) {
      return res.status(400).json({
        message: 'Ocorreu um erro ao tentar cadastrar um novo produto',
      });
    }

    return res.status(201);
  }

  async read(req, res) {
    const products = await ProductService.read();

    return res.status(200).json(products);
  }

  async update(req, res) {
    const data = req.body;

    const updatedProduct = await ProductService.update(data);

    if (!updatedProduct) {
      return res.status(400).json({
        message: 'Erro ao atualizar produto',
      });
    }

    return res.status(200).json(updatedProduct);
  }

  async delete(req, res) {
    const data = req.body;

    const deletedProduct = await ProductService.delete(data);

    if (!deletedProduct) {
      return res.status(400).json({
        message: 'Erro ao deletar produto',
      });
    }

    return res.status(204);
  }
}

export default new ProductController();
