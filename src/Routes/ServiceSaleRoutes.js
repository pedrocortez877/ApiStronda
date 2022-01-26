import { Router } from 'express';

import ServiceSaleController from '../Controllers/ServiceSaleController.js';

import CreateServiceSaleValidator from '../Validators/ServiceSale/CreateServiceSaleValidator.js';
import UpdateServiceSaleValidator from '../Validators/ServiceSale/UpdateServiceSaleValidator.js';
import DeleteServiceSaleValidator from '../Validators/ServiceSale/DeleteServiceSaleValidator.js';

const routes = Router();

routes.post('/', CreateServiceSaleValidator, ServiceSaleController.create);
routes.get('/', ServiceSaleController.read);
routes.put('/', UpdateServiceSaleValidator, ServiceSaleController.update);
routes.delete('/', DeleteServiceSaleValidator, ServiceSaleController.delete);

export default routes;
