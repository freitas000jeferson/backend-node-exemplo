const { Op } = require('sequelize');

module.exports.queryList = (options) => {
  const {
    title,
    synopsis,
    beginDate,
    endDate,
    ageRating,
    duration,
    isActive,
    actor,
    director,
    writer,
    category,
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

  if (actor)
    where['$"actors".name$'] = {
      [Op.like]: `%${actor}%`,
    };
  if (director)
    where['$"directors".name$'] = {
      [Op.like]: `%${director}%`,
    };
  if (writer)
    where['$"writers".name$'] = {
      [Op.like]: `%${writer}%`,
    };
  if (category)
    where['$"categories".name$'] = {
      [Op.like]: `%${category}%`,
    };
  return where;
};
