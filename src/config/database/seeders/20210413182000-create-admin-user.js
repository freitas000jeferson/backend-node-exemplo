module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('users', [
      {
        name: 'Adminisitrador',
        email: 'admin@gmail.com.com',
        password:
          '$2y$08$EEDkHQR4jJiCprUHUZXlHeuK3h5Hb27Lcufd5kbev/tnrjxCBZNUm',
        is_admin: true,
        is_active: true,
        birth_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('users', null, {}),
};
