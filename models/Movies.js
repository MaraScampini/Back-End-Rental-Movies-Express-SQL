'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movies.belongsTo(models.Articles);
    }
  }
  Movies.init({
    id_movie: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    original_language: DataTypes.STRING,
    genre: DataTypes.STRING,
    description: DataTypes.TEXT,
    poster_path: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    vote_count: DataTypes.INTEGER,
    vote_average: DataTypes.FLOAT,
    on_theaters: DataTypes.BOOLEAN,
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
    modelName: 'Movies',
    timestamps: false
  });
  return Movies;
};