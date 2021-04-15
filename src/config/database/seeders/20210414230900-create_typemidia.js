module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('typemidias', [
      {
        name: 'VIDEO',
      },
      {
        name: 'IMAGE',
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('typemidias', null, {}),
};
