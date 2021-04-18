const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.NODE_ENV !== 'test'
    ? process.env.DB_NAME
    : `${process.env.DB_NAME}-test`,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
module.exports = {
  listQuery: (asd) =>
    sequelize.query('SELECT * FROM users WHERE id = 1', {
      type: QueryTypes.SELECT,
    }),
};
