import { Router } from 'express';

import ProductSaleController from '../Controllers/ProductSaleController.js';

import CreateProductSaleValidator from '../Validators/ProductSale/CreateProductSaleValidator.js';
import UpdateProductSaleValidator from '../Validators/ProductSale/UpdateProductSaleValidator.js';
import DeleteProductSaleValidator from '../Validators/ProductSale/DeleteProductSaleValidator.js';

const routes = Router();

routes.post('/', CreateProductSaleValidator, ProductSaleController.create);
routes.get('/', ProductSaleController.read);
routes.put('/', UpdateProductSaleValidator, ProductSaleController.update);
routes.delete('/', DeleteProductSaleValidator, ProductSaleController.delete);

export default routes;
