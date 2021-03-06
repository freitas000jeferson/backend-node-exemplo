const yup = require('yup');

const create = {
  body: yup.object().shape({
    url: yup.string().required(),
    movieId: yup.number().integer().required(),
    typemidiaId: yup.number().integer().required(),
  }),
};

const list = {
  query: yup.object().shape({
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
    url: yup.string().required(),
    movieId: yup.number().integer().required(),
    typemidiaId: yup.number().integer().required(),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.midia = {
  create,
  list,
  get,
  update,
  destroy,
};
