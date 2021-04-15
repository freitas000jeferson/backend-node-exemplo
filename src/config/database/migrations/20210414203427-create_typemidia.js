module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('typemidias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: { allowNull: false, type: Sequelize.STRING },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('typemidias');
  },
};
