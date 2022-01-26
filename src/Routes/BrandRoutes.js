import { Router } from 'express';

import BrandController from '../Controllers/BrandController.js';

import CreateBrandValidator from '../Validators/Brand/CreateBrandValidator.js';
import UpdateBrandValidator from '../Validators/Brand/UpdateBrandValidator.js';
import DeleteBrandValidator from '../Validators/Brand/DeleteBrandValidator.js';

const routes = Router();

routes.post('/', CreateBrandValidator, BrandController.create);
routes.get('/', BrandController.read);
routes.put('/', UpdateBrandValidator, BrandController.update);
routes.delete('/', DeleteBrandValidator, BrandController.delete);

export default routes;
