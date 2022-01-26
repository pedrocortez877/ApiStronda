import { Router } from 'express';

import CustomerController from '../Controllers/CustomerController.js';

import CreateCustomerValidator from '../Validators/Customer/CreateCustomerValidator.js';
import UpdateCustomerValidator from '../Validators/Customer/UpdateCustomerValidator.js';
import DeleteCustomerValidator from '../Validators/Customer/DeleteCustomerValidator.js';

const routes = Router();

routes.post('/', CreateCustomerValidator, CustomerController.create);
routes.get('/', CustomerController.read);
routes.put('/', UpdateCustomerValidator, CustomerController.update);
routes.delete('/', DeleteCustomerValidator, CustomerController.delete);

export default routes;
