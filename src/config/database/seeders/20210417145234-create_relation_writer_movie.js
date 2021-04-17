module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('writer_movies', [
      {
        movie_id: 1,
        writer_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 1,
        writer_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 2,
        writer_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 3,
        writer_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 3,
        writer_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 4,
        writer_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 4,
        writer_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 5,
        writer_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('writer_movies', null, {}),
};
