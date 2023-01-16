//import required modules
const express = require("express");
const path = require("path");

//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//setup public folders
app.use(express.static(path.join(__dirname, "public")));

var links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sign In",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

//Express app
app.get("/", (req, res) => {
  res.render("index", { title: "Home", menu: links });
});
app.get("/contact-us", (req, res) => {
  res.render("contact-us", { title: "Contact Us", menu: links });
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
