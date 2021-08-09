const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "unknown";
  }
  res.render("result", { name: name, age: age });
});

app.use("/css", express.static(path.join(__dirname, "css")));
app.listen(3000, () => console.log('server is running at port 3000...'));
