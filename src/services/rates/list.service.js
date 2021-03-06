const { rateRepository } = require('../../repositories');
const { queryHelper, queryRates } = require('../../helpers');

module.exports.list = async (options) => {
  const query = queryHelper(options);
  query.where = queryRates(options);

  const { count, rows } = await rateRepository.list(query);
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
