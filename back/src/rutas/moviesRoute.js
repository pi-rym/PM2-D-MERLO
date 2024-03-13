const {Router} = require("express");
const moviesController = require("../controladores/moviesController");

const moviesRoute = Router();

moviesRoute.get("/", moviesController);

module.exports = moviesRoute;