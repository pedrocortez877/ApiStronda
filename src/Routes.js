import { Router } from 'express';

import UserRoute from './Routes/UserRoutes';

// import Auth from './Middlewares/Auth';

const routes = Router();

// ROTAS DE LOGIN
routes.use('/login', UserRoute);

export default routes;
