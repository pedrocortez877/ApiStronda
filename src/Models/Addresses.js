import db from '../Configs/Sequelize.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Addresses extends Model {}

Addresses.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    Street: {
      allowNull: false,
      type: DataTypes.STRING(300),
    },
    StreetNumber: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    Neighborhood: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    City: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    State: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    Complement: {
      allowNull: false,
      type: DataTypes.STRING(300),
    },
    ZipCode: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Addresses',
  }
);

export default Addresses;
