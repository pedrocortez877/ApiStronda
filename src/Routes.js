import { Router } from 'express';

import UserRoute from './Routes/UserRoutes';
import PingRoute from './Routes/PingRoutes';

import Auth from './Middlewares/Auth';

const routes = Router();

// ROTA DE PING
routes.use('/ping', Auth, PingRoute);

// ROTAS DE LOGIN
routes.use('/login', UserRoute);

export default routes;
