const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
// Create Class category
class Category extends Model {}

Category.init(
  {
    // define columns
    
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