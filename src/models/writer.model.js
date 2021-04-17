module.exports = (sequelize, DataTypes) => {
  const Writer = sequelize.define(
    'Writer',
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
    { tableName: 'writers' }
  );
  Writer.associate = (models) => {
    models.Writer.belongsToMany(models.Movie, {
      through: 'writer_movies',
      as: 'movies',
      foreignKey: 'writer_id',
    });
  };
  Writer.prototype.toJSON = function () {
    const writer = { ...this.get() };
    return Object.fromEntries(Object.entries(writer));
  };
  return Writer;
};
