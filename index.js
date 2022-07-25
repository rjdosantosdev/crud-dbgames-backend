const connection = require("./connection");
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/get", (req, res) => {
  const game = req.body.Game;
  const price = req.body.Price;
  const category = req.body.Category;

  const SQL = "INSERT INTO games (`game`, `cost`, `category`) VALUES (?, ?, ?)";
  connection.query(SQL, [game, price, category], (err, results) => {
    if (err) throw console.log(err);
    else {
      results;
    }
  });
});

app.get("/games", (req, res) => {
  connection.query("SELECT * FROM games", (err, results) => {
    res.send(results);
  });
});

app.listen(port, () => console.log(`server rodando na porta ${port}`));
