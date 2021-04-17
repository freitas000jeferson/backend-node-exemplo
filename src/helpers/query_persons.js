const { Op } = require('sequelize');

module.exports.queryPersons = (options) => {
  const { name } = options;
  if (!name) return {};

  return { name: { [Op.ilike]: `%${name}%` } };
};
