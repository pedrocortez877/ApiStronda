import db from '../Configs/Sequelize.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Suppliers extends Model {}

Suppliers.init(
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
    Cnpj: {
      allowNull: false,
      type: DataTypes.STRING(14),
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Suppliers',
  }
);

export default Suppliers;
