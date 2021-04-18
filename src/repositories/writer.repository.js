const { literal } = require('sequelize');
const { Movie, Writer } = require('../models');

module.exports = {
  list: (query) => Writer.findAndCountAll(query),
  getById: (id) =>
    Writer.findByPk(id, {
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
  get: (params) => Writer.findOne({ where: params }),
  create: (params) => Writer.create(params),
  update: (writer) => writer.save(),
  destroy: (id) => Writer.destroy({ where: { id } }),
};
