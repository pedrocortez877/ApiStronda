import db from '../Configs/Sequelize.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Brands extends Model {}

Brands.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    Name: {
      allowNull: false,
      type: DataTypes.STRING(300),
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Brands',
  }
);

export default Brands;
