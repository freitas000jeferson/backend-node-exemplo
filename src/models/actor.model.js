module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    'Actor',
    {
      name: DataTypes.STRING,
    },
    { tableName: 'actors' }
  );

  Actor.associate = (models) => {
    models.Actor.belongsToMany(models.Movie, {
      through: 'actor_movies',
      as: 'movies',
      foreignKey: 'actor_id',
    });
  };

  Actor.prototype.toJSON = function () {
    const actor = { ...this.get() };
    return Object.fromEntries(Object.entries(actor));
  };
  return Actor;
};
