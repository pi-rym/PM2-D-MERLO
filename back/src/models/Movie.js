const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    título: String,
    año: Number,
    director: String,
    duración: String,
    género: Array,
    ranking: Number,
    poster: String,
})

const Movie = mongoose.model("Movie",movieSchema)
module.exports = Movie;