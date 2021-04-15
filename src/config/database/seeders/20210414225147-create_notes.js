module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('notes', [
      {
        name: 0,
      },
      {
        name: 1,
      },
      {
        name: 2,
      },
      {
        name: 3,
      },
      {
        name: 4,
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('notes', null, {}),
};
