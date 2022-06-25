'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'John',
          last_name: 'Doe',
        },
        {
          first_name: 'Mary',
          last_name: 'Jane',
        },
        {
          first_name: 'Bob',
          last_name: 'White',
        },
        {
          first_name: 'Kim',
          last_name: 'Smith',
        },
      ],
      {},
      'users'
    );
    await queryInterface.bulkInsert(
      'movies',
      [
        { name: 'Top Gun' },
        { name: 'Blondie' },
        { name: 'Matrix' },
        { name: 'Saw' },
      ],
      {},
      'movies'
    );
    await queryInterface.bulkInsert(
      'actors_movies',
      [
        {
          actor_id: 1,
          movie_id: 1,
        },
        {
          actor_id: 1,
          movie_id: 2,
        },
        {
          actor_id: 2,
          movie_id: 3,
        },
        {
          actor_id: 2,
          movie_id: 1,
        },
        {
          actor_id: 3,
          movie_id: 4,
        },
        {
          actor_id: 3,
          movie_id: 1,
        },
        {
          actor_id: 3,
          movie_id: 2,
        },
        {
          actor_id: 4,
          movie_id: 1,
        },
        {
          actor_id: 4,
          movie_id: 2,
        },
        {
          actor_id: 4,
          movie_id: 3,
        },
      ],
      {},
      'actors_movies'
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
