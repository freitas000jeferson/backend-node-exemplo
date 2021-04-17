module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('category_movies', [
      {
        movie_id: 1,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 1,
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 1,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 1,
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 2,
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 2,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 2,
        category_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 3,
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 3,
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 4,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 5,
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 5,
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('category_movies', null, {}),
};
