const { Op } = require('sequelize');

module.exports.queryNotes = (options) => {
  const { note, op } = options;
  if (!note) return {};
  const [, opValue] = op.trim().split(':');

  return {
    note: {
      [Op[opValue]]: note,
    },
  };
};
