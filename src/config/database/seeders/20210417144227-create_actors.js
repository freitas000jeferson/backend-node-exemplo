module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('actors', [
      {
        name: 'Stalone',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fantasma',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Beto Carreiro',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luke Cage',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Chris',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Rogerio',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ator generico',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('actors', null, {}),
};
