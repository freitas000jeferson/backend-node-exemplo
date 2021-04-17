module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('director_movies', [
      {
        movie_id: 1,
        director_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 2,
        director_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 3,
        director_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 4,
        director_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 5,
        director_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('director_movies', null, {}),
};
