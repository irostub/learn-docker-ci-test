const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(bodyParser.json());

db.pool.query(
  `CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT, 
    PRIMARY KEY (id)
)`,
  (err, results, fileds) => {
    console.log("results", results);
  }
);

app.get("/api/value", function (req, res) {
  db.pool.query("select * from lists;", (error, results) => {
    if (error) {
      return res.status(500).send(error);
    } else {
      return res.status(200).send(results);
    }
  });
});

app.post("/api/value", function (req, res) {
  db.pool.query(
    `insert into lists(value) values("${req.body.value}")`,
    (error, results) => {
      if (error) {
        return res.status(500).send(error);
      } else {
        return res.json({ success: true, value: req.body.value });
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
