// const { Op } = require('sequelize');
const {
  Movie,
  Actor,
  Writer,
  Director,
  Category,
  Midia,
  Typemidia,
} = require('../models');

module.exports = {
  list: (query) => Movie.findAndCountAll(query),
  getById: (id) =>
    Movie.findByPk(id, {
      include: [
        {
          model: Actor,
          as: 'actors',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
        {
          model: Writer,
          as: 'writers',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
        {
          model: Director,
          as: 'directors',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
        {
          model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
        {
          model: Midia,
          as: 'midias',
          attributes: ['url'],
          include: [
            {
              model: Typemidia,
              as: 'typemidias',
              attributes: ['type'],
            },
          ],
        },
      ],
    }),
  get: (params) => Movie.findOne({ where: params }),
  create: (params) => Movie.create(params),
  update: (movie) => movie.save(),
  destroy: (id) => Movie.destroy({ where: { id } }),
};
