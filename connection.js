const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "dbgames",
  user: "6y3514rb6mc4",
  host: "eip4muxi5i2r.aws-sa-east-1-1.psdb.cloud",
  password: "pscale_pw_YmQH35iXqD8odwoWO3Egnl-pxvxr8j6RuruU-_crtuY",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;