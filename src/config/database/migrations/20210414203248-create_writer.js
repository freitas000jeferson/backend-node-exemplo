module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('writers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { allowNull: false, type: Sequelize.STRING },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('writers');
  },
};
