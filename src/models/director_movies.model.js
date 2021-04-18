module.exports = (sequelize, DataTypes) => {
  const DirectorMovie = sequelize.define(
    'DirectorMovie',
    {
      directorId: {
        type: DataTypes.INTEGER,
        field: 'director_id',
      },
      movieId: {
        type: DataTypes.INTEGER,
        field: 'movie_id',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'director_movies',
    }
  );

  DirectorMovie.associate = (models) => {
    models.DirectorMovie.belongsTo(models.Movie, {
      as: 'movies',
      foreignKey: 'movie_id',
      targetKey: 'id',
    });
    models.DirectorMovie.belongsTo(models.Director, {
      as: 'directors',
      foreignKey: 'director_id',
      targetKey: 'id',
    });
  };

  DirectorMovie.prototype.toJSON = function () {
    const directorsMovie = { ...this.get() };
    return Object.fromEntries(Object.entries(directorsMovie));
  };
  return DirectorMovie;
};
