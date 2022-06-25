'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('movies', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('movies');
  },
};
