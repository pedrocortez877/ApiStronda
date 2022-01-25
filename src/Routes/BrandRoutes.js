import { Router } from 'express';

import BrandController from '../Controllers/BrandController.js';

import CreateBrandValidator from '../Validators/Brands/CreateBrandValidator.js';
import UpdateBrandValidator from '../Validators/Brands/UpdateBrandValidator.js';
import DeleteBrandValidator from '../Validators/Brands/DeleteBrandValidator.js';

const routes = Router();

routes.post('/', CreateBrandValidator, BrandController.create);
routes.get('/', BrandController.read);
routes.put('/', UpdateBrandValidator, BrandController.update);
routes.delete('/', DeleteBrandValidator, BrandController.delete);

export default routes;
