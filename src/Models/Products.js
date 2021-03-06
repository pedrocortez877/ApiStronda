import db from '../Configs/Sequelize.js';

import Brands from './Brands.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Products extends Model {}

Products.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    Name: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
    Description: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
    SaleValue: {
      type: DataTypes.DECIMAL,
    },
    PurchaseValue: {
      type: DataTypes.DECIMAL,
    },
    ProfitPercentage: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Products',
  }
);

Products.Brands = Products.belongsTo(Brands, {
  foreignKey: {
    name: 'IdBrand',
  },
});

Brands.Products = Brands.hasMany(Products, {
  foreignKey: {
    name: 'IdBrand',
  },
});

export default Products;
