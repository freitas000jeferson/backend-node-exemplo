const { Typemidia } = require('../models');

module.exports = {
  list: (query) => Typemidia.findAndCountAll(query),
  getById: (id) => Typemidia.findByPk(id),
  get: (params) => Typemidia.findOne({ where: params }),
  create: (params) => Typemidia.create(params),
  update: (typemidia) => typemidia.save(),
  destroy: (id) => Typemidia.destroy({ where: { id } }),
};
