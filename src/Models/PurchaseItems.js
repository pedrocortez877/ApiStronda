import db from '../Configs/Sequelize.js';

import Products from './Products.js';
import Purchases from './Purchases.js';

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
    PurchasePrice: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    Quantity: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'PurchaseItems',
  }
);

Products.PurchaseItems = Products.hasMany(PurchaseItems, {
  foreignKey: {
    name: 'IdProduct',
  },
});

PurchaseItems.Products = PurchaseItems.belongsTo(Products, {
  foreignKey: {
    name: 'IdProduct',
  },
});

Purchases.PurchaseItems = Purchases.hasOne(PurchaseItems, {
  foreignKey: {
    name: 'IdPurchase',
  },
});

PurchaseItems.Purchases = PurchaseItems.belongsTo(Purchases, {
  foreignKey: {
    name: 'IdPurchase',
  },
});

export default PurchaseItems;
