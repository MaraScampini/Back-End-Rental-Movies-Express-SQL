'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Loans', [
      {
        id_loan: 1,
        date: "2022-11-03",
        end_date: "2022-11-13",
        UserIdUser: 2
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Loans', null, {});
    
  }
};
