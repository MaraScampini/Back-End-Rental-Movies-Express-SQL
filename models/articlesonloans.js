'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticlesOnLoans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Articles.belongsToMany(models.Loans, {through: 'ArticlesOnLoans'});
      models.Loans.belongsToMany(models.Articles, { through: 'ArticlesOnLoans' });
    }
  }
  ArticlesOnLoans.init({
    LoanIdLoan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Loans',
        key: 'id_loan'
      }
    },
    ArticleIdArticle: {
      type: DataTypes.INTEGER,
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