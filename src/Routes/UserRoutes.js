import { Router } from 'express';

import UserController from '../Controllers/UserController';

const routes = new Router();

routes.post('/', UserController.login);
