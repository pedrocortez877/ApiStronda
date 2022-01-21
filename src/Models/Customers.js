import db from '../Configs/Sequelize';

import Adresses from './Adresses';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Customers extends Model {}

Customers.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    Name: {
      allowNull: false,
      type: DataTypes.STRING(200),
    },
    DocumentNumber: {
      allowNull: false,
      type: DataTypes.STRING(14),
    },
    DocumentType: {
      allowNull: false,
      type: DataTypes.STRING(14),
    },
    PhoneNumber: {
      allowNull: false,
      type: DataTypes.STRING(15),
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Customers',
  }
);

Customers.Adresses = Customers.hasOne(Adresses, {
  foreignKey: {
    name: 'IdAdress',
    allowNull: false,
  },
});

Adresses.Customers = Adresses.belongsTo(Customers, {
  foreignKey: {
    name: 'IdAdress',
    allowNull: false,
  },
});

export default Customers;
