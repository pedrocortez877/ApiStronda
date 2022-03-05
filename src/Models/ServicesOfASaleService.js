import db from '../Configs/Sequelize.js';

import ServicesProvided from './ServicesProvided.js';
import ServiceSale from './ServiceSale.js';

const { sequelize } = db;
const { Model, DataTypes } = db.Sequelize;

class ServicesOfASaleService extends Model {}

ServicesOfASaleService.init(
  {
    Id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    ServiceValue: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'ServicesOfASaleService',
  }
);

ServicesProvided.ServicesOfASaleService = ServicesProvided.hasMany(
  ServicesOfASaleService,
  {
    foreignKey: {
      name: 'IdService',
    },
  }
);

ServicesOfASaleService.ServicesProvided = ServicesOfASaleService.belongsTo(
  ServicesProvided,
  {
    foreignKey: {
      name: 'IdService',
    },
  }
);

ServicesOfASaleService.ServiceSale = ServicesOfASaleService.belongsTo(
  ServiceSale,
  {
    foreignKey: {
      name: 'IdSale',
    },
  }
);

ServiceSale.ServicesOfASaleService = ServiceSale.hasOne(
  ServicesOfASaleService,
  {
    foreignKey: {
      name: 'IdSale',
    },
  }
);

export default ServicesOfASaleService;
