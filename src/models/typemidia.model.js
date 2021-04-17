module.exports = (sequelize, DataTypes) => {
  const Typemidia = sequelize.define(
    'Typemidia',
    {
      type: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
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
