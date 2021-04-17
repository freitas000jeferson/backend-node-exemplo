module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('midias', [
      {
        url: 'http://video01.png',
        movie_id: 1,
        typemidia_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'http://imagem01.png',
        movie_id: 1,
        typemidia_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'http://video01.png',
        movie_id: 2,
        typemidia_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'http://video02.png',
        movie_id: 2,
        typemidia_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'http://imagem01.png',
        movie_id: 3,
        typemidia_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'http://imagem02.png',
        movie_id: 3,
        typemidia_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'http://video01.png',
        movie_id: 4,
        typemidia_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        url: 'http://imagem01.png',
        movie_id: 5,
        typemidia_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('midias', null, {}),
};
