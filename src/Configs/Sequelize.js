import Sequelize from 'sequelize';
import configDB from './Database';

const sequelize = new Sequelize(configDB);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
