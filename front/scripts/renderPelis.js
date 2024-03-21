
const pelisContenedor = document.getElementById('pelisContenedor');

function renderPelis(pelicula) {
     
          const tarjetaPelicula = document.createElement("div");
          tarjetaPelicula.classList.add("peliCard");

          const tarjetaPeliculaCara = document.createElement("div");
          tarjetaPeliculaCara.classList.add("peliCardCara");
          tarjetaPeliculaCara.innerHTML = `<img class="poster" src="${pelicula.poster}" alt="${pelicula.title}">`;
          console.log(pelicula.title)

          const tarjetaPeliculaAtras = document.createElement("div");
          tarjetaPeliculaAtras.classList.add("peliCardAtras");
          tarjetaPeliculaAtras.innerHTML = `
          <h3 class="title">${pelicula.title} (${pelicula.year})</h3>
          <p class="infoPeli">Dirigida por: ${pelicula.director}</p>
          <p class="infoPeli">Duración: ${pelicula.duration}</p>
          <p class="infoPeli">Género: ${pelicula.genre}</p>
          <p class="infoPeli">${pelicula.rate}</p>
          `;

          tarjetaPelicula?.appendChild(tarjetaPeliculaCara);
          tarjetaPelicula?.appendChild(tarjetaPeliculaAtras);
          pelisContenedor?.appendChild(tarjetaPelicula);

    
}

module.exports = renderPelis;