const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const morgan = require("morgan");

server.use(express.json());
server.use(morgan("dev"));
//activamos el middleware morgan para que nos avise que se ejectura GET, POST

server.use((req, res, next) => {
  //esta configuracion es para todos igual, es para darle los permisos
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Crea un middleware que agregue el string "/rickandmorty" antes de cada una de tus rutas.
server.use("/rickandmorty", router);

//exporting express server and with the next lines, we already built a server
server.listen(PORT, () => {
  console.log("Server raised in port/anda re piola: " + PORT);
});
