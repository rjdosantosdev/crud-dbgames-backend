const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "dbgames",
  user: "i5yal2hktajs",
  host: "eip4muxi5i2r.aws-sa-east-1-1.psdb.cloud",
  password: "pscale_pw_aA7Y3PkTQRS5fJOb6pBkrR--y5eBB1FSt3n25g6R8n0",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;