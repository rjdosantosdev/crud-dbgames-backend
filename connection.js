const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: process.env.DATABASE,
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;
