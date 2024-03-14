const moviesService = require('../servicios/moviesService');


const moviesController = async (req, res) =>{
  try{
    const movies = await moviesService.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send(error.message)
  }  
}

module.exports = moviesController;