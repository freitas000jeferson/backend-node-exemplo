const { create } = require('./create.service');
const { get } = require('./get.service');
const { destroy } = require('./destroy.service');

module.exports = {
  get,
  create,
  destroy,
};
