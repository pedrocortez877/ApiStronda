import { Router } from 'express';

import StockController from '../Controllers/StockController.js';

import CreateStockValidator from '../Validators/Stock/CreateStockValidator.js';
import UpdateStockValidator from '../Validators/Stock/UpdateStockValidator.js';
import DeleteStockValidator from '../Validators/Stock/DeleteStockValidator.js';

const routes = Router();

routes.post('/', CreateStockValidator, StockController.create);
routes.get('/', StockController.read);
routes.put('/', UpdateStockValidator, StockController.update);
routes.delete('/', DeleteStockValidator, StockController.delete);

export default routes;
