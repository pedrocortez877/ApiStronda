import db from '../Configs/Sequelize.js';

import Suppliers from './Suppliers';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Purchases extends Model {}

Purchases.init(
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
    PurchasePrice: {
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
    tableName: 'Purchases',
  }
);

Suppliers.Purchases = Suppliers.hasMany(Purchases, {
  foreignKey: {
    name: 'IdSupplier',
    allowNull: false,
  },
});

Purchases.Suppliers = Purchases.belongsTo(Suppliers, {
  foreignKey: {
    name: 'IdSupplier',
    allowNull: false,
  },
});

export default Purchases;
