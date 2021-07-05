const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // image
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuisine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prepMinutes: {
      type: DataTypes.STRING,
    },
    prepHours: {
      type: DataTypes.STRING,
    },
    cookMinutes: {
      type: DataTypes.STRING,
    },
    cookHours: {
      type: DataTypes.STRING,
    },
    // ingredients array
    // directions array
    servings: {
      type: DataTypes.INTEGER,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "backend",
  }
);

module.exports = Recipe;
