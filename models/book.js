'use strict';
// var dateFormat = require('dateformat');

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
    author: DataTypes.STRING,    
    genre: DataTypes.STRING,
    year: DataTypes.INTEGER
  });
  return Book;
};