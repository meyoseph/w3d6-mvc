const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.get("/", (req, res) => {
  const date = new Date();
  res.render("index", {
    time: date.toTimeString(),
    hour: date.getHours(),
  });
});
app.use("/css", express.static(path.join(__dirname, "css")));
app.listen(3000, () => console.log('server is running on port 3000'));
