const renderPelis = require("./renderPelis");
const axios = require("axios");

const getMovies = async ()=> {
    try {
      const { data } = await axios.get("http://localhost:3000/movies");
      data.forEach(renderPelis);
    } catch (error) {
      console.log("La petición a la URL no se realizó correctamente");
      console.log(error.message);
    }
  }
  

document.addEventListener("DOMContentLoaded", ()=>{
    getMovies();
})

