const {getMovies, postMovies}= require('../servicios/moviesService');


  const getMoviesController = async (req, res) =>{
    try{
    const movies = await getMovies();
    res.status(200).json(movies);
    } catch (error) {
    res.status(500).json(error.message) 
    }  
  }

  const postMoviesController = async (req, res) =>{
    try {
      const {title, year, director, duration, genre, rate, poster} = req.body;
      const savedMovie = await postMovies({title, year, director, duration, genre, rate, poster});
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  module.exports = {
    getMoviesController,
    postMoviesController
  }




