import db from '../Configs/Sequelize.js';

import Customers from './Customers.js';
import ServicesProvided from './ServicesProvided.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class ServiceSale extends Model {}

ServiceSale.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    ServiceSaleValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    Invoice: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'ServiceSale',
  }
);

ServiceSale.Customers = ServiceSale.belongsTo(Customers, {
  foreignKey: {
    name: 'IdCustomer',
  },
});

Customers.ServiceSale = Customers.hasMany(ServiceSale, {
  foreignKey: {
    name: 'IdCustomer',
  },
});

ServiceSale.ServicesProvided = ServiceSale.belongsTo(ServicesProvided, {
  foreignKey: {
    name: 'IdServiceProvided',
  },
});

ServicesProvided.ServiceSale = ServicesProvided.hasMany(ServiceSale, {
  foreignKey: {
    name: 'IdServiceProvided',
  },
});

export default ServiceSale;
