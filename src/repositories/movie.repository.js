// const sequelize = require('sequelize');
const { literal } = require('sequelize');

const {
  Movie,
  Actor,
  Writer,
  Director,
  Category,
  Midia,
  Typemidia,
  Rate,
  Note,
  User,
} = require('../models');

module.exports = {
  list: (query) =>
    Movie.findAndCountAll({
      ...query,
      attributes: {
        include: [
          [
            // Note the wrapping parentheses in the call below!
            literal(`(
              select avg(n.note) from rates AS r 
              inner join notes AS n on n.id = r.note_id
              where r.movie_id = "Movie".id
            )`),
            'rateAvg',
          ],
        ],
      },
      include: [
        {
          model: Rate,
          as: 'rates',
          attributes: [
            'id',
            'user_id',
            'movie_id',
            'note_id',
            'title',
            'description',
            'isSpoiler',
          ],
          include: [
            {
              model: Note,
              as: 'notes',
              attributes: ['id', 'note'],
            },
            {
              model: User,
              as: 'users',
              attributes: ['name', 'email'],
            },
          ],
        },
      ],
    }),
  list2: (query) =>
    Movie.findAll({
      attributes: {
        include: [
          [
            // Note the wrapping parentheses in the call below!
            literal(`(
              select avg(n.note) from rates AS r 
              inner join notes AS n on n.id = r.note_id
              where r.movie_id = "Movie".id
            )`),
            'media',
          ],
        ],
      },
      include: [
        {
          model: Rate,
          as: 'rates',
          attributes: ['id', 'title', 'description', 'isSpoiler'],
          include: [
            {
              model: Note,
              as: 'notes',
              attributes: ['id', 'note'],
            },
            {
              model: User,
              as: 'users',
              attributes: ['name', 'email'],
            },
          ],
        },
      ],
    }),

  listQuery: (query) =>
    Movie.findAndCountAll({
      ...query,
      attributes: {
        include: [
          [
            // Note the wrapping parentheses in the call below!
            literal(`(
              select avg(n.note) from rates AS r 
              inner join notes AS n on n.id = r.note_id
              where r.movie_id = "Movie".id
            )`),
            'rateAvg',
          ],
        ],
      },
      include: [
        {
          model: Rate,
          as: 'rates',
          attributes: [
            'id',
            'user_id',
            'movie_id',
            'note_id',
            'title',
            'description',
            'isSpoiler',
          ],
          include: [
            {
              model: Note,
              as: 'notes',
              attributes: ['id', 'note'],
            },
            {
              model: User,
              as: 'users',
              attributes: ['name', 'email'],
            },
          ],
        },
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

  getById: (id) =>
    Movie.findByPk(id, {
      attributes: {
        include: [
          [
            literal(`(
            SELECT avg(n.note) from rates as rt
            INNER JOIN notes n ON rt.note_id = n.id
            WHERE rt.movie_id = ${id}
            )`),
            'avg_note',
          ],
        ],
      },
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
        {
          model: Rate,
          as: 'rates',
          group: ['note_id'],
          attributes: ['title', 'description', 'is_spoiler'],
          include: [
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
        },
      ],
    }),
  findAll: (id) =>
    Movie.findAll({
      attributes: ['title'],
    }),
  get: (params) => Movie.findOne({ where: params }),
  create: (params) => Movie.create(params),
  update: (movie) => movie.save(),
  destroy: (id) => Movie.destroy({ where: { id } }),
};
