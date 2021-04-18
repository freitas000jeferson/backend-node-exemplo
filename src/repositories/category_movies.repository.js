const { CategoryMovie } = require('../models');

module.exports = {
  list: (query) => CategoryMovie.findAndCountAll(query),
  getById: (id) => CategoryMovie.findByPk(id),
  get: (params) => CategoryMovie.findOne({ where: params }),
  create: (params) => CategoryMovie.create(params),
  update: (dategoryMovie) => dategoryMovie.save(),
  destroy: (id) => CategoryMovie.destroy({ where: { id } }),
};
