const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Education extends Model {}

Education.init(
  {
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
    degree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    graduateData: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "education",
  }
);

module.exports = Education;
