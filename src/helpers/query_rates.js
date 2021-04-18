const { Op } = require('sequelize');

module.exports.queryRates = (options) => {
  const { title, description, isSpoiler, movieId, noteId, userId } = options;

  const where = {};
  if (title)
    where.title = {
      [Op.like]: `%${title}%`,
    };
  if (description)
    where.description = {
      [Op.like]: `%${description}%`,
    };
  if (isSpoiler !== undefined)
    where.is_spoiler = {
      [Op.eq]: isSpoiler,
    };
  if (movieId)
    where.movie_id = {
      [Op.eq]: movieId,
    };
  if (noteId)
    where.note_id = {
      [Op.eq]: noteId,
    };
  if (userId)
    where.user_id = {
      [Op.eq]: userId,
    };

  return where;
};
