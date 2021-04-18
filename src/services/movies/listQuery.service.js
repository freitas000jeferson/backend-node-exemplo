const { movieRepository } = require('../../repositories');
const { pagination, queryList } = require('../../helpers');

module.exports.listQuery = async (options) => {
  const query = pagination(options);
  query.where = queryList(options);

  const { count, rows } = await movieRepository.listQuery(query);

  const totalPages = Math.ceil(count / options.perPage);

  return {
    metadata: {
      total: count,
      totalPages,
      ...(options.page > 1 && { previousPage: options.page - 1 }),
      ...(options.page < count &&
        options.page < totalPages && { nextPage: options.page + 1 }),
    },
    data: rows,
  };
};
