const express = require("express");
const router = require("./rutas/");

const app = express();
app.use(router);

module.exports = app;