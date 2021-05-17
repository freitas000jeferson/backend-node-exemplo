const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../../.env') });

module.exports = {
  database: 'd31357h7251i0b',
  host: 'ec2-34-202-54-225.compute-1.amazonaws.com',
  username: 'wcrlrwvxttnneb',
  password: 'fc946f829ef570fbcc42ed2178e7988c26b26cd601a84999551421b254c9e567',
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database:
  //   process.env.NODE_ENV !== 'test'
  //     ? process.env.DB_NAME
  //     : `${process.env.DB_NAME}-test`,
  // host: process.env.DB_HOST,
  dialect: 'postgres',
  protocol: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  // .
};
