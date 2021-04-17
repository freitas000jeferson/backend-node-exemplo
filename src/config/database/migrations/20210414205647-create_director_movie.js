module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'director_movies',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        director_id: {
          type: Sequelize.INTEGER,
          references: { model: 'directors', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
        },
        movie_id: {
          type: Sequelize.INTEGER,
          references: { model: 'movies', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
        },
        created_at: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        timestamps: false,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('director_movies');
  },
};
