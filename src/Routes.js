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
import StockRoutes from './Routes/StockRoutes.js';
import PurchaseRoutes from './Routes/PurchaseRoutes.js';
import ServicesProvidedRoutes from './Routes/ServicesProvidedRoutes.js';

import Auth from './Middlewares/Auth.js';
import HttpResponses from './Middlewares/HttpResponses.js';

const routes = Router();

// ROTA DE PING
routes.use('/ping', Auth, HttpResponses, PingRoute);

// ROTAS DE LOGIN
routes.use('/login', HttpResponses, UserRoute);

// ROTAS DE PRODUTOS
routes.use('/products', Auth, HttpResponses, ProductRoutes);

// ROTAS DE MARCAS
routes.use('/brands', Auth, HttpResponses, BrandRoutes);

// ROTAS DE ENDERECOS
routes.use('/addresses', Auth, HttpResponses, AddressRoutes);

// ROTAS DE CLIENTES
routes.use('/customers', Auth, HttpResponses, CustomerRoutes);

// ROTAS DE VENDAS DE PRODUTOS
routes.use('/productSales', Auth, HttpResponses, ProductSaleRoutes);

// ROTAS DE VENDAS DE SERVIÇOS
routes.use('/serviceSales', Auth, HttpResponses, ServiceSaleRoutes);

// ROTAS DE FORNECEDORES
routes.use('/suppliers', Auth, HttpResponses, SupplierRoutes);

// ROTAS DE ESTOQUE
routes.use('/stocks', Auth, HttpResponses, StockRoutes);

// ROTAS DE COMPRAS
routes.use('/purchases', Auth, HttpResponses, PurchaseRoutes);

// ROTAS DE SERVIÇOS
routes.use('/servicesProvided', Auth, HttpResponses, ServicesProvidedRoutes);

export default routes;
