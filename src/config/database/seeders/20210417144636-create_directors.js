module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('directors', [
      {
        name: 'Stalone',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'George Lucas',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Steven Spielberg',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('directors', null, {}),
};
