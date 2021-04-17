const yup = require('yup');

const create = {
  body: yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    isSpoiler: yup.boolean().required(),
    movieId: yup.number().required(),
    noteId: yup.number().required(),
    userId: yup.number().required(),
  }),
};

const list = {
  query: yup.object().shape({
    title: yup.string().default(''),
    description: yup.string().default(''),
    isSpoiler: yup.boolean().default(undefined),
    movieId: yup.number().default(undefined),
    noteId: yup.number().default(undefined),
    userId: yup.number().default(undefined),

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
    title: yup.string().required(),
    description: yup.string().required(),
    isSpoiler: yup.boolean().required(),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.rates = {
  create,
  list,
  get,
  update,
  destroy,
};
