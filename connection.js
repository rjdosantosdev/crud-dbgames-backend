const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "dbgames",
  user: "yx17be1o247p",
  host: "eip4muxi5i2r.aws-sa-east-1-1.psdb.cloud",
  password: "pscale_pw_AljQ9CHe_VbHsIajOUHIj5wPvlpA75_IieRKgfn0I54",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;