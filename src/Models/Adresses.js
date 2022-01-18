import db from '../Configs/Sequelize';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Adresses extends Model {}

Adresses.init(
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
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Adresses',
  }
);

export default Adresses;
