import { Router } from 'express';

import UserRoute from './Routes/UserRoutes.js';
import PingRoute from './Routes/PingRoutes.js';
import ProductRoutes from './Routes/ProductRoutes.js';
import BrandRoutes from './Routes/BrandRoutes.js';
import AddressRoutes from './Routes/AddressRoutes.js';
import CustomerRoutes from './Routes/CustomerRoutes.js';
import ProductSaleRoutes from './Routes/ProductSaleRoutes.js';
import ServiceSaleRoutes from './Routes/ServiceSaleRoutes.js';
import SupplierRoutes from './Routes/SupplierRoutes.js';

import Auth from './Middlewares/Auth.js';

const routes = Router();

// ROTA DE PING
routes.use('/ping', Auth, PingRoute);

// ROTAS DE LOGIN
routes.use('/login', UserRoute);

// ROTAS DE PRODUTOS
routes.use('/products', Auth, ProductRoutes);

// ROTAS DE MARCAS
routes.use('/brands', Auth, BrandRoutes);

// ROTAS DE ENDERECOS
routes.use('/addresses', Auth, AddressRoutes);

// ROTAS DE CLIENTES
routes.use('/customers', Auth, CustomerRoutes);

// ROTAS DE VENDAS DE PRODUTOS
routes.use('/productSales', Auth, ProductSaleRoutes);

// ROTAS DE VENDAS DE SERVIÇOS
routes.use('/serviceSales', Auth, ServiceSaleRoutes);

// ROTAS DE FORNECEDORES
routes.use('/suppliers', Auth, SupplierRoutes);

export default routes;
