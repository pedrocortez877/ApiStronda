import db from '../Configs/Sequelize';

import Customers from './Customers';

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
    allowNull: false,
  },
});

Customers.ProductSale = Customers.hasMany(ProductSale, {
  foreignKey: {
    name: 'Id',
    allowNull: false,
  },
});

export default ProductSale;
