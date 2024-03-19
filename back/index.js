const app = require("./src/server");
const dbConetion = require("./src/config/dbConection")


dbConetion() 

.then(()=>{
    const PORT = 3000
    app.listen(PORT, ()=>console.log(`Servidor escuchando en el puerto ${PORT}`))
})
.catch((err)=>console.log("Tenemos problemas con la conexión a la DB", err.message));

module.exports = app;