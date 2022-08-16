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

connection.query(
  "CREATE TABLE IF NOT EXISTS jogos (id_jogo INT NOT NULL AUTO_INCREMENT, jogo VARCHAR(60) NOT NULL, preco VARCHAR(60) NOT NULL, genero INT NOT NULL, PRIMARY KEY(id_jogo), FOREIGN KEY (`genero`) REFERENCES `generos` (`id_genero`), ENGINE=InnoDB DEFAULT CHARSET=utf8"
);

module.exports = connection;
