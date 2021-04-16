const { Rate } = require('../models');

module.exports = {
  list: (query) => Rate.findAndCountAll(query),
  getById: (id) => Rate.findByPk(id),
  get: (params) => Rate.findOne({ where: params }),
  create: (params) => Rate.create(params),
  update: (rate) => rate.save(),
  destroy: (id) => Rate.destroy({ where: { id } }),
};
