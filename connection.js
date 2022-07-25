const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "dbgames",
  user: "zrf0w2gvjtyi",
  host: "eip4muxi5i2r.aws-sa-east-1-1.psdb.cloud",
  password: "pscale_pw_6jbSKtZy39OMj5l0uME1jLsvKziWhjPEfOlg0yc4NcE",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;
