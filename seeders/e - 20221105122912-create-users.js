'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id_user: 1,
      name: "Mara",
      password: "1234",
      email: "mara.scampini@gmail.com",
      date_of_sign_up: "2022-11-11",
      RoleIdRole: "Admin"
    },
    {
      id_user: 2,
      name: "Abel",
      password: "1234",
      email: "abel@gmail.com",
      date_of_sign_up: "2022-11-12",
      RoleIdRole: "User"
    },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
