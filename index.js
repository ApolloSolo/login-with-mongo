const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const dbURL = `mongodb://localhost:27017/stuff`;
const routes = require("./routes/index");
const path = require("path");
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(methodOverride('_method'));

app.engine('ejs', ejsMate); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//app.set('routes', path.join(__dirname, 'routes'));

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Connceted to port " + PORT);
});
