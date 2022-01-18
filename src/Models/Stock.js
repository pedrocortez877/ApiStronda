import db from '../Configs/Sequelize';

import Products from './Products';

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
    NameSupplier: {
      allowNull: false,
      type: DataTypes.STRING(100),
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
    name: 'Id',
    allowNull: false,
  },
});

export default Stock;
