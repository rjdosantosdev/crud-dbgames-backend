const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();
const db = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');
db.end();

app.post("/get", (req, res) => {
  const game = req.body.Game
  const price = req.body.Price;
  const category = req.body.Category;

  const SQL = "INSERT INTO games (`game`, `cost`, `category`) VALUES (?, ?, ?)";
  db.query(SQL, [game, price, category], (err, results) => {
    if (err) throw console.log(err);
    else {
      results;
    }
  })
});

app.get("/games", (req, res) => {
  db.query("SELECT * FROM games", (err, results) => {
    res.send(results);
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env));
