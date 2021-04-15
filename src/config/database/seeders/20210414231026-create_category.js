module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('categories', [
      { name: 'Açao' },
      { name: 'Aventura' },
      { name: 'Comedia' },
      { name: 'Documentario' },
      { name: 'Drama' },
      { name: 'Ficção científica' },
      { name: 'Fantasia científica' },
      { name: 'Musical' },
      { name: 'Romance' },
      { name: 'Suspense' },
      { name: 'Terror' },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('categories', null, {}),
};
