module.exports = (sequelize, DataTypes) => {
  const Typemidia = sequelize.define(
    'Typemidia',
    {
      type: DataTypes.STRING,
    },
    { tableName: 'typemidias' }
  );
  Typemidia.associate = (models) => {
    models.Typemidia.hasMany(models.Midia, {
      as: 'midias',
      foreignKey: 'typemidiaId',
      sourceKey: 'id',
    });
  };

  Typemidia.prototype.toJSON = function () {
    const typemida = { ...this.get() };
    return Object.fromEntries(Object.entries(typemida));
  };
  return Typemidia;
};
