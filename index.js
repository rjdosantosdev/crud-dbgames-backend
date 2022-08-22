// const connection = require("./connection");
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { response } = require("express");
const app = express();
const port = 8080;

const connection = mysql.createConnection({
  database: "dbgames",
  user: "root",
  host: "localhost",
  password: "",
});

app.use(bodyParser.json());
app.use(cors());

app.post("/send", (request, response) => {
  const jogo = request.body.jogo;
  const preco = request.body.preco;
  const genero = request.body.genero;
  const idgenero = request.body.idgenero;

  connection.query(
    `SELECT id_genero FROM generos WHERE genero = '${genero}'`,
    (err, result) => {
      if (err) {
        console.log(err);
        response.send(err);
      } else {
        if (result.length === 0) {
          connection.query(
            `INSERT INTO generos (genero) VALUES ('${genero}')`,
            (err, result, fields) => {
              if (err) {
                console.log(err);
                console.log(fields);
              } else {
                console.log(result.insertId, " id do genero");
                if (result.insertId) {
                  connection.query(
                    `INSERT INTO jogos (jogo, preco, genero) VALUES ('${jogo}', '${preco}', '${result.insertId}')`,
                    (err, result, fields) => {
                      if (err) {
                        console.log(err);
                        console.log(result);
                        console.log(fields);
                      } else {
                        console.log(result);
                        console.log(result.insertId, " id do jogo");
                        response.json(result);
                      }
                    }
                  );
                }
              }
            }
          );
        } else {
          console.log("passei por aqui..");
          connection.query(
            `INSERT INTO jogos (jogo, preco, genero) VALUES ('${jogo}', '${preco}', '${idgenero}')`,
            (err, result) => {
              if (err) {
                console.log(err);
                console.log(result);
              } else {
                console.log(result);
                console.log(result.insertId, " id do jogo");
                response.json(result);
              }
            }
          );
        }
      }
    }
  );
});

app.put("/edit", (request, response) => {
  const { idjogo } = request.body;
  const { idgenero } = request.body;
  const { jogo } = request.body;
  const { preco } = request.body;
  const { genero } = request.body;

  connection.query(
    // Se nao existe na base o genero, me retorna [] e 0, se existe, retorna o id e 1.
    `SELECT id_genero FROM generos WHERE id_genero = '${idgenero}'`,
    (err, result) => {
      if (err) {
        console.log(err);
        response.send(err);
      } else {
        // Caso, exista, preciso atualizar o genero/categoria
        if (result.length === 1) {
          connection.query(
            `
          UPDATE generos SET genero = '${genero}' WHERE id_genero = '${idgenero}'`,
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                console.log("se entrou aqui, entao esta atualizando o jogo..");
                connection.query(
                  `UPDATE jogos SET jogo = '${jogo}', preco = '${preco}', genero = '${idgenero}' WHERE id_jogo = '${idjogo}'`,
                  (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(result);
                      response.json(result);
                    }
                  }
                );
              }
            }
          );
        }
      }
    }
  );

  // connection.query(
  //   "UPDATE jogos SET `jogo` = ?, `preco` = ?, `genero` = (SELECT genero FROM generos WHERE genero = ?) WHERE `id_jogo` = ?",
  //   [jogo, preco, genero, idjogo],
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       response.send(result);
  //       console.log(result);
  //     }
  //   }
  // );
});

app.delete("/delete/:idjogo", (request, response) => {
  const { idjogo } = request.params;
  console.log(idjogo);
  connection.query(
    "DELETE FROM jogos WHERE id_jogo = ?",
    [idjogo],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        response.send(result);
        console.log(result);
      }
    }
  );
});

app.get("/", (request, response) => {
  connection.query(
    "SELECT j.id_jogo, j.jogo, j.preco, g.id_genero, g.genero FROM jogos j JOIN generos g ON j.genero = g.id_genero",
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        response.json(results);
      }
    }
  );
});

app.get("/generos", (request, response) => {
  connection.query("SELECT * FROM generos;", (err, results) => {
    if (err) console.log("erro generos" + err);
    else response.json(results);
  });
});

app.listen(port, () => console.log(`server rodando na porta ${port}`));
