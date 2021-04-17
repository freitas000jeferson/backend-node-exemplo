module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('actor_movies', [
      {
        movie_id: 1,
        actor_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 2,
        actor_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 3,
        actor_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 4,
        actor_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 5,
        actor_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 1,
        actor_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 2,
        actor_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 3,
        actor_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 4,
        actor_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 5,
        actor_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 1,
        actor_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 2,
        actor_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 3,
        actor_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 4,
        actor_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        movie_id: 5,
        actor_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('actor_movies', null, {}),
};
