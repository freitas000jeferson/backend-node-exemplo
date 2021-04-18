const { literal } = require('sequelize');
const { Movie, Category } = require('../models');

module.exports = {
  list: (query) => Category.findAndCountAll(query),
  getById: (id) =>
    Category.findByPk(id, {
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
  get: (params) => Category.findOne({ where: params }),
  create: (params) => Category.create(params),
  update: (category) => category.save(),
  destroy: (id) => Category.destroy({ where: { id } }),
};
