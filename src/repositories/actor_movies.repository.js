const { ActorMovie } = require('../models');

module.exports = {
  list: (query) => ActorMovie.findAndCountAll(query),
  getById: (id) => ActorMovie.findByPk(id),
  get: (params) => ActorMovie.findOne({ where: params }),
  create: (params) => ActorMovie.create(params),
  update: (actorMovie) => actorMovie.save(),
  destroy: (id) => ActorMovie.destroy({ where: { id } }),
};
