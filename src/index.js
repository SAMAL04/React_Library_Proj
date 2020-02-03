const express = require("express");
const app = express();
const MongoDB = require("./config/mongooseDB");
const User = require("./models/users");
const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
