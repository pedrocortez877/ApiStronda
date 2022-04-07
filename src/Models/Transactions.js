import db from '../Configs/Sequelize.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Transactions extends Model {}

Transactions.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    IdMoviment: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    Value: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    Sale: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    Date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Transactions',
  }
);

export default Transactions;
