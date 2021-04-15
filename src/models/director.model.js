module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define(
    'Director',
    {
      name: DataTypes.STRING,
    },
    {
      tableName: 'directors',
    }
  );

  Director.associate = (models) => {
    models.Director.belongsToMany(models.Movie, {
      through: 'director_movies',
      as: 'movies',
      foreignKey: 'director_id',
    });
  };

  Director.prototype.toJSON = function () {
    const director = { ...this.get() };
    return Object.fromEntities(Object.entries(director));
  };
  return Director;
};
