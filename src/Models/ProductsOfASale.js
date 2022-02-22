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

ProductsOfASale.Products = ProductsOfASale.belongsTo(Products, {
  foreignKey: {
    name: 'IdProduct',
  },
});

Products.ProductsOfASale = Products.hasMany(ProductsOfASale, {
  foreignKey: {
    name: 'IdProduct',
  },
});

ProductSale.ProductsOfASale = ProductSale.hasOne(ProductsOfASale, {
  foreignKey: {
    name: 'IdSale',
  },
});

ProductsOfASale.ProductSale = ProductsOfASale.belongsTo(ProductSale, {
  foreignKey: {
    name: 'IdSale',
  },
});

export default ProductsOfASale;
