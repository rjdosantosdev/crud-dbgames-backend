const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "dbgames",
  user: "2cbc831rg694",
  host: "eip4muxi5i2r.aws-sa-east-1-1.psdb.cloud",
  password: "pscale_pw_Wj4NmQ9bTzr4G3ruqJb4TJcYz8jaHFy-RTS4E5WbqUE",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;