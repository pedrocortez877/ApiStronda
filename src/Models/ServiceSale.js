import db from '../Configs/Sequelize';

import Customers from './Customers';

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
    allowNull: false,
  },
});

Customers.ServiceSale = Customers.hasMany(ServiceSale, {
  foreignKey: {
    name: 'Id',
    allowNull: false,
  },
});

export default ServiceSale;
