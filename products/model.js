const { Model, DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');

const Product = sequelize.define('Product', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sold_quantity: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  free_shipping: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

Product.sync();

module.exports = Product;
