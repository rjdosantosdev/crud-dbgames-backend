const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "crudgames",
  user: "zrf0w2gvjtyi",
  host: "ejutty9a1eh8.us-east-3.psdb.cloud",
  password: "pscale_pw_6jbSKtZy39OMj5l0uME1jLsvKziWhjPEfOlg0yc4NcE",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;
