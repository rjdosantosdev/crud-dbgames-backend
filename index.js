// const connection = require("./connection");
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

const connection = mysql.createConnection({
  database: "crudgames",
  user: "root",
  host: "localhost",
  password: "",
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/send", (req, res) => {
  const game = req.body.Game;
  const price = req.body.Price;
  const category = req.body.Category;

  const form = req.register;
  console.log(form);

  const SQL = "INSERT INTO games (`game`, `cost`, `category`) VALUES (?, ?, ?)";
  connection.query(SQL, [game, price, category], (err) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

app.get("/games", (req, res) => {
  connection.query("SELECT * FROM games", (err, results) => {
    res.send(results);
  });
});

app.listen(port, () => console.log(`server rodando na porta ${port}`));
