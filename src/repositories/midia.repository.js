const { Midia } = require('../models');

module.exports = {
  list: (query) => Midia.findAndCountAll(query),
  getById: (id) => Midia.findByPk(id),
  get: (params) => Midia.findOne({ where: params }),
  create: (params) => Midia.create(params),
  update: (midia) => midia.save(),
  destroy: (id) => Midia.destroy({ where: { id } }),
};
