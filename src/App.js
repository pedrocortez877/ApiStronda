import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import ExceptionHandler from './Configs/ExceptionHandler';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json({ limit: '50mb' }));
    this.server.use(cors());
  }

  exceptionHandler() {
    this.server.use(ExceptionHandler);
  }
}

export default new App().server;
