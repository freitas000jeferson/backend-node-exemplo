const yup = require('yup');

const create = {
  body: yup.object().shape({
    note: yup.number().integer().required(),
  }),
};

const list = {
  query: yup.object().shape({
    note: yup.number().integer(),
    op: yup
      .string()
      .default('note:eq')
      .matches(
        /[:](eq|gt|gte|lt|lte)/i,
        "order must be one of the following: 'eq' or 'gt' or 'gte' or 'lt' or 'lte' "
      ),
    page: yup.number().integer().default(1),
    perPage: yup.number().integer().default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(
        /[:](asc|desc)/i,
        "sorting order must be one of the following: 'asc' or 'desc'"
      ),
  }),
};

const get = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    note: yup.number().required(),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.note = {
  create,
  list,
  get,
  update,
  destroy,
};
