module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    'Notes',
    {
      name: DataTypes.INTEGER,
    },
    { tableName: 'notes' }
  );

  Note.associates = (models) => {
    models.Note.hasMany(models.Rate, {
      as: 'rates',
      foreignKey: 'noteId',
      sourceKey: 'id',
    });
  };

  Note.prototype.toJSON = function () {
    const note = { ...this.get() };
    return Object.fromEntries(Object.entries(note));
  };
  return Note;
};
