module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('notes', [
      {
        note: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        note: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        note: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        note: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        note: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('notes', null, {}),
};
