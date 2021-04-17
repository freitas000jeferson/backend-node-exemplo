module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    'Actor',
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
