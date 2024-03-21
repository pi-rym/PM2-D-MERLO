const axios = require("axios");

function validateForm ({title, year, director, duration, genre, rate, poster}){
  if(!title || !year || !director || !duration || !genre[0] || !rate || !poster) return ("Deben completarse todos los campos");
  if(!poster.includes("https://")) return ("El póster debe ser una URL válida");
  if(!year.length === 4) return ("El año debe contener cuatro cifras");
  if(isNaN(rate) || rate < 1 || rate > 10) return ("El ranking debe ser número del  al 10");
  return null;
}

function createMovie (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value.split(" ");
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  const newMovie = {title, year, director, duration, genre, rate, poster};

  const error = validateForm (newMovie);
   if(error) return alert(error);

   axios
   .post("http://localhost:3000/movies", newMovie)
   .then(()=> alert("Película creada"))
   .catch((error)=> alert("Error al crear la película"))
 
}


function cleanInputs (event){
  event.preventDefault();

  const titleValue = document.getElementById("title").value;
  const yearValue = document.getElementById("year").value;
  const directorValue = document.getElementById("director").value;
  const durationValue = document.getElementById("duration").value;
  const genreValue = document.getElementById("genre").value.split(" ");
  const rateValue = document.getElementById("rate").value;
  const posterValue = document.getElementById("poster").value;

  titleValue = "";
  yearValue = "";
  directorValue = "";
  durationValue = "";
  genreValue = "";
  rateValue = "";
  posterValue = "";
}

const limpiarBtn = document.getElementById("limpiarCampos");
limpiarBtn.addEventListener("click", cleanInputs);

document.getElementById("enviarMovie").addEventListener("click", createMovie);


module.exports = createMovie;
