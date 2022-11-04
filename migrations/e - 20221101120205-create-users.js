'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      password: Sequelize.STRING,
      email: {
        type: Sequelize.STRING
      },
      date_of_sign_up: {
        type: Sequelize.DATEONLY
      },
      RoleIdRole: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id_role"
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};