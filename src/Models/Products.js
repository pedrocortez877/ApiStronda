import db from '../Configs/Sequelize.js';

import Brands from './Brands';

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
    allowNull: false,
  },
});

Brands.Products = Brands.hasMany(Products, {
  foreignKey: {
    name: 'IdBrand',
    allowNull: false,
  },
});

export default Products;
