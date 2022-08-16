const connection = require("./connection");
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;

// const connection = mysql.createConnection({
//   database: "dbgames",
//   user: "root",
//   host: "localhost",
//   password: "",
// });

app.use(bodyParser.json());
app.use(cors());

app.post("/send", (request, response) => {
  const jogo = request.body.jogo;
  const preco = request.body.preco;
  const genero = request.body.newGenero;
  const idgenero = request.body.idgenero;
  connection.query(
    `INSERT INTO dbgames.jogos (jogo, preco, genero) VALUES ('${jogo}', '${preco}', '${genero}')`,
    (err, result) => {
      if (err) {
        response.send(false);
        console.log(err);
      } else {
        response.send(true);
        console.log(result);
      }
    }
  );
});

app.put("/edit", (request, response) => {
  const id = request.body.id;
  const jogo = request.body.jogo;
  const preco = request.body.preco;
  const genero = request.body.genero;
  console.log(genero);

  connection.query(
    "UPDATE jogos SET `jogo` = ?, `preco` = ?, `genero` = (SELECT id_genero FROM generos WHERE genero = ?)  WHERE `id_jogo` = ?",
    [jogo, preco, genero, id],
    (err, result) => {
      if (err) {
        console.log(err);
        console.log(id, jogo, preco, genero);
      } else {
        response.send(result);
        console.log(result);
        console.log(id, jogo, preco, genero);
      }
    }
  );
});

// app.delete("/delete/:id", (request, response) => {
//   const { id } = request.params;
//   connection.query(
//     "DELETE FROM jogos WHERE j.cod_jogo = ?",
//     [id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         response.send(result);
//       }
//     }
//   );
// });

app.get("/", (request, response) => {
  connection.query(
    "SELECT j.id_jogo, j.jogo, j.preco, g.id_genero, g.genero FROM jogos j JOIN generos g ON j.genero = g.id_genero",
    (err, results) => {
      if (err) {
        console.log("erro join" + err);
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
