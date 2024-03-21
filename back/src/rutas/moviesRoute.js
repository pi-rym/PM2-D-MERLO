const {Router} = require("express");
const { getMoviesController, postMoviesController } = require("../controladores/moviesController");
const validateMovie = require("../middlewares/validateMovie");

const moviesRoute = Router();

moviesRoute.get("/", getMoviesController);
moviesRoute.post("/", validateMovie, postMoviesController);

module.exports = moviesRoute;