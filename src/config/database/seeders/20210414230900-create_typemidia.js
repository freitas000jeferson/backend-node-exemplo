module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('typemidias', [
      {
        type: 'VIDEO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'IMAGE',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('typemidias', null, {}),
};
