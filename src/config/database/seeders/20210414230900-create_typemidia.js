module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('typemidias', [
      {
        type: 'VIDEO',
      },
      {
        type: 'IMAGE',
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('typemidias', null, {}),
};
