module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('writers', [
      {
        name: 'Johnny Depp',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Woody Allen',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Anthony Hopkins',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('writers', null, {}),
};
