import { Router } from 'express';

import AddressController from '../Controllers/AddressController.js';

import CreateAddressValidator from '../Validators/Address/CreateAddressValidator.js';
import UpdateAddressValidator from '../Validators/Address/UpdateAddressValidator.js';
import DeleteAddressValidator from '../Validators/Address/DeleteAddressValidator.js';

const routes = Router();

routes.post('/', CreateAddressValidator, AddressController.create);
routes.get('/', AddressController.read);
routes.put('/', UpdateAddressValidator, AddressController.update);
routes.delete('/', DeleteAddressValidator, AddressController.delete);

export default routes;
