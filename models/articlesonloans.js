'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticlesOnLoans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Articles.belongsToMany(models.Loans, { through: 'ArticlesOnLoans' });
      models.Loans.belongsToMany(models.Articles, { through: 'ArticlesOnLoans' });
    }
  }
  ArticlesOnLoans.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    LoanIdLoan: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
      references: {
        model: 'Loans',
        key: 'id_loan'
      }
    },
    ArticleIdArticle: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
      references: {
        model: 'Articles',
        key: 'id_article'
      }
    }
  }, {
    sequelize,
    modelName: 'ArticlesOnLoans',
    timestamps: false
  });
  return ArticlesOnLoans;
};