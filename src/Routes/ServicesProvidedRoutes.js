import { Router } from 'express';

import ServicesProvidedController from '../Controllers/ServicesProvidedController.js';

import CreateServicesProvidedValidator from '../Validators/ServicesProvided/CreateServiceProvidedValidator.js';
import UpdateServicesProvidedValidator from '../Validators/ServicesProvided/UpdateServiceProviderValidator.js';
import DeleteServicesProvidedValidator from '../Validators/ServicesProvided/DeleteServiceProvidedValidator.js';

const routes = Router();

routes.post(
  '/',
  CreateServicesProvidedValidator,
  ServicesProvidedController.create
);
routes.get('/', ServicesProvidedController.read);
routes.put(
  '/',
  UpdateServicesProvidedValidator,
  ServicesProvidedController.update
);
routes.delete(
  '/',
  DeleteServicesProvidedValidator,
  ServicesProvidedController.delete
);

export default routes;
