const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let plNames = ["c", "c++", "python"];

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running  at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  //   res.status(200).send("<h1>welcome to ejs</h1>");
  res.status(200).render("index", { plNames: plNames, pageTitle: "Home Page" });
});

app.post("/", (req, res) => {
  // console.log(req.body.plName);
  // let data = req.body.plName;
  // plNames.push(data);
  // res.status(201).render("index", { plNames: plNames, pageTitle: "Home Page" });
  const plName = req.body.plName;
  // console.log(plName);
  plNames.push(plName);
  res.status(201).render("index", { plNames: plNames, pageTitle: "Home Page" });
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact", { pageTitle: "Contact Me" });
});
