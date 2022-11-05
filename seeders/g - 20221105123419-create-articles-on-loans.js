'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ArticlesOnLoans', [
      {
        LoanIdLoan: 1,
        ArticleIdArticle: 3
      },
      {
        LoanIdLoan: 1,
        ArticleIdArticle: 7
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ArticlesOnLoans', null, {});

  }
};
