const mysql = require("mysql2");
const connection = mysql.createConnection({
  database: "dbgames",
  user: "l8zhjw7e2sx5",
  host: "eip4muxi5i2r.aws-sa-east-1-1.psdb.cloud",
  password: "pscale_pw_qapjOt6XGzhwH4kefmtKErTK0szbLYbacbVixnYBgx4",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = connection;