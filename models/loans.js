'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loans.belongsTo(models.Users)
      // Loans.belongsToMany(models.Articles, {through:'ArticlesOnLoans'})
    }
  }
  Loans.init({
    id_loan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    UserIdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id_user'
      }
  }}, 
  {
    sequelize,
    modelName: 'Loans',
    timestamps: false
  });
  return Loans;
};