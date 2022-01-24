import { Router } from 'express';

import UserController from '../Controllers/UserController.js';

import UserValidator from '../Validators/UserValidator.js';

const routes = new Router();

routes.post('/', UserValidator, UserController.login);

export default routes;
