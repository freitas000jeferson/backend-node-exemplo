module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: { type: Sequelize.STRING },
      release_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      synopsis: { type: Sequelize.TEXT, allowNull: false },
      age_rating: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      duration: { type: Sequelize.INTEGER, allowNull: true },
      is_active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies');
  },
};
