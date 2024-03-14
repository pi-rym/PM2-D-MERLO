const {Router} = require("express");
const moviesRoute = require("./moviesRoute");

const router = Router();

router.use("/movies", moviesRoute); //.getMovies

module.exports = router;