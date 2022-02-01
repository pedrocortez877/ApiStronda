import db from '../Configs/Sequelize.js';

import Customers from './Customers.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class ProductSale extends Model {}

ProductSale.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    SaleProductValue: {
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
    tableName: 'ProductSale',
  }
);

ProductSale.Customers = ProductSale.belongsTo(Customers, {
  foreignKey: {
    name: 'IdCustomer',
  },
});

Customers.ProductSale = Customers.hasMany(ProductSale, {
  foreignKey: {
    name: 'IdCustomer',
  },
});

export default ProductSale;
