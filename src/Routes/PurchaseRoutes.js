import { Router } from 'express';

import PurchaseController from '../Controllers/PurchaseController.js';

import CreatePurchaseValidator from '../Validators/Purchase/CreatePurchaseValidator.js';
import UpdatePurchaseValidator from '../Validators/Purchase/UpdatePurchaseValidator.js';
import DeletePurchaseValidator from '../Validators/Purchase/DeletePurchaseValidator.js';

const routes = Router();

routes.post('/', CreatePurchaseValidator, PurchaseController.create);
routes.get('/', PurchaseController.read);
routes.put('/', UpdatePurchaseValidator, PurchaseController.update);
routes.delete('/', DeletePurchaseValidator, PurchaseController.delete);

export default routes;
