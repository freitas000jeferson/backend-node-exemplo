const { Writer } = require('../models');

module.exports = {
  list: (query) => Writer.findAndCountAll(query),
  getById: (id) => Writer.findByPk(id),
  get: (params) => Writer.findOne({ where: params }),
  create: (params) => Writer.create(params),
  update: (writer) => writer.save(),
  destroy: (id) => Writer.destroy({ where: { id } }),
};
