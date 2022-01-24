import { Router } from 'express';

import UserController from '../Controllers/UserController';

import UserValidator from '../Validators/UserValidator';

const routes = new Router();

routes.post('/', UserValidator, UserController.login);
