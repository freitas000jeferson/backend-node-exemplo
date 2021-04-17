module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define(
    'Director',
    {
      name: DataTypes.STRING,
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
    return Object.fromEntries(Object.entries(director));
  };
  return Director;
};
