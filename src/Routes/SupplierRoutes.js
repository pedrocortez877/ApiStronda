import { Router } from 'express';

import SupplierController from '../Controllers/SupplierController.js';

import CreateSupplierValidator from '../Validators/Supplier/CreateSupplierValidator.js';
import UpdateSupplierValidator from '../Validators/Supplier/UpdateSupplierValidator.js';
import DeleteSupplierValidator from '../Validators/Supplier/DeleteSupplierValidator.js';

const routes = Router();

routes.post('/', CreateSupplierValidator, SupplierController.create);
routes.get('/', SupplierController.read);
routes.put('/', UpdateSupplierValidator, SupplierController.update);
routes.delete('/', DeleteSupplierValidator, SupplierController.delete);

export default routes;
