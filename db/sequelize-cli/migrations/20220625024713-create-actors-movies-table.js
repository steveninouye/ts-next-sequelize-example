'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('actors_movies', {
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
      },
      actor_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
      movie_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'movies',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('actors_movies');
  },
};
