module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('notes', [
      {
        note: 0,
      },
      {
        note: 1,
      },
      {
        note: 2,
      },
      {
        note: 3,
      },
      {
        note: 4,
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('notes', null, {}),
};
