module.exports = (sequelize, DataTypes) => {
  const Midia = sequelize.define(
    'Midia',
    {
      url: DataTypes.STRING,

      movieId: {
        type: DataTypes.INTEGER,
        field: 'movie_id',
      },
      typemidiaId: {
        type: DataTypes.INTEGER,
        field: 'typemidia_id',
      },
    },
    { tableName: 'midias' }
  );

  Midia.associate = (models) => {
    models.Midia.belongsTo(models.Typemidia, {
      as: 'typemidias',
      foreignKey: 'typemidiaId',
      targetKey: 'id',
    });
    models.Midia.belongsTo(models.Movie, {
      as: 'movies',
      foreignKey: 'movieId',
      targetKey: 'id',
    });
  };

  Midia.prototype.toJSON = function () {
    const midia = { ...this.get() };
    return Object.fromEntries(Object.entries(midia));
  };

  return Midia;
};
