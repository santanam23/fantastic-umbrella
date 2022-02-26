const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// Create Class category
class Category extends Model {}

Category.init(
  {
    // Define id column
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    //Define category column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      //validate: {}
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
