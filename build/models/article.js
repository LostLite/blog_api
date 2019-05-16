"use strict";

module.exports = function (sequelize, DataTypes) {
  var Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Article.associate = function (models) {// associations can be defined here
  };

  return Article;
};
//# sourceMappingURL=article.js.map