const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const util = require("./util/helper");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

const auth = require("./routes/auth");
const api = require("./routes/api");

app.use(express.static(path.join(__dirname, "..", "react-app", "build")));
app.get("/", (req, res, next) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "..", "react-app", "build", "index.html"));
});

// app.use(express.static("public"));
// app.set("views", path.join(__dirname, "../views"));
// app.set("view engine", "hbs");

app.use(auth);
app.use(api);

app.listen(process.env.PORT || 3000, util.logImportantURLs);
