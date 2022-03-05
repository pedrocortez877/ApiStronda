import db from '../Configs/Sequelize.js';

import Products from './Products.js';
import ServiceSale from './ServiceSale.js';

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

Products.ProductsOfAService = Products.hasMany(ProductsOfAService, {
  foreignKey: {
    name: 'IdProduct',
  },
});

ProductsOfAService.Products = ProductsOfAService.belongsTo(Products, {
  foreignKey: {
    name: 'IdProduct',
  },
});

ProductsOfAService.ServiceSale = ProductsOfAService.belongsTo(ServiceSale, {
  foreignKey: {
    name: 'IdSale',
  },
});

ServiceSale.ProductsOfAService = ServiceSale.hasOne(ProductsOfAService, {
  foreignKey: {
    name: 'IdSale',
  },
});

export default ProductsOfAService;
