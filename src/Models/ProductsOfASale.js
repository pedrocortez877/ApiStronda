import db from '../Configs/Sequelize.js';

import Products from './Products.js';
import ProductSale from './ProductSale.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class ProductsOfASale extends Model {}

ProductsOfASale.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    ProductValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    Quantity: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    DiscountPercentage: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    DiscountValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'ProductsOfASale',
  }
);

ProductsOfASale.Products = ProductsOfASale.hasMany(Products, {
  foreignKey: {
    name: 'IdProduct',
    allowNull: false,
  },
});

Products.ProductsOfASale = Products.belongsTo(ProductsOfASale, {
  foreignKey: {
    name: 'IdProduct',
    allowNull: false,
  },
});

ProductsOfASale.ProductSale = ProductsOfASale.hasOne(ProductSale, {
  foreignKey: {
    name: 'IdSale',
    allowNull: false,
  },
});

ProductSale.ProductsOfASale = ProductSale.belongsTo(ProductsOfASale, {
  foreignKey: {
    name: 'IdSale',
    allowNull: false,
  },
});

export default ProductsOfASale;
