module.exports = (sequelize, DataTypes) => {
  const CategoryMovie = sequelize.define(
    'CategoryMovie',
    {
      CategoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
      },
      movieId: {
        type: DataTypes.INTEGER,
        field: 'movie_id',
      },
    },
    {
      tableName: 'category_movies',
    }
  );

  CategoryMovie.associate = (models) => {
    models.CategoryMovie.belongsTo(models.Movie, {
      as: 'movies',
      foreignKey: 'movie_id',
      targetKey: 'id',
    });
    models.CategoryMovie.belongsTo(models.Category, {
      as: 'categorys',
      foreignKey: 'category_id',
      targetKey: 'id',
    });
  };

  CategoryMovie.prototype.toJSON = function () {
    const categoryMovie = { ...this.get() };
    return Object.fromEntries(Object.entries(categoryMovie));
  };
  return CategoryMovie;
};
