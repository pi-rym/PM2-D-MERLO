const renderPelis = require("./renderPelis");
const axios = require("axios");


const url = "http://localhost:3000/movies";
axios.get(url)
.then(({data})=>data.forEach(renderPelis))
.catch((error)=>{
console.log("La petición a la url no se realizó correctamente");
console.log(error.message);
});

