module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('movies', [
      {
        title: 'Mortal kombat',
        release_date: '2021-06-15',
        synopsis: 'muuito sangue',
        age_rating: 16,
        duration: 120,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Thor',
        release_date: '2021-07-10',
        synopsis: 'muuito trovao',
        age_rating: 12,
        duration: 120,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'A culpa é das estrelas',
        release_date: '2012-06-15',
        synopsis: 'muuito amor',
        age_rating: 12,
        duration: 120,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Rambo 4',
        release_date: '1998-06-15',
        synopsis: 'muuito tiro',
        age_rating: 16,
        duration: 120,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Invocação do mal',
        release_date: '2022-08-15',
        synopsis: 'muuito assombração',
        age_rating: 16,
        duration: 120,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('movies', null, {}),
};
