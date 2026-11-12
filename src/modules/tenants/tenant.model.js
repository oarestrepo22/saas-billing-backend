const sequelize = require('../../database/database');
const { DataTypes } = require('sequelize');

const Tenant = sequelize.define(
  'Tenant',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taxId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: 'tenants',
    timestamps: true,
    underscored: true,
  },
);

module.exports = Tenant;
