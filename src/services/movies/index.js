const { create } = require('./create.service');
const { list } = require('./list.service');
const { get } = require('./get.service');
const { update } = require('./update.service');
const { destroy } = require('./destroy.service');
const { enable } = require('./enable.service');
const { desable } = require('./desable.service');

module.exports = {
  list,
  get,
  create,
  update,
  destroy,
  enable,
  desable,
};
