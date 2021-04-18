const { literal } = require('sequelize');
const { Movie, Director } = require('../models');

module.exports = {
  list: (query) => Director.findAndCountAll(query),
  getById: (id) =>
    Director.findByPk(id, {
      include: [
        {
          model: Movie,
          as: 'movies',
          attributes: {
            include: [
              [
                literal(`(
                select avg(n.note) from rates AS r 
                inner join notes AS n on n.id = r.note_id
                where r.movie_id = "movies".id
              )`),
                'rateAvg',
              ],
            ],
          },
          through: {
            attributes: [],
          },
          // include: [
          //   {
          //     model: Rate,
          //     as: 'rates',
          //     attributes: ['id', 'title', 'description', 'isSpoiler'],
          //     include: [
          //       {
          //         model: Note,
          //         as: 'notes',
          //         attributes: ['id', 'note'],
          //       },
          //     ],
          //   },
          // ],
        },
      ],
    }),
  get: (params) => Director.findOne({ where: params }),
  create: (params) => Director.create(params),
  update: (director) => director.save(),
  destroy: (id) => Director.destroy({ where: { id } }),
};
