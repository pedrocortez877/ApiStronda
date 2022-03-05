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
    ProductsServiceSaleValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    GrossValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    LiquidValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    DiscountValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    DiscountPercentage: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
