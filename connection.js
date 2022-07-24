const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "crudgames",
  user: "ds6gysi3g6tp",
  host: "ejutty9a1eh8.us-east-3.psdb.cloud",
  password: "pscale_pw_KaemwjD0YpRrxFPfOqp5fJr6LbCqk7KDYoThkeG0Bc8",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;
