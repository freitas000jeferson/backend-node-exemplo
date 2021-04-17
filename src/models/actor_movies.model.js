module.exports = (sequelize, DataTypes) => {
  const ActorMovie = sequelize.define(
    'ActorMovie',
    {
      actorId: {
        type: DataTypes.INTEGER,
        field: 'actor_id',
      },
      movieId: {
        type: DataTypes.INTEGER,
        field: 'movie_id',
      },
    },
    {
      tableName: 'actor_movies',
    }
  );

  ActorMovie.associate = (models) => {
    models.ActorMovie.belongsTo(models.Movie, {
      as: 'movies',
      foreignKey: 'movie_id',
      targetKey: 'id',
    });
    models.ActorMovie.belongsTo(models.Actor, {
      as: 'actors',
      foreignKey: 'actor_id',
      targetKey: 'id',
    });
  };

  ActorMovie.prototype.toJSON = function () {
    const actorsMovie = { ...this.get() };
    return Object.fromEntries(Object.entries(actorsMovie));
  };
  return ActorMovie;
};
