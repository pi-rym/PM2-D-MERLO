const axios = require("axios");
const {Movies} = require("../types/classMovie")

module.exports = {
   getAllMovies: async () => {
    try {
      const { data } = await axios.get('https://students-api.up.railway.app/movies');
      const movies = data.map((movie)=>new Movies(movie));
      return movies;
  } catch (error) {
      throw new Error(error);
  }
   }
};