module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define(
    'Rate',
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      isSpoiler: {
        type: DataTypes.BOOLEAN,
        field: 'is_spoiler',
      },
      movieId: { type: DataTypes.INTEGER, field: 'movie_id' },
      noteId: { type: DataTypes.INTEGER, field: 'note_id' },
      userId: { type: DataTypes.INTEGER, field: 'user_id' },
    },
    { tableName: 'rates' }
  );

  Rate.associate = (models) => {
    models.Rate.belongsTo(models.Movie, {
      as: 'movies',
      foreignKey: 'movieId',
      targetKey: 'id',
    });
    models.Rate.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId',
      targetKey: 'id',
    });
    models.Rate.belongsTo(models.Note, {
      as: 'notes',
      foreignKey: 'noteId',
      targetKey: 'id',
    });
  };

  Rate.prototype.toJSON = function () {
    const rate = { ...this.get() };
    return Object.fromEntries(Object.entries(rate));
  };
  return Rate;
};
