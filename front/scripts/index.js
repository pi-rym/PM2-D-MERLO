
const dataPeliculas = () => {
    $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {

        const pelisContenedor = document.getElementById('pelisContenedor');

        function renderPelis(pelicula) {

            const tarjetaPelicula = document.createElement("div");
            tarjetaPelicula.classList.add("peliCard");

            tarjetaPelicula.innerHTML = `
            <img src="${pelicula.poster}" alt="${pelicula.title}">
            <h3>${pelicula.title} (${pelicula.year})</h3>
            <p>${pelicula.director}</p>
            <p>${pelicula.duration}</p>
            <p>${pelicula.genre}</p>
            <p>${pelicula.rate}</p>
            `

            return tarjetaPelicula;
        }

        data.forEach(pelicula => {
            const tarjeta = renderPelis(pelicula);
            pelisContenedor.appendChild(tarjeta);
        });
    })
}




