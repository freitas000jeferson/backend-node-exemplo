const { Rate, Note, User, Movie } = require('../models');

module.exports = {
  list: (query) =>
    Rate.findAndCountAll({
      ...query,
      include: [
        {
          model: Movie,
          as: 'movies',
          attributes: {},
        },
        {
          model: Note,
          as: 'notes',
          attributes: ['note'],
        },
        {
          model: User,
          as: 'users',
          attributes: ['name', 'email'],
        },
      ],
    }),
  getById: (id) =>
    Rate.findByPk(id, {
      include: [
        {
          model: Movie,
          as: 'movies',
          attributes: {},
        },
        {
          model: Note,
          as: 'notes',
          attributes: ['note'],
        },
        {
          model: User,
          as: 'users',
          attributes: ['name', 'email'],
        },
      ],
    }),
  findAll: (query) => Rate.findAll(query),
  get: (params) => Rate.findOne({ where: params }),
  create: (params) => Rate.create(params),
  update: (rate) => rate.save(),
  destroy: (id) => Rate.destroy({ where: { id } }),
};
