'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Articles.hasOne(models.Movies);
      Articles.hasOne(models.Shows);
      Articles.hasOne(models.Loans)
      // Articles.belongsToMany(models.Loans, {through: 'ArticlesOnLoans'})
    }
  }
  Articles.init({
    id_article:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'Articles',
    timestamps: false
  });
  return Articles;
};
