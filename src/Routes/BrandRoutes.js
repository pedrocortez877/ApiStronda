import { Router } from 'express';

import BrandController from '../Controllers/BrandController.js';

import UpdateBrandValidator from '../Validators/Brand/UpdateBrandValidator.js';
import DeleteBrandValidator from '../Validators/Brand/DeleteBrandValidator.js';

const routes = Router();

routes.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'TESTE',
  });
});
routes.get('/', BrandController.read);
routes.put('/', UpdateBrandValidator, BrandController.update);
routes.delete('/', DeleteBrandValidator, BrandController.delete);

export default routes;
