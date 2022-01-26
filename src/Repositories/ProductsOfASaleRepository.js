import ProductsOfASale from '../Models/ProductsOfASale.js';

class ProductsOfASaleRepository {
  async create(data) {
    const productsOfASale = await ProductsOfASale.create(data);
    return productsOfASale;
  }

  async read() {
    const productsOfASale = await ProductsOfASale.findAll();
    return productsOfASale;
  }

  async update(data) {
    const { Id } = data;
    const updatedProductsOfASale = await ProductsOfASale.update(data, {
      where: { Id },
    });
    return updatedProductsOfASale;
  }

  async delete(data) {
    const { Id } = data;
    const deletedProductsOfASale = await ProductsOfASale.destroy({
      where: { Id },
    });
    return deletedProductsOfASale;
  }
}

export default new ProductsOfASaleRepository();
