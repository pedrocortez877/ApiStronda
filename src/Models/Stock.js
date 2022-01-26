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

Stock.Products = Stock.hasMany(Products, {
  foreignKey: {
    name: 'IdProduct',
    allowNull: false,
  },
});

Products.Stock = Products.belongsTo(Stock, {
  foreignKey: {
    name: 'IdProduct',
    allowNull: false,
  },
});

Stock.Suppliers = Stock.belongsTo(Suppliers, {
  foreignKey: {
    name: 'IdSupplier',
    allowNull: false,
  },
});

Suppliers.Stock = Suppliers.hasMany(Stock, {
  foreignKey: {
    name: 'IdSupplier',
    allowNull: false,
  },
});

export default Stock;
