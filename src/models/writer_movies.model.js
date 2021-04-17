module.exports = (sequelize, DataTypes) => {
  const WriterMovie = sequelize.define(
    'WriterMovie',
    {
      WriterId: {
        type: DataTypes.INTEGER,
        field: 'writer_id',
      },
      movieId: {
        type: DataTypes.INTEGER,
        field: 'movie_id',
      },
    },
    {
      tableName: 'writer_movies',
    }
  );

  WriterMovie.associate = (models) => {
    models.WriterMovie.belongsTo(models.Movie, {
      as: 'movies',
      foreignKey: 'movie_id',
      targetKey: 'id',
    });
    models.WriterMovie.belongsTo(models.Writer, {
      as: 'writers',
      foreignKey: 'writer_id',
      targetKey: 'id',
    });
  };

  WriterMovie.prototype.toJSON = function () {
    const writersMovie = { ...this.get() };
    return Object.fromEntries(Object.entries(writersMovie));
  };
  return WriterMovie;
};
