import { Router } from 'express';

import UserRoute from './Routes/UserRoutes.js';
import PingRoute from './Routes/PingRoutes.js';
import ProductRoutes from './Routes/ProductRoutes.js';

import Auth from './Middlewares/Auth.js';

const routes = Router();

// ROTA DE PING
routes.use('/ping', Auth, PingRoute);

// ROTAS DE LOGIN
routes.use('/login', UserRoute);

// ROTAS DE PRODUTOS
routes.use('/products', Auth, ProductRoutes);

export default routes;
