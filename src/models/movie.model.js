module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'Movie',
    {
      title: DataTypes.STRING,
      releaseDate: {
        type: DataTypes.DATE,
        field: 'release_date',
      },
      synopsis: DataTypes.TEXT,
      ageRating: {
        type: DataTypes.INTEGER,
        field: 'age_rating',
      },
      duration: DataTypes.INTEGER,
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active',
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
    { tableName: 'movies' }
  );

  Movie.associate = (models) => {
    models.Movie.belongsToMany(models.Actor, {
      through: 'actor_movies',
      as: 'actors',
      foreignKey: 'movie_id',
    });
    models.Movie.belongsToMany(models.Category, {
      through: 'category_movies',
      as: 'categories',
      foreignKey: 'movie_id',
    });
    models.Movie.belongsToMany(models.Director, {
      through: 'director_movies',
      as: 'directors',
      foreignKey: 'movie_id',
    });
    models.Movie.belongsToMany(models.Writer, {
      through: 'writer_movies',
      as: 'writers',
      foreignKey: 'movie_id',
    });
    models.Movie.hasMany(models.Midia, {
      as: 'midias',
      foreignKey: 'movieId',
      sourceKey: 'id',
    });
    models.Movie.hasMany(models.Rate, {
      as: 'rates',
      foreignKey: 'movieId',
      sourceKey: 'id',
    });
  };

  Movie.prototype.toJSON = function () {
    const movie = { ...this.get() };
    return Object.fromEntries(Object.entries(movie));
  };

  return Movie;
};
