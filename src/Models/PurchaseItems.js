import db from '../Configs/Sequelize.js';

import Products from './Products.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class PurchaseItems extends Model {}

PurchaseItems.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    TotalPrice: {
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
    tableName: 'PurchaseItems',
  }
);

Products.PurchaseItems = Products.hasOne(PurchaseItems, {
  foreignKey: {
    name: 'IdProduct',
  },
});

PurchaseItems.Products = PurchaseItems.belongsTo(Products, {
  foreignKey: {
    name: 'IdProduct',
  },
});

export default PurchaseItems;
