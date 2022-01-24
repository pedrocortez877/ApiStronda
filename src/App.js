import express from 'express';
import cors from 'cors';

import ExceptionHandler from './Configs/ExceptionHandler.js';
import Routes from './Routes.js';

import db from './Configs/Sequelize.js';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
    this.database();
  }

  middlewares() {
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json({ limit: '50mb' }));
    this.server.use(cors());
    this.server.options('*', cors());
  }

  routes() {
    this.server.use('/', Routes);
  }

  exceptionHandler() {
    this.server.use(ExceptionHandler);
  }

  database() {
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Sincronizado com sucesso!');
      })
      .catch(console.log);
  }
}

export default new App().server;
