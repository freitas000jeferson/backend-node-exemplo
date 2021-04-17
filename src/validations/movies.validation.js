const yup = require('yup');

const create = {
  body: yup.object().shape({
    title: yup.string().required(),
    synopsis: yup.string().required(),
    releaseDate: yup.date().required(),
    ageRating: yup.number().integer().required(),
    duration: yup.number().integer().required(),
    isActive: yup.boolean().default(() => true),
  }),
};

const list = {
  query: yup.object().shape({
    title: yup.string().default(''),
    synopsis: yup.string().default(''),
    beginDate: yup.date().default(new Date()),
    endDate: yup.date().default(new Date()),

    ageRating: yup.number().integer().default(0),
    duration: yup.number().integer().default(0),
    isActive: yup.boolean().default(() => true),
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
    synopsis: yup.string().required(),
    releaseDate: yup.date().required(),
    ageRating: yup.number().integer().required(),
    duration: yup.number().integer().required(),
    isActive: yup.boolean().default(() => true),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.movies = {
  create,
  list,
  get,
  update,
  destroy,
};
