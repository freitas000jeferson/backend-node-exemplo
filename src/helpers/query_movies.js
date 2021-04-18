const { Op } = require('sequelize');

module.exports.queryMovies = (options) => {
  const {
    title,
    synopsis,
    beginDate,
    endDate,
    ageRating,
    duration,
    isActive,
  } = options;

  const where = {};
  if (title)
    where.title = {
      [Op.like]: `%${title}%`,
    };
  if (synopsis)
    where.synopsis = {
      [Op.like]: `%${synopsis}%`,
    };
  if (beginDate)
    where.release_date = {
      [Op.gte]: beginDate,
    };
  if (endDate)
    where.release_date = {
      [Op.lte]: endDate,
    };
  if (ageRating)
    where.age_rating = {
      [Op.gte]: ageRating,
    };
  if (duration)
    where.duration = {
      [Op.eq]: duration,
    };
  if (isActive)
    where.is_active = {
      [Op.eq]: isActive,
    };

  return where;
};
