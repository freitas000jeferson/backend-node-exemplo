const { Note } = require('../models');

module.exports = {
  list: (query) => Note.findAndCountAll(query),
  getById: (id) => Note.findByPk(id),
  get: (params) => Note.findOne({ where: params }),
  create: (params) => Note.create(params),
  update: (note) => note.save(),
  destroy: (id) => Note.destroy({ where: { id } }),
};
