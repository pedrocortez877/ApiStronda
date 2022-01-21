import db from '../Configs/Sequelize';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class Users extends Model {}

Users.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    User: {
      allowNull: false,
      type: DataTypes.STRING(300),
    },
    KeyAccess: {
      allowNull: false,
      type: DataTypes.STRING(300),
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Users',
  }
);

export default Users;
