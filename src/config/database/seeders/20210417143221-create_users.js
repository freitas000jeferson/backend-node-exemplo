module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('users', [
      {
        name: 'Fabio',
        email: 'fabio_01@gmail.com',
        password: 's3nha_Nao_us4d4',
        birth_date: '2000-01-02',
        is_active: true,
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Algusto',
        email: 'algusto_01@gmail.com',
        password: 's3nha_Nao_us4d4',
        birth_date: '1990-01-02',
        is_active: true,
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Beto',
        email: 'beto_01@gmail.com',
        password: 's3nha_Nao_us4d4',
        birth_date: '2002-01-02',
        is_active: true,
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Wiliam',
        email: 'wilian_01@gmail.com',
        password: 's3nha_Nao_us4d4',
        birth_date: '2006-01-02',
        is_active: true,
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('users', null, {}),
};
