// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // Define id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define product name column
    product_name: {
      type: DataTypes.STRING,
    },
    // Define price column
    price: {
      type: DataTypes.DECIMAL,
    },
    // Define stock column
    stock: {
      type: DataTypes.INTEGER,

    },
    // Define category id column
    category_id: {
      type: DataTypes.INTEGER
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
