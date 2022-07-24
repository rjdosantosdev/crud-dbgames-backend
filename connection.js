const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "dbgames",
  user: "ad0n4g9th30r",
  host: "eip4muxi5i2r.aws-sa-east-1-1.psdb.cloud",
  password: "pscale_pw_Dhb_QKB_5yQFd8-hbhulqr5wfJOq2WD1d9kipABu5eo",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;