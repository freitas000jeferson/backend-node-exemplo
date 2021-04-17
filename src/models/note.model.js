module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    'Note',
    {
      note: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
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
