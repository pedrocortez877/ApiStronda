import db from '../Configs/Sequelize.js';

import Products from './Products.js';

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
    Quantity: {
      allowNull: false,
      type: DataTypes.NUMBER,
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

export default Stock;
