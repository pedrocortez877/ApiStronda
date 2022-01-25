import { Router } from 'express';

import ProductController from '../Controllers/ProductController.js';

import CreateProductValidator from '../Validators/Products/CreateProductValidator.js';
import UpdateProductValidator from '../Validators/Products/UpdateProductValidator.js';
import DeleteProductValidator from '../Validators/Products/DeleteProductValidator.js';

const routes = Router();

routes.post('/', CreateProductValidator, ProductController.create);
routes.get('/', ProductController.read);
routes.put('/', UpdateProductValidator, ProductController.update);
routes.delete('/', DeleteProductValidator, ProductController.delete);
