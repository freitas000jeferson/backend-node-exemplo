module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('categories', [
      { name: 'Açao', created_at: new Date(), updated_at: new Date() },
      { name: 'Aventura', created_at: new Date(), updated_at: new Date() },
      { name: 'Comedia', created_at: new Date(), updated_at: new Date() },
      { name: 'Documentario', created_at: new Date(), updated_at: new Date() },
      { name: 'Drama', created_at: new Date(), updated_at: new Date() },
      {
        name: 'Ficção científica',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fantasia científica',
        created_at: new Date(),
        updated_at: new Date(),
      },
      { name: 'Musical', created_at: new Date(), updated_at: new Date() },
      { name: 'Romance', created_at: new Date(), updated_at: new Date() },
      { name: 'Suspense', created_at: new Date(), updated_at: new Date() },
      { name: 'Terror', created_at: new Date(), updated_at: new Date() },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('categories', null, {}),
};
