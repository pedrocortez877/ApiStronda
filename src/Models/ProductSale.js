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
    LiquidValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    Invoice: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    GrossValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    DiscountValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    DiscountPercentage: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'ProductSale',
  }
);

Customers.ProductSale = Customers.hasMany(ProductSale, {
  foreignKey: {
    name: 'IdCustomer',
  },
});

ProductSale.Customers = ProductSale.belongsTo(Customers, {
  foreignKey: {
    name: 'IdCustomer',
  },
});

export default ProductSale;
