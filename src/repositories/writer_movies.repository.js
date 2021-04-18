const { WriterMovie } = require('../models');

module.exports = {
  list: (query) => WriterMovie.findAndCountAll(query),
  getById: (id) => WriterMovie.findByPk(id),
  get: (params) => WriterMovie.findOne({ where: params }),
  create: (params) => WriterMovie.create(params),
  update: (writerMovie) => writerMovie.save(),
  destroy: (id) => WriterMovie.destroy({ where: { id } }),
};
