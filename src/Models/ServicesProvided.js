import db from '../Configs/Sequelize.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class ServicesProvided extends Model {}

ServicesProvided.init(
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
    Description: {
      allowNull: false,
      type: DataTypes.STRING(300),
    },
    LaborValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    Note: {
      type: DataTypes.STRING(500),
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'ServicesProvided',
  }
);

export default ServicesProvided;
