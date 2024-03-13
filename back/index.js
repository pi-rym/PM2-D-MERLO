const app = require("./src/server");

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

// app.get("/movies", (req, res)=>{
//    res.send("Próximamente estarán disponibles los datos de películas");
// })

module.exports = app;