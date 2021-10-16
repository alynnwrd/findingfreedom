const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Experience extends Model {}

Experience.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      // This references the `user` model, which we set in `User.js` as its `modelName` property
      model: "user",
      key: "id",
    },
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "experience",
}
);

module.exports = Experience;
