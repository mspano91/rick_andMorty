const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

//el force true dropea la base de datos, cuando la db esta ok, la pongo en false

server.listen(PORT, () => {
  conn.sync({ force: true });
  console.log("Server raised in port: " + PORT);
});
