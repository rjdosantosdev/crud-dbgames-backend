// const connection = require("./connection");
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;

const connection = mysql.createConnection({
  database: "crudgames",
  user: "root",
  host: "localhost",
  password: "",
});

app.use(bodyParser.json());
app.use(cors());

app.post("/send", (request, response) => {
  connection.query(
    `INSERT INTO games (game, cost, category)VALUES ("${request.body.game}", "${request.body.cost}", "${request.body.category}")`,
    (err) => {
      if (err) {
        response.send(false);
        console.log(err);
      } else {
        response.send(true);
      }
    }
  );
});

app.put("/edit", (request, response) => {
  const id = request.body.id;
  const game = request.body.game;
  const cost = request.body.cost;
  const category = request.body.category;

  connection.query(
    "UPDATE games SET `game` = ?, `cost` = ?, `category` = ? WHERE `id` = ?",
    [game, cost, category, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        response.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (request, response) => {
  const { id } = request.params;
  connection.query("DELETE FROM games WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
});

app.get("/", (request, response) => {
  connection.query("SELECT * FROM games", (err, results) => {
    response.json(results);
  });
});

app.listen(port, () => console.log(`server rodando na porta ${port}`));
