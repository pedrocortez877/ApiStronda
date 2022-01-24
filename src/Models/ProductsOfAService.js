import db from '../Configs/Sequelize.js';

import Products from './Products';
import ProductSale from './ProductSale';

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
    allowNull: false,
  },
});

Products.ProductsOfAService = Products.belongsTo(ProductsOfAService, {
  foreignKey: {
    name: 'IdProduct',
    allowNull: false,
  },
});

ProductsOfAService.ProductSale = ProductsOfAService.hasOne(ProductSale, {
  foreignKey: {
    name: 'IdSale',
    allowNull: false,
  },
});

ProductSale.ProductsOfAService = ProductSale.belongsTo(ProductsOfAService, {
  foreignKey: {
    name: 'IdSale',
    allowNull: false,
  },
});

export default ProductsOfAService;
