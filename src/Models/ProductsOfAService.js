import db from '../Configs/Sequelize.js';

import Products from './Products.js';
import ProductSale from './ProductSale.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class ProductsOfAService extends Model {}

ProductsOfAService.init(
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
    tableName: 'ProductsOfAService',
  }
);

ProductsOfAService.Products = ProductsOfAService.hasMany(Products, {
  foreignKey: {
    name: 'IdProduct',
  },
});

Products.ProductsOfAService = Products.belongsTo(ProductsOfAService, {
  foreignKey: {
    name: 'IdProduct',
  },
});

ProductsOfAService.ProductSale = ProductsOfAService.hasOne(ProductSale, {
  foreignKey: {
    name: 'IdSale',
  },
});

ProductSale.ProductsOfAService = ProductSale.belongsTo(ProductsOfAService, {
  foreignKey: {
    name: 'IdSale',
  },
});

export default ProductsOfAService;
