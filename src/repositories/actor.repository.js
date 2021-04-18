const { literal } = require('sequelize');
const { Movie, Actor } = require('../models');

module.exports = {
  list: (query) => Actor.findAndCountAll(query),
  getById: (id) =>
    Actor.findByPk(id, {
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
  get: (params) => Actor.findOne({ where: params }),
  create: (params) => Actor.create(params),
  update: (actor) => actor.save(),
  destroy: (id) => Actor.destroy({ where: { id } }),
};
