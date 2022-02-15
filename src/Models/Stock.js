import db from '../Configs/Sequelize.js';

import Products from './Products.js';
import Suppliers from './Suppliers.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Stock extends Model {}

Stock.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    StockValue: {
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
    tableName: 'Stock',
  }
);

Stock.Products = Stock.belongsTo(Products, {
  foreignKey: {
    name: 'IdProduct',
  },
});

Products.Stock = Products.hasMany(Stock, {
  foreignKey: {
    name: 'IdProduct',
  },
});

Stock.Suppliers = Stock.belongsTo(Suppliers, {
  foreignKey: {
    name: 'IdSupplier',
  },
});

Suppliers.Stock = Suppliers.hasMany(Stock, {
  foreignKey: {
    name: 'IdSupplier',
  },
});

export default Stock;
