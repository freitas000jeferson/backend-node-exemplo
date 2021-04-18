const { DirectorMovie } = require('../models');

module.exports = {
  list: (query) => DirectorMovie.findAndCountAll(query),
  getById: (id) => DirectorMovie.findByPk(id),
  get: (params) => DirectorMovie.findOne({ where: params }),
  create: (params) => DirectorMovie.create(params),
  update: (directorMovie) => directorMovie.save(),
  destroy: (id) => DirectorMovie.destroy({ where: { id } }),
};
